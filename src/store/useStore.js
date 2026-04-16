import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { chapters } from '../data/chapters'

const useStore = create(
  persist(
    (set, get) => ({
      // ---- 使用者狀態 ----
      placementDone: false,
      theme: 'dark',             // 'dark' | 'light'
      toggleTheme: () => set(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      userLevel: null,           // 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
      unlockedNodeId: null,      // 目前解鎖到的最新章節 id
      completedNodes: [],        // 已通關章節 id 列表
      masteredWords: {},         // 已記住的單字 { 'N5': ['学生', '先生'], 'N4': [...], ... }

      // ---- 程度測驗完成 ----
      completePlacement: (level) => {
        // 找出該等級的第一個章節
        const levelChapters = chapters.filter(ch => ch.level === level)
        const firstChapter = levelChapters[0]

        // 找出所有比該等級低的章節（已通過）
        const levelOrder = ['N5', 'N4', 'N3', 'N2', 'N1']
        const levelIdx = levelOrder.indexOf(level)
        const completedLevels = levelOrder.slice(0, levelIdx)
        const completed = chapters
          .filter(ch => completedLevels.includes(ch.level))
          .map(ch => ch.id)

        set({
          placementDone: true,
          userLevel: level,
          unlockedNodeId: firstChapter?.id || 'n5_ch1',
          completedNodes: completed,
        })
      },

      // ---- 通關章節 ----
      completeNode: (nodeId) => {
        const { completedNodes } = get()
        if (completedNodes.includes(nodeId)) return

        // 找出下一個章節
        const currentIdx = chapters.findIndex(ch => ch.id === nodeId)
        const nextChapter = chapters[currentIdx + 1]

        set({
          completedNodes: [...completedNodes, nodeId],
          unlockedNodeId: nextChapter?.id || nodeId,
        })
      },

      // ---- 取得節點狀態 ----
      getNodeStatus: (nodeId) => {
        const { completedNodes, unlockedNodeId, userLevel } = get()
        if (completedNodes.includes(nodeId)) return 'completed'
        if (nodeId === unlockedNodeId) return 'current'

        const chapter = chapters.find(ch => ch.id === nodeId)
        if (chapter && userLevel && chapter.level === userLevel) {
          return 'accessible'
        }
        
        return 'locked'
      },

      // ---- 單字記憶管理 ----
      masterWord: (level, word) => {
        const { masteredWords } = get()
        const levelWords = masteredWords[level] || []
        if (levelWords.includes(word)) return
        set({
          masteredWords: {
            ...masteredWords,
            [level]: [...levelWords, word],
          },
        })
      },

      resetMasteredWords: (level) => {
        const { masteredWords } = get()
        set({
          masteredWords: {
            ...masteredWords,
            [level]: [],
          },
        })
      },

      getMasteredWords: (level) => {
        const { masteredWords } = get()
        return masteredWords[level] || []
      },

      // ---- 重置所有進度 ----
      resetProgress: () => {
        set({
          placementDone: false,
          userLevel: null,
          unlockedNodeId: null,
          completedNodes: [],
          masteredWords: {},
        })
      },
    }),
    {
      name: 'nihongo-vibe-storage',
    }
  )
)

export default useStore
