// 章節資料 - N5~N1 各等級
export const levelConfig = {
  N5: { color: 'n5', label: '入門', description: '基礎文法、助詞與日常表達 (17章)' },
  N4: { color: 'n4', label: '初級', description: '日常生活與簡單對話 (20章)' },
  N3: { color: 'n3', label: '中級', description: '社交與表達意見 (20章)' },
  N2: { color: 'n2', label: '中上級', description: '新聞閱讀與正式場合' },
  N1: { color: 'n1', label: '上級', description: '學術與商務日語' },
}

export const chapters = [
  // ===================== N5 (15 章完整版) =====================

  // ---- 第1章：自我介紹與打招呼 ----
  {
    id: 'n5_ch1',
    level: 'N5',
    title: '自我介紹與打招呼',
    grammar: [
      {
        pattern: 'AはBです',
        explanation: '表示「A是B」，最基本的肯定句型。「は」為主題助詞，讀作「wa」。',
        examples: [
          { jp: '私{わたし}は学生{がくせい}です。', romaji: 'Watashi wa gakusei desu.', zh: '我是學生。' },
          { jp: '田中{たなか}さんは先生{せんせい}です。', romaji: 'Tanaka-san wa sensei desu.', zh: '田中先生是老師。' },
          { jp: 'これは本{ほん}です。', romaji: 'Kore wa hon desu.', zh: '這是書。' },
        ]
      },
      {
        pattern: 'AはBじゃないです',
        explanation: '「AはBです」的否定形式，表示「A不是B」。口語中也可說「じゃありません」。',
        examples: [
          { jp: '私は先生じゃないです。', romaji: 'Watashi wa sensei ja nai desu.', zh: '我不是老師。' },
          { jp: 'これはペンじゃないです。', romaji: 'Kore wa pen ja nai desu.', zh: '這不是筆。' },
        ]
      }
    ],
    vocabulary: [
      { word: '私', reading: 'わたし', romaji: 'watashi', meaning: '我' },
      { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: '學生' },
      { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: '老師' },
      { word: '名前', reading: 'なまえ', romaji: 'namae', meaning: '名字' },
      { word: 'はじめまして', reading: 'はじめまして', romaji: 'hajimemashite', meaning: '初次見面' },
      { word: 'よろしく', reading: 'よろしく', romaji: 'yoroshiku', meaning: '請多指教' },
      { word: '会社員', reading: 'かいしゃいん', romaji: 'kaishain', meaning: '公司職員' },
      { word: '日本人', reading: 'にほんじん', romaji: 'nihonjin', meaning: '日本人' },
    ],
    quiz: [
      { question: '私___学生です。', options: ['が', 'は', 'を', 'に'], answer: 1 },
      { question: 'これは本___。', options: ['だ', 'です', 'ます', 'する'], answer: 1 },
      { question: '田中さん___先生です。', options: ['を', 'に', 'は', 'で'], answer: 2 },
      { question: '私は先生___ないです。', options: ['じゃ', 'では', 'が', 'を'], answer: 0 },
      { question: '「はじめまして」的意思是？', options: ['再見', '謝謝', '初次見面', '早安'], answer: 2 },
      { question: '「学生」的讀音是？', options: ['がくせい', 'せいと', 'がくもん', 'せいがく'], answer: 0 },
      { question: 'A___Bです。(A是B)', options: ['を', 'は', 'が', 'で'], answer: 1 },
      { question: '「先生」的意思是？', options: ['學生', '老師', '醫生', '同學'], answer: 1 },
      { question: '「名前」的意思是？', options: ['有名', '名片', '名字', '名人'], answer: 2 },
      { question: 'これ___ペンじゃないです。', options: ['が', 'を', 'に', 'は'], answer: 3 },
    ]
  },

  // ---- 第2章：數字與時間 ----
  {
    id: 'n5_ch2',
    level: 'N5',
    title: '數字與時間',
    grammar: [
      {
        pattern: '〜時〜分',
        explanation: '表示時間。「時（じ）」= 點鐘，「分（ふん/ぷん）」= 分鐘。',
        examples: [
          { jp: '今、三時です。', romaji: 'Ima, san-ji desu.', zh: '現在是三點。' },
          { jp: '会議は十時半からです。', romaji: 'Kaigi wa juu-ji han kara desu.', zh: '會議從十點半開始。' },
        ]
      },
      {
        pattern: '〜から〜まで',
        explanation: '表示起點到終點，「從A到B」。可用於時間或地點。',
        examples: [
          { jp: '九時から五時まで働きます。', romaji: 'Ku-ji kara go-ji made hatarakimasu.', zh: '從九點工作到五點。' },
          { jp: '東京から大阪まで三時間です。', romaji: 'Tōkyō kara Ōsaka made san-jikan desu.', zh: '從東京到大阪要三小時。' },
        ]
      }
    ],
    vocabulary: [
      { word: '一', reading: 'いち', romaji: 'ichi', meaning: '一' },
      { word: '二', reading: 'に', romaji: 'ni', meaning: '二' },
      { word: '三', reading: 'さん', romaji: 'san', meaning: '三' },
      { word: '時間', reading: 'じかん', romaji: 'jikan', meaning: '時間' },
      { word: '今', reading: 'いま', romaji: 'ima', meaning: '現在' },
      { word: '毎日', reading: 'まいにち', romaji: 'mainichi', meaning: '每天' },
      { word: '午前', reading: 'ごぜん', romaji: 'gozen', meaning: '上午' },
      { word: '午後', reading: 'ごご', romaji: 'gogo', meaning: '下午' },
    ],
    quiz: [
      { question: '九時___五時まで働きます。', options: ['まで', 'から', 'に', 'で'], answer: 1 },
      { question: '今、何時___か。', options: ['が', 'を', 'です', 'は'], answer: 2 },
      { question: '「毎日」的意思是？', options: ['每週', '每月', '每天', '每年'], answer: 2 },
      { question: '三時___です。', options: ['半', '半分', '中', '間'], answer: 0 },
      { question: '「午前」指的是？', options: ['下午', '上午', '晚上', '中午'], answer: 1 },
      { question: '東京___大阪まで三時間です。', options: ['に', 'で', 'から', 'を'], answer: 2 },
      { question: '「時間」的讀音是？', options: ['じかん', 'とき', 'じき', 'ときかん'], answer: 0 },
      { question: '会議は十時___からです。', options: ['前', '半', '後', '中'], answer: 1 },
      { question: '「いま」的漢字是？', options: ['間', '今', '時', '前'], answer: 1 },
      { question: '九時から五時___働きます。', options: ['から', 'に', 'で', 'まで'], answer: 3 },
    ]
  },

  // ---- 第3章：場所與移動 ----
  {
    id: 'n5_ch3',
    level: 'N5',
    title: '場所與移動',
    grammar: [
      {
        pattern: '〜に行きます / 来ます',
        explanation: '「に」表示移動的目的地。「行きます」= 去，「来ます」= 來。',
        examples: [
          { jp: '学校に行きます。', romaji: 'Gakkō ni ikimasu.', zh: '去學校。' },
          { jp: '日本に来ました。', romaji: 'Nihon ni kimashita.', zh: '來到了日本。' },
        ]
      },
      {
        pattern: '〜で〜ます',
        explanation: '「で」表示動作發生的場所，或使用的工具/手段。',
        examples: [
          { jp: '図書館で勉強します。', romaji: 'Toshokan de benkyō shimasu.', zh: '在圖書館唸書。' },
          { jp: 'バスで行きます。', romaji: 'Basu de ikimasu.', zh: '搭公車去。' },
        ]
      }
    ],
    vocabulary: [
      { word: '学校', reading: 'がっこう', romaji: 'gakkō', meaning: '學校' },
      { word: '駅', reading: 'えき', romaji: 'eki', meaning: '車站' },
      { word: '図書館', reading: 'としょかん', romaji: 'toshokan', meaning: '圖書館' },
      { word: '病院', reading: 'びょういん', romaji: 'byōin', meaning: '醫院' },
      { word: '銀行', reading: 'ぎんこう', romaji: 'ginkō', meaning: '銀行' },
      { word: '行く', reading: 'いく', romaji: 'iku', meaning: '去' },
      { word: '来る', reading: 'くる', romaji: 'kuru', meaning: '來' },
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: '回去' },
    ],
    quiz: [
      { question: '学校___行きます。', options: ['を', 'で', 'に', 'が'], answer: 2 },
      { question: '図書館___勉強します。', options: ['に', 'を', 'で', 'が'], answer: 2 },
      { question: '「駅」的意思是？', options: ['車站', '機場', '港口', '停車場'], answer: 0 },
      { question: 'バス___行きます。', options: ['に', 'を', 'が', 'で'], answer: 3 },
      { question: '「帰る」的意思是？', options: ['去', '來', '回去', '走'], answer: 2 },
      { question: '日本___来ました。', options: ['で', 'に', 'を', 'が'], answer: 1 },
      { question: '「病院」的讀音是？', options: ['びょういん', 'びよういん', 'びょいん', 'びょうえん'], answer: 0 },
      { question: '「銀行」的意思是？', options: ['郵局', '銀行', '學校', '商店'], answer: 1 },
      { question: '「行く」的ます形是？', options: ['行きます', '行ます', '行います', '行くます'], answer: 0 },
      { question: '___で勉強します。(在圖書館)', options: ['学校', '駅', '図書館', '病院'], answer: 2 },
    ]
  },

  // ---- 第4章：形容詞基礎 ----
  {
    id: 'n5_ch4',
    level: 'N5',
    title: '形容詞基礎',
    grammar: [
      {
        pattern: 'い形容詞 + です',
        explanation: 'い形容詞直接加「です」表示禮貌，否定時「い→くないです」。',
        examples: [
          { jp: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', zh: '這本書很有趣。' },
          { jp: '今日は暑くないです。', romaji: 'Kyō wa atsuku nai desu.', zh: '今天不熱。' },
        ]
      },
      {
        pattern: 'な形容詞 + です',
        explanation: 'な形容詞加「です」，否定時加「じゃないです」。',
        examples: [
          { jp: 'この部屋は静かです。', romaji: 'Kono heya wa shizuka desu.', zh: '這個房間很安靜。' },
          { jp: 'あの人は親切じゃないです。', romaji: 'Ano hito wa shinsetsu ja nai desu.', zh: '那個人不親切。' },
        ]
      }
    ],
    vocabulary: [
      { word: '大きい', reading: 'おおきい', romaji: 'ōkii', meaning: '大的' },
      { word: '小さい', reading: 'ちいさい', romaji: 'chiisai', meaning: '小的' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '高的/貴的' },
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜的' },
      { word: '面白い', reading: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的' },
      { word: '静か', reading: 'しずか', romaji: 'shizuka', meaning: '安靜的' },
      { word: '元気', reading: 'げんき', romaji: 'genki', meaning: '有精神的' },
      { word: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaning: '親切的' },
    ],
    quiz: [
      { question: 'この本は面白___です。', options: ['い', 'な', 'く', 'に'], answer: 0 },
      { question: '今日は暑___ないです。', options: ['い', 'く', 'な', 'に'], answer: 1 },
      { question: 'この部屋は静か___。', options: ['い', 'です', 'ない', 'く'], answer: 1 },
      { question: '「大きい」的意思是？', options: ['小的', '大的', '高的', '長的'], answer: 1 },
      { question: '「安い」的反義詞是？', options: ['大きい', '小さい', '高い', '低い'], answer: 2 },
      { question: 'あの人は親切___ないです。', options: ['く', 'じゃ', 'い', 'が'], answer: 1 },
      { question: '「元気」是哪種形容詞？', options: ['い形容詞', 'な形容詞', '動詞', '名詞'], answer: 1 },
      { question: '「面白い」的意思是？', options: ['無聊的', '有趣的', '困難的', '簡單的'], answer: 1 },
      { question: '「小さい」的讀音是？', options: ['こさい', 'しょうさい', 'ちいさい', 'ちさい'], answer: 2 },
      { question: '今日は___です。(今天很熱)', options: ['暑い', '暑く', '暑さ', '暑'], answer: 0 },
    ]
  },

  // ---- 第5章：動詞基礎與日常動作 ----
  {
    id: 'n5_ch5',
    level: 'N5',
    title: '動詞基礎與日常動作',
    grammar: [
      {
        pattern: '〜を〜ます',
        explanation: '「を」標示動作的受詞（對象），搭配動詞ます形使用。',
        examples: [
          { jp: 'ご飯を食べます。', romaji: 'Gohan o tabemasu.', zh: '吃飯。' },
          { jp: '水を飲みます。', romaji: 'Mizu o nomimasu.', zh: '喝水。' },
        ]
      },
      {
        pattern: '〜ませんか',
        explanation: '邀請對方一起做某事的表達方式。「要不要一起...?」',
        examples: [
          { jp: '一緒に食べませんか。', romaji: 'Issho ni tabemasen ka.', zh: '要不要一起吃？' },
          { jp: '映画を見ませんか。', romaji: 'Eiga o mimasen ka.', zh: '要不要看電影？' },
        ]
      }
    ],
    vocabulary: [
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃' },
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝' },
      { word: '見る', reading: 'みる', romaji: 'miru', meaning: '看' },
      { word: '聞く', reading: 'きく', romaji: 'kiku', meaning: '聽' },
      { word: '読む', reading: 'よむ', romaji: 'yomu', meaning: '讀' },
      { word: '書く', reading: 'かく', romaji: 'kaku', meaning: '寫' },
      { word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: '說' },
      { word: '買う', reading: 'かう', romaji: 'kau', meaning: '買' },
    ],
    quiz: [
      { question: 'ご飯___食べます。', options: ['が', 'に', 'を', 'で'], answer: 2 },
      { question: '映画を見___か。', options: ['ます', 'ません', 'ました', 'ない'], answer: 1 },
      { question: '「飲む」的意思是？', options: ['吃', '喝', '看', '聽'], answer: 1 },
      { question: '「読む」的ます形是？', options: ['読みます', '読ます', '読います', '読ります'], answer: 0 },
      { question: '一緒___食べませんか。', options: ['で', 'を', 'に', 'が'], answer: 2 },
      { question: '「書く」的意思是？', options: ['讀', '看', '寫', '聽'], answer: 2 },
      { question: '水___飲みます。', options: ['が', 'を', 'に', 'で'], answer: 1 },
      { question: '「話す」的意思是？', options: ['聽', '讀', '寫', '說'], answer: 3 },
      { question: '「買う」的ます形是？', options: ['買ます', '買います', '買うます', '買りす'], answer: 1 },
      { question: '「食べる」的意思是？', options: ['喝', '看', '吃', '聽'], answer: 2 },
    ]
  },

  // ---- 第6章：指示代名詞 ----
  {
    id: 'n5_ch6',
    level: 'N5',
    title: '指示代名詞（これ・それ・あれ）',
    grammar: [
      {
        pattern: 'これ / それ / あれ',
        explanation: '指示代名詞。これ＝這個（近說話者）、それ＝那個（近聽話者）、あれ＝那個（遠離雙方）。',
        examples: [
          { jp: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', zh: '這是什麼？' },
          { jp: 'それは私のかばんです。', romaji: 'Sore wa watashi no kaban desu.', zh: '那是我的包包。' },
          { jp: 'あれは富士山です。', romaji: 'Are wa Fuji-san desu.', zh: '那是富士山。' },
        ]
      },
      {
        pattern: 'この / その / あの + 名詞',
        explanation: '連體詞，直接修飾名詞。この＝這個〜、その＝那個〜、あの＝那個〜。',
        examples: [
          { jp: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', zh: '這本書很有趣。' },
          { jp: 'その人は誰ですか。', romaji: 'Sono hito wa dare desu ka.', zh: '那個人是誰？' },
          { jp: 'あの建物は何ですか。', romaji: 'Ano tatemono wa nan desu ka.', zh: '那棟建築是什麼？' },
        ]
      }
    ],
    vocabulary: [
      { word: 'これ', reading: 'これ', romaji: 'kore', meaning: '這個' },
      { word: 'それ', reading: 'それ', romaji: 'sore', meaning: '那個(近你)' },
      { word: 'あれ', reading: 'あれ', romaji: 'are', meaning: '那個(遠)' },
      { word: '何', reading: 'なに/なん', romaji: 'nani/nan', meaning: '什麼' },
      { word: '誰', reading: 'だれ', romaji: 'dare', meaning: '誰' },
      { word: 'かばん', reading: 'かばん', romaji: 'kaban', meaning: '包包' },
      { word: '傘', reading: 'かさ', romaji: 'kasa', meaning: '雨傘' },
      { word: '建物', reading: 'たてもの', romaji: 'tatemono', meaning: '建築物' },
    ],
    quiz: [
      { question: '___は何ですか。(手邊的東西)', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 0 },
      { question: '___本は面白いです。(這本)', options: ['これ', 'この', 'それ', 'その'], answer: 1 },
      { question: '___は富士山です。(遠方)', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 2 },
      { question: '___人は誰ですか。(在你旁邊)', options: ['この', 'その', 'あの', 'どの'], answer: 1 },
      { question: '「何」的讀音是？', options: ['なに', 'なん', 'なに/なん', '以上皆可'], answer: 3 },
      { question: '「誰」的意思是？', options: ['什麼', '哪裡', '誰', '何時'], answer: 2 },
      { question: '___は私のかばんです。(在你手上)', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 1 },
      { question: '「傘」的讀音是？', options: ['かぜ', 'かさ', 'かた', 'かわ'], answer: 1 },
      { question: '「建物」的意思是？', options: ['道路', '橋', '建築物', '公園'], answer: 2 },
      { question: '___建物は何ですか。(遠方)', options: ['この', 'その', 'あの', 'どの'], answer: 2 },
    ]
  },

  // ---- 第7章：助詞の・も・と ----
  {
    id: 'n5_ch7',
    level: 'N5',
    title: '助詞入門（の・も・と）',
    grammar: [
      {
        pattern: 'AのB',
        explanation: '「の」表示所有、所屬或修飾關係。「A的B」。',
        examples: [
          { jp: '私の本です。', romaji: 'Watashi no hon desu.', zh: '是我的書。' },
          { jp: '日本語の先生です。', romaji: 'Nihongo no sensei desu.', zh: '是日語的老師。' },
          { jp: '大学の学生です。', romaji: 'Daigaku no gakusei desu.', zh: '是大學的學生。' },
        ]
      },
      {
        pattern: '〜も',
        explanation: '「も」表示「也」，替換掉「は」或「が」。',
        examples: [
          { jp: '私も学生です。', romaji: 'Watashi mo gakusei desu.', zh: '我也是學生。' },
          { jp: 'これも美味しいです。', romaji: 'Kore mo oishii desu.', zh: '這個也好吃。' },
        ]
      },
      {
        pattern: 'AとB',
        explanation: '「と」表示「和」，連接兩個名詞，或表示「跟〜一起」。',
        examples: [
          { jp: 'パンとコーヒーを頼みます。', romaji: 'Pan to kōhī o tanomimasu.', zh: '點麵包和咖啡。' },
          { jp: '友達と映画を見ます。', romaji: 'Tomodachi to eiga o mimasu.', zh: '和朋友看電影。' },
        ]
      }
    ],
    vocabulary: [
      { word: '友達', reading: 'ともだち', romaji: 'tomodachi', meaning: '朋友' },
      { word: '家族', reading: 'かぞく', romaji: 'kazoku', meaning: '家人' },
      { word: '大学', reading: 'だいがく', romaji: 'daigaku', meaning: '大學' },
      { word: '日本語', reading: 'にほんご', romaji: 'nihongo', meaning: '日語' },
      { word: '英語', reading: 'えいご', romaji: 'eigo', meaning: '英語' },
      { word: '美味しい', reading: 'おいしい', romaji: 'oishii', meaning: '好吃的' },
      { word: 'パン', reading: 'パン', romaji: 'pan', meaning: '麵包' },
      { word: 'コーヒー', reading: 'コーヒー', romaji: 'kōhī', meaning: '咖啡' },
    ],
    quiz: [
      { question: '私___本です。', options: ['は', 'の', 'を', 'が'], answer: 1 },
      { question: '私___学生です。(也)', options: ['は', 'が', 'も', 'の'], answer: 2 },
      { question: 'パン___コーヒーを頼みます。', options: ['や', 'と', 'も', 'の'], answer: 1 },
      { question: '日本語___先生です。', options: ['が', 'を', 'の', 'に'], answer: 2 },
      { question: '友達___映画を見ます。', options: ['に', 'で', 'と', 'を'], answer: 2 },
      { question: '「友達」的意思是？', options: ['家人', '同事', '朋友', '鄰居'], answer: 2 },
      { question: 'これ___美味しいです。(也)', options: ['は', 'が', 'を', 'も'], answer: 3 },
      { question: '「家族」的讀音是？', options: ['かぞく', 'かずく', 'いえぞく', 'かそく'], answer: 0 },
      { question: '大学___学生です。(大學的)', options: ['が', 'の', 'と', 'に'], answer: 1 },
      { question: '「英語」的意思是？', options: ['日語', '英語', '中文', '韓語'], answer: 1 },
    ]
  },

  // ---- 第8章：存在表現 ----
  {
    id: 'n5_ch8',
    level: 'N5',
    title: '存在表現（ある・いる）',
    grammar: [
      {
        pattern: '〜に〜があります',
        explanation: '表示無生命物體（東西）存在於某處。「某處有某物」。',
        examples: [
          { jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', zh: '桌上有書。' },
          { jp: 'コンビニの隣に銀行があります。', romaji: 'Konbini no tonari ni ginkō ga arimasu.', zh: '便利商店旁邊有銀行。' },
        ]
      },
      {
        pattern: '〜に〜がいます',
        explanation: '表示有生命體（人、動物）存在於某處。「某處有某人/動物」。',
        examples: [
          { jp: '公園に子供がいます。', romaji: 'Kōen ni kodomo ga imasu.', zh: '公園裡有小孩。' },
          { jp: '部屋に猫がいます。', romaji: 'Heya ni neko ga imasu.', zh: '房間裡有貓。' },
        ]
      }
    ],
    vocabulary: [
      { word: '机', reading: 'つくえ', romaji: 'tsukue', meaning: '桌子' },
      { word: '上', reading: 'うえ', romaji: 'ue', meaning: '上面' },
      { word: '下', reading: 'した', romaji: 'shita', meaning: '下面' },
      { word: '中', reading: 'なか', romaji: 'naka', meaning: '裡面' },
      { word: '隣', reading: 'となり', romaji: 'tonari', meaning: '旁邊' },
      { word: '公園', reading: 'こうえん', romaji: 'kōen', meaning: '公園' },
      { word: '猫', reading: 'ねこ', romaji: 'neko', meaning: '貓' },
      { word: '犬', reading: 'いぬ', romaji: 'inu', meaning: '狗' },
    ],
    quiz: [
      { question: '机の上に本が___。(有書)', options: ['います', 'あります', 'します', 'きます'], answer: 1 },
      { question: '公園に子供が___。(有小孩)', options: ['あります', 'います', 'します', 'きます'], answer: 1 },
      { question: '「猫」用哪個存在動詞？', options: ['あります', 'います', '兩者皆可', '都不行'], answer: 1 },
      { question: '机の___に本があります。(上面)', options: ['した', 'なか', 'うえ', 'となり'], answer: 2 },
      { question: '「犬」的讀音是？', options: ['ねこ', 'いぬ', 'とり', 'うま'], answer: 1 },
      { question: 'コンビニの___に銀行があります。(旁邊)', options: ['うえ', 'した', 'なか', 'となり'], answer: 3 },
      { question: '部屋___猫がいます。', options: ['で', 'に', 'を', 'が'], answer: 1 },
      { question: '「公園」的讀音是？', options: ['こうえん', 'こうえい', 'こえん', 'くうえん'], answer: 0 },
      { question: '「本」用哪個存在動詞？', options: ['います', 'あります', '兩者皆可', '都不行'], answer: 1 },
      { question: '椅子の___にかばんがあります。(下面)', options: ['うえ', 'した', 'なか', 'となり'], answer: 1 },
    ]
  },

  // ---- 第9章：好惡與能力 ----
  {
    id: 'n5_ch9',
    level: 'N5',
    title: '好惡與能力表達',
    grammar: [
      {
        pattern: '〜が好きです / 嫌いです',
        explanation: '表示喜歡或討厭某事物。注意主詞用「は」，對象用「が」。',
        examples: [
          { jp: '私は音楽が好きです。', romaji: 'Watashi wa ongaku ga suki desu.', zh: '我喜歡音樂。' },
          { jp: '野菜が嫌いです。', romaji: 'Yasai ga kirai desu.', zh: '討厭蔬菜。' },
          { jp: '日本料理がとても好きです。', romaji: 'Nihon ryōri ga totemo suki desu.', zh: '非常喜歡日本料理。' },
        ]
      },
      {
        pattern: '〜が上手です / 下手です',
        explanation: '表示擅長或不擅長某事物。「上手」=擅長，「下手」=不擅長。',
        examples: [
          { jp: '彼は料理が上手です。', romaji: 'Kare wa ryōri ga jōzu desu.', zh: '他很擅長料理。' },
          { jp: '私は歌が下手です。', romaji: 'Watashi wa uta ga heta desu.', zh: '我唱歌不好。' },
        ]
      }
    ],
    vocabulary: [
      { word: '好き', reading: 'すき', romaji: 'suki', meaning: '喜歡' },
      { word: '嫌い', reading: 'きらい', romaji: 'kirai', meaning: '討厭' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: '不擅長' },
      { word: '音楽', reading: 'おんがく', romaji: 'ongaku', meaning: '音樂' },
      { word: '料理', reading: 'りょうり', romaji: 'ryōri', meaning: '料理' },
      { word: '歌', reading: 'うた', romaji: 'uta', meaning: '歌曲' },
      { word: '野菜', reading: 'やさい', romaji: 'yasai', meaning: '蔬菜' },
    ],
    quiz: [
      { question: '私は音楽___好きです。', options: ['は', 'を', 'が', 'に'], answer: 2 },
      { question: '彼は料理が___です。(擅長)', options: ['好き', '上手', '嫌い', '下手'], answer: 1 },
      { question: '「嫌い」的意思是？', options: ['喜歡', '擅長', '討厭', '不擅長'], answer: 2 },
      { question: '野菜___嫌いです。', options: ['は', 'を', 'が', 'に'], answer: 2 },
      { question: '「上手」的反義詞是？', options: ['好き', '嫌い', '上', '下手'], answer: 3 },
      { question: '「音楽」的讀音是？', options: ['おんがく', 'おんらく', 'いんがく', 'おとがく'], answer: 0 },
      { question: '私は歌が___です。(不擅長)', options: ['上手', '好き', '下手', '嫌い'], answer: 2 },
      { question: '日本料理___とても好きです。', options: ['を', 'が', 'は', 'に'], answer: 1 },
      { question: '「野菜」的意思是？', options: ['水果', '蔬菜', '肉類', '飲料'], answer: 1 },
      { question: '「料理」的讀音是？', options: ['りょうり', 'りょり', 'りょうい', 'りょうし'], answer: 0 },
    ]
  },

  // ---- 第10章：願望與邀約 ----
  {
    id: 'n5_ch10',
    level: 'N5',
    title: '願望與邀約',
    grammar: [
      {
        pattern: '〜たいです',
        explanation: '表示說話者想要做某事。「想要...」。動詞ます形去掉「ます」加「たい」。',
        examples: [
          { jp: '日本に行きたいです。', romaji: 'Nihon ni ikitai desu.', zh: '想去日本。' },
          { jp: '寿司を食べたいです。', romaji: 'Sushi o tabetai desu.', zh: '想吃壽司。' },
          { jp: '何も飲みたくないです。', romaji: 'Nani mo nomitakunai desu.', zh: '什麼都不想喝。' },
        ]
      },
      {
        pattern: '〜ましょう',
        explanation: '表示邀請或提議。「一起...吧！」。',
        examples: [
          { jp: '一緒に行きましょう。', romaji: 'Issho ni ikimashō.', zh: '一起去吧！' },
          { jp: '休みましょう。', romaji: 'Yasumimashō.', zh: '休息吧。' },
        ]
      }
    ],
    vocabulary: [
      { word: '行きたい', reading: 'いきたい', romaji: 'ikitai', meaning: '想去' },
      { word: '寿司', reading: 'すし', romaji: 'sushi', meaning: '壽司' },
      { word: '旅行', reading: 'りょこう', romaji: 'ryokō', meaning: '旅行' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息' },
      { word: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', meaning: '玩' },
      { word: '泳ぐ', reading: 'およぐ', romaji: 'oyogu', meaning: '游泳' },
      { word: '一緒に', reading: 'いっしょに', romaji: 'issho ni', meaning: '一起' },
      { word: '何も', reading: 'なにも', romaji: 'nani mo', meaning: '什麼都(不)' },
    ],
    quiz: [
      { question: '日本に行き___です。', options: ['ます', 'たい', 'ません', 'ました'], answer: 1 },
      { question: '一緒に行き___。(一起去吧)', options: ['ます', 'たい', 'ましょう', 'ません'], answer: 2 },
      { question: '寿司を食べ___です。(想吃)', options: ['ます', 'ました', 'たい', 'ません'], answer: 2 },
      { question: '「旅行」的意思是？', options: ['運動', '工作', '學習', '旅行'], answer: 3 },
      { question: '何も飲みたく___です。(不想喝)', options: ['あり', 'い', 'ない', 'なく'], answer: 2 },
      { question: '「泳ぐ」的意思是？', options: ['跑', '走', '飛', '游泳'], answer: 3 },
      { question: '休み___。(休息吧)', options: ['ます', 'ません', 'ましょう', 'たい'], answer: 2 },
      { question: '「遊ぶ」的ます形是？', options: ['遊びます', '遊びす', '遊ます', '遊ぶます'], answer: 0 },
      { question: '「一緒に」的意思是？', options: ['一個人', '一起', '另外', '特別'], answer: 1 },
      { question: '「〜たいです」用來表達？', options: ['過去', '命令', '願望', '推測'], answer: 2 },
    ]
  },

  // ---- 第11章：過去式 ----
  {
    id: 'n5_ch11',
    level: 'N5',
    title: '過去式表達',
    grammar: [
      {
        pattern: '動詞：〜ました / 〜ませんでした',
        explanation: '動詞ます形的過去肯定和過去否定。',
        examples: [
          { jp: '昨日、映画を見ました。', romaji: 'Kinō, eiga o mimashita.', zh: '昨天看了電影。' },
          { jp: '朝ご飯を食べませんでした。', romaji: 'Asagohan o tabemasen deshita.', zh: '沒吃早餐。' },
        ]
      },
      {
        pattern: '形容詞過去式',
        explanation: 'い形容詞：「い→かったです」(否定：「くなかったです」)。な形容詞/名詞：「でした」(否定：「じゃなかったです」)。',
        examples: [
          { jp: '昨日は暑かったです。', romaji: 'Kinō wa atsukatta desu.', zh: '昨天很熱。' },
          { jp: 'テストは難しくなかったです。', romaji: 'Tesuto wa muzukashiku nakatta desu.', zh: '考試不難。' },
          { jp: '昨日は暇でした。', romaji: 'Kinō wa hima deshita.', zh: '昨天很閒。' },
        ]
      }
    ],
    vocabulary: [
      { word: '昨日', reading: 'きのう', romaji: 'kinō', meaning: '昨天' },
      { word: '先週', reading: 'せんしゅう', romaji: 'senshū', meaning: '上週' },
      { word: '去年', reading: 'きょねん', romaji: 'kyonen', meaning: '去年' },
      { word: '朝ご飯', reading: 'あさごはん', romaji: 'asagohan', meaning: '早餐' },
      { word: '昼ご飯', reading: 'ひるごはん', romaji: 'hirugohan', meaning: '午餐' },
      { word: '晩ご飯', reading: 'ばんごはん', romaji: 'bangohan', meaning: '晚餐' },
      { word: '難しい', reading: 'むずかしい', romaji: 'muzukashii', meaning: '難的' },
      { word: '暇', reading: 'ひま', romaji: 'hima', meaning: '閒/空閒' },
    ],
    quiz: [
      { question: '昨日、映画を見___。', options: ['ます', 'ました', 'ません', 'たい'], answer: 1 },
      { question: '朝ご飯を食べ___でした。(沒吃)', options: ['ます', 'ません', 'ました', 'ない'], answer: 1 },
      { question: '昨日は暑___です。(過去：熱)', options: ['い', 'く', 'かった', 'くない'], answer: 2 },
      { question: 'テストは難しく___です。(過去否定)', options: ['ない', 'なかった', 'かった', 'ある'], answer: 1 },
      { question: '「昨日」的讀音是？', options: ['きのう', 'さくじつ', 'きのお', 'さくにち'], answer: 0 },
      { question: '昨日は暇___。(過去)', options: ['です', 'でした', 'だった', 'でしょう'], answer: 1 },
      { question: '「先週」的意思是？', options: ['下週', '本週', '上週', '每週'], answer: 2 },
      { question: '「晩ご飯」的意思是？', options: ['早餐', '午餐', '晚餐', '宵夜'], answer: 2 },
      { question: '先週、日本に行き___。', options: ['ます', 'ました', 'ません', 'たい'], answer: 1 },
      { question: '「難しい」的過去式是？', options: ['難しかったです', '難しいでした', '難しいました', '難しくでした'], answer: 0 },
    ]
  },

  // ---- 第12章：助詞 や・に（時間）----
  {
    id: 'n5_ch12',
    level: 'N5',
    title: '助詞進階（や・に）',
    grammar: [
      {
        pattern: 'AやBなど',
        explanation: '「や」表示列舉（非全部），「A和B等等」。跟「と」不同，「や」暗示還有其他。',
        examples: [
          { jp: 'りんごやバナナを買いました。', romaji: 'Ringo ya banana o kaimashita.', zh: '買了蘋果和香蕉等。' },
          { jp: '音楽やスポーツが好きです。', romaji: 'Ongaku ya supōtsu ga suki desu.', zh: '喜歡音樂和運動等。' },
        ]
      },
      {
        pattern: '〜に（時間）',
        explanation: '「に」用於具體時間點（幾月幾日、幾點、星期幾）。「毎日」「今日」等不加「に」。',
        examples: [
          { jp: '七時に起きます。', romaji: 'Shichi-ji ni okimasu.', zh: '七點起床。' },
          { jp: '日曜日に買い物をします。', romaji: 'Nichiyōbi ni kaimono o shimasu.', zh: '星期天購物。' },
          { jp: '三月に日本へ行きます。', romaji: 'San-gatsu ni Nihon e ikimasu.', zh: '三月去日本。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'りんご', reading: 'りんご', romaji: 'ringo', meaning: '蘋果' },
      { word: 'バナナ', reading: 'バナナ', romaji: 'banana', meaning: '香蕉' },
      { word: 'スポーツ', reading: 'スポーツ', romaji: 'supōtsu', meaning: '運動' },
      { word: '日曜日', reading: 'にちようび', romaji: 'nichiyōbi', meaning: '星期天' },
      { word: '月曜日', reading: 'げつようび', romaji: 'getsuyōbi', meaning: '星期一' },
      { word: '起きる', reading: 'おきる', romaji: 'okiru', meaning: '起床' },
      { word: '寝る', reading: 'ねる', romaji: 'neru', meaning: '睡覺' },
      { word: '買い物', reading: 'かいもの', romaji: 'kaimono', meaning: '購物' },
    ],
    quiz: [
      { question: 'りんご___バナナを買いました。(等等)', options: ['と', 'や', 'も', 'の'], answer: 1 },
      { question: '七時___起きます。', options: ['で', 'を', 'に', 'が'], answer: 2 },
      { question: '「と」和「や」的差異是？', options: ['沒有差異', 'や暗示還有其他', 'と是口語', 'や只用於食物'], answer: 1 },
      { question: '日曜日___買い物をします。', options: ['で', 'に', 'を', 'が'], answer: 1 },
      { question: '「起きる」的意思是？', options: ['睡覺', '起床', '休息', '工作'], answer: 1 },
      { question: '「毎日」後面需要加「に」嗎？', options: ['需要', '不需要', '都可以', '看情況'], answer: 1 },
      { question: '音楽___スポーツが好きです。', options: ['と', 'や', 'も', 'に'], answer: 1 },
      { question: '「寝る」的意思是？', options: ['起床', '工作', '睡覺', '吃飯'], answer: 2 },
      { question: '三月___日本へ行きます。', options: ['で', 'に', 'を', 'が'], answer: 1 },
      { question: '「買い物」的意思是？', options: ['賣東西', '購物', '買房子', '交換'], answer: 1 },
    ]
  },

  // ---- 第13章：數量詞與量詞 ----
  {
    id: 'n5_ch13',
    level: 'N5',
    title: '數量詞與計數',
    grammar: [
      {
        pattern: '〜つ（一般量詞）',
        explanation: '日語固有數字系統的量詞，用來計算小的物品。一つ、二つ...十（とお）。',
        examples: [
          { jp: 'りんごを三つください。', romaji: 'Ringo o mittsu kudasai.', zh: '請給我三個蘋果。' },
          { jp: 'いくつありますか。', romaji: 'Ikutsu arimasu ka.', zh: '有幾個？' },
        ]
      },
      {
        pattern: '〜人 / 〜枚 / 〜本 / 〜冊',
        explanation: '不同物品使用不同量詞。人(ひとり/ふたり/〜にん)、枚(まい：薄片物)、本(ほん：長條物)、冊(さつ：書籍)。',
        examples: [
          { jp: '学生が三人います。', romaji: 'Gakusei ga san-nin imasu.', zh: '有三位學生。' },
          { jp: '切手を五枚買いました。', romaji: 'Kitte o go-mai kaimashita.', zh: '買了五張郵票。' },
          { jp: 'ペンを二本持っています。', romaji: 'Pen o ni-hon motte imasu.', zh: '帶了兩支筆。' },
        ]
      }
    ],
    vocabulary: [
      { word: '一つ', reading: 'ひとつ', romaji: 'hitotsu', meaning: '一個' },
      { word: '二つ', reading: 'ふたつ', romaji: 'futatsu', meaning: '兩個' },
      { word: '三つ', reading: 'みっつ', romaji: 'mittsu', meaning: '三個' },
      { word: '一人', reading: 'ひとり', romaji: 'hitori', meaning: '一個人' },
      { word: '二人', reading: 'ふたり', romaji: 'futari', meaning: '兩個人' },
      { word: '切手', reading: 'きって', romaji: 'kitte', meaning: '郵票' },
      { word: '枚', reading: 'まい', romaji: 'mai', meaning: '張(量詞)' },
      { word: '冊', reading: 'さつ', romaji: 'satsu', meaning: '冊(量詞)' },
    ],
    quiz: [
      { question: 'りんごを三___ください。', options: ['個', 'つ', '枚', '本'], answer: 1 },
      { question: '学生が三___います。', options: ['つ', '個', '人', '枚'], answer: 2 },
      { question: '切手を五___買いました。(薄片物)', options: ['つ', '本', '冊', '枚'], answer: 3 },
      { question: '一人的讀音是？', options: ['いちにん', 'ひとり', 'いちじん', 'ひとにん'], answer: 1 },
      { question: '「二人」的讀音是？', options: ['ににん', 'ふたにん', 'ふたり', 'にじん'], answer: 2 },
      { question: 'ペンは何で數？', options: ['枚', '冊', '本', 'つ'], answer: 2 },
      { question: '本は何で數？', options: ['枚', '冊', '本', '個'], answer: 1 },
      { question: 'いくつ___か。(有幾個)', options: ['います', 'あります', 'します', 'できます'], answer: 1 },
      { question: '「三つ」的讀音是？', options: ['さんつ', 'みつ', 'みっつ', 'さっつ'], answer: 2 },
      { question: '紙(薄片)用哪個量詞？', options: ['本', '冊', '枚', 'つ'], answer: 2 },
    ]
  },

  // ---- 第14章：比較表現 ----
  {
    id: 'n5_ch14',
    level: 'N5',
    title: '比較表現',
    grammar: [
      {
        pattern: 'AよりBのほうが〜です',
        explanation: '比較兩者。「跟A比起來，B更...」。',
        examples: [
          { jp: '夏より冬のほうが好きです。', romaji: 'Natsu yori fuyu no hō ga suki desu.', zh: '比起夏天，更喜歡冬天。' },
          { jp: 'バスより電車のほうが速いです。', romaji: 'Basu yori densha no hō ga hayai desu.', zh: '比起公車，電車更快。' },
        ]
      },
      {
        pattern: '〜の中で〜がいちばん〜です',
        explanation: '在一群中，某個是最...的。「...之中，...是最...」。',
        examples: [
          { jp: '果物の中で、いちごがいちばん好きです。', romaji: 'Kudamono no naka de, ichigo ga ichiban suki desu.', zh: '水果之中，最喜歡草莓。' },
          { jp: 'クラスの中で、田中さんがいちばん背が高いです。', romaji: 'Kurasu no naka de, Tanaka-san ga ichiban se ga takai desu.', zh: '班上田中最高。' },
        ]
      }
    ],
    vocabulary: [
      { word: '夏', reading: 'なつ', romaji: 'natsu', meaning: '夏天' },
      { word: '冬', reading: 'ふゆ', romaji: 'fuyu', meaning: '冬天' },
      { word: '春', reading: 'はる', romaji: 'haru', meaning: '春天' },
      { word: '秋', reading: 'あき', romaji: 'aki', meaning: '秋天' },
      { word: '速い', reading: 'はやい', romaji: 'hayai', meaning: '快的' },
      { word: '電車', reading: 'でんしゃ', romaji: 'densha', meaning: '電車' },
      { word: '果物', reading: 'くだもの', romaji: 'kudamono', meaning: '水果' },
      { word: 'いちばん', reading: 'いちばん', romaji: 'ichiban', meaning: '最' },
    ],
    quiz: [
      { question: '夏___冬のほうが好きです。', options: ['が', 'の', 'より', 'から'], answer: 2 },
      { question: 'バスより電車の___が速いです。', options: ['もの', 'ほう', 'こと', 'もと'], answer: 1 },
      { question: '果物の中で、いちごが___好きです。', options: ['もっと', 'とても', 'いちばん', 'たくさん'], answer: 2 },
      { question: '「速い」的反義詞是？', options: ['遅い', '近い', '安い', '低い'], answer: 0 },
      { question: '「夏」的讀音是？', options: ['あつ', 'なつ', 'かつ', 'さつ'], answer: 1 },
      { question: '「冬」的讀音是？', options: ['ふゆ', 'ふる', 'ゆき', 'こおり'], answer: 0 },
      { question: '___の中で、何がいちばん好きですか。(水果)', options: ['野菜', '果物', '料理', '飲み物'], answer: 1 },
      { question: '「電車」的意思是？', options: ['公車', '計程車', '電車', '飛機'], answer: 2 },
      { question: '「春」的讀音是？', options: ['はる', 'はな', 'あき', 'なつ'], answer: 0 },
      { question: 'AよりBの___が好きです。', options: ['ほう', 'もの', 'こと', 'ため'], answer: 0 },
    ]
  },

  // ---- 第15章：頻率副詞與句尾表達 ----
  {
    id: 'n5_ch15',
    level: 'N5',
    title: '頻率副詞與句尾表達',
    grammar: [
      {
        pattern: 'いつも / よく / ときどき / あまり〜ない / 全然〜ない',
        explanation: '頻率副詞由高到低排列。「あまり」和「全然」搭配否定形使用。',
        examples: [
          { jp: 'いつも七時に起きます。', romaji: 'Itsumo shichi-ji ni okimasu.', zh: '總是七點起床。' },
          { jp: 'よく日本料理を食べます。', romaji: 'Yoku Nihon ryōri o tabemasu.', zh: '經常吃日本料理。' },
          { jp: 'あまりテレビを見ません。', romaji: 'Amari terebi o mimasen.', zh: '不太看電視。' },
          { jp: '全然分かりません。', romaji: 'Zenzen wakarimasen.', zh: '完全不懂。' },
        ]
      },
      {
        pattern: '〜ね / 〜よ',
        explanation: '「ね」表示確認或尋求同意（...對吧？）。「よ」表示告知新訊息或強調（...喔！）。',
        examples: [
          { jp: 'いい天気ですね。', romaji: 'Ii tenki desu ne.', zh: '天氣真好呢。' },
          { jp: 'この映画は面白いですよ。', romaji: 'Kono eiga wa omoshiroi desu yo.', zh: '這部電影很有趣喔！' },
        ]
      }
    ],
    vocabulary: [
      { word: 'いつも', reading: 'いつも', romaji: 'itsumo', meaning: '總是' },
      { word: 'よく', reading: 'よく', romaji: 'yoku', meaning: '經常' },
      { word: 'ときどき', reading: 'ときどき', romaji: 'tokidoki', meaning: '有時候' },
      { word: 'あまり', reading: 'あまり', romaji: 'amari', meaning: '不太' },
      { word: '全然', reading: 'ぜんぜん', romaji: 'zenzen', meaning: '完全(不)' },
      { word: '天気', reading: 'てんき', romaji: 'tenki', meaning: '天氣' },
      { word: 'テレビ', reading: 'テレビ', romaji: 'terebi', meaning: '電視' },
      { word: '分かる', reading: 'わかる', romaji: 'wakaru', meaning: '知道/懂' },
    ],
    quiz: [
      { question: '___七時に起きます。(總是)', options: ['ときどき', 'あまり', 'いつも', '全然'], answer: 2 },
      { question: 'あまりテレビを見___。', options: ['ます', 'ません', 'ました', 'たい'], answer: 1 },
      { question: '全然分かり___。', options: ['ます', 'ました', 'ません', 'たい'], answer: 2 },
      { question: '頻率最高的是？', options: ['ときどき', 'よく', 'いつも', 'あまり'], answer: 2 },
      { question: 'いい天気です___。(尋求同意)', options: ['よ', 'ね', 'か', 'の'], answer: 1 },
      { question: 'この映画は面白いです___。(告知)', options: ['ね', 'か', 'よ', 'の'], answer: 2 },
      { question: '「ときどき」的意思是？', options: ['總是', '經常', '有時候', '從不'], answer: 2 },
      { question: '「天気」的意思是？', options: ['溫度', '天氣', '季節', '氣溫'], answer: 1 },
      { question: '___日本料理を食べます。(經常)', options: ['いつも', 'よく', 'あまり', '全然'], answer: 1 },
      { question: '「分かる」的意思是？', options: ['忘記', '記得', '知道/懂', '學習'], answer: 2 },
    ]
  },

  // ---- 第16章：原因與理由（基礎） ----
  {
    id: 'n5_ch16',
    level: 'N5',
    title: '原因與理由（から / だから）',
    grammar: [
      {
        pattern: '〜から',
        explanation: '表示原因理由。「因為...」。接在句尾。',
        examples: [
          { jp: '時間がありませんから、タクシーで行きます。', romaji: 'Jikan ga arimasen kara, takushī de ikimasu.', zh: '因為沒有時間，所以搭計程車去。' },
          { jp: '暑いですから、エアコンをつけましょう。', romaji: 'Atsui desu kara, eakon o tsukemashō.', zh: '因為很熱，所以打開冷氣吧。' },
        ]
      },
      {
        pattern: 'だから',
        explanation: '用於句首的接續詞，表示「所以...」。',
        examples: [
          { jp: '今日は日曜日です。だから、学校は休みです。', romaji: 'Kyō wa nichiyōbi desu. Dakara, gakkō wa yasumi desu.', zh: '今天是星期天。所以學校放假。' },
        ]
      }
    ],
    vocabulary: [
      { word: '時間', reading: 'じかん', romaji: 'jikan', meaning: '時間' },
      { word: 'タクシー', reading: 'タクシー', romaji: 'takushī', meaning: '計程車' },
      { word: 'エアコン', reading: 'エアコン', romaji: 'eakon', meaning: '冷氣' },
      { word: 'つける', reading: 'つける', romaji: 'tsukeru', meaning: '打開(電器)' },
      { word: '消す', reading: 'けす', romaji: 'kesu', meaning: '關掉(電器)' },
      { word: '暑い', reading: 'あつい', romaji: 'atsui', meaning: '熱的' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '冷的' },
      { word: '休み', reading: 'やすみ', romaji: 'yasumi', meaning: '休息/放假' },
    ],
    quiz: [
      { question: '時間がありません___、タクシーで行きます。', options: ['でも', 'から', 'まで', 'に'], answer: 1 },
      { question: '今日は日曜日です。___、学校は休みです。', options: ['から', 'だから', 'しかし', 'そして'], answer: 1 },
      { question: '「エアコン」的意思是？', options: ['電視', '冰箱', '冷氣', '電腦'], answer: 2 },
      { question: '「つける」的反義詞是？', options: ['あける', 'しめる', 'けす', 'とめる'], answer: 2 },
      { question: '暑いです___、エアコンをつけましょう。', options: ['から', 'ので', 'でも', 'と'], answer: 0 },
      { question: '「暑い」的讀音是？', options: ['さむい', 'あつい', 'ぬるい', 'つめたい'], answer: 1 },
      { question: '「寒い」的意思是？', options: ['熱的', '溫的', '冷的', '涼的'], answer: 2 },
      { question: '「休み」的意思是？', options: ['工作', '學習', '考試', '休息/放假'], answer: 3 },
      { question: '「消す」的意思是？', options: ['打開', '關掉', '修理', '購買'], answer: 1 },
      { question: '「だから」用於哪裡？', options: ['句中連接', '句首表示結果', '句尾語氣', '疑問詞'], answer: 1 },
    ]
  },

  // ---- 第17章：形容詞與名詞的連接 ----
  {
    id: 'n5_ch17',
    level: 'N5',
    title: '形容詞與名詞的連接',
    grammar: [
      {
        pattern: 'い形容詞：〜くて',
        explanation: '連接兩個い形容詞或句子。「又...又...」。將字尾「い」改成「くて」。',
        examples: [
          { jp: 'この靴は安くて、いいです。', romaji: 'Kono kutsu wa yasukute, ii desu.', zh: '這雙鞋又便宜又好。' },
          { jp: '東京は人が多くて、にぎやかです。', romaji: 'Tōkyō wa hito ga ōkute, nigiyaka desu.', zh: '東京人多又熱鬧。' },
        ]
      },
      {
        pattern: 'な形容詞/名詞：〜で',
        explanation: '連接な形容詞或名詞。「是...也是...」或「又...又...」。',
        examples: [
          { jp: '山田さんは親切で、面白いです。', romaji: 'Yamada-san wa shinsetsu de, omoshiroi desu.', zh: '山田先生很親切又有趣。' },
          { jp: '彼は学生で、日本人です。', romaji: 'Kare wa gakusei de, nihonjin desu.', zh: '他是學生，也是日本人。' },
        ]
      }
    ],
    vocabulary: [
      { word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: '鞋子' },
      { word: '多い', reading: 'おおい', romaji: 'ōi', meaning: '多的' },
      { word: '少ない', reading: 'すくない', romaji: 'sukunai', meaning: '少的' },
      { word: 'にぎやか', reading: 'にぎやか', romaji: 'nigiyaka', meaning: '熱鬧的' },
      { word: '静か', reading: 'しずか', romaji: 'shizuka', meaning: '安靜的' },
      { word: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaning: '親切的' },
      { word: '面白い', reading: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的' },
      { word: '便利', reading: 'べんり', romaji: 'benri', meaning: '方便的' },
    ],
    quiz: [
      { question: 'この靴は安___、いいです。', options: ['くて', 'で', 'く', 'い'], answer: 0 },
      { question: '山田さんは親切___、面白いです。', options: ['で', 'くて', 'な', 'だ'], answer: 0 },
      { question: '彼は学生___、日本人です。', options: ['くて', 'で', 'だ', 'な'], answer: 1 },
      { question: '「多い」的反義詞是？', options: ['大きい', '少ない', '小さい', '安い'], answer: 1 },
      { question: '「にぎやか」的反義詞是？', options: ['便利', '親切', '静か', '元気'], answer: 2 },
      { question: '「靴」的讀音是？', options: ['ふく', 'かさ', 'くつ', 'ぼうし'], answer: 2 },
      { question: '東京は人が多___、にぎやかです。', options: ['く', 'くて', 'で', 'い'], answer: 1 },
      { question: '「便利」的意思是？', options: ['便宜的', '方便的', '安靜的', '熱鬧的'], answer: 1 },
      { question: '「親切」的讀音是？', options: ['しんせき', 'しんせつ', 'しずか', 'しんせん'], answer: 1 },
      { question: '安くて___です。(便宜又好吃)', options: ['おいしい', 'おいしく', 'おいし', 'おいしで'], answer: 0 },
    ]
  },

  // ===================== N4 (20 章完整版) =====================

  // ---- N4 第1章：動詞て形與請求 ----
  {
    id: 'n4_ch1',
    level: 'N4',
    title: '動詞て形與請求',
    grammar: [
      {
        pattern: '〜てください',
        explanation: '請求對方做某事。「請...」。て形變化規則：五段動詞有音便變化，一段動詞去「る」加「て」。',
        examples: [
          { jp: 'ここに座ってください。', romaji: 'Koko ni suwatte kudasai.', zh: '請坐在這裡。' },
          { jp: '名前を書いてください。', romaji: 'Namae o kaite kudasai.', zh: '請寫下名字。' },
          { jp: 'もう一度言ってください。', romaji: 'Mō ichido itte kudasai.', zh: '請再說一次。' },
        ]
      },
      {
        pattern: '〜ています',
        explanation: '表示正在進行的動作或持續的狀態。「正在.../已經...的狀態」。',
        examples: [
          { jp: '今、勉強しています。', romaji: 'Ima, benkyō shite imasu.', zh: '現在正在唸書。' },
          { jp: '東京に住んでいます。', romaji: 'Tōkyō ni sunde imasu.', zh: '住在東京。' },
          { jp: '結婚しています。', romaji: 'Kekkon shite imasu.', zh: '已婚(已結婚的狀態)。' },
        ]
      }
    ],
    vocabulary: [
      { word: '座る', reading: 'すわる', romaji: 'suwaru', meaning: '坐' },
      { word: '立つ', reading: 'たつ', romaji: 'tatsu', meaning: '站' },
      { word: '待つ', reading: 'まつ', romaji: 'matsu', meaning: '等待' },
      { word: '住む', reading: 'すむ', romaji: 'sumu', meaning: '住' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作' },
      { word: '勉強する', reading: 'べんきょうする', romaji: 'benkyō suru', meaning: '學習' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教' },
      { word: '開ける', reading: 'あける', romaji: 'akeru', meaning: '打開' },
    ],
    quiz: [
      { question: 'ここに座___ください。', options: ['て', 'って', 'で', 'った'], answer: 1 },
      { question: '今、勉強___います。', options: ['して', 'する', 'した', 'し'], answer: 0 },
      { question: '「待つ」的て形是？', options: ['待て', '待って', '待ちて', '待つて'], answer: 1 },
      { question: '東京に住___います。', options: ['む', 'んで', 'で', 'みて'], answer: 1 },
      { question: '「働く」的意思是？', options: ['學習', '休息', '工作', '運動'], answer: 2 },
      { question: '名前を書___ください。', options: ['いて', 'きて', 'して', 'って'], answer: 0 },
      { question: '「教える」的意思是？', options: ['學', '教', '問', '答'], answer: 1 },
      { question: '窓を開___ください。', options: ['いて', 'けて', 'して', 'って'], answer: 1 },
      { question: '「〜ています」表示？', options: ['過去式', '意志形', '進行/狀態', '假設'], answer: 2 },
      { question: '「立つ」的意思是？', options: ['坐', '站', '走', '跑'], answer: 1 },
    ]
  },

  // ---- N4 第2章：許可與禁止 ----
  {
    id: 'n4_ch2',
    level: 'N4',
    title: '許可與禁止',
    grammar: [
      {
        pattern: '〜てもいいです',
        explanation: '表示許可。「可以...」。加「か」變成詢問許可。',
        examples: [
          { jp: '写真を撮ってもいいですか。', romaji: 'Shashin o totte mo ii desu ka.', zh: '可以拍照嗎？' },
          { jp: 'ここに座ってもいいですよ。', romaji: 'Koko ni suwatte mo ii desu yo.', zh: '可以坐在這裡喔。' },
        ]
      },
      {
        pattern: '〜てはいけません',
        explanation: '表示禁止。「不可以...」。比「〜ないでください」語氣更強。',
        examples: [
          { jp: 'ここで煙草を吸ってはいけません。', romaji: 'Koko de tabako o sutte wa ikemasen.', zh: '不可以在這裡抽菸。' },
          { jp: '走ってはいけません。', romaji: 'Hashitte wa ikemasen.', zh: '不可以跑。' },
        ]
      }
    ],
    vocabulary: [
      { word: '撮る', reading: 'とる', romaji: 'toru', meaning: '拍(照)' },
      { word: '触る', reading: 'さわる', romaji: 'sawaru', meaning: '觸摸' },
      { word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: '跑' },
      { word: '入る', reading: 'はいる', romaji: 'hairu', meaning: '進入' },
      { word: '使う', reading: 'つかう', romaji: 'tsukau', meaning: '使用' },
      { word: '煙草', reading: 'たばこ', romaji: 'tabako', meaning: '香菸' },
      { word: '写真', reading: 'しゃしん', romaji: 'shashin', meaning: '照片' },
      { word: '禁止', reading: 'きんし', romaji: 'kinshi', meaning: '禁止' },
    ],
    quiz: [
      { question: '写真を撮って___いいですか。', options: ['が', 'を', 'も', 'に'], answer: 2 },
      { question: 'ここで走って___いけません。', options: ['も', 'は', 'が', 'を'], answer: 1 },
      { question: '「触る」的意思是？', options: ['跑', '走', '觸摸', '看'], answer: 2 },
      { question: '煙草を吸って___いけません。', options: ['も', 'は', 'が', 'を'], answer: 1 },
      { question: '「使う」的意思是？', options: ['丟掉', '使用', '打開', '關閉'], answer: 1 },
      { question: '「〜てもいいです」表示？', options: ['禁止', '許可', '義務', '建議'], answer: 1 },
      { question: '「入る」的意思是？', options: ['出去', '進入', '回去', '經過'], answer: 1 },
      { question: 'ここに___てもいいですよ。(坐)', options: ['座っ', '立っ', '走っ', '入っ'], answer: 0 },
      { question: '「写真」的讀音是？', options: ['しゃしん', 'さしん', 'しゃしゃ', 'ささん'], answer: 0 },
      { question: '「禁止」的意思是？', options: ['允許', '推薦', '禁止', '歡迎'], answer: 2 },
    ]
  },

  // ---- N4 第3章：條件與假設 ----
  {
    id: 'n4_ch3',
    level: 'N4',
    title: '條件與假設',
    grammar: [
      {
        pattern: '〜たら',
        explanation: '如果...的話 / ...之後。表示假設條件或時間先後。',
        examples: [
          { jp: '雨が降ったら、家にいます。', romaji: 'Ame ga futtara, ie ni imasu.', zh: '如果下雨的話，就待在家。' },
          { jp: '駅に着いたら、電話してください。', romaji: 'Eki ni tsuitara, denwa shite kudasai.', zh: '到了車站的話，請打電話。' },
        ]
      },
      {
        pattern: '〜なければなりません',
        explanation: '表示義務。「必須...」。口語可縮寫為「〜なきゃ」。',
        examples: [
          { jp: '薬を飲まなければなりません。', romaji: 'Kusuri o nomanakerebanarimasen.', zh: '必須吃藥。' },
          { jp: '宿題をしなければなりません。', romaji: 'Shukudai o shinakereba narimasen.', zh: '必須做功課。' },
        ]
      }
    ],
    vocabulary: [
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: '雨' },
      { word: '降る', reading: 'ふる', romaji: 'furu', meaning: '下(雨/雪)' },
      { word: '届く', reading: 'とどく', romaji: 'todoku', meaning: '寄到/到達' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: '宿題', reading: 'しゅくだい', romaji: 'shukudai', meaning: '功課' },
      { word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: '約定' },
      { word: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: '準備' },
      { word: '電話', reading: 'でんわ', romaji: 'denwa', meaning: '電話' },
    ],
    quiz: [
      { question: '雨が降っ___、家にいます。', options: ['ても', 'たら', 'から', 'ので'], answer: 1 },
      { question: '薬を飲ま___なりません。', options: ['ないと', 'なければ', 'なくて', 'ないで'], answer: 1 },
      { question: '「宿題」的意思是？', options: ['考試', '功課', '報告', '作文'], answer: 1 },
      { question: '駅に着い___、電話してください。', options: ['て', 'たら', 'ても', 'から'], answer: 1 },
      { question: '「約束」的意思是？', options: ['計畫', '約定', '用藥', '規則'], answer: 1 },
      { question: '「準備」的讀音是？', options: ['じゅんび', 'じゅんぴ', 'しゅんび', 'しゅんぴ'], answer: 0 },
      { question: '宿題を___なければなりません。', options: ['し', 'して', 'する', 'した'], answer: 0 },
      { question: '「降る」的意思是？', options: ['上升', '下(雨)', '寄送', '散步'], answer: 1 },
      { question: '「電話」的意思是？', options: ['電視', '電腦', '電話', '電車'], answer: 2 },
      { question: '「〜なければなりません」表示？', options: ['許可', '禁止', '義務', '希望'], answer: 2 },
    ]
  },

  // ---- N4 第4章：經驗與嘗試 ----
  {
    id: 'n4_ch4',
    level: 'N4',
    title: '經驗與嘗試',
    grammar: [
      {
        pattern: '〜たことがある',
        explanation: '表示曾經有過某種經驗。「曾經做過...」。動詞用た形。',
        examples: [
          { jp: '日本に行ったことがあります。', romaji: 'Nihon ni itta koto ga arimasu.', zh: '曾經去過日本。' },
          { jp: '寿司を食べたことがありません。', romaji: 'Sushi o tabeta koto ga arimasen.', zh: '沒有吃過壽司。' },
        ]
      },
      {
        pattern: '〜てみる',
        explanation: '表示嘗試做某事。「試試看...」。',
        examples: [
          { jp: 'この料理を食べてみてください。', romaji: 'Kono ryōri o tabete mite kudasai.', zh: '請試吃這道料理。' },
          { jp: '新しい靴を履いてみました。', romaji: 'Atarashii kutsu o haite mimashita.', zh: '試穿了新鞋子。' },
        ]
      }
    ],
    vocabulary: [
      { word: '経験', reading: 'けいけん', romaji: 'keiken', meaning: '經驗' },
      { word: '海外', reading: 'かいがい', romaji: 'kaigai', meaning: '海外' },
      { word: '富士山', reading: 'ふじさん', romaji: 'Fujisan', meaning: '富士山' },
      { word: '温泉', reading: 'おんせん', romaji: 'onsen', meaning: '溫泉' },
      { word: '着物', reading: 'きもの', romaji: 'kimono', meaning: '和服' },
      { word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: '鞋子' },
      { word: '着る', reading: 'きる', romaji: 'kiru', meaning: '穿(上半身)' },
      { word: '履く', reading: 'はく', romaji: 'haku', meaning: '穿(下半身/鞋)' },
    ],
    quiz: [
      { question: '日本に行った___があります。', options: ['もの', 'こと', 'ところ', 'とき'], answer: 1 },
      { question: 'この料理を食べて___ください。', options: ['おいて', 'しまって', 'みて', 'あって'], answer: 2 },
      { question: '寿司を食べたことが___。(沒吃過)', options: ['あります', 'ありません', 'います', 'いません'], answer: 1 },
      { question: '「経験」的意思是？', options: ['練習', '經驗', '實驗', '勉強'], answer: 1 },
      { question: '新しい靴を履いて___ました。(嘗試)', options: ['み', 'し', 'おき', 'あり'], answer: 0 },
      { question: '「温泉」的讀音是？', options: ['おんせん', 'おんすい', 'うんせん', 'おんでん'], answer: 0 },
      { question: '着物を着た___がありますか。', options: ['もの', 'こと', 'ところ', 'わけ'], answer: 1 },
      { question: '「海外」的意思是？', options: ['國內', '海外', '海邊', '海底'], answer: 1 },
      { question: '「履く」的意思是？', options: ['穿(上衣)', '穿(鞋/褲)', '脫', '洗'], answer: 1 },
      { question: '「〜てみる」表示？', options: ['完成', '嘗試', '準備', '後悔'], answer: 1 },
    ]
  },

  // ---- N4 第5章：動詞意向形 ----
  {
    id: 'n4_ch5',
    level: 'N4',
    title: '動詞意向形',
    grammar: [
      {
        pattern: '〜よう / 〜ましょう',
        explanation: '意向形表示「打算做...」或邀請「一起...吧」。五段動詞：う段→おう段。一段動詞：去「る」加「よう」。',
        examples: [
          { jp: '明日は早く起きよう。', romaji: 'Ashita wa hayaku okiyō.', zh: '明天早點起來吧。' },
          { jp: '一緒に映画を見ましょう。', romaji: 'Issho ni eiga o mimashō.', zh: '一起看電影吧。' },
        ]
      },
      {
        pattern: '〜ようと思う',
        explanation: '表示打算/計劃做某事。「我打算...」。',
        examples: [
          { jp: '来年、日本に行こうと思っています。', romaji: 'Rainen, Nihon ni ikō to omotte imasu.', zh: '我打算明年去日本。' },
          { jp: 'ダイエットしようと思います。', romaji: 'Daietto shiyō to omoimasu.', zh: '我打算減肥。' },
        ]
      }
    ],
    vocabulary: [
      { word: '来年', reading: 'らいねん', romaji: 'rainen', meaning: '明年' },
      { word: '将来', reading: 'しょうらい', romaji: 'shōrai', meaning: '將來' },
      { word: '計画', reading: 'けいかく', romaji: 'keikaku', meaning: '計畫' },
      { word: '決める', reading: 'きめる', romaji: 'kimeru', meaning: '決定' },
      { word: '始める', reading: 'はじめる', romaji: 'hajimeru', meaning: '開始' },
      { word: '止める', reading: 'やめる', romaji: 'yameru', meaning: '停止/辭職' },
      { word: '引っ越す', reading: 'ひっこす', romaji: 'hikkosu', meaning: '搬家' },
      { word: 'ダイエット', reading: 'ダイエット', romaji: 'daietto', meaning: '減肥' },
    ],
    quiz: [
      { question: '明日は早く起き___。(意向形)', options: ['る', 'た', 'よう', 'ない'], answer: 2 },
      { question: '日本に行___と思っています。', options: ['く', 'こう', 'き', 'か'], answer: 1 },
      { question: 'ダイエットし___と思います。', options: ['て', 'た', 'よう', 'ない'], answer: 2 },
      { question: '「将来」的意思是？', options: ['過去', '現在', '將來', '最近'], answer: 2 },
      { question: '一緒に映画を見___。(一起看吧)', options: ['ます', 'ました', 'ましょう', 'ません'], answer: 2 },
      { question: '「決める」的意思是？', options: ['開始', '結束', '決定', '思考'], answer: 2 },
      { question: '「引っ越す」的意思是？', options: ['旅行', '搬家', '散步', '購物'], answer: 1 },
      { question: '「始める」的意思是？', options: ['結束', '開始', '繼續', '中斷'], answer: 1 },
      { question: '「食べる」的意向形是？', options: ['食べろ', '食べよう', '食べたい', '食べれる'], answer: 1 },
      { question: '「〜ようと思う」表示？', options: ['義務', '許可', '打算', '推測'], answer: 2 },
    ]
  },

  // ---- N4 第6章：可能形 ----
  {
    id: 'n4_ch6',
    level: 'N4',
    title: '可能形（能力表達）',
    grammar: [
      {
        pattern: '動詞可能形',
        explanation: '表示「能夠做...」。五段動詞：う段→える段。一段動詞：去「る」加「られる」。する→できる、来る→来られる。',
        examples: [
          { jp: '日本語が話せます。', romaji: 'Nihongo ga hanasemasu.', zh: '會說日語。' },
          { jp: '漢字が読めません。', romaji: 'Kanji ga yomemasen.', zh: '不會讀漢字。' },
          { jp: '明日、来られますか。', romaji: 'Ashita, koraremasu ka.', zh: '明天能來嗎？' },
        ]
      },
      {
        pattern: '〜ことができる',
        explanation: '另一種表示能力的方式。「能夠...」。較正式。',
        examples: [
          { jp: 'ここで泳ぐことができます。', romaji: 'Koko de oyogu koto ga dekimasu.', zh: '可以在這裡游泳。' },
          { jp: '車を運転することができません。', romaji: 'Kuruma o unten suru koto ga dekimasen.', zh: '不會開車。' },
        ]
      }
    ],
    vocabulary: [
      { word: '運転', reading: 'うんてん', romaji: 'unten', meaning: '駕駛' },
      { word: '予約', reading: 'よやく', romaji: 'yoyaku', meaning: '預約' },
      { word: '翻訳', reading: 'ほんやく', romaji: 'honyaku', meaning: '翻譯' },
      { word: '弾く', reading: 'ひく', romaji: 'hiku', meaning: '彈(樂器)' },
      { word: '泳ぐ', reading: 'およぐ', romaji: 'oyogu', meaning: '游泳' },
      { word: '踊る', reading: 'おどる', romaji: 'odoru', meaning: '跳舞' },
      { word: 'ピアノ', reading: 'ピアノ', romaji: 'piano', meaning: '鋼琴' },
      { word: 'ギター', reading: 'ギター', romaji: 'gitā', meaning: '吉他' },
    ],
    quiz: [
      { question: '日本語___話せます。', options: ['を', 'が', 'に', 'で'], answer: 1 },
      { question: '「読む」的可能形是？', options: ['読める', '読まれる', '読ませる', '読もう'], answer: 0 },
      { question: 'ここで泳ぐ___ができます。', options: ['もの', 'こと', 'ところ', 'わけ'], answer: 1 },
      { question: '「運転」的意思是？', options: ['運動', '駕駛', '運送', '運氣'], answer: 1 },
      { question: '「食べる」的可能形是？', options: ['食べれる', '食べられる', '食べさせる', '食べよう'], answer: 1 },
      { question: '漢字が読___ません。(不會讀)', options: ['み', 'め', 'ま', 'む'], answer: 1 },
      { question: '「弾く」的意思是？', options: ['唱', '彈(樂器)', '吹', '打'], answer: 1 },
      { question: '「する」的可能形是？', options: ['される', 'させる', 'できる', 'しよう'], answer: 2 },
      { question: '「予約」的意思是？', options: ['約定', '預約', '取消', '確認'], answer: 1 },
      { question: '車を運転する___ができません。', options: ['もの', 'こと', 'ところ', 'わけ'], answer: 1 },
    ]
  },

  // ---- N4 第7章：授受表現 ----
  {
    id: 'n4_ch7',
    level: 'N4',
    title: '授受表現（あげる・もらう・くれる）',
    grammar: [
      {
        pattern: '〜てあげる / てもらう / てくれる',
        explanation: '表示給予或接受幫助的動作。あげる(我為別人做)、もらう(別人為我做/我請別人做)、くれる(別人主動為我做)。',
        examples: [
          { jp: '友達に日本語を教えてあげた。', romaji: 'Tomodachi ni nihongo o oshiete ageta.', zh: '我教了朋友日語。' },
          { jp: '先生に教えてもらいました。', romaji: 'Sensei ni oshiete moraimashita.', zh: '請老師教了我。' },
          { jp: '母が弁当を作ってくれた。', romaji: 'Haha ga bentō o tsukutte kureta.', zh: '媽媽做了便當給我。' },
        ]
      }
    ],
    vocabulary: [
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙' },
      { word: '送る', reading: 'おくる', romaji: 'okuru', meaning: '送/寄' },
      { word: '貸す', reading: 'かす', romaji: 'kasu', meaning: '借出' },
      { word: '借りる', reading: 'かりる', romaji: 'kariru', meaning: '借入' },
      { word: '直す', reading: 'なおす', romaji: 'naosu', meaning: '修理/改正' },
      { word: '弁当', reading: 'べんとう', romaji: 'bentō', meaning: '便當' },
      { word: 'プレゼント', reading: 'プレゼント', romaji: 'purezento', meaning: '禮物' },
      { word: '案内する', reading: 'あんないする', romaji: 'annai suru', meaning: '帶路/導覽' },
    ],
    quiz: [
      { question: '友達に教えて___。(我教朋友)', options: ['もらった', 'くれた', 'あげた', 'やった'], answer: 2 },
      { question: '先生に教えて___ました。(老師教我)', options: ['あげ', 'もらい', 'くれ', 'やり'], answer: 1 },
      { question: '母が作って___た。(媽媽做給我)', options: ['あげ', 'もらっ', 'くれ', 'い'], answer: 2 },
      { question: '「手伝う」的意思是？', options: ['教導', '幫忙', '借給', '送達'], answer: 1 },
      { question: '「貸す」的反義詞是？', options: ['送る', '直す', '借りる', '返す'], answer: 2 },
      { question: '本を___てもらった。(借)', options: ['貸し', '送っ', '借り', '買っ'], answer: 0 },
      { question: '「直す」的意思是？', options: ['壞掉', '修理', '丟棄', '購買'], answer: 1 },
      { question: '「案内する」的意思是？', options: ['導覽', '說明', '報告', '連絡'], answer: 0 },
      { question: '「送る」的意思是什麼？', options: ['收到', '買', '送/寄', '拿'], answer: 2 },
      { question: '「〜てくれる」的主語是？', options: ['我', '別人', '大家', '不限'], answer: 1 },
    ]
  },

  // ---- N4 第8章：推測與樣態 ----
  {
    id: 'n4_ch8',
    level: 'N4',
    title: '推測與樣態',
    grammar: [
      {
        pattern: '〜そうだ（樣態）',
        explanation: '看起來似乎/好像要...。根據外觀判斷。い形容詞去い、な形容詞直接加「そうだ」。',
        examples: [
          { jp: 'この料理はおいしそうです。', romaji: 'Kono ryōri wa oishisō desu.', zh: '這道料理看起來很好吃。' },
          { jp: '雨が降りそうです。', romaji: 'Ame ga furisō desu.', zh: '看起來要下雨了。' },
        ]
      },
      {
        pattern: '〜そうだ（傳聞）',
        explanation: '聽說...。傳達從別處得到的資訊。普通形加「そうだ」。',
        examples: [
          { jp: '明日は寒いそうです。', romaji: 'Ashita wa samui sō desu.', zh: '聽說明天很冷。' },
          { jp: '田中さんは来月結婚するそうです。', romaji: 'Tanaka-san wa raigetsu kekkon suru sō desu.', zh: '聽說田中下個月要結婚。' },
        ]
      }
    ],
    vocabulary: [
      { word: '天気予報', reading: 'てんきよほう', romaji: 'tenki yohō', meaning: '天氣預報' },
      { word: '結婚', reading: 'けっこん', romaji: 'kekkon', meaning: '結婚' },
      { word: '噂', reading: 'うわさ', romaji: 'uwasa', meaning: '謠言/傳聞' },
      { word: '壊れる', reading: 'こわれる', romaji: 'kowareru', meaning: '壞掉' },
      { word: '倒れる', reading: 'たおれる', romaji: 'taoreru', meaning: '倒下' },
      { word: '落ちる', reading: 'おちる', romaji: 'ochiru', meaning: '掉落' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '冷的' },
      { word: '暖かい', reading: 'あたたかい', romaji: 'atatakai', meaning: '溫暖的' },
    ],
    quiz: [
      { question: 'この料理はおいし___です。(看起來好吃)', options: ['い', 'く', 'そう', 'た'], answer: 2 },
      { question: '明日は寒い___です。(聽說)', options: ['そう', 'よう', 'みたい', 'らしい'], answer: 0 },
      { question: '雨が降り___です。(看起來要下)', options: ['たい', 'そう', 'よう', 'らしい'], answer: 1 },
      { question: '樣態的「そう」和傳聞的「そう」的差異？', options: ['沒差', '樣態接ます形詞幹/傳聞接普通形', '樣態更正式', '傳聞更口語'], answer: 1 },
      { question: '「壊れる」的意思是？', options: ['修理', '壞掉', '建造', '完成'], answer: 1 },
      { question: '田中さんは結婚する___です。(聽說)', options: ['よう', 'みたい', 'そう', 'はず'], answer: 2 },
      { question: '「暖かい」的意思是？', options: ['寒冷', '炎熱', '溫暖', '涼爽'], answer: 2 },
      { question: 'この荷物は重___です。(看起來很重)', options: ['い', 'く', 'そう', 'さ'], answer: 2 },
      { question: '「天気予報」的意思是？', options: ['天氣預報', '天氣情報', '地震速報', '交通資訊'], answer: 0 },
      { question: '「倒れる」的意思是？', options: ['站起', '倒下', '跳起', '蹲下'], answer: 1 },
    ]
  },

  // ---- N4 第9章：理由表達 ----
  {
    id: 'n4_ch9',
    level: 'N4',
    title: '理由表達（ので・のに）',
    grammar: [
      {
        pattern: '〜ので',
        explanation: '因為...所以...。語氣比「から」客氣，常用於向上級說明理由。',
        examples: [
          { jp: '風邪を引いたので、休みます。', romaji: 'Kaze o hiita node, yasumimasu.', zh: '因為感冒了，所以請假。' },
          { jp: '電車が遅れたので、遅刻しました。', romaji: 'Densha ga okureta node, chikoku shimashita.', zh: '因為電車誤點，所以遲到了。' },
        ]
      },
      {
        pattern: '〜のに',
        explanation: '明明...卻...。表示與預期相反的結果，含不滿或遺憾語氣。',
        examples: [
          { jp: '勉強したのに、テストに落ちた。', romaji: 'Benkyō shita noni, tesuto ni ochita.', zh: '明明有唸書，卻考試不及格。' },
          { jp: '約束したのに、来なかった。', romaji: 'Yakusoku shita noni, konakatta.', zh: '明明約好了，卻沒來。' },
        ]
      }
    ],
    vocabulary: [
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到/誤點' },
      { word: '遅刻', reading: 'ちこく', romaji: 'chikoku', meaning: '遲到' },
      { word: '落ちる', reading: 'おちる', romaji: 'ochiru', meaning: '落下/不及格' },
      { word: '残業', reading: 'ざんぎょう', romaji: 'zangyō', meaning: '加班' },
      { word: '出張', reading: 'しゅっちょう', romaji: 'shutchō', meaning: '出差' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記' },
      { word: '間に合う', reading: 'まにあう', romaji: 'maniau', meaning: '趕上/來得及' },
    ],
    quiz: [
      { question: '風邪を引いた___、休みます。(因為)', options: ['のに', 'ので', 'けど', 'でも'], answer: 1 },
      { question: '勉強した___、テストに落ちた。(明明...卻)', options: ['ので', 'から', 'のに', 'けど'], answer: 2 },
      { question: '「風邪」的意思是？', options: ['發燒', '頭痛', '感冒', '咳嗽'], answer: 2 },
      { question: '「ので」比「から」的語氣更？', options: ['直接', '客氣', '隨便', '強烈'], answer: 1 },
      { question: '約束した___、来なかった。(遺憾)', options: ['ので', 'から', 'のに', 'けど'], answer: 2 },
      { question: '「残業」的意思是？', options: ['休假', '加班', '請假', '早退'], answer: 1 },
      { question: '電車が遅れた___、遅刻しました。', options: ['のに', 'ので', 'けど', 'が'], answer: 1 },
      { question: '「忘れる」的意思是？', options: ['記得', '忘記', '想起', '回憶'], answer: 1 },
      { question: '「間に合う」的意思是？', options: ['遲到', '早到', '趕上', '錯過'], answer: 2 },
      { question: '「〜のに」含有什麼語氣？', options: ['感謝', '喜悅', '不滿/遺憾', '期待'], answer: 2 },
    ]
  },

  // ---- N4 第10章：動詞てしまう ----
  {
    id: 'n4_ch10',
    level: 'N4',
    title: '完成與遺憾（〜てしまう）',
    grammar: [
      {
        pattern: '〜てしまう（完成）',
        explanation: '表示動作徹底完成。「做完了...」。口語常縮為「ちゃう/じゃう」。',
        examples: [
          { jp: '宿題を全部やってしまいました。', romaji: 'Shukudai o zenbu yatte shimaimashita.', zh: '功課全部做完了。' },
          { jp: 'この本をもう読んでしまった。', romaji: 'Kono hon o mō yonde shimatta.', zh: '這本書已經讀完了。' },
        ]
      },
      {
        pattern: '〜てしまう（遺憾）',
        explanation: '表示做了不該做的事/發生了不好的事。「不小心...了」。',
        examples: [
          { jp: '電車の中で寝てしまいました。', romaji: 'Densha no naka de nete shimaimashita.', zh: '在電車上不小心睡著了。' },
          { jp: '大切な写真を消してしまった。', romaji: 'Taisetsu na shashin o keshite shimatta.', zh: '不小心把重要的照片刪掉了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '全部', reading: 'ぜんぶ', romaji: 'zenbu', meaning: '全部' },
      { word: '大切', reading: 'たいせつ', romaji: 'taisetsu', meaning: '重要的' },
      { word: '消す', reading: 'けす', romaji: 'kesu', meaning: '消除/關掉' },
      { word: '壊す', reading: 'こわす', romaji: 'kowasu', meaning: '弄壞' },
      { word: '無くす', reading: 'なくす', romaji: 'nakusu', meaning: '弄丟' },
      { word: '太る', reading: 'ふとる', romaji: 'futoru', meaning: '變胖' },
      { word: '痩せる', reading: 'やせる', romaji: 'yaseru', meaning: '變瘦' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到' },
    ],
    quiz: [
      { question: '宿題を全部やって___ました。(做完)', options: ['い', 'おき', 'しまい', 'み'], answer: 2 },
      { question: '電車で寝て___ました。(不小心)', options: ['み', 'おき', 'あり', 'しまい'], answer: 3 },
      { question: '「消す」的意思是？', options: ['開啟', '消除', '增加', '傳送'], answer: 1 },
      { question: '寫真を消して___った。(不小心刪掉)', options: ['み', 'おい', 'しま', 'あ'], answer: 2 },
      { question: '「壊す」的意思是？', options: ['修理', '建造', '弄壞', '改善'], answer: 2 },
      { question: '「〜ちゃう」是什麼的口語縮寫？', options: ['〜ておく', '〜ている', '〜てしまう', '〜てみる'], answer: 2 },
      { question: '「無くす」的意思是？', options: ['找到', '弄丟', '放好', '保存'], answer: 1 },
      { question: '「太る」的反義詞是？', options: ['太い', '大きい', '痩せる', '細い'], answer: 2 },
      { question: 'もう読んで___った。(讀完了)', options: ['み', 'しま', 'おい', 'あ'], answer: 1 },
      { question: '「大切」的意思是？', options: ['普通的', '不需要的', '重要的', '特別的'], answer: 2 },
    ]
  },

  // ---- N4 第11章：動詞ておく・てある ----
  {
    id: 'n4_ch11',
    level: 'N4',
    title: '準備與狀態（〜ておく・〜てある）',
    grammar: [
      {
        pattern: '〜ておく',
        explanation: '為了某個目的事先做好準備。「先...好」。口語常縮為「とく」。',
        examples: [
          { jp: '旅行の前にホテルを予約しておきます。', romaji: 'Ryokō no mae ni hoteru o yoyaku shite okimasu.', zh: '旅行前先預約好飯店。' },
          { jp: '窓を開けておいてください。', romaji: 'Mado o akete oite kudasai.', zh: '請先把窗戶打開(保持開著)。' },
        ]
      },
      {
        pattern: '〜てある',
        explanation: '表示有人做了某動作，其結果狀態持續著。「已經...好了」。主語用「が」。',
        examples: [
          { jp: '壁にポスターが貼ってあります。', romaji: 'Kabe ni posutā ga hatte arimasu.', zh: '牆上貼著海報。' },
          { jp: 'テーブルの上にお皿が並べてあります。', romaji: 'Tēburu no ue ni osara ga narabete arimasu.', zh: '桌上擺好了盤子。' },
        ]
      }
    ],
    vocabulary: [
      { word: '予約', reading: 'よやく', romaji: 'yoyaku', meaning: '預約' },
      { word: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: '準備' },
      { word: '貼る', reading: 'はる', romaji: 'haru', meaning: '貼' },
      { word: '並べる', reading: 'ならべる', romaji: 'naraberu', meaning: '排列' },
      { word: '片付ける', reading: 'かたづける', romaji: 'katazukeru', meaning: '整理/收拾' },
      { word: '冷やす', reading: 'ひやす', romaji: 'hiyasu', meaning: '冰鎮' },
      { word: '壁', reading: 'かべ', romaji: 'kabe', meaning: '牆壁' },
      { word: 'お皿', reading: 'おさら', romaji: 'osara', meaning: '盤子' },
    ],
    quiz: [
      { question: 'ホテルを予約して___ます。(事先準備)', options: ['い', 'おき', 'しまい', 'み'], answer: 1 },
      { question: '壁にポスターが貼って___ます。(結果狀態)', options: ['い', 'おき', 'あり', 'しまい'], answer: 2 },
      { question: '「片付ける」的意思是？', options: ['弄亂', '整理', '裝飾', '打掃'], answer: 1 },
      { question: '窓を開けて___てください。(保持開著)', options: ['い', 'おい', 'あっ', 'しま'], answer: 1 },
      { question: '「〜ておく」和「〜てある」的差異？', options: ['沒差', 'ておく=準備動作/てある=結果狀態', 'ておく更正式', 'てある更口語'], answer: 1 },
      { question: '「貼る」的意思是？', options: ['撕', '貼', '切', '折'], answer: 1 },
      { question: 'ビールを冷やして___ましょう。(事先準備)', options: ['おき', 'あり', 'しまい', 'み'], answer: 0 },
      { question: '「並べる」的意思是？', options: ['散開', '排列', '堆疊', '打翻'], answer: 1 },
      { question: '部屋を片付けて___。(先整理好)', options: ['おこう', 'あろう', 'しまおう', 'みよう'], answer: 0 },
      { question: '「冷やす」的意思是？', options: ['加熱', '冰鎮', '煮沸', '解凍'], answer: 1 },
    ]
  },

  // ---- N4 第12章：變化表達 ----
  {
    id: 'n4_ch12',
    level: 'N4',
    title: '變化表達（〜ようになる・〜ようにする）',
    grammar: [
      {
        pattern: '〜ようになる',
        explanation: '表示狀態自然變化。「變得能夠.../變得會...」。',
        examples: [
          { jp: '日本語が話せるようになりました。', romaji: 'Nihongo ga hanaseru yō ni narimashita.', zh: '變得會說日語了。' },
          { jp: '毎日運動するようになった。', romaji: 'Mainichi undō suru yō ni natta.', zh: '變得每天都運動了。' },
        ]
      },
      {
        pattern: '〜ようにする',
        explanation: '表示有意識地努力做某事。「盡量...」。',
        examples: [
          { jp: '野菜を食べるようにしています。', romaji: 'Yasai o taberu yō ni shite imasu.', zh: '盡量吃蔬菜。' },
          { jp: '遅刻しないようにしてください。', romaji: 'Chikoku shinai yō ni shite kudasai.', zh: '請盡量不要遲到。' },
        ]
      }
    ],
    vocabulary: [
      { word: '運動', reading: 'うんどう', romaji: 'undō', meaning: '運動' },
      { word: '習慣', reading: 'しゅうかん', romaji: 'shūkan', meaning: '習慣' },
      { word: '健康', reading: 'けんこう', romaji: 'kenkō', meaning: '健康' },
      { word: '注意', reading: 'ちゅうい', romaji: 'chūi', meaning: '注意' },
      { word: '慣れる', reading: 'なれる', romaji: 'nareru', meaning: '習慣了' },
      { word: '上達', reading: 'じょうたつ', romaji: 'jōtatsu', meaning: '進步' },
      { word: '気をつける', reading: 'きをつける', romaji: 'ki o tsukeru', meaning: '小心/注意' },
      { word: '諦める', reading: 'あきらめる', romaji: 'akirameru', meaning: '放棄' },
    ],
    quiz: [
      { question: '日本語が話せるように___ました。(変化)', options: ['し', 'なり', 'あり', 'い'], answer: 1 },
      { question: '野菜を食べるように___います。(努力)', options: ['なって', 'して', 'あって', 'いて'], answer: 1 },
      { question: '「〜ようになる」表示？', options: ['努力做', '自然變化', '命令', '推測'], answer: 1 },
      { question: '「慣れる」的意思是？', options: ['害怕', '習慣了', '喜歡', '討厭'], answer: 1 },
      { question: '遅刻しない___してください。(盡量)', options: ['ようにして', 'ように', 'ことに', 'ために'], answer: 1 },
      { question: '「健康」的讀音是？', options: ['けんこう', 'けんきょう', 'けんごう', 'けんがく'], answer: 0 },
      { question: '毎日運動する___なった。(變得...)', options: ['ことに', 'ように', 'ために', 'だけに'], answer: 1 },
      { question: '「上達」的意思是？', options: ['後退', '停止', '進步', '開始'], answer: 2 },
      { question: '「諦める」的意思是？', options: ['堅持', '挑戰', '努力', '放棄'], answer: 3 },
      { question: '「気をつける」的意思是？', options: ['生氣', '小心', '放鬆', '擔心'], answer: 1 },
    ]
  },

  // ---- N4 第13章：決定表達 ----
  {
    id: 'n4_ch13',
    level: 'N4',
    title: '決定表達（〜ことにする・〜ことになる）',
    grammar: [
      {
        pattern: '〜ことにする',
        explanation: '表示自己主動決定。「決定...」。',
        examples: [
          { jp: '来月から日本語を勉強することにしました。', romaji: 'Raigetsu kara nihongo o benkyō suru koto ni shimashita.', zh: '決定從下個月開始學日語。' },
          { jp: 'お酒を止めることにした。', romaji: 'Osake o yameru koto ni shita.', zh: '決定戒酒。' },
        ]
      },
      {
        pattern: '〜ことになる',
        explanation: '表示被動決定/外部決定的結果。「(被)決定了...」「變成要...」。',
        examples: [
          { jp: '来月、東京に転勤することになりました。', romaji: 'Raigetsu, Tōkyō ni tenkin suru koto ni narimashita.', zh: '下個月要調到東京了。' },
          { jp: '会議は中止になることになった。', romaji: 'Kaigi wa chūshi ni naru koto ni natta.', zh: '會議決定取消了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '転勤', reading: 'てんきん', romaji: 'tenkin', meaning: '調職' },
      { word: '転職', reading: 'てんしょく', romaji: 'tenshoku', meaning: '換工作' },
      { word: '退職', reading: 'たいしょく', romaji: 'taishoku', meaning: '離職' },
      { word: '留学', reading: 'りゅうがく', romaji: 'ryūgaku', meaning: '留學' },
      { word: '引退', reading: 'いんたい', romaji: 'intai', meaning: '退休' },
      { word: '移る', reading: 'うつる', romaji: 'utsuru', meaning: '移動/搬遷' },
      { word: 'お酒', reading: 'おさけ', romaji: 'osake', meaning: '酒' },
      { word: '中止', reading: 'ちゅうし', romaji: 'chūshi', meaning: '中止/取消' },
    ],
    quiz: [
      { question: '日本語を勉強する___にしました。(自己決定)', options: ['こと', 'もの', 'ところ', 'わけ'], answer: 0 },
      { question: '東京に転勤する___になりました。(被決定)', options: ['もの', 'わけ', 'ところ', 'こと'], answer: 3 },
      { question: '「転勤」的意思是？', options: ['退職', '調職', '就職', '轉學'], answer: 1 },
      { question: 'お酒を止める___にした。(自己決定)', options: ['もの', 'こと', 'ところ', 'わけ'], answer: 1 },
      { question: '「ことにする」和「ことになる」的差異？', options: ['沒差', '前者自己決定/後者被決定', '前者更正式', '前者是過去'], answer: 1 },
      { question: '「留学」的意思是？', options: ['旅行', '出差', '留學', '休假'], answer: 2 },
      { question: '会議は中止になる___なった。', options: ['わけに', 'ことに', 'ものに', 'ところに'], answer: 1 },
      { question: '「退職」的意思是？', options: ['升職', '調職', '離職', '就職'], answer: 2 },
      { question: '「引退」的讀音是？', options: ['いんたい', 'ひきたい', 'ひったい', 'いんだい'], answer: 0 },
      { question: '来月から運動する___にします。(打算)', options: ['こと', 'もの', 'ところ', 'わけ'], answer: 0 },
    ]
  },

  // ---- N4 第14章：受身形 ----
  {
    id: 'n4_ch14',
    level: 'N4',
    title: '受身形（被動表達）',
    grammar: [
      {
        pattern: '動詞受身形',
        explanation: '表示被動。「被...」。五段動詞：う段→あれる。一段動詞：去「る」加「られる」。する→される。来る→来られる。',
        examples: [
          { jp: '先生に褒められました。', romaji: 'Sensei ni homeraremashita.', zh: '被老師稱讚了。' },
          { jp: '電車で足を踏まれた。', romaji: 'Densha de ashi o fumareta.', zh: '在電車上腳被踩了。' },
          { jp: '友達に秘密を話された。', romaji: 'Tomodachi ni himitsu o hanasareta.', zh: '秘密被朋友說出去了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '褒める', reading: 'ほめる', romaji: 'homeru', meaning: '稱讚' },
      { word: '叱る', reading: 'しかる', romaji: 'shikaru', meaning: '責罵' },
      { word: '踏む', reading: 'ふむ', romaji: 'fumu', meaning: '踩' },
      { word: '盗む', reading: 'ぬすむ', romaji: 'nusumu', meaning: '偷' },
      { word: '招待する', reading: 'しょうたいする', romaji: 'shōtai suru', meaning: '招待' },
      { word: '秘密', reading: 'ひみつ', romaji: 'himitsu', meaning: '秘密' },
      { word: '財布', reading: 'さいふ', romaji: 'saifu', meaning: '錢包' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣' },
    ],
    quiz: [
      { question: '先生に褒め___ました。(被稱讚)', options: ['て', 'されて', 'られ', 'させ'], answer: 2 },
      { question: '足を踏ま___た。(被踩)', options: ['られ', 'れ', 'せ', 'して'], answer: 1 },
      { question: '「読む」的受身形是？', options: ['読める', '読まれる', '読ませる', '読もう'], answer: 1 },
      { question: '「盗む」的意思是？', options: ['借', '偷', '拾', '買'], answer: 1 },
      { question: '友達に秘密を話さ___た。(被說出去)', options: ['せ', 'れ', 'して', 'め'], answer: 1 },
      { question: '「叱る」的意思是？', options: ['稱讚', '鼓勵', '責罵', '安慰'], answer: 2 },
      { question: '「食べる」的受身形是？', options: ['食べれる', '食べられる', '食べさせる', '食べよう'], answer: 1 },
      { question: 'パーティーに招待さ___ました。', options: ['せ', 'れ', 'して', 'め'], answer: 1 },
      { question: '「財布」的意思是？', options: ['手機', '鑰匙', '錢包', '手錶'], answer: 2 },
      { question: '受身形中，動作者用什麼助詞？', options: ['を', 'で', 'が', 'に'], answer: 3 },
    ]
  },

  // ---- N4 第15章：使役形 ----
  {
    id: 'n4_ch15',
    level: 'N4',
    title: '使役形（讓/叫人做某事）',
    grammar: [
      {
        pattern: '動詞使役形',
        explanation: '表示使某人做...、讓某人做...。五段動詞：う段→あせる。一段動詞：去「る」加「させる」。する→させる。',
        examples: [
          { jp: '先生は学生に本を読ませた。', romaji: 'Sensei wa gakusei ni hon o yomaseta.', zh: '老師讓學生讀書。' },
          { jp: '子供に野菜を食べさせます。', romaji: 'Kodomo ni yasai o tabesasemasu.', zh: '讓小孩吃蔬菜。' },
        ]
      },
      {
        pattern: '〜させてください',
        explanation: '請讓我做...。請求對方允許自己做某事。',
        examples: [
          { jp: '私にやらせてください。', romaji: 'Watashi ni yarasete kudasai.', zh: '請讓我來做。' },
          { jp: '少し考えさせてください。', romaji: 'Sukoshi kangaesasete kudasai.', zh: '請讓我稍微考慮一下。' },
        ]
      }
    ],
    vocabulary: [
      { word: '部下', reading: 'ぶか', romaji: 'buka', meaning: '部下' },
      { word: '上司', reading: 'じょうし', romaji: 'jōshi', meaning: '上司' },
      { word: '掃除する', reading: 'そうじする', romaji: 'sōji suru', meaning: '打掃' },
      { word: '練習', reading: 'れんしゅう', romaji: 'renshū', meaning: '練習' },
      { word: '反省', reading: 'はんせい', romaji: 'hansei', meaning: '反省' },
      { word: '参加', reading: 'さんか', romaji: 'sanka', meaning: '參加' },
      { word: '発表', reading: 'はっぴょう', romaji: 'happyō', meaning: '發表' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考' },
    ],
    quiz: [
      { question: '学生に本を読___せた。(讓...讀)', options: ['ま', 'み', 'め', 'も'], answer: 0 },
      { question: '子供に野菜を食べ___ます。(讓...吃)', options: ['させ', 'される', 'せる', 'される'], answer: 0 },
      { question: '私にやら___ください。(請讓我)', options: ['れて', 'せて', 'して', 'めて'], answer: 1 },
      { question: '「上司」的反義詞是？', options: ['先輩', '後輩', '部下', '同僚'], answer: 2 },
      { question: '「飲む」的使役形是？', options: ['飲まれる', '飲ませる', '飲める', '飲もう'], answer: 1 },
      { question: '「掃除する」的意思是？', options: ['洗濯', '打掃', '料理', '運動'], answer: 1 },
      { question: '少し考え___てください。(請讓我考慮)', options: ['られ', 'させ', 'のり', 'めら'], answer: 1 },
      { question: '「参加」的意思是？', options: ['退出', '觀看', '參加', '辭退'], answer: 2 },
      { question: '「する」的使役形是？', options: ['される', 'させる', 'できる', 'しよう'], answer: 1 },
      { question: '「発表」的讀音是？', options: ['はっぴょう', 'はつぴょう', 'はっひょう', 'はつびょう'], answer: 0 },
    ]
  },

  // ---- 第16章：列舉與建議 ----
  {
    id: 'n4_ch16',
    level: 'N4',
    title: '列舉與建議',
    grammar: [
      {
        pattern: '〜たり〜たりします',
        explanation: '列舉幾個代表性的動作。「有時...有時...」或「做做...做做...」。動詞使用た形加り。',
        examples: [
          { jp: '休みの日は本を読んだり、映画を見たりします。', romaji: 'Yasumi no hi wa hon o yondari, eiga o mitari shimasu.', zh: '假日會看看書、看看電影等。' },
          { jp: '泣いたり笑ったりして、忙しい人だ。', romaji: 'Naitari warattari shite, isogashii hito da.', zh: '又哭又笑的，真是個忙碌的人。' },
        ]
      },
      {
        pattern: '〜たほうがいいです',
        explanation: '給予忠告或建議。「最好...」或「...比較好」。使用動詞た形或ない形。',
        examples: [
          { jp: '薬を飲んだほうがいいですよ。', romaji: 'Kusuri o nonda hō ga ii desu yo.', zh: '最好吃個藥比較好喔。' },
          { jp: 'タバコは吸わないほうがいいです。', romaji: 'Tabako wa suwanai hō ga ii desu.', zh: '最好不要抽菸。' },
        ]
      }
    ],
    vocabulary: [
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣' },
      { word: '笑う', reading: 'わらう', romaji: 'warau', meaning: '笑' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: 'タバコ', reading: 'たばこ', romaji: 'tabako', meaning: '香菸' },
      { word: '吸う', reading: 'すう', romaji: 'sū', meaning: '吸(菸)' },
      { word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: '趕快' },
      { word: '休講', reading: 'きゅうこう', romaji: 'kyūkō', meaning: '停課' },
      { word: '注意', reading: 'ちゅうい', romaji: 'chūi', meaning: '注意' },
    ],
    quiz: [
      { question: '本を___、映画を見たりします。', options: ['読みたり', '読んだり', '読むたり', '読んでり'], answer: 1 },
      { question: '薬を___ほうがいいですよ。', options: ['飲む', '飲んで', '飲んだ', '飲めます'], answer: 2 },
      { question: '「泣く」的反義詞是？', options: ['怒る', '笑う', '喜ぶ', '悲しむ'], answer: 1 },
      { question: '「薬」的讀音是？', options: ['くすり', 'くつり', 'かがく', 'いしゃ'], answer: 0 },
      { question: 'タバコは___ほうがいいです。(建議不要吸)', options: ['吸う', '吸って', '吸わなかった', '吸わない'], answer: 3 },
      { question: '「吸う」的意思是？', options: ['吹', '吸', '吐', '嚼'], answer: 1 },
      { question: '泣い___笑ったりします。', options: ['て', 'で', 'たり', 'だり'], answer: 2 },
      { question: '「急ぐ」的意思是？', options: ['等待', '趕快', '遲到', '慢慢來'], answer: 1 },
      { question: '「注意」的讀音是？', options: ['ちゅうい', 'ちゅい', 'ちょうい', 'しゅうい'], answer: 0 },
      { question: '早く寝たほうが___。', options: ['いいです', 'だめです', 'むりです', 'むだです'], answer: 0 },
    ]
  },

  // ---- 第17章：時間前後關係 ----
  {
    id: 'n4_ch17',
    level: 'N4',
    title: '時間前後關係',
    grammar: [
      {
        pattern: '〜前（まえ）に',
        explanation: '在...之前。動詞辭書形＋前に，名詞＋の＋前に。',
        examples: [
          { jp: '寝る前に、本を読みます。', romaji: 'Neru mae ni, hon o yomimasu.', zh: '睡覺前看書。' },
          { jp: '食事の前に手を洗います。', romaji: 'Shokuji no mae ni te o araimasu.', zh: '吃飯前洗手。' },
        ]
      },
      {
        pattern: '〜後（あと）で / 〜てから',
        explanation: '在...之後。後で接動詞た形或名詞の。てから接動詞て形(強調順序)。',
        examples: [
          { jp: '仕事の後で、飲みに行きましょう。', romaji: 'Shigoto no ato de, nomi ni ikimashō.', zh: '下班後去喝一杯吧。' },
          { jp: '手を洗ってから、食べます。', romaji: 'Te o aratte kara, tabemasu.', zh: '洗手之後才吃。' },
        ]
      }
    ],
    vocabulary: [
      { word: '前', reading: 'まえ', romaji: 'mae', meaning: '前' },
      { word: '後', reading: 'あと', romaji: 'ato', meaning: '後' },
      { word: '食事', reading: 'しょくじ', romaji: 'shokuji', meaning: '用餐' },
      { word: '洗う', reading: 'あらう', romaji: 'arau', meaning: '洗' },
      { word: '仕事', reading: 'しごと', romaji: 'shigoto', meaning: '工作' },
      { word: '散歩', reading: 'さんぽ', romaji: 'sanpo', meaning: '散步' },
      { word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: '跑' },
      { word: '戻る', reading: 'もどる', romaji: 'modoru', meaning: '返回' },
    ],
    quiz: [
      { question: '寝る___に、本を読みます。', options: ['後', '前', '間', '時'], answer: 1 },
      { question: '食事___前に手を洗います。', options: ['が', 'を', 'に', 'の'], answer: 3 },
      { question: '手を___から、食べます。(洗之後)', options: ['洗う', '洗い', '洗って', '洗った'], answer: 2 },
      { question: '仕事の___で、飲みに行きましょう。(之後)', options: ['前', '後', '中', '間'], answer: 1 },
      { question: '「洗う」的意思是？', options: ['擦', '洗', '整理', '弄髒'], answer: 1 },
      { question: '「食事」的讀音是？', options: ['しょくじ', 'しょくち', 'じきじ', 'しょくごと'], answer: 0 },
      { question: '「散歩」的意思是？', options: ['跑步', '跳舞', '散步', '爬山'], answer: 2 },
      { question: 'ご飯を食べた___で、薬を飲みます。', options: ['前', '後', '時', '中'], answer: 1 },
      { question: '「戻る」的意思是？', options: ['出發', '前進', '返回', '迷路'], answer: 2 },
      { question: '「走る」的讀音是？', options: ['あるく', 'はしる', 'とぶ', 'およぐ'], answer: 1 },
    ]
  },

  // ---- 第18章：程度與難易度 ----
  {
    id: 'n4_ch18',
    level: 'N4',
    title: '程度與難易度',
    grammar: [
      {
        pattern: '〜すぎます',
        explanation: '表示動作或狀態程度過頭。「太過於...」。動詞去掉ます，い形容詞去掉い加すぎます。',
        examples: [
          { jp: '夕ご飯を食べすぎました。', romaji: 'Yūgohan o tabesugimashita.', zh: '晚餐吃太多了。' },
          { jp: 'この靴は大きすぎます。', romaji: 'Kono kutsu wa ōkisugimasu.', zh: '這雙鞋太大了。' },
        ]
      },
      {
        pattern: '〜やすい / 〜にくい',
        explanation: '表示容易或困難。「容易... / 難以...」。接在動詞去掉ます之後。',
        examples: [
          { jp: 'この薬は飲みやすいです。', romaji: 'Kono kusuri wa nomiyasui desu.', zh: '這藥很容易吃。' },
          { jp: 'この本は漢字が多くて読みにくいです。', romaji: 'Kono hon wa kanji ga ōkute yominikui desu.', zh: '這本書漢字很多，很難讀。' },
        ]
      }
    ],
    vocabulary: [
      { word: '夕ご飯', reading: 'ゆうごはん', romaji: 'yūgohan', meaning: '晚餐' },
      { word: '大きすぎる', reading: 'おおきすぎる', romaji: 'ōkisugiru', meaning: '太大' },
      { word: '飲みやすい', reading: 'のみやすい', romaji: 'nomiyasui', meaning: '好喝/容易吃' },
      { word: '読みにくい', reading: 'よみにくい', romaji: 'yominikui', meaning: '難讀' },
      { word: '使いやすい', reading: 'つかいやすい', romaji: 'tsukaiyasui', meaning: '好用' },
      { word: '歩きにくい', reading: 'あるきにくい', romaji: 'arukinikui', meaning: '難走' },
      { word: '重い', reading: 'おもい', romaji: 'omoi', meaning: '重的' },
      { word: '軽い', reading: 'かるい', romaji: 'karui', meaning: '輕的' },
    ],
    quiz: [
      { question: '夕ご飯を食べ___ました。(吃太多)', options: ['多い', 'すぎ', 'です', 'やすい'], answer: 1 },
      { question: 'この靴は大き___ます。(太大)', options: ['すぎ', 'く', 'のみ', 'です'], answer: 0 },
      { question: 'このペンは使い___です。(好用)', options: ['すぎ', 'にくい', 'やすい', 'ます'], answer: 2 },
      { question: 'この本は文字が小さくて読み___です。(難讀)', options: ['やすい', 'にくい', 'すぎ', 'ない'], answer: 1 },
      { question: '「重い」的反義詞是？', options: ['軽い', '遅い', '太い', '細い'], answer: 0 },
      { question: '「夕ご飯」的意思是？', options: ['早餐', '午餐', '晚餐', '宵夜'], answer: 2 },
      { question: '「使いやすい」的讀音是？', options: ['つかやすい', 'つかいやすい', 'つくやすい', 'つかいにくい'], answer: 1 },
      { question: '雨の日は歩き___です。(難走)', options: ['すぎ', 'やすい', 'にくい', 'ない'], answer: 2 },
      { question: '「軽い」的意思是？', options: ['重的', '輕的', '長的', '短的'], answer: 1 },
      { question: 'お酒を飲み___。(喝太多)', options: ['すぎました', 'やすかったです', 'にくかったです', 'たかったです'], answer: 0 },
    ]
  },

  // ---- 第19章：疑問子句嵌入 ----
  {
    id: 'n4_ch19',
    level: 'N4',
    title: '疑問子句嵌入',
    grammar: [
      {
        pattern: '疑問詞〜か、〜',
        explanation: '將帶有疑問詞的句子當作名詞子句嵌入。「知道誰會來嗎？」。普通形加か。',
        examples: [
          { jp: '誰が来るか、知っていますか。', romaji: 'Dare ga kuru ka, shitte imasu ka.', zh: '你知道誰會來嗎？' },
          { jp: '会議は何時に終わるか、分かりません。', romaji: 'Kaigi wa nan-ji ni owaru ka, wakarimasen.', zh: '我不知道會議幾點結束。' },
        ]
      },
      {
        pattern: '〜かどうか、〜',
        explanation: '將沒有疑問詞的句子嵌入。「是否...」。如果是名詞或な形容詞，不加だ。',
        examples: [
          { jp: '明日雨が降るかどうか、分かりません。', romaji: 'Ashita ame ga furu ka dō ka, wakarimasen.', zh: '不知道明天是否會下雨。' },
          { jp: '本当かどうか、調べてください。', romaji: 'Hontō ka dō ka, shirabete kudasai.', zh: '請調查一下是否屬實。' },
        ]
      }
    ],
    vocabulary: [
      { word: '終わる', reading: 'おわる', romaji: 'owaru', meaning: '結束' },
      { word: '降る', reading: 'ふる', romaji: 'furu', meaning: '降下(雨/雪)' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的/屬實' },
      { word: '調べる', reading: 'しらべる', romaji: 'shiraberu', meaning: '調查' },
      { word: '知る', reading: 'しる', romaji: 'shiru', meaning: '知道' },
      { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: '會議' },
      { word: '明日', reading: 'あした', romaji: 'ashita', meaning: '明天' },
      { word: '天気', reading: 'てんき', romaji: 'tenki', meaning: '天氣' },
    ],
    quiz: [
      { question: '誰が来る___、知っていますか。', options: ['か', 'かどうか', 'が', 'を'], answer: 0 },
      { question: '明日雨が降る___、分かりません。(是否)', options: ['の', 'から', 'かどうか', 'か'], answer: 2 },
      { question: '「調べる」的意思是？', options: ['準備', '調查', '測量', '隱藏'], answer: 1 },
      { question: '本当___、調べてください。', options: ['か', 'だか', 'かどうか', 'なだか'], answer: 2 },
      { question: '「降る」的意思是？', options: ['吹', '降下', '停止', '開始'], answer: 1 },
      { question: '何時に終わる___、分かりません。', options: ['かどうか', 'か', 'の', 'が'], answer: 1 },
      { question: '「本当」的反義詞可以考慮為？', options: ['嘘', '真実', '事実', '真理'], answer: 0 },
      { question: '「会議」的讀音是？', options: ['かいしゃ', 'かいぎ', 'かいわ', 'かいどう'], answer: 1 },
      { question: 'テストが難しい___、心配です。', options: ['か', 'だか', 'かどうか', 'なだか'], answer: 2 },
      { question: '「知る」的正在進行形「知っている」意思？', options: ['忘記', '知道著/了解', '剛得知', '想知道'], answer: 1 },
    ]
  },

  // ---- 第20章：說明與傳聞 ----
  {
    id: 'n4_ch20',
    level: 'N4',
    title: '說明與傳聞',
    grammar: [
      {
        pattern: '〜んです',
        explanation: '用於強調原因或說明狀況，語氣較強。名詞和な形容詞要加「な」。',
        examples: [
          { jp: 'どうして遅れたんですか。', romaji: 'Dōshite okureta n desu ka.', zh: '為什麼遲到了呢？' },
          { jp: 'バスが来なかったんです。', romaji: 'Basu ga konakatta n desu.', zh: '因為公車沒來啊。' },
        ]
      },
      {
        pattern: '普通形＋そうです（傳聞）',
        explanation: '「聽說...」。動詞、形容詞、名詞皆接普通體。與樣態的「そうです」不同。',
        examples: [
          { jp: '天気予報によると、明日は雨だそうです。', romaji: 'Tenkiyohō ni yoru to, ashita wa ame da sō desu.', zh: '根據天氣預報，明天聽說會下雨。' },
          { jp: '山田さんは来月結婚するそうです。', romaji: 'Yamada-san wa raigetsu kekkon suru sō desu.', zh: '聽說山田先生下個月要結婚。' },
        ]
      }
    ],
    vocabulary: [
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到/延遲' },
      { word: '天気予報', reading: 'てんきよほう', romaji: 'tenkiyohō', meaning: '天氣預報' },
      { word: '来月', reading: 'らいげつ', romaji: 'raigetsu', meaning: '下個月' },
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚' },
      { word: 'バス', reading: 'バス', romaji: 'basu', meaning: '公車' },
      { word: 'どうして', reading: 'どうして', romaji: 'dōshite', meaning: '為什麼' },
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: '雨' },
      { word: '辞める', reading: 'やめる', romaji: 'yameru', meaning: '辭職/放棄' },
    ],
    quiz: [
      { question: 'どうして遅れた___ですか。', options: ['の', 'ん', 'か', 'な'], answer: 1 },
      { question: '明日は雨___そうです。(聽說)', options: ['だ', 'な', 'の', '（不加）'], answer: 0 },
      { question: '「遅れる」的意思是？', options: ['早到', '生病', '遲到', '請假'], answer: 2 },
      { question: 'バスが来なかった___です。', options: ['ん', 'の', 'から', 'ため'], answer: 0 },
      { question: '山田さんは来月結婚___そうです。', options: ['し', 'する', 'して', 'しよう'], answer: 1 },
      { question: '「天気予報」的意思是？', options: ['新聞報導', '天氣預報', '報紙', '交通資訊'], answer: 1 },
      { question: '「どうして」的同義詞是？', options: ['どこで', 'いつ', 'なぜ', 'だれが'], answer: 2 },
      { question: '「来月」的讀音是？', options: ['らいがち', 'らいげつ', 'こんげつ', 'せんげつ'], answer: 1 },
      { question: '彼は会社を辞める___そうです。', options: ['だ', 'な', '（不加）', 'の'], answer: 2 },
      { question: '「辞める」的意思是？', options: ['開始', '休息', '辭職', '繼續'], answer: 2 },
    ]
  },

  // ===================== N3 (20 章完整版) =====================

  // ---- N3 第1章：原因與理由 ----
  {
    id: 'n3_ch1',
    level: 'N3',
    title: '原因與理由',
    grammar: [
      {
        pattern: '〜おかげで',
        explanation: '多虧了...。用於產生好結果的原因，帶有感謝語氣。',
        examples: [
          { jp: '先生のおかげで、合格できました。', romaji: 'Sensei no okage de, gōkaku dekimashita.', zh: '多虧了老師，才能合格。' },
          { jp: '薬のおかげで、元気になりました。', romaji: 'Kusuri no okage de, genki ni narimashita.', zh: '多虧了藥，才恢復精神。' },
        ]
      },
      {
        pattern: '〜せいで',
        explanation: '都怪...。用於產生壞結果的原因，帶有責備或遺憾語氣。',
        examples: [
          { jp: '雨のせいで、試合が中止になった。', romaji: 'Ame no sei de, shiai ga chūshi ni natta.', zh: '都怪下雨，比賽取消了。' },
          { jp: '寝坊したせいで、遅刻した。', romaji: 'Nebō shita sei de, chikoku shita.', zh: '因為睡過頭，所以遲到了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '合格', reading: 'ごうかく', romaji: 'gōkaku', meaning: '合格/通過' },
      { word: '中止', reading: 'ちゅうし', romaji: 'chūshi', meaning: '中止/取消' },
      { word: '遅刻', reading: 'ちこく', romaji: 'chikoku', meaning: '遲到' },
      { word: '寝坊', reading: 'ねぼう', romaji: 'nebō', meaning: '睡過頭' },
      { word: '努力', reading: 'どりょく', romaji: 'doryoku', meaning: '努力' },
      { word: '失敗', reading: 'しっぱい', romaji: 'shippai', meaning: '失敗' },
      { word: '成功', reading: 'せいこう', romaji: 'seikō', meaning: '成功' },
      { word: '原因', reading: 'げんいん', romaji: 'gen\'in', meaning: '原因' },
    ],
    quiz: [
      { question: '先生の___で、合格できました。(正面)', options: ['せい', 'おかげ', 'ため', 'わけ'], answer: 1 },
      { question: '雨の___で、試合が中止になった。(負面)', options: ['おかげ', 'ため', 'せい', 'わけ'], answer: 2 },
      { question: '「中止」的意思是？', options: ['開始', '取消', '延長', '結束'], answer: 1 },
      { question: '「遅刻」的讀音是？', options: ['ちこく', 'おそこく', 'ちきん', 'おそい'], answer: 0 },
      { question: '寝坊した___で、遅刻した。', options: ['おかげ', 'せい', 'だけ', 'ほど'], answer: 1 },
      { question: '「努力」的意思是？', options: ['放棄', '成功', '努力', '失敗'], answer: 2 },
      { question: '薬の___で、元気になりました。', options: ['せい', 'おかげ', 'わけ', 'くせ'], answer: 1 },
      { question: '「失敗」的反義詞是？', options: ['努力', '中止', '原因', '成功'], answer: 3 },
      { question: '「〜おかげで」用於？', options: ['負面原因', '正面原因', '所有原因', '不確定原因'], answer: 1 },
      { question: '「合格」的意思是？', options: ['不及格', '通過', '考試', '畢業'], answer: 1 },
    ]
  },

  // ---- N3 第2章：推斷與樣態 ----
  {
    id: 'n3_ch2',
    level: 'N3',
    title: '推斷與樣態',
    grammar: [
      {
        pattern: '〜ようだ / 〜みたいだ',
        explanation: '好像...。根據觀察做出的推測。「みたいだ」較口語。',
        examples: [
          { jp: '彼は忙しいようだ。', romaji: 'Kare wa isogashii yō da.', zh: '他好像很忙。' },
          { jp: 'このケーキ、石みたいに硬い。', romaji: 'Kono kēki, ishi mitai ni katai.', zh: '這蛋糕像石頭一樣硬。' },
        ]
      },
      {
        pattern: '〜らしい',
        explanation: '似乎...。表示基於客觀根據的推測，或表示「具有該事物的典型特徵」。',
        examples: [
          { jp: '誰もいない。留守らしい。', romaji: 'Dare mo inai. Rusu rashii.', zh: '一個人都沒有，似乎是不在。' },
          { jp: '今日は春らしい天気だ。', romaji: 'Kyō wa haru rashii tenki da.', zh: '今天是充滿春天气息的天氣。' },
        ]
      }
    ],
    vocabulary: [
      { word: '留守', reading: 'るす', romaji: 'rusu', meaning: '不在家' },
      { word: '硬い', reading: 'かたい', romaji: 'katai', meaning: '硬的' },
      { word: '柔らかい', reading: 'やわらかい', romaji: 'yawarakai', meaning: '軟的' },
      { word: '男らしい', reading: 'おとこらしい', romaji: 'otokorashii', meaning: '有男子氣概的' },
      { word: '女らしい', reading: 'おんならしい', romaji: 'onnarashii', meaning: '有女人味的' },
      { word: '様子', reading: 'ようす', romaji: 'yōsu', meaning: '樣子/情況' },
      { word: '石', reading: 'いし', romaji: 'ishi', meaning: '石頭' },
      { word: '天気', reading: 'てんき', romaji: 'tenki', meaning: '天氣' },
    ],
    quiz: [
      { question: '彼は忙しい___だ。(好像)', options: ['はず', 'よう', 'べき', 'わけ'], answer: 1 },
      { question: 'この石___硬いパン。(像石頭一樣)', options: ['よう', 'みたい', 'はず', 'そう'], answer: 1 },
      { question: '今日は春___天気ですね。(像春天般的)', options: ['みたい', 'よう', 'らしい', 'そう'], answer: 2 },
      { question: '誰もいない。留守___。(似乎)', options: ['よう', 'みたい', 'らしい', 'はず'], answer: 2 },
      { question: '「留守」的意思是？', options: ['留校', '留學', '不在家', '看門'], answer: 2 },
      { question: '「硬い」的反義詞是？', options: ['冷たい', '柔らかい', '重い', '軽い'], answer: 1 },
      { question: 'あの人は男___。(有男子氣概)', options: ['みたい', 'らしい', 'っぽい', 'ようだ'], answer: 1 },
      { question: '「様子」的意思是？', options: ['要求', '預定', '樣子/情況', '理由'], answer: 2 },
      { question: '「〜みたいだ」的反義是？', options: ['不僅如此', '比較口語的推測', '強烈的命令', '絕對的肯定'], answer: 1 },
      { question: '「石」的讀音是？', options: ['いし', 'いわ', 'すな', 'つち'], answer: 0 },
    ]
  },

  // ---- N3 第3章：確信與必然 ----
  {
    id: 'n3_ch3',
    level: 'N3',
    title: '確信與必然',
    grammar: [
      {
        pattern: '〜はずだ',
        explanation: '應該...。基於客觀事實或邏輯做出的強烈推斷。',
        examples: [
          { jp: '彼はもう着いたはずだ。', romaji: 'Kare wa mō tsuita hazu da.', zh: '他應該已經到了。' },
          { jp: 'この店は安いはずだ。', romaji: 'Kono mise wa yasui hazu da.', zh: '這家店應該很便宜。' },
        ]
      },
      {
        pattern: '〜わけがない',
        explanation: '不可能...。強烈否定某事發生的可能性。',
        examples: [
          { jp: '彼が嘘をつくわけがない。', romaji: 'Kare ga uso o tsuku wake ga nai.', zh: '他不可能說謊。' },
          { jp: 'こんな難しい問題、子供に解けるわけがない。', romaji: 'Konna muzukashii mondai, kodomo ni tokeru wake ga nai.', zh: '這麼難的問題，小孩不可能解得出來。' },
        ]
      }
    ],
    vocabulary: [
      { word: '噓', reading: 'うそ', romaji: 'uso', meaning: '謊言' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的/事實' },
      { word: '問題', reading: 'もんだい', romaji: 'mondai', meaning: '問題' },
      { word: '解ける', reading: 'とける', romaji: 'tokeru', meaning: '解開/融化' },
      { word: '確信', reading: 'かくしん', romaji: 'kakushin', meaning: '確信' },
      { word: '可能', reading: 'かのう', romaji: 'kanō', meaning: '可能' },
      { word: '不可能', reading: 'ふかのう', romaji: 'fukanō', meaning: '不可能' },
      { word: '信頼', reading: 'しんらい', romaji: 'shinrai', meaning: '信任' },
    ],
    quiz: [
      { question: '彼はもう出発した___だ。(應該)', options: ['はず', 'よう', 'べき', 'わけ'], answer: 0 },
      { question: '彼が嘘をつく___がない。(不可能)', options: ['はず', 'わけ', 'こと', 'もの'], answer: 1 },
      { question: '「噓」的意思是？', options: ['秘密', '笑話', '謊言', '事實'], answer: 2 },
      { question: '「解ける」的讀音是？', options: ['わかる', 'とける', 'なける', 'まける'], answer: 1 },
      { question: '「〜はずだ」表示？', options: ['強烈推斷', '疑問', '請求', '命令'], answer: 0 },
      { question: 'こんなに食べたから、お腹が空く___。(不可能會餓)', options: ['はずがない', 'わけがない', 'どちらでもよい', '以上、両方'], answer: 3 },
      { question: '「信頼」的意思是？', options: ['依賴', '信任', '拜託', '拒絕'], answer: 1 },
      { question: '「本当」的反義詞與下列何者最接近？', options: ['真剣', '嘘', '確約', '実際'], answer: 1 },
      { question: 'この絵は彼が描いた___。(應該是)', options: ['はずだ', 'わけだ', 'ことだ', 'ものだ'], answer: 0 },
      { question: '「可能」的意思是？', options: ['能力', '可能', '可以', '能夠'], answer: 1 },
    ]
  },

  // ---- N3 第4章：條件與假定 ----
  {
    id: 'n3_ch4',
    level: 'N3',
    title: '條件與假定',
    grammar: [
      {
        pattern: '〜としたら / 〜とすれば',
        explanation: '假設...的話。表示純粹的假設。',
        examples: [
          { jp: 'もし明日地球が滅亡するとしたら、何をする？', romaji: 'Moshi ashita chikyū ga metsubō suru to shitara, nani o suru?', zh: '如果明天地球毀滅的話，你要做什麼？' },
          { jp: 'その話が本当だとすれば、大変だ。', romaji: 'Sono hanashi ga hontō da to sureba, taihen da.', zh: '如果那件事是真的話，那可不得了。' },
        ]
      },
      {
        pattern: '〜ばよかった',
        explanation: '要是...就好了。表示對已發生的事情感到後悔。',
        examples: [
          { jp: 'もっと勉強すればよかった。', romaji: 'Motto benkyō sureba yokatta.', zh: '要是多唸點書就好了。' },
          { jp: 'あんなこと言わなければよかった。', romaji: 'Anna koto iwanakereba yokatta.', zh: '要是沒說那種話就好了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '地球', reading: 'ちきゅう', romaji: 'chikyū', meaning: '地球' },
      { word: '滅亡', reading: 'めつぼう', romaji: 'metsubō', meaning: '滅亡' },
      { word: '大変', reading: 'たいへん', romaji: 'taihen', meaning: '糟糕/辛苦' },
      { word: '後悔', reading: 'こうかい', romaji: 'kōkai', meaning: '後悔' },
      { word: 'もし', reading: 'もし', romaji: 'moshi', meaning: '如果' },
      { word: '宝くじ', reading: 'たからくじ', romaji: 'takarakuji', meaning: '彩券' },
      { word: '当たる', reading: 'あたる', romaji: 'ataru', meaning: '中(獎)/碰觸' },
      { word: '残念', reading: 'ざんねん', romaji: 'zannen', meaning: '遺憾' },
    ],
    quiz: [
      { question: '宇宙に行ける___、行きたいですか。', options: ['としたら', 'となると', 'といえば', 'とおもえば'], answer: 0 },
      { question: 'もっと早く起きれ___。(要是...就好了)', options: ['ばよかった', 'たらよかった', 'とよかった', 'てよかった'], answer: 0 },
      { question: '「後悔」的意思是？', options: ['後來', '後退', '後悔', '後面'], answer: 2 },
      { question: '「大変」的意思是？', options: ['很大', '變化', '糟糕/辛苦', '容易'], answer: 2 },
      { question: 'あんな物を買わなけれ___。(要是沒買就好了)', options: ['ばよかった', 'てよかった', 'とよかった', 'たらよかった'], answer: 0 },
      { question: '「宝くじ」的意思是？', options: ['垃圾', '寶石', '彩券', '箱子'], answer: 2 },
      { question: 'もし宝くじが___としたら。(中獎)', options: ['当たった', '外れた', '当たらない', '外れない'], answer: 0 },
      { question: '「残念」的意思是？', options: ['殘留', '遺憾', '殘酷', '剩下'], answer: 1 },
      { question: 'その話が本当だ___、大変だ。(假設)', options: ['とすれば', 'となると', 'といえば', 'とおもえば'], answer: 0 },
      { question: '「〜ばよかった」表示？', options: ['假定', '命令', '後悔', '建議'], answer: 2 },
    ]
  },

  // ---- N3 第5章：目的與期待 ----
  {
    id: 'n3_ch5',
    level: 'N3',
    title: '目的與期待',
    grammar: [
      {
        pattern: '〜ために',
        explanation: '為了...。表示明確的目的。後接意志性動詞。',
        examples: [
          { jp: '家を買うために、貯金しています。', romaji: 'Ie o kau tame ni, chokin shite imasu.', zh: '為了買房子正在存錢。' },
          { jp: '健康のために、毎日歩いています。', romaji: 'Kenkō no tame ni, mainichi aruite imasu.', zh: '為了健康每天都在走路。' },
        ]
      },
      {
        pattern: '〜ように',
        explanation: '為了能夠...。表示期待達到的狀態。前接非意志動詞或可能形。',
        examples: [
          { jp: '忘れないように、メモします。', romaji: 'Wasurenai yō ni, memo shimasu.', zh: '為了不忘記而做筆記。' },
          { jp: 'みんなに聞こえるように、大きく話す。', romaji: 'Minna ni kikoeru yō ni, ōkiku hanasu.', zh: '為了讓大家都聽得見而大聲說話。' },
        ]
      }
    ],
    vocabulary: [
      { word: '貯金', reading: 'ちょきん', romaji: 'chokin', meaning: '存錢/存款' },
      { word: '健康', reading: 'けんこう', romaji: 'kenkō', meaning: '健康' },
      { word: 'メモ', reading: 'メモ', romaji: 'memo', meaning: '筆記' },
      { word: '聞こえる', reading: 'きこえる', romaji: 'kikoeru', meaning: '聽得見' },
      { word: '見える', reading: 'みえる', romaji: 'mieru', meaning: '看得見' },
      { word: '目標', reading: 'もくひょう', romaji: 'mokuhyō', meaning: '目標' },
      { word: '目的', reading: 'もくてき', romaji: 'mokuteki', meaning: '目的' },
      { word: '頑張る', reading: 'がんばる', romaji: 'ganbaru', meaning: '努力' },
    ],
    quiz: [
      { question: '家を買う___、貯金している。(為了)', options: ['ように', 'ために', 'ことに', 'ものに'], answer: 1 },
      { question: '忘れない___、メモしておく。(為了能)', options: ['ために', 'ように', 'ことに', 'ものに'], answer: 1 },
      { question: '「貯金」的意思是？', options: ['借錢', '還錢', '存錢', '花錢'], answer: 2 },
      { question: '「聞こえる」與「聞く」的差異？', options: ['沒差', '聞こえる是自然聽見/聞く是主動聽', '聞こえる更正式', '聞こえる是命令'], answer: 1 },
      { question: '日本語が話せる___、毎日練習する。', options: ['ために', 'ように', 'ことに', 'ものに'], answer: 1 },
      { question: '「目標」的意思是？', options: ['標示', '樹木', '目標', '目的'], answer: 2 },
      { question: '家族の___、一生懸命働く。(為了)', options: ['ように', 'ために', 'ことに', 'ものに'], answer: 1 },
      { question: '「頑張る」的讀音是？', options: ['がんばる', 'がんばれる', 'がんばるる', 'がんぱる'], answer: 0 },
      { question: 'よく見える___、前の席に座る。', options: ['ために', 'ように', 'ことに', 'ものに'], answer: 1 },
      { question: '名詞接續「ために」要加？', options: ['が', 'の', 'を', 'に'], answer: 1 },
    ]
  },

  // ---- N3 第6章：關聯與範圍 ----
  {
    id: 'n3_ch6',
    level: 'N3',
    title: '關聯與範圍',
    grammar: [
      {
        pattern: '〜に関して / 〜に関する',
        explanation: '關於...。比「〜について」更正式，多用於書面或演講。',
        examples: [
          { jp: 'この問題に関して、意見があります。', romaji: 'Kono mondai ni kanshite, iken ga arimasu.', zh: '關於這個問題，我有意見。' },
          { jp: '環境に関する本を読んだ。', romaji: 'Kankyō ni kansuru hon o yonda.', zh: '讀了關於環境的書。' },
        ]
      },
      {
        pattern: '〜において / 〜における',
        explanation: '在...（場所、時間、狀況）。相當於「で」，非常正式的表達。',
        examples: [
          { jp: '会議は第一会議室において行われます。', romaji: 'Kaigi wa daiichi kaigishitsu ni oite okonawaremasu.', zh: '會議在第一會議室舉行。' },
          { jp: '現代社会における深刻な問題だ。', romaji: 'Gendai shakai ni okeru shinkoku na mondai da.', zh: '這是現代社會中嚴重的問題。' },
        ]
      }
    ],
    vocabulary: [
      { word: '意見', reading: 'いけん', romaji: 'iken', meaning: '意見' },
      { word: '環境', reading: 'かんきょう', romaji: 'kankyō', meaning: '環境' },
      { word: '会議室', reading: 'かいぎしつ', romaji: 'kaigishitsu', meaning: '會議室' },
      { word: '現代', reading: 'げんだい', romaji: 'gendai', meaning: '現代' },
      { word: '深刻', reading: 'しんこく', romaji: 'shinkoku', meaning: '嚴重的' },
      { word: '社会', reading: 'しゃかい', romaji: 'shakai', meaning: '社會' },
      { word: '行われる', reading: 'おこなわれる', romaji: 'okonawareru', meaning: '被舉行' },
      { word: '問題', reading: 'もんだい', romaji: 'mondai', meaning: '問題' },
    ],
    quiz: [
      { question: 'この計画___、質問があります。(關於)', options: ['に対して', 'に関して', 'によって', 'において'], answer: 1 },
      { question: '入学式はホール___行われます。(在)', options: ['に対して', 'に関して', 'によって', 'において'], answer: 3 },
      { question: '「意見」的意思是？', options: ['意見', '意義', '意思', '意識'], answer: 0 },
      { question: '「環境」的讀音是？', options: ['かんきょう', 'かんこく', 'かんこう', 'かんせい'], answer: 0 },
      { question: '環境に___本を読む。(關於...的)', options: ['関して', '関する', 'おいて', 'おける'], answer: 1 },
      { question: '「深刻」的意思是？', options: ['深夜', '深淺', '嚴重的', '深色的'], answer: 2 },
      { question: '学校に___、携帯は禁止だ。(在)', options: ['おいて', 'おける', '関して', '関する'], answer: 0 },
      { question: '「現代」的反義詞是？', options: ['現在', '過去', '未来', '近代'], answer: 1 },
      { question: '「行われる」的意思是？', options: ['去', '舉行', '行為', '停止'], answer: 1 },
      { question: '「〜について」較客氣正式的說法是？', options: ['に関して', 'において', 'に対して', 'によって'], answer: 0 },
    ]
  },

  // ---- N3 第7章：立場與判斷 ----
  {
    id: 'n3_ch7',
    level: 'N3',
    title: '立場與判斷',
    grammar: [
      {
        pattern: '〜にとって',
        explanation: '對...而言。表示從某個立場來看。',
        examples: [
          { jp: '私にとって、家族は一番大切です。', romaji: 'Watashi ni totte, kazoku wa ichiban taisetsu desu.', zh: '對我而言，家人是最重要的。' },
          { jp: '子供にとって、遊びは学びだ。', romaji: 'Kodomo ni totte, asobi wa manabi da.', zh: '對小孩而言，玩耍就是學習。' },
        ]
      },
      {
        pattern: '〜にしては',
        explanation: '以...來說。表示與該條件通常應有的預期不同。',
        examples: [
          { jp: '外国人にしては、日本語が上手だ。', romaji: 'Gaikokujin ni shite wa, nihongo ga jōzu da.', zh: '以外國人來說，日文真好。' },
          { jp: '初めてにしては、よくできた。', romaji: 'Hajimete ni shite wa, yoku dekita.', zh: '以第一次來說，做得很好。' },
        ]
      }
    ],
    vocabulary: [
      { word: '大切', reading: 'たいせつ', romaji: 'taisetsu', meaning: '重要的' },
      { word: '遊び', reading: 'あそび', romaji: 'asobi', meaning: '玩耍' },
      { word: '学び', reading: 'まなび', romaji: 'manabi', meaning: '學習' },
      { word: '外国人', reading: 'がいこくじん', romaji: 'gaikokujin', meaning: '外國人' },
      { word: '初めて', reading: 'はじめて', romaji: 'hajimete', meaning: '第一次' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: '不擅長' },
      { word: '価値', reading: 'かち', romaji: 'kachi', meaning: '價值' },
    ],
    quiz: [
      { question: '私に___、これは大切な思い出だ。(對我來說)', options: ['たいして', 'とって', 'ついて', 'しては'], answer: 1 },
      { question: '子供に___、よく知っているね。(以小孩來說)', options: ['しては', 'とって', 'ついて', 'たいして'], answer: 0 },
      { question: '「大切」的意思是？', options: ['大概', '大方', '重要的', '大的'], answer: 2 },
      { question: '「学び」的動詞原形是？', options: ['学ぶ', '遊ぶ', '読む', '書く'], answer: 0 },
      { question: '学生に___高すぎる。(對學生而言)', options: ['しては', 'とって', 'ついて', 'たいして'], answer: 1 },
      { question: 'あの人は日本人___、漢字を知らない。', options: ['にしては', 'にとって', 'について', 'にたいして'], answer: 0 },
      { question: '「初めて」的意思是？', options: ['剛剛', '初次/第一次', '開始', '最初'], answer: 1 },
      { question: '「上手」的反義詞是？', options: ['下品', '下手', '下級', '下落'], answer: 1 },
      { question: '環境問題は人類に___大きな課題だ。', options: ['しては', 'とって', 'ついて', 'たいして'], answer: 1 },
      { question: '「価値」的意思是？', options: ['價格', '價值', '花費', '時間'], answer: 1 },
    ]
  },

  // ---- N3 第8章：對比與替代 ----
  {
    id: 'n3_ch8',
    level: 'N3',
    title: '對比與替代',
    grammar: [
      {
        pattern: '〜に対して',
        explanation: '相對於...；對...。表示前後對比，或對某對象的態度。',
        examples: [
          { jp: '兄が活発なのに対して、弟はおとなしい。', romaji: 'Ani ga kappatsu nano ni taishite, otōto wa otonashii.', zh: '相對於哥哥活躍，弟弟很文靜。' },
          { jp: 'お客様に対して、失礼なことをしてはいけない。', romaji: 'Okyakusama ni taishite, shitsurei na koto o shite wa ikenai.', zh: '對客人不能做無禮的事。' },
        ]
      },
      {
        pattern: '〜に代わって / 〜に代わり',
        explanation: '代替...。表示替代原本的人或事物。',
        examples: [
          { jp: '社長に代わって、ご挨拶申し上げます。', romaji: 'Shachō ni kawatte, go-aisatsu mōshiagemasu.', zh: '我代替社長來致詞。' },
          { jp: '現金に代わり、カードで支払う。', romaji: 'Genkin ni kawari, kādo de shiharau.', zh: '代替現金，用信用卡支付。' },
        ]
      }
    ],
    vocabulary: [
      { word: '活発', reading: 'かっぱつ', romaji: 'kappatsu', meaning: '活躍/活潑' },
      { word: 'おとなしい', reading: 'おとなしい', romaji: 'otonashii', meaning: '文靜/老實' },
      { word: 'お客様', reading: 'おきゃくさま', romaji: 'okyakusama', meaning: '客人' },
      { word: '失礼', reading: 'しつれい', romaji: 'shitsurei', meaning: '失禮/無禮' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachō', meaning: '社長' },
      { word: '挨拶', reading: 'あいさつ', romaji: 'aisatsu', meaning: '打招呼/致詞' },
      { word: '現金', reading: 'げんきん', romaji: 'genkin', meaning: '現金' },
      { word: '支払う', reading: 'しはらう', romaji: 'shiharau', meaning: '支付' },
    ],
    quiz: [
      { question: '兄が活発なのに___、弟はおとなしい。', options: ['代わって', '対して', '関して', '比べて'], answer: 1 },
      { question: '山田さんに___、私が発表します。(代替)', options: ['代わって', '対して', '関して', '比べて'], answer: 0 },
      { question: '「活発」的意思是？', options: ['安靜', '活潑', '生氣', '發達'], answer: 1 },
      { question: '「おとなしい」的意思是？', options: ['大人', '成熟', '老實/文靜', '吵鬧'], answer: 2 },
      { question: '先生に___、失礼なことを言ってはいけない。', options: ['代わって', '対して', '関して', 'おいて'], answer: 1 },
      { question: '「失礼」的意思是？', options: ['失敗', '失望', '無禮', '失約'], answer: 2 },
      { question: '現金に___、カードで払う。', options: ['代わって', '対して', '関して', '比べて'], answer: 0 },
      { question: '「挨拶」的意思是？', options: ['道歉', '感謝', '打招呼/致詞', '拒絕'], answer: 2 },
      { question: '「支払う」的意思是？', options: ['收入', '支付', '借款', '付款'], answer: 1 },
      { question: '「〜に代わって」的前面通常接什麼詞性？', options: ['動詞', '形容詞', '名詞', '副詞'], answer: 2 },
    ]
  },

  // ---- N3 第9章：主張與斷定 ----
  {
    id: 'n3_ch9',
    level: 'N3',
    title: '主張與斷定',
    grammar: [
      {
        pattern: '〜べきだ / 〜べきではない',
        explanation: '應該... / 不應該...。表示做某事是理所當然或道德上的義務。',
        examples: [
          { jp: '約束は守るべきだ。', romaji: 'Yakusoku wa mamoru beki da.', zh: '應該遵守約定。' },
          { jp: '子供はそんな夜遅くまで遊ぶべきではない。', romaji: 'Kodomo wa sonna yoru osoku made asobu beki de wa nai.', zh: '小孩不該玩到那麼晚。' },
        ]
      },
      {
        pattern: '〜に違いない',
        explanation: '一定... / 肯定是...。表示說話者強烈的確信。',
        examples: [
          { jp: '犯人は彼に違いない。', romaji: 'Hannin wa kare ni chigainai.', zh: '犯人肯定是他。' },
          { jp: 'こんなに雨が降っているから、試合は中止に違いない。', romaji: 'Konna ni ame ga futte iru kara, shiai wa chūshi ni chigainai.', zh: '雨下這麼大，比賽一定取消了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: '約定' },
      { word: '守る', reading: 'まもる', romaji: 'mamoru', meaning: '遵守/保護' },
      { word: '夜遅く', reading: 'よるおそく', romaji: 'yoru osoku', meaning: '深夜' },
      { word: '犯人', reading: 'はんにん', romaji: 'hannin', meaning: '犯人' },
      { word: '試合', reading: 'しあい', romaji: 'shiai', meaning: '比賽' },
      { word: '中止', reading: 'ちゅうし', romaji: 'chūshi', meaning: '中止' },
      { word: '当然', reading: 'とうぜん', romaji: 'tōzen', meaning: '理所當然' },
      { word: '確信', reading: 'かくしん', romaji: 'kakushin', meaning: '確信' },
    ],
    quiz: [
      { question: '約束は守る___だ。(應該)', options: ['はず', 'べき', 'わけ', 'こと'], answer: 1 },
      { question: '犯人は彼に___。(肯定是)', options: ['違いない', '過ぎない', 'ほかならない', '及ばない'], answer: 0 },
      { question: '「守る」的意思是？', options: ['遵守/保護', '攻擊', '逃跑', '等待'], answer: 0 },
      { question: '「犯人」的讀音是？', options: ['はんじん', 'はんにん', 'ぼんにん', 'ふぁんにん'], answer: 1 },
      { question: 'そんなことは言う___ではない。(不應該說)', options: ['はず', 'べき', 'わけ', 'こと'], answer: 1 },
      { question: '「当然」的意思是？', options: ['然後', '目前', '理所當然', '絕對'], answer: 2 },
      { question: '彼の話は嘘に___。(肯定是謊言)', options: ['違いない', '過ぎない', 'ほかならない', '及ばない'], answer: 0 },
      { question: '「試合」的意思是？', options: ['考試', '測驗', '比賽', '練習'], answer: 2 },
      { question: 'する(動詞)接「べき」時，常用的形式是？', options: ['するべき/すべき', 'しべき', 'されるべき', 'させべき'], answer: 0 },
      { question: '「〜に違いない」含有什麼語氣？', options: ['猶豫', '強烈確信', '推卸責任', '請求允許'], answer: 1 },
    ]
  },

  // ---- N3 第10章：帶有與伴隨 ----
  {
    id: 'n3_ch10',
    level: 'N3',
    title: '帶有與伴隨',
    grammar: [
      {
        pattern: '〜とともに',
        explanation: '和...一起；隨著...。表示共事或兩事物同時變化。',
        examples: [
          { jp: '家族とともに過ごす時間が好きだ。', romaji: 'Kazoku to tomo ni sugosu jikan ga suki da.', zh: '喜歡和家人一起度過的時光。' },
          { jp: '年をとるとともに、体力が落ちてきた。', romaji: 'Toshi o toru to tomo ni, tairyoku ga ochite kita.', zh: '隨著年齡增長，體力下降了。' },
        ]
      },
      {
        pattern: '〜につれて / 〜にしたがって',
        explanation: '隨著...。表示一方發生變化，另一方也跟著產生變化。',
        examples: [
          { jp: '時間が経つにつれて、悲しみが薄れていった。', romaji: 'Jikan ga tatsu ni tsurete, kanashimi ga usurete itta.', zh: '隨著時間流逝，悲傷淡忘了。' },
          { jp: 'ルールにしたがって行動する。', romaji: 'Rūru ni shitagatte kōdō suru.', zh: '遵從規則行動。' },
        ]
      }
    ],
    vocabulary: [
      { word: '過ごす', reading: 'すごす', romaji: 'sugosu', meaning: '度過' },
      { word: '体力', reading: 'たいりょく', romaji: 'tairyoku', meaning: '體力' },
      { word: '落ちる', reading: 'おちる', romaji: 'ochiru', meaning: '掉落/下降' },
      { word: '経つ', reading: 'たつ', romaji: 'tatsu', meaning: '流逝(時間)' },
      { word: '悲しみ', reading: 'かなしみ', romaji: 'kanashimi', meaning: '悲傷' },
      { word: '薄れる', reading: 'うすれる', romaji: 'usureru', meaning: '變淡' },
      { word: 'ルール', reading: 'ルール', romaji: 'rūru', meaning: '規則' },
      { word: '行動', reading: 'こうどう', romaji: 'kōdō', meaning: '行動' },
    ],
    quiz: [
      { question: '家族と___時間を過ごす。(一起)', options: ['ともに', 'つれて', 'したがって', 'ともなって'], answer: 0 },
      { question: '時間が経つ___、忘れてしまった。(隨著)', options: ['とともに', 'につれて', 'において', 'によって'], answer: 1 },
      { question: '「過ごす」的意思是？', options: ['走過', '度過', '睡過', '錯過'], answer: 1 },
      { question: '「体力」的意思是？', options: ['體溫', '重力', '體裁', '體力'], answer: 3 },
      { question: '経済が発展する___、環境も悪化した。', options: ['とともに', 'において', 'によって', 'に対して'], answer: 0 },
      { question: 'ルールに___行動する。(遵從)', options: ['ともに', 'つれて', 'したがって', 'ともなって'], answer: 2 },
      { question: '「経つ」用在什麼場合？', options: ['物品掉落', '時間流逝', '人站起來', '建建築物'], answer: 1 },
      { question: '「悲しみ」的意思是？', options: ['快樂', '悲傷', '憤怒', '恐懼'], answer: 1 },
      { question: '「薄れる」的意思是？', options: ['變厚', '變淡', '變黑', '變白'], answer: 1 },
      { question: '「行動」的意思是？', options: ['走路', '旅行', '行動', '靜止'], answer: 2 },
    ]
  },

  // ---- N3 第11章：時間與時機 ----
  {
    id: 'n3_ch11',
    level: 'N3',
    title: '時間與時機',
    grammar: [
      {
        pattern: '〜最中に',
        explanation: '正在...的時候。表示動作正進行到高潮時發生了其他事，常帶有被打擾的語氣。',
        examples: [
          { jp: '会議の最中に、携帯が鳴った。', romaji: 'Kaigi no saichū ni, keitai ga natta.', zh: '會議開到一半，手機響了。' },
          { jp: '食事している最中に客が来た。', romaji: 'Shokuji shite iru saichū ni kyaku ga kita.', zh: '吃到一半時客人來了。' },
        ]
      },
      {
        pattern: '〜たとたん(に)',
        explanation: '一...就...。表示前一個動作完成的瞬間，立刻發生了意想不到的後續動作。',
        examples: [
          { jp: '立ち上がったとたん、めまいがした。', romaji: 'Tachiagatta totan, memai ga shita.', zh: '一站起來就覺得頭暈。' },
          { jp: '家を出たとたん、雨が降り出した。', romaji: 'Ie o deta totan, ame ga furidashita.', zh: '一出門就開始下雨。' },
        ]
      }
    ],
    vocabulary: [
      { word: '最中', reading: 'さいちゅう', romaji: 'saichū', meaning: '正在...之中' },
      { word: '鳴る', reading: 'なる', romaji: 'naru', meaning: '響起/發出聲音' },
      { word: '食事', reading: 'しょくじ', romaji: 'shokuji', meaning: '用餐' },
      { word: '客', reading: 'きゃく', romaji: 'kyaku', meaning: '客人' },
      { word: '立ち上がる', reading: 'たちあがる', romaji: 'tachiagaru', meaning: '站起來' },
      { word: 'めまい', reading: 'めまい', romaji: 'memai', meaning: '頭暈' },
      { word: '家を出る', reading: 'いえをでる', romaji: 'ie o deru', meaning: '出門' },
      { word: '降り出す', reading: 'ふりだす', romaji: 'furidasu', meaning: '開始下(雨/雪)' },
    ],
    quiz: [
      { question: '会議の___に、電話が鳴った。(正在...時)', options: ['間', '最中', 'うち', 'ところ'], answer: 1 },
      { question: '立ち上がっ___、めまいがした。(一...就...)', options: ['たとたん', 'たところ', 'たばかり', 'た最中'], answer: 0 },
      { question: '「最中」的讀音是？', options: ['さいなか', 'さいきん', 'さいちゅう', 'もなか'], answer: 2 },
      { question: '「鳴る」的意思是？', options: ['叫喊', '響起', '敲打', '振動'], answer: 1 },
      { question: '食事の___に、客が来た。', options: ['最中', 'とたん', '次第', '一方'], answer: 0 },
      { question: '「めまい」的意思是？', options: ['頭痛', '想吐', '咳嗽', '頭暈'], answer: 3 },
      { question: '窓を開け___、強い風が入ってきた。', options: ['た最中', 'たとたん', 'たうち', 'た間'], answer: 1 },
      { question: '「降り出す」的意思是？', options: ['停雨', '開始下雨', '雨變大', '雨變小'], answer: 1 },
      { question: '「〜たとたん」後面的句子通常是？', options: ['預期中的事', '意想不到的事', '計畫好的事', '意志、命令'], answer: 1 },
      { question: '「客」的意思是？', options: ['主人', '朋友', '客人', '家屬'], answer: 2 },
    ]
  },

  // ---- N3 第12章：狀態與強調 ----
  {
    id: 'n3_ch12',
    level: 'N3',
    title: '狀態與強調',
    grammar: [
      {
        pattern: '〜だらけ',
        explanation: '滿是...；全是...。表示表面附著滿不好的東西（如泥巴、錯誤等）。',
        examples: [
          { jp: '彼の服は泥だらけだ。', romaji: 'Kare no fuku wa doro darake da.', zh: '他的衣服沾滿泥巴。' },
          { jp: 'この作文は間違いだらけだ。', romaji: 'Kono sakubun wa machigai darake da.', zh: '這篇作文錯字連篇。' },
        ]
      },
      {
        pattern: '〜っぱなし',
        explanation: '放任不管；一直...。表示某種狀態一直持續，大多帶有負面、不該如此的語氣。',
        examples: [
          { jp: 'テレビをつけっぱなしで寝てしまった。', romaji: 'Terebi o tsukeppanashi de nete shimatta.', zh: '電視開著沒關就睡著了。' },
          { jp: '水を出しっぱなしにしないで。', romaji: 'Mizu o dashippanashi ni shinaide.', zh: '水不要一直開著流。' },
        ]
      }
    ],
    vocabulary: [
      { word: '泥', reading: 'どろ', romaji: 'doro', meaning: '泥巴' },
      { word: '間違い', reading: 'まちがい', romaji: 'machigai', meaning: '錯誤' },
      { word: '埃', reading: 'ほこり', romaji: 'hokori', meaning: '灰塵' },
      { word: '血', reading: 'ち', romaji: 'chi', meaning: '血' },
      { word: 'つける', reading: 'つける', romaji: 'tsukeru', meaning: '打開(電源)' },
      { word: '出す', reading: 'だす', romaji: 'dasu', meaning: '拿出/流出' },
      { word: '開ける', reading: 'あける', romaji: 'akeru', meaning: '打開(門窗)' },
      { word: '脱ぐ', reading: 'ぬぐ', romaji: 'nugu', meaning: '脫下' },
    ],
    quiz: [
      { question: '彼の靴は泥___だ。(滿是泥巴)', options: ['だけ', 'ばかり', 'だらけ', 'くらい'], answer: 2 },
      { question: 'テレビをつけ___で寝た。(放著不管)', options: ['っぱなし', 'だらけ', 'たまま', 'たところ'], answer: 0 },
      { question: '「泥」的意思是？', options: ['水', '石頭', '沙子', '泥巴'], answer: 3 },
      { question: '「埃」的意思是？', options: ['灰塵', '垃圾', '污漬', '細菌'], answer: 0 },
      { question: '部屋の中はゴミ___だ。(全是垃圾)', options: ['だらけ', 'っぱなし', 'ばかり', 'のみ'], answer: 0 },
      { question: '水を出し___にしないで。(一直流)', options: ['だらけ', 'っぱなし', 'たまま', 'ておく'], answer: 1 },
      { question: '「血」的讀音是？', options: ['ち', 'けつ', 'せつ', 'けき'], answer: 0 },
      { question: '「脱ぐ」的意思是？', options: ['穿', '洗', '脫下', '收起'], answer: 2 },
      { question: '「〜だらけ」通常接續什麼詞性？', options: ['動詞', '形容詞', '名詞', '副詞'], answer: 2 },
      { question: 'ドアを開け___にする。(開著不關)', options: ['だらけ', 'っぱなし', 'ばかり', 'ながら'], answer: 1 },
    ]
  },

  // ---- N3 第13章：例示與限定 ----
  {
    id: 'n3_ch13',
    level: 'N3',
    title: '例示與限定',
    grammar: [
      {
        pattern: '〜とか〜とか',
        explanation: '像...啦、像...啦。列舉部分例子，比「〜や〜など」更口語。',
        examples: [
          { jp: '休日は映画を見るとか、本を読むとかしています。', romaji: 'Kyūjitsu wa eiga o miru toka, hon o yomu toka shite imasu.', zh: '假日會看看電影啦、讀讀書什麼的。' },
          { jp: '寿司とか天ぷらとか、日本料理が好きです。', romaji: 'Sushi toka tenpura toka, nihonryōri ga suki desu.', zh: '我喜歡日本料理，像是壽司啦、天婦羅之類的。' },
        ]
      },
      {
        pattern: '〜きり',
        explanation: '只有...；從...之後就一直。表示限定或某動作後狀態不再改變。',
        examples: [
          { jp: '彼とは一度会ったきりだ。', romaji: 'Kare to wa ichido atta kiri da.', zh: '我和他只見過一次面（之後就沒見了）。' },
          { jp: '二人きりで話したい。', romaji: 'Futari kiri de hanashitai.', zh: '想只有我們兩人單獨談談。' },
        ]
      }
    ],
    vocabulary: [
      { word: '休日', reading: 'きゅうじつ', romaji: 'kyūjitsu', meaning: '假日' },
      { word: '料理', reading: 'りょうり', romaji: 'ryōri', meaning: '料理' },
      { word: '天ぷら', reading: 'てんぷら', romaji: 'tenpura', meaning: '天婦羅' },
      { word: '一度', reading: 'いちど', romaji: 'ichido', meaning: '一次' },
      { word: '二人', reading: 'ふたり', romaji: 'futari', meaning: '兩人' },
      { word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: '說話' },
      { word: '出かける', reading: 'でかける', romaji: 'dekakeru', meaning: '出門' },
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: '回家' },
    ],
    quiz: [
      { question: '寿司___天ぷら___、和食が好きだ。', options: ['とか/とか', 'や/など', 'と/と', 'も/も'], answer: 0 },
      { question: '彼とは一度会った___だ。(只有)', options: ['きり', 'だけ', 'ばかり', 'しか'], answer: 0 },
      { question: '「休日」的意思是？', options: ['工作日', '假日', '平日', '節慶'], answer: 1 },
      { question: '「料理」的意思是？', options: ['吃飯', '餐廳', '料理/菜餚', '廚師'], answer: 2 },
      { question: '二人___で話したい。(只有兩人)', options: ['さえ', 'こそ', 'きり', 'まで'], answer: 2 },
      { question: '「天ぷら」是什麼食物？', options: ['壽司', '拉麵', '炸天婦羅', '烤肉'], answer: 2 },
      { question: '朝ご飯を食べた___、何も食べていない。', options: ['きり', 'だけ', 'ばかり', 'しか'], answer: 0 },
      { question: '「一度」的意思是？', options: ['一邊', '一次', '一定', '一起'], answer: 1 },
      { question: '「出かける」的意思是？', options: ['出門', '回家', '到來', '離開'], answer: 0 },
      { question: '「〜とか〜とか」表示什麼？', options: ['全部', '列舉', '選擇', '義務'], answer: 1 },
    ]
  },

  // ---- N3 第14章：敬語（尊敬語） ----
  {
    id: 'n3_ch14',
    level: 'N3',
    title: '敬語（尊敬語）',
    grammar: [
      {
        pattern: 'お〜になる / ご〜になる',
        explanation: '尊敬語，用來抬高對方的動作。「您...」。',
        examples: [
          { jp: '社長はお帰りになりました。', romaji: 'Shachō wa o-kaeri ni narimashita.', zh: '社長已經回去了。' },
          { jp: '何をお探しになりますか。', romaji: 'Nani o o-sagashi ni narimasu ka.', zh: '您在找什麼呢？' },
        ]
      },
      {
        pattern: '特別な尊敬語',
        explanation: '部分動詞有特定的尊敬語形式。',
        examples: [
          { jp: '先生がいらっしゃる。（行く/来る/いる）', romaji: 'Sensei ga irassharu.', zh: '老師來了/在。' },
          { jp: '先生がおっしゃる。（言う）', romaji: 'Sensei ga ossharu.', zh: '老師說。' },
          { jp: '先生が召し上がる。（食べる/飲む）', romaji: 'Sensei ga meshiagaru.', zh: '老師吃/喝。' },
        ]
      }
    ],
    vocabulary: [
      { word: '社長', reading: 'しゃちょう', romaji: 'shachō', meaning: '社長' },
      { word: '探す', reading: 'さがす', romaji: 'sagasu', meaning: '尋找' },
      { word: 'いらっしゃる', reading: 'いらっしゃる', romaji: 'irassharu', meaning: '去/來/在(尊)' },
      { word: 'おっしゃる', reading: 'おっしゃる', romaji: 'ossharu', meaning: '說(尊)' },
      { word: '召し上がる', reading: 'めしあがる', romaji: 'meshiagaru', meaning: '吃/喝(尊)' },
      { word: 'ご覧になる', reading: 'ごらんになる', romaji: 'goran ni naru', meaning: '看(尊)' },
      { word: 'なさる', reading: 'なさる', romaji: 'nasaru', meaning: '做(尊)' },
      { word: 'ご存じだ', reading: 'ごぞんじだ', romaji: 'gozonji da', meaning: '知道(尊)' },
    ],
    quiz: [
      { question: '社長はお帰り___なりました。', options: ['に', 'を', 'が', 'で'], answer: 0 },
      { question: '「行く・来る・いる」的尊敬語是？', options: ['おっしゃる', 'いらっしゃる', 'なさる', 'まいる'], answer: 1 },
      { question: '「言う」的尊敬語是？', options: ['おっしゃる', '申す', '話される', 'いうられる'], answer: 0 },
      { question: '「探す」的意思是？', options: ['放棄', '隱藏', '尋找', '看見'], answer: 2 },
      { question: '先生が___。(吃)', options: ['食べられる', '召し上がる', 'いただく', 'お食べになる'], answer: 1 },
      { question: '「見る」的尊敬語是？', options: ['見られる', 'ご覧になる', '拝見する', 'お見になる'], answer: 1 },
      { question: '「する」的尊敬語是？', options: ['される', 'なさる', 'いたす', 'おする'], answer: 1 },
      { question: '「知る」的尊敬語是？', options: ['お知りだ', 'ご存じだ', '存じている', '知られる'], answer: 1 },
      { question: '「尊敬語」是用來？', options: ['抬高對方動作', '貶低自己動作', '平輩交流', '晚輩交流'], answer: 0 },
      { question: '何をお探し___なりますか。', options: ['に', 'を', 'が', 'で'], answer: 0 },
    ]
  },

  // ---- N3 第15章：敬語（謙讓語） ----
  {
    id: 'n3_ch15',
    level: 'N3',
    title: '敬語（謙讓語）',
    grammar: [
      {
        pattern: 'お〜する / ご〜する',
        explanation: '謙讓語，用來壓低自己的動作以表示對對方的敬意。「我為您...」。',
        examples: [
          { jp: '私が荷物をお持ちします。', romaji: 'Watashi ga nimotsu o o-mochi shimasu.', zh: '我來幫您拿行李。' },
          { jp: '明日、ご案内します。', romaji: 'Ashita, go-annai shimasu.', zh: '明天我來為您導覽。' },
        ]
      },
      {
        pattern: '特別な謙譲語',
        explanation: '部分動詞有特定的謙讓語形式。',
        examples: [
          { jp: '私が参ります。（行く/来る）', romaji: 'Watashi ga mairimasu.', zh: '我過去/我來。' },
          { jp: 'と申します。（言う）', romaji: '... to mōshimasu.', zh: '我叫做...。' },
          { jp: '拝見しました。（見る）', romaji: 'Haiken shimashita.', zh: '我看了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '荷物', reading: 'にもつ', romaji: 'nimotsu', meaning: '行李' },
      { word: '案内する', reading: 'あんないする', romaji: 'annai suru', meaning: '導覽/帶路' },
      { word: '参る', reading: 'まいる', romaji: 'mairu', meaning: '去/來(謙)' },
      { word: '申す', reading: 'もうす', romaji: 'mōsu', meaning: '說/叫(謙)' },
      { word: '拝見する', reading: 'はいけんする', romaji: 'haiken suru', meaning: '看(謙)' },
      { word: 'いたす', reading: 'いたす', romaji: 'itasu', meaning: '做(謙)' },
      { word: '頂く', reading: 'いただく', romaji: 'itadaku', meaning: '吃/喝/收(謙)' },
      { word: '伺う', reading: 'うかがう', romaji: 'ukagau', meaning: '拜訪/詢問(謙)' },
    ],
    quiz: [
      { question: '私が荷物をお持ち___。', options: ['します', 'になります', 'されます', 'なさいます'], answer: 0 },
      { question: '「行く・来る」的謙讓語是？', options: ['いらっしゃる', 'まいる', 'うかがう', 'おる'], answer: 1 },
      { question: '「言う」的謙讓語是？', options: ['おっしゃる', '申す', '話す', 'いう'], answer: 1 },
      { question: '「荷物」的意思是？', options: ['商品', '行李', '衣服', '錢包'], answer: 1 },
      { question: '社長のメールを___。(看)', options: ['ご覧になりました', '拝見しました', '見ました', 'お見しました'], answer: 1 },
      { question: '「する」的謙讓語是？', options: ['なさる', 'いたす', 'される', 'おする'], answer: 1 },
      { question: '「食べる・もらう」的謙讓語是？', options: ['召し上がる', 'いただく', 'もらう', 'さしあげる'], answer: 1 },
      { question: '明日、そちらへ___。(去拜訪)', options: ['いらっしゃいます', '伺います', '拝見します', 'おいでます'], answer: 1 },
      { question: '「謙讓語」是用來？', options: ['抬高對方動作', '壓低自己動作', '平輩交流', '晚輩交流'], answer: 1 },
      { question: '東京駅をご案内___。', options: ['になります', 'します', 'されます', 'なさいます'], answer: 1 },
    ]
  },

  // ---- 第16章：讓步與極端假設 ----
  {
    id: 'n3_ch16',
    level: 'N3',
    title: '讓步與極端假設',
    grammar: [
      {
        pattern: 'たとえ〜ても',
        explanation: '即使...也...。就算發生極端狀況，結果也不會改變。',
        examples: [
          { jp: 'たとえ雨が降っても、試合は行われます。', romaji: 'Tatoe ame ga futte mo, shiai wa okonawaremasu.', zh: '即使下雨，比賽也會照常進行。' },
          { jp: 'たとえ親が反対しても、私は留学します。', romaji: 'Tatoe oya ga hantai shite mo, watashi wa ryūgaku shimasu.', zh: '就算父母反對，我也要留學。' },
        ]
      },
      {
        pattern: '〜にしても',
        explanation: '就算是...也...。承認前項事實，但後項有不同的見解或過高的程度。',
        examples: [
          { jp: '遅れるにしても、連絡くらいするべきだ。', romaji: 'Okureru ni shite mo, renraku kurai suru beki da.', zh: '就算遲到，也至少該聯絡一下吧。' },
        ]
      }
    ],
    vocabulary: [
      { word: '反対する', reading: 'はんたいする', romaji: 'hantai suru', meaning: '反對' },
      { word: '留学', reading: 'りゅうがく', romaji: 'ryūgaku', meaning: '留學' },
      { word: '試合', reading: 'しあい', romaji: 'shiai', meaning: '比賽' },
      { word: '行われる', reading: 'おこなわれる', romaji: 'okonawareru', meaning: '舉行(受身)' },
      { word: '連絡', reading: 'れんらく', romaji: 'renraku', meaning: '聯絡' },
      { word: '親', reading: 'おや', romaji: 'oya', meaning: '父母' },
      { word: 'たとえ', reading: 'たとえ', romaji: 'tatoe', meaning: '即使/就算' },
      { word: '負ける', reading: 'まける', romaji: 'makeru', meaning: '輸' },
    ],
    quiz: [
      { question: '___雨が降っても、試合は行われます。', options: ['もし', 'たとえ', 'いくら', 'どうしても'], answer: 1 },
      { question: '遅れる___しても、連絡はしてほしい。', options: ['に', 'で', 'を', 'が'], answer: 0 },
      { question: '「反対する」的反義詞是？', options: ['賛成する', '参加する', '出発する', '失敗する'], answer: 0 },
      { question: '「試合」的意思是？', options: ['比賽', '考試', '練習', '會議'], answer: 0 },
      { question: 'たとえ親が反対し___、私は留学します。', options: ['ても', 'たら', 'れば', 'と'], answer: 0 },
      { question: '「留学」的讀音是？', options: ['りゅうかく', 'りゅうがく', 'ろがく', 'るがく'], answer: 1 },
      { question: '「負ける」的意思是？', options: ['贏', '輸', '平手', '放棄'], answer: 1 },
      { question: 'いくら忙しいに___、食事はしてください。', options: ['しても', 'すれば', 'すると', 'したら'], answer: 0 },
      { question: '「連絡」的意思是？', options: ['聯絡', '練習', '連休', '連結'], answer: 0 },
      { question: '「親」的讀音是？', options: ['あに', 'ちち', 'おや', 'はは'], answer: 2 },
    ]
  },

  // ---- 第17章：強烈情感與狀態 ----
  {
    id: 'n3_ch17',
    level: 'N3',
    title: '強烈情感與狀態',
    grammar: [
      {
        pattern: '〜てたまらない',
        explanation: '...得受不了。表示某種感情、感覺非常強烈，無法壓抑。',
        examples: [
          { jp: '暑くてたまらない。', romaji: 'Atsukute tamaranai.', zh: '熱得受不了。' },
          { jp: '彼のことが心配でたまらない。', romaji: 'Kare no koto ga shinpai de tamaranai.', zh: '擔心他擔心得受不了。' },
        ]
      },
      {
        pattern: '〜てしかたがない / 〜てしょうがない',
        explanation: '...得沒辦法。與「てたまらない」類似，表示某種狀態或情感強烈到無可奈何。',
        examples: [
          { jp: '今日は眠くてしょうがない。', romaji: 'Kyō wa nemukute shō ga nai.', zh: '今天睏得要命。' },
          { jp: '結果が気になってしかたがない。', romaji: 'Kekka ga ki ni natte shikata ga nai.', zh: '非常在意結果。' },
        ]
      }
    ],
    vocabulary: [
      { word: '心配', reading: 'しんぱい', romaji: 'shinpai', meaning: '擔心' },
      { word: '眠い', reading: 'ねむい', romaji: 'nemui', meaning: '想睡的/睏的' },
      { word: '気になる', reading: 'きになる', romaji: 'ki ni naru', meaning: '在意/掛念' },
      { word: '結果', reading: 'けっか', romaji: 'kekka', meaning: '結果' },
      { word: '寂しい', reading: 'さびしい', romaji: 'sabishii', meaning: '寂寞的' },
      { word: '嬉しい', reading: 'うれしい', romaji: 'ureshii', meaning: '開心的' },
      { word: '悲しい', reading: 'かなしい', romaji: 'kanashii', meaning: '傷心的' },
      { word: '喉が渇く', reading: 'のどがかわく', romaji: 'nodo ga kawaku', meaning: '口渴' },
    ],
    quiz: [
      { question: '暑く___たまらない。', options: ['で', 'て', 'に', 'と'], answer: 1 },
      { question: '今日は眠くてしょうが___。', options: ['ない', 'ある', 'する', 'なる'], answer: 0 },
      { question: '「心配」的意思是？', options: ['安心', '擔心', '開心', '傷心'], answer: 1 },
      { question: '「結果」的讀音是？', options: ['けっこう', 'けいか', 'けっか', 'けしん'], answer: 2 },
      { question: '彼のことが心配___たまらない。', options: ['て', 'で', 'に', 'を'], answer: 1 },
      { question: '「気になる」的意思是？', options: ['生氣', '在意', '小心', '開心'], answer: 1 },
      { question: '「眠い」的讀音是？', options: ['だるい', 'ねむい', 'おもい', 'つらい'], answer: 1 },
      { question: '喉が渇いて___。(渴得受不了)', options: ['たまらない', 'ならない', 'いけない', 'すぎない'], answer: 0 },
      { question: '「悲しい」的意思是？', options: ['開心的', '生氣的', '傷心的', '寂寞的'], answer: 2 },
      { question: '結果が気になって___がない。', options: ['こと', 'もの', 'しかた', 'わけ'], answer: 2 },
    ]
  },

  // ---- 第18章：不滿意與批判 ----
  {
    id: 'n3_ch18',
    level: 'N3',
    title: '不滿意與批判',
    grammar: [
      {
        pattern: '〜わりに（は）',
        explanation: '雖然...卻... / 以...的標準來看算是...。表示與常識預期不符，帶有驚訝或評價。',
        examples: [
          { jp: '彼は歳のわりに、若く見える。', romaji: 'Kare wa toshi no wari ni, wakaku mieru.', zh: '他以那年紀來說算看起來年輕。' },
          { jp: 'このレストランは高いわりに、美味しくない。', romaji: 'Kono resutoran wa takai wari ni, oishikunai.', zh: '這家餐廳雖然貴，卻不好吃。' },
        ]
      },
      {
        pattern: '〜くせに',
        explanation: '明明...卻...。比「わりに」更帶有強烈的責備或不滿情緒。通常用於批評別人。',
        examples: [
          { jp: '知らないくせに、嘘をつくな。', romaji: 'Shiranai kuse ni, uso o tsuku na.', zh: '明明不知道就別說謊。' },
          { jp: '男のくせに、泣くなんて。', romaji: 'Otoko no kuse ni, naku nante.', zh: '明明是男的卻哭成那樣。' },
        ]
      }
    ],
    vocabulary: [
      { word: '歳', reading: 'とし', romaji: 'toshi', meaning: '年紀/歲數' },
      { word: '若い', reading: 'わかい', romaji: 'wakai', meaning: '年輕的' },
      { word: '見える', reading: 'みえる', romaji: 'mieru', meaning: '看起來' },
      { word: '嘘', reading: 'うそ', romaji: 'uso', meaning: '謊言' },
      { word: '男', reading: 'おとこ', romaji: 'otoko', meaning: '男人' },
      { word: '女', reading: 'おんな', romaji: 'onna', meaning: '女人' },
      { word: '文句', reading: 'もんく', romaji: 'monku', meaning: '抱怨' },
      { word: '知る', reading: 'しる', romaji: 'shiru', meaning: '知道' },
    ],
    quiz: [
      { question: '彼は歳の___に、若く見える。', options: ['ため', 'わり', 'くせ', 'よう'], answer: 1 },
      { question: '知らない___に、嘘をつくな。', options: ['わり', 'くせ', 'ため', 'よう'], answer: 1 },
      { question: '「若い」的反義詞是？', options: ['新しい', '古い', '年老いた', '明るい'], answer: 2 },
      { question: '「男」的讀音是？', options: ['おとこ', 'おんな', 'ひと', 'こども'], answer: 0 },
      { question: '高い___に、美味しくない。', options: ['わり', 'くせ', 'せい', 'おかげ'], answer: 0 },
      { question: '「嘘」的意思是？', options: ['真實', '謊言', '事實', '秘密'], answer: 1 },
      { question: '「文句」的意思是？', options: ['文章', '抱怨', '句子', '文字'], answer: 1 },
      { question: 'できない___に、文句ばかり言う。', options: ['わり', 'くせ', 'せい', 'おかげ'], answer: 1 },
      { question: '「見える」在這裡的意思是？', options: ['能看見', '看起來', '視覺好', '找得到'], answer: 1 },
      { question: '子供の___に、難しい漢字を知っている。', options: ['わり', 'くせ', 'せい', 'ため'], answer: 0 },
    ]
  },

  // ---- 第19章：習慣與社會規定 ----
  {
    id: 'n3_ch19',
    level: 'N3',
    title: '習慣與社會規定',
    grammar: [
      {
        pattern: '〜ことになっている',
        explanation: '表示已經定下來的規則、預定、或社會習慣。「按規定...」。',
        examples: [
          { jp: 'この部屋ではタバコを吸ってはいけないことになっている。', romaji: 'Kono heya de wa tabako o sutte wa ikenai koto ni natte iru.', zh: '按規定，這房間裡不能抽菸。' },
          { jp: '日本では、家に入る時、靴を脱ぐことになっている。', romaji: 'Nihon de wa, ie ni hairu toki, kutsu o nugu koto ni natte iru.', zh: '在日本，進屋時按習慣要脫鞋。' },
        ]
      },
      {
        pattern: '〜ようになっている',
        explanation: '表示機器或系統的構造、設計被設定成某種狀態。「被設計成...」。',
        examples: [
          { jp: 'このドアは自動で閉まるようになっている。', romaji: 'Kono doa wa jidō de shimaru yō ni natte iru.', zh: '這扇門被設計成會自動關閉。' },
          { jp: '暗くなると、電気がつくようになっている。', romaji: 'Kurakunaru to, denki ga tsuku yō ni natte iru.', zh: '這裡設計成變暗時燈就會亮。' },
        ]
      }
    ],
    vocabulary: [
      { word: '規則', reading: 'きそく', romaji: 'kisoku', meaning: '規則' },
      { word: '習慣', reading: 'しゅうかん', romaji: 'shūkan', meaning: '習慣' },
      { word: '脱ぐ', reading: 'ぬぐ', romaji: 'nugu', meaning: '脫(衣服/鞋子)' },
      { word: '自動', reading: 'じどう', romaji: 'jidō', meaning: '自動' },
      { word: '閉まる', reading: 'しまる', romaji: 'shimaru', meaning: '關閉(自動詞)' },
      { word: '暗い', reading: 'くらい', romaji: 'kurai', meaning: '暗的' },
      { word: 'つく', reading: 'つく', romaji: 'tsuku', meaning: '亮起/點亮' },
      { word: '入る', reading: 'はいる', romaji: 'hairu', meaning: '進入' },
    ],
    quiz: [
      { question: '法律で禁止されている___になっている。', options: ['こと', 'よう', 'もの', 'わけ'], answer: 0 },
      { question: 'このドアは自動で閉まる___になっている。', options: ['こと', 'よう', 'もの', 'わけ'], answer: 1 },
      { question: '「規則」的意思是？', options: ['習慣', '規則', '法律', '常識'], answer: 1 },
      { question: '「脱ぐ」的反義詞是？', options: ['着る', '買う', '売る', '捨てる'], answer: 0 },
      { question: '日本では、靴を脱ぐ___になっている。(習慣)', options: ['こと', 'よう', 'はず', 'もの'], answer: 0 },
      { question: '「自動」的讀音是？', options: ['じどう', 'じとう', 'しどう', 'ちどう'], answer: 0 },
      { question: '暗くなると、電気が___。(亮起)', options: ['つける', 'つく', 'けす', 'きえる'], answer: 1 },
      { question: 'ボタンを押すと、お湯が出る___になっている。', options: ['こと', 'よう', 'ため', 'から'], answer: 1 },
      { question: '「暗い」的反義詞是？', options: ['黒い', '白い', '明るい', '青い'], answer: 2 },
      { question: '「習慣」的讀音是？', options: ['しゅうかん', 'しゅかん', 'じゅうかん', 'じゅかん'], answer: 0 },
    ]
  },

  // ---- 第20章：程度變化與單向發展 ----
  {
    id: 'n3_ch20',
    level: 'N3',
    title: '程度變化與單向發展',
    grammar: [
      {
        pattern: '〜ば〜ほど',
        explanation: '越...越...。表示隨著前項程度增加，後項也跟著改變。',
        examples: [
          { jp: '日本語は、勉強すればするほど難しくなる。', romaji: 'Nihongo wa, benkyō sureba suru hodo muzukashiku naru.', zh: '日語越學越難。' },
          { jp: 'スーパーは、家から近ければ近いほど便利だ。', romaji: 'Sūpā wa, ie kara chikakereba chikai hodo benri da.', zh: '超市離家越近越方便。' },
        ]
      },
      {
        pattern: '〜一方だ（いっぽうだ）',
        explanation: '不斷地...。表示事態朝著同一個方向不斷發展，常帶有負面語氣。',
        examples: [
          { jp: '物価は上がる一方だ。', romaji: 'Bukka wa agaru ippō da.', zh: '物價不斷上漲。' },
          { jp: 'お年寄りの数は増える一方だ。', romaji: 'O-toshiyori no kazu wa fueru ippō da.', zh: '老年人的數量不斷增加。' },
        ]
      }
    ],
    vocabulary: [
      { word: '物価', reading: 'ぶっか', romaji: 'bukka', meaning: '物價' },
      { word: '上がる', reading: 'あがる', romaji: 'agaru', meaning: '上漲/上升' },
      { word: '下がる', reading: 'さがる', romaji: 'sagaru', meaning: '下跌/下降' },
      { word: 'お年寄り', reading: 'おとしより', romaji: 'otoshiyori', meaning: '老年人' },
      { word: '増える', reading: 'ふえる', romaji: 'fueru', meaning: '增加' },
      { word: '減る', reading: 'へる', romaji: 'heru', meaning: '減少' },
      { word: '近い', reading: 'ちかい', romaji: 'chikai', meaning: '近的' },
      { word: '遠い', reading: 'とおい', romaji: 'tōi', meaning: '遠的' },
    ],
    quiz: [
      { question: '勉強すれ___するほど難しくなる。', options: ['て', 'ば', 'と', 'たら'], answer: 1 },
      { question: '物価は上がる___だ。', options: ['一方', '両方', '片方', '方'], answer: 0 },
      { question: '「上がる」的反義詞是？', options: ['増える', '減る', '下がる', '変わる'], answer: 2 },
      { question: '「物価」的讀音是？', options: ['ものか', 'ぶっか', 'ぶつか', 'もつか'], answer: 1 },
      { question: '近けれ___近いほど便利だ。', options: ['て', 'と', 'たら', 'ば'], answer: 3 },
      { question: '「増える」的意思是？', options: ['減少', '增加', '變化', '停止'], answer: 1 },
      { question: '「お年寄り」的意思是？', options: ['年輕人', '小童', '老年人', '中年人'], answer: 2 },
      { question: '高齢者の数は増える___だ。', options: ['一方', 'こと', 'もの', 'わけ'], answer: 0 },
      { question: '「近い」的反義詞是？', options: ['高い', '低い', '遠い', '短い'], answer: 2 },
      { question: '早ければ早い___いいです。', options: ['ほど', 'まで', 'だけ', 'くらい'], answer: 0 },
    ]
  },

  // ===================== N2 =====================
  {
    id: 'n2_ch1',
    level: 'N2',
    title: '逆接與讓步',
    grammar: [
      {
        pattern: '〜にもかかわらず',
        explanation: '儘管...卻...。表示違反預期的結果。',
        examples: [
          { jp: '努力したにもかかわらず、不合格だった。', romaji: 'Doryoku shita ni mo kakawarazu, fugōkaku datta.', zh: '儘管努力了，卻不合格。' },
          { jp: '雨にもかかわらず、多くの人が来た。', romaji: 'Ame ni mo kakawarazu, ōku no hito ga kita.', zh: '儘管下雨，很多人來了。' },
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
      { question: '「不合格」的反義詞是？', options: ['合格', '失敗', '中止', '反對'], answer: 0 },
      { question: '「賛成」的反義詞是？', options: ['成功', '期待', '反対', '予想'], answer: 2 },
      { question: '雨___かかわらず、多くの人が来た。', options: ['にも', 'でも', 'とも', 'にさえ'], answer: 0 },
      { question: '「結果」的意思是？', options: ['原因', '過程', '結果', '開始'], answer: 2 },
      { question: '「〜にもかかわらず」表示？', options: ['因為', '儘管', '所以', '如果'], answer: 1 },
      { question: '「期待」の読み方は？', options: ['きたい', 'きだい', 'きまち', 'きまつ'], answer: 0 },
      { question: '「予想」的意思是？', options: ['結果', '預測', '回顧', '計劃'], answer: 1 },
      { question: '___どころか、簡単な問題もできない。', options: ['難しい問題', '簡単な問題', '全ての問題', '一つの問題'], answer: 0 },
    ]
  },
  {
    id: 'n2_ch2',
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
      { question: '「増える」的反義詞是？', options: ['変わる', '減る', '続く', '止まる'], answer: 1 },
      { question: '「以上」的反義詞是？', options: ['以前', '以後', '以下', '以外'], answer: 2 },
      { question: '「比較」的讀音是？', options: ['ひかく', 'ひこう', 'ひきょう', 'ひあく'], answer: 0 },
      { question: '考えれば考える___、分からなくなる。', options: ['だけ', 'まで', 'ほど', 'ばかり'], answer: 2 },
      { question: '「程度」的意思是？', options: ['速度', '程度', '溫度', '角度'], answer: 1 },
      { question: '日本語は英語___難しくない。', options: ['より', 'ほど', 'だけ', 'から'], answer: 1 },
      { question: '「減る」的意思是？', options: ['增加', '保持', '變化', '減少'], answer: 3 },
      { question: '「〜ば〜ほど」表示？', options: ['越...越...', '雖然...但...', '不但...而且...', '因為...所以...'], answer: 0 },
    ]
  },

  // ===================== N1 =====================
  {
    id: 'n1_ch1',
    level: 'N1',
    title: '書面語表現',
    grammar: [
      {
        pattern: '〜にほかならない',
        explanation: '正是...、不外乎...。強調唯一的原因或事實。',
        examples: [
          { jp: '成功したのは、努力の結果にほかならない。', romaji: 'Seikō shita no wa, doryoku no kekka ni hoka naranai.', zh: '成功正是努力的結果。' },
        ]
      },
      {
        pattern: '〜ざるを得ない',
        explanation: '不得不...。表示在無奈的情況下必須做某事。',
        examples: [
          { jp: '体調が悪くても、働かざるを得ない。', romaji: 'Taichō ga warukute mo, hatarakazaru o enai.', zh: '即使身體不舒服，也不得不工作。' },
        ]
      }
    ],
    vocabulary: [
      { word: '論文', reading: 'ろんぶん', romaji: 'ronbun', meaning: '論文' },
      { word: '結論', reading: 'けつろん', romaji: 'ketsuron', meaning: '結論' },
      { word: '根拠', reading: 'こんきょ', romaji: 'konkyo', meaning: '根據' },
      { word: '主張', reading: 'しゅちょう', romaji: 'shuchō', meaning: '主張' },
      { word: '矛盾', reading: 'むじゅん', romaji: 'mujun', meaning: '矛盾' },
      { word: '妥協', reading: 'だきょう', romaji: 'dakyō', meaning: '妥協' },
    ],
    quiz: [
      { question: '成功は努力の結果に___ならない。', options: ['ほか', 'わけ', 'こと', 'もの'], answer: 0 },
      { question: '働か___を得ない。', options: ['ず', 'ざる', 'ない', 'なく'], answer: 1 },
      { question: '「結論」的意思是？', options: ['開始', '過程', '結論', '假設'], answer: 2 },
      { question: '「根拠」的意思是？', options: ['根據', '根本', '根源', '根性'], answer: 0 },
      { question: '「矛盾」的讀音是？', options: ['ぼうじゅん', 'むじゅん', 'もうじゅん', 'むじん'], answer: 1 },
      { question: '体調が悪くても、___ざるを得ない。', options: ['休ま', '働か', '食べ', '寝'], answer: 1 },
      { question: '「主張」的意思是？', options: ['妥協', '反對', '主張', '同意'], answer: 2 },
      { question: '「〜にほかならない」表示？', options: ['不得不', '正是', '不可能', '不一定'], answer: 1 },
      { question: '「妥協」的意思是？', options: ['堅持', '妥協', '反抗', '挑戰'], answer: 1 },
      { question: '「論文」的意思是？', options: ['報紙', '雜誌', '論文', '書籍'], answer: 2 },
    ]
  },
  {
    id: 'n1_ch2',
    level: 'N1',
    title: '慣用表達與文語',
    grammar: [
      {
        pattern: '〜をもって',
        explanation: '以...為期限/以...的方式。正式場合用語。',
        examples: [
          { jp: '本日をもって、閉店いたします。', romaji: 'Honjitsu o motte, heiten itashimasu.', zh: '以今日為期，結束營業。' },
        ]
      },
      {
        pattern: '〜に至るまで',
        explanation: '甚至到...的程度。表示範圍之廣。',
        examples: [
          { jp: '子供から大人に至るまで、皆が楽しめる。', romaji: 'Kodomo kara otona ni itaru made, mina ga tanoshimeru.', zh: '從小孩到大人，所有人都能享受。' },
        ]
      }
    ],
    vocabulary: [
      { word: '閉店', reading: 'へいてん', romaji: 'heiten', meaning: '關店' },
      { word: '開店', reading: 'かいてん', romaji: 'kaiten', meaning: '開店' },
      { word: '至る', reading: 'いたる', romaji: 'itaru', meaning: '到達' },
      { word: '及ぶ', reading: 'およぶ', romaji: 'oyobu', meaning: '達到/涉及' },
      { word: '伴う', reading: 'ともなう', romaji: 'tomonau', meaning: '伴隨' },
      { word: '生じる', reading: 'しょうじる', romaji: 'shōjiru', meaning: '產生' },
    ],
    quiz: [
      { question: '本日___もって、閉店いたします。', options: ['が', 'に', 'を', 'で'], answer: 2 },
      { question: '子供から大人に___まで、皆が楽しめる。', options: ['至る', '及ぶ', '伴う', '生じる'], answer: 0 },
      { question: '「閉店」的反義詞是？', options: ['開店', '休店', '出店', '入店'], answer: 0 },
      { question: '「至る」的意思是？', options: ['離開', '到達', '經過', '返回'], answer: 1 },
      { question: '「伴う」的意思是？', options: ['獨立', '伴隨', '分離', '排除'], answer: 1 },
      { question: '「生じる」的意思是？', options: ['消失', '減少', '產生', '阻止'], answer: 2 },
      { question: '「〜をもって」常用於？', options: ['日常對話', '正式場合', '朋友之間', '家庭生活'], answer: 1 },
      { question: '「及ぶ」的意思是？', options: ['到達/涉及', '超過', '不足', '保持'], answer: 0 },
      { question: '「開店」的讀音是？', options: ['かいてん', 'あけてん', 'ひらてん', 'かいみせ'], answer: 0 },
      { question: '「〜に至るまで」表示？', options: ['範圍之小', '範圍之廣', '時間之短', '距離之近'], answer: 1 },
    ]
  },
]
