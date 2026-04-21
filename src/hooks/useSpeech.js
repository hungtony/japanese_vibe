import { useState, useEffect, useCallback, useRef } from 'react'

// ─── 移除假名標記，取得純日文文字 ────────────────────────────────────────────
// 例：'観{かん}光{こう}です。' → '観光です。'
export const stripFurigana = (text) => text.replace(/\{[^{}]+\}/g, '')

// ─── 挑選最佳日語語音 ────────────────────────────────────────────────────────
const getJapaneseVoice = () => {
  const voices = speechSynthesis.getVoices()
  const preferred = voices.find(v =>
    v.lang === 'ja-JP' && /kyoko|otoya|haruka|nanami|ichiro/i.test(v.name)
  )
  return preferred || voices.find(v => v.lang === 'ja-JP') || null
}

// ─── 語音播放 Hook ──────────────────────────────────────────────────────────
// 用法：const { speakingId, speak } = useSpeech()
//   speak(id, text) — 播放或停止（傳入唯一 id 與日文原始文字）
//   speakingId      — 目前正在播放的 id（null 表示無）
export function useSpeech() {
  const [speakingId, setSpeakingId] = useState(null)
  const utterRef = useRef(null)

  // 確保語音清單已載入（部分瀏覽器非同步）
  useEffect(() => {
    if (typeof speechSynthesis === 'undefined') return
    const load = () => speechSynthesis.getVoices()
    load()
    speechSynthesis.addEventListener('voiceschanged', load)
    return () => speechSynthesis.removeEventListener('voiceschanged', load)
  }, [])

  const speak = useCallback((id, text) => {
    if (typeof speechSynthesis === 'undefined') return

    // 若正在播放同一句 → 停止
    if (speakingId === id) {
      speechSynthesis.cancel()
      setSpeakingId(null)
      return
    }

    speechSynthesis.cancel()

    const utter = new SpeechSynthesisUtterance(stripFurigana(text))
    utter.lang = 'ja-JP'
    utter.rate = 0.85  // 稍慢，方便學習
    utter.pitch = 1
    const voice = getJapaneseVoice()
    if (voice) utter.voice = voice

    utter.onstart = () => setSpeakingId(id)
    utter.onend = () => setSpeakingId(null)
    utter.onerror = () => setSpeakingId(null)

    utterRef.current = utter
    speechSynthesis.speak(utter)
  }, [speakingId])

  // 頁面離開時自動清除播放
  useEffect(() => {
    return () => {
      if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel()
    }
  }, [])

  return { speakingId, speak }
}
