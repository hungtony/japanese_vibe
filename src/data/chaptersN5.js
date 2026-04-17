// N5 章節資料 - 入門 (28章)
export const chaptersN5 = [
  // ---- 第 1 關：我是誰 (AはBです / 否定句) ----
  {
    id: 'n5_ch1',
    level: 'N5',
    title: '我是誰 (AはBです)',
    grammar: [
      {
        pattern: 'AはBです',
        explanation: '表示「A是B」，最基本的肯定句型。「は」讀作「wa」。',
        examples: [
          { jp: '私{わたし}は学生{がくせい}です。', romaji: 'Watashi wa gakusei desu.', zh: '我是學生。' },
          { jp: '田中{たなか}さんは先生{せんせい}です。', romaji: 'Tanaka-san wa sensei desu.', zh: '田中先生是老師。' },
        ]
      },
      {
        pattern: 'AはBじゃありません',
        explanation: '「A不是B」。口語也常用「〜じゃないです」。',
        examples: [
          { jp: '私{わたし}は先生{せんせい}じゃありません。', romaji: 'Watashi wa sensei ja arimasen.', zh: '我不是老師。' },
          { jp: 'あれは本{ほん}じゃないです。', romaji: 'Are wa hon ja nai desu.', zh: '那不是書。' },
        ]
      }
    ],
    vocabulary: [
      { word: '私', reading: 'わたし', romaji: 'watashi', meaning: '我' },
      { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: '學生' },
      { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: '老師' },
      { word: '日本人', reading: 'にほんじん', romaji: 'nihonjin', meaning: '日本人' },
      { word: '会社員', reading: 'かいしゃいん', romaji: 'kaishain', meaning: '公司職員' },
      { word: '名前', reading: 'なまえ', romaji: 'namae', meaning: '名字' },
      { word: 'はい', reading: 'はい', romaji: 'hai', meaning: '是' },
      { word: 'いいえ', reading: 'いいえ', romaji: 'iie', meaning: '不' },
      { word: '研究者', reading: 'けんきゅうしゃ', romaji: 'kenkyūsha', meaning: '研究員' },
      { word: '銀行員', reading: 'ぎんこういん', romaji: 'ginkōin', meaning: '銀行職員' },
    ],
    quiz: [
      { question: '私___学生です。', options: ['が', 'は', 'を', 'に'], answer: 1 },
      { question: '我不是老師：私は先生___。', options: ['です', 'ます', 'じゃありません', 'あります'], answer: 2 },
      { question: '「日本人」的讀音是？', options: ['にほんじん', 'にほんご', 'にっぽん', 'にほん'], answer: 0 },
      { question: '「会社員」的意思是？', options: ['公司職員', '會計', '公務員', '老師'], answer: 0 },
      { question: '「銀行員」的讀音是？', options: ['ぎんこういん', 'きんこういん', 'ぎんこいん', 'ぎんごいん'], answer: 0 },
    ]
  },

  // ---- 第 2 關：發問技巧 (～ですか / 疑問詞基礎) ----
  {
    id: 'n5_ch2',
    level: 'N5',
    title: '發問技巧 (～ですか)',
    grammar: [
      {
        pattern: '〜ですか',
        explanation: '在句尾加「か」表示疑問。',
        examples: [
          { jp: '田中{たなか}さんは先生{せんせい}ですか。', romaji: 'Tanaka-san wa sensei desu ka.', zh: '田中先生是老師嗎？' },
          { jp: 'あなたも学生{がくせい}ですか。', romaji: 'Anata mo gakusei desu ka.', zh: '你也是學生嗎？' },
        ]
      },
      {
        pattern: '何（なん / なに）',
        explanation: '「什麼」。詢問內容。',
        examples: [
          { jp: 'お名前{なまえ}は何{なん}ですか。', romaji: 'O-namae wa nan desu ka.', zh: '請問您的名字是什麼？' },
        ]
      }
    ],
    vocabulary: [
      { word: 'あなた', reading: 'あなた', romaji: 'anata', meaning: '你' },
      { word: '何', reading: 'なん/なに', romaji: 'nan/nani', meaning: '什麼' },
      { word: '誰', reading: 'だれ', romaji: 'dare', meaning: '誰' },
      { word: '歳', reading: 'さい', romaji: 'sai', meaning: '歲' },
      { word: 'こちら', reading: 'こちら', romaji: 'kochira', meaning: '這位' },
      { word: 'どなた', reading: 'どなた', romaji: 'donata', meaning: '哪位(禮貌)' },
      { word: '医者', reading: 'いしゃ', romaji: 'isha', meaning: '醫生' },
      { word: '大学', reading: 'だいがく', romaji: 'daigaku', meaning: '大學' },
      { word: '初めまして', reading: 'はじめまして', romaji: 'hajimemashite', meaning: '初次見面' },
      { word: 'よろしく', reading: 'よろしく', romaji: 'yoroshiku', meaning: '請多指教' },
    ],
    quiz: [
      { question: '田中さんは先生です___。', options: ['よ', 'ね', 'か', 'の'], answer: 2 },
      { question: 'お名字は___ですか。', options: ['だれ', 'なん', 'どこ', 'いつ'], answer: 1 },
      { question: '「医者」的讀音是？', options: ['いしゃ', 'いさ', 'いしゅ', 'いっしょ'], answer: 0 },
      { question: '初次見面時說：', options: ['はじめまして', 'おやすみ', 'ありがとう', 'さようなら'], answer: 0 },
      { question: '詢問「是一位（禮貌）」用哪個詞？', options: ['だれ', 'どなた', 'なん', 'どこ'], answer: 1 },
    ]
  },

  // ---- 第 3 關：這是什麼 (指示物品：これ/それ/あれ) ----
  {
    id: 'n5_ch3',
    level: 'N5',
    title: '這是什麼 (指示物品)',
    grammar: [
      {
        pattern: 'これ / それ / あれ',
        explanation: '指示物品。這、那(近你)、那(遠的)。',
        examples: [
          { jp: 'これは本{ほん}です。', romaji: 'Kore wa hon desu.', zh: '這是書。' },
          { jp: 'あれは私{わたし}の車{くるま}です。', romaji: 'Are wa watashi no kuruma desu.', zh: '那是我的車。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'これ', reading: 'これ', romaji: 'kore', meaning: '這個' },
      { word: 'それ', reading: 'それ', romaji: 'sore', meaning: '那個(近你)' },
      { word: 'あれ', reading: 'あれ', romaji: 'are', meaning: '那個(遠)' },
      { word: '本', reading: 'ほん', romaji: 'hon', meaning: '書' },
      { word: '辞書', reading: 'じしょ', romaji: 'jisho', meaning: '字典' },
      { word: '雑誌', reading: 'ざっし', romaji: 'zasshi', meaning: '雜誌' },
      { word: '新聞', reading: 'しんぶん', romaji: 'shinbun', meaning: '報紙' },
      { word: 'ノート', reading: 'のおと', romaji: 'nōto', meaning: '筆記本' },
      { word: '手帳', reading: 'てちょう', romaji: 'techō', meaning: '手帳/手冊' },
      { word: '鉛筆', reading: 'えんぴつ', romaji: 'enpitsu', meaning: '鉛筆' },
    ],
    quiz: [
      { question: '___は何ですか。(近我)', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 0 },
      { question: '「じしょ」的意思是？', options: ['雜誌', '報紙', '字典', '筆記本'], answer: 2 },
      { question: '「報紙」的讀音是？', options: ['しんぶん', 'ざっし', 'ほん', 'のおと'], answer: 0 },
      { question: '「えんぴつ」的意思是？', options: ['鉛筆', '原子筆', '筆記本', '字典'], answer: 0 },
      { question: '指遠方(多離雙方都遠)的物品用？', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 2 },
    ]
  },

  // ---- 第 4 關：我在哪裡 (指示場所：ここ/そこ/あそこ) ----
  {
    id: 'n5_ch4',
    level: 'N5',
    title: '我在哪裡 (指示場所)',
    grammar: [
      {
        pattern: 'ここ / そこ / あそこ',
        explanation: '指示場所。這兒、那兒、那兒(遠方)。',
        examples: [
          { jp: 'ここは教室{きょうしつ}です。', romaji: 'Koko wa kyōshitsu desu.', zh: '這裡地是教室。' },
          { jp: 'お手洗{てあら}いはあそこです。', romaji: 'O-tearai wa asoko desu.', zh: '洗手間在那邊。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'ここ', reading: 'ここ', romaji: 'koko', meaning: '這裡' },
      { word: 'そこ', reading: 'そこ', romaji: 'soko', meaning: '那兒' },
      { word: 'あそこ', reading: 'あそころ', romaji: 'asoko', meaning: '那邊' },
      { word: 'どこ', reading: 'どこ', romaji: 'doko', meaning: '哪裡' },
      { word: '教室', reading: 'きょうしつ', romaji: 'kyōshitsu', meaning: '教室' },
      { word: 'お手洗い', reading: 'おてあらい', romaji: 'otearai', meaning: '洗手間' },
      { word: '事務所', reading: 'じむしょ', romaji: 'jimusho', meaning: '辦公室' },
      { word: 'エレベーター', reading: 'えれべえたあ', romaji: 'erebētā', meaning: '電梯' },
      { word: 'どちら', reading: 'どちら', romaji: 'dochira', meaning: '哪邊(禮貌)' },
      { word: '自動販売機', reading: 'じどうはんばいき', romaji: 'jidōhanbaiki', meaning: '自動販賣機' },
    ],
    quiz: [
      { question: 'お手洗いは___ですか。(在哪裡)', options: ['なん', 'どこ', 'だれ', 'いつ'], answer: 1 },
      { question: '「あそこ」表示？', options: ['近我', '近你', '遠離雙方', '這面'], answer: 2 },
      { question: '「教室」的讀音是？', options: ['きょうしつ', 'きょうし', 'きょうだい', 'きょうき'], answer: 0 },
      { question: '「えれべえたあ」的意思是？', options: ['電梯', '樓梯', '電車', '教室'], answer: 0 },
      { question: '詢問場所(禮貌)用哪個詞？', options: ['どちら', 'どこ', 'なん', 'だれ'], answer: 0 },
    ]
  },

  // ---- 第 5 關：誰的物品 (名詞連接：AのB) ----
  {
    id: 'n5_ch5',
    level: 'N5',
    title: '誰的物品 (AのB)',
    grammar: [
      {
        pattern: 'N1 の N2',
        explanation: '助詞「の」表示所有、所屬。',
        examples: [
          { jp: '私{わたし}の本{ほん}です。', romaji: 'Watashi no hon desu.', zh: '是我的書。' },
          { jp: '日本{にほん}の車{くるま}です。', romaji: 'Nihon no kuruma desu.', zh: '是日本的車。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'カバン', reading: 'かばん', romaji: 'kaban', meaning: '包包' },
      { word: '鍵', reading: 'かぎ', romaji: 'kagi', meaning: '鑰匙' },
      { word: '時計', reading: 'とけい', romaji: 'tokei', meaning: '手錶' },
      { word: '傘', reading: 'かさ', romaji: 'kasa', meaning: '傘' },
      { word: '電話', reading: 'でんわ', romaji: 'denwa', meaning: '電話' },
      { word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: '鞋子' },
      { word: 'テレビ', reading: 'てれび', romaji: 'terebi', meaning: '電視' },
      { word: 'カメラ', reading: 'かめら', romaji: 'kamera', meaning: '相機' },
      { word: 'パソコン', reading: 'ぱそこん', romaji: 'pasokon', meaning: '電腦' },
      { word: 'だれの', reading: 'だれの', romaji: 'dare no', meaning: '誰的' },
    ],
    quiz: [
      { question: '私___本です。', options: ['は', 'の', 'を', 'に'], answer: 1 },
      { question: '「かぎ」的意思是？', options: ['鑰匙', '傘', '包包', '手錶'], answer: 0 },
      { question: '「くつ」的意思是？', options: ['鞋子', '帽子', '衣服', '傘'], answer: 0 },
      { question: '「電腦」的讀音是？', options: ['ぱそこん', 'てれび', 'かめら', 'かぎ'], answer: 0 },
      { question: '這是誰的傘？：これは___の傘ですか。', options: ['だれ', 'なん', 'どこ', 'いつ'], answer: 0 },
    ]
  },

  // ---- 第 6 關：現在幾點 (時間表達：今～時～分です) ----
  {
    id: 'n5_ch6',
    level: 'N5',
    title: '現在幾點 (時間表達)',
    grammar: [
      {
        pattern: '時（じ）/ 分（ふん・ぷん）',
        explanation: '表示時間。注意 4, 7, 9 時的讀法。',
        examples: [
          { jp: '今{いま}、四時{よじ}です。', romaji: 'Ima, yo-ji desu.', zh: '現在是四點。' },
          { jp: '九時{くじ}半{はん}です。', romaji: 'Kuji han desu.', zh: '九點半。' },
        ]
      }
    ],
    vocabulary: [
      { word: '今', reading: 'いま', romaji: 'ima', meaning: '現在' },
      { word: '時', reading: 'じ', romaji: 'ji', meaning: '時' },
      { word: '分', reading: 'ふん/ぷん', romaji: 'fun/pun', meaning: '分' },
      { word: '半', reading: 'はん', romaji: 'han', meaning: '半' },
      { word: '午前', reading: 'ごぜん', romaji: 'gozen', meaning: '上午' },
      { word: '午後', reading: 'ごご', romaji: 'gogo', meaning: '下午' },
      { word: '朝', reading: 'あさ', romaji: 'asa', meaning: '早上' },
      { word: '晩', reading: 'ばん', romaji: 'ban', meaning: '晚上' },
      { word: '昼', reading: 'ひる', romaji: 'hiru', meaning: '中午' },
      { word: '前', reading: 'まえ', romaji: 'mae', meaning: '前/以前' },
    ],
    quiz: [
      { question: '「四點」的正確讀法是？', options: ['しじ', 'よんじ', 'よじ', 'よんじ'], answer: 2 },
      { question: '九點半的「半」讀法是？', options: ['はん', 'ほん', 'ばん', 'ぱん'], answer: 0 },
      { question: '「上午」的日文是？', options: ['ごぜん', 'ごご', 'あさ', 'ばん'], answer: 0 },
      { question: '「あさ」的意思是？', options: ['早上', '中午', '晚上', '下午'], answer: 0 },
      { question: '「ごご」的意思是？', options: ['下午', '上午', '現在', '以後'], answer: 0 },
    ]
  },

  // ---- 第 7 關：動詞啟動 (～ます / ～ました) ----
  {
    id: 'n5_ch7',
    level: 'N5',
    title: '動詞啟動 (～ます)',
    grammar: [
      {
        pattern: '動詞ます形',
        explanation: '肯定：～ます，否定：～ません，過去：～ました。日文動詞依「ます」前一音分為I類(い段)、II類(え段或少數い段)、III類(します、きます)。',
        examples: [
          { jp: '勉強{べんきょう}します。', romaji: 'Benkyō shimasu.', zh: '學習。' },
          { jp: '昨日{きのう}、起{お}きませんでした。', romaji: 'Kinō, okimasen deshita.', zh: '昨天沒起床。' },
        ]
      }
    ],
    vocabulary: [
      { word: '起きます', reading: 'おきます', romaji: 'okimasu', meaning: '起床 (II類動詞)' },
      { word: '寝ます', reading: 'ねます', romaji: 'nemasu', meaning: '睡覺 (II類動詞)' },
      { word: '勉強します', reading: 'べんきょうします', romaji: 'benkyō shimasu', meaning: '學習 (III類動詞)' },
      { word: '終わります', reading: 'おわります', romaji: 'owarimasu', meaning: '結束 (I類動詞)' },
      { word: '働きます', reading: 'はたらきます', romaji: 'hatarakimasu', meaning: '工作 (I類動詞)' },
      { word: '休みます', reading: 'やすみます', romaji: 'yasumimasu', meaning: '休息 (I類動詞)' },
      { word: '昨日', reading: 'きのう', romaji: 'kinō', meaning: '昨天' },
      { word: '今日', reading: 'きょう', romaji: 'kyō', meaning: '今天' },
      { word: '明日', reading: 'あした', romaji: 'ashita', meaning: '明天' },
      { word: '毎日', reading: 'まいにち', romaji: 'mainichi', meaning: '每天' },
    ],
    quiz: [
      { question: '昨日、勉強___。(過去式)', options: ['します', 'しました', 'しません', 'した'], answer: 1 },
      { question: '「ねます」的意思是？', options: ['起床', '睡覺', '學習', '結束'], answer: 1 },
      { question: '「工作」的日文是？', options: ['はたらきます', 'やすみます', 'べんきょうします', 'おわります'], answer: 0 },
      { question: '「あした」的意思是？', options: ['今天', '明天', '後天', '昨天'], answer: 1 },
      { question: '「昨天」的讀音是？', options: ['きのう', 'きょう', 'あした', 'まいにち'], answer: 0 },
    ]
  },

  // ---- 第 8 關：移動方向 (去、來、回：行きます / 来ます / 帰ります) ----
  {
    id: 'n5_ch8',
    level: 'N5',
    title: '移動方向 (去、來、回)',
    grammar: [
      {
        pattern: '場所 + へ + 行きます / 来ます / 帰ります',
        explanation: '表示移動的方向。助詞「へ」讀作「e」。',
        examples: [
          { jp: '日本{にほん}へ行{い}きます。', romaji: 'Nihon e ikimasu.', zh: '去日本。' },
          { jp: '家{うち}へ帰{かえ}ります。', romaji: 'Uchi e kaerimasu.', zh: '回家。' },
        ]
      }
    ],
    vocabulary: [
      { word: '行きます', reading: 'いきます', romaji: 'ikimasu', meaning: '去 (I類動詞)' },
      { word: '来ます', reading: 'きます', romaji: 'kimasu', meaning: '來 (III類動詞)' },
      { word: '帰ります', reading: 'かえります', romaji: 'kaerimasu', meaning: '回家 (I類動詞)' },
      { word: '学校', reading: 'がっこう', romaji: 'gakkō', meaning: '學校' },
      { word: '駅', reading: 'えき', romaji: 'eki', meaning: '火車站' },
      { word: 'コンビニ', reading: 'こんびに', romaji: 'konbini', meaning: '超商' },
      { word: '飛行機', reading: 'ひこうき', romaji: 'hikōki', meaning: '飛機' },
      { word: '船', reading: 'ふね', romaji: 'fune', meaning: '船' },
      { word: '歩いて', reading: 'あるいて', romaji: 'aruite', meaning: '走路' },
      { word: 'どこ', reading: 'どこ', romaji: 'doko', meaning: '哪裡' },
    ],
    quiz: [
      { question: '日本___行きます。', options: ['を', 'へ', 'に', 'で'], answer: 1 },
      { question: '「かえります」的漢字是？', options: ['行きます', '来ます', '帰ります', '見ます'], answer: 2 },
      { question: '「えき」的意思是？', options: ['學校', '超商', '火車站', '飛機'], answer: 2 },
      { question: '「走路」的日文是？', options: ['あるいて', 'はしって', 'いって', 'きて'], answer: 0 },
      { question: '「ひこうき」的意思是？', options: ['火車', '飛機', '船', '自行車'], answer: 1 },
    ]
  },

  // ---- 第 9 關：交通與夥伴 (搭什麼車、跟誰去：～で / ～之) ----
  {
    id: 'n5_ch9',
    level: 'N5',
    title: '交通與夥伴',
    grammar: [
      {
        pattern: '交通工具 + で / 人 + と',
        explanation: '「で」表示手段，「と」表示夥伴。',
        examples: [
          { jp: '電車{でんしゃ}で行{い}きます。', romaji: 'Densha de ikimasu.', zh: '搭電車去。' },
          { jp: '家族{かぞく}と来{き}ました。', romaji: 'Kazoku to kimashita.', zh: '和家人一起來。' },
        ]
      }
    ],
    vocabulary: [
      { word: '電車', reading: 'でんしゃ', romaji: 'densha', meaning: '電車' },
      { word: '家族', reading: 'かぞく', romaji: 'kazoku', meaning: '家人' },
      { word: '友達', reading: 'ともだち', romaji: 'tomodachi', meaning: '朋友' },
      { word: '自転車', reading: 'じてんしゃ', romaji: 'jitensha', meaning: '自行車' },
      { word: 'バス', reading: 'ばす', romaji: 'basu', meaning: '公車' },
      { word: 'タクシー', reading: 'たくしい', romaji: 'takushī', meaning: '出租車' },
      { word: '地下鉄', reading: 'ちかてつ', romaji: 'chikatetsu', meaning: '地下鐵' },
      { word: '一人で', reading: 'ひとりで', romaji: 'hitori de', meaning: '一個人' },
      { word: '誰', reading: 'だれ', romaji: 'dare', meaning: '誰' },
      { word: 'いつ', reading: 'いつ', romaji: 'itsu', meaning: '何時' },
    ],
    quiz: [
      { question: '電車___行きます。(搭乘)', options: ['を', 'へ', 'で', 'と'], answer: 2 },
      { question: '朋友___行きます。(和...)', options: ['で', 'と', 'へ', 'を'], answer: 1 },
      { question: '「地下鐵」的讀音是？', options: ['ちかてつ', 'でんしゃ', 'ばす', 'たくしい'], answer: 0 },
      { question: '「何時」的日文是？', options: ['いつ', 'だれ', 'どこ', 'なん'], answer: 0 },
      { question: '「ひとりで」的意思是？', options: ['兩個人', '誰', '大家', '一個人'], answer: 3 },
    ]
  },

  // ---- 第 10 關：吃喝玩樂 (及物動詞與受詞：～を 食べます/飲みます) ----
  {
    id: 'n5_ch10',
    level: 'N5',
    title: '吃喝玩樂 (受詞 + を)',
    grammar: [
      {
        pattern: '名詞 + を + 動詞',
        explanation: '「を」標示動作的直接對象。',
        examples: [
          { jp: 'ご飯{ごはん}を食{た}べます。', romaji: 'Gohan o tabemasu.', zh: '吃飯。' },
          { jp: '音楽{おんがく}を聞{き}きます。', romaji: 'Ongaku o kikimasu.', zh: '聽音樂。' },
        ]
      }
    ],
    vocabulary: [
      { word: '食べます', reading: 'たべます', romaji: 'tabemasu', meaning: '吃 (II類動詞)' },
      { word: '飲みます', reading: 'のみます', romaji: 'nomimasu', meaning: '喝 (I類動詞)' },
      { word: '見ます', reading: 'みます', romaji: 'mimasu', meaning: '看 (II類動詞)' },
      { word: '聞きます', reading: 'ききます', romaji: 'kikimasu', meaning: '聽/問 (I類動詞)' },
      { word: '読みます', reading: 'よみます', romaji: 'yomimasu', meaning: '讀 (I類動詞)' },
      { word: '書きます', reading: 'かきます', romaji: 'kakimasu', meaning: '寫 (I類動詞)' },
      { word: '買います', reading: 'かいます', romaji: 'kaimasu', meaning: '買 (I類動詞)' },
      { word: '撮ります', reading: 'とります', romaji: 'torimasu', meaning: '拍照 (I類動詞)' },
      { word: 'します', reading: 'します', romaji: 'shimasu', meaning: '做 (III類動詞)' },
      { word: '会います', reading: 'あいます', romaji: 'aimasu', meaning: '遇見 (I類動詞)' },
    ],
    quiz: [
      { question: 'ご飯___食べます。', options: ['を', 'が', 'に', 'で'], answer: 0 },
      { question: '「みます」的意思是？', options: ['看', '聽', '吃', '喝'], answer: 0 },
      { question: '「讀書」的日文是？', options: ['本を読みます', '本を書きます', '本を買います', '本をみます'], answer: 0 },
      { question: '「拍照」的日文是？', options: ['とります', 'かきます', 'あいます', 'します'], answer: 0 },
      { question: '見朋友：友達___あいます。', options: ['を', 'に', 'が', 'で'], answer: 1 },
    ]
  },

  // ---- 第 11 關：現在正在... (狀態與進行) ----
  {
    id: 'n5_ch11',
    level: 'N5',
    title: '現在正在... (狀態與進行)',
    grammar: [
      {
        pattern: 'Vて形 + います',
        explanation: '表示動作正在進行、狀態持續或反覆的習慣。',
        examples: [
          { jp: '今{いま}、雨{あめ}が降{ふ}っています。', romaji: 'Ima, ame ga futte imasu.', zh: '現在正在下雨。' },
          { jp: '私{わたし}は車{くるま}を持{も}っています。', romaji: 'Watashi wa kuruma o motte imasu.', zh: '我有一輛車（狀態持續）。' }
        ]
      }
    ],
    vocabulary: [
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚 (III類動詞)' },
      { word: '知る', reading: 'しる', romaji: 'shiru', meaning: '知道/認識 (I類動詞)' },
      { word: '住む', reading: 'すむ', romaji: 'sumu', meaning: '居住 (I類動詞)' },
      { word: '持つ', reading: 'もつ', romaji: 'motsu', meaning: '持有/拿 (I類動詞)' },
      { word: '降る', reading: 'ふる', romaji: 'furu', meaning: '降下(雨/雪) (I類動詞)' },
      { word: '売る', reading: 'うる', romaji: 'uru', meaning: '賣 (I類動詞)' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作 (I類動詞)' },
      { word: '独身', reading: 'どくしん', romaji: 'dokushin', meaning: '單身 (名詞)' },
      { word: '車', reading: 'くるま', romaji: 'kuruma', meaning: '車 (名詞)' },
      { word: '今', reading: 'いま', romaji: 'ima', meaning: '現在 (名詞)' }
    ],
    quiz: [
      { question: '表示正在下雨：雨が___。', options: ['降ります', '降って', '降っています', '降った'], answer: 2 },
      { question: '「知る」的て形+います形式是？', options: ['知っています', '知ります', '知って', '知りました'], answer: 0 },
      { question: '「結婚する」屬於哪一類動詞？', options: ['I類動詞', 'II類動詞', 'III類動詞', '不規則動詞'], answer: 2 },
      { question: '「車」的讀音是？', options: ['くるま', 'でんしゃ', 'じてんしゃ', 'ばす'], answer: 0 },
      { question: '「單身」的日文是？', options: ['どくしん', 'けっこん', 'かぞく', 'ともだち'], answer: 0 }
    ]
  },

  // ---- 第 12 關：做點什麼吧 (邀請與提議：～ませんか / ～ましょう) ----
  {
    id: 'n5_ch12',
    level: 'N5',
    title: '做點什麼吧 (邀請與提議)',
    grammar: [
      {
        pattern: '〜ませんか / 〜ましょう',
        explanation: '邀請與提議。「要不要...」、「...吧」。',
        examples: [
          { jp: '行{い}きませんか。', romaji: 'Ikimasen ka.', zh: '要不要一起去呢？' },
          { jp: '休{やす}みましょう。', romaji: 'Yasumimashō.', zh: '休息一下吧。' },
        ]
      }
    ],
    vocabulary: [
      { word: '一緒に', reading: 'いっしょに', romaji: 'issho ni', meaning: '一起' },
      { word: 'ちょっと', reading: 'ちょっと', romaji: 'chotto', meaning: '稍微' },
      { word: '休みます', reading: 'やすみます', romaji: 'yasumimasu', meaning: '休息 (I類動詞)' },
      { word: '映画', reading: 'えいが', romaji: 'eiga', meaning: '電影' },
      { word: '音楽', reading: 'おんがく', romaji: 'ongaku', meaning: '音樂' },
      { word: 'テニス', reading: 'てにす', romaji: 'tenisu', meaning: '網球' },
      { word: 'お酒', reading: 'おさけ', romaji: 'osake', meaning: '酒' },
      { word: 'よく', reading: 'よく', romaji: 'yoku', meaning: '經常' },
      { word: '時々', reading: 'ときどき', romaji: 'tokidoki', meaning: '時常' },
      { word: 'いいですね', reading: 'いいですね', romaji: 'ii desu ne', meaning: '好啊' },
    ],
    quiz: [
      { question: 'いっしょに行き___か。(邀請)', options: ['ます', 'ましょう', 'ませんか', 'ますか'], answer: 2 },
      { question: '稍微休息一下吧：休み___。', options: ['ます', 'ましょう', 'ませんか', 'ました'], answer: 1 },
      { question: '「時常」的日文是？', options: ['ときどき', 'よく', 'ちょっと', 'いっしょに'], answer: 0 },
      { question: '「えいが」的意思是？', options: ['音樂', '電影', '酒', '網球'], answer: 1 },
      { question: '「よく」的意思是？', options: ['不常', '稍微', '一起', '經常'], answer: 3 },
    ]
  },

  // ---- 第 13 關：工具的運用 (用什麼工具做：～で～をします) ----
  {
    id: 'n5_ch13',
    level: 'N5',
    title: '工具的運用',
    grammar: [
      {
        pattern: '道具 + で + 動作',
        explanation: '「で」表示使用的工具或手段。',
        examples: [
          { jp: '箸{はし}で食{た}べます。', romaji: 'Hashi de tabemasu.', zh: '用筷子吃。' },
          { jp: '日本語{にほんご}で手紙{てがみ}を書{か}きます。', romaji: 'Nihongo de tegami o kakimasu.', zh: '用日語寫信。' },
        ]
      }
    ],
    vocabulary: [
      { word: '箸', reading: 'はし', romaji: 'hashi', meaning: '筷子 (名詞)' },
      { word: '手', reading: 'て', romaji: 'te', meaning: '手 (名詞)' },
      { word: '日本語', reading: 'にほんご', romaji: 'nihongo', meaning: '日語 (名詞)' },
      { word: 'スプーン', reading: 'すぷうん', romaji: 'supūn', meaning: '湯匙 (名詞)' },
      { word: 'フォーク', reading: 'ふおおく', romaji: 'fōku', meaning: '叉子 (名詞)' },
      { word: 'ナイフ', reading: 'ないふ', romaji: 'naifu', meaning: '刀子 (名詞)' },
      { word: 'ハサミ', reading: 'はさみ', romaji: 'hasami', meaning: '剪刀 (名詞)' },
      { word: 'パソコン', reading: 'ぱそこん', romaji: 'pasokon', meaning: '電腦 (名詞)' },
      { word: 'ケータイ', reading: 'けえたい', romaji: 'kētai', meaning: '手機 (名詞)' },
      { word: '紙', reading: 'かみ', romaji: 'kami', meaning: '紙 (名詞)' },
    ],
    quiz: [
      { question: '箸___食べます。', options: ['を', 'へ', 'で', 'に'], answer: 2 },
      { question: '「にほんご」的意思是？', options: ['英語', '中文', '日語', '法語'], answer: 2 },
      { question: 'ハサミ___紙を切ります。(用剪刀剪紙)', options: ['を', 'に', 'が', 'で'], answer: 3 },
      { question: '「すぷうん」的意思是？', options: ['刀子', '叉子', '湯匙', '筷子'], answer: 2 },
      { question: '用電腦寫信：パソコン___手紙を書きます。', options: ['を', 'で', 'に', 'へ'], answer: 1 },
    ]
  },

  // ---- 第 14 關：收與送 (基礎授受動詞：あげます / もらいます) ----
  {
    id: 'n5_ch14',
    level: 'N5',
    title: '收與送 (授受基礎)',
    grammar: [
      {
        pattern: 'A は B に 物 を あげます / もらいます',
        explanation: '「あげます」是我給別人，「もらいます」是我從別人那裡得到。',
        examples: [
          { jp: '私{わたし}は田中{たなか}さんに本{ほん}をあげました。', romaji: 'Watashi wa Tanaka-san ni hon o agemashita.', zh: '我給了田中先生書。' },
          { jp: '私{わたし}は先生{せんせい}に時計{とけい}をもらいました。', romaji: 'Watashi wa sensei ni tokei o moraimashita.', zh: '我從老師那裡得到了手錶。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'あげます', reading: 'あげます', romaji: 'agemasu', meaning: '給予 (II類動詞)' },
      { word: 'もらいます', reading: 'もらいます', romaji: 'moraimasu', meaning: '得到 (I類動詞)' },
      { word: '花', reading: 'はな', romaji: 'hana', meaning: '花' },
      { word: 'クリスマス', reading: 'くりすます', romaji: 'kurisumasu', meaning: '聖誕節' },
      { word: 'チョコレート', reading: 'ちょこれえと', romaji: 'chokorēto', meaning: '巧克力' },
      { word: 'シャツ', reading: 'しゃつ', romaji: 'shatsu', meaning: '襯衫' },
      { word: '父', reading: 'ちち', romaji: 'chichi', meaning: '(我)爸爸' },
      { word: '母', reading: 'はは', romaji: 'haha', meaning: '(我)媽媽' },
      { word: '兄', reading: 'あに', romaji: 'ani', meaning: '(我)哥哥' },
      { word: '姉', reading: 'あね', romaji: 'ane', meaning: '(我)姊姊' },
    ],
    quiz: [
      { question: '我給田中先生：田中さんに___。', options: ['あげます', 'もらいます', 'くれます', 'あります'], answer: 0 },
      { question: '「もらいます」的意思是？', options: ['給予', '得到', '買', '賣'], answer: 1 },
      { question: '「聖誕節」的日文是？', options: ['くりすます', 'ちょこれえと', 'はな', 'しゃつ'], answer: 0 },
      { question: '「はは」的意思是？', options: ['爸爸', '媽媽', '哥哥', '姊姊'], answer: 1 },
      { question: '「襯衫」的日文讀音是？', options: ['しゃつ', 'ぱんつ', 'くつ', 'かばん'], answer: 0 },
    ]
  },

  // ---- 第 15 關：形容詞入門 (い形容詞與な形容詞的肯定) ----
  {
    id: 'n5_ch15',
    level: 'N5',
    title: '形容詞入門',
    grammar: [
      {
        pattern: 'い形容詞 / な形容詞',
        explanation: '形容詞分兩類：い形容詞字尾是「い」，な形容詞接名詞時加「な」。(注意：きれい、有名是な形容詞)',
        examples: [
          { jp: 'この靴{くつ}は安{やす}いです。', romaji: 'Kono kutsu wa yasui desu.', zh: '這雙鞋很便宜。' },
          { jp: '田中{たなか}さんは親切{しんせつ}な人{ひと}です。', romaji: 'Tanaka-san wa shinsetsu na hito desu.', zh: '田中先生是個親切的人。' },
        ]
      }
    ],
    vocabulary: [
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜 (い形容詞)' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '高/貴 (い形容詞)' },
      { word: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaning: '親切 (な形容詞)' },
      { word: 'きれい', reading: 'きれい', romaji: 'kirei', meaning: '漂亮 (な形容詞)' },
      { word: 'おいしい', reading: 'おいしい', romaji: 'oishii', meaning: '好吃 (い形容詞)' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '寒冷 (い形容詞)' },
      { word: '暑い', reading: 'あつい', romaji: 'atsui', meaning: '炎熱 (い形容詞)' },
      { word: '有名', reading: 'ゆうめい', romaji: 'yūmei', meaning: '有名 (な形容詞)' },
      { word: '元気', reading: 'げんき', romaji: 'genki', meaning: '健康/元氣 (な形容詞)' },
      { word: '静か', reading: 'しずか', romaji: 'shizuka', meaning: '安靜 (な形容詞)' },
    ],
    quiz: [
      { question: '「便宜」的反義詞(貴)是？', options: ['高い', '低い', '白い', '赤い'], answer: 0 },
      { question: '「きれい」是哪種形容詞？', options: ['い形容詞', 'な形容詞', '動詞', '副詞'], answer: 1 },
      { question: '「おいしい」的意思是？', options: ['好吃的', '難吃的', '貴的', '便宜的'], answer: 0 },
      { question: '「有名」的讀音是？', options: ['ゆうめい', 'ゆうめ', 'ゆめ', 'ゆうな'], answer: 0 },
      { question: '「熱」的反義詞(冷)是？', options: ['寒い', '冷たい', '暑い', '低い'], answer: 0 },
    ]
  },

  // ---- 第 16 關：形容詞變身 (形容詞的否定與過去式) ----
  {
    id: 'n5_ch16',
    level: 'N5',
    title: '形容詞變身',
    grammar: [
      {
        pattern: 'い形：〜くない / 〜かった',
        explanation: 'い形容詞的否定去「い」加「くない」，過去式去「い」加「かった」。(な形容詞則用 じゃありません / でした)',
        examples: [
          { jp: '安{やす}くないです。', romaji: 'Yasukunai desu.', zh: '不便宜。' },
          { jp: '安{やす}かったです。', romaji: 'Yasukatta desu.', zh: '很便宜(過去)。' },
        ]
      }
    ],
    vocabulary: [
      { word: '暑くない', reading: 'あつくない', romaji: 'atsukunai', meaning: '不熱 (い形容詞)' },
      { word: 'よかったです', reading: 'よかったです', romaji: 'yokatta desu', meaning: '太好了 (い形容詞)' },
      { word: '多くない', reading: 'おおくない', romaji: 'ōkunai', meaning: '不多 (い形容詞)' },
      { word: '多い', reading: 'おおい', romaji: 'ōi', meaning: '多 (い形容詞)' },
      { word: '少ない', reading: 'すくない', romaji: 'sukunai', meaning: '少 (い形容詞)' },
      { word: '広い', reading: 'ひろい', romaji: 'hiroi', meaning: '寬敞 (い形容詞)' },
      { word: '狭い', reading: 'せまい', romaji: 'semai', meaning: '狹窄 (い形容詞)' },
      { word: '近い', reading: 'ちかい', romaji: 'chikai', meaning: '近 (い形容詞)' },
      { word: '遠い', reading: 'とおい', romaji: 'tooi', meaning: '遠 (い形容詞)' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌 (い形容詞)' },
    ],
    quiz: [
      { question: '「高い」的過去式是？', options: ['高かったです', '高いでした', '高くない', '高いです'], answer: 0 },
      { question: '「いい」的否定是？', options: ['よくない', 'いくない', 'いいない', 'よくあり'], answer: 0 },
      { question: '「寬敞」的日文是？', options: ['ひろい', 'せまい', 'おおい', 'すくない'], answer: 0 },
      { question: '「忙」的日文是？', options: ['いそがしい', 'ひま', 'たのしい', 'うれしい'], answer: 0 },
      { question: '「多い」的反義詞是？', options: ['少ない', '近い', '遠い', '広い'], answer: 0 },
    ]
  },

  // ---- 第 17 關：專長與喜好 (喜歡/討厭/擅長：好き/嫌い/上手) ----
  {
    id: 'n5_ch17',
    level: 'N5',
    title: '專長與喜好',
    grammar: [
      {
        pattern: 'A は B が 好{す}き / 上{じょう}手{ず} です',
        explanation: '喜好與能力對象用「が」。',
        examples: [
          { jp: '私{わたし}は料理{りょうり}が好{す}きです。', romaji: 'Watashi wa ryōri ga suki desu.', zh: '我喜歡料理。' },
          { jp: '田中{たなか}さんは日本語{にほんご}が上手{じょうず}です。', romaji: 'Tanaka-san wa nihongo ga jōzu desu.', zh: '田中先生日語很好。' },
        ]
      }
    ],
    vocabulary: [
      { word: '好き', reading: 'すき', romaji: 'suki', meaning: '喜歡 (な形容詞)' },
      { word: '嫌い', reading: 'きらい', romaji: 'kirai', meaning: '討厭 (な形容詞)' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長 (な形容詞)' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: '不擅長 (な形容詞)' },
      { word: '料理', reading: 'りょうり', romaji: 'ryōri', meaning: '料理/烹飪' },
      { word: 'スポーツ', reading: 'すぽおつ', romaji: 'supōtsu', meaning: '運動' },
      { word: '野球', reading: 'やきゅう', romaji: 'yakyū', meaning: '棒球' },
      { word: '歌', reading: 'うた', romaji: 'uta', meaning: '歌曲/唱歌' },
      { word: 'ダンス', reading: 'だんす', romaji: 'dansu', meaning: '舞蹈' },
      { word: 'カラオケ', reading: 'からおけ', romaji: 'karaoke', meaning: '卡拉OK' },
    ],
    quiz: [
      { question: '料理___好きです。', options: ['を', 'に', 'が', 'で'], answer: 2 },
      { question: '擅長的反義詞(不擅長)是？', options: ['下手', '上手', '苦手', '得意'], answer: 0 },
      { question: '「唱歌」的日文讀音是？', options: ['うた', 'おと', 'はな', 'ねこ'], answer: 0 },
      { question: '「運動」的日文是？', options: ['すぽおつ', 'からおけ', 'だんす', 'りょうり'], answer: 0 },
      { question: '「下手」的意思是？', options: ['擅長', '不擅長', '喜歡', '討厭'], answer: 1 },
    ]
  },

  // ---- 第 18 關：有什麼東西 (存在動詞：あります / います) ----
  {
    id: 'n5_ch18',
    level: 'N5',
    title: '有什麼東西 (存在句)',
    grammar: [
      {
        pattern: 'あります / います',
        explanation: '無生命或植物用「あります」，人或動物用「います」。',
        examples: [
          { jp: '本{ほん}があります。', romaji: 'Hon ga arimasu.', zh: '有書。' },
          { jp: '犬{いぬ}がいます。', romaji: 'Inu ga imasu.', zh: '有狗。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'あります', reading: 'あります', romaji: 'arimasu', meaning: '有(無生命) (I類動詞)' },
      { word: 'います', reading: 'います', romaji: 'imasu', meaning: '有(有生命) (II類動詞)' },
      { word: '猫', reading: 'ねこ', romaji: 'neko', meaning: '貓' },
      { word: '犬', reading: 'いぬ', romaji: 'inu', meaning: '狗' },
      { word: '男の人', reading: 'おとこのひと', romaji: 'otoko no hito', meaning: '男人' },
      { word: '女の人', reading: 'おんなのひと', romaji: 'onna no hito', meaning: '女人' },
      { word: '子供', reading: 'こども', romaji: 'kodomo', meaning: '小孩' },
      { word: '電池', reading: 'でんち', romaji: 'denchi', meaning: '電池' },
      { word: '箱', reading: 'はこ', romaji: 'hako', meaning: '箱子' },
      { word: '冷蔵庫', reading: 'れいぞうこ', romaji: 'reizōko', meaning: '冰箱' },
    ],
    quiz: [
      { question: '桌上有書：本が___。', options: ['います', 'あります', 'します', 'きます'], answer: 1 },
      { question: '他在這裡：彼が___。', options: ['あります', 'います', 'します', 'きます'], answer: 1 },
      { question: '「男の人」的意思是？', options: ['男人', '女人', '小孩', '老人'], answer: 0 },
      { question: '「電池」的讀音是？', options: ['でんち', 'でんわ', 'てれび', 'ぱそこん'], answer: 0 },
      { question: '「れいぞうこ」的意思是？', options: ['洗衣機', '冰箱', '箱子', '電視'], answer: 1 },
    ]
  },

  // ---- 第 19 關：上上下下 (位置詞：上/下/前/後/中/外) ----
  {
    id: 'n5_ch19',
    level: 'N5',
    title: '上上下下 (位置詞)',
    grammar: [
      {
        pattern: '物品 A + の + 位置',
        explanation: '表示相對位置。',
        examples: [
          { jp: '箱{はこ}の中{なか}に何{なに}がありますか。', romaji: 'Hako no naka ni nani ga arimasu ka.', zh: '箱子裡有什麼？' },
        ]
      }
    ],
    vocabulary: [
      { word: '上', reading: 'うえ', romaji: 'ue', meaning: '上' },
      { word: '下', reading: 'した', romaji: 'shita', meaning: '下' },
      { word: '中', reading: 'なか', romaji: 'naka', meaning: '中/裡面' },
      { word: '前', reading: 'まえ', romaji: 'mae', meaning: '前' },
      { word: '後ろ', reading: 'うしろ', romaji: 'ushiro', meaning: '後面' },
      { word: '右', reading: 'みぎ', romaji: 'migi', meaning: '右' },
      { word: '左', reading: 'ひだり', romaji: 'hidari', meaning: '左' },
      { word: '隣', reading: 'となり', romaji: 'tonari', meaning: '旁邊' },
      { word: '近く', reading: 'ちかく', romaji: 'chikaku', meaning: '附近' },
      { word: 'ドア', reading: 'どあ', romaji: 'doa', meaning: '門' },
    ],
    quiz: [
      { question: '箱子裡：箱の___。', options: ['うえ', 'なか', 'した', 'そと'], answer: 1 },
      { question: '「した」的漢字是？', options: ['上', '下', '左', '右'], answer: 1 },
      { question: '「右邊」的讀音是？', options: ['みぎ', 'ひだり', 'まえ', 'うしろ'], answer: 0 },
      { question: '「となり」的意思是？', options: ['旁邊', '上面', '裡面', '後面'], answer: 0 },
      { question: '「うしろ」的意思是？', options: ['前面', '後面', '左邊', '右邊'], answer: 1 },
    ]
  },

  // ---- 第 20 關：算算有幾個 (數量詞的應用) ----
  {
    id: 'n5_ch20',
    level: 'N5',
    title: '算算有幾個 (數量詞)',
    grammar: [
      {
        pattern: '～つ / ～人（にん） / ～枚（まい）',
        explanation: '常見的數量詞。',
        examples: [
          { jp: 'りんごを三{みっ}つ買{か}いました。', romaji: 'Ringo o mittsu kaimashita.', zh: '買了三個蘋果。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'ひとつ', reading: 'ひとつ', romaji: 'hitotsu', meaning: '一個' },
      { word: 'ひとり', reading: 'ひとり', romaji: 'hitori', meaning: '一人' },
      { word: '二枚', reading: 'にまい', romaji: 'nimai', meaning: '兩枚' },
      { word: 'ふたり', reading: 'ふたり', romaji: 'futari', meaning: '兩個人' },
      { word: '何人', reading: 'なんにん', romaji: 'nannin', meaning: '幾個人' },
      { word: 'いくつ', reading: 'いくつ', romaji: 'ikutsu', meaning: '幾個' },
      { word: 'どのくらい', reading: 'どのくらい', romaji: 'dono kurai', meaning: '多久/期間' },
      { word: '一週間', reading: 'いっしゅうかん', romaji: 'isshukan', meaning: '一星期' },
      { word: '一ヶ月', reading: 'いっかげつ', romaji: 'ikkagetsu', meaning: '一個月' },
      { word: '一年', reading: 'いちねん', romaji: 'ichinen', meaning: '一年' },
    ],
    quiz: [
      { question: '一個蘋果：りんご一個___。', options: ['ひとつ', 'ひとり', 'いちまい', 'いっこ'], answer: 0 },
      { question: '「三人」的讀音是？', options: ['さんにん', 'はんにん', 'みたり', 'さんじん'], answer: 0 },
      { question: '「兩個人」的讀音是？', options: ['ふたり', 'ひとり', 'ににん', 'さんにん'], answer: 0 },
      { question: '「いくつ」的意思是？', options: ['幾個', '誰', '哪裡', '何時'], answer: 0 },
      { question: '詢問「多久（時間）」用？', options: ['どのくらい', 'どこ', 'なんにん', 'いくつ'], answer: 0 },
    ]
  },

  // ---- 第 21 關：超級比一比 (比較句型：A比B... / 最...) ----
  {
    id: 'n5_ch21',
    level: 'N5',
    title: '超級比一比 (比較)',
    grammar: [
      {
        pattern: 'A より B の ほうが 〜',
        explanation: 'A比B更...。',
        examples: [
          { jp: '夏{なつ}より冬{ふゆ}のほうが好{す}きです。', romaji: 'Natsu yori fuyu no hō ga suki desu.', zh: '比起夏天，更喜歡冬天。' },
        ]
      }
    ],
    vocabulary: [
      { word: '夏', reading: 'なつ', romaji: 'natsu', meaning: '夏天' },
      { word: '冬', reading: 'ふゆ', romaji: 'fuyu', meaning: '冬天' },
      { word: 'いちばん', reading: 'いちばん', romaji: 'ichiban', meaning: '最' },
      { word: '春', reading: 'はる', romaji: 'haru', meaning: '春天' },
      { word: '秋', reading: 'あき', romaji: 'aki', meaning: '秋天' },
      { word: '天気', reading: 'てんき', romaji: 'tenki', meaning: '天氣' },
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: '下雨' },
      { word: '雪', reading: 'ゆき', romaji: 'yuki', meaning: '下雪' },
      { word: '空港', reading: 'くうこう', romaji: 'kūkō', meaning: '機場' },
      { word: '寿司', reading: 'すし', romaji: 'sushi', meaning: '壽司' },
    ],
    quiz: [
      { question: '比起A：A___。', options: ['より', 'ほど', 'から', 'まで'], answer: 0 },
      { question: '「いちばん」的意思是？', options: ['最', '第一', '一下', '一點'], answer: 0 },
      { question: '「春天」的日文是？', options: ['はる', 'なつ', 'あき', 'ふゆ'], answer: 0 },
      { question: '「天氣」的日文是？', options: ['てんき', 'あめ', 'ゆき', 'はれ'], answer: 0 },
      { question: '「壽司」的正確讀法是？', options: ['すし', 'さしみ', 'てんぷら', 'うどん'], answer: 0 },
    ]
  },

  // ---- 第 22 關：我想要... (願望表達：～が欲しいです / ～たいです) ----
  {
    id: 'n5_ch22',
    level: 'N5',
    title: '我想要... (願望)',
    grammar: [
      {
        pattern: '〜が 欲{ほ}しい / 〜たい',
        explanation: '「欲しい」想要物品，「たい」想做動作。',
        examples: [
          { jp: '私{わたし}は車{くるま}が欲{ほ}しいです。', romaji: 'Watashi wa kuruma ga hoshii desu.', zh: '我想要車子。' },
          { jp: '日本{にほん}へ行{い}きたいです。', romaji: 'Nihon e ikitai desu.', zh: '我想去日本。' },
        ]
      }
    ],
    vocabulary: [
      { word: '欲しい', reading: 'ほしい', romaji: 'hoshii', meaning: '想要 (い形容詞)' },
      { word: '行きたい', reading: 'いきたい', romaji: 'ikitai', meaning: '想去 (I類動詞)' },
      { word: '食べたい', reading: 'たべたい', romaji: 'tabetai', meaning: '想吃 (II類動詞)' },
      { word: '買いたい', reading: 'かいたい', romaji: 'kaitai', meaning: '想買 (I類動詞)' },
      { word: '泳ぎたい', reading: 'およぎたい', romaji: 'oyogitai', meaning: '想游泳 (I類動詞)' },
      { word: '遊びたい', reading: 'あそびたい', romaji: 'asobitai', meaning: '想玩/遊玩 (I類動詞)' },
      { word: '飲みたい', reading: 'のみたい', romaji: 'nomitai', meaning: '想喝 (I類動詞)' },
      { word: 'ありません', reading: 'ありません', romaji: 'arimasen', meaning: '沒有 (I類動詞)' },
      { word: '何も', reading: 'なにも', romaji: 'nanimo', meaning: '什麼都(接否定)' },
      { word: 'どこへも', reading: 'どこへも', romaji: 'doko e mo', meaning: '哪裡都(接否定)' },
    ],
    quiz: [
      { question: '想要車子：車___欲しい。', options: ['を', 'に', 'で', 'が'], answer: 3 },
      { question: '「想做」的助詞通常是？', options: ['を/が', 'に', 'で', 'から'], answer: 0 },
      { question: '「想玩」的日文是？', options: ['あそびたい', 'のみたい', 'たべたい', 'かいたい'], answer: 0 },
      { question: '「哪裡都不去」的日文是？', options: ['どこへも行きません', 'なにも食べません', 'どこへ行きますか', 'だれとも会いません'], answer: 0 },
      { question: '「想游泳」的讀音是？', options: ['およぎたい', 'あそびたい', 'かいたい', 'のみたい'], answer: 0 },
    ]
  },

  // ---- 第 23 關：初探「て形」 (請做某事：～てください) ----
  {
    id: 'n5_ch23',
    level: 'N5',
    title: '初探「て形」 (請求)',
    grammar: [
      {
        pattern: '動詞て形 + ください',
        explanation: '請求對方做某事。て形變化：I類(いちり→って、みびに→んで、き→いて、ぎ→いで)、II類(去ます加て)、III類(します→して、きます→きて)。',
        examples: [
          { jp: 'ちょっと待{ま}ってください。', romaji: 'Chotto matte kudasai.', zh: '請等一下。' },
          { jp: '見{み}てください。', romaji: 'Mite kudasai.', zh: '請看。' },
        ]
      }
    ],
    vocabulary: [
      { word: '待ってください', reading: 'まってください', romaji: 'matte kudasai', meaning: '請等 (I類動詞)' },
      { word: '見てください', reading: 'みてください', romaji: 'mite kudasai', meaning: '請看 (II類動詞)' },
      { word: '教えてください', reading: 'おしえてください', romaji: 'oshiete kudasai', meaning: '請教 (II類動詞)' },
      { word: '貸してください', reading: 'かしてください', romaji: 'kashite kudasai', meaning: '請借 (I類動詞)' },
      { word: '持ってください', reading: 'もってください', romaji: 'motte kudasai', meaning: '請拿/持有 (I類動詞)' },
      { word: '呼んでください', reading: 'よんでください', romaji: 'yonde kudasai', meaning: '請叫(車/人) (I類動詞)' },
      { word: '手伝ってください', reading: 'てつだってください', romaji: 'tetsudatte kudasai', meaning: '請幫忙 (I類動詞)' },
      { word: '急いでください', reading: 'いそいでください', romaji: 'isoide kudasai', meaning: '請趕快 (I類動詞)' },
      { word: 'ちょっと', reading: 'ちょっと', romaji: 'chotto', meaning: '稍微' },
      { word: 'もう一度', reading: 'もういちど', romaji: 'mō ichido', meaning: '再次' },
    ],
    quiz: [
      { question: '等一下：待って___。', options: ['ください', 'ます', 'ました', 'て'], answer: 0 },
      { question: '「ください」接在動詞什麼形之後？', options: ['ます形', 'て形', '辞書形', 'ない形'], answer: 1 },
      { question: '「請趕快」的日文是？', options: ['いそいでください', 'まってください', 'みてください', 'おしえてください'], answer: 0 },
      { question: '「請幫忙」的日文是？', options: ['てつだってください', 'かしてください', 'よんでください', 'もってください'], answer: 0 },
      { question: '「もういちど」的意思是？', options: ['再次', '稍微', '慢慢地', '快點'], answer: 0 },
    ]
  },

  // ---- 第 24 關：可以嗎？不行！ (許可與禁止：～てもいいです / ～てはいけません) ----
  {
    id: 'n5_ch24',
    level: 'N5',
    title: '可以嗎？不行！ (許可/禁止)',
    grammar: [
      {
        pattern: '〜てもいい / 〜てはいけない',
        explanation: '表示許可與禁止。',
        examples: [
          { jp: '入{はい}ってもいいですか。', romaji: 'Haittemo ii desu ka.', zh: '可以進去嗎？' },
          { jp: 'ここでタバコを吸{す}ってはいけません。', romaji: 'Koko de tabako o sutte wa ikemasen.', zh: '這裡不能抽菸。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'いいです', reading: 'いいです', romaji: 'ii desu', meaning: '可以 (い形容詞)' },
      { word: '入ります', reading: 'はいります', romaji: 'hairimasu', meaning: '進去 (I類動詞)' },
      { word: 'タバコを吸います', reading: 'たばこをすいます', romaji: 'tabako o suimasu', meaning: '抽菸 (I類動詞)' },
      { word: '名前', reading: 'なまえ', romaji: 'namae', meaning: '名字' },
      { word: '住所', reading: 'じゅうしょ', romaji: 'jūsho', meaning: '住址' },
      { word: '市役所', reading: 'しやくしょ', romaji: 'shiyakusho', meaning: '市政府/市公所' },
      { word: 'パスポート', reading: 'ぱすぽおと', romaji: 'pasupōto', meaning: '護照' },
      { word: '地図', reading: 'ちず', romaji: 'chizu', meaning: '地圖' },
      { word: '資料', reading: 'しりょう', romaji: 'shiryō', meaning: '資料' },
      { word: 'カタログ', reading: 'かたろぐ', romaji: 'katarogu', meaning: '目錄' },
    ],
    quiz: [
      { question: '可以嗎？：___いいですか。', options: ['ても', 'た', 'ては', 'て'], answer: 0 },
      { question: '不可以！：___いけません。', options: ['ても', 'ては', 'て', 'た'], answer: 1 },
      { question: '「市役所」的意思是？', options: ['市政府', '圖書館', '火車站', '警察局'], answer: 0 },
      { question: '「護照」的日文是？', options: ['ぱすぽおと', 'ちず', 'しりょう', 'かたろぐ'], answer: 0 },
      { question: '「じゅうしょ」的意思是？', options: ['住址', '職業', '電話', '國籍'], answer: 0 },
    ]
  },

  // ---- 第 25 關：動作的連接 (動作順序：～て、～て、～) ----
  {
    id: 'n5_ch25',
    level: 'N5',
    title: '動作的連接 (順序)',
    grammar: [
      {
        pattern: 'V1て、V2て、V3ます',
        explanation: '用て形連接多個動作。依發生順序排列，時態由最後一個動詞決定。',
        examples: [
          { jp: '朝{あさ}起{お}きて、ご飯{ごはん}を食{た}べて、学校{がっこう}へ行{い}きます。', romaji: 'Asa okite, gohan o tabete, gakkō e ikimasu.', zh: '早起，吃飯，然後去學校。' },
        ]
      }
    ],
    vocabulary: [
      { word: '朝', reading: 'あさ', romaji: 'asa', meaning: '早上' },
      { word: 'それから', reading: 'それから', romaji: 'sorekara', meaning: '然後' },
      { word: '洗います', reading: 'あらいます', romaji: 'araimasu', meaning: '洗 (I類動詞)' },
      { word: '浴びます', reading: 'あびます', romaji: 'abimasu', meaning: '淋浴/洗澡 (II類動詞)' },
      { word: '出かけます', reading: 'でかけます', romaji: 'dekakemasu', meaning: '出門 (II類動詞)' },
      { word: '降ります', reading: 'おります', romaji: 'orimasu', meaning: '下車 (II類動詞)' },
      { word: '乗り換えます', reading: 'のりかえます', romaji: 'norikaemasu', meaning: '換乘 (II類動詞)' },
      { word: 'アルバイト', reading: 'あるばいと', romaji: 'arubaito', meaning: '打工' },
      { word: '散歩します', reading: 'さんぽします', romaji: 'sanpo shimasu', meaning: '散步 (III類動詞)' },
      { word: 'お寺', reading: 'おてら', romaji: 'otera', meaning: '寺廟' },
    ],
    quiz: [
      { question: '連接動詞時用什麼形？', options: ['ます形', 'て形', '辞書形', 'ない形'], answer: 1 },
      { question: '起きて、食べて___。(最後去)', options: ['いきます', 'いって', 'いく', 'いった'], answer: 0 },
      { question: '「淋浴」的日文是？', options: ['（シャワーを）あびます', 'あらいます', 'でかけます', 'おります'], answer: 0 },
      { question: '「打工」的日文是？', options: ['あるばいと', 'さんぽ', 'おてら', 'のりかえ'], answer: 0 },
      { question: '「さんぽします」的意思是？', options: ['散步', '跑步', '讀書', '工作'], answer: 0 },
    ]
  },

  // ---- 第 26 關：因為所以 (原因理由) ----
  {
    id: 'n5_ch26',
    level: 'N5',
    title: '因為所以 (原因理由)',
    grammar: [
      {
        pattern: '〜から / 〜ので',
        explanation: '表示原因理由。「から」主觀原因，「ので」客觀原因。な形容詞和名詞接「ので」時要用「な」。',
        examples: [
          { jp: '忙{いそが}しいから、行{い}きません。', romaji: 'Isogashii kara, ikimasen.', zh: '因為很忙，所以不去。' },
          { jp: '雨{あめ}なので、休{やす}みます。', romaji: 'Ame na node, yasumimasu.', zh: '因為下雨，所以休息。' }
        ]
      }
    ],
    vocabulary: [
      { word: '暑い', reading: 'あつい', romaji: 'atsui', meaning: '熱的 (い形容詞)' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '冷的 (い形容詞)' },
      { word: '好き', reading: 'すき', romaji: 'suki', meaning: '喜歡 (な形容詞)' },
      { word: '嫌い', reading: 'きらい', romaji: 'kirai', meaning: '討厭 (な形容詞)' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的 (い形容詞)' },
      { word: '用事', reading: 'ようじ', romaji: 'yōji', meaning: '事情/要事 (名詞)' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到 (II類動詞)' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息/請假 (I類動詞)' },
      { word: '危ない', reading: 'あぶない', romaji: 'abunai', meaning: '危險的 (い形容詞)' },
      { word: '安全', reading: 'あんぜん', romaji: 'anzen', meaning: '安全的 (な形容詞)' }
    ],
    quiz: [
      { question: '「因為很忙」：忙しい___。', options: ['から', 'まで', 'に', 'を'], answer: 0 },
      { question: '名詞接「ので」時要加什麼？', options: ['だ', 'な', 'の', 'に'], answer: 1 },
      { question: '「用事」的意思是？', options: ['事情', '生病', '遲到', '休息'], answer: 0 },
      { question: '「危ない」的反義詞是？', options: ['安全', '嫌い', '好き', '遅れる'], answer: 0 },
      { question: '「遲到」的日文是？', options: ['おくれる', 'やすむ', 'いそぐ', 'くる'], answer: 0 }
    ]
  },

  // ---- 第 27 關：初探「ない形」 (請不要做：～ないでください) ----
  {
    id: 'n5_ch27',
    level: 'N5',
    title: '初探「ない形」 (否定請求)',
    grammar: [
      {
        pattern: '動詞ない形 + でください',
        explanation: '請求對方不要做某事。ない形變化：I類(ます前音改あ段加ない)、II類(去ます加ない)、III類(しない、こない)。',
        examples: [
          { jp: '忘{わす}れないでください。', romaji: 'Wasurenaide kudasai.', zh: '請不要忘記。' },
          { jp: '写真{しゃしん}を撮{と}らないでください。', romaji: 'Shashin o toranaide kudasai.', zh: '請不要拍照。' },
        ]
      }
    ],
    vocabulary: [
      { word: '忘れないで', reading: 'わすれないで', romaji: 'wasurenaide', meaning: '不要忘記 (II類動詞)' },
      { word: '見ないで', reading: 'みないで', romaji: 'minaide', meaning: '不要看 (II類動詞)' },
      { word: '心配しないで', reading: 'しんぱいしないで', romaji: 'shinpai shinaide', meaning: '不要擔心 (III類動詞)' },
      { word: '気をつけて', reading: 'きをつけて', romaji: 'ki o tsukete', meaning: '要注意/小心 (II類動詞)' },
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '生病/疾病' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '熱', reading: 'ねつ', romaji: 'netsu', meaning: '發燒' },
      { word: '無理しないで', reading: 'むりしないで', romaji: 'muri shinaide', meaning: '不要勉強 (III類動詞)' },
      { word: '病院', reading: 'びょういん', romaji: 'byōin', meaning: '醫院' },
    ],
    quiz: [
      { question: '請不要：___でください。', options: ['ない', 'て', 'ます', 'た'], answer: 0 },
      { question: '「忘れる」的ない形是？', options: ['わすれない', 'わすらない', 'わすれ', 'わすわ'], answer: 0 },
      { question: '「びょうき」的意思是？', options: ['生病', '健康', '受傷', '感冒'], answer: 0 },
      { question: '「感冒」的日文是？', options: ['かぜ', 'ねつ', 'くすり', 'びょういん'], answer: 0 },
      { question: '「きをつけて」的意思是？', options: ['請小心', '請安靜', '請幫忙', '請等待'], answer: 0 },
    ]
  },

  // ---- 第 28 關：N5 總複習 (介詞/形容詞/時態) ----
  {
    id: 'n5_review',
    level: 'N5',
    title: 'N5 總複習 (介詞/形容詞/時態)',
    grammar: [
      {
        pattern: '介詞比較 (は/が/を/に/で)',
        explanation: '「は」提示主題，「が」提示主語或新資訊，「を」接續動作對象，「に」表示時間、目的地或對象，「で」表示方法、工具或動作場所。',
        examples: [
          { jp: '私{わたし}は家{いえ}でご飯{ごはん}を食{た}べます。', romaji: 'Watashi wa ie de gohan o tabemasu.', zh: '我在家吃飯。' },
          { jp: '明日{あした}、学校{がっこう}に行{い}きます。', romaji: 'Ashita, gakkō ni ikimasu.', zh: '明天去學校。' }
        ]
      },
      {
        pattern: '形容詞變化總複習',
        explanation: 'い形容詞：肯定(〜いです)、否定(〜くないです)、過去(〜かったです)、過去否定(〜くなかったです)。\nな形容詞：肯定(〜です)、否定(〜じゃありません)、過去(〜でした)、過去否定(〜じゃありませんでした)。',
        examples: [
          { jp: '昨日{きのう}の天気{てんき}は良{よ}くなかったです。', romaji: 'Kinō no tenki wa yokunakatta desu.', zh: '昨天的天氣不好。' },
          { jp: '昔{むかし}、この町{まち}は静{しず}かでした。', romaji: 'Mukashi, kono machi wa shizuka deshita.', zh: '以前這個城鎮很安靜。' }
        ]
      },
      {
        pattern: '動詞時態與基本變化',
        explanation: 'ます(現在/未來肯定)，ました(過去肯定)，ません(現在/未來否定)，ませんでした(過去否定)。て形(連接/請求/進行狀態)，ない形(否定請求)。',
        examples: [
          { jp: '昨日{きのう}、テレビを見{み}ませんでした。', romaji: 'Kinō, terebi o mimasen deshita.', zh: '昨天沒有看電視。' },
          { jp: 'ここに座{すわ}らないでください。', romaji: 'Koko ni suwaranaide kudasai.', zh: '請不要坐在這裡。' }
        ]
      }
    ],
    vocabulary: [
      { word: '会う', reading: 'あう', romaji: 'au', meaning: '見面 (I類動詞)' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃 (II類動詞)' },
      { word: '来る', reading: 'くる', romaji: 'kuru', meaning: '來 (III類動詞)' },
      { word: '大きい', reading: 'おおきい', romaji: 'ōkii', meaning: '大的 (い形容詞)' },
      { word: '元気', reading: 'げんき', romaji: 'genki', meaning: '健康/有精神 (な形容詞)' },
      { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: '老師 (名詞)' },
      { word: '図書館', reading: 'としょかん', romaji: 'toshokan', meaning: '圖書館 (名詞)' },
      { word: '電車', reading: 'でんしゃ', romaji: 'densha', meaning: '電車 (名詞)' },
      { word: 'いつも', reading: 'いつも', romaji: 'itsumo', meaning: '總是 (副詞)' },
      { word: '全然', reading: 'ぜんぜん', romaji: 'zenzen', meaning: '完全不 (接否定)' }
    ],
    quiz: [
      { question: '私は毎日電車___学校へ行きます。(搭乘電車)', options: ['で', 'に', 'を', 'が'], answer: 0 },
      { question: '昨日の天気は___。(昨天的天氣不好)', options: ['よくないです', 'よくなかったです', 'いいじゃなかったです', 'よかったじゃありません'], answer: 1 },
      { question: '昨日、晩ご飯を___。(昨天沒有吃晚餐)', options: ['食べません', '食べない', '食べませんでした', '食べなかったでした'], answer: 2 },
      { question: 'その町は昔、とても___。(那個城鎮以前非常安靜)', options: ['静かです', '静かでした', '静かかった', '静かだったです'], answer: 1 },
      { question: '部屋___本を___ください。(請在房間裡看書)', options: ['で、読んで', 'に、読んで', 'で、読みて', 'に、読みて'], answer: 0 }
    ]
  }
];
