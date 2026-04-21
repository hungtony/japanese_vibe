// N3 章節資料 - 中級 (28章)
export const chaptersN3 = [
  // ---- 第 60 關：被逼著做 (使役受身形) ----
  {
    id: 'n3_ch60',
    level: 'N3',
    title: '被逼著做 (使役受身形)',
    grammar: [
      {
        pattern: '動詞使役受身形 (～させられる)',
        explanation: '表示「被迫做某事」，帶有極度不情願、受害的心情。變化規則：【I類】改あ段＋される (例外：す結尾改させられる)。【II類】去ます＋させられる。【III類】する→させられる / 来る→こさせられる。',
        examples: [
          { jp: '子{こ}どものころ、母{はは}に野菜{やさい}を食{た}べさせられました。', romaji: 'Kodomo no koro, haha ni yasai o tabesaseraremashita.', zh: '小時候被媽媽逼著吃蔬菜。' },
          { jp: '昨日{きのう}は部長{ぶちょう}にお酒{さけ}を飲{の}まされました。', romaji: 'Kinō wa buchō ni osake o nomasaremashita.', zh: '昨天被部長灌酒（被迫喝酒）。' },
        ]
      }
    ],
    vocabulary: [
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝 (I類動詞)' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃 (II類動詞)' },
      { word: '待つ', reading: 'まつ', romaji: 'matsu', meaning: '等待 (I類動詞)' },
      { word: '歌う', reading: 'うたう', romaji: 'utau', meaning: '唱歌 (I類動詞)' },
      { word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: '跑 (I類動詞)' },
      { word: '書く', reading: 'かく', romaji: 'kaku', meaning: '寫 (I類動詞)' },
      { word: '野菜', reading: 'やさい', romaji: 'yasai', meaning: '蔬菜' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: 'カラオケ', reading: 'カラオケ', romaji: 'karaoke', meaning: '卡拉OK' },
      { word: '嫌', reading: 'いや', romaji: 'iya', meaning: '討厭的 (な形容詞)' },
    ],
    quiz: [
      { question: '「飲む」的使役被動形是？', options: ['飲まされる', '飲ませられる', '飲まられる', '飲めされる'], answer: 0 },
      { question: '部長にカラオケを___。(被逼著唱)', options: ['歌わされた', '歌わせられた', '歌われた', '歌わせた'], answer: 0 },
      { question: '「食べる」的使役被動形是？', options: ['食べさせられる', '食べされる', '食べらされる', '食べませられる'], answer: 0 },
      { question: '雨の中を___。(被迫跑步)', options: ['走らされた', '走させられた', '走られた', '走らせた'], answer: 0 },
      { question: '「待つ」的使役被動形是？', options: ['待たされる', '待たせられる', '待たられる', '待てされる'], answer: 0 },
      { question: '「書く」的使役被動形是？', options: ['書かされる', '書かせられる', '書かられる', '書けさせる'], answer: 0 },
      { question: '母にピアノを___。(被逼著練習)', options: ['練習された', '練習させられた', '練習させた', '練習させった'], answer: 1 },
    ]
  },

  // ---- 第 61 關：希望別人做 (～てほしい) ----
  {
    id: 'n3_ch61',
    level: 'N3',
    title: '希望別人做 (～てほしい)',
    grammar: [
      {
        pattern: '動詞て形 ＋ ほしい / もらいたい',
        explanation: '表示說話者對他人的期望，希望對方做某事。「希望你(他)...」。期待的對象用助詞「に」標示。不能用來表達自己想做某事(自己想做用～たい)。',
        examples: [
          { jp: 'あなたに教{おし}えてほしいです。', romaji: 'Anata ni oshiete hoshii desu.', zh: '我希望你能教我。' },
          { jp: '雨{あめ}が降{ふ}らないでもらいたい。', romaji: 'Ame ga furanai de moraitai.', zh: '真希望不要下雨。' },
        ]
      }
    ],
    vocabulary: [
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導 (II類動詞)' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙 (I類動詞)' },
      { word: '来る', reading: 'くる', romaji: 'kuru', meaning: '來 (III類動詞)' },
      { word: '治る', reading: 'なおる', romaji: 'naoru', meaning: '痊癒/復原 (I類動詞)' },
      { word: '言う', reading: 'いう', romaji: 'iu', meaning: '說 (I類動詞)' },
      { word: '早く', reading: 'はやく', romaji: 'hayaku', meaning: '早點/快點 (副詞)' },
      { word: 'ずっと', reading: 'ずっと', romaji: 'zutto', meaning: '一直 (副詞)' },
      { word: '一緒に', reading: 'いっしょに', romaji: 'issho ni', meaning: '一起 (副詞)' },
      { word: '宿題', reading: 'しゅくだい', romaji: 'shukudai', meaning: '作業' },
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '生病/疾病' },
    ],
    quiz: [
      { question: '先生___教えてほしいです。(希望老師)', options: ['に', 'が', 'を', 'で'], answer: 0 },
      { question: '「治る」的意思是？', options: ['壞掉', '痊癒/復原', '生病', '修理'], answer: 1 },
      { question: 'あなたにずっと一緒に___ほしい。(希望你在)', options: ['いて', 'あって', 'して', 'きて'], answer: 0 },
      { question: '早く病気が___ほしいです。(希望病快好)', options: ['治って', '治して', '治りて', '治ってて'], answer: 0 },
      { question: 'この事は誰にも___もらいたい。(希望你別說)', options: ['言わないで', '言わなくて', '言わなく', '言わない'], answer: 0 },
      { question: '田中さんに___ほしいです。(希望能幫忙)', options: ['手伝って', '手伝ってて', '手伝う', '手伝わないで'], answer: 0 },
      { question: '明日、私の家に___もらいたい。(希望你能來)', options: ['来て', '来る', '来ない', '来なく'], answer: 0 },
    ]
  },
  // ---- 第 62 關：就在那一瞬間 (～たとたん / ～最中に) ----
  {
    id: 'n3_ch62',
    level: 'N3',
    title: '就在那一瞬間 (～たとたん / ～最中に)',
    grammar: [
      {
        pattern: '動詞た形 ＋ とたん（に）',
        explanation: '表示「一做某事，就立刻...」。通常後句會接令人意外、沒預料到的事情發生。不能接說話者的意志、請求或命令。',
        examples: [
          { jp: '窓{まど}を開{あ}けたとたん、強{つよ}い風{かぜ}が入{はい}ってきた。', romaji: 'Mado o aketa totan, tsuyoi kaze ga haitte kita.', zh: '一打開窗戶，強風就吹了進來。' },
          { jp: '家{いえ}を出{で}たとたんに、雨{あめ}が降{ふ}り出{だ}した。', romaji: 'Ie o deta totan ni, ame ga furidashita.', zh: '才剛出門，就開始下雨了。' },
        ]
      },
      {
        pattern: '動詞て形いる / 名詞の ＋ 最中{さいちゅう}に',
        explanation: '表示「正當...的時候」。多半指正在進行某動作的最高潮時，被意外的事情打斷或發生預料之外的事。',
        examples: [
          { jp: '会議{かいぎ}の最中{さいちゅう}に、携帯{けいたい}が鳴{な}った。', romaji: 'Kaigi no saichū ni, keitai ga natta.', zh: '開會開到一半，手機響了。' },
          { jp: '考{かんが}えている最中{さいちゅう}だから、話{はな}しかけないで。', romaji: 'Kangaete iru saichū da kara, hanashikakenaide.', zh: '我正在思考，請別跟我說話。' },
        ]
      }
    ],
    vocabulary: [
      { word: '窓', reading: 'まど', romaji: 'mado', meaning: '窗戶' },
      { word: '開ける', reading: 'あける', romaji: 'akeru', meaning: '打開 (II類動詞)' },
      { word: '風', reading: 'かぜ', romaji: 'kaze', meaning: '風' },
      { word: '最中', reading: 'さいちゅう', romaji: 'saichū', meaning: '正在...之中' },
      { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: '會議' },
      { word: '携帯', reading: 'けいたい', romaji: 'keitai', meaning: '手機' },
      { word: '鳴る', reading: 'なる', romaji: 'naru', meaning: '鳴響 (I類動詞)' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考 (II類動詞)' },
      { word: '話しかける', reading: 'はなしかける', romaji: 'hanashikakeru', meaning: '搭話/攀談 (II類動詞)' },
      { word: '降り出す', reading: 'ふりだす', romaji: 'furidasu', meaning: '開始下(雨/雪) (I類動詞)' },
    ],
    quiz: [
      { question: '立ち上がっ___、めまいがした。(一站起來)', options: ['たとたん', 'たところ', 'た最中', 'たばかり'], answer: 0 },
      { question: '食事の___に、お客さんが来た。(正當)', options: ['間', '最中', 'うち', 'とたん'], answer: 1 },
      { question: '「最中」的讀音是？', options: ['さいなか', 'もなか', 'さいちゅう', 'さいきん'], answer: 2 },
      { question: '「話しかける」的意思是？', options: ['自言自語', '說到底', '結束對話', '搭話/攀談'], answer: 3 },
      { question: '家を出た___、雨が降り出した。', options: ['最中', 'とたん', 'ばかり', 'ところ'], answer: 1 },
      { question: '窓を開けた___、鳥が入ってきた。(一打開窗戶)', options: ['とたん', '最中', 'ところ', 'ばかり'], answer: 0 },
      { question: 'テストの___に、お腹が痛くなった。(正當...時候)', options: ['最中', 'とたん', 'あいだ', 'うち'], answer: 0 },
    ]
  },

  // ---- 第 63 關：每一次都這樣 (～たびに / ～ついでに) ----
  {
    id: 'n3_ch63',
    level: 'N3',
    title: '每一次都這樣 (～たびに / ～ついでに)',
    grammar: [
      {
        pattern: '動詞辭書形 / 名詞の ＋ たびに',
        explanation: '表示「每當...就一定...」。強調某動作只要發生，就伴隨著相同的後續動作或結果。不可用於日常瑣事(如: 每天早上起床時)。',
        examples: [
          { jp: 'この曲{きょく}を聞{き}くたびに、昔{むかし}を思{おも}い出{だ}す。', romaji: 'Kono kyoku o kiku tabi ni, mukashi o omoidasu.', zh: '每當聽見這首歌，就會想起從前。' },
          { jp: '父{ちち}は出張{しゅっちょう}のたびに、お土産{みやげ}を買{か}ってきてくれる。', romaji: 'Chichi wa shutchō no tabi ni, o-miyage o katte kite kureru.', zh: '爸爸每次出差都會買名產回來。' },
        ]
      },
      {
        pattern: '動詞辭書形/た形 / 名詞の ＋ ついでに',
        explanation: '表示「順便...」。趁著做A動作的機會，順便做B動作。A是主要目的，B是附帶的。',
        examples: [
          { jp: '散歩{さんぽ}のついでに、手紙{てがみ}を出{だ}してきた。', romaji: 'Sanpo no tsuide ni, tegami o dashite kita.', zh: '去散步時，順便把信寄了。' },
          { jp: '銀行{ぎんこう}へ行{い}くついでに、買{か}い物{もの}をした。', romaji: 'Ginkō e iku tsuide ni, kaimono o shita.', zh: '去銀行時順便買了東西。' },
        ]
      }
    ],
    vocabulary: [
      { word: '曲', reading: 'きょく', romaji: 'kyoku', meaning: '歌曲/曲子' },
      { word: '昔', reading: 'むかし', romaji: 'mukashi', meaning: '從前/往昔' },
      { word: '思い出す', reading: 'おもいだす', romaji: 'omoidasu', meaning: '想起/回憶起 (I類動詞)' },
      { word: '出張', reading: 'しゅっちょう', romaji: 'shutchō', meaning: '出差' },
      { word: 'お土産', reading: 'おみやげ', romaji: 'omiyage', meaning: '伴手禮/名產' },
      { word: '散歩', reading: 'さんぽ', romaji: 'sanpo', meaning: '散步' },
      { word: '手紙', reading: 'てがみ', romaji: 'tegami', meaning: '信件' },
      { word: '銀行', reading: 'ぎんこう', romaji: 'ginkō', meaning: '銀行' },
      { word: '買い物', reading: 'かいもの', romaji: 'kaimono', meaning: '購物' },
      { word: '寄る', reading: 'よる', romaji: 'yoru', meaning: '順路去/靠近 (I類動詞)' },
    ],
    quiz: [
      { question: 'この写真を見る___、家族を思い出す。(每當)', options: ['ついでに', 'たびに', '最中に', 'ばかりに'], answer: 1 },
      { question: '「出張」的讀音是？', options: ['しゅっちょう', 'しゅちょう', 'しゅつちょう', 'しゅうちょ'], answer: 0 },
      { question: '買い物に行く___、銀行に寄った。(順便)', options: ['たびに', 'ついでに', 'うちに', '最中に'], answer: 1 },
      { question: '「思い出す」的意思是？', options: ['想出來', '思考', '回憶起/想起', '發明'], answer: 2 },
      { question: '「昔」的讀音是？', options: ['むかし', 'きゅう', 'ふるい', 'さき'], answer: 0 },
      { question: 'この本を読む___、泣いてしまう。(每當)', options: ['たびに', 'ついでに', 'うちに', '最中に'], answer: 0 },
      { question: '散歩の___、パンを買ってきた。(順便)', options: ['ついでに', 'たびに', 'うちに', 'とたんに'], answer: 0 },
    ]
  },

  // ---- 第 64 關：狀態的漸變 (逐漸改變：～ていく / ～てくる) ----
  {
    id: 'n3_ch64',
    level: 'N3',
    title: '狀態的漸變 (～ていく / ～てくる)',
    grammar: [
      {
        pattern: '動詞て形 ＋ いく',
        explanation: '表示狀態的漸變。「越來越... / 會漸漸...」。以「現在」為基準點，描述「朝著未來持續發展」或「遠離說話者」。',
        examples: [
          { jp: 'これからどんどん寒{さむ}くなっていくでしょう。', romaji: 'Korekara dondon samuku natte iku deshō.', zh: '接下來應該會越來越冷吧。' },
          { jp: '子供{こども}はすぐに大{おお}きくなっていく。', romaji: 'Kodomo wa sugu ni ōkiku natte iku.', zh: '孩子很快就會長大（逐漸長大）。' },
        ]
      },
      {
        pattern: '動詞て形 ＋ くる',
        explanation: '表示「一直以來...」或「漸漸變得...」。以「過去」為起點，發展到「現在」，或動作/狀態「朝著說話者靠近」。',
        examples: [
          { jp: '最近{さいきん}、日本語{にほんご}が分{わ}かってきました。', romaji: 'Saikin, nihongo ga wakatte kimashita.', zh: '最近，漸漸聽得懂日文了。' },
          { jp: '雨{あめ}が降{ふ}ってきました。', romaji: 'Ame ga futte kimashita.', zh: '下起雨來了（變化發生）。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'どんどん', reading: 'どんどん', romaji: 'dondon', meaning: '不斷地/接連不斷' },
      { word: '最近', reading: 'さいきん', romaji: 'saikin', meaning: '最近' },
      { word: '増える', reading: 'ふえる', romaji: 'fueru', meaning: '增加(自動詞) (II類動詞)' },
      { word: '減る', reading: 'へる', romaji: 'heru', meaning: '減少(自動詞) (I類動詞)' },
      { word: '変わる', reading: 'かわる', romaji: 'kawaru', meaning: '改變 (I類動詞)' },
      { word: '慣れる', reading: 'なれる', romaji: 'nareru', meaning: '習慣 (II類動詞)' },
      { word: '寒くなる', reading: 'さむくなる', romaji: 'samuku naru', meaning: '變冷 (I類動詞)' },
      { word: '大きくなる', reading: 'おおきくなる', romaji: 'ōkiku naru', meaning: '變大/長大 (I類動詞)' },
      { word: '分かってくる', reading: 'わかってくる', romaji: 'wakatte kuru', meaning: '漸漸了解 (III類動詞)' },
      { word: '続く', reading: 'つづく', romaji: 'tsuzuku', meaning: '持續 (I類動詞)' },
    ],
    quiz: [
      { question: 'これからも日本語の勉強を続け___つもりです。(持續下去)', options: ['ていく', 'てくる', 'ておく', 'てしまう'], answer: 0 },
      { question: '最近、少し太っ___。(一直到現在漸漸變胖)', options: ['ていった', 'てきた', 'ておいた', 'てあった'], answer: 1 },
      { question: '「増える」的意思是？', options: ['減少', '停止', '增加', '改變'], answer: 2 },
      { question: '雨が降っ___。傘を持っていますか。(下起雨來了)', options: ['てきた', 'ていった', 'ておいた', 'てみた'], answer: 0 },
      { question: '「どんどん」的意思是？', options: ['偶爾', '不斷地/接連不斷', '稍微', '慢慢地'], answer: 1 },
      { question: '日本語がだんだん分かっ___。(漸漸聽得懂了)', options: ['てきた', 'ていった', 'ておいた', 'てある'], answer: 0 },
      { question: 'これからも人口は減っ___でしょう。(應該會越來越少)', options: ['ていく', 'てくる', 'てしまう', 'ておく'], answer: 0 },
    ]
  },

  // ---- 第 65 關：原來是這麼一回事 (理解與結論：～わけだ / ～というわけだ) ----
  {
    id: 'n3_ch65',
    level: 'N3',
    title: '原來是這麼一回事 (理解與結論)',
    grammar: [
      {
        pattern: '普通形 ＋ わけだ',
        explanation: '表示基於某種原因或事實，推導出理所當然的結論。「難怪... / 也就是說...」。名詞+な/である，な形容詞+な。',
        examples: [
          { jp: '夜中{よなか}の２時{にじ}か。眠{ねむ}いわけだ。', romaji: 'Yonaka no ni-ji ka. Nemui wake da.', zh: '半夜兩點了啊。難怪會睏。' },
          { jp: '１０年{じゅうねん}日本{にほん}に住{す}んでいるから、日本語{にほんご}が上手{じょうず}なわけだ。', romaji: 'Jū-nen nihon ni sunde iru kara, nihongo ga jōzu na wake da.', zh: '他在日本住了十年，難怪日文這麼好。' },
        ]
      },
      {
        pattern: '普通形 ＋ というわけだ',
        explanation: '對某件事做總結或解釋。「也就是說... / 意思是說...」。用來換句話說，或將對方的話做出結論。',
        examples: [
          { jp: 'つまり、あなたも行{い}きたいというわけですね。', romaji: 'Tsumari, anata mo ikitai to iu wake desu ne.', zh: '也就是說，你也想去對吧。' },
        ]
      }
    ],
    vocabulary: [
      { word: '夜中', reading: 'よなか', romaji: 'yonaka', meaning: '半夜' },
      { word: '眠い', reading: 'ねむい', romaji: 'nemui', meaning: '想睡的/睏的 (い形容詞)' },
      { word: 'つまり', reading: 'つまり', romaji: 'tsumari', meaning: '也就是說/總而言之' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長的 (な形容詞)' },
      { word: '住む', reading: 'すむ', romaji: 'sumu', meaning: '居住 (I類動詞)' },
      { word: '理由', reading: 'りゆう', romaji: 'riyū', meaning: '理由' },
      { word: '納得する', reading: 'なっとくする', romaji: 'nattoku suru', meaning: '理解/接受 (III類動詞)' },
      { word: '結論', reading: 'けつろん', romaji: 'ketsuron', meaning: '結論' },
      { word: '理解する', reading: 'りかいする', romaji: 'rikai suru', meaning: '理解 (III類動詞)' },
      { word: '説明する', reading: 'せつめいする', romaji: 'setsumei suru', meaning: '說明 (III類動詞)' },
    ],
    quiz: [
      { question: '毎日練習しているから、上手な___。(難怪會擅長)', options: ['はずだ', 'わけだ', 'ことだ', 'ものだ'], answer: 1 },
      { question: '「つまり」的意思是？', options: ['可是', '但是', '總而言之/也就是說', '然而'], answer: 2 },
      { question: '熱が39度もある。体がだるい___。(難怪)', options: ['はずだ', 'ことだ', 'わけだ', 'べきだ'], answer: 2 },
      { question: '「納得する」的意思是？', options: ['不滿', '拒絕', '生氣', '理解/接受'], answer: 3 },
      { question: 'つまり、会議は中止___わけですね。', options: ['だという', 'だ', 'という', 'な'], answer: 2 },
      { question: '10年も住んでいるから、道に詳しい___。(難怪很熟)', options: ['わけだ', 'はずだ', 'べきだ', 'ことだ'], answer: 0 },
      { question: '雪が降っている。寒い___。(難怪很冷)', options: ['わけだ', 'はずだ', 'ことだ', 'ものだ'], answer: 0 },
    ]
  },

  // ---- 第 66 關：剛剛才結束 (剛做完：～たばかりだ / ～ところだ) ----
  {
    id: 'n3_ch66',
    level: 'N3',
    title: '剛剛才結束 (～たばかりだ / ～ところだ)',
    grammar: [
      {
        pattern: '動詞た形 ＋ ばかりだ',
        explanation: '表示「才剛...」。說話者心理上覺得離動作發生的時間不遠。即使客觀上過了一個月，只要說話者覺得短，也可以用。',
        examples: [
          { jp: '先月{せんげつ}、日本{にほん}に来{き}たばかりです。', romaji: 'Sengetsu, nihon ni kita bakari desu.', zh: '我上個月才剛來日本。' },
          { jp: 'さっき、ご飯{ごはん}を食{た}べたばかりだ。', romaji: 'Sakki, gohan o tabeta bakari da.', zh: '剛剛才吃過飯。' },
        ]
      },
      {
        pattern: '動詞た形 ＋ ところだ',
        explanation: '表示「剛剛才...」。強調動作在客觀時間上真的才剛結束幾秒鐘或幾分鐘而已。常跟「たった今(剛才)」搭配使用。',
        examples: [
          { jp: 'たった今{いま}、バスが出発{しゅっぱつ}したところです。', romaji: 'Tattaima, basu ga shuppatsu shita tokoro desu.', zh: '公車剛剛才出發。' },
        ]
      }
    ],
    vocabulary: [
      { word: '先月', reading: 'せんげつ', romaji: 'sengetsu', meaning: '上個月' },
      { word: 'さっき', reading: 'さっき', romaji: 'sakki', meaning: '剛才(一段時間前)' },
      { word: 'たった今', reading: 'たったいま', romaji: 'tattaima', meaning: '剛剛(就在一瞬間前)' },
      { word: '出発する', reading: 'しゅっぱつする', romaji: 'shuppatsu suru', meaning: '出發 (III類動詞)' },
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚 (III類動詞)' },
      { word: '終わる', reading: 'おわる', romaji: 'owaru', meaning: '結束 (I類動詞)' },
      { word: '到着する', reading: 'とうちゃくする', romaji: 'tōchaku suru', meaning: '抵達 (III類動詞)' },
      { word: '入社する', reading: 'にゅうしゃする', romaji: 'nyūsha suru', meaning: '進公司 (III類動詞)' },
      { word: '覚える', reading: 'おぼえる', romaji: 'oboeru', meaning: '記住/背 (II類動詞)' },
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: '回去 (I類動詞)' },
    ],
    quiz: [
      { question: '半年前に結婚した___です。(心理上覺得才剛結婚)', options: ['ところ', 'ばかり', '最中', 'たび'], answer: 1 },
      { question: 'たった今、会議が終わっ___です。(客觀上剛剛結束)', options: ['たところ', 'たばかり', 'るばかり', 'た最中'], answer: 0 },
      { question: '「さっき」與「たった今」哪個表示的時間距離現在更近？', options: ['さっき', 'たった今', '一樣近', '無法比較'], answer: 1 },
      { question: '先月入社した___なので、まだ仕事が分かりません。', options: ['ところ', 'ばかり', '最中', 'たび'], answer: 1 },
      { question: '「到着する」的讀音是？', options: ['とうちゃくする', 'とちゃくする', 'とうじゃくする', 'どうちゃくする'], answer: 0 },
      { question: 'さっきご飯を食べた___です。(剛剛才吃)', options: ['ばかり', 'ところ', '最中', 'たび'], answer: 0 },
      { question: 'たった今、電車が出発した___です。(剛剛才出發)', options: ['ところ', 'ばかり', '最中', 'うち'], answer: 0 },
    ]
  },

  // ---- 第 67 關：簡直就像... (比喻與典型：～みたい / ～らしい) ----
  {
    id: 'n3_ch67',
    level: 'N3',
    title: '簡直就像... (比喻與典型)',
    grammar: [
      {
        pattern: '名詞 ＋ みたいだ / みたいな ＋ 名詞 / みたいに ＋ 動/形',
        explanation: '表示比喻。「簡直就像...一樣」。兩者實際上並不是同一個東西，只是特徵相似。口語用法。',
        examples: [
          { jp: '彼女{かのじょ}は太陽{たいよう}みたいに明{あか}るい。', romaji: 'Kanojo wa taiyō mitai ni akarui.', zh: '她像太陽一樣開朗。' },
          { jp: '彼{かれ}は子供{こども}みたいな性格{せいかく}だ。', romaji: 'Kare wa kodomo mitai na seikaku da.', zh: '他有著像小孩一樣的性格。' },
        ]
      },
      {
        pattern: '名詞 ＋ らしい',
        explanation: '表示典型。「具有...應有的特質/風格」。兩者是同一個東西，只是表現出了它最典型的特徵。',
        examples: [
          { jp: '今日{きょう}は春{はる}らしい天気{てんき}ですね。', romaji: 'Kyō wa haru rashii tenki desu ne.', zh: '今天是典型充滿春意的好天氣呢。' },
          { jp: 'もっと男{おとこ}らしくしなさい。', romaji: 'Motto otokorashiku shinasai.', zh: '你要更有男子氣概一點。' },
        ]
      }
    ],
    vocabulary: [
      { word: '太陽', reading: 'たいよう', romaji: 'taiyō', meaning: '太陽' },
      { word: '明るい', reading: 'あかるい', romaji: 'akarui', meaning: '開朗的/明亮的 (い形容詞)' },
      { word: '性格', reading: 'せいかく', romaji: 'seikaku', meaning: '性格' },
      { word: '春', reading: 'はる', romaji: 'haru', meaning: '春天' },
      { word: '男らしい', reading: 'おとこらしい', romaji: 'otokorashii', meaning: '有男子氣概的 (い形容詞)' },
      { word: '女らしい', reading: 'おんならしい', romaji: 'onnarashii', meaning: '有女人味的 (い形容詞)' },
      { word: '子供', reading: 'こども', romaji: 'kodomo', meaning: '小孩' },
      { word: '大人', reading: 'おとな', romaji: 'otona', meaning: '大人' },
      { word: '宝石', reading: 'ほうせき', romaji: 'hōseki', meaning: '寶石' },
      { word: '星', reading: 'ほし', romaji: 'hoshi', meaning: '星星' },
    ],
    quiz: [
      { question: 'まるで星___きれいだ。(像星星一樣)', options: ['らしい', 'みたいに', 'みたいな', 'らしく'], answer: 1 },
      { question: '今日は本当に秋___天気ですね。(秋高氣爽的典型)', options: ['みたい', 'らしい', 'みたいな', 'らしく'], answer: 1 },
      { question: '「性格」的讀音是？', options: ['せいかく', 'せいかく', 'せがく', 'せいごう'], answer: 0 },
      { question: '大人なら、大人___行動しなさい。(具有大人風範地)', options: ['みたいに', 'らしく', 'みたいな', 'らしい'], answer: 1 },
      { question: '「宝石」的意思是？', options: ['寶藏', '金幣', '寶石', '岩石'], answer: 2 },
      { question: '彼女はひまわり___明るい。(像向日葵一樣)', options: ['みたいに', 'らしい', 'みたいな', 'らしく'], answer: 0 },
      { question: '今日は冬___寒い日ですね。(典型冬天的)', options: ['らしい', 'みたい', 'みたいな', 'らしく'], answer: 0 },
    ]
  },

  // ---- 第 68 關：出乎意料之外 (明明...卻：～わりに / ～にしては) ----
  {
    id: 'n3_ch68',
    level: 'N3',
    title: '出乎意料之外 (～わりに / ～にしては)',
    grammar: [
      {
        pattern: '普通形 / 名詞の / な形な ＋ わりに（は）',
        explanation: '表示結果與前項的程度不相稱。「明明...卻... / 以...來說...」。可用於評價事物或人，包含較廣泛的程度差異。',
        examples: [
          { jp: 'このレストランは、値段{ねだん}が高{たか}いわりに美味{おい}しくない。', romaji: 'Kono resutoran wa, nedan ga takai wari ni oishikunai.', zh: '這間餐廳明明價格很貴，卻不好吃。' },
          { jp: '彼{かれ}はよく食{た}べるわりには、太{ふと}らない。', romaji: 'Kare wa yoku taberu wari ni wa, futoranai.', zh: '他明明很常吃，卻不會變胖。' },
        ]
      },
      {
        pattern: '普通形 / 名詞 ＋ にしては',
        explanation: '表示與特定事實或客觀標準不符。「以(某身分/客觀事實)來說，卻...」。前面多接明確的數字、年齡或名詞。',
        examples: [
          { jp: '外国人{がいこくじん}にしては、日本語{にほんご}が上手{じょうず}だ。', romaji: 'Gaikokujin ni shite wa, nihongo ga jōzu da.', zh: '以外國人來說，日文真好。' },
          { jp: '初{はじ}めてにしては、よくできた。', romaji: 'Hajimete ni shite wa, yoku dekita.', zh: '以第一次來說，做得很好。' },
        ]
      }
    ],
    vocabulary: [
      { word: '値段', reading: 'ねだん', romaji: 'nedan', meaning: '價格/價錢' },
      { word: '太る', reading: 'ふとる', romaji: 'futoru', meaning: '變胖 (I類動詞)' },
      { word: '外国人', reading: 'がいこくじん', romaji: 'gaikokujin', meaning: '外國人' },
      { word: '初めて', reading: 'はじめて', romaji: 'hajimete', meaning: '第一次' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長的 (な形容詞)' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: '不擅長的 (な形容詞)' },
      { word: '年', reading: 'とし', romaji: 'toshi', meaning: '年齡/歲數' },
      { word: '若く見える', reading: 'わかくみえる', romaji: 'wakaku mieru', meaning: '看起來年輕 (II類動詞)' },
      { word: '勉強する', reading: 'べんきょうする', romaji: 'benkyō suru', meaning: '讀書/學習 (III類動詞)' },
      { word: '成績', reading: 'せいせき', romaji: 'seiseki', meaning: '成績' },
    ],
    quiz: [
      { question: '値段が安い___、とても美味しい。(明明很便宜卻)', options: ['にしては', 'わりに', 'ために', 'ように'], answer: 1 },
      { question: '10歳___、体が大きい。(以10歲這個明確數字來說)', options: ['わりに', 'にしては', 'ために', 'ように'], answer: 1 },
      { question: '「若く見える」的意思是？', options: ['看起來很老', '看起來很窮', '看起來年輕', '看起來很笨'], answer: 2 },
      { question: 'たくさん勉強した___、成績が悪かった。', options: ['わりには', 'にしては', 'ために', 'ように'], answer: 0 },
      { question: '「成績」的讀音是？', options: ['せいせき', 'せせき', 'せいでき', 'せでき'], answer: 0 },
      { question: '初めて___、上手にできた。(以第一次來說)', options: ['にしては', 'わりに', 'ために', 'ように'], answer: 0 },
      { question: 'この靴は高い___、すぐ壊れた。(明明很貴)', options: ['わりに', 'にしては', 'ために', 'ように'], answer: 0 },
    ]
  },

  // ---- 第 69 關：多虧了與都怪你 (好壞原因：～おかげで / ～せいで) ----
  {
    id: 'n3_ch69',
    level: 'N3',
    title: '多虧了與都怪你 (～おかげで / ～せいで)',
    grammar: [
      {
        pattern: '普通形 / 名詞の / な形な ＋ おかげで',
        explanation: '表示因為某原因而產生了「好的結果」。「多虧了... / 幸虧...」。帶有感謝的語氣。',
        examples: [
          { jp: '先生{せんせい}のおかげで、試験{しけん}に合格{ごうかく}できました。', romaji: 'Sensei no okage de, shiken ni gōkaku dekimashita.', zh: '多虧了老師，我才通過了考試。' },
          { jp: '天気{てんき}がよかったおかげで、景色{けしき}がきれいに見{み}えた。', romaji: 'Tenki ga yokatta okage de, keshiki ga kirei ni mieta.', zh: '幸虧天氣很好，風景看得很清楚。' },
        ]
      },
      {
        pattern: '普通形 / 名詞の / な形な ＋ せいで',
        explanation: '表示因為某原因而產生了「壞的結果」。「都怪... / 全是因為...」。帶有責備、遺憾或埋怨的語氣。',
        examples: [
          { jp: 'バスが遅{おく}れたせいで、遅刻{ちこく}してしまった。', romaji: 'Basu ga okureta sei de, chikoku shite shimatta.', zh: '都怪公車誤點，害我遲到了。' },
          { jp: '寝坊{ねぼう}したせいで、朝{あさ}ごはんが食{た}べられなかった。', romaji: 'Nebō shita sei de, asagohan ga taberarenakatta.', zh: '都怪我睡過頭，沒吃到早餐。' },
        ]
      }
    ],
    vocabulary: [
      { word: '合格する', reading: 'ごうかくする', romaji: 'gōkaku suru', meaning: '及格/合格 (III類動詞)' },
      { word: '景色', reading: 'けしき', romaji: 'keshiki', meaning: '景色/風景' },
      { word: '遅刻する', reading: 'ちこくする', romaji: 'chikoku suru', meaning: '遲到 (III類動詞)' },
      { word: '寝坊する', reading: 'ねぼうする', romaji: 'nebō suru', meaning: '睡過頭 (III類動詞)' },
      { word: '失敗する', reading: 'しっぱいする', romaji: 'shippai suru', meaning: '失敗 (III類動詞)' },
      { word: '成功する', reading: 'せいこうする', romaji: 'seikō suru', meaning: '成功 (III類動詞)' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙 (I類動詞)' },
      { word: '渋滞', reading: 'じゅうたい', romaji: 'jūtai', meaning: '塞車' },
      { word: '間に合う', reading: 'まにあう', romaji: 'maniau', meaning: '來得及 (I類動詞)' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
    ],
    quiz: [
      { question: '友達が手伝ってくれた___、早く終わった。(好結果)', options: ['せいで', 'おかげで', 'ために', 'ように'], answer: 1 },
      { question: '渋滞の___、飛行機に間に合わなかった。(壞結果)', options: ['せいで', 'おかげで', 'ために', 'ように'], answer: 0 },
      { question: '「寝坊」的讀音是？', options: ['ねぼう', 'あさぼう', 'しんぼう', 'ねほう'], answer: 0 },
      { question: '「間に合う」的意思是？', options: ['遲到', '見面', '來得及', '剛好'], answer: 2 },
      { question: '薬を飲んだ___、熱が下がった。(好結果)', options: ['せいで', 'おかげで', 'わりに', 'ばかりに'], answer: 1 },
      { question: '先生の___、合格できました。(多虧了)', options: ['おかげで', 'せいで', 'ために', 'ように'], answer: 0 },
      { question: '寝坊した___、バスに乗り遅れた。(都怪)', options: ['せいで', 'おかげで', 'ために', 'ように'], answer: 0 },
    ]
  },

  // ---- 第 70 關：滿滿都是、淨是 (數量與頻率：～ばかり / ～だらけ) ----
  {
    id: 'n3_ch70',
    level: 'N3',
    title: '滿滿都是、淨是 (～ばかり / ～だらけ)',
    grammar: [
      {
        pattern: '名詞 / 動詞て形 ＋ ばかり',
        explanation: '表示同一個動作不斷重複，或同一個事物大量存在。「淨是... / 老是...」。帶有貶義或抱怨語氣。',
        examples: [
          { jp: '彼{かれ}はゲームばかりしている。', romaji: 'Kare wa gēmu bakari shite iru.', zh: '他老是在打遊戲。' },
          { jp: '甘{あま}いものばかり食{た}べると太{ふと}りますよ。', romaji: 'Amai mono bakari taberu to futorimasu yo.', zh: '老是吃甜食會變胖喔。' },
        ]
      },
      {
        pattern: '名詞 ＋ だらけ',
        explanation: '表示表面上滿是某種不好的東西。「滿是... / 全是...」。只能接名詞，且通常是具體可見的負面事物（如泥、血、錯誤等）。',
        examples: [
          { jp: '彼{かれ}の服{ふく}は泥{どろ}だらけだ。', romaji: 'Kare no fuku wa doro darake da.', zh: '他的衣服沾滿泥巴。' },
          { jp: 'この作文{さくぶん}は間違いだらけだ。', romaji: 'Kono sakubun wa machigai darake da.', zh: '這篇作文錯字連篇。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'ゲーム', reading: 'ゲーム', romaji: 'gēmu', meaning: '遊戲' },
      { word: '甘い', reading: 'あまい', romaji: 'amai', meaning: '甜的 (い形容詞)' },
      { word: '泥', reading: 'どろ', romaji: 'doro', meaning: '泥巴' },
      { word: '間違い', reading: 'まちがい', romaji: 'machigai', meaning: '錯誤' },
      { word: '埃', reading: 'ほこり', romaji: 'hokori', meaning: '灰塵' },
      { word: '血', reading: 'ち', romaji: 'chi', meaning: '血' },
      { word: '文句', reading: 'もんく', romaji: 'monku', meaning: '抱怨/不滿' },
      { word: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', meaning: '玩耍 (I類動詞)' },
      { word: '作文', reading: 'さくぶん', romaji: 'sakubun', meaning: '作文' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣 (I類動詞)' },
    ],
    quiz: [
      { question: '弟は遊んで___いる。(老是在玩)', options: ['だらけ', 'ばかり', 'のみ', 'しか'], answer: 1 },
      { question: '部屋の隅は埃___だった。(滿是灰塵)', options: ['ばかり', 'だけ', 'だらけ', 'のみ'], answer: 2 },
      { question: '「文句」的意思是？', options: ['文章', '抱怨/不滿', '句子', '文學'], answer: 1 },
      { question: '彼は文句___言っている。(老是在抱怨)', options: ['だらけ', 'ばかり', 'しか', 'だけ'], answer: 1 },
      { question: '「泥」的讀音是？', options: ['どろ', 'すな', 'つち', 'ほこり'], answer: 0 },
      { question: '彼はゲーム___している。(老是在玩)', options: ['ばかり', 'だらけ', 'のみ', 'しか'], answer: 0 },
      { question: 'このテストは間違い___だ。(錯字連篇)', options: ['だらけ', 'ばかり', 'だけ', 'のみ'], answer: 0 },
    ]
  },

  // ---- 第 71 關：差不多就是這樣 (程度表達：～くらい / ～ほど) ----
  {
    id: 'n3_ch71',
    level: 'N3',
    title: '差不多就是這樣 (～くらい / ～ほど)',
    grammar: [
      {
        pattern: '普通形 / 名詞 ＋ くらい（ぐらい） / ほど',
        explanation: '表示程度。「到了...的地步 / 大約...」。兩者大致可互換，但「ほど」的語氣比「くらい」更正式，程度感覺更強。',
        examples: [
          { jp: '死{し}ぬほど疲{つか}れた。', romaji: 'Shinu hodo tsukareta.', zh: '累得要死（累到快死的程度）。' },
          { jp: '泣{な}きたいくらい痛{いた}い。', romaji: 'Nakitai kurai itai.', zh: '痛到想哭的程度。' },
        ]
      },
      {
        pattern: '名詞 ＋ くらい / ほど ＋ ～はない',
        explanation: '表示最高程度。「沒有比...更...的了」。用否定句型來表達「它是最...的」。',
        examples: [
          { jp: '彼{かれ}ほど親切{しんせつ}な人{ひと}はいない。', romaji: 'Kare hodo shinsetsu na hito wa inai.', zh: '沒有比他更親切的人了（他最親切）。' },
          { jp: '試験{しけん}くらい嫌{いや}なものはない。', romaji: 'Shiken kurai iya na mono wa nai.', zh: '沒有比考試更討厭的東西了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '死ぬ', reading: 'しぬ', romaji: 'shinu', meaning: '死 (I類動詞)' },
      { word: '疲れる', reading: 'つかれる', romaji: 'tsukareru', meaning: '疲累 (II類動詞)' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣 (I類動詞)' },
      { word: '痛い', reading: 'いたい', romaji: 'itai', meaning: '痛的 (い形容詞)' },
      { word: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaning: '親切的 (な形容詞)' },
      { word: '試験', reading: 'しけん', romaji: 'shiken', meaning: '考試' },
      { word: '嫌', reading: 'いや', romaji: 'iya', meaning: '討厭的 (な形容詞)' },
      { word: '寂しい', reading: 'さびしい', romaji: 'sabishii', meaning: '寂寞的 (い形容詞)' },
      { word: '怖い', reading: 'こわい', romaji: 'kowai', meaning: '可怕的 (い形容詞)' },
      { word: '驚く', reading: 'おどろく', romaji: 'odoroku', meaning: '吃驚/驚訝 (I類動詞)' },
    ],
    quiz: [
      { question: '声が出ない___驚いた。(到了發不出聲音的地步)', options: ['ばかり', 'ほど', 'だけ', 'しか'], answer: 1 },
      { question: '「嫌」的意思是？', options: ['喜歡的', '可怕的', '討厭的', '寂寞的'], answer: 2 },
      { question: '母の料理___美味しいものはない。(沒有比...更...)', options: ['くらい', 'しか', 'だけ', 'ばかり'], answer: 0 },
      { question: '「怖い」的讀音是？', options: ['こわい', 'いたい', 'くらい', 'つらい'], answer: 0 },
      { question: '歩けない___足が痛い。(到了不能走的地步)', options: ['ほど', 'ばかり', 'だけ', 'のみ'], answer: 0 },
      { question: '泣きたい___嬉しい。(高興到想哭)', options: ['くらい', 'しか', 'だけ', 'ばかり'], answer: 0 },
      { question: '彼___優しい人はいない。(沒有比他更)', options: ['ほど', 'くらい', 'しか', 'だけ'], answer: 0 },
    ]
  },

  // ---- 第 72 關：絕對錯不了 (強烈推測：～に違いない / ～はずだ) ----
  {
    id: 'n3_ch72',
    level: 'N3',
    title: '絕對錯不了 (強烈推測)',
    grammar: [
      {
        pattern: '普通形 ＋ に違{ちが}いない',
        explanation: '表示說話者非常有自信的推測。「絕對是... / 肯定是...」。名詞與な形容詞直接接（不加だ）。',
        examples: [
          { jp: '犯人{はんにん}は彼{かれ}に違{ちが}いない。', romaji: 'Hannin wa kare ni chigainai.', zh: '犯人肯定是他。' },
          { jp: 'こんなに雨{あめ}が降{ふ}っているから、試合{しあい}は中止{ちゅうし}に違{ちが}いない。', romaji: 'Konna ni ame ga futte iru kara, shiai wa chūshi ni chigainai.', zh: '雨下這麼大，比賽一定取消了。' },
        ]
      },
      {
        pattern: '普通形 ＋ はずだ',
        explanation: '表示基於客觀事實或邏輯做出的推斷。「按理說應該...」。如果是對過去行為的記憶（明明做了卻發現沒有），也常使用。',
        examples: [
          { jp: 'あの店{みせ}は今日{きょう}休{やす}みのはずだ。', romaji: 'Ano mise wa kyō yasumi no hazu da.', zh: '那家店今天應該休息。' },
          { jp: 'カバンに入{い}れたはずなのに、財布{さいふ}がない。', romaji: 'Kaban ni ireta hazu na noni, saifu ga nai.', zh: '明明記得放進包包裡了，錢包卻不見了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '犯人', reading: 'はんにん', romaji: 'hannin', meaning: '犯人' },
      { word: '試合', reading: 'しあい', romaji: 'shiai', meaning: '比賽' },
      { word: '中止', reading: 'ちゅうし', romaji: 'chūshi', meaning: '中止' },
      { word: '休み', reading: 'やすみ', romaji: 'yasumi', meaning: '休息/假日' },
      { word: '財布', reading: 'さいふ', romaji: 'saifu', meaning: '錢包' },
      { word: '確信', reading: 'かくしん', romaji: 'kakushin', meaning: '確信' },
      { word: '嘘', reading: 'うそ', romaji: 'uso', meaning: '謊言' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的/事實 (な形容詞)' },
      { word: '絶対に', reading: 'ぜったいに', romaji: 'zettai ni', meaning: '絕對' },
      { word: '見つかる', reading: 'みつかる', romaji: 'mitsukaru', meaning: '被找到 (I類動詞)' },
    ],
    quiz: [
      { question: '彼の話は嘘に___。(肯定是謊言)', options: ['違いない', '過ぎない', 'はずがない', 'わけがない'], answer: 0 },
      { question: '鈴木さんは10年アメリカに住んでいたから、英語が話せる___だ。(按理說應該)', options: ['わけ', 'はず', 'もの', 'こと'], answer: 1 },
      { question: '「財布」的讀音是？', options: ['さいふ', 'さいぶ', 'ざいふ', 'ざいぶ'], answer: 0 },
      { question: 'あんな高い車、彼に買える___。(不可能)', options: ['はずがない', 'に違いない', 'はずだ', 'べきだ'], answer: 0 },
      { question: '「絶対に」的意思是？', options: ['稍微', '絕對', '可能', '大概'], answer: 1 },
      { question: '犯人は彼___。(肯定是他)', options: ['に違いない', 'はずだ', 'わけがない', 'べきだ'], answer: 0 },
      { question: '今日は日曜日だから、銀行は休みの___だ。(按理說應該)', options: ['はず', 'わけ', 'こと', 'もの'], answer: 0 },
    ]
  },

  // ---- 第 73 關：有這個壞可能 (擔憂與可能：～恐れがある / ～かもしれない) ----
  {
    id: 'n3_ch73',
    level: 'N3',
    title: '有這個壞可能 (擔憂與可能)',
    grammar: [
      {
        pattern: '動詞辭書形 / 名詞の ＋ 恐{おそ}れがある',
        explanation: '表示有發生不好事情的危險或可能性。「恐怕會... / 有...的危險」。多用於新聞報導、天氣預報或較生硬的文章。',
        examples: [
          { jp: '台風{たいふう}の影響{えいきょう}で、大雨{おおあめ}になる恐{おそ}れがあります。', romaji: 'Taifū no eikyō de, ōame ni naru osore ga arimasu.', zh: '受颱風影響，恐怕會下大雨。' },
          { jp: 'この病気{びょうき}は伝染{でんせん}する恐{おそ}れがある。', romaji: 'Kono byōki wa densen suru osore ga aru.', zh: '這個疾病有傳染的危險。' },
        ]
      },
      {
        pattern: '普通形 ＋ かもしれない',
        explanation: '表示說話者主觀認為有某種可能性，但不確定。「也許... / 說不定...」。名詞與な形容詞直接接（不加だ）。',
        examples: [
          { jp: '明日{あした}は雨{あめ}かもしれない。', romaji: 'Ashita wa ame kamo shirenai.', zh: '明天也許會下雨。' },
          { jp: '彼{かれ}は本当{ほんとう}のことを知{し}っているかもしれない。', romaji: 'Kare wa hontō no koto o shitte iru kamo shirenai.', zh: '他說不定知道真相。' },
        ]
      }
    ],
    vocabulary: [
      { word: '恐れ', reading: 'おそれ', romaji: 'osore', meaning: '恐懼/危險' },
      { word: '台風', reading: 'たいふう', romaji: 'taifū', meaning: '颱風' },
      { word: '影響', reading: 'えいきょう', romaji: 'eikyō', meaning: '影響' },
      { word: '大雨', reading: 'おおあめ', romaji: 'ōame', meaning: '大雨' },
      { word: '伝染する', reading: 'でんせんする', romaji: 'densen suru', meaning: '傳染 (III類動詞)' },
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '疾病/生病' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '事實/真的 (な形容詞)' },
      { word: '危険', reading: 'きけん', romaji: 'kiken', meaning: '危險 (な形容詞)' },
      { word: '地震', reading: 'じしん', romaji: 'jishin', meaning: '地震' },
      { word: '津波', reading: 'つなみ', romaji: 'tsunami', meaning: '海嘯' },
    ],
    quiz: [
      { question: '津波の___があります。(有發生海嘯的危險)', options: ['恐れ', '心配', '不安', '怖さ'], answer: 0 },
      { question: '約束の時間に遅れる___。(也許會遲到)', options: ['に違いない', 'はずだ', 'かもしれない', 'わけだ'], answer: 2 },
      { question: '「影響」的讀音是？', options: ['えいきょう', 'えいこう', 'えきょう', 'えこう'], answer: 0 },
      { question: '「伝染する」的意思是？', options: ['傳達', '傳統', '傳染', '傳說'], answer: 2 },
      { question: '明日は雪が降る___。(說不定)', options: ['恐れがある', 'かもしれない', 'はずだ', 'に違いない'], answer: 1 },
      { question: '大雨になる___があります。(有下大雨的危險)', options: ['恐れ', '心配', 'かもしれない', 'はず'], answer: 0 },
      { question: '彼は本当のことを知っている___。(說不定)', options: ['かもしれない', '恐れがある', 'はずだ', 'に違いない'], answer: 0 },
    ]
  },

  // ---- 第 74 關：聽別人說的 (客觀傳聞：～ということだ / ～そうだ) ----
  {
    id: 'n3_ch74',
    level: 'N3',
    title: '聽別人說的 (客觀傳聞)',
    grammar: [
      {
        pattern: '普通形 ＋ ということだ / とのことだ',
        explanation: '表示傳聞，將聽到的消息客觀地傳達給別人。「聽說... / 據說...」。比「そうだ」更正式、書面，常搭配「～によると(根據)」。',
        examples: [
          { jp: 'ニュースによると、地震{じしん}があったということだ。', romaji: 'Nyūsu ni yoru to, jishin ga atta to iu koto da.', zh: '根據新聞報導，聽說發生了地震。' },
          { jp: '部長{ぶちょう}は遅{おく}れるとのことです。', romaji: 'Buchō wa okureru to no koto desu.', zh: '據說部長會遲到。（とのことだ是更客氣的縮略語）' },
        ]
      },
      {
        pattern: '普通形 ＋ そうだ（傳聞）',
        explanation: '表示一般的傳聞。「聽說...」。注意前面接的是普通形（與接動詞ます形的樣態そうです不同）。',
        examples: [
          { jp: '彼{かれ}は明日{あした}休{やす}むそうだ。', romaji: 'Kare wa ashita yasumu sō da.', zh: '聽說他明天要請假。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'ニュース', reading: 'ニュース', romaji: 'nyūsu', meaning: '新聞' },
      { word: '地震', reading: 'じしん', romaji: 'jishin', meaning: '地震' },
      { word: '部長', reading: 'ぶちょう', romaji: 'buchō', meaning: '部長' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到 (II類動詞)' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '請假/休息 (I類動詞)' },
      { word: '噂', reading: 'うわさ', romaji: 'uwasa', meaning: '謠言/傳聞' },
      { word: '記事', reading: 'きじ', romaji: 'kiji', meaning: '報導/文章' },
      { word: '発表', reading: 'はっぴょう', romaji: 'happyō', meaning: '發表' },
      { word: '事故', reading: 'じこ', romaji: 'jiko', meaning: '事故/車禍' },
      { word: '事実', reading: 'じじつ', romaji: 'jijitsu', meaning: '事實' },
    ],
    quiz: [
      { question: '手紙によると、みんな元気だ___。(據信上說)', options: ['ということだ', 'というものだ', 'というわけだ', 'というはずだ'], answer: 0 },
      { question: '「記事」的意思是？', options: ['記者', '紀錄', '報導/文章', '記憶'], answer: 2 },
      { question: '社長は３時に戻る___です。(據說/客氣說法)', options: ['とのこと', 'とのもの', 'とのわけ', 'とのはず'], answer: 0 },
      { question: '「噂」的讀音是？', options: ['うわさ', 'うさわ', 'はなし', 'ニュース'], answer: 0 },
      { question: '天気予報によると、明日は晴れる___。(聽說)', options: ['そうだ', 'ようだ', 'みたいだ', 'らしいだ'], answer: 0 },
      { question: 'ニュースによると、事故があった___。(聽說)', options: ['ということだ', 'というものだ', 'というはずだ', 'というわけだ'], answer: 0 },
      { question: '彼は明日休む___。(聽說)', options: ['そうだ', 'ようだ', 'らしいだ', 'みたいだ'], answer: 0 },
    ]
  },

  // ---- 第 75 關：我就是這麼認為 (主觀認定：～に決まっている) ----
  {
    id: 'n3_ch75',
    level: 'N3',
    title: '我就是這麼認為 (主觀認定)',
    grammar: [
      {
        pattern: '普通形 ＋ に決{き}まっている',
        explanation: '表示說話者充滿自信、不容置疑的主觀認定。「一定是... / 肯定是...」。名詞與な形容詞直接接（不加だ）。與「に違いない」類似，但更口語且更為主觀。',
        examples: [
          { jp: 'そんなの、嘘{うそ}に決{き}まっている。', romaji: 'Sonna no, uso ni kimatte iru.', zh: '那種話，肯定是騙人的。' },
          { jp: '練習{れんしゅう}しなければ、負{ま}けるに決{き}まっている。', romaji: 'Renshū shinakereba, makeru ni kimatte iru.', zh: '不練習的話，一定會輸的。' },
        ]
      }
    ],
    vocabulary: [
      { word: '嘘', reading: 'うそ', romaji: 'uso', meaning: '謊言' },
      { word: '決まる', reading: 'きまる', romaji: 'kimaru', meaning: '決定 (I類動詞)' },
      { word: '練習する', reading: 'れんしゅうする', romaji: 'renshū suru', meaning: '練習 (III類動詞)' },
      { word: '負ける', reading: 'まける', romaji: 'makeru', meaning: '輸/敗 (II類動詞)' },
      { word: '勝つ', reading: 'かつ', romaji: 'katsu', meaning: '贏/勝 (I類動詞)' },
      { word: '無理', reading: 'むり', romaji: 'muri', meaning: '不可能/勉強 (な形容詞)' },
      { word: '絶対', reading: 'ぜったい', romaji: 'zettai', meaning: '絕對' },
      { word: '当然', reading: 'とうぜん', romaji: 'tōzen', meaning: '理所當然 (な形容詞)' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣 (I類動詞)' },
      { word: '危ない', reading: 'あぶない', romaji: 'abunai', meaning: '危險的 (い形容詞)' },
    ],
    quiz: [
      { question: '一人でこんな重い物を持つのは、無理___。(一定是不可能)', options: ['に決まっている', 'に違いない', 'はずだ', 'かもしれない'], answer: 0 },
      { question: '「負ける」的反義詞是？', options: ['逃げる', '勝つ', '怒る', '泣く'], answer: 1 },
      { question: 'そんなことをしたら、先生が怒る___。(肯定會生氣)', options: ['に決まっている', 'わけがない', 'はずがない', '恐れがある'], answer: 0 },
      { question: '「無理」的讀音是？', options: ['むり', 'ふり', 'ぶち', 'むち'], answer: 0 },
      { question: 'あんな高い場所は、危ない___。(肯定是危險的)', options: ['に決まっている', 'かもしれない', 'はずだ', 'わけだ'], answer: 0 },
      { question: '練習しなければ、負ける___。(一定會輸)', options: ['に決まっている', 'に違いない', 'はずだ', 'かもしれない'], answer: 0 },
      { question: 'そんな話、嘘___。(肯定是騙人的)', options: ['に決まっている', 'に違いない', 'はずだ', 'かもしれない'], answer: 0 },
    ]
  },

  // ---- 第 76 關：話也不能這麼說 (部分否定：～わけではない / ～とは限らない) ----
  {
    id: 'n3_ch76',
    level: 'N3',
    title: '話也不能這麼說 (部分否定)',
    grammar: [
      {
        pattern: '普通形 ＋ わけではない / わけじゃない',
        explanation: '表示部分否定。「並不是說... / 倒也不是...」。用來修正對方的預期或避免過於極端的斷定。',
        examples: [
          { jp: 'お金{かね}があれば幸{しあわ}せというわけではない。', romaji: 'Okane ga areba shiawase to iu wake de wa nai.', zh: '並不是說有錢就會幸福。' },
          { jp: '嫌{いや}なわけじゃないけど、今日{きょう}は行{い}きたくない。', romaji: 'Iya na wake ja nai kedo, kyō wa ikitakunai.', zh: '倒也不是討厭，只是今天不想去。' },
        ]
      },
      {
        pattern: '普通形 ＋ とは限{かぎ}らない',
        explanation: '表示例外情況的存在。「不一定... / 未必...」。與「必ずしも」連用居多。',
        examples: [
          { jp: '高{たか}いものが必{かなら}ずしもいいものだとは限{かぎ}らない。', romaji: 'Takai mono ga kanarazushimo ii mono da to wa kagiranai.', zh: '貴的東西未必就是好東西。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'お金', reading: 'おかね', romaji: 'okane', meaning: '錢' },
      { word: '幸せ', reading: 'しあわせ', romaji: 'shiawase', meaning: '幸福 (な形容詞)' },
      { word: '嫌', reading: 'いや', romaji: 'iya', meaning: '討厭 (な形容詞)' },
      { word: '限る', reading: 'かぎる', romaji: 'kagiru', meaning: '限制/只限於 (I類動詞)' },
      { word: '必ずしも', reading: 'かならずしも', romaji: 'kanarazushimo', meaning: '未必/不一定(配否定)' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '高/貴的 (い形容詞)' },
      { word: '全部', reading: 'ぜんぶ', romaji: 'zenbu', meaning: '全部' },
      { word: '信じる', reading: 'しんじる', romaji: 'shinjiru', meaning: '相信 (II類動詞)' },
      { word: '正しい', reading: 'ただしい', romaji: 'tadashii', meaning: '正確的 (い形容詞)' },
      { word: '便利', reading: 'べんり', romaji: 'benri', meaning: '便利的 (な形容詞)' },
    ],
    quiz: [
      { question: '日本人がみんな寿司が好きだ___。(不一定喜歡)', options: ['とは限らない', 'わけではない', 'に決まっている', 'に違いない'], answer: 0 },
      { question: '「幸せ」的意思是？', options: ['辛勞', '幸福', '希望', '失望'], answer: 1 },
      { question: '歌が下手な___けど、歌いたくない。(倒也不是不會唱)', options: ['わけじゃない', 'とは限らない', 'はずがない', 'に違いない'], answer: 0 },
      { question: '高いものが___いいものとは限らない。(未必)', options: ['必ずしも', '絶対に', 'きっと', 'まさに'], answer: 0 },
      { question: '「限る」的讀音是？', options: ['かぎる', 'おわる', 'きまる', 'すぎる'], answer: 0 },
      { question: 'お金があれば幸せ___。(並不代表)', options: ['というわけではない', 'というわけだ', 'とは限らない', 'に決まっている'], answer: 0 },
      { question: '高いものが必ずしもいいものだ___。(未必)', options: ['とは限らない', 'わけではない', 'に決まっている', 'に違いない'], answer: 0 },
    ]
  },

  // ---- 第 77 關：你應該這麼做 (強烈建議與義務：～べきだ / ～ことだ) ----
  {
    id: 'n3_ch77',
    level: 'N3',
    title: '你應該這麼做 (建議與義務)',
    grammar: [
      {
        pattern: '動詞辭書形 ＋ べきだ / べきではない',
        explanation: '表示從常理或社會道德來看「理應如此」或「不該如此」。「應該... / 不該...」。語氣較強烈。する可用「すべき」。',
        examples: [
          { jp: '約束{やくそく}は守{まも}るべきだ。', romaji: 'Yakusoku wa mamoru beki da.', zh: '理應遵守約定。' },
          { jp: '子供{こども}はそんな夜遅{よるおそ}くまで遊{あそ}ぶべきではない。', romaji: 'Kodomo wa sonna yoru osoku made asobu beki de wa nai.', zh: '小孩子不該玩到那麼晚。' },
        ]
      },
      {
        pattern: '動詞辭書形/ない形 ＋ ことだ',
        explanation: '給予個人的忠告或建議。「最好... / 應該...」。不帶有強烈的社會義務感，而是說話者的建議。',
        examples: [
          { jp: '上手{じょうず}になりたければ、毎日{まいにち}練習{れんしゅう}することだ。', romaji: 'Jōzu ni naritakereba, mainichi renshū suru koto da.', zh: '想變厲害的話，最好每天練習。' },
          { jp: '無理{むり}をしないことだ。', romaji: 'Muri o shinai koto da.', zh: '最好別太勉強自己。' },
        ]
      }
    ],
    vocabulary: [
      { word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: '約定' },
      { word: '守る', reading: 'まもる', romaji: 'mamoru', meaning: '遵守/保護 (I類動詞)' },
      { word: '夜遅く', reading: 'よるおそく', romaji: 'yoru osoku', meaning: '深夜/很晚' },
      { word: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', meaning: '玩耍 (I類動詞)' },
      { word: '練習する', reading: 'れんしゅうする', romaji: 'renshū suru', meaning: '練習 (III類動詞)' },
      { word: '無理する', reading: 'むりする', romaji: 'muri suru', meaning: '勉強/硬撐 (III類動詞)' },
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉 (I類動詞)' },
      { word: '信じる', reading: 'しんじる', romaji: 'shinjiru', meaning: '相信 (II類動詞)' },
      { word: '従う', reading: 'したがう', romaji: 'shitagau', meaning: '服從/遵從 (I類動詞)' },
      { word: '規則', reading: 'きそく', romaji: 'kisoku', meaning: '規則' },
    ],
    quiz: [
      { question: '他人の悪口を言う___ではない。(不應該)', options: ['べき', 'はず', 'わけ', 'こと'], answer: 0 },
      { question: '「謝る」的意思是？', options: ['感謝', '道歉', '原諒', '生氣'], answer: 1 },
      { question: '健康でいたければ、タバコを吸わない___。(最好)', options: ['ことだ', 'べきだ', 'ものだ', 'わけだ'], answer: 0 },
      { question: '「従う」的讀音是？', options: ['したがう', 'まよう', 'にげる', 'むかう'], answer: 0 },
      { question: '規則は守る___だ。(理應)', options: ['べき', 'はず', 'わけ', 'こと'], answer: 0 },
      { question: '上手になりたければ、毎日練習する___。(最好/建議)', options: ['ことだ', 'べきだ', 'ものだ', 'わけだ'], answer: 0 },
      { question: '子供はそんな夜遅くまで遊ぶ___ではない。(不應該)', options: ['べき', 'こと', 'はず', 'わけ'], answer: 0 },
    ]
  },

  // ---- 第 78 關：這才是社會常理 (普遍真理：～ものだ / ～ものではない) ----
  {
    id: 'n3_ch78',
    level: 'N3',
    title: '這才是社會常理 (～ものだ)',
    grammar: [
      {
        pattern: '動詞辭書形/ない形 / 形容詞 ＋ ものだ / ものではない',
        explanation: '表示社會上普遍認知的常識或真理。「本來就是...的 / 不應該是...的」。與「べきだ」比起來，更側重於「事物的本質或常理就是如此」。',
        examples: [
          { jp: '時間{じかん}は早{はや}く過{す}ぎるものだ。', romaji: 'Jikan wa hayaku sugiru mono da.', zh: '時間本來就過得很快啊（感嘆真理）。' },
          { jp: '親{おや}にそんなことを言{い}うものではない。', romaji: 'Oya ni sonna koto o iu mono de wa nai.', zh: '本來就不該對父母說那種話（社會常理）。' },
        ]
      },
      {
        pattern: '動詞た形 ＋ ものだ',
        explanation: '表示對過去經常發生的事情的懷念。「以前經常...」。',
        examples: [
          { jp: '子供{こども}のころ、よくここで遊{あそ}んだものだ。', romaji: 'Kodomo no koro, yoku koko de asonda mono da.', zh: '小時候經常在這裡玩啊（懷念）。' },
        ]
      }
    ],
    vocabulary: [
      { word: '時間', reading: 'じかん', romaji: 'jikan', meaning: '時間' },
      { word: '過ぎる', reading: 'すぎる', romaji: 'sugiru', meaning: '流逝/經過 (II類動詞)' },
      { word: '親', reading: 'おや', romaji: 'oya', meaning: '雙親/父母' },
      { word: '子供', reading: 'こども', romaji: 'kodomo', meaning: '小孩' },
      { word: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', meaning: '玩耍 (I類動詞)' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記 (II類動詞)' },
      { word: '変わる', reading: 'かわる', romaji: 'kawaru', meaning: '改變 (I類動詞)' },
      { word: '昔', reading: 'むかし', romaji: 'mukashi', meaning: '從前' },
      { word: '叱る', reading: 'しかる', romaji: 'shikaru', meaning: '責罵 (I類動詞)' },
      { word: '人生', reading: 'じんせい', romaji: 'jinsei', meaning: '人生' },
    ],
    quiz: [
      { question: '人の悪口を言う___はない。(本來就不該)', options: ['もの', 'こと', 'わけ', 'はず'], answer: 0 },
      { question: '「過ぎる」的意思是？', options: ['前進', '停止', '流逝/經過', '後退'], answer: 2 },
      { question: '昔はよく先生に叱られた___。(以前經常)', options: ['ものだ', 'ことだ', 'わけだ', 'はずだ'], answer: 0 },
      { question: '「親」的讀音是？', options: ['おや', 'ちち', 'はは', 'あに'], answer: 0 },
      { question: '人生は思い通りにいかない___。(本來就是這樣)', options: ['ものだ', 'ことだ', 'わけだ', 'べきだ'], answer: 0 },
      { question: '時間は早く過ぎる___。(本來就很快)', options: ['ものだ', 'ことだ', 'わけだ', 'べきだ'], answer: 0 },
      { question: '子供のころ、よくここで遊んだ___。(以前經常)', options: ['ものだ', 'ことだ', 'わけだ', 'はずだ'], answer: 0 },
    ]
  },

  // ---- 第 79 關：根本沒必要 (無須去做：～ことはない) ----
  {
    id: 'n3_ch79',
    level: 'N3',
    title: '根本沒必要 (～ことはない)',
    grammar: [
      {
        pattern: '動詞辭書形 ＋ ことはない',
        explanation: '表示沒有做某動作的必要。「不需要... / 用不著...」。常用於安慰別人或給予建議。',
        examples: [
          { jp: '君{きみ}が謝{あやま}ることはないよ。', romaji: 'Kimi ga ayamaru koto wa nai yo.', zh: '用不著你來道歉喔。' },
          { jp: 'まだ時間{じかん}はあるから、急{いそ}ぐことはありません。', romaji: 'Mada jikan wa aru kara, isogu koto wa arimasen.', zh: '還有時間，沒必要急。' },
        ]
      }
    ],
    vocabulary: [
      { word: '君', reading: 'きみ', romaji: 'kimi', meaning: '你' },
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉 (I類動詞)' },
      { word: '時間', reading: 'じかん', romaji: 'jikan', meaning: '時間' },
      { word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: '著急/趕快 (I類動詞)' },
      { word: '心配する', reading: 'しんぱいする', romaji: 'shinpai suru', meaning: '擔心 (III類動詞)' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣 (I類動詞)' },
      { word: '諦める', reading: 'あきらめる', romaji: 'akirameru', meaning: '放棄 (II類動詞)' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣 (I類動詞)' },
      { word: '気にする', reading: 'きにする', romaji: 'ki ni suru', meaning: '在意/介意 (III類動詞)' },
      { word: '遠慮する', reading: 'えんりょする', romaji: 'enryo suru', meaning: '客氣 (III類動詞)' },
    ],
    quiz: [
      { question: 'そんなに心配する___よ。(沒必要)', options: ['ことはない', 'ものはない', 'わけはない', 'はずはない'], answer: 0 },
      { question: '「遠慮する」的意思是？', options: ['生氣', '客氣', '擔心', '放棄'], answer: 1 },
      { question: '君が泣く___。(用不著)', options: ['ことだ', 'ことはない', 'ものだ', 'ものではない'], answer: 1 },
      { question: '「諦める」的讀音是？', options: ['あきらめる', 'あやまめる', 'あらためる', 'あつめる'], answer: 0 },
      { question: '少しの失敗で諦める___。(沒必要)', options: ['ことはない', 'ことだ', 'ものだ', 'ものではない'], answer: 0 },
      { question: '君が謝る___よ。(用不著)', options: ['ことはない', 'ことだ', 'ものだ', 'ものではない'], answer: 0 },
      { question: 'まだ時間はあるから、急ぐ___。(沒必要)', options: ['ことはない', 'ことだ', 'ものだ', 'ものではない'], answer: 0 },
    ]
  },

  // ---- 第 80 關：充滿感情的感嘆 (多麼...啊：～ことか / ～ものか) ----
  {
    id: 'n3_ch80',
    level: 'N3',
    title: '充滿感情的感嘆 (～ことか / ～ものか)',
    grammar: [
      {
        pattern: 'どんなに/どれほど ＋ 普通形 ＋ ことか',
        explanation: '表示非常強烈的感嘆。「多麼...啊 / 是多麼的...啊」。句首常搭配疑問詞（如：どんなに、どれほど、何度）。',
        examples: [
          { jp: '合格{ごうかく}できて、どんなに嬉{うれ}しいことか。', romaji: 'Gōkaku dekite, donna ni ureshii koto ka.', zh: '能考上是多麼高興的事啊！' },
          { jp: '日本語{にほんご}が難{むずか}しくて、何度{なんど}泣{な}いたことか。', romaji: 'Nihongo ga muzukashikute, nando naita koto ka.', zh: '日文太難，我都不知哭過多少次了。' },
        ]
      },
      {
        pattern: '普通形 ＋ ものか（もんか）',
        explanation: '表示強烈的否定。「怎麼可能... / 絕對不...」。男生口語常說「もんか」。',
        examples: [
          { jp: 'あんな店{みせ}、二度{にど}と行{い}くものか！', romaji: 'Anna mise, nido to iku mono ka!', zh: '那種店，我絕對不會再去第二次了！' },
          { jp: '負{ま}けるもんか！', romaji: 'Makeru mon ka!', zh: '我怎麼可能會輸！' },
        ]
      }
    ],
    vocabulary: [
      { word: 'どんなに', reading: 'どんなに', romaji: 'donna ni', meaning: '多麼地' },
      { word: 'どれほど', reading: 'どれほど', romaji: 'dorehodo', meaning: '多麼地/多大程度' },
      { word: '何度', reading: 'なんど', romaji: 'nando', meaning: '多少次' },
      { word: '合格する', reading: 'ごうかくする', romaji: 'gōkaku suru', meaning: '及格/合格 (III類動詞)' },
      { word: '嬉しい', reading: 'うれしい', romaji: 'ureshii', meaning: '開心的 (い形容詞)' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣 (I類動詞)' },
      { word: '二度と', reading: 'にどと', romaji: 'nido to', meaning: '絕對不...第二次(配否定)' },
      { word: '負ける', reading: 'まける', romaji: 'makeru', meaning: '輸/敗 (II類動詞)' },
      { word: '辛い', reading: 'つらい', romaji: 'tsurai', meaning: '痛苦的/難受的 (い形容詞)' },
      { word: '信じる', reading: 'しんじる', romaji: 'shinjiru', meaning: '相信 (II類動詞)' },
    ],
    quiz: [
      { question: '家族に会えなくて、どんなに寂しかった___。(多麼...啊)', options: ['ことか', 'ものか', 'わけか', 'はずか'], answer: 0 },
      { question: 'あんな人の言うことなんて、信じる___！(怎麼可能相信)', options: ['ものか', 'ことか', 'わけか', 'はずか'], answer: 0 },
      { question: '「辛い」的意思是？', options: ['開心的', '辣的/痛苦的', '甜的', '鹹的'], answer: 1 },
      { question: 'これまで何度失敗した___。(不知多少次)', options: ['ことか', 'ものか', 'わけか', 'ばかりか'], answer: 0 },
      { question: '「二度と」通常搭配什麼句型？', options: ['肯定句', '否定句', '命令句', '疑問句'], answer: 1 },
      { question: '合格できて、どんなに嬉しい___。(多麼高興啊)', options: ['ことか', 'ものか', 'わけか', 'はずか'], answer: 0 },
      { question: 'あんな店、二度と行く___！(絕對不)', options: ['ものか', 'ことか', 'わけか', 'はずか'], answer: 0 },
    ]
  },

  // ---- 第 81 關：不管再怎麼努力 (逆接條件：～たとえ～ても / ～いくら～ても) ----
  {
    id: 'n3_ch81',
    level: 'N3',
    title: '不管再怎麼努力 (逆接條件)',
    grammar: [
      {
        pattern: 'たとえ ＋ 動詞て形 ＋ も / い形くて ＋ も / な形・名詞で ＋ も',
        explanation: '表示極端的假定條件下的逆接。「即使...也 / 就算...也」。',
        examples: [
          { jp: 'たとえ親{おや}に反対{はんたい}されても、留学{りゅうがく}します。', romaji: 'Tatoe oya ni hantai sarete mo, ryūgaku shimasu.', zh: '就算被父母反對，我也要留學。' },
          { jp: 'たとえ雨{あめ}でも、試合{しあい}は行{おこな}われます。', romaji: 'Tatoe ame demo, shiai wa okonawaremasu.', zh: '就算是下雨天，比賽也照常舉行。' },
        ]
      },
      {
        pattern: 'いくら / どんなに ＋ 動詞て形 ＋ も',
        explanation: '表示程度上的反覆或極限，但結果依舊不變。「不管再怎麼...也...」。',
        examples: [
          { jp: 'いくら考{かんが}えても、答{こた}えがわからない。', romaji: 'Ikura kangaete mo, kotae ga wakaranai.', zh: '不管再怎麼想，也不知道答案。' },
          { jp: 'どんなに食{た}べても、太{ふと}らない。', romaji: 'Donna ni tabete mo, futoranai.', zh: '不管怎麼吃都不會胖。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'たとえ', reading: 'たとえ', romaji: 'tatoe', meaning: '即使/就算' },
      { word: 'いくら', reading: 'いくら', romaji: 'ikura', meaning: '不管多少/怎麼' },
      { word: '反対する', reading: 'はんたいする', romaji: 'hantai suru', meaning: '反對 (III類動詞)' },
      { word: '留学する', reading: 'りゅうがくする', romaji: 'ryūgaku suru', meaning: '留學 (III類動詞)' },
      { word: '行われる', reading: 'おこなわれる', romaji: 'okonawareru', meaning: '被舉行 (II類動詞)' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考 (II類動詞)' },
      { word: '答え', reading: 'こたえ', romaji: 'kotae', meaning: '答案' },
      { word: '太る', reading: 'ふとる', romaji: 'futoru', meaning: '變胖 (I類動詞)' },
      { word: '失敗する', reading: 'しっぱいする', romaji: 'shippai suru', meaning: '失敗 (III類動詞)' },
      { word: '離れる', reading: 'はなれる', romaji: 'hanareru', meaning: '離開/分開 (II類動詞)' },
    ],
    quiz: [
      { question: '___雨でも、行きます。(就算)', options: ['たとえ', 'いくら', 'どんなに', 'とても'], answer: 0 },
      { question: '___食べても、太らない。(不管再怎麼)', options: ['たとえ', 'いくら', 'どうしても', 'もちろん'], answer: 1 },
      { question: '「反対する」的意思是？', options: ['贊成', '反對', '同意', '放棄'], answer: 1 },
      { question: 'たとえ失敗し___、諦めない。(就算失敗)', options: ['ても', 'たら', 'れば', 'と'], answer: 0 },
      { question: '「答え」的讀音是？', options: ['こたえ', 'こえ', 'おぼえ', 'おしえ'], answer: 0 },
      { question: '___親に反対されても、留学します。(就算)', options: ['たとえ', 'いくら', 'どんなに', 'とても'], answer: 0 },
      { question: '___考えても、答えがわからない。(不管再怎麼)', options: ['いくら', 'たとえ', 'どうしても', 'もちろん'], answer: 0 },
    ]
  },

  // ---- 第 82 關：伴隨著變化 (隨著A，B也改變：～にしたがって / ～につれて) ----
  {
    id: 'n3_ch82',
    level: 'N3',
    title: '伴隨著變化 (～にしたがって / ～につれて)',
    grammar: [
      {
        pattern: '動詞辭書形 / 名詞 ＋ にしたがって',
        explanation: '表示伴隨。「隨著...的變化，...也跟著改變」。也可以表示「遵從...」。較正式，常用於自然規律或社會趨勢。',
        examples: [
          { jp: '北{きた}へ行{い}くにしたがって、寒{さむ}くなる。', romaji: 'Kita e iku ni shitagatte, samuku naru.', zh: '越往北走就越冷。' },
          { jp: 'ルールにしたがって行動{こうどう}する。', romaji: 'Rūru ni shitagatte kōdō suru.', zh: '遵從規則行動。' },
        ]
      },
      {
        pattern: '動詞辭書形 / 名詞 ＋ につれて',
        explanation: '表示單向的變化發展。「隨著...的發展，...也改變」。兩者幾乎可互換，但「につれて」不包含「遵從」的意思。',
        examples: [
          { jp: '時間{じかん}が経{た}つにつれて、悲{かな}しみが薄{うす}れていった。', romaji: 'Jikan ga tatsu ni tsurete, kanashimi ga usurete itta.', zh: '隨著時間流逝，悲傷淡忘了。' },
          { jp: '年{とし}をとるにつれて、記憶力{きおくりょく}が落{お}ちる。', romaji: 'Toshi o toru ni tsurete, kiokuryoku ga ochiru.', zh: '隨著年齡增長，記憶力衰退。' },
        ]
      }
    ],
    vocabulary: [
      { word: '北', reading: 'きた', romaji: 'kita', meaning: '北方' },
      { word: '行動する', reading: 'こうどうする', romaji: 'kōdō suru', meaning: '行動 (III類動詞)' },
      { word: '経つ', reading: 'たつ', romaji: 'tatsu', meaning: '流逝(時間) (I類動詞)' },
      { word: '悲しみ', reading: 'かなしみ', romaji: 'kanashimi', meaning: '悲傷' },
      { word: '薄れる', reading: 'うすれる', romaji: 'usureru', meaning: '變淡 (II類動詞)' },
      { word: '年をとる', reading: 'としをとる', romaji: 'toshi o toru', meaning: '變老/上年紀 (I類動詞)' },
      { word: '記憶力', reading: 'きおくりょく', romaji: 'kiokuryoku', meaning: '記憶力' },
      { word: '落ちる', reading: 'おちる', romaji: 'ochiru', meaning: '掉落/衰退 (II類動詞)' },
      { word: '発展する', reading: 'はってんする', romaji: 'hatten suru', meaning: '發展 (III類動詞)' },
      { word: '経済', reading: 'けいざい', romaji: 'keizai', meaning: '經濟' },
    ],
    quiz: [
      { question: '時間が経つ___、痛みがなくなった。(隨著)', options: ['につれて', 'とともに', 'にくらべて', 'に対して'], answer: 0 },
      { question: '「経つ」的意思是？', options: ['站立', '經過/流逝', '切斷', '建造'], answer: 1 },
      { question: '規則に___行動してください。(遵從)', options: ['したがって', 'つれて', 'ともなって', '対して'], answer: 0 },
      { question: '経済が発展する___、環境が悪化した。(隨著)', options: ['にしたがって', 'において', 'によって', 'に対して'], answer: 0 },
      { question: '「記憶力」的讀音是？', options: ['きおくりょく', 'きおくろく', 'きようりょく', 'きおくちから'], answer: 0 },
      { question: '北へ行く___、寒くなる。(隨著)', options: ['にしたがって', 'につれて', 'とともに', 'に対して'], answer: 0 },
      { question: '年をとる___、記憶力が落ちる。(隨著)', options: ['につれて', 'にしたがって', 'において', 'に対して'], answer: 0 },
    ]
  },

  // ---- 第 83 關：以此為契機 (轉捩點：～をきっかけに / ～を契機に) ----
  {
    id: 'n3_ch83',
    level: 'N3',
    title: '以此為契機 (轉捩點)',
    grammar: [
      {
        pattern: '名詞 ＋ をきっかけに（して） / をきっかけとして',
        explanation: '表示「以...為契機/動機」，因為某個事件而導致了新的變化或行動。用於個人經歷或一般事物。',
        examples: [
          { jp: '病気{びょうき}をきっかけに、タバコをやめました。', romaji: 'Byōki o kikkake ni, tabako o yamemashita.', zh: '以生病為契機，我戒菸了。' },
          { jp: '日本{にほん}のアニメをきっかけに、日本語{にほんご}の勉強{べんきょう}を始{はじ}めた。', romaji: 'Nihon no anime o kikkake ni, nihongo no benkyō o hajimeta.', zh: '因為日本動畫的契機，開始學日文。' },
        ]
      },
      {
        pattern: '名詞 ＋ を契機{けいき}に（して）',
        explanation: '同樣是「以...為契機」，但是比「きっかけ」更為正式、生硬，多用於社會、歷史等重大事件。',
        examples: [
          { jp: 'オリンピックを契機{けいき}に、街{まち}がきれいになった。', romaji: 'Orinpikku o keiki ni, machi ga kirei ni natta.', zh: '以奧運為契機，街道變乾淨了。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'きっかけ', reading: 'きっかけ', romaji: 'kikkake', meaning: '契機/動機' },
      { word: '契機', reading: 'けいき', romaji: 'keiki', meaning: '契機(正式)' },
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '疾病/生病' },
      { word: 'やめる', reading: 'やめる', romaji: 'yameru', meaning: '停止/戒除 (II類動詞)' },
      { word: 'アニメ', reading: 'アニメ', romaji: 'anime', meaning: '動畫' },
      { word: '勉強', reading: 'べんきょう', romaji: 'benkyō', meaning: '學習' },
      { word: '始める', reading: 'はじめる', romaji: 'hajimeru', meaning: '開始 (II類動詞)' },
      { word: '街', reading: 'まち', romaji: 'machi', meaning: '街道/城鎮' },
      { word: '卒業', reading: 'そつぎょう', romaji: 'sotsugyō', meaning: '畢業' },
      { word: '出会い', reading: 'であい', romaji: 'deai', meaning: '相遇' },
    ],
    quiz: [
      { question: '入院を___、お酒をやめた。(以此為契機)', options: ['きっかけに', 'はじめに', 'かわりに', 'ために'], answer: 0 },
      { question: '「契機」的讀音是？', options: ['けいき', 'ちき', 'けち', 'きち'], answer: 0 },
      { question: 'オリンピックを___に、交通が便利になった。(重大事件的契機)', options: ['契機', '原因', '理由', '目的'], answer: 0 },
      { question: '「出会い」的意思是？', options: ['出發', '相遇', '分別', '出門'], answer: 1 },
      { question: '旅行を___、カメラに興味を持った。', options: ['きっかけに', 'ために', 'ように', 'うちに'], answer: 0 },
      { question: '病気を___、タバコをやめました。(以此為契機)', options: ['きっかけに', 'はじめに', 'かわりに', 'ために'], answer: 0 },
      { question: '日本のアニメを___、日本語の勉強を始めた。(以此為契機)', options: ['きっかけに', '契機に', '理由に', '目的に'], answer: 0 },
    ]
  },

  // ---- 第 84 關：從...角度來看 (判斷根據：～からいうと / ～から見ると) ----
  {
    id: 'n3_ch84',
    level: 'N3',
    title: '從...角度來看 (判斷根據)',
    grammar: [
      {
        pattern: '名詞 ＋ からいうと / からいえば / からいって',
        explanation: '表示判斷的角度或標準。「從...來說 / 從...的角度來看」。強調從某個方面、客觀事實出發做出的判斷。',
        examples: [
          { jp: '能力{のうりょく}からいって、彼{かれ}がリーダーにふさわしい。', romaji: 'Nōryoku kara itte, kare ga rīdā ni fusawashii.', zh: '從能力上來說，他最適合當隊長。' },
          { jp: '現状{げんじょう}からいうと、それは難{むずか}しいだろう。', romaji: 'Genjō kara iu to, sore wa muzukashii darō.', zh: '從現狀來看，那應該很困難。' },
        ]
      },
      {
        pattern: '名詞 ＋ から見{み}ると / から見{み}れば / から見{み}て',
        explanation: '表示從某人的立場或角度來看。「從...來看的話」。前面多接表示人物的名詞，或具體事物。',
        examples: [
          { jp: '親{おや}から見{み}れば、子供{こども}はいつまでも子供{こども}だ。', romaji: 'Oya kara mireba, kodomo wa itsumademo kodomo da.', zh: '在父母眼中（從父母來看），孩子永遠是孩子。' },
          { jp: '外国人{がいこくじん}から見{み}ると、日本{にほん}の習慣{しゅうかん}は不思議{ふしぎ}だ。', romaji: 'Gaikokujin kara miru to, nihon no shūkan wa fushigi da.', zh: '在外國人看來，日本的習慣很不可思議。' },
        ]
      }
    ],
    vocabulary: [
      { word: '能力', reading: 'のうりょく', romaji: 'nōryoku', meaning: '能力' },
      { word: 'ふさわしい', reading: 'ふさわしい', romaji: 'fusawashii', meaning: '適合的/相稱的 (い形容詞)' },
      { word: '現状', reading: 'げんじょう', romaji: 'genjō', meaning: '現狀' },
      { word: '親', reading: 'おや', romaji: 'oya', meaning: '雙親' },
      { word: 'いつまでも', reading: 'いつまでも', romaji: 'itsumademo', meaning: '永遠' },
      { word: '外国人', reading: 'がいこくじん', romaji: 'gaikokujin', meaning: '外國人' },
      { word: '習慣', reading: 'しゅうかん', romaji: 'shūkan', meaning: '習慣' },
      { word: '不思議', reading: 'ふしぎ', romaji: 'fushigi', meaning: '不可思議的 (な形容詞)' },
      { word: '立場', reading: 'たちば', romaji: 'tachiba', meaning: '立場' },
      { word: '成績', reading: 'せいせき', romaji: 'seiseki', meaning: '成績' },
    ],
    quiz: [
      { question: '親の立場___、反対するしかない。(從...立場來看)', options: ['から見れば', 'からいうと', 'にしては', 'にとって'], answer: 0 },
      { question: '成績___、彼が合格するだろう。(從...數據上來說)', options: ['からいって', 'から見れば', 'にとって', 'に対して'], answer: 0 },
      { question: '「ふさわしい」的意思是？', options: ['不可思議的', '適合的/相稱的', '嚴格的', '麻煩的'], answer: 1 },
      { question: '「現状」的讀音是？', options: ['げんじょう', 'げんしょ', 'けんじょう', 'けんしょ'], answer: 0 },
      { question: '子供___見ると、親の気持ちはわからない。(在小孩看來)', options: ['から', 'に', 'で', 'を'], answer: 0 },
      { question: '能力___いって、彼がリーダーにふさわしい。(從...來說)', options: ['から', 'に', 'で', 'を'], answer: 0 },
      { question: '外国人から___、日本の習慣は不思議だ。(從...來看)', options: ['見ると', 'いうと', 'して', 'とって'], answer: 0 },
    ]
  },

  // ---- 第 85 關：與其這樣不如... (重新評價：～というより / ～かわりに) ----
  {
    id: 'n3_ch85',
    level: 'N3',
    title: '與其這樣不如... (重新評價)',
    grammar: [
      {
        pattern: '普通形 / 名詞 ＋ というより',
        explanation: '比起前面的說法，後面的說法更為恰當。「與其說是...不如說是...」。',
        examples: [
          { jp: '彼{かれ}の態度{たいど}は、失礼{しつれい}というより無礼{ぶれい}だ。', romaji: 'Kare no taido wa, shitsurei to iu yori burei da.', zh: '他的態度與其說是失禮，不如說是無禮。' },
          { jp: 'この部屋{へや}は涼{すず}しいというより寒{さむ}い。', romaji: 'Kono heya wa suzushii to iu yori samui.', zh: '這房間與其說涼爽，不如說是很冷。' },
        ]
      },
      {
        pattern: '動詞辭書形 / 名詞の ＋ かわりに',
        explanation: '表示補償、代替或條件交換。「代替... / 作為...的交換」。',
        examples: [
          { jp: '日曜日{にちようび}に働{はたら}いたかわりに、今日{きょう}休{やす}みをもらった。', romaji: 'Nichiyōbi ni hataraita kawari ni, kyō yasumi o moratta.', zh: '作為星期天工作的補償，今天放假。' },
          { jp: '山田{やまだ}さんのかわりに、私{わたし}が会議{かいぎ}に出{で}ます。', romaji: 'Yamada-san no kawari ni, watashi ga kaigi ni demasu.', zh: '我代替山田先生去開會。' },
        ]
      }
    ],
    vocabulary: [
      { word: '態度', reading: 'たいど', romaji: 'taido', meaning: '態度' },
      { word: '失礼', reading: 'しつれい', romaji: 'shitsurei', meaning: '失禮 (な形容詞)' },
      { word: '無礼', reading: 'ぶれい', romaji: 'burei', meaning: '無禮 (な形容詞)' },
      { word: '涼しい', reading: 'すずしい', romaji: 'suzushii', meaning: '涼爽的 (い形容詞)' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '寒冷的 (い形容詞)' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作 (I類動詞)' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息/放假 (I類動詞)' },
      { word: '会議に出る', reading: 'かいぎにでる', romaji: 'kaigi ni deru', meaning: '出席會議 (II類動詞)' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙 (I類動詞)' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導 (II類動詞)' },
    ],
    quiz: [
      { question: '歩くという___、走っているようだ。(與其說是)', options: ['より', 'から', 'まで', 'ほど'], answer: 0 },
      { question: '車で行く___、自転車で行く。(代替)', options: ['かわりに', 'より', 'ために', 'ように'], answer: 0 },
      { question: '「涼しい」的讀音是？', options: ['さむい', 'あつい', 'すずしい', 'あたたかい'], answer: 2 },
      { question: '英語を教える___、日本語を教えてください。(作為交換)', options: ['かわりに', 'より', 'ために', 'ように'], answer: 0 },
      { question: '「無礼」的意思是？', options: ['沒有禮物', '無禮/沒禮貌', '不用錢', '免費'], answer: 1 },
      { question: 'この部屋は涼しい___寒い。(與其說)', options: ['というより', 'かわりに', 'からいうと', 'から見ると'], answer: 0 },
      { question: '日曜日に働いた___、今日休みをもらった。(作為交換)', options: ['かわりに', 'というより', 'ために', 'ように'], answer: 0 },
    ]
  },

  // ---- 第 86 關：竟然...太誇張了 (輕視與驚訝：～なんて / ～なんか / ～とは) ----
  {
    id: 'n3_ch86',
    level: 'N3',
    title: '竟然...太誇張了 (輕視與驚訝)',
    grammar: [
      {
        pattern: '名詞 / 普通形 ＋ なんて / なんか / など',
        explanation: '表示輕視、貶低，或謙虛。「...這種東西/這種事」。其中「なんて」也可接句子，表示強烈的驚訝「竟然...！」。',
        examples: [
          { jp: '私{わたし}なんて、まだまだです。', romaji: 'Watashi nante, madamada desu.', zh: '我這種人還差得遠呢（謙虛）。' },
          { jp: 'ゲームなんか、もうやりたくない。', romaji: 'Gēmu nanka, mō yaritakunai.', zh: '遊戲這種東西，我已經不想玩了（輕視）。' },
          { jp: '彼{かれ}が結婚{けっこん}するなんて、びっくりした。', romaji: 'Kare ga kekkon suru nante, bikkuri shita.', zh: '他竟然結婚了，真是嚇死我了（驚訝）。' },
        ]
      },
      {
        pattern: '普通形 ＋ とは',
        explanation: '表示對某個事實感到非常驚訝。「沒想到竟然...」。與「なんて」類似，但更為文語或強調語氣。',
        examples: [
          { jp: 'こんなに高{たか}いとは、思{おも}わなかった。', romaji: 'Konna ni takai to wa, omowanai katta.', zh: '沒想到竟然這麼貴。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'まだまだ', reading: 'まだまだ', romaji: 'madamada', meaning: '還差得遠' },
      { word: 'びっくりする', reading: 'びっくりする', romaji: 'bikkuri suru', meaning: '吃驚/嚇一跳 (III類動詞)' },
      { word: '思う', reading: 'おもう', romaji: 'omou', meaning: '認為/想 (I類動詞)' },
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚 (III類動詞)' },
      { word: 'ゲーム', reading: 'ゲーム', romaji: 'gēmu', meaning: '遊戲' },
      { word: '信じられない', reading: 'しんじられない', romaji: 'shinjirarenai', meaning: '不敢相信 (II類動詞)' },
      { word: '優勝する', reading: 'ゆうしょうする', romaji: 'yūshō suru', meaning: '奪冠/得第一 (III類動詞)' },
      { word: '嘘', reading: 'うそ', romaji: 'uso', meaning: '謊言' },
      { word: '冗談', reading: 'じょうだん', romaji: 'jōdan', meaning: '開玩笑' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣 (I類動詞)' },
    ],
    quiz: [
      { question: '私が優勝する___、信じられない。(竟然)', options: ['なんて', 'ほど', 'くらい', 'しか'], answer: 0 },
      { question: 'お酒___、もう飲みたくない。(這種東西)', options: ['なんか', 'ばかり', 'だらけ', 'のみ'], answer: 0 },
      { question: '「冗談」的意思是？', options: ['認真', '開玩笑', '麻煩', '生氣'], answer: 1 },
      { question: 'あんなに優しい人が犯人だ___。(沒想到竟然)', options: ['とは', 'とは限らない', 'わけではない', 'に違いない'], answer: 0 },
      { question: '「優勝」的讀音是？', options: ['ゆうしょう', 'ゆうしょう', 'ゆしょう', 'ゆしょう'], answer: 0 },
      { question: '彼が結婚する___、びっくりした。(竟然)', options: ['なんて', 'なんか', 'とは', 'など'], answer: 0 },
      { question: 'こんなに高い___、思わなかった。(沒想到竟然)', options: ['とは', 'なんて', 'なんか', 'など'], answer: 0 },
    ]
  },

  // ---- 第 87 關：經典四大助詞 (について / に対して / にとって / として) ----
  {
    id: 'n3_ch87',
    level: 'N3',
    title: '四大複合立場助詞',
    grammar: [
      {
        pattern: '名詞 ＋ について（は/も）',
        explanation: '表示關聯的對象或主題。「關於...」。後方常接「話す/考える/調べる」等思考、論述的動詞。',
        examples: [
          { jp: '日本{にほん}の文化{ぶんか}について調{しら}べています。', romaji: 'Nihon no bunka ni tsuite shirabete imasu.', zh: '我正在調查關於日本文化的事。' },
        ]
      },
      {
        pattern: '名詞 ＋ に対{たい}して（は/も）',
        explanation: '有兩個意思：（1）表示動作的對象「對... / 向...」；（2）表示對比「相對之下...」。',
        examples: [
          { jp: 'お客様{きゃくさま}に対{たい}して、失礼{しつれい}なことを言ってはいけない。', romaji: 'Okyakusama ni taishite, shitsurei na koto o itte wa ikenai.', zh: '不能對客人說失禮的話。' },
          { jp: '兄{あに}が真面目{まじめ}なのに対{たい}して、弟{おとうと}は遊{あそ}んでばかりいる。', romaji: 'Ani ga majime na no ni taishite, otōto wa asonde bakari iru.', zh: '相對於哥哥很認真，弟弟卻老是在玩。' },
        ]
      },
      {
        pattern: '名詞 ＋ にとって（は/も）',
        explanation: '表示評價的基準。「對...來說 / 就...而言」。後方常接主觀的評價（例如重要、困難、方便）。',
        examples: [
          { jp: '私{わたし}にとって、家族{かぞく}が一番{いちばん}大切{たいせつ}です。', romaji: 'Watashi ni totte, kazoku ga ichiban taisetsu desu.', zh: '對我來說，家人是最重要的。' },
        ]
      },
      {
        pattern: '名詞 ＋ として（は/も）',
        explanation: '表示身分、資格、立場或名目。「作為...」。',
        examples: [
          { jp: '彼{かれ}は留学生{りゅうがくせい}として日本{にほん}へ来{き}ました。', romaji: 'Kare wa ryūgakusei to shite nihon e kimashita.', zh: '他作為留學生來到了日本。' },
        ]
      }
    ],
    vocabulary: [
      { word: '文化', reading: 'ぶんか', romaji: 'bunka', meaning: '文化' },
      { word: '調べる', reading: 'しらべる', romaji: 'shiraberu', meaning: '調查 (II類動詞)' },
      { word: 'お客様', reading: 'おきゃくさま', romaji: 'okyakusama', meaning: '客人(尊稱)' },
      { word: '失礼', reading: 'しつれい', romaji: 'shitsurei', meaning: '失禮的 (な形容詞)' },
      { word: '真面目', reading: 'まじめ', romaji: 'majime', meaning: '認真的 (な形容詞)' },
      { word: '大切', reading: 'たいせつ', romaji: 'taisetsu', meaning: '重要的 (な形容詞)' },
      { word: '一番', reading: 'いちばん', romaji: 'ichiban', meaning: '最/第一' },
      { word: '留学生', reading: 'りゅうがくせい', romaji: 'ryūgakusei', meaning: '留學生' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考 (II類動詞)' },
      { word: '質問', reading: 'しつもん', romaji: 'shitsumon', meaning: '問題/發問' },
    ],
    quiz: [
      { question: 'この問題___、皆さんの意見を聞きたい。(關於)', options: ['について', 'にとって', 'として', 'に対して'], answer: 0 },
      { question: '私___、このパソコンは難しすぎる。(對我來說/評價標準)', options: ['について', 'にとって', 'として', 'に対して'], answer: 1 },
      { question: '兄が静かなの___、弟はよく話す。(相對之下)', options: ['について', 'にとって', 'として', 'に対して'], answer: 3 },
      { question: '教師___、生徒に嘘をついてはいけない。(作為)', options: ['について', 'にとって', 'として', 'に対して'], answer: 2 },
      { question: '「調べる」的意思是？', options: ['比較', '睡覺', '調查/查詢', '發現'], answer: 2 },
      { question: '日本の文化___調べています。(關於)', options: ['について', 'に対して', 'にとって', 'として'], answer: 0 },
      { question: '彼にとって、家族が一番大切です。(對他來說)', options: ['にとって', 'について', 'に対して', 'として'], answer: 0 },
    ]
  },

  // ---- 第 88 關：明明卻與儘管 (くせに / にもかかわらず) ----
  {
    id: 'n3_ch88',
    level: 'N3',
    title: '明明卻與儘管 (逆接語氣)',
    grammar: [
      {
        pattern: '名詞の / 普通形 ＋ くせに',
        explanation: '表示逆接，但在語氣上帶有強烈的責備、不滿或輕蔑。「明明...卻...」。與「のに」類似，但只能用於批評別人，不能用來描述自然現象（不能說「明明下雨卻去」）。',
        examples: [
          { jp: '彼{かれ}は知{し}っているくせに、教{おし}えてくれない。', romaji: 'Kare wa shitte iru kuse ni, oshiete kurenai.', zh: '他明明知道，卻不告訴我。' },
          { jp: '何{なに}もできないくせに、文句{もんく}ばかり言{い}うな。', romaji: 'Nani mo dekinai kuse ni, monku bakari iu na.', zh: '明明什麼都不會，別老是抱怨。' },
        ]
      },
      {
        pattern: '普通形 / 名詞・な形(去だ) ＋ にもかかわらず',
        explanation: '表示客觀或正式的逆接。「儘管...還是會...」。類似「のに」的正式書面用語。',
        examples: [
          { jp: '大雪{おおゆき}にもかかわらず、多{おお}くのファンが集{あつ}まった。', romaji: 'Ōyuki ni mo kakawarazu, ōku no fan ga atsumatta.', zh: '儘管下著大雪，還是聚集了許多粉絲。' },
        ]
      }
    ],
    vocabulary: [
      { word: '文句', reading: 'もんく', romaji: 'monku', meaning: '抱怨/牢騷' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導/告訴 (II類動詞)' },
      { word: '大雪', reading: 'おおゆき', romaji: 'ōyuki', meaning: '大雪' },
      { word: 'ファン', reading: 'ファン', romaji: 'fan', meaning: '粉絲' },
      { word: '集まる', reading: 'あつまる', romaji: 'atsumaru', meaning: '聚集(自動詞) (I類動詞)' },
      { word: '金持ち', reading: 'かねもち', romaji: 'kanemochi', meaning: '有錢人' },
      { word: 'けち', reading: 'けち', romaji: 'kechi', meaning: '小氣的 (な形容詞)' },
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉 (I類動詞)' },
      { word: '遅刻する', reading: 'ちこくする', romaji: 'chikoku suru', meaning: '遲到 (III類動詞)' },
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: '雨' },
    ],
    quiz: [
      { question: 'お金持ちの___、けちだ。(明明...卻，指責對方)', options: ['だけ', 'くせに', 'ために', 'ように'], answer: 1 },
      { question: '悪天候___、試合は行われた。(儘管/正式說法)', options: ['にもかかわらず', 'くせに', 'ために', 'だから'], answer: 0 },
      { question: '自分が悪かった___、謝らない。(明明是自己的錯卻...)', options: ['ことに', 'くせに', 'わりに', 'せいで'], answer: 1 },
      { question: '「大雪」的讀音是？', options: ['おおゆき', 'だいき', 'たいせつ', 'たいゆき'], answer: 0 },
      { question: '「集まる」的意思是？', options: ['集中精力', '散開', '聚集', '收集'], answer: 2 },
      { question: '知っている___、教えてくれない。(明明...卻)', options: ['くせに', 'にもかかわらず', 'ために', 'ように'], answer: 0 },
      { question: '大雪___、多くのファンが集まった。(儘管)', options: ['にもかかわらず', 'くせに', 'ために', 'だから'], answer: 0 },
    ]
  },

  // ---- 第 89 關：既然都...就必須 (からには / 以上は) ----
  {
    id: 'n3_ch89',
    level: 'N3',
    title: '既然都...就必須 (決心)',
    grammar: [
      {
        pattern: '普通形 / 動詞た形 ＋ からには / 以上（は）',
        explanation: '表示既然原因或客觀條件已定，後面自然接續說話者的決心、義務或勸告。「既然...就一定... / 既然都...」。兩者意思幾乎相同。',
        examples: [
          { jp: 'やると決{き}めたからには、最後{さいご}まで頑張{がんば}ります。', romaji: 'Yaru to kimeta kara ni wa, saigo made ganbarimasu.', zh: '既然決定要做了，我也會努力到最後。' },
          { jp: '学生{がくせい}である以上{いじょう}、勉強{べんきょう}を第一{だいいち}に考{かんが}えるべきだ。', romaji: 'Gakusei de aru ijō, benkyō o daiichi ni kangaeru beki da.', zh: '既然是學生，就該把課業放在第一位。' },
        ]
      }
    ],
    vocabulary: [
      { word: '決める', reading: 'きめる', romaji: 'kimeru', meaning: '決定 (II類動詞)' },
      { word: '最後', reading: 'さいご', romaji: 'saigo', meaning: '最後' },
      { word: '頑張る', reading: 'がんばる', romaji: 'ganbaru', meaning: '努力/加油 (I類動詞)' },
      { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: '學生' },
      { word: '以上', reading: 'いじょう', romaji: 'ijō', meaning: '既然/以上' },
      { word: '第一', reading: 'だいいち', romaji: 'daiichi', meaning: '第一' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考 (II類動詞)' },
      { word: '留学する', reading: 'りゅうがくする', romaji: 'ryūgaku suru', meaning: '留學 (III類動詞)' },
      { word: '約束する', reading: 'やくそくする', romaji: 'yakusoku suru', meaning: '約定 (III類動詞)' },
      { word: '責任', reading: 'せきにん', romaji: 'sekinin', meaning: '責任' },
    ],
    quiz: [
      { question: 'プロである___、責任を持って仕事をするべきだ。(既然)', options: ['以上は', 'ために', 'くせに', 'わりに'], answer: 0 },
      { question: '約束した___、絶対に守ります。(既然都)', options: ['からには', 'だけに', 'おかげで', 'せいで'], answer: 0 },
      { question: '「第一」的意思是？', options: ['第一', '一件事', '一半', '第一個'], answer: 0 },
      { question: '「決める」是哪一類動詞？', options: ['I類動詞', 'II類動詞', 'III類動詞', '不規則動詞'], answer: 1 },
      { question: '日本に来た___、日本語をマスターしたい。', options: ['ために', 'ように', 'からには', 'くせに'], answer: 2 },
      { question: 'やると決めた___、最後まで頑張ります。(既然)', options: ['からには', 'ために', 'ように', 'おかげで'], answer: 0 },
      { question: '学生である___、勉強を第一に考えるべきだ。(既然)', options: ['以上は', 'からには', 'ために', 'ように'], answer: 0 },
    ]
  },

  // ---- 第 90 關：說起那個話題 (というと / といえば) ----
  {
    id: 'n3_ch90',
    level: 'N3',
    title: '說起那個話題 (提起提示)',
    grammar: [
      {
        pattern: '名詞 ＋ というと / といえば / といったら',
        explanation: '表示因為某事物而聯想起其他相關事物，或用來確認話題。「說到... / 一提起...」。',
        examples: [
          { jp: '夏{なつ}といえば、やはり海{うみ}とスイカですね。', romaji: 'Natsu to ieba, yahari umi to suika desu ne.', zh: '說到夏天，果然還是大海和西瓜呢。' },
          { jp: '日本料理{にほんりょうり}というと、寿司{すし}を思{おも}い浮{う}かべる人{ひと}が多{おお}い。', romaji: 'Nihon ryōri to iu to, sushi o omoiukaberu hito ga ōi.', zh: '說到日本料理，很多人會聯想到壽司。' },
        ]
      }
    ],
    vocabulary: [
      { word: '夏', reading: 'なつ', romaji: 'natsu', meaning: '夏天' },
      { word: '海', reading: 'うみ', romaji: 'umi', meaning: '海' },
      { word: 'スイカ', reading: 'スイカ', romaji: 'suika', meaning: '西瓜' },
      { word: '料理', reading: 'りょうり', romaji: 'ryōri', meaning: '料理' },
      { word: '思い浮かべる', reading: 'おもいうかべる', romaji: 'omoiukaberu', meaning: '想起/腦中浮現 (II類動詞)' },
      { word: '冬', reading: 'ふゆ', romaji: 'fuyu', meaning: '冬天' },
      { word: '春', reading: 'はる', romaji: 'haru', meaning: '春天' },
      { word: '秋', reading: 'あき', romaji: 'aki', meaning: '秋天' },
      { word: '温泉', reading: 'おんせん', romaji: 'onsen', meaning: '溫泉' },
      { word: '有名な', reading: 'ゆうめいな', romaji: 'yūmeina', meaning: '有名的 (な形容詞)' },
    ],
    quiz: [
      { question: '京都___、お寺や神社を思い出します。(說到)', options: ['というと', 'について', 'に対して', 'として'], answer: 0 },
      { question: '「思い浮かべる」的意思是？', options: ['想出來', '腦中浮現/聯想起', '發明', '期待'], answer: 1 },
      { question: '「海」的讀音是？', options: ['うみ', 'いけ', 'かわ', 'みず'], answer: 0 },
      { question: '冬___、やっぱり温泉だよね。(提起)', options: ['といえば', 'としたら', 'にしても', 'とすれば'], answer: 0 },
      { question: '「スイカ」的意思是？', options: ['水梨', '水蜜桃', '西瓜', '哈密瓜'], answer: 2 },
      { question: '夏___、やっぱり海ですね。(說到)', options: ['といえば', 'というと', 'について', 'に対して'], answer: 0 },
      { question: '日本料理___、寿司を思い浮かべる。(說到)', options: ['というと', 'といえば', 'について', 'に対して'], answer: 0 },
    ]
  },

  // ---- 第 91 關：不得不與義理禁止 (わけにはいかない / ざるを得ない) ----
  {
    id: 'n3_ch91',
    level: 'N3',
    title: '不得不與義理禁止 (心理約束)',
    grammar: [
      {
        pattern: '動詞辭書形 ＋ わけにはいかない',
        explanation: '表示因為社會道德、責任或心理上的約束，而覺得「絕對不能做某事」。並非能力上辦不到。',
        examples: [
          { jp: '明日{あした}は大事{だいじ}な試験{しけん}なので、休{やす}むわけにはいかない。', romaji: 'Ashita wa daiji na shiken na node, yasumu wake ni wa ikanai.', zh: '明天有重要的考試，所以絕對不能請假。' },
        ]
      },
      {
        pattern: '動詞ない形(去ない) ＋ ざるを得{え}ない / 動詞ない形＋わけにはいかない',
        explanation: '表示迫於形勢、別無選擇，只好「不得不做某事」。する改為「せざるを得ない」。',
        examples: [
          { jp: '風邪{かぜ}を引{ひ}いたので、旅行{りょこう}は中止{ちゅうし}せざるを得{え}ない。', romaji: 'Kaze o hiita node, ryokō wa chūshi sezaru o enai.', zh: '因為感冒了，所以不得不取消旅行。' },
          { jp: '上司{じょうし}の命令{めいれい}なので、従{したが}わないわけにはいかない。', romaji: 'Jōshi no meirei na node, shitagawanai wake ni wa ikanai.', zh: '這是上司的命令，不得不遵從（不能不聽）。' },
        ]
      }
    ],
    vocabulary: [
      { word: '大事な', reading: 'だいじな', romaji: 'daijina', meaning: '重要的 (な形容詞)' },
      { word: '試験', reading: 'しけん', romaji: 'shiken', meaning: '考試' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '請假/休息 (I類動詞)' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '中止する', reading: 'ちゅうしする', romaji: 'chūshi suru', meaning: '中止/取消 (III類動詞)' },
      { word: '上司', reading: 'じょうし', romaji: 'jōshi', meaning: '上司/長官' },
      { word: '命令', reading: 'めいれい', romaji: 'meirei', meaning: '命令' },
      { word: '従う', reading: 'したがう', romaji: 'shitagau', meaning: '遵從 (I類動詞)' },
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝 (I類動詞)' },
      { word: '車', reading: 'くるま', romaji: 'kuruma', meaning: '車子' },
    ],
    quiz: [
      { question: '車で来たので、お酒を飲む___。(絕對不能喝)', options: ['わけにはいかない', 'ことはない', 'はずがない', 'に違いない'], answer: 0 },
      { question: '「する」的「ざるを得ない」特殊變化是？', options: ['しざるを得ない', 'せざるを得ない', 'すざるを得ない', 'さざるを得ない'], answer: 1 },
      { question: '「従う」的讀音是？', options: ['したがう', 'むかう', 'まよう', 'おこなう'], answer: 0 },
      { question: '熱が39度もあるなら、病院へ行か___。(不能不去，即不得不去)', options: ['ないわけにはいかない', 'ないはずがない', 'ないことはない', 'ないに違いない'], answer: 0 },
      { question: '社長の命令だから、残業___。(不得不加班)', options: ['せざるを得ない', 'するわけにはいかない', 'するはずがない', 'するに違いない'], answer: 0 },
      { question: '大事な試験なので、休む___。(絕對不能請假)', options: ['わけにはいかない', 'ざるを得ない', 'はずがない', 'に違いない'], answer: 0 },
      { question: '風邪を引いたので、旅行は中止___。(不得不取消)', options: ['せざるを得ない', 'するわけにはいかない', 'するはずがない', 'するに違いない'], answer: 0 },
    ]
  },

  // ---- 第 92 關：特質與傾向 (がち / ぎみ / っぽい) ----
  {
    id: 'n3_ch92',
    level: 'N3',
    title: '特質與傾向 (がち / ぎみ / っぽい)',
    grammar: [
      {
        pattern: '動詞去ます形 / 名詞 ＋ がち',
        explanation: '表示經常發生某種負面狀態或行為。「動不動就... / 容易... / 往往...」。',
        examples: [
          { jp: '最近{さいきん}は雨{あめ}が降{ふ}りがちだ。', romaji: 'Saikin wa ame ga furigachi da.', zh: '最近往往常下雨。' },
          { jp: '彼{かれ}は子供{こども}のころ、病気{びょうき}がちだった。', romaji: 'Kare wa kodomo no koro, byōkigachi datta.', zh: '他小時候體弱多病（多病傾向）。' },
        ]
      },
      {
        pattern: '動詞去ます形 / 名詞 ＋ 気味{ぎみ} / っぽい',
        explanation: '「気味」表示身心狀態稍微有一點那種傾向（稍微有點感冒、稍微有點胖）。「っぽい」表示感覺起來完全就像那樣，帶有批評（像個小孩似的、容易生氣）。名詞+っぽい變為い形容詞。',
        examples: [
          { jp: 'ちょっと風邪{かぜ}気味{ぎみ}なので、早{はや}く寝{ね}ます。', romaji: 'Chotto kazegimi na node, hayaku nemasu.', zh: '有點感冒前兆的感覺，所以早點睡。' },
          { jp: '彼{かれ}は怒{おこ}りっぽい性格{せいかく}だ。', romaji: 'Kare wa okorippoi seikaku da.', zh: '他是個愛生氣（動不動就生氣）的性格。' },
        ]
      }
    ],
    vocabulary: [
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '生病/疾病' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣/發脾氣 (I類動詞)' },
      { word: '性格', reading: 'せいかく', romaji: 'seikaku', meaning: '性格' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到 (II類動詞)' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記 (II類動詞)' },
      { word: '大人', reading: 'おとな', romaji: 'otona', meaning: '大人' },
      { word: '子供', reading: 'こども', romaji: 'kodomo', meaning: '小孩' },
      { word: '太る', reading: 'ふとる', romaji: 'futoru', meaning: '變胖 (I類動詞)' },
      { word: '寝不足', reading: 'ねぶそく', romaji: 'nebusoku', meaning: '睡眠不足' },
    ],
    quiz: [
      { question: '最近、仕事が忙しくて寝不足___だ。(有點這方面的狀況)', options: ['気味', 'がち', 'っぽい', 'だらけ'], answer: 0 },
      { question: '彼はよく授業を休み___だ。(往往/常常傾向)', options: ['がち', 'むき', '気味', 'だらけ'], answer: 0 },
      { question: '「怒りっぽい」的意思是？', options: ['不愛生氣', '有點生氣', '很容易生氣(像火藥庫)', '生氣了'], answer: 2 },
      { question: '大人なのに、子供___服を着ている。(像小孩風格那樣的)', options: ['っぽい', '気味', 'がち', 'だらけ'], answer: 0 },
      { question: '「寝不足」的讀音是？', options: ['ねぶそく', 'ねふそく', 'しんぶそく', 'みんふそく'], answer: 0 },
      { question: '最近は雨が降り___だ。(常常傾向)', options: ['がち', '気味', 'っぽい', 'だらけ'], answer: 0 },
      { question: 'ちょっと風邪___なので、早く寝ます。(有點狀態)', options: ['気味', 'がち', 'っぽい', 'だらけ'], answer: 0 },
    ]
  },

  // ---- 第 93 關：N3 總複習 (使役受身/傳聞/敬語) ----
  {
    id: 'n3_review',
    level: 'N3',
    title: 'N3 總複習 (使役受身/話題/敬語)',
    grammar: [
      {
        pattern: '使役受身形 (被逼著做)',
        explanation: '表示「被迫做某事」。\n【I類】～あされる (例如：飲まされる)\n【II類】～させられる (例如：食べさせられる)\n【III類】する → させられる、くる → こさせられる',
        examples: [
          { jp: '子{こ}どもの頃{ころ}、母{はは}にピアノを習{なら}わされました。', romaji: 'Kodomo no koro, haha ni piano o narawasaremashita.', zh: '小時候被媽媽逼著學鋼琴。' },
          { jp: '毎日{まいにち}遅{おそ}くまで残業{ざんぎょう}させられます。', romaji: 'Mainichi osoku made zangyō saseraremasu.', zh: '每天被迫加班到很晚。' },
        ]
      },
      {
        pattern: '推測與傳聞的對比 (そう/らしい/みたい/はず/かもしれない)',
        explanation: '・そう(傳聞)：聽說... (接普通形)\n・らしい：聽說...、似乎... (根據客觀事實推測)\n・みたい：好像... (主觀推測、比喻)\n・はず：應該... (有根據的推斷)\n・かもしれない：也許... (可能性較低)',
        examples: [
          { jp: '天気予報{てんきよほう}によると、明日{あした}は雨{あめ}が降{ふ}るそうです。', romaji: 'Tenkiyohō ni yoruto, ashita wa ame ga furu sō desu.', zh: '根據天氣預報，聽說明天下雨。(傳聞)' },
          { jp: 'あの人{ひと}は日本人{にほんじん}ではないらしい。', romaji: 'Ano hito wa nihonjin de wa nai rashii.', zh: '那個人似乎不是日本人。(客觀推測)' },
        ]
      },
      {
        pattern: '敬語進階 (尊敬語與謙讓語的公式統整)',
        explanation: '・尊敬語 (抬高對方)：お/ご～になる、れる/られる、特殊敬語 (召し上がる等)\n・謙讓語 (貶低自己)：お/ご～する、お/ご～いたす、特殊謙讓語 (参る、伺う等)',
        examples: [
          { jp: '社長{しゃちょう}はもうお帰{かえ}りになりました。', romaji: 'Shachō wa mō okaeri ni narimashita.', zh: '總經理已經回去了。(尊敬語：お～になる)' },
          { jp: '私{わたし}が荷物{にもつ}をお持{も}ちします。', romaji: 'Watashi ga nimotsu o omochi shimasu.', zh: '我來幫您拿行李。(謙讓語：お～する)' },
        ]
      }
    ],
    vocabulary: [
      { word: '飲まされる', reading: 'のまされる', romaji: 'nomasareru', meaning: '被迫喝 (I類動詞)' },
      { word: '尊敬する', reading: 'そんけいする', romaji: 'sonkei suru', meaning: '尊敬 (III類動詞)' },
      { word: '参る', reading: 'まいる', romaji: 'mairu', meaning: '去、來(謙讓語) (I類動詞)' },
      { word: '召し上がる', reading: 'めしあがる', romaji: 'meshiagaru', meaning: '吃、喝(尊敬語) (I類動詞)' },
      { word: '伺う', reading: 'うかがう', romaji: 'ukagau', meaning: '拜訪、詢問(謙讓語) (I類動詞)' },
      { word: '噂', reading: 'うわさ', romaji: 'uwasa', meaning: '傳聞、謠言 (名詞)' },
      { word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: '嚴格的 (い形容詞)' },
      { word: '当然', reading: 'とうぜん', romaji: 'tōzen', meaning: '理所當然 (な形容詞)' },
      { word: '複雑', reading: 'ふくざつ', romaji: 'fukuzatsu', meaning: '複雜的 (な形容詞)' },
      { word: '感謝する', reading: 'かんしゃする', romaji: 'kansha suru', meaning: '感謝 (III類動詞)' },
    ],
    quiz: [
      { question: '子供の頃、よく母にピアノを___。', options: ['習わせた', '習われた', '習わせられた', '習わされた'], answer: 3 },
      { question: '天気予報によると、明日は雪が___。(聽說)', options: ['降るそうだ', '降りそうだ', '降るらしい', '降るみたいだ'], answer: 0 },
      { question: '社長はもう___。(總經理已經回去了)', options: ['お帰りしました', '帰られました', '帰らせました', 'お帰りいたしました'], answer: 1 },
      { question: '先生の部屋に___時は、ノックをしてください。(拜訪)', options: ['いらっしゃる', '参る', '伺う', 'おいでになる'], answer: 2 },
      { question: 'あの人は日本人ではない___。日本語が少し不自然だ。(客觀推測)', options: ['そう', 'らしい', 'べき', 'はずがない'], answer: 1 },
      { question: '私が荷物を___。(我來幫您拿)', options: ['お持ちします', '持たれます', 'お持ちになります', '持たせます'], answer: 0 },
      { question: '先生はもう___。(老師已經回去了)', options: ['お帰りになりました', 'お帰りしました', '帰らされました', 'お帰りいたしました'], answer: 0 },
    ]
  }
];
