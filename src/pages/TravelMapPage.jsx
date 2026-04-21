import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, ChevronDown, Check, Sun, Moon } from 'lucide-react'
import useStore from '../store/useStore'
import { travelZones } from '../data/travelChapters'
import BottomNav from '../components/BottomNav'

const zoneColorMap = {
  tz1: { bg: 'bg-tz1', text: 'text-tz1', ring: 'ring-tz1', shadow: 'shadow-tz1/30', gradient: 'from-tz1 to-tz1-dark', lightBg: 'bg-tz1/10' },
  tz2: { bg: 'bg-tz2', text: 'text-tz2', ring: 'ring-tz2', shadow: 'shadow-tz2/30', gradient: 'from-tz2 to-tz2-dark', lightBg: 'bg-tz2/10' },
  tz3: { bg: 'bg-tz3', text: 'text-tz3', ring: 'ring-tz3', shadow: 'shadow-tz3/30', gradient: 'from-tz3 to-tz3-dark', lightBg: 'bg-tz3/10' },
  tz4: { bg: 'bg-tz4', text: 'text-tz4', ring: 'ring-tz4', shadow: 'shadow-tz4/30', gradient: 'from-tz4 to-tz4-dark', lightBg: 'bg-tz4/10' },
  tz5: { bg: 'bg-tz5', text: 'text-tz5', ring: 'ring-tz5', shadow: 'shadow-tz5/30', gradient: 'from-tz5 to-tz5-dark', lightBg: 'bg-tz5/10' },
  tz6: { bg: 'bg-tz6', text: 'text-tz6', ring: 'ring-tz6', shadow: 'shadow-tz6/30', gradient: 'from-tz6 to-tz6-dark', lightBg: 'bg-tz6/10' },
  tz7: { bg: 'bg-tz7', text: 'text-tz7', ring: 'ring-tz7', shadow: 'shadow-tz7/30', gradient: 'from-tz7 to-tz7-dark', lightBg: 'bg-tz7/10' },
}

export default function TravelMapPage() {
  const navigate = useNavigate()
  const { completedTravelChapters = [], theme, toggleTheme } = useStore()

  const totalChapters = travelZones.reduce((sum, z) => sum + z.chapters.length, 0)
  const completedCount = completedTravelChapters.length

  // 預設展開第一個未完成的 Zone，其餘收合
  const defaultOpen = useMemo(() => {
    const firstIncomplete = travelZones.find(zone =>
      zone.chapters.some(ch => !completedTravelChapters.includes(ch.id))
    )
    return Object.fromEntries(
      travelZones.map(z => [z.id, z.id === (firstIncomplete?.id ?? travelZones[0].id)])
    )
  }, [completedTravelChapters])

  const [openZones, setOpenZones] = useState(defaultOpen)

  const toggleZone = (zoneId) =>
    setOpenZones(prev => ({ ...prev, [zoneId]: !prev[zoneId] }))

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="header-glass"
      >
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-tz1 to-tz5 flex items-center justify-center flex-shrink-0">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight leading-tight">
                <span className="text-gradient bg-gradient-to-r from-tz1 to-tz5">Vibe！</span>
                <span>旅遊用語</span>
              </h1>
              <p className="text-xs text-surface-500">旅遊實戰地圖 · 24 關</p>
            </div>
          </div>
          <button onClick={toggleTheme} className="icon-btn">
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* 進度橫條 */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-lg mx-auto px-6 py-4"
      >
        <div className="card-glass px-5 py-4 flex items-center gap-5">
          <div className="text-center">
            <p className="text-2xl font-bold">{completedCount}</p>
            <p className="text-[10px] text-surface-500 tracking-wide">已完成</p>
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-[10px] text-surface-500 mb-1.5">
              <span>旅遊實戰進度</span>
              <span>{completedCount}/{totalChapters} 關</span>
            </div>
            <div className="progress-bar h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(completedCount / totalChapters) * 100}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                className="progress-fill bg-gradient-to-r from-tz1 to-tz5"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{Math.round((completedCount / totalChapters) * 100)}%</p>
            <p className="text-[10px] text-surface-500 tracking-wide">完成率</p>
          </div>
        </div>
      </motion.div>

      {/* Zone 列表 */}
      <div className="max-w-lg mx-auto px-6 pb-4">
        {travelZones.map((zone, zoneIdx) => {
          const cs = zoneColorMap[zone.color]
          const isOpen = openZones[zone.id]
          const zoneCompleted = zone.chapters.filter(ch => completedTravelChapters.includes(ch.id)).length

          return (
            <motion.section
              key={zone.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: zoneIdx * 0.08 }}
            >
              {/* Zone 標題 */}
              <button
                onClick={() => toggleZone(zone.id)}
                className="w-full flex items-center justify-between mb-3 mt-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center shadow-lg ${cs.shadow}`}>
                    <span className="text-2xl leading-none">{zone.emoji}</span>
                  </div>
                  <div className="text-left">
                    <h2 className={`text-base font-bold ${cs.text}`}>{zone.name}</h2>
                    <p className="text-xs text-surface-500 font-jp">{zone.nameJp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg ${cs.lightBg} ${cs.text}`}>
                    {zoneCompleted}/{zone.chapters.length}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center"
                  >
                    <ChevronDown className="w-4 h-4 text-surface-400" />
                  </motion.div>
                </div>
              </button>

              {/* Chapter 列表 */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="zone-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="relative ml-6 pl-8 border-l-2 border-white/5 mb-2">
                      {zone.chapters.map((chapter) => {
                        const isDone = completedTravelChapters.includes(chapter.id)

                        return (
                          <div key={chapter.id} className="relative pb-5 last:pb-2">
                            {/* 連線圓點 */}
                            <div className="absolute -left-[calc(2rem+5px)] top-1">
                              {isDone ? (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className={`w-3 h-3 rounded-full ${cs.bg}`}
                                />
                              ) : (
                                <div className="w-3 h-3 rounded-full bg-surface-700" />
                              )}
                            </div>

                            {/* 章節卡片 */}
                            <motion.button
                              whileHover={{ scale: 1.02, x: 4 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => navigate(`/travel/${chapter.id}`)}
                              className={`
                                w-full text-left rounded-2xl p-4 transition-all duration-300
                                ${isDone
                                  ? `card-glass border-white/10 ${cs.lightBg}`
                                  : 'card-glass border border-white/10 hover:bg-white/5 cursor-pointer'
                                }
                              `}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-bold text-sm text-surface-100 truncate">
                                    {chapter.title}
                                  </h3>
                                  <p className="text-xs mt-0.5 text-surface-500 font-jp">
                                    {chapter.titleJp} · {chapter.phrases.length} 個句子
                                  </p>
                                </div>
                                <div className="flex-shrink-0 ml-3">
                                  {isDone ? (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center shadow-md`}
                                    >
                                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </motion.div>
                                  ) : (
                                    <div className={`w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center`}>
                                      <span className={`text-xs font-bold ${cs.text}`}>GO</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </motion.button>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {zoneIdx < travelZones.length - 1 && (
                <div className="section-divider" />
              )}
            </motion.section>
          )
        })}
      </div>

      <BottomNav />
    </div>
  )
}
