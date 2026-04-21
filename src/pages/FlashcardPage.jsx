import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, RotateCcw, X, Check, Brain, Trophy } from 'lucide-react';
import { chapters, levelConfig } from '../data/chapters';
import useStore from '../store/useStore';

// 洗牌函數
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// 單張卡片組件
const Card = ({ card, index, removeCard, isActive, onResult, colorConfig, level }) => {
  const [flipped, setFlipped] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const bgWarning = useTransform(x, [-100, 0], [1, 0]);
  const bgSuccess = useTransform(x, [0, 100], [0, 1]);

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      onResult(true);
      removeCard();
    } else if (info.offset.x < -threshold) {
      onResult(false);
      removeCard();
    }
  };

  if (!isActive) {
    return (
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-[2rem] flashcard-stack shadow-xl p-8 flex items-center justify-center flex-col pointer-events-none"
        initial={{ scale: 0.95, y: 12 }}
        animate={{ scale: 0.95, y: 12 }}
        style={{ zIndex: 0 }}
      >
        <div className="w-12 h-12 rounded-full bg-surface-800/30 flex items-center justify-center mb-6 opacity-20">
          <Brain className="w-6 h-6 text-surface-600" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      style={{ x, rotate, opacity, zIndex: 10 }}
      className="absolute top-0 left-0 w-full h-full cursor-grab active:cursor-grabbing block"
      whileTap={{ cursor: 'grabbing' }}
      whileDrag={{ scale: 1.05 }}
    >
      <div
        className="w-full h-full relative block"
        style={{ perspective: 2000 }}
      >
        <motion.div
          onClick={() => setFlipped(!flipped)}
          className="w-full h-full absolute top-0 left-0 block cursor-pointer"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* 正面：日文單字 */}
          <motion.div
            className="absolute w-full h-full rounded-[2rem] flashcard-front flex flex-col items-center justify-center px-6 overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
            animate={{ opacity: flipped ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              style={{ opacity: bgSuccess }}
              className="absolute inset-0 bg-emerald-500/20 z-0 pointer-events-none"
            />
            <motion.div
              style={{ opacity: bgWarning }}
              className="absolute inset-0 bg-red-500/20 z-0 pointer-events-none"
            />

            <motion.div
              style={{ opacity: bgSuccess }}
              className="absolute top-8 right-8 border-4 border-emerald-400 text-emerald-400 rounded-xl px-4 py-2 font-bold text-xl rotate-12"
            >
              記住了
            </motion.div>
            <motion.div
              style={{ opacity: bgWarning }}
              className="absolute top-8 left-8 border-4 border-red-400 text-red-400 rounded-xl px-4 py-2 font-bold text-xl -rotate-12"
            >
              不熟
            </motion.div>

            <span className="text-surface-500 text-xs tracking-widest uppercase mb-8 z-10">Tap to flip</span>
            <h2 className="text-5xl md:text-6xl font-bold font-jp mb-2 z-10" style={{ color: 'var(--flashcard-front-text)' }}>{card.word}</h2>

            <div className="absolute bottom-8 left-0 w-full flex justify-center gap-12 text-surface-500 text-sm z-10">
              <span className="flex flex-col items-center"><ArrowLeft className="w-5 h-5 mb-1" /> 不熟</span>
              <span className="flex flex-col items-center"><ArrowLeft className="w-5 h-5 mb-1 rotate-180" /> 記住了</span>
            </div>
          </motion.div>

          {/* 背面：解釋 */}
          <motion.div
            data-level={level}
            className={`absolute top-0 left-0 w-full h-full rounded-[2rem] flashcard-back bg-gradient-to-br from-${colorConfig.color} to-${colorConfig.color}-dark shadow-2xl shadow-${colorConfig.color}/30 flex flex-col items-center justify-center px-6`}
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            animate={{ opacity: flipped ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <span className="flashcard-back-faint text-xs tracking-widest uppercase mb-6 drop-shadow-md">Tap to flip</span>
            <h3 className="flashcard-back-title text-4xl font-bold font-jp mb-2 drop-shadow-lg">{card.reading}</h3>
            <p className="flashcard-back-soft font-mono text-lg mb-8">{card.romaji}</p>
            <div className="flashcard-back-divider w-16 h-1 rounded-full mb-8" />
            <p className="flashcard-back-title text-2xl font-bold text-center">{card.meaning}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function FlashcardPage() {
  const { level } = useParams();
  const navigate = useNavigate();
  const masterWord = useStore(s => s.masterWord);
  const resetMasteredWords = useStore(s => s.resetMasteredWords);
  const getMasteredWords = useStore(s => s.getMasteredWords);

  const [cards, setCards] = useState([]);
  const [unknownCards, setUnknownCards] = useState([]);
  const [sessionStats, setSessionStats] = useState({ known: 0, unknown: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [allMastered, setAllMastered] = useState(false);
  const [totalVocabCount, setTotalVocabCount] = useState(0);

  // 取得該等級所有不重複單字
  const getAllVocab = () => {
    const levelChapters = chapters.filter(ch => ch.level === level);
    const allVocab = levelChapters.flatMap(ch => ch.vocabulary);
    return Array.from(new Map(allVocab.map(v => [v.word, v])).values());
  };

  // 初始化：載入未記住的單字
  const initCards = () => {
    const uniqueVocab = getAllVocab();
    const mastered = getMasteredWords(level);
    const remaining = uniqueVocab.filter(v => !mastered.includes(v.word));

    setTotalVocabCount(uniqueVocab.length);
    setUnknownCards([]);
    setSessionStats({ known: 0, unknown: 0 });
    setIsFinished(false);

    if (remaining.length === 0) {
      setAllMastered(true);
      setCards([]);
    } else {
      setAllMastered(false);
      setCards(shuffleArray(remaining));
    }
  };

  // 重置全部：清除記憶，重新載入所有單字
  const handleResetAll = () => {
    resetMasteredWords(level);
    const uniqueVocab = getAllVocab();
    setTotalVocabCount(uniqueVocab.length);
    setUnknownCards([]);
    setSessionStats({ known: 0, unknown: 0 });
    setIsFinished(false);
    setAllMastered(false);
    setCards(shuffleArray(uniqueVocab));
  };

  // 只複習不熟的
  const handleRetryUnknown = () => {
    if (unknownCards.length === 0) return;
    setCards(shuffleArray(unknownCards));
    setUnknownCards([]);
    setSessionStats({ known: 0, unknown: 0 });
    setIsFinished(false);
  };

  useEffect(() => {
    if (level) {
      initCards();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  const popCard = () => {
    setCards(prev => {
      const newCards = [...prev];
      newCards.pop();
      if (newCards.length === 0) {
        setIsFinished(true);
      }
      return newCards;
    });
  };

  const handleResult = (isKnown) => {
    const currentCard = cards[cards.length - 1];
    if (isKnown) {
      // 右滑：標記為已記住，持久化到 store
      masterWord(level, currentCard.word);
    } else {
      // 左滑：加入本次不熟清單
      setUnknownCards(prev => [...prev, currentCard]);
    }
    setSessionStats(prev => ({
      ...prev,
      known: isKnown ? prev.known + 1 : prev.known,
      unknown: isKnown ? prev.unknown : prev.unknown + 1,
    }));
  };

  const colorConfig = levelConfig[level] || { color: 'n5', gradient: 'from-n5 to-n5-dark' };
  const masteredCount = getMasteredWords(level).length;

  if (!levelConfig[level]) {
    return <div className="min-h-screen flex items-center justify-center text-white">找不到該學習等級。</div>;
  }

  // ---- 全部掌握畫面 ----
  if (allMastered) {
    return (
      <div className="flashcard-page min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full card-glass p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Trophy className="w-16 h-16 mx-auto mb-6 text-amber-400" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-2">全部掌握！</h2>
          <p className="text-surface-400 mb-2">{level} 的 {totalVocabCount} 個單字已全部記住</p>
          <p className="text-surface-500 text-sm mb-8">你可以重置後再複習一次</p>

          <div className="space-y-3">
            <button
              onClick={handleResetAll}
              className={`w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-${colorConfig.color} to-${colorConfig.color}-dark shadow-lg flex items-center justify-center gap-2`}
            >
              <RotateCcw className="w-5 h-5" />
              重置全部單字
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-4 rounded-2xl font-bold bg-white/10 hover:bg-white/15 transition-colors"
            >
              回到地圖
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flashcard-page min-h-screen overflow-hidden relative flex flex-col px-6 pt-32">
      {/* 標題列 */}
      <header className="absolute top-0 left-0 w-full px-6 py-6 z-50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors shadow-lg backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <h1 className={`font-bold text-lg text-${colorConfig.color}`}>{level} 單字複習</h1>
              <p className="text-xs text-surface-500">
                已掌握 {masteredCount} / {totalVocabCount} 個 · 剩餘 {cards.length} 張
              </p>
            </div>
          </div>
        </div>

        {/* 進度條 */}
        {!isFinished && cards.length > 0 && (
          <div className="progress-bar mt-4 bg-surface-800/50 backdrop-blur-sm">
            <motion.div
              className={`progress-fill bg-gradient-to-r from-${colorConfig.color} to-${colorConfig.color}-dark`}
              initial={{ width: 0 }}
              animate={{ width: `${((sessionStats.known + sessionStats.unknown) / (sessionStats.known + sessionStats.unknown + cards.length)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </header>

      {/* 卡片區域 */}
      <div className="w-full max-w-md mx-auto relative mt-8">

        {!isFinished ? (
          <div className="relative w-full aspect-[3/4] max-h-[65vh]">
            <AnimatePresence>
              {cards.map((card, index) => {
                const isActive = index === cards.length - 1;
                if (index < cards.length - 2) return null;

                return (
                  <Card
                    key={`${card.word}-${index}`}
                    card={card}
                    index={index}
                    isActive={isActive}
                    removeCard={popCard}
                    onResult={handleResult}
                    colorConfig={colorConfig}
                    level={level}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full card-glass p-8 text-center"
          >
            <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-${colorConfig.color} to-${colorConfig.color}-dark flex items-center justify-center mb-6 shadow-lg shadow-${colorConfig.color}/30`}>
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">本輪完成！</h2>
            <p className="text-surface-400 mb-2">本次複習 {sessionStats.known + sessionStats.unknown} 個單字</p>
            <p className="text-surface-500 text-sm mb-8">
              累計已掌握 {getMasteredWords(level).length} / {totalVocabCount} 個
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-3xl font-bold text-emerald-400 mb-1">{sessionStats.known}</p>
                <p className="text-xs text-surface-500 tracking-wider">已記住</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-3xl font-bold text-red-400 mb-1">{sessionStats.unknown}</p>
                <p className="text-xs text-surface-500 tracking-wider">不熟</p>
              </div>
            </div>

            <div className="space-y-3">
              {/* 只在有不熟單字時顯示 */}
              {unknownCards.length > 0 && (
                <button
                  onClick={handleRetryUnknown}
                  className={`w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-${colorConfig.color} to-${colorConfig.color}-dark shadow-lg`}
                >
                  再練不熟的 ({unknownCards.length} 個)
                </button>
              )}
              <button
                onClick={handleResetAll}
                className="w-full py-4 rounded-2xl font-bold bg-white/10 hover:bg-white/15 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                重置全部單字
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full py-4 rounded-2xl font-bold bg-white/5 hover:bg-white/10 transition-colors"
              >
                回到地圖
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
