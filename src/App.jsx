import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useStore from './store/useStore'
import MapPage from './pages/MapPage'
import PlacementTestPage from './pages/PlacementTestPage'
import ChapterPage from './pages/ChapterPage'
import QuizPage from './pages/QuizPage'
import FlashcardPage from './pages/FlashcardPage'

function App() {
  const placementDone = useStore(s => s.placementDone)
  const theme = useStore(s => s.theme)

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme')
    } else {
      document.documentElement.classList.remove('light-theme')
    }
  }, [theme])

  return (
    <div className="min-h-screen transition-colors duration-300">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={placementDone ? <MapPage /> : <Navigate to="/test" replace />}
          />
          <Route path="/test" element={<PlacementTestPage />} />
          <Route path="/chapter/:id" element={<ChapterPage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/flashcards/:level" element={<FlashcardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
