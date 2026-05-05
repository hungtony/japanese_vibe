import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { chapters } from '../data/chapters'

const levelOrder = ['N5', 'N4', 'N3', 'N2', 'N1']

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
      completedTravelChapters: [], // 已完成的旅遊章節 id 列表
      openLevels: null,          // 地圖頁面各等級展開/收合狀態（null = 尚未初始化）

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
        const { completedNodes, unlockedNodeId } = get()
        if (completedNodes.includes(nodeId)) return 'completed'
        if (nodeId === unlockedNodeId) return 'current'
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

      // ---- 地圖等級展開/收合 ----
      // 僅在首次啟動（openLevels 為 null）時初始化，之後不會再自動覆蓋
      initOpenLevels: () => {
        const { openLevels, unlockedNodeId, userLevel } = get()
        if (openLevels !== null) return // 已初始化過，不再覆蓋
        const currentChapter = chapters.find(ch => ch.id === unlockedNodeId)
        const currentLevel = currentChapter?.level || userLevel || 'N5'
        set({
          openLevels: Object.fromEntries(levelOrder.map(l => [l, l === currentLevel]))
        })
      },

      toggleLevel: (level) => {
        const { openLevels } = get()
        set({ openLevels: { ...openLevels, [level]: !openLevels[level] } })
      },

      // ---- 旅遊章節完成 ----
      completeTravelChapter: (chapterId) => {
        const { completedTravelChapters } = get()
        if (completedTravelChapters.includes(chapterId)) return
        set({ completedTravelChapters: [...completedTravelChapters, chapterId] })
      },

      // ---- 重置所有進度 ----
      resetProgress: () => {
        set({
          placementDone: false,
          userLevel: null,
          unlockedNodeId: null,
          completedNodes: [],
          masteredWords: {},
          completedTravelChapters: [],
          openLevels: null,          // 重置展開狀態，下次進入地圖時重新初始化
        })
      },
    }),
    {
      name: 'nihongo-vibe-storage',
    }
  )
)

export default useStore
