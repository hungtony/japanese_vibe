// N2 章節資料 - 中上級
export const chaptersN2 = [
  {
    id: 'n2_ch81',
    level: 'N2',
    title: '逆接與讓步',
    grammar: [
      {
        pattern: '〜にもかかわらず',
        explanation: '儘管...卻...。表示違反預期的結果。',
        examples: [
          { jp: '努力したにもかかわらず、不合格だった。', romaji: 'Doryoku shita ni mo kakawarazu, fugōkaku datta.', zh: '儘管努力了，卻不合格。' },
          { jp: '雨にもかかわらず、多くの人が來た。', romaji: 'Ame ni mo kakawarazu, ōku no hito ga kita.', zh: '儘管下雨，很多人來了。' },
        ]
      },
      {
        pattern: '〜どころか',
        explanation: '別說...，連...都...。表示程度超出預期。',
        examples: [
          { jp: '漢字どころか、ひらがなも読めない。', romaji: 'Kanji dokoro ka, hiragana mo yomenai.', zh: '別說漢字，連平假名都不會讀。' },
        ]
      }
    ],
    vocabulary: [
      { word: '不合格', reading: 'ふごうかく', romaji: 'fugōkaku', meaning: '不合格' },
      { word: '反対', reading: 'はんたい', romaji: 'hantai', meaning: '反對' },
      { word: '賛成', reading: 'さんせい', romaji: 'sansei', meaning: '贊成' },
      { word: '予想', reading: 'よそう', romaji: 'yosō', meaning: '預測' },
      { word: '結果', reading: 'けっか', romaji: 'kekka', meaning: '結果' },
      { word: '期待', reading: 'きたい', romaji: 'kitai', meaning: '期待' },
    ],
    quiz: [
      { question: '努力した___、不合格だった。', options: ['にもかかわらず', 'おかげで', 'せいで', 'ために'], answer: 0 },
      { question: '漢字___、ひらがなも読めない。', options: ['ばかりか', 'どころか', 'だけでなく', 'のみならず'], answer: 1 },
      { word: '不合格', reading: 'ふごうかく', romaji: 'fugōkaku', meaning: '不合格' },
      { word: '反対', reading: 'はんたい', romaji: 'hantai', meaning: '反對' },
      { question: '雨___かかわらず、多くの人が來た。', options: ['에도', '하지만', 'とも', 'にさえ'], answer: 0 },
      { word: '結果', reading: 'けっか', romaji: 'kekka', meaning: '結果' },
      { question: '「〜にもかかわらず」表示？', options: ['因為', '儘管', '所以', '如果'], answer: 1 },
      { word: '期待', reading: 'きたい', romaji: 'kitai', meaning: '期待' },
      { word: '予想', reading: 'よそう', romaji: 'yosō', meaning: '預測' },
      { question: '___どころか、簡単な問題もできない。', options: ['難しい問題', '簡単な問題', '全ての問題', '一個の問題'], answer: 0 },
    ]
  },
  {
    id: 'n2_ch82',
    level: 'N2',
    title: '程度與比較',
    grammar: [
      {
        pattern: '〜ほど〜ない',
        explanation: '沒有...那麼...。比較句型，表示程度不及。',
        examples: [
          { jp: '東京ほど大阪は大きくない。', romaji: 'Tōkyō hodo Ōsaka wa ōkiku nai.', zh: '大阪沒有東京那麼大。' },
        ]
      },
      {
        pattern: '〜ば〜ほど',
        explanation: '越...越...。表示程度隨條件增加。',
        examples: [
          { jp: '勉強すればするほど、面白くなる。', romaji: 'Benkyō sureba suru hodo, omoshiroku naru.', zh: '越唸越有趣。' },
          { jp: '考えれば考えるほど、分からなくなる。', romaji: 'Kangaereba kangaeru hodo, wakaranaku naru.', zh: '越想越不懂。' },
        ]
      }
    ],
    vocabulary: [
      { word: '比較', reading: 'ひかく', romaji: 'hikaku', meaning: '比較' },
      { word: '程度', reading: 'ていど', romaji: 'teido', meaning: '程度' },
      { word: '以上', reading: 'いじょう', romaji: 'ijō', meaning: '以上' },
      { word: '以下', reading: 'いか', romaji: 'ika', meaning: '以下' },
      { word: '増える', reading: 'ふえる', romaji: 'fueru', meaning: '增加' },
      { word: '減る', reading: 'へる', romaji: 'heru', meaning: '減少' },
    ],
    quiz: [
      { question: '東京___大阪は大きくない。', options: ['より', 'ほど', 'だけ', 'まで'], answer: 1 },
      { question: '勉強すれば___ほど、面白くなる。', options: ['した', 'して', 'する', 'し'], answer: 2 },
      { word: '増える', reading: 'ふえる', romaji: 'fueru', meaning: '增加' },
      { word: '以上', reading: 'いじょう', romaji: 'ijō', meaning: '以上' },
      { word: '比較', reading: 'ひかく', romaji: 'hikaku', meaning: '比較' },
      { question: '考えれば考える___、分からなくなる。', options: ['だけ', 'まで', 'ほど', 'ばかり'], answer: 2 },
      { word: '程度', reading: 'ていど', romaji: 'teido', meaning: '程度' },
      { question: '日本語は英語___難しくない。', options: ['より', 'ほど', 'だけ', '從'], answer: 1 },
      { word: '減る', reading: 'へる', romaji: 'heru', meaning: '減少' },
      { question: '「〜ば〜ほど」表示？', options: ['越...越...', '雖然...但...', '不但...而且...', '因為...所以...'], answer: 0 },
    ]
  },
];
