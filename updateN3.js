const fs = require('fs');

const path = 'C:\\workspaces\\vibe-code\\src\\data\\chaptersN3.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Update top comment
content = content.replace('// N3 章節資料 - 中級 (25章)', '// N3 章節資料 - 中級 (27章)');

// 2. Renumber existing chapters (from 75 down to 51 to avoid overlap)
for (let i = 75; i >= 51; i--) {
  let newNum = i + 5; // wait, +3! 51 -> 56, 52 -> 57... 75 -> 80
  // Wait! 51 to 56 is +5.
  // Replace ID
  let idRegex = new RegExp(`id: 'n3_ch${i}'`, 'g');
  content = content.replace(idRegex, `id: 'n3_ch${newNum}'`);
  
  // Replace comment
  // The comment looks like: // ---- 第 51 關：就在那一瞬間 (～たとたん / ～最中に) ----
  let commentRegex = new RegExp(`// ---- 第 ${i} 關：`, 'g');
  content = content.replace(commentRegex, `// ---- 第 ${newNum} 關：`);
}

// 3. Insert new chapters
const newChaptersStr = `  // ---- 第 54 關：被逼著做 (使役受身形) ----
  {
    id: 'n3_ch54',
    level: 'N3',
    title: '被逼著做 (使役受身形)',
    grammar: [
      {
        pattern: '使役受身形 (～される / ～させられる)',
        explanation: '表示「被逼著做... / 不得不...」。由使役形和受身形組合而成，表示並非出於自願，而是受到他人強迫或形勢所逼才做某事。',
        examples: [
          { jp: '子供{こども}のころ、母{はは}にピアノを習{なら}わせられました。', romaji: 'Kodomo no koro, haha ni piano o narawaseraremashita.', zh: '小時候，被媽媽逼著學鋼琴。' },
          { jp: '昨日{きのう}は部長{ぶちょう}にお酒{さけ}を飲{の}まされました。', romaji: 'Kinō wa buchō ni osake o nomasaremashita.', zh: '昨天被部長逼著喝酒。' },
        ]
      }
    ],
    vocabulary: [
      { word: '習う', reading: 'ならう', romaji: 'narau', meaning: '學習(I類動詞)' },
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝(I類動詞)' },
      { word: '待つ', reading: 'まつ', romaji: 'matsu', meaning: '等待(I類動詞)' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃(II類動詞)' },
      { word: '来る', reading: 'くる', romaji: 'kuru', meaning: '來(III類動詞)' },
      { word: 'する', reading: 'する', romaji: 'suru', meaning: '做(III類動詞)' },
      { word: '辞める', reading: 'やめる', romaji: 'yameru', meaning: '辭職/停止(II類動詞)' },
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉(I類動詞)' },
      { word: '歌う', reading: 'うたう', romaji: 'utau', meaning: '唱歌(I類動詞)' },
      { word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: '跑(I類動詞)' },
    ],
    quiz: [
      { question: '昨日、先輩にカラオケで歌を___。(被逼著唱)', options: ['歌わせられました', '歌われました', '歌わせました', '歌いました'], answer: 0 },
      { question: '「待つ」的使役受身形是？', options: ['待たされる', '待たれる', '待たせる', '待ちさせる'], answer: 0 },
      { question: '雨の中を___。(被逼著跑)', options: ['走らされました', '走られました', '走らせました', '走りました'], answer: 0 },
      { question: '「する」的使役受身形是？', options: ['させられる', 'される', 'させる', 'すられる'], answer: 0 },
      { question: '母に嫌いな野菜を___。(被逼著吃)', options: ['食べさせられました', '食べられました', '食べさせました', '食べました'], answer: 0 },
    ]
  },

  // ---- 第 55 關：希望別人做 (～てほしい / もらいたい) ----
  {
    id: 'n3_ch55',
    level: 'N3',
    title: '希望別人做 (～てほしい / もらいたい)',
    grammar: [
      {
        pattern: '動詞て形 ＋ ほしい / もらいたい',
        explanation: '表示說話者希望他人做某事。「希望你(他)做...」。主語通常是自己，而動作執行者用「に」表示。',
        examples: [
          { jp: 'あなたにこの仕事{しごと}を手伝{てつだ}ってほしいです。', romaji: 'Anata ni kono shigoto o tetsudatte hoshii desu.', zh: '希望你能幫忙這份工作。' },
          { jp: '彼{かれ}に早{はや}く元気{げんき}になってもらいたいです。', romaji: 'Kare ni hayaku genki ni natte moraitai desu.', zh: '希望他能早日康復。' },
        ]
      },
      {
        pattern: '動詞ない形 ＋ でほしい / てほしくない',
        explanation: '表示希望他人不要做某事。「希望你(他)不要...」。',
        examples: [
          { jp: 'このことは誰{だれ}にも言{い}わないでほしい。', romaji: 'Kono koto wa dare ni mo iwanaide hoshii.', zh: '希望你不要把這件事告訴任何人。' },
        ]
      }
    ],
    vocabulary: [
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙(I類動詞)' },
      { word: '元気な', reading: 'げんきな', romaji: 'genki na', meaning: '有精神的/健康的(な形容詞)' },
      { word: '言う', reading: 'いう', romaji: 'iu', meaning: '說(I類動詞)' },
      { word: '来る', reading: 'くる', romaji: 'kuru', meaning: '來(III類動詞)' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記(II類動詞)' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導(II類動詞)' },
      { word: '待つ', reading: 'まつ', romaji: 'matsu', meaning: '等待(I類動詞)' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣(I類動詞)' },
      { word: '辞める', reading: 'やめる', romaji: 'yameru', meaning: '辭職/放棄(II類動詞)' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣(I類動詞)' },
    ],
    quiz: [
      { question: '先生に私の作文を見て___。(希望老師看)', options: ['ほしいです', 'たいです', 'たいと思います', 'ほしいと思います'], answer: 0 },
      { question: '彼にこの秘密を___。(希望他不要說)', options: ['言わないでほしい', '言わないてほしい', '言わなくほしい', '言わないほしい'], answer: 0 },
      { question: '「忘れる」的意思是？', options: ['記住', '忘記', '想起', '思考'], answer: 1 },
      { question: '両親にはいつまでも元気で___。(希望他們保持健康)', options: ['いてほしい', 'あるほしい', 'いるほしい', 'なってほしい'], answer: 0 },
      { question: 'この部屋には入ら___。(希望不要進入)', options: ['ないでほしい', 'なくてほしい', 'ないてほしい', 'ないほしい'], answer: 0 },
    ]
  },

`;

content = content.replace('export const chaptersN3 = [', 'export const chaptersN3 = [\n' + newChaptersStr);

// 4. Dictionary of tags
const dictionary = {
  // 51 (now 56)
  '開ける': '(II類動詞)',
  '鳴る': '(I類動詞)',
  '考える': '(II類動詞)',
  '話しかける': '(II類動詞)',
  '降り出す': '(I類動詞)',
  // 52 (now 57)
  '思い出す': '(I類動詞)',
  '寄る': '(I類動詞)',
  // 53 (now 58)
  '増える': '(II類動詞)',
  '減る': '(I類動詞)',
  '変わる': '(I類動詞)',
  '慣れる': '(II類動詞)',
  '寒くなる': '(I類動詞)', // 變冷
  '大きくなる': '(I類動詞)', // 變大/長大
  '分かってくる': '(III類動詞)', // 漸漸了解
  '続く': '(I類動詞)',
  // 54 (now 59)
  '眠い': '(い形容詞)',
  '上手': '(な形容詞)',
  '住む': '(I類動詞)',
  '納得する': '(III類動詞)',
  '理解する': '(III類動詞)',
  '説明する': '(III類動詞)',
  // 55 (now 60)
  '出発する': '(III類動詞)',
  '結婚する': '(III類動詞)',
  '終わる': '(I類動詞)',
  '到着する': '(III類動詞)',
  '入社する': '(III類動詞)',
  '覚える': '(II類動詞)',
  '帰る': '(I類動詞)',
  // 56 (now 61)
  '明るい': '(い形容詞)',
  '男らしい': '(い形容詞)',
  '女らしい': '(い形容詞)',
  // 57 (now 62)
  '太る': '(I類動詞)',
  '下手': '(な形容詞)',
  '若く見える': '(II類動詞)',
  '勉強する': '(III類動詞)',
  // 58 (now 63)
  '合格する': '(III類動詞)',
  '遅刻する': '(III類動詞)',
  '寝坊する': '(III類動詞)',
  '失敗する': '(III類動詞)',
  '成功する': '(III類動詞)',
  '手伝う': '(I類動詞)',
  '間に合う': '(I類動詞)',
  // 59 (now 64)
  '甘い': '(い形容詞)',
  '遊ぶ': '(I類動詞)',
  '怒る': '(I類動詞)',
  // 60 (now 65)
  '死ぬ': '(I類動詞)',
  '疲れる': '(II類動詞)',
  '泣く': '(I類動詞)',
  '痛い': '(い形容詞)',
  '親切': '(な形容詞)',
  '嫌': '(な形容詞)',
  '寂しい': '(い形容詞)',
  '怖い': '(い形容詞)',
  '驚く': '(I類動詞)',
  // 61 (now 66)
  '見つかる': '(I類動詞)',
  // 62 (now 67)
  '伝染する': '(III類動詞)',
  // 63 (now 68)
  '遅れる': '(II類動詞)',
  '休む': '(I類動詞)',
  // 64 (now 69)
  '決まる': '(I類動詞)',
  '練習する': '(III類動詞)',
  '負ける': '(II類動詞)',
  '勝つ': '(I類動詞)',
  '危ない': '(い形容詞)',
  // 65 (now 70)
  '限る': '(I類動詞)',
  '高い': '(い形容詞)',
  '信じる': '(II類動詞)',
  '正しい': '(い形容詞)',
  '便利': '(な形容詞)',
  // 66 (now 71)
  '守る': '(I類動詞)',
  '無理する': '(III類動詞)',
  '謝る': '(I類動詞)',
  '従う': '(I類動詞)',
  // 67 (now 72)
  '過ぎる': '(II類動詞)',
  '忘れる': '(II類動詞)',
  // 変わる is already in dict (I類動詞)
  '叱る': '(I類動詞)',
  // 68 (now 73)
  '急ぐ': '(I類動詞)',
  '心配する': '(III類動詞)',
  '諦める': '(II類動詞)',
  '気にする': '(III類動詞)',
  '遠慮する': '(III類動詞)',
  // 69 (now 74)
  '嬉しい': '(い形容詞)',
  '辛い': '(い形容詞)',
  // 70 (now 75)
  '反対する': '(III類動詞)',
  '留学する': '(III類動詞)',
  '行われる': '(II類動詞)',
  '離れる': '(II類動詞)',
  // 71 (now 76)
  '行動する': '(III類動詞)',
  '経つ': '(I類動詞)',
  '薄れる': '(II類動詞)',
  '年をとる': '(I類動詞)',
  '落ちる': '(II類動詞)',
  '発展する': '(III類動詞)',
  // 72 (now 77)
  'やめる': '(II類動詞)',
  '始める': '(II類動詞)',
  // 73 (now 78)
  'ふさわしい': '(い形容詞)',
  '不思議': '(な形容詞)',
  // 74 (now 79)
  '涼しい': '(い形容詞)',
  '寒い': '(い形容詞)',
  '働く': '(I類動詞)',
  '会議に出る': '(II類動詞)',
  '教える': '(II類動詞)',
  // 75 (now 80)
  'びっくりする': '(III類動詞)',
  '思う': '(I類動詞)',
  '信じられない': '(II類動詞)',
  '優勝する': '(III類動詞)'
};

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.includes('{ word: ')) {
    const match = line.match(/word:\s*'([^']+)'/);
    if (match) {
      const word = match[1];
      if (dictionary[word]) {
        const meaningMatch = line.match(/meaning:\s*'([^']+)'/);
        if (meaningMatch) {
          const meaning = meaningMatch[1];
          if (!meaning.includes(dictionary[word])) {
            const newMeaning = meaning + dictionary[word];
            lines[i] = line.replace(`meaning: '${meaning}'`, `meaning: '${newMeaning}'`);
          }
        }
      }
    }
  }
}

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log("Done!");
