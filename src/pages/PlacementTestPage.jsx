import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Brain, Sparkles, BookOpen, ArrowLeft } from 'lucide-react'
import useStore from '../store/useStore'
import { placementQuizByLevel, determineLevel } from '../data/placementQuiz'
import FuriganaText from '../components/FuriganaText'

const levels = [
  { key: 'N5', label: '入門', desc: '剛開始學日語、認識五十音', color: 'n5', gradient: 'from-n5 to-n5-dark' },
  { key: 'N4', label: '初級', desc: '能理解基本句型與日常對話', color: 'n4', gradient: 'from-n4 to-n4-dark' },
  { key: 'N3', label: '中級', desc: '能閱讀簡單文章、表達意見', color: 'n3', gradient: 'from-n3 to-n3-dark' },
  { key: 'N2', label: '中上級', desc: '能閱讀新聞、理解較複雜表達', color: 'n2', gradient: 'from-n2 to-n2-dark' },
  { key: 'N1', label: '上級', desc: '能理解學術文章與商務日語', color: 'n1', gradient: 'from-n1 to-n1-dark' },
]

export default function PlacementTestPage() {
  const navigate = useNavigate()
  const completePlacement = useStore(s => s.completePlacement)

  // 流程階段: 'welcome' → 'select' → 'quiz' → 'result'
  const [stage, setStage] = useState('welcome')
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [resultLevel, setResultLevel] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [passed, setPassed] = useState(false)

  const quiz = selectedLevel ? placementQuizByLevel[selectedLevel] : []
  const question = quiz[currentQ]
  const progress = quiz.length > 0 ? ((currentQ) / quiz.length) * 100 : 0

  // 選擇等級後開始測驗
  const handleSelectLevel = (levelKey) => {
    setSelectedLevel(levelKey)
    setCurrentQ(0)
    setAnswers([])
    setSelectedOption(null)
    setStage('quiz')
  }

  // 答題
  const handleSelect = useCallback((optionIdx) => {
    if (selectedOption !== null) return
    setSelectedOption(optionIdx)

    const isCorrect = optionIdx === question.answer
    const newAnswers = [...answers, { questionId: question.id, selectedOption: optionIdx, isCorrect }]
    setAnswers(newAnswers)

    setTimeout(() => {
      if (currentQ < quiz.length - 1) {
        setCurrentQ(prev => prev + 1)
        setSelectedOption(null)
      } else {
        // 測驗結束
        const correct = newAnswers.filter(a => a.isCorrect).length
        const level = determineLevel(selectedLevel, correct)
        setCorrectCount(correct)
        setResultLevel(level)
        setPassed(correct >= 7)
        setStage('result')
      }
    }, isCorrect ? 1000 : 2500)
  }, [selectedOption, answers, currentQ, quiz, question, selectedLevel])

  const handleStartJourney = () => {
    completePlacement(resultLevel)
    navigate('/')
  }

  // ========== 歡迎畫面 ==========
  if (stage === 'welcome') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-n5 to-n4 flex items-center justify-center shadow-lg shadow-n5/20">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold mb-3 tracking-tight">
            Nihongo
            <span className="text-gradient bg-gradient-to-r from-n5 to-n4"> Vibe</span>
          </h1>
          <p className="text-surface-400 mb-2 text-lg font-light">極簡地圖式日語學習</p>
          <p className="text-surface-500 text-sm mb-10 leading-relaxed">
            選擇你的日語程度，<br />
            通過測驗即可開始學習之旅
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setStage('select')}
            className="btn-primary bg-gradient-to-r from-n5 to-n4 text-lg px-10 py-4 rounded-2xl shadow-lg shadow-n5/25"
          >
            開始
            <ChevronRight className="inline ml-2 w-5 h-5" />
          </motion.button>

          <p className="text-surface-600 text-xs mt-6">離線可用，進度自動保存</p>
        </motion.div>
      </div>
    )
  }

  // ========== 等級選擇畫面 ==========
  if (stage === 'select') {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="px-6 pt-6">
          <button
            onClick={() => setStage('welcome')}
            className="text-surface-500 hover:text-white transition-colors p-1"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full"
          >
            <div className="text-center mb-8">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-surface-400" />
              <h2 className="text-2xl font-bold mb-2">選擇你的程度</h2>
              <p className="text-surface-500 text-sm">
                選擇最接近你日語能力的等級<br />
                通過 10 題測驗 (≥70%) 即可從該等級開始
              </p>
            </div>

            <div className="space-y-3">
              {levels.map((lv, idx) => (
                <motion.button
                  key={lv.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectLevel(lv.key)}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl card-glass hover:bg-white/10 transition-all duration-200"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${lv.gradient} flex items-center justify-center shadow-md`}>
                    <span className="text-sm font-bold text-white">{lv.key}</span>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="font-bold text-surface-100">{lv.label}</h3>
                    <p className="text-xs text-surface-500 mt-0.5">{lv.desc}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-${lv.color} flex-shrink-0`} />
                </motion.button>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-surface-600 text-xs mt-6"
            >
              不確定？選擇 N5 從頭開始也很好！
            </motion.p>
          </motion.div>
        </div>
      </div>
    )
  }

  // ========== 結果畫面 ==========
  if (stage === 'result') {
    const levelInfo = levels.find(l => l.key === resultLevel)
    const selectedInfo = levels.find(l => l.key === selectedLevel)
    const score = Math.round((correctCount / quiz.length) * 100)

    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Sparkles className={`w-12 h-12 mx-auto mb-6 ${passed ? 'text-amber-400' : 'text-surface-400'}`} />
          </motion.div>

          {passed ? (
            <>
              <h2 className="text-2xl font-bold mb-2">🎉 測驗通過！</h2>
              <p className="text-surface-400 mb-6">
                {selectedLevel} 測驗答對 {correctCount}/{quiz.length} 題 ({score}%)
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">再加油！</h2>
              <p className="text-surface-400 mb-2">
                {selectedLevel} 測驗答對 {correctCount}/{quiz.length} 題 ({score}%)
              </p>
              <p className="text-surface-500 text-sm mb-6">
                未達 70% 通過門檻，建議從 {resultLevel} 開始學習
              </p>
            </>
          )}

          {/* 結果等級 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-surface-500 text-sm mb-3">你的學習起點</p>
            <div className={`inline-block px-10 py-5 rounded-2xl bg-gradient-to-br ${levelInfo.gradient} shadow-lg`}>
              <span className="text-5xl font-bold text-white">{resultLevel}</span>
            </div>
            <p className="text-surface-400 text-sm mt-3">{levelInfo.desc}</p>
          </motion.div>

          {/* 成績條 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="card-glass p-4 mb-8"
          >
            <div className="progress-bar">
              <motion.div
                className={`progress-fill bg-gradient-to-r ${passed ? levelInfo.gradient : 'from-surface-500 to-surface-600'}`}
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-surface-500">得分 {score}%</span>
              <span className="text-xs text-surface-500">通過門檻 70%</span>
            </div>
          </motion.div>

          {/* 錯題列表 */}
          {answers.some(a => !a.isCorrect) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-left mb-8"
            >
              <h3 className="text-sm font-bold text-surface-400 mb-3 uppercase tracking-wide">錯題解析</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                {answers.map((a, idx) => {
                  if (a.isCorrect) return null
                  const q = quiz[idx]
                  return (
                    <div key={idx} className="card-glass p-3">
                      <p className="font-jp text-sm mb-1.5">{q.question}</p>
                      <div className="flex gap-3 text-xs mb-1">
                        <span className="text-red-400">你的答案：{q.options[a.selectedOption]}</span>
                        <span className="text-emerald-400">正確：{q.options[q.answer]}</span>
                      </div>
                      <p className="text-xs text-surface-500">{q.explanation}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* 按鈕 */}
          <div className="flex gap-3">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleStartJourney}
              className={`btn-primary bg-gradient-to-r ${levelInfo.gradient} flex-1 py-4 rounded-2xl shadow-lg text-lg`}
            >
              {passed ? '開始學習' : `從 ${resultLevel} 開始`}
              <ChevronRight className="inline ml-2 w-5 h-5" />
            </motion.button>
            {!passed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setStage('select')}
                className="btn-primary bg-white/10 px-6 py-4 rounded-2xl"
              >
                重選
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  // ========== 測驗畫面 ==========
  const levelInfo = levels.find(l => l.key === selectedLevel)

  return (
    <div className="min-h-screen flex flex-col">
      {/* 頂部進度 */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setStage('select'); setCurrentQ(0); setAnswers([]); setSelectedOption(null) }}
              className="text-surface-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className={`text-xs font-bold tracking-wide text-${levelInfo.color}`}>{selectedLevel} 程度測驗</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                completePlacement(selectedLevel)
                navigate('/')
              }}
              className="text-xs text-surface-400 hover:text-white transition-colors underline underline-offset-2"
            >
              跳過測驗
            </button>
            <span className="text-xs text-surface-500">{currentQ + 1} / {quiz.length}</span>
          </div>
        </div>
        <div className="progress-bar">
          <motion.div
            className={`progress-fill bg-gradient-to-r ${levelInfo.gradient}`}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* 題目區域 */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="max-w-lg w-full"
          >
            <h2 className="text-2xl font-bold mb-8 leading-relaxed font-jp">
              <FuriganaText text={question.question} />
            </h2>

            <div className="space-y-3">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx
                const isCorrect = idx === question.answer
                let optClass = 'btn-option'
                if (selectedOption !== null) {
                  if (isCorrect) optClass = 'btn-option btn-option-correct'
                  else if (isSelected && !isCorrect) optClass = 'btn-option btn-option-wrong'
                }

                return (
                  <motion.button
                    key={idx}
                    whileHover={selectedOption === null ? { scale: 1.01 } : {}}
                    whileTap={selectedOption === null ? { scale: 0.99 } : {}}
                    onClick={() => handleSelect(idx)}
                    disabled={selectedOption !== null}
                    className={optClass}
                  >
                    <span className="text-surface-500 mr-3 text-sm">{String.fromCharCode(65 + idx)}</span>
                    <span className="font-jp text-lg">
                      <FuriganaText text={opt} />
                    </span>
                  </motion.button>
                )
              })}
            </div>

            {/* 即時反饋 */}
            <AnimatePresence>
              {selectedOption !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-5 px-4 py-2.5 rounded-xl text-sm ${selectedOption === question.answer
                      ? 'bg-emerald-400/10 text-emerald-300'
                      : 'bg-red-400/10 text-red-300'
                    }`}
                >
                  {selectedOption === question.answer
                    ? '✓ 正確！'
                    : `✗ ${question.explanation}`
                  }
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 底部答題狀態 */}
      <div className="px-6 pb-6">
        <div className="flex gap-1.5 justify-center">
          {quiz.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx < answers.length
                  ? answers[idx].isCorrect
                    ? 'bg-emerald-400 w-4'
                    : 'bg-red-400 w-4'
                  : idx === currentQ
                    ? `bg-${levelInfo.color} w-6`
                    : 'bg-white/10 w-4'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
