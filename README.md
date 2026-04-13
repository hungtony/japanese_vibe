# 專案名稱：Nihongo Vibe - 極簡地圖式日語學習 Web App (PWA)

# 角色設定
你是一位資深的前端開發專家與 UX/UI 設計師，精通 React, Tailwind CSS, Framer Motion 以及 PWA。請協助我開發這款「離線可用、極簡設計、地圖闖關式」的日語學習 Web App。

## 🎯 核心設計風格 (Design System)
- **極簡有型 (Minimalist & Sleek)**: 採用大量留白、無框線設計、柔和的陰影與現代無襯線字體（如 Inter 或 Noto Sans JP）。
- **色彩計畫**: 以黑白灰為主色調，各等級 (N5~N1) 採用低彩度的莫蘭迪色系作為點綴（例如：N5 柔和藍、N4 抹茶綠...）。

## 🛠 技術棧 (Tech Stack)
- **框架**: React (Vite)
- **狀態與本地儲存**: Zustand + localStorage (或 IndexedDB) 確保關卡進度完全保存在本地端。
- **樣式與動畫**: Tailwind CSS + Framer Motion (用於地圖節點解鎖動畫、畫面轉場)。
- **圖示庫**: Lucide React

## 📋 核心功能需求

### 1. 初始程度測驗 (Placement Test)
- 首次開啟 App 時，強制進入「程度測驗」。
- 透過 15 題難度漸進的選擇題，評估使用者的日語水準。
- 測驗結束後，系統會自動將使用者「空降」到地圖上對應的起點（例如：測驗結果為 N4，則 N5 的地圖節點全數解鎖，角色標記停留在 N4 的第一章節）。

### 2. 極簡地圖式學習路線 (Map-based Learning Route)
- **UI 呈現**: 仿造遊戲的技能樹或 Duolingo 的垂直滾動路線圖。以圓形「節點 (Nodes)」與「連線 (Paths)」組成。
- **等級劃分**: 包含 N5 到 N1 五個大區塊，滑動時有清晰的區塊分隔線與等級標題。
- **節點狀態**: 
  - `Locked` (鎖定)：灰色，不可點擊。
  - `Current` (目前進度)：該等級的主題色，有呼吸燈動畫提示 (Pulse animation)。
  - `Completed` (已完成)：實心主題色，帶有打勾圖示。

### 3. 章節學習內容 (Chapter Flow)
點擊「Current」節點後，進入該章節，流程必須依序包含：
1. **文法介紹**: 條列式說明該章節核心文法，並附上 2~3 個附帶羅馬音與中文翻譯的例句。
2. **相關單字**: 以滑動卡片 (Swipeable cards) 或清單形式，呈現與該文法情境相關的 5~10 個單字。
3. **章節測驗 (Quiz)**: 進入 10 題綜合測驗（文法 + 單字）。

### 4. 通關與解鎖機制 (Progression Gate)
- **過關條件**: 10 題中，錯誤必須在 **3 題以內 (即分數 >= 70%)** 才算通關。
- **通關成功**: 顯示撒花動畫 (Confetti)，退回地圖頁面，目前節點變為 `Completed`，並播放連線動畫解鎖下一個節點。
- **通關失敗**: 顯示鼓勵訊息與錯題解析，要求使用者重新挑戰該章節測驗。

---

## 📂 資料結構範例 (Mock Data Structure)

**Zustand Store 狀態管理**
```javascript
{
  unlockedNodeId: "n5_ch2", // 目前解鎖到的最新章節
  completedNodes: ["n5_ch1"], // 已通關章節
  userLevel: "N5" // 程度測驗後的等級
}
```

**章節內容資料 (JSON)**
```json
{
  "id": "n5_ch1",
  "level": "N5",
  "title": "自我介紹與打招呼",
  "grammar":[
    {
      "pattern": "AはBです",
      "explanation": "表示「A是B」。",
      "examples": ["私は学生です。(我是學生)"]
    }
  ],
  "vocabulary":[
    {"word": "私", "reading": "わたし", "meaning": "我"}
  ],
  "quiz":[
    // 共10題
    {
      "question": "私___学生です。",
      "options": ["が", "は", "を", "に"],
      "answer": 1
    }
  ]
}
```

---

## 🚀 開發階段拆解 (Step-by-Step Execution)
請嚴格依照以下階段開發，每完成一個階段，請暫停並等我確認測試無誤後，再進行下一階段：

- **Phase 1: 專案基礎與路由**
  - 使用 Vite 建立專案，安裝 Tailwind, Framer Motion, Zustand, Lucide-React。
  - 建立基本路由架構 (測驗頁、地圖首頁、章節內容頁)。
- **Phase 2: 狀態管理與程度測驗 (Placement Test)**
  - 建立 Zustand store，管理使用者進度。
  - 實作「初始程度測驗」UI 與邏輯，測驗完畢後更新 `unlockedNodeId` 並導向地圖。
- **Phase 3: 極簡地圖 UI 實作 (Map UI)**
  - 實作 N5~N1 的垂直滾動節點地圖。
  - 使用 Framer Motion 繪製節點狀態 (鎖定/當前/完成) 與節點之間的連線。
  - 確保自動捲動 (Auto-scroll) 至當前進度節點。
- **Phase 4: 章節學習 UI (Grammar & Vocab)**
  - 實作點擊節點後彈出/導向的學習畫面。
  - 呈現極簡風格的「文法介紹」與「單字卡」。
- **Phase 5: 測驗系統與通關機制 (Quiz & Gate)**
  - 實作 10 題測驗介面。
  - 實作結算邏輯：錯 3 題內解鎖下一關卡、更新 Zustand store，並返回地圖觸發「節點解鎖動畫」。