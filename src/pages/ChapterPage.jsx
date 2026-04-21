import { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BookOpen, Languages, ClipboardCheck, ChevronRight, Volume2, Square } from 'lucide-react'
import { chapters, levelConfig } from '../data/chapters'
import FuriganaText from '../components/FuriganaText'
import { useSpeech } from '../hooks/useSpeech'

const steps = ['grammar', 'vocabulary', 'quiz']
const stepLabels = { grammar: '文法介紹', vocabulary: '相關單字', quiz: '章節測驗' }
const stepIcons = { grammar: BookOpen, vocabulary: Languages, quiz: ClipboardCheck }

export default function ChapterPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const chapter = chapters.find(ch => ch.id === id)
  const [currentStep, setCurrentStep] = useState(0)
  const [vocabIndex, setVocabIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(120)
  const { speakingId, speak } = useSpeech()

  // 動態取得 header 高度，讓單字卡的 sticky 位置精準對齊
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  if (!chapter) {
    navigate('/')
    return null
  }

  const config = levelConfig[chapter.level]
  const colorKey = chapter.level.toLowerCase()

  // 單字卡換頁與動畫
  const paginate = (dir) => {
    if (!chapter.vocabulary?.length) return
    setDirection(dir)
    setVocabIndex((prev) => {
      const len = chapter.vocabulary.length
      return (prev + dir + len) % len
    })
  }
  const goToVocab = (idx) => {
    setDirection(idx > vocabIndex ? 1 : -1)
    setVocabIndex(idx)
  }
  const cardVariants = {
    enter: (dir) => ({ x: dir > 0 ? 220 : -220, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -220 : 220, opacity: 0 }),
  }

  const colorMap = {
    n5: { gradient: 'from-n5 to-n5-dark', text: 'text-n5', bg: 'bg-n5', lightBg: 'bg-n5/10', border: 'border-n5/30' },
    n4: { gradient: 'from-n4 to-n4-dark', text: 'text-n4', bg: 'bg-n4', lightBg: 'bg-n4/10', border: 'border-n4/30' },
    n3: { gradient: 'from-n3 to-n3-dark', text: 'text-n3', bg: 'bg-n3', lightBg: 'bg-n3/10', border: 'border-n3/30' },
    n2: { gradient: 'from-n2 to-n2-dark', text: 'text-n2', bg: 'bg-n2', lightBg: 'bg-n2/10', border: 'border-n2/30' },
    n1: { gradient: 'from-n1 to-n1-dark', text: 'text-n1', bg: 'bg-n1', lightBg: 'bg-n1/10', border: 'border-n1/30' },
  }
  const cs = colorMap[colorKey]

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(prev => prev + 1)
    } else {
      navigate(`/quiz/${chapter.id}`)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header ref={headerRef} className="header-glass">
        <div className="max-w-lg mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="text-surface-400 hover:text-white transition-colors p-1">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-bold tracking-wide ${cs.text}`}>{chapter.level} · {config.label}</p>
              <h1 className="text-lg font-bold truncate font-jp">{chapter.title}</h1>
            </div>
          </div>

          {/* 步驟指示器 */}
          <div className="flex gap-2 mt-4">
            {steps.map((step, idx) => {
              const Icon = stepIcons[step]
              const isActive = idx === currentStep
              const isDone = idx < currentStep
              return (
                <div
                  key={step}
                  className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${isActive
                      ? `${cs.lightBg} ${cs.text} ${cs.border} border`
                      : isDone
                        ? 'bg-white/5 text-surface-400'
                        : 'text-surface-600'
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{stepLabels[step]}</span>
                </div>
              )
            })}
          </div>
        </div>
      </header>

      {/* 內容 */}
      <div className="flex-1 max-w-lg mx-auto w-full px-6 py-8">
        <AnimatePresence mode="wait">
          {/* ---- 文法介紹 ---- */}
          {currentStep === 0 && (
            <motion.div
              key="grammar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className={`w-5 h-5 ${cs.text}`} />
                文法介紹
              </h2>

              <div className="space-y-6">
                {chapter.grammar.map((g, gIdx) => (
                  <motion.div
                    key={gIdx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: gIdx * 0.15 }}
                    className="card-glass p-6"
                  >
                    <div className={`inline-block px-4 py-2 rounded-xl ${cs.lightBg} mb-4`}>
                      <span className={`text-lg font-bold font-jp ${cs.text}`}>
                        <FuriganaText text={g.pattern} />
                      </span>
                    </div>
                    <p className="text-surface-300 text-sm mb-5 leading-relaxed">{g.explanation}</p>

                    <div className="space-y-3">
                      {g.examples.map((ex, exIdx) => {
                        const speakId = `${chapter.id}_g${gIdx}_ex${exIdx}`
                        const isSpeaking = speakingId === speakId
                        return (
                          <div key={exIdx} className="bg-white/[0.03] rounded-xl px-4 py-3">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <p className="font-jp text-base font-medium leading-relaxed flex-1">
                                <FuriganaText text={ex.jp} />
                              </p>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => speak(speakId, ex.jp)}
                                className={`flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-semibold transition-all mt-0.5
                                  ${isSpeaking
                                    ? `${cs.bg} text-white shadow-md`
                                    : `${cs.lightBg} ${cs.text} border ${cs.border} hover:opacity-80`
                                  }
                                `}
                              >
                                {isSpeaking
                                  ? <><Square className="w-2.5 h-2.5" fill="currentColor" />停止</>
                                  : <><Volume2 className="w-2.5 h-2.5" />朗讀</>
                                }
                              </motion.button>
                            </div>
                            <p className="text-xs text-surface-500 mb-0.5">{ex.romaji}</p>
                            <p className="text-xs text-surface-400">{ex.zh}</p>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ---- 相關單字 ---- */}
          {currentStep === 1 && (
            <motion.div
              key="vocabulary"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Languages className={`w-4 h-4 ${cs.text}`} />
                相關單字
                <span className="text-xs text-surface-500 font-normal ml-1">
                  {vocabIndex + 1} / {chapter.vocabulary.length}
                </span>
              </h2>

              {/* 單字卡 sticky 區塊：凍結在 header 下方 */}
              <div
                className="sticky z-30 -mx-6 px-6 pt-2 pb-2"
                style={{ top: headerHeight, backgroundColor: 'var(--bg-color)' }}
              >
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    {(() => {
                      const v = chapter.vocabulary[vocabIndex]
                      const speakId = `vocab_${chapter.id}_${vocabIndex}`
                      const isSpeakingVocab = speakingId === speakId
                      return (
                        <motion.div
                          key={vocabIndex}
                          custom={direction}
                          variants={cardVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.5}
                          onDragEnd={(e, { offset, velocity }) => {
                            const swipeThreshold = 80
                            if (offset.x < -swipeThreshold || velocity.x < -500) paginate(1)
                            else if (offset.x > swipeThreshold || velocity.x > 500) paginate(-1)
                          }}
                          className="card-glass px-4 py-3 text-center relative cursor-grab active:cursor-grabbing select-none touch-pan-y"
                        >
                          {/* 左上：序號 */}
                          <span className="absolute top-2 left-3 text-[10px] font-bold text-surface-500">
                            {vocabIndex + 1} / {chapter.vocabulary.length}
                          </span>

                          {/* 右上：朗讀按鈕 */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => {
                              e.stopPropagation()
                              speak(speakId, v.word)
                            }}
                            className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all
                              ${isSpeakingVocab
                                ? `${cs.bg} text-white shadow-md`
                                : `${cs.lightBg} ${cs.text} border ${cs.border} hover:opacity-80`
                              }
                            `}
                          >
                            {isSpeakingVocab
                              ? <><Square className="w-2.5 h-2.5" fill="currentColor" />停止</>
                              : <><Volume2 className="w-2.5 h-2.5" />朗讀</>
                            }
                          </motion.button>

                          {/* 主要內容（緊湊版） */}
                          <p className={`font-jp text-3xl font-bold mt-2 ${cs.text}`}>
                            <FuriganaText text={v.word} />
                          </p>
                          <div className="flex items-center justify-center gap-3 mt-1.5 text-surface-400">
                            <span className="font-jp text-sm">{v.reading}</span>
                          </div>
                          <div className="flex items-center justify-center gap-3 mt-1.5 text-surface-400">
                            <span className="text-[11px] text-surface-500 italic">{v.romaji}</span>
                          </div>
                          <p className="text-sm text-surface-200 mt-2">{v.meaning}</p>
                        </motion.div>
                      )
                    })()}
                  </AnimatePresence>
                </div>

                {/* 導航點 */}
                <div className="flex justify-center gap-1.5 mt-2">
                  {chapter.vocabulary.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToVocab(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === vocabIndex ? `${cs.bg} w-5` : 'bg-white/20 w-1.5'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* 單字列表 (可滾動，sticky 卡片會凍結在上方) */}
              <div className="space-y-2 mt-3">
                {chapter.vocabulary.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToVocab(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-4 ${idx === vocabIndex
                        ? `${cs.lightBg} ${cs.border} border`
                        : 'hover:bg-white/5'
                      }`}
                  >
                    <span className="font-jp text-lg font-bold w-16">
                      <FuriganaText text={v.word} />
                    </span>
                    <span className="text-surface-400 text-sm flex-1">{v.reading}</span>
                    <span className="text-surface-300 text-sm">{v.meaning}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ---- 準備測驗 ---- */}
          {currentStep === 2 && (
            <motion.div
              key="quiz-prep"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center min-h-[50vh] text-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center shadow-lg mb-8`}>
                  <ClipboardCheck className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <h2 className="text-2xl font-bold mb-3">準備好了嗎？</h2>
              <p className="text-surface-400 mb-2">章節測驗共 {chapter.quiz.length} 題</p>
              <p className="text-surface-500 text-sm mb-10">
                全部答對即可通關<br />解鎖下一章節
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={nextStep}
                className={`btn-primary bg-gradient-to-r ${cs.gradient} text-lg px-10 py-4 rounded-2xl shadow-lg`}
              >
                開始測驗
                <ChevronRight className="inline ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 下一步 / 上一步 按鈕 (文法/單字步驟) */}
        {currentStep < 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center justify-between"
          >
            {/* 上一頁 */}
            {currentStep > 0 ? (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-surface-300 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                上一頁
              </motion.button>
            ) : (
              <div />
            )}

            {/* 下一步 */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={nextStep}
              className={`btn-primary bg-gradient-to-r ${cs.gradient} px-8 py-3 rounded-xl shadow-md`}
            >
              {currentStep === 0 ? '查看單字' : '準備測驗'}
              <ChevronRight className="inline ml-1 w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* 準備測驗頁的上一頁按鈕 */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={prevStep}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-surface-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              回上一頁
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
