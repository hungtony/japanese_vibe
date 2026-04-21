import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Map, Plane } from 'lucide-react'

const tabs = [
  {
    id: 'map',
    label: '學習地圖',
    icon: Map,
    path: '/',
    activeColor: 'text-surface-100',
  },
  {
    id: 'travel',
    label: '旅遊用語',
    icon: Plane,
    path: '/travel',
    activeColor: 'text-surface-100',
  },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const activeTab = pathname.startsWith('/travel') ? 'travel' : 'map'

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-lg mx-auto px-4 pb-safe-area-inset-bottom">
        <div
          className="card-glass mx-0 rounded-t-2xl rounded-b-none border-b-0"
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        >
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => navigate(tab.path)}
                  className="flex-1 flex flex-col items-center gap-1 py-3 px-2 relative transition-transform active:scale-95"
                >
                  {/* 圖示 */}
                  <div className={`transition-colors duration-200 ${isActive ? tab.activeColor : 'text-surface-600'}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* 標籤文字 */}
                  <span className={`text-[10px] font-semibold tracking-wide transition-colors duration-200 ${isActive ? tab.activeColor : 'text-surface-600'}`}>
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
