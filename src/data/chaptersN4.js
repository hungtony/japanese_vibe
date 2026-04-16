// N4 章節資料 - 初級 (26章)
export const chaptersN4 = [
  // ---- 第 28 關：普通形變身 (動詞、形容詞、名詞的常體表現) ----
  {
    id: 'n4_ch28',
    level: 'N4',
    title: '普通形變身 (常體表現)',
    grammar: [
      {
        pattern: '動詞辭書形 / ない形 / た形 / なかった形',
        explanation: '普通形是不帶「ます/です」的常體。辭書形：I類改u段，II類去ます加る，III類する/くる。ない形：I類改a段+ない（う改わ），II類去ます加ない，III類しない/こない。た形：I類同て形變化，II類去ます加た，III類した/きた。',
        examples: [
          { jp: '明日{あした}、東京{とうきょう}へ行{い}く。', romaji: 'Ashita, tōkyō e iku.', zh: '明天要去東京。（行く = 行きます）' },
          { jp: '昨日{きのう}は勉強{べんきょう}しなかった。', romaji: 'Kinō wa benkyō shinakatta.', zh: '昨天沒讀書。（しなかった = しませんでした）' },
        ]
      },
      {
        pattern: 'い形容詞 / な形容詞(だ) / 名詞(だ)',
        explanation: 'い形容詞普通形直接去掉「です」（過去式改かった，否定改くない）。名詞和な形容詞現在肯定加「だ」，否定加「じゃない」，過去加「だった」，過去否定加「じゃなかった」。',
        examples: [
          { jp: 'この本{ほん}は面白{おもしろ}い。', romaji: 'Kono hon wa omoshiroi.', zh: '這本書很有趣。（面白い = 面白いです）' },
          { jp: '今日{きょう}は休{やす}みだ。', romaji: 'Kyō wa yasumi da.', zh: '今天放假。（休みだ = 休みです）' },
        ]
      }
    ],
    vocabulary: [
      { word: '明日', reading: 'あした', romaji: 'ashita', meaning: '明天' },
      { word: '東京', reading: 'とうきょう', romaji: 'tōkyō', meaning: '東京' },
      { word: '昨日', reading: 'きのう', romaji: 'kinō', meaning: '昨天' },
      { word: '勉強', reading: 'べんきょう', romaji: 'benkyō', meaning: '學習/讀書' },
      { word: '面白い', reading: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的 (い形容詞)' },
      { word: '休み', reading: 'やすみ', romaji: 'yasumi', meaning: '休息/假日' },
      { word: '暇', reading: 'ひま', romaji: 'hima', meaning: '空閒的 (な形容詞)' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的 (い形容詞)' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃 (II類動詞)' },
      { word: '行く', reading: 'いく', romaji: 'iku', meaning: '去 (I類動詞)' },
    ],
    quiz: [
      { question: '「食べます」的普通形（現在肯定）是？', options: ['食べる', '食べた', '食べない', '食べなかった'], answer: 0 },
      { question: '「学生です」的普通形是？', options: ['学生', '学生だ', '学生な', '学生じゃない'], answer: 1 },
      { question: '「行きません」的普通形（現在否定）是？', options: ['行く', '行かない', '行った', '行かなかった'], answer: 1 },
      { question: '「暇」的意思是？', options: ['休息', '有趣的', '空閒的', '忙碌的'], answer: 2 },
      { question: '「忙しいです」的普通形是？', options: ['忙しいだ', '忙しい', '忙しくない', '忙しいな'], answer: 1 },
    ]
  },

  // ---- 第 29 關：追根究底 (說明與確認：普通形＋んです) ----
  {
    id: 'n4_ch29',
    level: 'N4',
    title: '追根究底 (普通形＋んです)',
    grammar: [
      {
        pattern: '普通形 ＋ んです',
        explanation: '用於強調原因、說明狀況或請求解釋。比單純的「～です/ます」帶有更多情感或關心。名詞與な形容詞字尾的「だ」要改成「な」再接「んです」。',
        examples: [
          { jp: 'どうして遅{おく}れたんですか。', romaji: 'Dōshite okureta n desu ka.', zh: '為什麼遲到了呢？' },
          { jp: 'バスが来{こ}なかったんです。', romaji: 'Basu ga konakatta n desu.', zh: '因為公車沒來啊。' },
        ]
      }
    ],
    vocabulary: [
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到 (II類動詞)' },
      { word: '気分', reading: 'きぶん', romaji: 'kibun', meaning: '心情/身體狀態' },
      { word: '悪い', reading: 'わるい', romaji: 'warui', meaning: '壞的/不好的 (い形容詞)' },
      { word: 'どうして', reading: 'どうして', romaji: 'dōshite', meaning: '為什麼' },
      { word: '理由', reading: 'りゆう', romaji: 'riyū', meaning: '理由' },
      { word: '引っ越し', reading: 'ひっこし', romaji: 'hikkoshi', meaning: '搬家' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙 (I類動詞)' },
      { word: '探す', reading: 'さがす', romaji: 'sagasu', meaning: '尋找 (I類動詞)' },
      { word: '熱', reading: 'ねつ', romaji: 'netsu', meaning: '發燒' },
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '生病/疾病' },
    ],
    quiz: [
      { question: 'どうして昨日休んだ___か。', options: ['の', 'ん', 'が', 'な'], answer: 1 },
      { question: '「気分が悪い」的意思是？', options: ['心情不好/身體不適', '天氣不好', '脾氣差', '運氣差'], answer: 0 },
      { question: '病気___んです。(因為生病)', options: ['だ', 'な', 'の', '（不加）'], answer: 1 },
      { question: '「熱」的讀音是？', options: ['ねつ', 'あつい', 'きぶん', 'びょうき'], answer: 0 },
      { question: '「手伝う」的意思是？', options: ['尋找', '打掃', '幫忙', '搬家'], answer: 2 },
    ]
  },

  // ---- 第 30 關：我做得到 (可能形：～れます / ～られます) ----
  {
    id: 'n4_ch30',
    level: 'N4',
    title: '我做得到 (可能形)',
    grammar: [
      {
        pattern: '動詞可能形',
        explanation: '表示有能力或情況允許做某事。I類動詞字尾改え段加る；II類動詞去ます加られる；III類動詞：する變できる，来る變こられる。可能形前面的助詞通常將「を」改成「が」。',
        examples: [
          { jp: '私{わたし}は日本語{にほんご}が話{はな}せます。', romaji: 'Watashi wa nihongo ga hanasemasu.', zh: '我會說日語。' },
          { jp: 'ここではタバコが吸{す}えません。', romaji: 'Koko de wa tabako ga suemasen.', zh: '這裡不能抽菸。' },
        ]
      }
    ],
    vocabulary: [
      { word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: '說話 (I類動詞)' },
      { word: '泳ぐ', reading: 'およぐ', romaji: 'oyogu', meaning: '游泳 (I類動詞)' },
      { word: '弾く', reading: 'ひく', romaji: 'hiku', meaning: '彈奏 (I類動詞)' },
      { word: '漢字', reading: 'かんじ', romaji: 'kanji', meaning: '漢字' },
      { word: '読む', reading: 'よむ', romaji: 'yomu', meaning: '閱讀 (I類動詞)' },
      { word: '歌う', reading: 'うたう', romaji: 'utau', meaning: '唱歌 (I類動詞)' },
      { word: 'ピアノ', reading: 'ぴあの', romaji: 'piano', meaning: '鋼琴' },
      { word: '運転する', reading: 'うんてんする', romaji: 'unten suru', meaning: '駕駛 (III類動詞)' },
      { word: '予約する', reading: 'よやくする', romaji: 'yoyaku suru', meaning: '預約 (III類動詞)' },
      { word: '直す', reading: 'なおす', romaji: 'naosu', meaning: '修理 (I類動詞)' },
    ],
    quiz: [
      { question: '「食べる」的可能形是？', options: ['食べれる', '食べられる', '食べせる', '食べよう'], answer: 1 },
      { question: '日本語___話せます。', options: ['を', 'に', 'が', 'で'], answer: 2 },
      { question: '「弾く」的意思是？', options: ['駕駛', '閱讀', '修理', '彈奏'], answer: 3 },
      { question: '「する」的可能形是？', options: ['される', 'させる', 'できる', 'しられる'], answer: 2 },
      { question: '泳ぐ的可能形是？', options: ['泳げる', '泳がれる', '泳ぎれる', '泳ぐれる'], answer: 0 },
    ]
  },

  // ---- 第 31 關：一心二用 (同時進行：～ながら) ----
  {
    id: 'n4_ch31',
    level: 'N4',
    title: '一心二用 (～ながら)',
    grammar: [
      {
        pattern: '動詞ます形（去掉ます） ＋ ながら',
        explanation: '表示兩個動作同時進行。「一邊...一邊...」。句子的主要動作在後面的動詞。',
        examples: [
          { jp: '音楽{おんがく}を聞{き}きながら、勉強{べんきょう}します。', romaji: 'Ongaku o kikinagara, benkyō shimasu.', zh: '一邊聽音樂一邊讀書。' },
          { jp: 'お茶{ちゃ}を飲{の}みながら、話{はな}しましょう。', romaji: 'O-cha o nominagara, hanashimashō.', zh: '我們邊喝茶邊聊吧。' },
        ]
      }
    ],
    vocabulary: [
      { word: '音楽', reading: 'おんがく', romaji: 'ongaku', meaning: '音樂' },
      { word: '勉強する', reading: 'べんきょうする', romaji: 'benkyō suru', meaning: '學習 (III類動詞)' },
      { word: 'お茶', reading: 'おちゃ', romaji: 'ocha', meaning: '茶' },
      { word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: '說話/聊天 (I類動詞)' },
      { word: '歩く', reading: 'あるく', romaji: 'aruku', meaning: '走路 (I類動詞)' },
      { word: '運転する', reading: 'うんてんする', romaji: 'unten suru', meaning: '駕駛 (III類動詞)' },
      { word: '電話する', reading: 'でんわする', romaji: 'denwa suru', meaning: '打電話 (III類動詞)' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作 (I類動詞)' },
      { word: '歌う', reading: 'うたう', romaji: 'utau', meaning: '唱歌 (I類動詞)' },
      { word: 'ガム', reading: 'ごむ', romaji: 'gamu', meaning: '口香糖' },
    ],
    quiz: [
      { question: '音楽を聞き___、勉強します。', options: ['たり', 'ながら', 'て', 'から'], answer: 1 },
      { question: '「働く」的讀音是？', options: ['うごく', 'あるく', 'はたらく', 'いく'], answer: 2 },
      { question: 'テレビを___ながら、ご飯を食べます。(看)', options: ['見る', '見て', '見', '見た'], answer: 2 },
      { question: '「歩く」的意思是？', options: ['跑步', '跳躍', '走路', '駕駛'], answer: 2 },
      { question: '運転___ながら、電話をしてはいけません。', options: ['し', 'する', 'して', 'す'], answer: 0 },
    ]
  },

  // ---- 第 32 關：長句的靈魂 (動詞/普通形修飾名詞) ----
  {
    id: 'n4_ch32',
    level: 'N4',
    title: '長句的靈魂 (修飾名詞)',
    grammar: [
      {
        pattern: '普通形 ＋ 名詞',
        explanation: '日文可以直接將動詞的普通形（辭書形、た形、ない形）放在名詞前面，作為形容詞來修飾名詞。例如：「買書的人」、「昨天買的書」。',
        examples: [
          { jp: 'これは私{わたし}が昨日{きのう}買{か}った本{ほん}です。', romaji: 'Kore wa watashi ga kinō katta hon desu.', zh: '這是我昨天買的書。' },
          { jp: 'メガネをかけている人{ひと}は田中{たなか}さんです。', romaji: 'Megane o kakete iru hito wa Tanaka-san desu.', zh: '戴著眼鏡的人是田中先生。' },
        ]
      }
    ],
    vocabulary: [
      { word: '本', reading: 'ほん', romaji: 'hon', meaning: '書' },
      { word: '買う', reading: 'かう', romaji: 'kau', meaning: '買 (I類動詞)' },
      { word: '昨日', reading: 'きのう', romaji: 'kinō', meaning: '昨天' },
      { word: 'メガネ', reading: 'めがね', romaji: 'megane', meaning: '眼鏡' },
      { word: 'かける', reading: 'かける', romaji: 'kakeru', meaning: '戴上(眼鏡等) (II類動詞)' },
      { word: '人', reading: 'ひと', romaji: 'hito', meaning: '人' },
      { word: '映画', reading: 'えいが', romaji: 'eiga', meaning: '電影' },
      { word: '見る', reading: 'みる', romaji: 'miru', meaning: '看 (II類動詞)' },
      { word: '料理', reading: 'りょうり', romaji: 'ryōri', meaning: '料理' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作/做 (I類動詞)' },
    ],
    quiz: [
      { question: '昨日___映画はとても面白かった。(看的)', options: ['見る', '見た', '見て', '見ない'], answer: 1 },
      { question: '母が___料理が一番好きです。(做的)', options: ['作る', '作った', '作って', '作らない'], answer: 1 },
      { question: '「かける」在這裡的意思是？', options: ['打電話', '花費(時間)', '戴上(眼鏡)', '懸掛'], answer: 2 },
      { question: '帽子をかぶって___人は誰ですか。(戴著)', options: ['いる', 'ある', 'みる', 'おく'], answer: 0 },
      { question: '「作る」的讀音是？', options: ['わかる', 'おくる', 'つくる', 'おこる'], answer: 2 },
    ]
  },

  // ---- 第 33 關：狀態的呈現 (自動詞與他動詞狀態：～てある / ～ている) ----
  {
    id: 'n4_ch33',
    level: 'N4',
    title: '狀態的呈現 (～てある/いる)',
    grammar: [
      {
        pattern: '名詞 ＋ が ＋ 自動詞て形 ＋ います',
        explanation: '表示動作發生後留下來的自然結果。用於描述眼前的客觀事實（如窗戶開著）。',
        examples: [
          { jp: '窓{まど}が開{あ}いています。', romaji: 'Mado ga aite imasu.', zh: '窗戶開著。' },
        ]
      },
      {
        pattern: '名詞 ＋ が ＋ 他動詞て形 ＋ あります',
        explanation: '表示有人刻意做了某動作，且該動作的結果狀態保留到現在。強調「人為的目的」。',
        examples: [
          { jp: '壁{かべ}にカレンダーが貼{は}ってあります。', romaji: 'Kabe ni karendā ga hatte arimasu.', zh: '牆上貼著日曆（有人貼的）。' },
        ]
      }
    ],
    vocabulary: [
      { word: '開く', reading: 'あく', romaji: 'aku', meaning: '開(自動詞) (I類動詞)' },
      { word: '閉まる', reading: 'しまる', romaji: 'shimaru', meaning: '關(自動詞) (I類動詞)' },
      { word: 'つく', reading: 'つける', romaji: 'tsuku', meaning: '開啟/點亮(自動詞) (I類動詞)' },
      { word: '消える', reading: 'きえる', romaji: 'kieru', meaning: '熄滅/消失(自動詞) (II類動詞)' },
      { word: '貼る', reading: 'はる', romaji: 'haru', meaning: '貼(他動詞) (I類動詞)' },
      { word: '置く', reading: 'おく', romaji: 'oku', meaning: '放置(他動詞) (I類動詞)' },
      { word: '並べる', reading: 'ならべる', romaji: 'naraberu', meaning: '排列(他動詞) (II類動詞)' },
      { word: '壁', reading: 'かべ', romaji: 'kabe', meaning: '牆壁' },
      { word: '壊れる', reading: 'こわれる', romaji: 'kowareru', meaning: '壞掉(自動詞) (II類動詞)' },
      { word: '予定', reading: 'よてい', romaji: 'yotei', meaning: '預定/計畫' },
    ],
    quiz: [
      { question: 'ドア___閉まっています。', options: ['を', 'が', 'で', 'に'], answer: 1 },
      { question: 'カレンダーが貼って___。(有人貼的狀態)', options: ['います', 'おきます', 'みます', 'あります'], answer: 3 },
      { question: '電気が___います。(關著)', options: ['消して', '消えて', '消って', '消れて'], answer: 1 },
      { question: '「並べる」的意思是？', options: ['比較', '排列(他動)', '排隊(自動)', '貼上'], answer: 1 },
      { question: '「壊れる」的意思是？', options: ['修理', '弄壞(他動)', '壞掉(自動)', '破掉'], answer: 2 },
    ]
  },

  // ---- 第 34 關：未來的打算 (意向形 + と思います) ----
  {
    id: 'n4_ch34',
    level: 'N4',
    title: '未來的打算 (意向形)',
    grammar: [
      {
        pattern: '動詞意向形 ＋ と思{おも}っています',
        explanation: '表示說話者自己已經決定好的一段時間的計畫或打算。「我打算...」。',
        examples: [
          { jp: '週末{しゅうまつ}は海{うみ}へ行こうと思っています。', romaji: 'Shūmatsu wa umi e ikō to omotte imasu.', zh: '我打算週末去海邊。' },
          { jp: '車を買{か}おうと思っています。', romaji: 'Kuruma o kaō to omotte imasu.', zh: '我打算買車。' },
        ]
      }
    ],
    vocabulary: [
      { word: '週末', reading: 'しゅうまつ', romaji: 'shūmatsu', meaning: '週末' },
      { word: '海', reading: 'うみ', romaji: 'umi', meaning: '海' },
      { word: '山', reading: 'やま', romaji: 'yama', meaning: '山' },
      { word: '旅行する', reading: 'りょこうする', romaji: 'ryokō suru', meaning: '旅行 (III類動詞)' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作 (I類動詞)' },
      { word: '留学する', reading: 'りゅうがくする', romaji: 'ryūgaku suru', meaning: '留學 (III類動詞)' },
      { word: '将来', reading: 'しょうらい', romaji: 'shōrai', meaning: '將來' },
      { word: '夢', reading: 'ゆめ', romaji: 'yume', meaning: '夢想' },
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚 (III類動詞)' },
      { word: '会社', reading: 'かいしゃ', romaji: 'kaisha', meaning: '公司' },
    ],
    quiz: [
      { question: '海へ行___と思っています。(打算去)', options: ['く', 'こう', 'って', 'き'], answer: 1 },
      { question: '「留学」的讀音是？', options: ['りゅうがく', 'るがく', 'りゅかく', 'りゅうかく'], answer: 0 },
      { question: '「将来」的意思是？', options: ['過去', '現在', '未來/將來', '最近'], answer: 2 },
      { question: '日本語を勉強し___と思っています。(打算讀)', options: ['よう', 'る', 'て', 'ます'], answer: 0 },
      { question: '「夢」的讀音是？', options: ['ゆめ', 'きぼう', 'もくひょう', 'ねがい'], answer: 0 },
    ]
  },

  // ---- 第 35 關：聽我的準沒錯 (強烈建議：～た/ない ほうがいいです) ----
  {
    id: 'n4_ch35',
    level: 'N4',
    title: '聽我的準沒錯 (強烈建議)',
    grammar: [
      {
        pattern: '動詞た形 / ない形 ＋ ほうがいいです',
        explanation: '給予對方強烈的建議或忠告。「最好... / 最好不要...」。',
        examples: [
          { jp: '毎日{まいにち}運動{うんどう}したほうがいいですよ。', romaji: 'Mainichi undō shita hō ga ii desu yo.', zh: '最好每天運動喔。' },
          { jp: '夜遅{よるおそ}くまで起{お}きていないほうがいいです。', romaji: 'Yoru osoku made okite inai hō ga ii desu.', zh: '最好不要熬夜到太晚。' },
        ]
      }
    ],
    vocabulary: [
      { word: '運動する', reading: 'うんどうする', romaji: 'undō suru', meaning: '運動 (III類動詞)' },
      { word: '夜', reading: 'よる', romaji: 'yoru', meaning: '夜晚' },
      { word: '遅い', reading: 'おそい', romaji: 'osoi', meaning: '晚的/慢的 (い形容詞)' },
      { word: '起きる', reading: 'おきる', romaji: 'okiru', meaning: '起床/醒著 (II類動詞)' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: '病院', reading: 'びょういん', romaji: 'byōin', meaning: '醫院' },
      { word: '医者', reading: 'いしゃ', romaji: 'isha', meaning: '醫生' },
      { word: 'タバコ', reading: 'たばこ', romaji: 'tabako', meaning: '香菸' },
      { word: '吸う', reading: 'すう', romaji: 'sū', meaning: '吸(菸) (I類動詞)' },
      { word: '無理する', reading: 'むりする', romaji: 'muri suru', meaning: '勉強/硬撐 (III類動詞)' },
    ],
    quiz: [
      { question: '早く病院へ___ほうがいいです。(最好去)', options: ['行く', '行って', '行った', '行かない'], answer: 2 },
      { question: 'タバコは___ほうがいいです。(最好不要抽)', options: ['吸う', '吸った', '吸わなかった', '吸わない'], answer: 3 },
      { question: '「無理する」的意思是？', options: ['浪費', '生病', '勉強/硬撐', '休息'], answer: 2 },
      { question: '「遅い」的讀音是？', options: ['おそい', 'はやい', 'とおい', 'ちかい'], answer: 0 },
      { question: '薬を___ほうがいいですよ。(最好吃/喝)', options: ['飲んだ', '飲む', '飲んで', '飲まない'], answer: 0 },
    ]
  },

  // ---- 第 36 關：絕對服從 (命令形與禁止形) ----
  {
    id: 'n4_ch36',
    level: 'N4',
    title: '絕對服從 (命令與禁止)',
    grammar: [
      {
        pattern: '動詞命令形 / 動詞辭書形＋な（禁止形）',
        explanation: '強烈的命令（去做！）或禁止（不准做！）。【命令形】I類動詞字尾改え段，II類去ます加ろ，III類：する變しろ，来る變こい。【禁止形】所有動詞的辭書形直接加「な」。',
        examples: [
          { jp: '急{いそ}げ！', romaji: 'Isoge!', zh: '快一點！' },
          { jp: '触{さわ}るな！', romaji: 'Sawaru na!', zh: '不准摸！' },
        ]
      }
    ],
    vocabulary: [
      { word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: '趕快/著急 (I類動詞)' },
      { word: '触る', reading: 'さわる', romaji: 'sawaru', meaning: '觸摸 (I類動詞)' },
      { word: '止まる', reading: 'とまる', romaji: 'tomaru', meaning: '停止 (I類動詞)' },
      { word: '入る', reading: 'はいる', romaji: 'hairu', meaning: '進入 (I類動詞)' },
      { word: '逃げる', reading: 'にげる', romaji: 'nigeru', meaning: '逃跑 (II類動詞)' },
      { word: '頑張る', reading: 'がんばる', romaji: 'ganbaru', meaning: '加油/努力 (I類動詞)' },
      { word: '投げる', reading: 'なげる', romaji: 'nageru', meaning: '投擲 (II類動詞)' },
      { word: '標識', reading: 'ひょうしき', romaji: 'hyōshiki', meaning: '標誌' },
      { word: '規則', reading: 'きそく', romaji: 'kisoku', meaning: '規則' },
      { word: '守る', reading: 'まもる', romaji: 'mamoru', meaning: '遵守/保護 (I類動詞)' },
    ],
    quiz: [
      { question: '「行く」的命令形是？', options: ['行け', '行か', '行こ', '行き'], answer: 0 },
      { question: '「食べるな」的意思是？', options: ['快吃！', '請吃！', '不准吃！', '想吃！'], answer: 2 },
      { question: '「触る」的讀音是？', options: ['さわる', 'とまる', 'おわる', 'かわる'], answer: 0 },
      { question: '「逃げる」的意思是？', options: ['丟掉', '躲藏', '逃跑', '進入'], answer: 2 },
      { question: '「頑張る」的命令形是？', options: ['頑張れ', '頑張るな', '頑張ろ', '頑張ら'], answer: 0 },
    ]
  },

  // ---- 第 37 關：如果...的話 (條件形「ば形」與「たら」) ----
  {
    id: 'n4_ch37',
    level: 'N4',
    title: '如果...的話 (假設條件)',
    grammar: [
      {
        pattern: '動詞ば形 / い形容詞ければ',
        explanation: '表示假設的條件「如果...的話」。【ば形變化】I類動詞字尾改え段加ば；II類動詞去ます加れば；III類：する變すれば，来る變くれば。い形容詞去い加ければ。',
        examples: [
          { jp: '春{はる}になれば、桜{さくら}が咲{さ}きます。', romaji: 'Haru ni nareba, sakura ga sakimasu.', zh: '到了春天櫻花就會開。' },
        ]
      },
      {
        pattern: '動詞/形容詞/名詞の た形 ＋ ら',
        explanation: '表示假設條件或時間先後。「如果...的話 / ...之後」。這是口語中最常用、限制最少的條件句。',
        examples: [
          { jp: '雨{あめ}が降{ふ}ったら、家{いえ}にいます。', romaji: 'Ame ga futtara, ie ni imasu.', zh: '如果下雨的話，就待在家。' },
          { jp: '駅{えき}に着{つ}いたら、電話{でんわ}してください。', romaji: 'Eki ni tsuitara, denwa shite kudasai.', zh: '到了車站之後，請打電話給我。' },
        ]
      },
      {
        pattern: '動詞辭書形 / 名詞だ ＋ と',
        explanation: '表示「一...就會...」。客觀的自然法則、真理、或是某個動作必然導致的結果。',
        examples: [
          { jp: '春{はる}になると、桜{さくら}が咲{さ}きます。', romaji: 'Haru ni naru to, sakura ga sakimasu.', zh: '一到春天，櫻花就會開。' },
        ]
      },
      {
        pattern: '普通形 / 名詞 ＋ なら',
        explanation: '表示「如果是那個情況的話...」。承接對方的話題，給予建議或判斷。',
        examples: [
          { jp: '温泉{おんせん}へ行{い}くなら、箱根{はこね}がいいですよ。', romaji: 'Onsen e iku nara, Hakone ga ii desu yo.', zh: '如果要泡溫泉的話，箱根很不錯喔。' },
        ]
      }
    ],
    vocabulary: [
      { word: '春', reading: 'はる', romaji: 'haru', meaning: '春天' },
      { word: '桜', reading: 'さくら', romaji: 'sakura', meaning: '櫻花' },
      { word: '咲く', reading: 'さく', romaji: 'saku', meaning: '開花 (I類動詞)' },
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜 (い形容詞)' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '昂貴 (い形容詞)' },
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: '雨' },
      { word: '降る', reading: 'ふる', romaji: 'furu', meaning: '降下(雨/雪) (I類動詞)' },
      { word: '駅', reading: 'えき', romaji: 'eki', meaning: '車站' },
      { word: '着く', reading: 'つく', romaji: 'tsuku', meaning: '抵達 (I類動詞)' },
      { word: '電話する', reading: 'でんわする', romaji: 'denwa suru', meaning: '打電話 (III類動詞)' },
    ],
    quiz: [
      { question: '「行く」的ば形是？', options: ['行けば', '行かば', '行こば', '行きば'], answer: 0 },
      { question: '駅に着い___、電話してください。(之後)', options: ['たら', 'れば', 'と', 'なら'], answer: 0 },
      { question: '「咲く」的意思是？', options: ['開花', '結果', '枯萎', '落下'], answer: 0 },
      { question: '安かっ___、買います。(如果便宜的話)', options: ['たら', 'れば', 'と', 'なら'], answer: 0 },
      { question: '「着く」的讀音是？', options: ['つく', 'きく', 'さく', 'なく'], answer: 0 },
    ]
  },

  // ---- 第 38 關：照貓畫虎 (按照...去做：～とおりに) ----
  {
    id: 'n4_ch38',
    level: 'N4',
    title: '照貓畫虎 (～とおりに)',
    grammar: [
      {
        pattern: '動詞辭書形/た形 ＋ とおりに / 名詞 ＋ のとおりに',
        explanation: '表示與前面的事物完全一樣地執行動作。「按照... / 如同...」。',
        examples: [
          { jp: '私{わたし}が言{い}ったとおりに、書{か}いてください。', romaji: 'Watashi ga itta tōri ni, kaite kudasai.', zh: '請照著我說的寫。' },
          { jp: '説明書{せつめいしょ}のとおりに、組{く}み立{た}てました。', romaji: 'Setsumeisho no tōri ni, kumitatemashita.', zh: '按照說明書組裝好了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '言う', reading: 'いう', romaji: 'iu', meaning: '說 (I類動詞)' },
      { word: '説明書', reading: 'せつめいしょ', romaji: 'setsumeisho', meaning: '說明書' },
      { word: '組み立てる', reading: 'くみたてる', romaji: 'kumitateru', meaning: '組裝 (II類動詞)' },
      { word: '線', reading: 'せん', romaji: 'sen', meaning: '線' },
      { word: '切る', reading: 'きる', romaji: 'kiru', meaning: '切/剪 (I類動詞)' },
      { word: '折る', reading: 'おる', romaji: 'oru', meaning: '折 (I類動詞)' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導 (II類動詞)' },
      { word: '図', reading: 'ず', romaji: 'zu', meaning: '圖' },
      { word: '矢印', reading: 'やじるし', romaji: 'yajirushi', meaning: '箭頭' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作 (I類動詞)' },
    ],
    quiz: [
      { question: '私が___とおりに、やってください。(按照我說的)', options: ['言う', '言った', '言って', '言わない'], answer: 1 },
      { question: '図___とおりに、折ってください。(按照圖)', options: ['が', 'を', 'の', 'に'], answer: 2 },
      { question: '「組み立てる」的意思是？', options: ['折疊', '剪開', '組裝', '說明'], answer: 2 },
      { question: '「説明書」的讀音是？', options: ['せつめいしょ', 'せつめしょ', 'しつめいしょ', 'せつみしょ'], answer: 0 },
      { question: '先生が教える___に、作ります。', options: ['ため', 'よう', 'とおり', 'まま'], answer: 2 },
    ]
  },

  // ---- 第 39 關：為了某個期盼 (非意志目的：～ように) ----
  {
    id: 'n4_ch39',
    level: 'N4',
    title: '為了某個期盼 (～ように)',
    grammar: [
      {
        pattern: '非意志動詞辭書形/動詞ない形 ＋ ように',
        explanation: '表示為了達成某個目標狀態。「為了能夠... / 為了不要...」。前面通常是不受意志控制的動詞（如可能形、自動詞）或否定形。',
        examples: [
          { jp: '日本語が話{はな}せるように、毎日{まいにち}練習{れんしゅう}します。', romaji: 'Nihongo ga hanaseru yō ni, mainichi renshū shimasu.', zh: '為了能說日語，我每天練習。' },
          { jp: '風邪{かぜ}を引{ひ}かないように、気{き}をつけています。', romaji: 'Kaze o hikanai yō ni, ki o tsukete imasu.', zh: '為了不感冒，我很小心注意。' },
        ]
      }
    ],
    vocabulary: [
      { word: '毎日', reading: 'まいにち', romaji: 'mainichi', meaning: '每天' },
      { word: '練習する', reading: 'れんしゅうする', romaji: 'renshū suru', meaning: '練習 (III類動詞)' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '引く', reading: 'ひく', romaji: 'hiku', meaning: '拉/患(感冒) (I類動詞)' },
      { word: '気をつける', reading: 'きをつける', romaji: 'ki o tsukeru', meaning: '注意/小心 (II類動詞)' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記 (II類動詞)' },
      { word: 'メモする', reading: 'めもする', romaji: 'memo suru', meaning: '做筆記 (III類動詞)' },
      { word: '合格する', reading: 'ごうかくする', romaji: 'gōkaku suru', meaning: '及格/合格 (III類動詞)' },
      { word: '一生懸命', reading: 'いっしょうけんめい', romaji: 'isshōkenmei', meaning: '拼命地' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到 (II類動詞)' },
    ],
    quiz: [
      { question: '忘れない___、メモします。(為了不要)', options: ['ために', 'ように', 'から', 'ので'], answer: 1 },
      { question: '「風邪を引く」的意思是？', options: ['生病', '頭痛', '患感冒', '發燒'], answer: 2 },
      { question: '「一生懸命」的讀音是？', options: ['いっしょうけんめい', 'いっしょけんめい', 'いしょうけんめ', 'いっしょけんめ'], answer: 0 },
      { question: '日本語が話せる___、練習します。(為了能夠)', options: ['ために', 'ように', 'ことに', 'ものに'], answer: 1 },
      { question: '「気をつける」的意思是？', options: ['擔心', '生氣', '注意/小心', '疲累'], answer: 2 },
    ]
  },

  // ---- 第 40 關：我幫你做 (行為授受：～てあげる / ～てもらう / ～てくれる) ----
  {
    id: 'n4_ch40',
    level: 'N4',
    title: '我幫你做 (行為授受)',
    grammar: [
      {
        pattern: '動詞て形 ＋ あげる / もらう / くれる',
        explanation: '表示「為某人做某事」或「請某人為我做某事」。あげる是我幫別人，もらう是我請別人幫忙，くれる是別人主動幫我。',
        examples: [
          { jp: '私{わたし}は友達{ともだち}に日本語{にほんご}を教{おし}えてあげました。', romaji: 'Watashi wa tomodachi ni nihongo o oshiete agemashita.', zh: '我教了朋友日文。' },
          { jp: '母{はは}が弁当{べんとう}を作{つか}ってくれました。', romaji: 'Haha ga bentō o tsukutte kuremashita.', zh: '媽媽幫我做了便當。' },
        ]
      }
    ],
    vocabulary: [
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導 (II類動詞)' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作 (I類動詞)' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙 (I類動詞)' },
      { word: '貸す', reading: 'かす', romaji: 'kasu', meaning: '借給別人 (I類動詞)' },
      { word: '借りる', reading: 'かりる', romaji: 'kariru', meaning: '向別人借 (II類動詞)' },
      { word: '送る', reading: 'おくる', romaji: 'okuru', meaning: '送/寄/送行 (I類動詞)' },
      { word: '案内する', reading: 'あんないする', romaji: 'annai suru', meaning: '帶路/導覽 (III類動詞)' },
      { word: '説明する', reading: 'せつめいする', romaji: 'setsumei suru', meaning: '說明 (III類動詞)' },
      { word: '直す', reading: 'なおす', romaji: 'naosu', meaning: '修理/修改 (I類動詞)' },
      { word: '連れて行く', reading: 'つれていく', romaji: 'tsurete iku', meaning: '帶去 (I類動詞)' },
    ],
    quiz: [
      { question: '先生に教えて___ました。(請老師教)', options: ['あげ', 'もらい', 'くれ', 'やり'], answer: 1 },
      { question: '友達が手伝って___ました。(朋友主動幫我)', options: ['あげ', 'もらい', 'くれ', 'やり'], answer: 2 },
      { question: '私が写真を撮って___ましょうか。(我幫你拍吧)', options: ['あげ', 'もらい', 'くれ', 'あり'], answer: 0 },
      { question: '「貸す」的反義詞是？', options: ['返す', '借りる', '送る', '直す'], answer: 1 },
      { question: '「案内する」的讀音是？', options: ['あんないする', 'あんらいする', 'いないする', 'いんらいする'], answer: 0 },
    ]
  },

  // ---- 第 41 關：把動作當作名詞 (名詞化：V原のは / のが / のを) ----
  {
    id: 'n4_ch41',
    level: 'N4',
    title: '把動作當作名詞 (名詞化)',
    grammar: [
      {
        pattern: '動詞辭書形 ＋ のは / のが / のを',
        explanation: '在動詞後面加上「の」，將整個動作子句名詞化，當作句子的主詞或受詞。',
        examples: [
          { jp: '日本語{にほんご}を勉強{べんきょう}するのは面白{おもしろ}いです。', romaji: 'Nihongo o benkyō suru no wa omoshiroi desu.', zh: '學日文很有趣。' },
          { jp: '私{わたし}は音楽{おんがく}を聞{き}くのが好{す}きです。', romaji: 'Watashi wa ongaku o kiku no ga suki desu.', zh: '我喜歡聽音樂。' },
        ]
      }
    ],
    vocabulary: [
      { word: '面白い', reading: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的 (い形容詞)' },
      { word: '難しい', reading: 'むずかしい', romaji: 'muzukashii', meaning: '困難的 (い形容詞)' },
      { word: '音楽', reading: 'おんがく', romaji: 'ongaku', meaning: '音樂' },
      { word: '好き', reading: 'すき', romaji: 'suki', meaning: '喜歡的 (な形容詞)' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長的 (な形容詞)' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: '不擅長的 (な形容詞)' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記 (II類動詞)' },
      { word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: '跑 (I類動詞)' },
      { word: '速い', reading: 'はやい', romaji: 'hayai', meaning: '快速的 (い形容詞)' },
      { word: '遅い', reading: 'おそい', romaji: 'osoi', meaning: '慢的/晚的 (い形容詞)' },
    ],
    quiz: [
      { question: '本を読む___が好きです。', options: ['に', 'の', 'のが', 'のを'], answer: 2 },
      { question: '「難しい」的反義詞是？', options: ['易しい(やさしい)', '面白い', '速い', '遅い'], answer: 0 },
      { question: '薬を飲む___忘れました。(把吃藥這件事)', options: ['のが', 'のは', 'のを', 'のに'], answer: 2 },
      { question: '「走る」的讀音是？', options: ['あるく', 'はしる', 'およぐ', 'いく'], answer: 1 },
      { question: '彼が来る___を知っていますか。', options: ['のが', 'のを', 'のは', 'のにも'], answer: 1 },
    ]
  },

  // ---- 第 42 關：我被影響了 (被動形：～れます / ～られます) ----
  {
    id: 'n4_ch42',
    level: 'N4',
    title: '我被影響了 (被動形)',
    grammar: [
      {
        pattern: '動詞受身形（被動形）',
        explanation: '表示被某人做某事，通常帶有受害、困擾的語氣。I類動詞字尾改あ段加れる（字尾う改わ）；II類動詞去ます加られる；III類動詞：する變される，来る變こられる。',
        examples: [
          { jp: '私{わたし}は先生{せんせい}に褒{ほめ}られました。', romaji: 'Watashi wa sensei ni homeraremashita.', zh: '我被老師稱讚了。' },
          { jp: '電車{でんしゃ}で足{あし}を踏{ふ}まれました。', romaji: 'Densha de ashi o fumaremashita.', zh: '在電車上被踩到腳了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '褒める', reading: 'ほめる', romaji: 'homeru', meaning: '稱讚 (II類動詞)' },
      { word: '足', reading: 'あし', romaji: 'ashi', meaning: '腳' },
      { word: '踏む', reading: 'ふむ', romaji: 'fumu', meaning: '踩 (I類動詞)' },
      { word: '叱る', reading: 'しかる', romaji: 'shikaru', meaning: '責罵 (I類動詞)' },
      { word: '犬', reading: 'いぬ', romaji: 'inu', meaning: '狗' },
      { word: '噛む', reading: 'かむ', romaji: 'kamu', meaning: '咬 (I類動詞)' },
      { word: '泥棒', reading: 'どろぼう', romaji: 'dorobō', meaning: '小偷' },
      { word: '盗む', reading: 'ぬすむ', romaji: 'nusumu', meaning: '偷竊 (I類動詞)' },
      { word: '誘う', reading: 'さそう', romaji: 'sasou', meaning: '邀請 (I類動詞)' },
      { word: '笑う', reading: 'わらう', romaji: 'warau', meaning: '笑/嘲笑 (I類動詞)' },
    ],
    quiz: [
      { question: '先生___褒められました。(被老師)', options: ['を', 'に', 'が', 'で'], answer: 1 },
      { question: '「踏む」的被動形是？', options: ['踏まれる', '踏めれる', '踏もれる', '踏みれる'], answer: 0 },
      { question: '「泥棒」的意思是？', options: ['警察', '醫生', '小偷', '老師'], answer: 2 },
      { question: '犬に___ました。(被咬)', options: ['噛まれ', '噛みれ', '噛めれ', '噛させ'], answer: 0 },
      { question: '「叱る」的讀音是？', options: ['しかる', 'ほめる', 'おこる', 'なく'], answer: 0 },
    ]
  },

  // ---- 第 43 關：原來是因為這樣 (て形表原因：～て、～) ----
  {
    id: 'n4_ch43',
    level: 'N4',
    title: '原來是因為這樣 (て形原因)',
    grammar: [
      {
        pattern: '動詞て形 / い形容詞くて / な形容詞・名詞で',
        explanation: '用て形表示原因或理由。後半句通常是表示感情、可能/不可能、或是不受意志控制的自然結果。',
        examples: [
          { jp: 'ニュースを聞{き}いて、びっくりしました。', romaji: 'Nyūsu o kiite, bikkuri shimashita.', zh: '聽到新聞，嚇了一跳。' },
          { jp: '風邪{かぜ}で、学校{がっこう}を休{やす}みました。', romaji: 'Kaze de, gakkō o yasumimashita.', zh: '因為感冒，所以向學校請了假。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'ニュース', reading: 'にゅーす', romaji: 'nyūsu', meaning: '新聞' },
      { word: 'びっくりする', reading: 'びっくりする', romaji: 'bikkuri suru', meaning: '吃驚/嚇一跳 (III類動詞)' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息/請假 (I類動詞)' },
      { word: '安心する', reading: 'あんしんする', romaji: 'anshin suru', meaning: '安心 (III類動詞)' },
      { word: '心配する', reading: 'しんぱいする', romaji: 'shinpai suru', meaning: '擔心 (III類動詞)' },
      { word: '遅刻する', reading: 'ちこくする', romaji: 'chikoku suru', meaning: '遲到 (III類動詞)' },
      { word: '複雑', reading: 'ふくざつ', romaji: 'fukuzatsu', meaning: '複雜的 (な形容詞)' },
      { word: '事故', reading: 'じこ', romaji: 'jiko', meaning: '事故/車禍' },
      { word: '道', reading: 'みち', romaji: 'michi', meaning: '道路' },
    ],
    quiz: [
      { question: '手紙を___、安心しました。(因為讀了)', options: ['読む', '読んだ', '読んで', '読まない'], answer: 2 },
      { question: '事故___、電車が遅れました。(因為事故)', options: ['で', 'に', 'を', 'が'], answer: 0 },
      { question: '「安心する」的意思是？', options: ['生氣', '吃驚', '安心', '擔心'], answer: 2 },
      { question: '道が___、分かりません。(因為複雜)', options: ['複雑で', '複雑くて', '複雑なで', '複雑くては'], answer: 0 },
      { question: '「びっくりする」的意思是？', options: ['開心', '生氣', '吃驚/嚇一跳', '安心'], answer: 2 },
    ]
  },

  // ---- 第 44 關：藏在句子裡的疑問 (間接問句：～か / ～かどうか) ----
  {
    id: 'n4_ch44',
    level: 'N4',
    title: '藏在句子裡的疑問 (間接問句)',
    grammar: [
      {
        pattern: '疑問詞 ＋ 普通形 ＋ か / 普通形 ＋ かどうか',
        explanation: '將疑問句嵌入大句子中。有疑問詞時用「か」，沒有疑問詞（Yes/No問句）時用「かどうか」。名詞與な形容詞不加「だ」。',
        examples: [
          { jp: '会議{かいぎ}は何時{なんじ}に始{はじ}まるか、知{し}っていますか。', romaji: 'Kaigi wa nan-ji ni hajimaru ka, shitte imasu ka.', zh: '你知道會議幾點開始嗎？' },
          { jp: 'その話{はなし}が本当{ほんとう}かどうか、分{わ}かりません。', romaji: 'Sono hanashi ga hontō ka dō ka, wakarimasen.', zh: '不知道那件事是不是真的。' },
        ]
      }
    ],
    vocabulary: [
      { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: '會議' },
      { word: '始まる', reading: 'はじまる', romaji: 'hajimaru', meaning: '開始(自動詞) (I類動詞)' },
      { word: '知る', reading: 'しる', romaji: 'shiru', meaning: '知道 (I類動詞)' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的/事實 (な形容詞)' },
      { word: '分かる', reading: 'わかる', romaji: 'wakaru', meaning: '明白/了解 (I類動詞)' },
      { word: '間違い', reading: 'まちがい', romaji: 'machigai', meaning: '錯誤' },
      { word: '確かめる', reading: 'たしかめる', romaji: 'tashikameru', meaning: '確認 (II類動詞)' },
      { word: '調べる', reading: 'しらべる', romaji: 'shiraberu', meaning: '調查 (II類動詞)' },
      { word: '正しい', reading: 'ただしい', romaji: 'tadashii', meaning: '正確的 (い形容詞)' },
      { word: '着く', reading: 'つく', romaji: 'tsuku', meaning: '抵達 (I類動詞)' },
    ],
    quiz: [
      { question: '誰が来る___、知っていますか。', options: ['か', 'かどうか', 'が', 'を'], answer: 0 },
      { question: '「確かめる」的意思是？', options: ['猜測', '確認', '忘記', '調查'], answer: 1 },
      { question: '美味しい___、食べてみてください。(是否好吃)', options: ['か', 'だか', 'かどうか', 'なだか'], answer: 2 },
      { question: '「本当」的讀音是？', options: ['ほんとう', 'ほんと', 'ほんちょう', 'はんとう'], answer: 0 },
      { question: '何時に着く___、教えてください。', options: ['かどうか', 'か', 'の', 'が'], answer: 1 },
    ]
  },

  // ---- 第 45 關：為您效勞 (進階授受動詞：～て差し上げます 等) ----
  {
    id: 'n4_ch45',
    level: 'N4',
    title: '為您效勞 (進階授受動詞)',
    grammar: [
      {
        pattern: '～てさしあげます / ～ていただきます / ～てくださいます',
        explanation: '表示給予或接受恩惠的尊敬/謙讓表達。「てあげる→てさしあげる(我為長輩做)」、「てもらう→ていただく(請長輩為我做)」、「てくれる→てくださる(長輩為我做)」。',
        examples: [
          { jp: '私{わたし}は先生{せんせい}に本をお貸{か}ししてさしあげました。', romaji: 'Watashi wa sensei ni hon o okashi shite sashiagemashita.', zh: '我借書給老師了。（客氣表現通常配合謙讓語，此句較生硬，常直接用謙讓動詞代替）' },
          { jp: '先生に教{おし}えていただきました。', romaji: 'Sensei ni oshiete itadakimashita.', zh: '請老師教我了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: '老師' },
      { word: '貸す', reading: 'かす', romaji: 'kasu', meaning: '借出 (I類動詞)' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導 (II類動詞)' },
      { word: '説明する', reading: 'せつめいする', romaji: 'setsumei suru', meaning: '說明 (III類動詞)' },
      { word: '案内する', reading: 'あんないする', romaji: 'annai suru', meaning: '導覽/帶路 (III類動詞)' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachō', meaning: '社長' },
      { word: '部長', reading: 'ぶちょう', romaji: 'buchō', meaning: '部長' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙 (I類動詞)' },
      { word: 'お茶', reading: 'おちゃ', romaji: 'ocha', meaning: '茶' },
      { word: '淹れる', reading: 'いれる', romaji: 'ireru', meaning: '泡(茶/咖啡) (II類動詞)' },
    ],
    quiz: [
      { question: '先生が説明して___ました。(老師為我說明)', options: ['いただきました', 'くださいました', 'さしあげました', 'くれました'], answer: 1 },
      { question: '「案内する」的意思是？', options: ['說明', '導覽/帶路', '修理', '請客'], answer: 1 },
      { question: '社長に教えて___ました。(請社長教我)', options: ['いただきました', 'くださいました', 'さしあげました', 'くれました'], answer: 0 },
      { question: '「淹れる」的讀音是？', options: ['いれる', 'あれる', 'のむ', 'わかす'], answer: 0 },
      { question: 'ていただく相當於哪一個基礎動詞的謙讓語？', options: ['てあげる', 'てくれる', 'てもらう', 'てみる'], answer: 2 },
    ]
  },

  // ---- 第 46 關：為了明確目標 (意志目的：～ために) ----
  {
    id: 'n4_ch46',
    level: 'N4',
    title: '為了明確目標 (～ために)',
    grammar: [
      {
        pattern: '動詞辭書形/名詞＋の ＋ ために',
        explanation: '表示有明確意志的目的。「為了(做)...」。前後主語必須一致。',
        examples: [
          { jp: '家{いえ}を買{か}うために、貯金{ちょきん}しています。', romaji: 'Ie o kau tame ni, chokin shite imasu.', zh: '為了買房子正在存錢。' },
          { jp: '家族{かぞく}のために、一生懸命{いっしょうけんめい}働{はたら}きます。', romaji: 'Kazoku no tame ni, isshōkenmei hatarakimasu.', zh: '為了家人，我拼命工作。' },
        ]
      }
    ],
    vocabulary: [
      { word: '家', reading: 'いえ', romaji: 'ie', meaning: '房子/家' },
      { word: '買う', reading: 'かう', romaji: 'kau', meaning: '買 (I類動詞)' },
      { word: '貯金する', reading: 'ちょきんする', romaji: 'chokin suru', meaning: '存錢 (III類動詞)' },
      { word: '家族', reading: 'かぞく', romaji: 'kazoku', meaning: '家人' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作 (I類動詞)' },
      { word: '健康', reading: 'けんこう', romaji: 'kenkō', meaning: '健康 (な形容詞)' },
      { word: '旅行', reading: 'りょこう', romaji: 'ryokō', meaning: '旅行' },
      { word: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: '準備' },
      { word: '目的', reading: 'もくてき', romaji: 'mokuteki', meaning: '目的' },
      { word: '痩せる', reading: 'やせる', romaji: 'yaseru', meaning: '變瘦 (II類動詞)' },
    ],
    quiz: [
      { question: '健康___ために、毎日運動します。', options: ['が', 'を', 'に', 'の'], answer: 3 },
      { question: '車を買う___、貯金しています。(為了)', options: ['ように', 'ために', 'ことに', 'ものに'], answer: 1 },
      { question: '「貯金」的意思是？', options: ['存款/存錢', '貸款', '花錢', '投資'], answer: 0 },
      { question: '「健康」的讀音是？', options: ['けんこう', 'げんき', 'けんきょう', 'げんごう'], answer: 0 },
      { question: '痩せる___、ダイエットをします。', options: ['ように', 'ために', 'ことに', 'ものに'], answer: 1 },
    ]
  },

  // ---- 第 47 關：看起來好像... (樣態直覺：～そうです) ----
  {
    id: 'n4_ch47',
    level: 'N4',
    title: '看起來好像... (樣態直覺)',
    grammar: [
      {
        pattern: '動詞ます形(去ます) / い形(去い) / な形 ＋ そうです',
        explanation: '根據視覺觀察所得的直覺判斷。「看起來好像(會)...」。',
        examples: [
          { jp: 'このケーキはおいしそうです。', romaji: 'Kono kēki wa oishisō desu.', zh: '這蛋糕看起來很好吃。' },
          { jp: '今{いま}にも雨{あめ}が降{ふ}りそうです。', romaji: 'Imanimo ame ga furisō desu.', zh: '看起來馬上就要下雨了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '美味しい', reading: 'おいしい', romaji: 'oishii', meaning: '好吃的 (い形容詞)' },
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: '雨' },
      { word: '降る', reading: 'ふる', romaji: 'furu', meaning: '降下 (I類動詞)' },
      { word: '今にも', reading: 'いまにも', romaji: 'imanimo', meaning: '眼看就要/馬上' },
      { word: '重い', reading: 'おもい', romaji: 'omoi', meaning: '重的 (い形容詞)' },
      { word: '軽い', reading: 'かるい', romaji: 'karui', meaning: '輕的 (い形容詞)' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的 (い形容詞)' },
      { word: '暇', reading: 'ひま', romaji: 'hima', meaning: '空閒的 (な形容詞)' },
      { word: '落ちる', reading: 'おちる', romaji: 'ochiru', meaning: '掉落 (II類動詞)' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '高/貴的 (い形容詞)' },
    ],
    quiz: [
      { question: 'この荷物は___そうです。(看起來很重)', options: ['重い', '重', '重く', '重くて'], answer: 1 },
      { question: '「今にも」的意思是？', options: ['現在', '馬上/眼看就要', '今天', '剛才'], answer: 1 },
      { question: 'ボタンが___そうです。(看起來快掉了)', options: ['落ち', '落ちる', '落ちて', '落ちた'], answer: 0 },
      { question: '「忙しい」的樣態接續是？', options: ['忙しいそう', '忙しそう', '忙しくそう', '忙しなそう'], answer: 1 },
      { question: '「暇」的讀音是？', options: ['ひま', 'やすみ', 'じかん', 'きゅうか'], answer: 0 },
    ]
  },

  // ---- 第 48 關：做得太超過了 (程度過頭：～すぎます) ----
  {
    id: 'n4_ch48',
    level: 'N4',
    title: '做得太超過了 (～すぎます)',
    grammar: [
      {
        pattern: '動詞ます形(去ます) / い形(去い) / な形 ＋ すぎます',
        explanation: '表示動作或狀態的程度超出了適當的範圍，帶有不好的語氣。「太過於...」。',
        examples: [
          { jp: '昨夜{ゆうべ}、お酒{さけ}を飲{の}みすぎました。', romaji: 'Yūbe, o-sake o nomisugimashita.', zh: '昨晚酒喝太多了。' },
          { jp: 'この問題{もんだい}は難{むずか}しすぎます。', romaji: 'Kono mondai wa muzukashisugimasu.', zh: '這個問題太難了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '昨夜', reading: 'ゆうべ', romaji: 'yūbe', meaning: '昨晚' },
      { word: 'お酒', reading: 'おさけ', romaji: 'osake', meaning: '酒' },
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝 (I類動詞)' },
      { word: '問題', reading: 'もんだい', romaji: 'mondai', meaning: '問題' },
      { word: '難しい', reading: 'むずかしい', romaji: 'muzukashii', meaning: '困難的 (い形容詞)' },
      { word: '大きい', reading: 'おおきい', romaji: 'ōkii', meaning: '大的 (い形容詞)' },
      { word: '小さい', reading: 'ちいさい', romaji: 'chiisai', meaning: '小的 (い形容詞)' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃 (II類動詞)' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '貴/高的 (い形容詞)' },
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜的 (い形容詞)' },
    ],
    quiz: [
      { question: '昨日、ご飯を食べ___ました。(吃太多)', options: ['すぎ', 'やすい', 'にくい', 'たい'], answer: 0 },
      { question: 'この服は___すぎます。(太大)', options: ['大きい', '大き', '大きく', '大きて'], answer: 1 },
      { question: '「難しい」的反義詞是？', options: ['易しい', '高い', '重い', '速い'], answer: 0 },
      { question: '値段が___すぎます。(太貴)', options: ['高い', '高', '高く', '高て'], answer: 1 },
      { question: '「昨夜」的常用讀音（表示昨晚）是？', options: ['さくや', 'ゆうべ', 'きのうのよる', '以上皆可'], answer: 3 },
    ]
  },

  // ---- 第 49 關：容易與困難 (～やすい/にくい) ----
  {
    id: 'n4_ch49',
    level: 'N4',
    title: '容易與困難 (～やすい/にくい)',
    grammar: [
      {
        pattern: '動詞ます形(去ます) ＋ やすい / にくい',
        explanation: '表示做某件事的難易度，或是某事物容易/不容易發生某種變化。「やすい」是容易，「にくい」是困難。接續後整個詞視為【い形容詞】變化。',
        examples: [
          { jp: 'この靴{くつ}は歩{ある}きやすいです。', romaji: 'Kono kutsu wa arukiyasui desu.', zh: '這雙鞋很好走。' },
          { jp: 'この薬{くすり}は苦{にが}くて飲{の}みにくいです。', romaji: 'Kono kusuri wa nigakute nominikui desu.', zh: '這藥很苦很難吃。' },
        ]
      }
    ],
    vocabulary: [
      { word: '使う', reading: 'つかう', romaji: 'tsukau', meaning: '使用 (I類動詞)' },
      { word: '壊れる', reading: 'こわれる', romaji: 'kowareru', meaning: '壞掉 (II類動詞)' },
      { word: '割れる', reading: 'われる', romaji: 'wareru', meaning: '破裂 (II類動詞)' },
      { word: '分かる', reading: 'わかる', romaji: 'wakaru', meaning: '明白/懂 (I類動詞)' },
      { word: '滑る', reading: 'すべる', romaji: 'suberu', meaning: '滑/溜 (I類動詞)' },
      { word: '歩く', reading: 'あるく', romaji: 'aruku', meaning: '走路 (I類動詞)' },
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝 (I類動詞)' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: '鞋子' },
      { word: 'ガラス', reading: 'がらす', romaji: 'garasu', meaning: '玻璃' },
    ],
    quiz: [
      { question: 'このペンは書き___。(很好寫)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 0 },
      { question: '「滑る」的意思是？', options: ['滑倒/打滑', '跌倒', '飛', '跳'], answer: 0 },
      { question: 'ガラスは割れ___。(容易破)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 0 },
      { question: '漢字は覚え___です。(很難記)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 1 },
      { question: '「割れる」的讀音是？', options: ['われる', 'こわれる', 'おれる', 'きれる'], answer: 0 },
    ]
  },

  // ---- 第 50 關：就在這一瞬間 (動作時間點：～ところです) ----
  {
    id: 'n4_ch50',
    level: 'N4',
    title: '就在這一瞬間 (～ところです)',
    grammar: [
      {
        pattern: '動詞辭書形/て形いる/た形 ＋ ところです',
        explanation: '表示動作正處於哪個階段。「辭書形+ところ」表正要開始，「て形いる+ところ」表正在進行，「た形+ところ」表剛結束。',
        examples: [
          { jp: '今{いま}からご飯{ごはん}を食{た}べるところです。', romaji: 'Ima kara gohan o taberu tokoro desu.', zh: '現在正準備要吃飯。' },
          { jp: 'たった今{いま}、バスが出発{しゅっぱつ}したところです。', romaji: 'Tattaima, basu ga shuppatsu shita tokoro desu.', zh: '公車剛剛才出發。' },
        ]
      }
    ],
    vocabulary: [
      { word: '今', reading: 'いま', romaji: 'ima', meaning: '現在' },
      { word: 'たった今', reading: 'たったいま', romaji: 'tattaima', meaning: '剛剛' },
      { word: '出発する', reading: 'しゅっぱつする', romaji: 'shuppatsu suru', meaning: '出發 (III類動詞)' },
      { word: '着く', reading: 'つく', romaji: 'tsuku', meaning: '抵達 (I類動詞)' },
      { word: '始まる', reading: 'はじまる', romaji: 'hajimaru', meaning: '開始 (I類動詞)' },
      { word: '終わる', reading: 'おわる', romaji: 'owaru', meaning: '結束 (I類動詞)' },
      { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: '會議' },
      { word: '調べる', reading: 'しらべる', romaji: 'shiraberu', meaning: '調查/查 (II類動詞)' },
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: '回去 (I類動詞)' },
      { word: '電話する', reading: 'でんわする', romaji: 'denwa suru', meaning: '打電話 (III類動詞)' },
    ],
    quiz: [
      { question: '今、調べて___ところです。(正在查)', options: ['いる', 'ある', 'みる', 'おく'], answer: 0 },
      { question: '「たった今」的意思是？', options: ['現在', '剛剛', '等一下', '明天'], answer: 1 },
      { question: '今から出かける___です。(正準備要出門)', options: ['ところ', 'ばかり', 'ため', 'よう'], answer: 0 },
      { question: '「出発」的讀音是？', options: ['しゅっぱつ', 'しゅばつ', 'しゅうぱつ', 'しゅうばつ'], answer: 0 },
      { question: 'ちょうど会議が終わっ___ところです。(剛結束)', options: ['た', 'て', 'る', 'ない'], answer: 0 },
    ]
  },

  // ---- 第 51 關：聽別人說的 (傳聞表現：～そうです) ----
  {
    id: 'n4_ch51',
    level: 'N4',
    title: '聽別人說的 (傳聞表現)',
    grammar: [
      {
        pattern: '普通形 ＋ そうです',
        explanation: '表示從某處聽來的情報。「聽說...」。動詞、い形容詞用普通形，名詞與な形容詞用「だ」。',
        examples: [
          { jp: '天気予報{てんきよほう}によると、明日{あした}は雨{あめ}だそうです。', romaji: 'Tenkiyohō ni yoru to, ashita wa ame da sō desu.', zh: '根據天氣預報，聽說明天會下雨。' },
          { jp: '山田{やまだ}さんは来月{らいげつ}結婚{けっこん}するそうです。', romaji: 'Yamada-san wa raigetsu kekkon suru sō desu.', zh: '聽說山田先生下個月要結婚。' },
        ]
      }
    ],
    vocabulary: [
      { word: '天気予報', reading: 'てんきよほう', romaji: 'tenkiyohō', meaning: '天氣預報' },
      { word: 'よると', reading: 'よると', romaji: 'yoru to', meaning: '根據(消息來源)' },
      { word: '明日', reading: 'あした', romaji: 'ashita', meaning: '明天' },
      { word: '来月', reading: 'らいげつ', romaji: 'raigetsu', meaning: '下個月' },
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚 (III類動詞)' },
      { word: '辞める', reading: 'やめる', romaji: 'yameru', meaning: '辭職/放棄 (II類動詞)' },
      { word: '入院する', reading: 'にゅういんする', romaji: 'nyūin suru', meaning: '住院 (III類動詞)' },
      { word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: '嚴格的 (い形容詞)' },
      { word: '有名', reading: 'ゆうめい', romaji: 'yūmei', meaning: '有名的 (な形容詞)' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的 (な形容詞)' },
    ],
    quiz: [
      { question: '天気予報に___、明日は晴れだそうです。(根據)', options: ['ついて', 'よると', 'しては', 'とって'], answer: 1 },
      { question: '山田さんは会社を辞める___そうです。(聽說)', options: ['だ', 'な', 'の', '（不加）'], answer: 3 },
      { question: '「厳しい」的意思是？', options: ['溫柔的', '嚴格的', '寂寞的', '開心的'], answer: 1 },
      { question: '明日は雨___そうです。(聽說)', options: ['だ', 'な', 'の', '（不加）'], answer: 0 },
      { question: '「天気予報」的讀音是？', options: ['てんきよほう', 'てんきよぼう', 'でんきよほう', 'でんきよぼう'], answer: 0 },
    ]
  },

  // ---- 第 52 關：我讓你去做 (使役形：～せます / ～させます) ----
  {
    id: 'n4_ch52',
    level: 'N4',
    title: '我讓你去做 (使役形)',
    grammar: [
      {
        pattern: '動詞使役形',
        explanation: '表示讓某人做某事，或強迫某人做某事。I類動詞字尾改あ段加せる（字尾う改わ）；II類動詞去ます加させる；III類動詞：する變させる，来る變こさせる。',
        examples: [
          { jp: '先生{せんせい}は学生{がくせい}に本{ほん}を読{よ}ませました。', romaji: 'Sensei wa gakusei ni hon o yomasemashita.', zh: '老師讓學生讀書。' },
          { jp: '母{はは}は子供{こども}に野菜{やさい}を食{た}べさせます。', romaji: 'Haha wa kodomo ni yasai o tabesasemasu.', zh: '媽媽讓小孩吃蔬菜。' },
        ]
      }
    ],
    vocabulary: [
      { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: '學生' },
      { word: '子供', reading: 'こども', romaji: 'kodomo', meaning: '小孩' },
      { word: '野菜', reading: 'やさい', romaji: 'yasai', meaning: '蔬菜' },
      { word: '洗う', reading: 'あらう', romaji: 'arau', meaning: '洗 (I類動詞)' },
      { word: '待つ', reading: 'まつ', romaji: 'matsu', meaning: '等待 (I類動詞)' },
      { word: '運ぶ', reading: 'はこぶ', romaji: 'hakobu', meaning: '搬運 (I類動詞)' },
      { word: '参加する', reading: 'さんかする', romaji: 'sanka suru', meaning: '參加 (III類動詞)' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息 (I類動詞)' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙 (I類動詞)' },
      { word: '部長', reading: 'ぶちょう', romaji: 'buchō', meaning: '部長' },
    ],
    quiz: [
      { question: '「食べる」的使役形是？', options: ['食べさせる', '食べられる', '食べれる', '食べせる'], answer: 0 },
      { question: '学生に本を読___。(讓學生讀)', options: ['ませた', 'まれた', 'めれた', 'んだ'], answer: 0 },
      { question: '「運ぶ」的意思是？', options: ['運動', '駕駛', '搬運', '丟棄'], answer: 2 },
      { question: '私にやら___ください。(請讓我做)', options: ['れて', 'せて', 'して', 'めて'], answer: 1 },
      { question: '「待つ」的使役形是？', options: ['待たせる', '待たれる', '待てる', '待つせる'], answer: 0 },
    ]
  },

  // ---- 第 53 關：對您的最高敬意 (尊敬語與謙讓語) ----
  {
    id: 'n4_ch53',
    level: 'N4',
    title: '對您的最高敬意 (敬語統整)',
    grammar: [
      {
        pattern: '尊敬語 (お＋動詞ます形＋になる / 特殊尊敬語)',
        explanation: '用來抬高對方的動作，表示敬意。特殊尊敬語如：いらっしゃる(去/來/在)、召し上がる(吃/喝)、おっしゃる(說)。',
        examples: [
          { jp: '社長{しゃちょう}はお帰{かえ}りになりました。', romaji: 'Shachō wa o-kaeri ni narimashita.', zh: '社長已經回去了。' },
          { jp: '先生は何{なに}を召{め}し上{あ}がりますか。', romaji: 'Sensei wa nani o meshiagarimasu ka.', zh: '老師您要吃/喝什麼？' },
        ]
      },
      {
        pattern: '謙讓語 (お＋動詞ます形＋する / 特殊謙讓語)',
        explanation: '藉由降低自己的動作來間接抬高對方。主語必定是自己。特殊謙讓語如：参る(去/來)、申す(說)、拝見する(看)。',
        examples: [
          { jp: '私{わたし}が荷物{にもつ}をお持{も}ちします。', romaji: 'Watashi ga nimotsu o o-mochi shimasu.', zh: '我來幫您拿行李。' },
          { jp: '明日{あした}、３時{さんじ}に伺{うかが}います。', romaji: 'Ashita, san-ji ni ukagaimasu.', zh: '明天三點我會去拜訪您。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'いらっしゃる', reading: 'いらっしゃる', romaji: 'irassharu', meaning: '在/去/來(尊敬語) (I類動詞)' },
      { word: '召し上がる', reading: 'めしあがる', romaji: 'meshiagaru', meaning: '吃/喝(尊敬語) (I類動詞)' },
      { word: 'おっしゃる', reading: 'おっしゃる', romaji: 'ossharu', meaning: '說(尊敬語) (I類動詞)' },
      { word: '参る', reading: 'まいる', romaji: 'mairu', meaning: '去/來(謙讓語) (I類動詞)' },
      { word: '申す', reading: 'もうす', romaji: 'mōsu', meaning: '說(謙讓語) (I類動詞)' },
      { word: '拝見する', reading: 'はいけんする', romaji: 'haiken suru', meaning: '看(謙讓語) (III類動詞)' },
      { word: '伺う', reading: 'うかがう', romaji: 'ukagau', meaning: '問/聽/拜訪(謙讓語) (I類動詞)' },
      { word: 'いただく', reading: 'いただく', romaji: 'itadaku', meaning: '吃/喝/得到(謙讓語) (I類動詞)' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachō', meaning: '社長' },
      { word: '荷物', reading: 'にもつ', romaji: 'nimotsu', meaning: '行李' },
    ],
    quiz: [
      { question: '「食べる」的尊敬語是？', options: ['いただく', '召し上がる', 'おっしゃる', 'なさる'], answer: 1 },
      { question: '「行く・来る」的謙讓語是？', options: ['いらっしゃる', '参る', '伺う', '申す'], answer: 1 },
      { question: '「おっしゃる」的意思是？', options: ['吃/喝', '看', '做', '說(尊敬)'], answer: 3 },
      { question: '私が荷物をお持ち___。', options: ['します', 'なります', 'いらっしゃいます', 'なさります'], answer: 0 },
      { question: '「伺う」的意思包含？', options: ['問/聽/拜訪(謙讓)', '吃/喝(尊敬)', '說(尊敬)', '做(謙讓)'], answer: 0 },
    ]
  },
];
