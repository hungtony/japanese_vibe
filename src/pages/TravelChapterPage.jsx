import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, ChevronDown, Copy, CheckCheck, Lightbulb, Volume2, Square } from 'lucide-react'
import useStore from '../store/useStore'
import { getTravelChapterById } from '../data/travelChapters'
import FuriganaText from '../components/FuriganaText'
import { useSpeech } from '../hooks/useSpeech'

const zoneColorMap = {
  tz1: { bg: 'bg-tz1', text: 'text-tz1', ring: 'ring-tz1', shadow: 'shadow-tz1/30', gradient: 'from-tz1 to-tz1-dark', lightBg: 'bg-tz1/10', border: 'border-tz1/30' },
  tz2: { bg: 'bg-tz2', text: 'text-tz2', ring: 'ring-tz2', shadow: 'shadow-tz2/30', gradient: 'from-tz2 to-tz2-dark', lightBg: 'bg-tz2/10', border: 'border-tz2/30' },
  tz3: { bg: 'bg-tz3', text: 'text-tz3', ring: 'ring-tz3', shadow: 'shadow-tz3/30', gradient: 'from-tz3 to-tz3-dark', lightBg: 'bg-tz3/10', border: 'border-tz3/30' },
  tz4: { bg: 'bg-tz4', text: 'text-tz4', ring: 'ring-tz4', shadow: 'shadow-tz4/30', gradient: 'from-tz4 to-tz4-dark', lightBg: 'bg-tz4/10', border: 'border-tz4/30' },
  tz5: { bg: 'bg-tz5', text: 'text-tz5', ring: 'ring-tz5', shadow: 'shadow-tz5/30', gradient: 'from-tz5 to-tz5-dark', lightBg: 'bg-tz5/10', border: 'border-tz5/30' },
  tz6: { bg: 'bg-tz6', text: 'text-tz6', ring: 'ring-tz6', shadow: 'shadow-tz6/30', gradient: 'from-tz6 to-tz6-dark', lightBg: 'bg-tz6/10', border: 'border-tz6/30' },
  tz7: { bg: 'bg-tz7', text: 'text-tz7', ring: 'ring-tz7', shadow: 'shadow-tz7/30', gradient: 'from-tz7 to-tz7-dark', lightBg: 'bg-tz7/10', border: 'border-tz7/30' },
}

function PhraseCard({ phrase, cs, index, speakingId, onSpeak }) {
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const isSpeaking = speakingId === phrase.id

  const handleCopy = async (e) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(phrase.japanese)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback for older browsers
    }
  }

  const handleSpeak = (e) => {
    e.stopPropagation()
    onSpeak(phrase.id, phrase.japanese)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <motion.button
        whileTap={{ scale: 0.99 }}
        onClick={() => setExpanded(v => !v)}
        className={`w-full text-left rounded-2xl transition-all duration-300 overflow-hidden
          ${expanded ? `card-glass ring-1 ${cs.ring} ${cs.lightBg}` : 'card-glass hover:bg-white/5'}
        `}
      >
        {/* 摺疊時顯示的標題列 */}
        <div className="flex items-center gap-3 p-4">
          {/* 情境標籤 */}
          <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md ${cs.lightBg} ${cs.text} tracking-wide`}>
            {phrase.situation}
          </span>
          {/* 預覽中文 */}
          <span className="flex-1 text-sm text-surface-300 truncate">{phrase.chinese}</span>
          {/* Chevron */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-4 h-4 text-surface-500" />
          </motion.div>
        </div>

        {/* 展開後的詳細內容 */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 space-y-3">
                {/* 分隔線 */}
                <div className={`h-px w-full ${cs.lightBg}`} />

                {/* 日文大字 + 假名 + 朗讀按鈕 */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-surface-500 text-[10px] tracking-widest uppercase font-semibold">日本語</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleSpeak}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all
                        ${isSpeaking
                          ? `${cs.bg} text-white shadow-md`
                          : `${cs.lightBg} ${cs.text} border ${cs.border} hover:opacity-80`
                        }
                      `}
                    >
                      {isSpeaking
                        ? <><Square className="w-3 h-3" fill="currentColor" />停止</>
                        : <><Volume2 className="w-3 h-3" />朗讀</>
                      }
                    </motion.button>
                  </div>
                  <p className="text-xl font-bold text-surface-100 font-jp leading-relaxed">
                    <FuriganaText text={phrase.japanese} />
                  </p>
                </div>

                {/* 羅馬拼音 */}
                <div>
                  <p className="text-surface-500 text-[10px] tracking-widest uppercase font-semibold mb-1">Romaji</p>
                  <p className="text-sm text-surface-300 italic">{phrase.romaji}</p>
                </div>

                {/* 中文翻譯 */}
                <div>
                  <p className="text-surface-500 text-[10px] tracking-widest uppercase font-semibold mb-1">中文</p>
                  <p className="text-sm text-surface-200">{phrase.chinese}</p>
                </div>

                {/* 語感小提示 */}
                {phrase.tip && (
                  <div className={`flex gap-2 p-3 rounded-xl ${cs.lightBg} border ${cs.border}`}>
                    <Lightbulb className={`w-4 h-4 flex-shrink-0 mt-0.5 ${cs.text}`} />
                    <p className="text-xs text-surface-300 leading-relaxed">{phrase.tip}</p>
                  </div>
                )}

                {/* 複製按鈕 */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCopy}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors
                    ${copied
                      ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                      : `${cs.lightBg} ${cs.text} border ${cs.border} hover:opacity-80`
                    }
                  `}
                >
                  {copied
                    ? <><CheckCheck className="w-4 h-4" />已複製！</>
                    : <><Copy className="w-4 h-4" />複製日文句子</>
                  }
                </motion.button>

                {/* 不支援語音提示 */}
                {typeof speechSynthesis === 'undefined' && (
                  <p className="text-center text-[10px] text-surface-600">此瀏覽器不支援語音朗讀</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}

export default function TravelChapterPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { completedTravelChapters = [], completeTravelChapter } = useStore()
  const { speakingId, speak } = useSpeech()

  const chapterData = getTravelChapterById(id)

  if (!chapterData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-surface-500">找不到章節</p>
      </div>
    )
  }

  const { zone, ...chapter } = chapterData
  const cs = zoneColorMap[zone.color]
  const isDone = completedTravelChapters.includes(chapter.id)

  const handleComplete = () => {
    if (!isDone && completeTravelChapter) {
      completeTravelChapter(chapter.id)
    }
    navigate('/travel')
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="header-glass"
      >
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate('/travel')}
            className="icon-btn -ml-1"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xl leading-none">{zone.emoji}</span>
              <p className={`text-xs font-semibold ${cs.text}`}>{zone.name}</p>
            </div>
            <h1 className="text-base font-bold text-surface-100 truncate">{chapter.title}</h1>
          </div>
          {isDone && (
            <div className={`flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center`}>
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
          )}
        </div>
      </motion.header>

      {/* 章節說明條 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="max-w-lg mx-auto px-6 py-4"
      >
        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${cs.lightBg} border ${cs.border}`}>
          <span className="text-2xl">{zone.emoji}</span>
          <div>
            <p className={`text-xs font-bold ${cs.text} tracking-wide`}>{zone.name} · {zone.nameJp}</p>
            <p className="text-xs text-surface-400">{chapter.phrases.length} 個實用句型 — 點擊卡片展開詳細說明</p>
          </div>
        </div>
      </motion.div>

      {/* 句型卡片清單 */}
      <div className="max-w-lg mx-auto px-6 space-y-3 pb-6">
        {chapter.phrases.map((phrase, idx) => (
          <PhraseCard
            key={phrase.id}
            phrase={phrase}
            cs={cs}
            index={idx}
            speakingId={speakingId}
            onSpeak={speak}
          />
        ))}
      </div>

      {/* 完成按鈕 */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="max-w-lg mx-auto px-6 pb-6">
          <motion.button
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
            whileHover={!isDone ? { scale: 1.02 } : {}}
            whileTap={!isDone ? { scale: 0.98 } : {}}
            onClick={handleComplete}
            className={`
              w-full py-4 rounded-2xl font-bold text-base text-white shadow-xl transition-all
              bg-gradient-to-r ${cs.gradient} shadow-md
              ${isDone ? 'opacity-70' : ''}
            `}
          >
            {isDone ? (
              <span className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5" strokeWidth={3} />
                已完成本關 — 返回地圖
              </span>
            ) : (
              '完成本關 ✓'
            )}
          </motion.button>
        </div>
      </div>
    </div>
  )
}
