import { useState, useCallback, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle2, XCircle, Trophy, RefreshCw, ChevronRight } from 'lucide-react'
import useStore from '../store/useStore'
import { chapters, levelConfig } from '../data/chapters'
import Confetti from '../components/Confetti'
import FuriganaText from '../components/FuriganaText'

export default function QuizPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const completeNode = useStore(s => s.completeNode)
  const chapter = chapters.find(ch => ch.id === id)

  const [currentQ, setCurrentQ] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [answers, setAnswers] = useState([]) // { selected, correct, isCorrect }
  const [showResult, setShowResult] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  if (!chapter) {
    navigate('/')
    return null
  }

  const quiz = chapter.quiz
  const question = quiz[currentQ]
  const progress = ((currentQ) / quiz.length) * 100

  const colorKey = chapter.level.toLowerCase()
  const colorMap = {
    n5: { gradient: 'from-n5 to-n5-dark', text: 'text-n5', bg: 'bg-n5', lightBg: 'bg-n5/10' },
    n4: { gradient: 'from-n4 to-n4-dark', text: 'text-n4', bg: 'bg-n4', lightBg: 'bg-n4/10' },
    n3: { gradient: 'from-n3 to-n3-dark', text: 'text-n3', bg: 'bg-n3', lightBg: 'bg-n3/10' },
    n2: { gradient: 'from-n2 to-n2-dark', text: 'text-n2', bg: 'bg-n2', lightBg: 'bg-n2/10' },
    n1: { gradient: 'from-n1 to-n1-dark', text: 'text-n1', bg: 'bg-n1', lightBg: 'bg-n1/10' },
  }
  const cs = colorMap[colorKey]

  const handleSelect = useCallback((optionIdx) => {
    if (selectedOption !== null) return
    setSelectedOption(optionIdx)

    const isCorrect = optionIdx === question.answer
    const newAnswers = [...answers, { selected: optionIdx, correct: question.answer, isCorrect }]
    setAnswers(newAnswers)

    setTimeout(() => {
      if (currentQ + 1 < quiz.length) {
        setCurrentQ(prev => prev + 1)
        setSelectedOption(null)
      } else {
        setShowResult(true)
        if (isCorrect && !passed) setShowConfetti(true)
        completeNode(chapter.id)
      }
    }, isCorrect ? 1000 : 2500)
  }, [selectedOption, answers, currentQ, quiz, question, chapter.id, completeNode])

  const correctCount = answers.filter(a => a.isCorrect).length
  const passed = correctCount >= 7
  const score = Math.round((correctCount / quiz.length) * 100)

  const handleRetry = () => {
    setCurrentQ(0)
    setSelectedOption(null)
    setAnswers([])
    setShowResult(false)
    setShowConfetti(false)
  }

  // ---- 結果畫面 ----
  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 relative">
        {showConfetti && <Confetti />}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          {passed ? (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Trophy className="w-16 h-16 mx-auto mb-6 text-amber-400" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">🎉 恭喜通關！</h2>
              <p className="text-surface-400 mb-6">你已成功完成「{chapter.title}」</p>
            </>
          ) : (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <RefreshCw className="w-16 h-16 mx-auto mb-6 text-surface-400" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">再接再厲！</h2>
              <p className="text-surface-400 mb-6">距離通關只差一點點，加油！</p>
            </>
          )}

          {/* 成績 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="card-glass p-6 mb-8"
          >
            <div className="flex items-center justify-around mb-4">
              <div>
                <p className={`text-4xl font-bold ${passed ? cs.text : 'text-surface-400'}`}>
                  {score}%
                </p>
                <p className="text-xs text-surface-500 mt-1">得分</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-4xl font-bold text-surface-200">
                  {correctCount}/{quiz.length}
                </p>
                <p className="text-xs text-surface-500 mt-1">答對</p>
              </div>
            </div>

            <div className="progress-bar">
              <motion.div
                className={`progress-fill ${passed ? `bg-gradient-to-r ${cs.gradient}` : 'bg-surface-500'}`}
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </div>
            <p className="text-xs text-surface-500 mt-2 text-right">通關門檻 70%</p>
          </motion.div>

          {/* 錯題解析 */}
          {!passed && answers.some(a => !a.isCorrect) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-left mb-8"
            >
              <h3 className="text-sm font-bold text-surface-400 mb-3 uppercase tracking-wide">錯題解析</h3>
              <div className="space-y-2">
                {answers.map((a, idx) => {
                  if (a.isCorrect) return null
                  const q = quiz[idx]
                  return (
                    <div key={idx} className="card-glass p-4">
                      <p className="font-jp text-sm mb-2">
                        <FuriganaText text={q.question} />
                      </p>
                      <div className="flex gap-4 text-xs">
                        <span className="text-red-400">你的答案：{q.options[a.selected]}</span>
                        <span className="text-emerald-400">正確答案：{q.options[a.correct]}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* 按鈕 */}
          <div className="flex gap-3">
            {passed ? (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/')}
                className={`btn-primary bg-gradient-to-r ${cs.gradient} flex-1 py-4 rounded-2xl shadow-lg text-lg`}
              >
                返回地圖
                <ChevronRight className="inline ml-2 w-5 h-5" />
              </motion.button>
            ) : (
              <>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleRetry}
                  className={`btn-primary bg-gradient-to-r ${cs.gradient} flex-1 py-4 rounded-2xl shadow-lg`}
                >
                  重新挑戰
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate(`/chapter/${chapter.id}`)}
                  className="btn-primary bg-white/10 flex-1 py-4 rounded-2xl"
                >
                  重新學習
                </motion.button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  // ---- 測驗畫面 ----
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => navigate(`/chapter/${chapter.id}`)} className="text-surface-500 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs text-surface-500 font-medium">{chapter.title}</span>
          <span className="text-xs text-surface-500">{currentQ + 1}/{quiz.length}</span>
        </div>
        <div className="progress-bar">
          <motion.div
            className={`progress-fill bg-gradient-to-r ${cs.gradient}`}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* 題目 */}
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
                    <div className="flex items-center gap-3">
                      <span className="text-surface-500 text-sm w-6">{String.fromCharCode(65 + idx)}</span>
                      <span className="font-jp text-lg">
                        <FuriganaText text={opt} />
                      </span>
                      {selectedOption !== null && isCorrect && (
                        <CheckCircle2 className="ml-auto w-5 h-5 text-emerald-400" />
                      )}
                      {selectedOption !== null && isSelected && !isCorrect && (
                        <XCircle className="ml-auto w-5 h-5 text-red-400" />
                      )}
                    </div>
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
                  className={`mt-6 px-5 py-3 rounded-xl text-sm ${
                    selectedOption === question.answer
                      ? 'bg-emerald-400/10 text-emerald-300'
                      : 'bg-red-400/10 text-red-300'
                  }`}
                >
                  {selectedOption === question.answer ? '✓ 正確！' : `✗ 正確答案是 ${question.options[question.answer]}`}
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
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx < answers.length
                  ? answers[idx].isCorrect
                    ? 'bg-emerald-400 w-4'
                    : 'bg-red-400 w-4'
                  : idx === currentQ
                  ? `${cs.bg} w-6`
                  : 'bg-white/10 w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
