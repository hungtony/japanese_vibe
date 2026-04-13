import { useEffect, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Lock, RotateCcw, Map, Brain, Sun, Moon } from 'lucide-react'
import useStore from '../store/useStore'
import { chapters, levelConfig } from '../data/chapters'

const levelOrder = ['N5', 'N4', 'N3', 'N2', 'N1']

export default function MapPage() {
  const navigate = useNavigate()
  const { completedNodes, unlockedNodeId, userLevel, resetProgress, theme, toggleTheme } = useStore()
  const getNodeStatus = useStore(s => s.getNodeStatus)
  const currentRef = useRef(null)

  // 按等級分組
  const grouped = useMemo(() => {
    const map = {}
    levelOrder.forEach(l => { map[l] = [] })
    chapters.forEach(ch => {
      if (map[ch.level]) map[ch.level].push(ch)
    })
    return map
  }, [])

  // 自動捲動到當前進度
  useEffect(() => {
    if (currentRef.current) {
      setTimeout(() => {
        currentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 500)
    }
  }, [unlockedNodeId])

  const handleNodeClick = (chapter) => {
    const status = getNodeStatus(chapter.id)
    if (status === 'locked') return
    navigate(`/chapter/${chapter.id}`)
  }

  const colorMap = {
    N5: { bg: 'bg-n5', text: 'text-n5', ring: 'ring-n5', shadow: 'shadow-n5/30', gradient: 'from-n5 to-n5-dark', lightBg: 'bg-n5/10' },
    N4: { bg: 'bg-n4', text: 'text-n4', ring: 'ring-n4', shadow: 'shadow-n4/30', gradient: 'from-n4 to-n4-dark', lightBg: 'bg-n4/10' },
    N3: { bg: 'bg-n3', text: 'text-n3', ring: 'ring-n3', shadow: 'shadow-n3/30', gradient: 'from-n3 to-n3-dark', lightBg: 'bg-n3/10' },
    N2: { bg: 'bg-n2', text: 'text-n2', ring: 'ring-n2', shadow: 'shadow-n2/30', gradient: 'from-n2 to-n2-dark', lightBg: 'bg-n2/10' },
    N1: { bg: 'bg-n1', text: 'text-n1', ring: 'ring-n1', shadow: 'shadow-n1/30', gradient: 'from-n1 to-n1-dark', lightBg: 'bg-n1/10' },
  }

  return (
    <div className="min-h-screen pb-24">
      {/* 頂部標題 */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-surface-950/80 border-b border-white/5"
      >
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-n5 to-n4 flex items-center justify-center">
              <Map className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">學習地圖</h1>
              <p className="text-xs text-surface-500">目前等級：{userLevel}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="text-surface-600 hover:text-surface-300 transition-colors p-2 rounded-lg hover:bg-white/5"
              title={theme === 'dark' ? '切換至亮色模式' : '切換至暗色模式'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={resetProgress}
              className="text-surface-600 hover:text-surface-300 transition-colors p-2 rounded-lg hover:bg-white/5"
              title="重置進度"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* 地圖路線 */}
      <div className="max-w-lg mx-auto px-6 pt-8">
        {levelOrder.map((level, levelIdx) => {
          const config = levelConfig[level]
          const cs = colorMap[level]
          const levelChapters = grouped[level]

          return (
            <motion.section
              key={level}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: levelIdx * 0.1 }}
            >
              {/* 等級標題 */}
              <div className="flex items-center justify-between mb-6 mt-4">
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center shadow-lg ${cs.shadow}`}>
                    <span className="text-sm font-bold text-white">{level}</span>
                  </div>
                  <div>
                    <h2 className={`text-lg font-bold ${cs.text}`}>{config.label}</h2>
                    <p className="text-xs text-surface-500">{config.description}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/flashcards/${level}`)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border border-white/10 text-surface-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2`}
                >
                  <Brain className="w-4 h-4" />
                  單字卡
                </motion.button>
              </div>

              {/* 節點列表 */}
              <div className="relative ml-6 pl-8 border-l-2 border-white/5">
                {levelChapters.map((chapter, chIdx) => {
                  const status = getNodeStatus(chapter.id)
                  const isCurrent = status === 'current'
                  const isCompleted = status === 'completed'
                  const isAccessible = status === 'accessible'
                  const isLocked = status === 'locked'

                  return (
                    <div
                      key={chapter.id}
                      ref={isCurrent ? currentRef : null}
                      className="relative pb-8 last:pb-4"
                    >
                      {/* 連線上的圓點 */}
                      <div className="absolute -left-[calc(2rem+5px)] top-1">
                        {isCompleted && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={`w-3 h-3 rounded-full ${cs.bg}`}
                          />
                        )}
                        {isCurrent && (
                          <motion.div
                            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            className={`w-3 h-3 rounded-full ${cs.bg}`}
                          />
                        )}
                        {isAccessible && (
                          <div className={`w-3 h-3 rounded-full opacity-50 ${cs.bg}`} />
                        )}
                        {isLocked && (
                          <div className="w-3 h-3 rounded-full bg-surface-700" />
                        )}
                      </div>

                      {/* 節點卡片 */}
                      <motion.button
                        whileHover={!isLocked ? { scale: 1.02, x: 4 } : {}}
                        whileTap={!isLocked ? { scale: 0.98 } : {}}
                        onClick={() => handleNodeClick(chapter)}
                        disabled={isLocked}
                        className={`
                          w-full text-left rounded-2xl p-5 transition-all duration-300
                          ${isCompleted ? `card-glass border-white/10 ${cs.lightBg}` : ''}
                          ${isCurrent ? `card-glass ring-2 ${cs.ring} ${cs.lightBg} shadow-lg ${cs.shadow}` : ''}
                          ${isAccessible ? 'card-glass border border-white/10 hover:bg-white/5 cursor-pointer' : ''}
                          ${isLocked ? 'bg-white/[0.02] border border-white/[0.04] cursor-not-allowed' : 'cursor-pointer'}
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              {isCurrent && (
                                <span className={`text-[10px] font-bold tracking-widest uppercase ${cs.text}`}>
                                  目前進度
                                </span>
                              )}
                            </div>
                            <h3 className={`font-bold text-base font-jp truncate ${isLocked ? 'text-surface-600' : 'text-surface-100'}`}>
                              {chapter.title}
                            </h3>
                            <p className={`text-xs mt-1 ${isLocked ? 'text-surface-700' : 'text-surface-500'}`}>
                              {chapter.grammar.length} 個文法 · {chapter.vocabulary.length} 個單字
                            </p>
                          </div>

                          <div className="flex-shrink-0 ml-4">
                            {isCompleted && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center shadow-md`}
                              >
                                <Check className="w-5 h-5 text-white" strokeWidth={3} />
                              </motion.div>
                            )}
                            {isCurrent && (
                              <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center shadow-md ${cs.shadow}`}
                              >
                                <span className="text-white text-lg">→</span>
                              </motion.div>
                            )}
                            {isAccessible && (
                              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <span className={`text-sm font-bold ${cs.text}`}>GO</span>
                              </div>
                            )}
                            {isLocked && (
                              <div className="w-10 h-10 rounded-xl bg-surface-800/50 flex items-center justify-center">
                                <Lock className="w-4 h-4 text-surface-600" />
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    </div>
                  )
                })}
              </div>

              {/* 等級分隔線 */}
              {levelIdx < levelOrder.length - 1 && (
                <div className="section-divider" />
              )}
            </motion.section>
          )
        })}
      </div>

      {/* 統計浮動列 */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="max-w-lg mx-auto px-4 pb-4">
          <div className="card-glass px-6 py-3 flex items-center justify-around shadow-2xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-surface-100">{completedNodes.length}</p>
              <p className="text-[10px] text-surface-500 font-medium tracking-wide">已完成</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-bold text-surface-100">{chapters.length}</p>
              <p className="text-[10px] text-surface-500 font-medium tracking-wide">總章節</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-bold text-surface-100">
                {Math.round((completedNodes.length / chapters.length) * 100)}%
              </p>
              <p className="text-[10px] text-surface-500 font-medium tracking-wide">完成率</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
