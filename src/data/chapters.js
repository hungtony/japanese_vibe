// 章節資料 - N5~N1 各等級
export const levelConfig = {
  N5: { color: 'n5', label: '入門', description: '基礎文法、助詞與日常表達 (25章全展開)' },
  N4: { color: 'n4', label: '初級', description: '日常生活與簡單對話 (25關全展開)' },
  N3: { color: 'n3', label: '中級', description: '社交與表達意見 (20章)' },
  N2: { color: 'n2', label: '中上級', description: '新聞閱讀與正式場合' },
  N1: { color: 'n1', label: '上級', description: '學術與商務日語' },
}

export const chapters = [
  // ===================== N5 (25 章全展開版) =====================

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
          { jp: '私{わたし}は學{がく}生{せい}です。', romaji: 'Watashi wa gakusei desu.', zh: '我是學生。' },
          { jp: '田中{たなか}さんは先{せん}生{せい}です。', romaji: 'Tanaka-san wa sensei desu.', zh: '田中先生是老師。' },
        ]
      },
      {
        pattern: 'AはBじゃありません',
        explanation: '「A不是B」。口語也常用「〜じゃないです」。',
        examples: [
          { jp: '私{わたし}は先{せん}生{せい}じゃありません。', romaji: 'Watashi wa sensei ja arimasen.', zh: '我不是老師。' },
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
      { question: '私___學生です。', options: ['が', 'は', 'を', 'に'], answer: 1 },
      { question: '我不是老師：私は先生___。', options: ['です', 'ます', 'じゃありません', 'あります'], answer: 2 },
      { question: '「日本人」的讀音是？', options: ['にほんじん', 'にほんご', 'にっぽん', 'にほん'], answer: 0 },
      { question: '「會社員」的意思是？', options: ['公司職員', '會計', '公務員', '老師'], answer: 0 },
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
          { jp: '田中{たなか}さんは先{せん}生{せい}ですか。', romaji: 'Tanaka-san wa sensei desu ka.', zh: '田中先生是老師嗎？' },
          { jp: 'あなたも學{がく}生{せい}ですか。', romaji: 'Anata mo gakusei desu ka.', zh: '你也是學生嗎？' },
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
      { question: '「醫生」的讀音是？', options: ['いしゃ', 'いさ', 'いしゅ', 'いっしょ'], answer: 0 },
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
      { word: 'ノート', reading: 'のーと', romaji: 'nōto', meaning: '筆記本' },
      { word: '手帳', reading: 'てちょう', romaji: 'techō', meaning: '手帳/手冊' },
      { word: '鉛筆', reading: 'えんぴつ', romaji: 'enpitsu', meaning: '鉛筆' },
    ],
    quiz: [
      { question: '___は何ですか。(近我)', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 0 },
      { question: '「じしょ」的意思是？', options: ['雜誌', '報紙', '字典', '筆記本'], answer: 2 },
      { question: '「報紙」的讀音是？', options: ['しんぶん', 'ざっし', 'ほん', 'のーと'], answer: 0 },
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
          { jp: 'ここは教{きょう}室{しつ}です。', romaji: 'Koko wa kyōshitsu desu.', zh: '這裡地是教室。' },
          { jp: 'お手{て}洗{あら}いはあそこです。', romaji: 'O-tearai wa asoko desu.', zh: '洗手間在那邊。' },
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
      { word: 'エレベーター', reading: 'えれべーたー', romaji: 'erebētā', meaning: '電梯' },
      { word: 'どちら', reading: 'どちら', romaji: 'dochira', meaning: '哪邊(禮貌)' },
      { word: '自動販売機', reading: 'じどうはんばいき', romaji: 'jidōhanbaiki', meaning: '自動販賣機' },
    ],
    quiz: [
      { question: 'お手洗いは___ですか。(在哪裡)', options: ['なん', 'どこ', 'だれ', 'いつ'], answer: 1 },
      { question: '「あそこ」表示？', options: ['近我', '近你', '遠離雙方', '這面'], answer: 2 },
      { question: '「教室」的讀音是？', options: ['きょうしつ', 'きょうし', 'きょうだい', 'きょうき'], answer: 0 },
      { question: '「えれべーたー」的意思是？', options: ['電梯', '樓梯', '電車', '教室'], answer: 0 },
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
          { jp: '日{に}本{ほん}の車{くるま}です。', romaji: 'Nihon no kuruma desu.', zh: '是日本的車。' },
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
          { jp: '今{いま}、四{よ}時{じ}です。', romaji: 'Ima, yo-ji desu.', zh: '現在是四點。' },
          { jp: '九{く}時{じ}半{はん}です。', romaji: 'Kuji han desu.', zh: '九點半。' },
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
      { question: '「四點」的正確讀法是？', options: ['しじ', 'よнじ', 'よじ', 'よんじ'], answer: 2 },
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
        explanation: '肯定：～ます，否定：～ません，過去：～ました。',
        examples: [
          { jp: '勉{べん}強{きょう}します。', romaji: 'Benkyō shimasu.', zh: '學習。' },
          { jp: '昨日{きのう}、起{お}きませんでした。', romaji: 'Kinō, okimasen deshita.', zh: '昨天沒起床。' },
        ]
      }
    ],
    vocabulary: [
      { word: '起きます', reading: 'おきます', romaji: 'okimasu', meaning: '起床' },
      { word: '寝ます', reading: 'ねます', romaji: 'nemasu', meaning: '睡覺' },
      { word: '勉強します', reading: 'べんきょうします', romaji: 'benkyō shimasu', meaning: '學習' },
      { word: '終わります', reading: 'おわります', romaji: 'owarimasu', meaning: '結束' },
      { word: '働きます', reading: 'はたらきます', romaji: 'hatarakimasu', meaning: '工作' },
      { word: '休みます', reading: 'やすみます', romaji: 'yasumimasu', meaning: '休息' },
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

  // ---- 第 8 關：移動方向 (去、來、回：行きます / 来ます / 歸ります) ----
  {
    id: 'n5_ch8',
    level: 'N5',
    title: '移動方向 (去、來、回)',
    grammar: [
      {
        pattern: '場所 + へ + 行きます / 来ます / 帰ります',
        explanation: '表示移動的方向。助詞「へ」讀作「e」。',
        examples: [
          { jp: '日{に}本{ほん}へ行{い}きます。', romaji: 'Nihon e ikimasu.', zh: '去日本。' },
          { jp: '家{うち}へ帰{かえ}ります。', romaji: 'Uchi e kaerimasu.', zh: '回家。' },
        ]
      }
    ],
    vocabulary: [
      { word: '行きます', reading: 'いきます', romaji: 'ikimasu', meaning: '去' },
      { word: '来ます', reading: 'きます', romaji: 'kimasu', meaning: '來' },
      { word: '帰ります', reading: 'かえります', romaji: 'kaerimasu', meaning: '回家' },
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
          { jp: '電{でん}車{しゃ}で行{い}きます。', romaji: 'Densha de ikimasu.', zh: '搭電車去。' },
          { jp: '家{か}族{ぞく}と來{き}ました。', romaji: 'Kazoku to kimashita.', zh: '和家人一起來。' },
        ]
      }
    ],
    vocabulary: [
      { word: '電車', reading: 'でんしゃ', romaji: 'densha', meaning: '電車' },
      { word: '家族', reading: 'かぞく', romaji: 'kazoku', meaning: '家人' },
      { word: '友達', reading: 'ともだち', romaji: 'tomodachi', meaning: '朋友' },
      { word: '自転車', reading: 'じてんしゃ', romaji: 'jitensha', meaning: '自行車' },
      { word: 'バス', reading: 'ばす', romaji: 'basu', meaning: '公車' },
      { word: 'タクシー', reading: 'たくしー', romaji: 'takushī', meaning: '出租車' },
      { word: '地下鉄', reading: 'ちかてつ', romaji: 'chikatetsu', meaning: '地下鐵' },
      { word: '一人で', reading: 'ひとりで', romaji: 'hitori de', meaning: '一個人' },
      { word: '誰', reading: 'だれ', romaji: 'dare', meaning: '誰' },
      { word: 'いつ', reading: 'いつ', romaji: 'itsu', meaning: '何時' },
    ],
    quiz: [
      { question: '電車___行きます。(搭乘)', options: ['を', 'へ', 'で', 'と'], answer: 2 },
      { question: '朋友___行きます。(和...)', options: ['で', 'と', 'へ', 'を'], answer: 1 },
      { question: '「地下鐵」的讀音是？', options: ['ちかてつ', 'でんしゃ', 'ばす', 'たくしー'], answer: 0 },
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
          { jp: '音{おん}樂{がく}を聞{き}きます。', romaji: 'Ongaku o kikimasu.', zh: '聽音樂。' },
        ]
      }
    ],
    vocabulary: [
      { word: '食べます', reading: 'たべます', romaji: 'tabemasu', meaning: '吃' },
      { word: '飲みます', reading: 'のみます', romaji: 'nomimasu', meaning: '喝' },
      { word: '見ます', reading: 'みます', romaji: 'mimasu', meaning: '看' },
      { word: '聞きます', reading: 'ききます', romaji: 'kikimasu', meaning: '聽/問' },
      { word: '読みます', reading: 'よみます', romaji: 'yomimasu', meaning: '讀' },
      { word: '書きます', reading: 'かきます', romaji: 'kakimasu', meaning: '寫' },
      { word: '買います', reading: 'かいます', romaji: 'kaimasu', meaning: '買' },
      { word: '撮ります', reading: 'とります', romaji: 'torimasu', meaning: '拍照' },
      { word: 'します', reading: 'します', romaji: 'shimasu', meaning: '做' },
      { word: '会います', reading: 'あいます', romaji: 'aimasu', meaning: '遇見' },
    ],
    quiz: [
      { question: 'ご飯___食べます。', options: ['を', 'が', 'に', 'で'], answer: 0 },
      { question: '「みます」的意思是？', options: ['看', '聽', '吃', '喝'], answer: 0 },
      { question: '「讀書」的日文是？', options: ['本を読みます', '本を書きます', '本を買います', '本をみます'], answer: 0 },
      { question: '「拍照」的日文是？', options: ['とります', 'かきます', 'あいます', 'します'], answer: 0 },
      { question: '見朋友：友達___あいます。', options: ['を', 'に', 'が', 'で'], answer: 1 },
    ]
  },

  // ---- 第 11 關：做點什麼吧 (邀請與提議：～ませんか / ～ましょう) ----
  {
    id: 'n5_ch11',
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
      { word: '休みます', reading: 'やすみます', romaji: 'yasumimasu', meaning: '休息' },
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

  // ---- 第 12 關：工具的運用 (用什麼工具做：～で～をします) ----
  {
    id: 'n5_ch12',
    level: 'N5',
    title: '工具的運用',
    grammar: [
      {
        pattern: '道具 + で + 動作',
        explanation: '「で」表示使用的工具或手段。',
        examples: [
          { jp: '箸{はし}で食{た}べます。', romaji: 'Hashi de tabemasu.', zh: '用筷子吃。' },
          { jp: '日本語{にほんご}で手{て}紙{がみ}を書{か}きます。', romaji: 'Nihongo de tegami o kakimasu.', zh: '用日語寫信。' },
        ]
      }
    ],
    vocabulary: [
      { word: '箸', reading: 'はし', romaji: 'hashi', meaning: '筷子' },
      { word: '手', reading: 'て', romaji: 'te', meaning: '手' },
      { word: '日本語', reading: 'にほんご', romaji: 'nihongo', meaning: '日語' },
    ],
    quiz: [
      { question: '箸___食べます。', options: ['を', 'へ', 'で', 'に'], answer: 2 },
      { question: '「にほんご」的意思是？', options: ['英語', '中文', '日語', '法語'], answer: 2 },
    ]
  },

  // ---- 第 13 關：收與送 (基礎授受動詞：あげます / もらいます) ----
  {
    id: 'n5_ch13',
    level: 'N5',
    title: '收與送 (授受基礎)',
    grammar: [
      {
        pattern: 'A は B に 物 を あげます / もらいます',
        explanation: '「あげます」是我給別人，「もらいます」是我從別人那裡得到。',
        examples: [
          { jp: '私{わたし}は田中{たなか}さんに本{ほん}をあげました。', romaji: 'Watashi wa Tanaka-san ni hon o agemashita.', zh: '我給了田中先生書。' },
          { jp: '私{わたし}は先{せん}生{せい}に時計{とけい}をもらいました。', romaji: 'Watashi wa sensei ni tokei o moraimashita.', zh: '我從老師那裡得到了手錶。' },
        ]
      }
    ],
    vocabulary: [
      { word: 'あげます', reading: 'あげます', romaji: 'agemasu', meaning: '給予' },
      { word: 'もらいます', reading: 'もらいます', romaji: 'moraimasu', meaning: '得到' },
      { word: '花', reading: 'はな', romaji: 'hana', meaning: '花' },
      { word: 'クリスマス', reading: 'くりすます', romaji: 'kurisumasu', meaning: '聖誕節' },
      { word: 'チョコレート', reading: 'ちょこれーと', romaji: 'chokorēto', meaning: '巧克力' },
      { word: 'シャツ', reading: 'しゃつ', romaji: 'shatsu', meaning: '襯衫' },
      { word: '父', reading: 'ちち', romaji: 'chichi', meaning: '(我)爸爸' },
      { word: '母', reading: 'はは', romaji: 'haha', meaning: '(我)媽媽' },
      { word: '兄', reading: 'あに', romaji: 'ani', meaning: '(我)哥哥' },
      { word: '姉', reading: 'あね', romaji: 'ane', meaning: '(我)姊姊' },
    ],
    quiz: [
      { question: '我給田中先生：田中さんに___。', options: ['あげます', 'もらいます', 'くれます', 'あります'], answer: 0 },
      { question: '「もらいます」的意思是？', options: ['給予', '得到', '買', '賣'], answer: 1 },
      { question: '「聖誕節」的日文是？', options: ['くりすます', 'ちょこれーと', 'はな', 'しゃつ'], answer: 0 },
      { question: '「はは」的意思是？', options: ['爸爸', '媽媽', '哥哥', '姊姊'], answer: 1 },
      { question: '「襯衫」的日文讀音是？', options: ['しゃつ', 'ぱんつ', 'くつ', 'かばん'], answer: 0 },
    ]
  },

  // ---- 第 14 關：形容詞入門 (い形容詞與な形容詞的肯定) ----
  {
    id: 'n5_ch14',
    level: 'N5',
    title: '形容詞入門',
    grammar: [
      {
        pattern: 'い形容詞 / な形容詞',
        explanation: 'い形字尾是「い」，な形接名詞要加「な」。',
        examples: [
          { jp: 'この靴{くつ}は安{やす}いです。', romaji: 'Kono kutsu wa yasui desu.', zh: '這雙鞋很便宜。' },
          { jp: '田中{たなか}さんは親{しん}切{せつ}な人{ひと}です。', romaji: 'Tanaka-san wa shinsetsu na hito desu.', zh: '田中先生是個親切的人。' },
        ]
      }
    ],
    vocabulary: [
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '高/貴' },
      { word: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaning: '親切' },
      { word: 'きれい', reading: 'きれい', romaji: 'kirei', meaning: '漂亮' },
      { word: 'おいしい', reading: 'おいしい', romaji: 'oishii', meaning: '好吃' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '寒冷' },
      { word: '暑い', reading: 'あつい', romaji: 'atsui', meaning: '炎熱' },
      { word: '有名', reading: 'ゆうめい', romaji: 'yūmei', meaning: '有名' },
      { word: '元気', reading: 'げんき', romaji: 'genki', meaning: '健康/元氣' },
      { word: '静か', reading: 'しずか', romaji: 'shizuka', meaning: '安靜' },
    ],
    quiz: [
      { question: '「便宜」的反義詞(貴)是？', options: ['高い', '低い', '白い', '赤い'], answer: 0 },
      { question: '「きれい」是哪種形容詞？', options: ['い形容詞', 'な形容詞', '動詞', '副詞'], answer: 1 },
      { question: '「おいしい」的意思是？', options: ['好吃的', '難吃的', '貴的', '便宜的'], answer: 0 },
      { question: '「有名」的讀音是？', options: ['ゆうめい', 'ゆうめ', 'ゆめ', 'ゆうな'], answer: 0 },
      { question: '「熱」的反義詞(冷)是？', options: ['寒い', '冷たい', '暑い', '低い'], answer: 0 },
    ]
  },

  // ---- 第 15 關：形容詞變身 (形容詞的否定與過去式) ----
  {
    id: 'n5_ch15',
    level: 'N5',
    title: '形容詞變身',
    grammar: [
      {
        pattern: 'い形：〜くない / 〜かった',
        explanation: '否定去掉「い」加「くない」。過去式去掉「い」加「かった」。',
        examples: [
          { jp: '安{やす}くないです。', romaji: 'Yasukunai desu.', zh: '不便宜。' },
          { jp: '安{やす}かったです。', romaji: 'Yasukatta desu.', zh: '很便宜(過去)。' },
        ]
      }
    ],
    vocabulary: [
      { word: '暑くない', reading: 'あつくない', romaji: 'atsukunai', meaning: '不熱' },
      { word: 'よかったです', reading: 'よかったです', romaji: 'yokatta desu', meaning: '太好了' },
      { word: '多くない', reading: 'おおくない', romaji: 'ōkunai', meaning: '不多' },
      { word: '多い', reading: 'おおい', romaji: 'ōi', meaning: '多' },
      { word: '少ない', reading: 'すくない', romaji: 'sukunai', meaning: '少' },
      { word: '広い', reading: 'ひろい', romaji: 'hiroi', meaning: '寬敞' },
      { word: '狭い', reading: 'せまい', romaji: 'semai', meaning: '狹窄' },
      { word: '近い', reading: 'ちかい', romaji: 'chikai', meaning: '近' },
      { word: '遠い', reading: 'とおい', romaji: 'tooi', meaning: '遠' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌' },
    ],
    quiz: [
      { question: '「高い」的過去式是？', options: ['高かったです', '高いでした', '高くない', '高いです'], answer: 0 },
      { question: '「いい」的否定是？', options: ['よくない', 'いくない', 'いいない', 'よくあり'], answer: 0 },
      { question: '「寬敞」的日文是？', options: ['ひろい', 'せまい', 'おおい', 'すくない'], answer: 0 },
      { question: '「忙」的日文是？', options: ['いそがしい', 'ひま', 'たのしい', 'うれしい'], answer: 0 },
      { question: '「多い」的反義詞是？', options: ['少ない', '近い', '遠い', '広い'], answer: 0 },
    ]
  },

  // ---- 第 16 關：專長與喜好 (喜歡/討厭/擅長：好き/嫌い/上手) ----
  {
    id: 'n5_ch16',
    level: 'N5',
    title: '專長與喜好',
    grammar: [
      {
        pattern: 'A は B が 好{す}き / 上{じょう}手{ず} です',
        explanation: '喜好與能力對象用「が」。',
        examples: [
          { jp: '私{わたし}は料理{りょうり}が好{す}きです。', romaji: 'Watashi wa ryōri ga suki desu.', zh: '我喜歡料理。' },
          { jp: '田中{たなか}さんは日本{にほん}語{ご}が上{じょう}手{ず}です。', romaji: 'Tanaka-san wa nihongo ga jōzu desu.', zh: '田中先生日語很好。' },
        ]
      }
    ],
    vocabulary: [
      { word: '好き', reading: 'すき', romaji: 'suki', meaning: '喜歡' },
      { word: '嫌い', reading: 'きらい', romaji: 'kirai', meaning: '討厭' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: '不擅長' },
      { word: '料理', reading: 'りょうり', romaji: 'ryōri', meaning: '料理/烹飪' },
      { word: 'スポーツ', reading: 'すぽーつ', romaji: 'supōtsu', meaning: '運動' },
      { word: '野球', reading: 'やきゅう', romaji: 'yakyū', meaning: '棒球' },
      { word: '歌', reading: 'うた', romaji: 'uta', meaning: '歌曲/唱歌' },
      { word: 'ダンス', reading: 'だんす', romaji: 'dansu', meaning: '舞蹈' },
      { word: 'カラオケ', reading: 'からおけ', romaji: 'karaoke', meaning: '卡拉OK' },
    ],
    quiz: [
      { question: '料理___喜歡です。', options: ['を', 'に', 'が', 'で'], answer: 2 },
      { question: '擅長的反義詞(不擅長)是？', options: ['下手', '上手', '苦手', '得意'], answer: 0 },
      { question: '「唱歌」的日文讀音是？', options: ['うた', 'おと', 'はな', 'ねこ'], answer: 0 },
      { question: '「運動」的日文是？', options: ['すぽーつ', 'からおけ', 'だんす', 'りょうり'], answer: 0 },
      { question: '「下手」的意思是？', options: ['擅長', '不擅長', '喜歡', '討厭'], answer: 1 },
    ]
  },

  // ---- 第 17 關：有什麼東西 (存在動詞：あります / います) ----
  {
    id: 'n5_ch17',
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
      { word: 'あります', reading: 'あります', romaji: 'arimasu', meaning: '有(無生命)' },
      { word: 'います', reading: 'います', romaji: 'imasu', meaning: '有(有生命)' },
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

  // ---- 第 18 關：上上下下 (位置詞：上/下/前/後/中/外) ----
  {
    id: 'n5_ch18',
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

  // ---- 第 19 關：算算有幾個 (數量詞的應用) ----
  {
    id: 'n5_ch19',
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

  // ---- 第 20 關：超級比一比 (比較句型：A比B... / 最...) ----
  {
    id: 'n5_ch20',
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

  // ---- 第 21 關：我想要... (願望表達：～が欲しいです / ～たいです) ----
  {
    id: 'n5_ch21',
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
      { word: '欲しい', reading: 'ほしい', romaji: 'hoshii', meaning: '想要' },
      { word: '行きたい', reading: 'いきたい', romaji: 'ikitai', meaning: '想去' },
      { word: '食べたい', reading: 'たべたい', romaji: 'tabetai', meaning: '想吃' },
      { word: '買いたい', reading: 'かいたい', romaji: 'kaitai', meaning: '想買' },
      { word: '泳ぎたい', reading: 'およぎたい', romaji: 'oyogitai', meaning: '想游泳' },
      { word: '遊びたい', reading: 'あそびたい', romaji: 'asobitai', meaning: '想玩/遊玩' },
      { word: '飲みたい', reading: 'のみたい', romaji: 'nomitai', meaning: '想喝' },
      { word: 'ありません', reading: 'ありません', romaji: 'arimasen', meaning: '沒有' },
      { word: '何も', reading: 'なにも', romaji: 'nanimo', meaning: '什麼都(接否定)' },
      { word: 'どこへも', reading: 'どこへも', romaji: 'doko e mo', meaning: '哪裡都(接否定)' },
    ],
    quiz: [
      { question: '想要車子：車___欲しい。', options: ['を', 'に', '推', 'が'], answer: 3 },
      { question: '「想做」的助詞通常是？', options: ['を/が', 'に', 'で', 'から'], answer: 0 },
      { question: '「想玩」的日文是？', options: ['あそびたい', 'のみたい', 'たべたい', 'かいたい'], answer: 0 },
      { question: '「哪裡都不去」的日文是？', options: ['どこへも行きません', 'なにも食べません', 'どこへ行きますか', 'だれとも会いません'], answer: 0 },
      { question: '「想游泳」的讀音是？', options: ['およぎたい', 'あそびたい', 'かいたい', 'のみたい'], answer: 0 },
    ]
  },

  // ---- 第 22 關：初探「て形」 (請做某事：～てください) ----
  {
    id: 'n5_ch22',
    level: 'N5',
    title: '初探「て形」 (請求)',
    grammar: [
      {
        pattern: '動詞て形 + ください',
        explanation: '請求對方做某事。',
        examples: [
          { jp: 'ちょっと待{ま}ってください。', romaji: 'Chotto matte kudasai.', zh: '請等一下。' },
          { jp: '見{み}てください。', romaji: 'Mite kudasai.', zh: '請看。' },
        ]
      }
    ],
    vocabulary: [
      { word: '待ってください', reading: 'まってください', romaji: 'matte kudasai', meaning: '請等' },
      { word: '見てください', reading: 'みてください', romaji: 'mite kudasai', meaning: '請看' },
      { word: '教えてください', reading: 'おしえてください', romaji: 'oshiete kudasai', meaning: '請教' },
      { word: '貸してください', reading: 'かしてください', romaji: 'kashite kudasai', meaning: '請借' },
      { word: '持ってください', reading: 'もってください', romaji: 'motte kudasai', meaning: '請拿/持有' },
      { word: '呼んでください', reading: 'よんでください', romaji: 'yonde kudasai', meaning: '請叫(車/人)' },
      { word: '手伝ってください', reading: 'てつだってください', romaji: 'tetsudatte kudasai', meaning: '請幫忙' },
      { word: '急いでください', reading: 'いそいでください', romaji: 'isoide kudasai', meaning: '請趕快' },
      { word: 'ちょっと', reading: 'ちょっと', romaji: 'chotto', meaning: '稍微' },
      { word: 'もう一度', reading: 'もういちど', romaji: 'mō ichido', meaning: '再次' },
    ],
    quiz: [
      { question: '等一下：待って___。', options: ['ください', 'ます', 'ました', 'て'], answer: 0 },
      { question: '「ください」接在動詞什麼形之後？', options: ['ます形', 'て形', '辭書形', 'ない形'], answer: 1 },
      { question: '「請趕快」的日文是？', options: ['いそいでください', 'まってください', 'みてください', 'おしえてください'], answer: 0 },
      { question: '「請幫忙」的日文是？', options: ['てつだってください', 'かしてください', 'よんでください', 'もってください'], answer: 0 },
      { question: '「もういちど」的意思是？', options: ['再次', '稍微', '慢慢地', '快點'], answer: 0 },
    ]
  },

  // ---- 第 23 關：可以嗎？不行！ (許可與禁止：～てもいいです / ～てはいけません) ----
  {
    id: 'n5_ch23',
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
      { word: 'いいです', reading: 'いいです', romaji: 'ii desu', meaning: '可以' },
      { word: '入ります', reading: 'はいります', romaji: 'hairimasu', meaning: '進去' },
      { word: 'タバコを吸います', reading: 'たばこをすいます', romaji: 'tabako o suimasu', meaning: '抽菸' },
      { word: '名前', reading: 'なまえ', romaji: 'namae', meaning: '名字' },
      { word: '住所', reading: 'じゅうしょ', romaji: 'jūsho', meaning: '住址' },
      { word: '市役所', reading: 'しやくしょ', romaji: 'shiyakusho', meaning: '市政府/市公所' },
      { word: 'パスポート', reading: 'ぱすぽーと', romaji: 'pasupōto', meaning: '護照' },
      { word: '地図', reading: 'ちず', romaji: 'chizu', meaning: '地圖' },
      { word: '資料', reading: 'しりょう', romaji: 'shiryō', meaning: '資料' },
      { word: 'カタログ', reading: 'かたろぐ', romaji: 'katarogu', meaning: '目錄' },
    ],
    quiz: [
      { question: '可以嗎？：___いいですか。', options: ['ても', 'た', 'ては', 'て'], answer: 0 },
      { question: '不可以！：___いけません。', options: ['ても', 'ては', 'て', 'た'], answer: 1 },
      { question: '「市役所」的意思是？', options: ['市政府', '圖書館', '火車站', '警察局'], answer: 0 },
      { question: '「護照」的日文是？', options: ['ぱすぽーと', 'ちず', 'しりょう', 'かたろぐ'], answer: 0 },
      { question: '「じゅうしょ」的意思是？', options: ['住址', '職業', '電話', '國籍'], answer: 0 },
    ]
  },

  // ---- 第 24 關：動作的連接 (動作順序：～て、～て、～) ----
  {
    id: 'n5_ch24',
    level: 'N5',
    title: '動作的連接 (順序)',
    grammar: [
      {
        pattern: 'V1て、V2て、V3ます',
        explanation: '用て形連接多個動作。',
        examples: [
          { jp: '朝{あさ}起{お}きて、ご飯{ごはん}を食{た}べて、學{がく}校{こう}へ行{い}きます。', romaji: 'Asa okite, gohan o tabete, gakkō e ikimasu.', zh: '早起，吃飯，然後去學校。' },
        ]
      }
    ],
    vocabulary: [
      { word: '朝', reading: 'あさ', romaji: 'asa', meaning: '早上' },
      { word: 'それから', reading: 'それkara', romaji: 'sorekara', meaning: '然後' },
      { word: '洗います', reading: 'あらいます', romaji: 'araimasu', meaning: '洗' },
      { word: '浴びます', reading: 'あびます', romaji: 'abimasu', meaning: '淋浴/洗澡' },
      { word: '出かけます', reading: 'でかけます', romaji: 'dekakemasu', meaning: '出門' },
      { word: '降ります', reading: 'おります', romaji: 'orimasu', meaning: '下車' },
      { word: '乗り換えます', reading: 'のりかえます', romaji: 'norikaemasu', meaning: '換乘' },
      { word: 'アルバイト', reading: 'あるばいと', romaji: 'arubaito', meaning: '打工' },
      { word: '散歩します', reading: 'さんぽします', romaji: 'sanpo shimasu', meaning: '散步' },
      { word: 'お寺', reading: 'おてら', romaji: 'otera', meaning: '寺廟' },
    ],
    quiz: [
      { question: '連接動詞時用什麼形？', options: ['ます形', 'て形', '辭書形', 'ない形'], answer: 1 },
      { question: '起きて、食べて___。(最後去)', options: ['いきます', 'いって', 'いく', 'いった'], answer: 0 },
      { question: '「淋浴」的日文是？', options: ['（シャワーを）あびます', 'あらいます', 'でかけます', 'おります'], answer: 0 },
      { question: '「打工」的日文是？', options: ['あるばいと', 'さんぽ', 'おてら', 'のりかえ'], answer: 0 },
      { question: '「さんぽします」的意思是？', options: ['散步', '跑步', '讀書', '工作'], answer: 0 },
    ]
  },

  // ---- 第 25 關：初探「ない形」 (請不要做：～ないでください) ----
  {
    id: 'n5_ch25',
    level: 'N5',
    title: '初探「ない形」 (否定請求)',
    grammar: [
      {
        pattern: '動詞ない形 + でください',
        explanation: '請求對方不要做某事。',
        examples: [
          { jp: '忘{わす}れないでください。', romaji: 'Wasurenaide kudasai.', zh: '請不要忘記。' },
          { jp: '寫{しゃ}真{しん}を撮{と}らないでください。', romaji: 'Shashin o toranaide kudasai.', zh: '請不要拍照。' },
        ]
      }
    ],
    vocabulary: [
      { word: '忘れないで', reading: 'わすれないで', romaji: 'wasurenaide', meaning: '不要忘記' },
      { word: '見ないで', reading: 'みないで', romaji: 'minaide', meaning: '不要看' },
      { word: '心配しないで', reading: 'しんぱいしないで', romaji: 'shinpai shinaide', meaning: '不要擔心' },
      { word: '気をつけて', reading: 'きをつけて', romaji: 'ki o tsukete', meaning: '要注意/小心' },
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '生病/疾病' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '熱', reading: 'ねつ', romaji: 'netsu', meaning: '發燒' },
      { word: '無理しないで', reading: 'むり shinaide', romaji: 'muri shinaide', meaning: '不要勉強' },
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

  // ===================== N4 (25 章全展開版) =====================

  // ---- 第 26 關：普通形變身 (動詞、形容詞、名詞的常體表現) ----
  {
    id: 'n4_ch26',
    level: 'N4',
    title: '普通形變身 (常體表現)',
    grammar: [
      {
        pattern: '動詞辭書形 / ない形 / た形 / なかった形',
        explanation: '普通形（常體）是不帶「ます / です」的日語基本形態，常與朋友或家人對話使用。動詞的現在肯定為「辭書形」，過去肯定為「た形」。',
        examples: [
          { jp: '明日{あした}、東京{とうきょう}へ行{い}く。', romaji: 'Ashita, tōkyō e iku.', zh: '明天要去東京。（行く = 行きます）' },
          { jp: '昨日{きのう}は勉強{べんきょう}しなかった。', romaji: 'Kinō wa benkyō shinakatta.', zh: '昨天沒讀書。（しなかった = しませんでした）' },
        ]
      },
      {
        pattern: 'い形容詞 / な形容詞(だ) / 名詞(だ)',
        explanation: 'い形容詞直接拿掉「です」。名詞和な形容詞的現在肯定用「だ」，否定用「じゃない」。',
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
      { word: '面白い', reading: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的' },
      { word: '休み', reading: 'やすみ', romaji: 'yasumi', meaning: '休息/假日' },
      { word: '暇', reading: 'ひま', romaji: 'hima', meaning: '空閒的' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃' },
      { word: '行く', reading: 'いく', romaji: 'iku', meaning: '去' },
    ],
    quiz: [
      { question: '「食べます」的普通形（現在肯定）是？', options: ['食べる', '食べた', '食べない', '食べなかった'], answer: 0 },
      { question: '「学生です」的普通形是？', options: ['学生', '学生だ', '学生な', '学生じゃない'], answer: 1 },
      { question: '「行きません」的普通形（現在否定）是？', options: ['行く', '行かない', '行った', '行かなかった'], answer: 1 },
      { question: '「暇」的意思是？', options: ['休息', '有趣的', '空閒的', '忙碌的'], answer: 2 },
      { question: '「忙しいです」的普通形是？', options: ['忙しいだ', '忙しい', '忙しくない', '忙しいな'], answer: 1 },
    ]
  },

  // ---- 第 27 關：追根究底 (說明與確認：普通形＋んです) ----
  {
    id: 'n4_ch27',
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
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到' },
      { word: '気分', reading: 'きぶん', romaji: 'kibun', meaning: '心情/身體狀態' },
      { word: '悪い', reading: 'わるい', romaji: 'warui', meaning: '壞的/不好的' },
      { word: 'どうして', reading: 'どうして', romaji: 'dōshite', meaning: '為什麼' },
      { word: '理由', reading: 'りゆう', romaji: 'riyū', meaning: '理由' },
      { word: '引っ越し', reading: 'ひっこし', romaji: 'hikkoshi', meaning: '搬家' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙' },
      { word: '探す', reading: 'さがす', romaji: 'sagasu', meaning: '尋找' },
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

  // ---- 第 28 關：我做得到 (可能形：～れます / ～られます) ----
  {
    id: 'n4_ch28',
    level: 'N4',
    title: '我做得到 (可能形)',
    grammar: [
      {
        pattern: '動詞可能形',
        explanation: '表示有能力做某事，或在某情況下可以做某事。五段動詞改え段加る，一段動詞去る加られる。する變できる，来る變来られる。',
        examples: [
          { jp: '私{わたし}は日本語{にほんご}が話{はな}せます。', romaji: 'Watashi wa nihongo ga hanasemasu.', zh: '我會說日語。' },
          { jp: 'ここではタバコが吸{す}えません。', romaji: 'Koko de wa tabako ga suemasen.', zh: '這裡不能抽菸。' },
        ]
      }
    ],
    vocabulary: [
      { word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: '說話' },
      { word: '泳ぐ', reading: 'およぐ', romaji: 'oyogu', meaning: '游泳' },
      { word: '弾く', reading: 'ひく', romaji: 'hiku', meaning: '彈奏' },
      { word: '漢字', reading: 'かんじ', romaji: 'kanji', meaning: '漢字' },
      { word: '読む', reading: 'よむ', romaji: 'yomu', meaning: '閱讀' },
      { word: '歌う', reading: 'うたう', romaji: 'utau', meaning: '唱歌' },
      { word: 'ピアノ', reading: 'ぴあの', romaji: 'piano', meaning: '鋼琴' },
      { word: '運転する', reading: 'うんてんする', romaji: 'unten suru', meaning: '駕駛' },
      { word: '予約する', reading: 'よやくする', romaji: 'yoyaku suru', meaning: '預約' },
      { word: '直す', reading: 'なおす', romaji: 'naosu', meaning: '修理' },
    ],
    quiz: [
      { question: '「食べる」的可能形是？', options: ['食べれる', '食べられる', '食べせる', '食べよう'], answer: 1 },
      { question: '日本語___話せます。', options: ['を', 'に', 'が', 'で'], answer: 2 },
      { question: '「弾く」的意思是？', options: ['駕駛', '閱讀', '修理', '彈奏'], answer: 3 },
      { question: '「する」的可能形是？', options: ['される', 'させる', 'できる', 'しられる'], answer: 2 },
      { question: '泳ぐ的可能形是？', options: ['泳げる', '泳がれる', '泳ぎれる', '泳ぐれる'], answer: 0 },
    ]
  },

  // ---- 第 29 關：一心二用 (同時進行：～ながら) ----
  {
    id: 'n4_ch29',
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
      { word: '勉強する', reading: 'べんきょうする', romaji: 'benkyō suru', meaning: '學習' },
      { word: 'お茶', reading: 'おちゃ', romaji: 'ocha', meaning: '茶' },
      { word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: '說話/聊天' },
      { word: '歩く', reading: 'あるく', romaji: 'aruku', meaning: '走路' },
      { word: '運転する', reading: 'うんてんする', romaji: 'unten suru', meaning: '駕駛' },
      { word: '電話する', reading: 'でんわする', romaji: 'denwa suru', meaning: '打電話' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作' },
      { word: '歌う', reading: 'うたう', romaji: 'utau', meaning: '唱歌' },
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

  // ---- 第 30 關：長句的靈魂 (動詞/普通形修飾名詞) ----
  {
    id: 'n4_ch30',
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
      { word: '買う', reading: 'かう', romaji: 'kau', meaning: '買' },
      { word: '昨日', reading: 'きのう', romaji: 'kinō', meaning: '昨天' },
      { word: 'メガネ', reading: 'めがね', romaji: 'megane', meaning: '眼鏡' },
      { word: 'かける', reading: 'かける', romaji: 'kakeru', meaning: '戴上(眼鏡等)' },
      { word: '人', reading: 'ひと', romaji: 'hito', meaning: '人' },
      { word: '映画', reading: 'えいが', romaji: 'eiga', meaning: '電影' },
      { word: '見る', reading: 'みる', romaji: 'miru', meaning: '看' },
      { word: '料理', reading: 'りょうり', romaji: 'ryōri', meaning: '料理' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作/做' },
    ],
    quiz: [
      { question: '昨日___映画はとても面白かった。(看的)', options: ['見る', '見た', '見て', '見ない'], answer: 1 },
      { question: '母が___料理が一番好きです。(做的)', options: ['作る', '作った', '作って', '作らない'], answer: 1 },
      { question: '「かける」在這裡的意思是？', options: ['打電話', '花費(時間)', '戴上(眼鏡)', '懸掛'], answer: 2 },
      { question: '帽子をかぶって___人は誰ですか。(戴著)', options: ['いる', 'ある', 'みる', 'おく'], answer: 0 },
      { question: '「作る」的讀音是？', options: ['わかる', 'おくる', 'つくる', 'おこる'], answer: 2 },
    ]
  },

  // ---- 第 31 關：狀態的呈現 (自動詞與他動詞狀態：～てある / ～ている) ----
  {
    id: 'n4_ch31',
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
      { word: '開く', reading: 'あく', romaji: 'aku', meaning: '開(自動詞)' },
      { word: '閉まる', reading: 'しまる', romaji: 'shimaru', meaning: '關(自動詞)' },
      { word: 'つく', reading: 'つける', romaji: 'tsuku', meaning: '開啟/點亮(自動詞)' },
      { word: '消える', reading: 'きえる', romaji: 'kieru', meaning: '熄滅/消失(自動詞)' },
      { word: '貼る', reading: 'はる', romaji: 'haru', meaning: '貼(他動詞)' },
      { word: '置く', reading: 'おく', romaji: 'oku', meaning: '放置(他動詞)' },
      { word: '並べる', reading: 'ならべる', romaji: 'naraberu', meaning: '排列(他動詞)' },
      { word: '壁', reading: 'かべ', romaji: 'kabe', meaning: '牆壁' },
      { word: '壊れる', reading: 'こわれる', romaji: 'kowareru', meaning: '壞掉(自動詞)' },
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

  // ---- 第 32 關：未來的打算 (意向形 + と思います) ----
  {
    id: 'n4_ch32',
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
      { word: '旅行する', reading: 'りょこうする', romaji: 'ryokō suru', meaning: '旅行' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作' },
      { word: '留学する', reading: 'りゅうがくする', romaji: 'ryūgaku suru', meaning: '留學' },
      { word: '将来', reading: 'しょうらい', romaji: 'shōrai', meaning: '將來' },
      { word: '夢', reading: 'ゆめ', romaji: 'yume', meaning: '夢想' },
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚' },
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

  // ---- 第 33 關：聽我的準沒錯 (強烈建議：～た/ない ほうがいいです) ----
  {
    id: 'n4_ch33',
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
      { word: '運動する', reading: 'うんどうする', romaji: 'undō suru', meaning: '運動' },
      { word: '夜', reading: 'よる', romaji: 'yoru', meaning: '夜晚' },
      { word: '遅い', reading: 'おそい', romaji: 'osoi', meaning: '晚的/慢的' },
      { word: '起きる', reading: 'おきる', romaji: 'okiru', meaning: '起床/醒著' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: '病院', reading: 'びょういん', romaji: 'byōin', meaning: '醫院' },
      { word: '医者', reading: 'いしゃ', romaji: 'isha', meaning: '醫生' },
      { word: 'タバコ', reading: 'たばこ', romaji: 'tabako', meaning: '香菸' },
      { word: '吸う', reading: 'すう', romaji: 'sū', meaning: '吸(菸)' },
      { word: '無理する', reading: 'むりする', romaji: 'muri suru', meaning: '勉強/硬撐' },
    ],
    quiz: [
      { question: '早く病院へ___ほうがいいです。(最好去)', options: ['行く', '行って', '行った', '行かない'], answer: 2 },
      { question: 'タバコは___ほうがいいです。(最好不要抽)', options: ['吸う', '吸った', '吸わなかった', '吸わない'], answer: 3 },
      { question: '「無理する」的意思是？', options: ['浪費', '生病', '勉強/硬撐', '休息'], answer: 2 },
      { question: '「遅い」的讀音是？', options: ['おそい', 'はやい', 'とおい', 'ちかい'], answer: 0 },
      { question: '薬を___ほうがいいですよ。(最好吃/喝)', options: ['飲んだ', '飲む', '飲んで', '飲まない'], answer: 0 },
    ]
  },

  // ---- 第 34 關：絕對服從 (命令形與禁止形) ----
  {
    id: 'n4_ch34',
    level: 'N4',
    title: '絕對服從 (命令與禁止)',
    grammar: [
      {
        pattern: '動詞命令形 / 動詞辭書形＋な（禁止形）',
        explanation: '極度強烈的命令（去做！）或禁止（不准做！），多用於交通號誌、男性口語或緊急情況。',
        examples: [
          { jp: '急{いそ}げ！', romaji: 'Isoge!', zh: '快一點！' },
          { jp: '触{さわ}るな！', romaji: 'Sawaru na!', zh: '不准摸！' },
        ]
      }
    ],
    vocabulary: [
      { word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: '趕快/著急' },
      { word: '触る', reading: 'さわる', romaji: 'sawaru', meaning: '觸摸' },
      { word: '止まる', reading: 'とまる', romaji: 'tomaru', meaning: '停止' },
      { word: '入る', reading: 'はいる', romaji: 'hairu', meaning: '進入' },
      { word: '逃げる', reading: 'にげる', romaji: 'nigeru', meaning: '逃跑' },
      { word: '頑張る', reading: 'がんばる', romaji: 'ganbaru', meaning: '加油/努力' },
      { word: '投げる', reading: 'なげる', romaji: 'nageru', meaning: '投擲' },
      { word: '標識', reading: 'ひょうしき', romaji: 'hyōshiki', meaning: '標誌' },
      { word: '規則', reading: 'きそく', romaji: 'kisoku', meaning: '規則' },
      { word: '守る', reading: 'まもる', romaji: 'mamoru', meaning: '遵守/保護' },
    ],
    quiz: [
      { question: '「行く」的命令形是？', options: ['行け', '行か', '行こ', '行き'], answer: 0 },
      { question: '「食べるな」的意思是？', options: ['快吃！', '請吃！', '不准吃！', '想吃！'], answer: 2 },
      { question: '「触る」的讀音是？', options: ['さわる', 'とまる', 'おわる', 'かわる'], answer: 0 },
      { question: '「逃げる」的意思是？', options: ['丟掉', '躲藏', '逃跑', '進入'], answer: 2 },
      { question: '「頑張る」的命令形是？', options: ['頑張れ', '頑張るな', '頑張ろ', '頑張ら'], answer: 0 },
    ]
  },

  // ---- 第 35 關：如果...的話 (條件形「ば形」與「たら」) ----
  {
    id: 'n4_ch35',
    level: 'N4',
    title: '如果...的話 (假設條件)',
    grammar: [
      {
        pattern: '動詞ば形 / い形容詞ければ',
        explanation: '表示假設的條件。「如果...的話」。五段改え段加ば，一段去る加れば，い形容詞去い加ければ。',
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
      }
    ],
    vocabulary: [
      { word: '春', reading: 'はる', romaji: 'haru', meaning: '春天' },
      { word: '桜', reading: 'さくら', romaji: 'sakura', meaning: '櫻花' },
      { word: '咲く', reading: 'さく', romaji: 'saku', meaning: '開花' },
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '昂貴' },
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: '雨' },
      { word: '降る', reading: 'ふる', romaji: 'furu', meaning: '降下(雨/雪)' },
      { word: '駅', reading: 'えき', romaji: 'eki', meaning: '車站' },
      { word: '着く', reading: 'つく', romaji: 'tsuku', meaning: '抵達' },
      { word: '電話する', reading: 'でんわする', romaji: 'denwa suru', meaning: '打電話' },
    ],
    quiz: [
      { question: '「行く」的ば形是？', options: ['行けば', '行かば', '行こば', '行きば'], answer: 0 },
      { question: '駅に着い___、電話してください。(之後)', options: ['たら', 'れば', 'と', 'なら'], answer: 0 },
      { question: '「咲く」的意思是？', options: ['開花', '結果', '枯萎', '落下'], answer: 0 },
      { question: '安かっ___、買います。(如果便宜的話)', options: ['たら', 'れば', 'と', 'なら'], answer: 0 },
      { question: '「着く」的讀音是？', options: ['つく', 'きく', 'さく', 'なく'], answer: 0 },
    ]
  },

  // ---- 第 36 關：照貓畫虎 (按照...去做：～とおりに) ----
  {
    id: 'n4_ch36',
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
      { word: '言う', reading: 'いう', romaji: 'iu', meaning: '說' },
      { word: '説明書', reading: 'せつめいしょ', romaji: 'setsumeisho', meaning: '說明書' },
      { word: '組み立てる', reading: 'くみたてる', romaji: 'kumitateru', meaning: '組裝' },
      { word: '線', reading: 'せん', romaji: 'sen', meaning: '線' },
      { word: '切る', reading: 'きる', romaji: 'kiru', meaning: '切/剪' },
      { word: '折る', reading: 'おる', romaji: 'oru', meaning: '折' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導' },
      { word: '図', reading: 'ず', romaji: 'zu', meaning: '圖' },
      { word: '矢印', reading: 'やじるし', romaji: 'yajirushi', meaning: '箭頭' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作' },
    ],
    quiz: [
      { question: '私が___とおりに、やってください。(按照我說的)', options: ['言う', '言った', '言って', '言わない'], answer: 1 },
      { question: '図___とおりに、折ってください。(按照圖)', options: ['が', 'を', 'の', 'に'], answer: 2 },
      { question: '「組み立てる」的意思是？', options: ['折疊', '剪開', '組裝', '說明'], answer: 2 },
      { question: '「説明書」的讀音是？', options: ['せつめいしょ', 'せつめしょ', 'しつめいしょ', 'せつみしょ'], answer: 0 },
      { question: '先生が教える___に、作ります。', options: ['ため', 'よう', 'とおり', 'まま'], answer: 2 },
    ]
  },

  // ---- 第 37 關：為了某個期盼 (非意志目的：～ように) ----
  {
    id: 'n4_ch37',
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
      { word: '練習する', reading: 'れんしゅうする', romaji: 'renshū suru', meaning: '練習' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '引く', reading: 'ひく', romaji: 'hiku', meaning: '拉/患(感冒)' },
      { word: '気をつける', reading: 'きをつける', romaji: 'ki o tsukeru', meaning: '注意/小心' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記' },
      { word: 'メモする', reading: 'めもする', romaji: 'memo suru', meaning: '做筆記' },
      { word: '合格する', reading: 'ごうかくする', romaji: 'gōkaku suru', meaning: '及格/合格' },
      { word: '一生懸命', reading: 'いっしょうけんめい', romaji: 'isshōkenmei', meaning: '拼命地' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到' },
    ],
    quiz: [
      { question: '忘れない___、メモします。(為了不要)', options: ['ために', 'ように', 'から', 'ので'], answer: 1 },
      { question: '「風邪を引く」的意思是？', options: ['生病', '頭痛', '患感冒', '發燒'], answer: 2 },
      { question: '「一生懸命」的讀音是？', options: ['いっしょうけんめい', 'いっしょけんめい', 'いしょうけんめ', 'いっしょけんめ'], answer: 0 },
      { question: '日本語が話せる___、練習します。(為了能夠)', options: ['ために', 'ように', 'ことに', 'ものに'], answer: 1 },
      { question: '「気をつける」的意思是？', options: ['擔心', '生氣', '注意/小心', '疲累'], answer: 2 },
    ]
  },

  // ---- 第 38 關：我幫你做 (行為授受：～てあげる / ～てもらう / ～てくれる) ----
  {
    id: 'n4_ch38',
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
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙' },
      { word: '貸す', reading: 'かす', romaji: 'kasu', meaning: '借給別人' },
      { word: '借りる', reading: 'かりる', romaji: 'kariru', meaning: '向別人借' },
      { word: '送る', reading: 'おくる', romaji: 'okuru', meaning: '送/寄/送行' },
      { word: '案内する', reading: 'あんないする', romaji: 'annai suru', meaning: '帶路/導覽' },
      { word: '説明する', reading: 'せつめいする', romaji: 'setsumei suru', meaning: '說明' },
      { word: '直す', reading: 'なおす', romaji: 'naosu', meaning: '修理/修改' },
      { word: '連れて行く', reading: 'つれていく', romaji: 'tsurete iku', meaning: '帶去' },
    ],
    quiz: [
      { question: '先生に教えて___ました。(請老師教)', options: ['あげ', 'もらい', 'くれ', 'やり'], answer: 1 },
      { question: '友達が手伝って___ました。(朋友主動幫我)', options: ['あげ', 'もらい', 'くれ', 'やり'], answer: 2 },
      { question: '私が写真を撮って___ましょうか。(我幫你拍吧)', options: ['あげ', 'もらい', 'くれ', 'あり'], answer: 0 },
      { question: '「貸す」的反義詞是？', options: ['返す', '借りる', '送る', '直す'], answer: 1 },
      { question: '「案内する」的讀音是？', options: ['あんないする', 'あんらいする', 'いないする', 'いんらいする'], answer: 0 },
    ]
  },

  // ---- 第 39 關：把動作當作名詞 (名詞化：V原のは / のが / のを) ----
  {
    id: 'n4_ch39',
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
      { word: '面白い', reading: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的' },
      { word: '難しい', reading: 'むずかしい', romaji: 'muzukashii', meaning: '困難的' },
      { word: '音楽', reading: 'おんがく', romaji: 'ongaku', meaning: '音樂' },
      { word: '好き', reading: 'すき', romaji: 'suki', meaning: '喜歡的' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長的' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: '不擅長的' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記' },
      { word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: '跑' },
      { word: '速い', reading: 'はやい', romaji: 'hayai', meaning: '快速的' },
      { word: '遅い', reading: 'おそい', romaji: 'osoi', meaning: '慢的/晚的' },
    ],
    quiz: [
      { question: '本を読む___が好きです。', options: ['に', 'の', 'のが', 'のを'], answer: 2 },
      { question: '「難しい」的反義詞是？', options: ['易しい(やさしい)', '面白い', '速い', '遅い'], answer: 0 },
      { question: '薬を飲む___忘れました。(把吃藥這件事)', options: ['のが', 'のは', 'のを', 'のに'], answer: 2 },
      { question: '「走る」的讀音是？', options: ['あるく', 'はしる', 'およぐ', 'いく'], answer: 1 },
      { question: '彼が来る___を知っていますか。', options: ['のが', 'のを', 'のは', 'のにも'], answer: 1 },
    ]
  },

  // ---- 第 40 關：我被影響了 (被動形：～れます / ～られます) ----
  {
    id: 'n4_ch40',
    level: 'N4',
    title: '我被影響了 (被動形)',
    grammar: [
      {
        pattern: '動詞受身形（被動形）',
        explanation: '表示被某人做某事，通常帶有受害、困擾的語氣。五段改あ段加れる，一段去る加られる。',
        examples: [
          { jp: '私{わたし}は先生{せんせい}に褒{ほめ}られました。', romaji: 'Watashi wa sensei ni homeraremashita.', zh: '我被老師稱讚了。' },
          { jp: '電車{でんしゃ}で足{あし}を踏{ふ}まれました。', romaji: 'Densha de ashi o fumaremashita.', zh: '在電車上被踩到腳了。' },
        ]
      }
    ],
    vocabulary: [
      { word: '褒める', reading: 'ほめる', romaji: 'homeru', meaning: '稱讚' },
      { word: '足', reading: 'あし', romaji: 'ashi', meaning: '腳' },
      { word: '踏む', reading: 'ふむ', romaji: 'fumu', meaning: '踩' },
      { word: '叱る', reading: 'しかる', romaji: 'shikaru', meaning: '責罵' },
      { word: '犬', reading: 'いぬ', romaji: 'inu', meaning: '狗' },
      { word: '噛む', reading: 'かむ', romaji: 'kamu', meaning: '咬' },
      { word: '泥棒', reading: 'どろぼう', romaji: 'dorobō', meaning: '小偷' },
      { word: '盗む', reading: 'ぬすむ', romaji: 'nusumu', meaning: '偷竊' },
      { word: '誘う', reading: 'さそう', romaji: 'sasou', meaning: '邀請' },
      { word: '笑う', reading: 'わらう', romaji: 'warau', meaning: '笑/嘲笑' },
    ],
    quiz: [
      { question: '先生___褒められました。(被老師)', options: ['を', 'に', 'が', 'で'], answer: 1 },
      { question: '「踏む」的被動形是？', options: ['踏まれる', '踏めれる', '踏もれる', '踏みれる'], answer: 0 },
      { question: '「泥棒」的意思是？', options: ['警察', '醫生', '小偷', '老師'], answer: 2 },
      { question: '犬に___ました。(被咬)', options: ['噛まれ', '噛みれ', '噛めれ', '噛させ'], answer: 0 },
      { question: '「叱る」的讀音是？', options: ['しかる', 'ほめる', 'おこる', 'なく'], answer: 0 },
    ]
  },

  // ---- 第 41 關：原來是因為這樣 (て形表原因：～て、～) ----
  {
    id: 'n4_ch41',
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
      { word: 'びっくりする', reading: 'びっくりする', romaji: 'bikkuri suru', meaning: '吃驚/嚇一跳' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息/請假' },
      { word: '安心する', reading: 'あんしんする', romaji: 'anshin suru', meaning: '安心' },
      { word: '心配する', reading: 'しんぱいする', romaji: 'shinpai suru', meaning: '擔心' },
      { word: '遅刻する', reading: 'ちこくする', romaji: 'chikoku suru', meaning: '遲到' },
      { word: '複雑', reading: 'ふくざつ', romaji: 'fukuzatsu', meaning: '複雜的' },
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

  // ---- 第 42 關：藏在句子裡的疑問 (間接問句：～か / ～かどうか) ----
  {
    id: 'n4_ch42',
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
      { word: '始まる', reading: 'はじまる', romaji: 'hajimaru', meaning: '開始(自動詞)' },
      { word: '知る', reading: 'しる', romaji: 'shiru', meaning: '知道' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的/事實' },
      { word: '分かる', reading: 'わかる', romaji: 'wakaru', meaning: '明白/了解' },
      { word: '間違い', reading: 'まちがい', romaji: 'machigai', meaning: '錯誤' },
      { word: '確かめる', reading: 'たしかめる', romaji: 'tashikameru', meaning: '確認' },
      { word: '調べる', reading: 'しらべる', romaji: 'shiraberu', meaning: '調查' },
      { word: '正しい', reading: 'ただしい', romaji: 'tadashii', meaning: '正確的' },
      { word: '着く', reading: 'つく', romaji: 'tsuku', meaning: '抵達' },
    ],
    quiz: [
      { question: '誰が来る___、知っていますか。', options: ['か', 'かどうか', 'が', 'を'], answer: 0 },
      { question: '「確かめる」的意思是？', options: ['猜測', '確認', '忘記', '調查'], answer: 1 },
      { question: '美味しい___、食べてみてください。(是否好吃)', options: ['か', 'だか', 'かどうか', 'なだか'], answer: 2 },
      { question: '「本当」的讀音是？', options: ['ほんとう', 'ほんと', 'ほんちょう', 'はんとう'], answer: 0 },
      { question: '何時に着く___、教えてください。', options: ['かどうか', 'か', 'の', 'が'], answer: 1 },
    ]
  },

  // ---- 第 43 關：為您效勞 (進階授受動詞：～て差し上げます 等) ----
  {
    id: 'n4_ch43',
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
      { word: '貸す', reading: 'かす', romaji: 'kasu', meaning: '借出' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導' },
      { word: '説明する', reading: 'せつめいする', romaji: 'setsumei suru', meaning: '說明' },
      { word: '案内する', reading: 'あんないする', romaji: 'annai suru', meaning: '導覽/帶路' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachō', meaning: '社長' },
      { word: '部長', reading: 'ぶちょう', romaji: 'buchō', meaning: '部長' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙' },
      { word: 'お茶', reading: 'おちゃ', romaji: 'ocha', meaning: '茶' },
      { word: '淹れる', reading: 'いれる', romaji: 'ireru', meaning: '泡(茶/咖啡)' },
    ],
    quiz: [
      { question: '先生が説明して___ました。(老師為我說明)', options: ['いただきました', 'くださいました', 'さしあげました', 'くれました'], answer: 1 },
      { question: '「案内する」的意思是？', options: ['說明', '導覽/帶路', '修理', '請客'], answer: 1 },
      { question: '社長に教えて___ました。(請社長教我)', options: ['いただきました', 'くださいました', 'さしあげました', 'くれました'], answer: 0 },
      { question: '「淹れる」的讀音是？', options: ['いれる', 'あれる', 'のむ', 'わかす'], answer: 0 },
      { question: 'ていただく相當於哪一個基礎動詞的謙讓語？', options: ['てあげる', 'てくれる', 'てもらう', 'てみる'], answer: 2 },
    ]
  },

  // ---- 第 44 關：為了明確目標 (意志目的：～ために) ----
  {
    id: 'n4_ch44',
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
      { word: '買う', reading: 'かう', romaji: 'kau', meaning: '買' },
      { word: '貯金する', reading: 'ちょきんする', romaji: 'chokin suru', meaning: '存錢' },
      { word: '家族', reading: 'かぞく', romaji: 'kazoku', meaning: '家人' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作' },
      { word: '健康', reading: 'けんこう', romaji: 'kenkō', meaning: '健康' },
      { word: '旅行', reading: 'りょこう', romaji: 'ryokō', meaning: '旅行' },
      { word: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: '準備' },
      { word: '目的', reading: 'もくてき', romaji: 'mokuteki', meaning: '目的' },
      { word: '痩せる', reading: 'やせる', romaji: 'yaseru', meaning: '變瘦' },
    ],
    quiz: [
      { question: '健康___ために、毎日運動します。', options: ['が', 'を', 'に', 'の'], answer: 3 },
      { question: '車を買う___、貯金しています。(為了)', options: ['ように', 'ために', 'ことに', 'ものに'], answer: 1 },
      { question: '「貯金」的意思是？', options: ['存款/存錢', '貸款', '花錢', '投資'], answer: 0 },
      { question: '「健康」的讀音是？', options: ['けんこう', 'げんき', 'けんきょう', 'げんごう'], answer: 0 },
      { question: '痩せる___、ダイエットをします。', options: ['ように', 'ために', 'ことに', 'ものに'], answer: 1 },
    ]
  },

  // ---- 第 45 關：看起來好像... (樣態直覺：～そうです) ----
  {
    id: 'n4_ch45',
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
      { word: '美味しい', reading: 'おいしい', romaji: 'oishii', meaning: '好吃的' },
      { word: '雨', reading: 'あめ', romaji: 'ame', meaning: '雨' },
      { word: '降る', reading: 'ふる', romaji: 'furu', meaning: '降下' },
      { word: '今にも', reading: 'いまにも', romaji: 'imanimo', meaning: '眼看就要/馬上' },
      { word: '重い', reading: 'おもい', romaji: 'omoi', meaning: '重的' },
      { word: '軽い', reading: 'かるい', romaji: 'karui', meaning: '輕的' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的' },
      { word: '暇', reading: 'ひま', romaji: 'hima', meaning: '空閒的' },
      { word: '落ちる', reading: 'おちる', romaji: 'ochiru', meaning: '掉落' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '高/貴的' },
    ],
    quiz: [
      { question: 'この荷物は___そうです。(看起來很重)', options: ['重い', '重', '重く', '重くて'], answer: 1 },
      { question: '「今にも」的意思是？', options: ['現在', '馬上/眼看就要', '今天', '剛才'], answer: 1 },
      { question: 'ボタンが___そうです。(看起來快掉了)', options: ['落ち', '落ちる', '落ちて', '落ちた'], answer: 0 },
      { question: '「忙しい」的樣態接續是？', options: ['忙しいそう', '忙しそう', '忙しくそう', '忙しなそう'], answer: 1 },
      { question: '「暇」的讀音是？', options: ['ひま', 'やすみ', 'じかん', 'きゅうか'], answer: 0 },
    ]
  },

  // ---- 第 46 關：做得太超過了 (程度過頭：～すぎます) ----
  {
    id: 'n4_ch46',
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
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝' },
      { word: '問題', reading: 'もんだい', romaji: 'mondai', meaning: '問題' },
      { word: '難しい', reading: 'むずかしい', romaji: 'muzukashii', meaning: '困難的' },
      { word: '大きい', reading: 'おおきい', romaji: 'ōkii', meaning: '大的' },
      { word: '小さい', reading: 'ちいさい', romaji: 'chiisai', meaning: '小的' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '貴/高的' },
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜的' },
    ],
    quiz: [
      { question: '昨日、ご飯を食べ___ました。(吃太多)', options: ['すぎ', 'やすい', 'にくい', 'たい'], answer: 0 },
      { question: 'この服は___すぎます。(太大)', options: ['大きい', '大き', '大きく', '大きて'], answer: 1 },
      { question: '「難しい」的反義詞是？', options: ['易しい', '高い', '重い', '速い'], answer: 0 },
      { question: '値段が___すぎます。(太貴)', options: ['高い', '高', '高く', '高て'], answer: 1 },
      { question: '「昨夜」的常用讀音（表示昨晚）是？', options: ['さくや', 'ゆうべ', 'きのうのよる', '以上皆可'], answer: 3 },
    ]
  },

  // ---- 第 47 關：就在這一瞬間 (動作時間點：～ところです) ----
  {
    id: 'n4_ch47',
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
      { word: '出発する', reading: 'しゅっぱつする', romaji: 'shuppatsu suru', meaning: '出發' },
      { word: '着く', reading: 'つく', romaji: 'tsuku', meaning: '抵達' },
      { word: '始まる', reading: 'はじまる', romaji: 'hajimaru', meaning: '開始' },
      { word: '終わる', reading: 'おわる', romaji: 'owaru', meaning: '結束' },
      { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: '會議' },
      { word: '調べる', reading: 'しらべる', romaji: 'shiraberu', meaning: '調查/查' },
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: '回去' },
      { word: '電話する', reading: 'でんわする', romaji: 'denwa suru', meaning: '打電話' },
    ],
    quiz: [
      { question: '今、調べて___ところです。(正在查)', options: ['いる', 'ある', 'みる', 'おく'], answer: 0 },
      { question: '「たった今」的意思是？', options: ['現在', '剛剛', '等一下', '明天'], answer: 1 },
      { question: '今から出かける___です。(正準備要出門)', options: ['ところ', 'ばかり', 'ため', 'よう'], answer: 0 },
      { question: '「出発」的讀音是？', options: ['しゅっぱつ', 'しゅばつ', 'しゅうぱつ', 'しゅうばつ'], answer: 0 },
      { question: 'ちょうど会議が終わっ___ところです。(剛結束)', options: ['た', 'て', 'る', 'ない'], answer: 0 },
    ]
  },

  // ---- 第 48 關：聽別人說的 (傳聞表現：～そうです) ----
  {
    id: 'n4_ch48',
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
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚' },
      { word: '辞める', reading: 'やめる', romaji: 'yameru', meaning: '辭職/放棄' },
      { word: '入院する', reading: 'にゅういんする', romaji: 'nyūin suru', meaning: '住院' },
      { word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: '嚴格的' },
      { word: '有名', reading: 'ゆうめい', romaji: 'yūmei', meaning: '有名的' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的' },
    ],
    quiz: [
      { question: '天気予報に___、明日は晴れだそうです。(根據)', options: ['ついて', 'よると', 'しては', 'とって'], answer: 1 },
      { question: '山田さんは会社を辞める___そうです。(聽說)', options: ['だ', 'な', 'の', '（不加）'], answer: 3 },
      { question: '「厳しい」的意思是？', options: ['溫柔的', '嚴格的', '寂寞的', '開心的'], answer: 1 },
      { question: '明日は雨___そうです。(聽說)', options: ['だ', 'な', 'の', '（不加）'], answer: 0 },
      { question: '「天気予報」的讀音是？', options: ['てんきよほう', 'てんきよぼう', 'でんきよほう', 'でんきよぼう'], answer: 0 },
    ]
  },

  // ---- 第 49 關：我讓你去做 (使役形：～せます / ～させます) ----
  {
    id: 'n4_ch49',
    level: 'N4',
    title: '我讓你去做 (使役形)',
    grammar: [
      {
        pattern: '動詞使役形',
        explanation: '表示讓某人做某事，或強迫某人做某事。五段改あ段加せる，一段去る加させる。',
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
      { word: '洗う', reading: 'あらう', romaji: 'arau', meaning: '洗' },
      { word: '待つ', reading: 'まつ', romaji: 'matsu', meaning: '等待' },
      { word: '運ぶ', reading: 'はこぶ', romaji: 'hakobu', meaning: '搬運' },
      { word: '参加する', reading: 'さんかする', romaji: 'sanka suru', meaning: '參加' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙' },
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

  // ---- 第 50 關：對您的最高敬意 (尊敬語與謙讓語) ----
  {
    id: 'n4_ch50',
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
      { word: 'いらっしゃる', reading: 'いらっしゃる', romaji: 'irassharu', meaning: '在/去/來(尊敬語)' },
      { word: '召し上がる', reading: 'めしあがる', romaji: 'meshiagaru', meaning: '吃/喝(尊敬語)' },
      { word: 'おっしゃる', reading: 'おっしゃる', romaji: 'ossharu', meaning: '說(尊敬語)' },
      { word: '参る', reading: 'まいる', romaji: 'mairu', meaning: '去/來(謙讓語)' },
      { word: '申す', reading: 'もうす', romaji: 'mōsu', meaning: '說(謙讓語)' },
      { word: '拝見する', reading: 'はいけんする', romaji: 'haiken suru', meaning: '看(謙讓語)' },
      { word: '伺う', reading: 'うかがう', romaji: 'ukagau', meaning: '問/聽/拜訪(謙讓語)' },
      { word: 'いただく', reading: 'いただく', romaji: 'itadaku', meaning: '吃/喝/得到(謙讓語)' },
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

  // ===================== N3 (25 章全展開版) =====================

  // ---- 第 51 關：就在那一瞬間 (～たとたん / ～最中に) ----
  {
    id: 'n3_ch51',
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
      { word: '開ける', reading: 'あける', romaji: 'akeru', meaning: '打開' },
      { word: '風', reading: 'かぜ', romaji: 'kaze', meaning: '風' },
      { word: '最中', reading: 'さいちゅう', romaji: 'saichū', meaning: '正在...之中' },
      { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: '會議' },
      { word: '携帯', reading: 'けいたい', romaji: 'keitai', meaning: '手機' },
      { word: '鳴る', reading: 'なる', romaji: 'naru', meaning: '鳴響' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考' },
      { word: '話しかける', reading: 'はなしかける', romaji: 'hanashikakeru', meaning: '搭話/攀談' },
      { word: '降り出す', reading: 'ふりだす', romaji: 'furidasu', meaning: '開始下(雨/雪)' },
    ],
    quiz: [
      { question: '立ち上がっ___、めまいがした。(一站起來)', options: ['たとたん', 'たところ', 'た最中', 'たばかり'], answer: 0 },
      { question: '食事の___に、お客さんが来た。(正當)', options: ['間', '最中', 'うち', 'とたん'], answer: 1 },
      { question: '「最中」的讀音是？', options: ['さいなか', 'もなか', 'さいちゅう', 'さいきん'], answer: 2 },
      { question: '「話しかける」的意思是？', options: ['自言自語', '說到底', '結束對話', '搭話/攀談'], answer: 3 },
      { question: '家を出た___、雨が降り出した。', options: ['最中', 'とたん', 'ばかり', 'ところ'], answer: 1 },
    ]
  },

  // ---- 第 52 關：每一次都這樣 (～たびに / ～ついでに) ----
  {
    id: 'n3_ch52',
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
      { word: '思い出す', reading: 'おもいだす', romaji: 'omoidasu', meaning: '想起/回憶起' },
      { word: '出張', reading: 'しゅっちょう', romaji: 'shutchō', meaning: '出差' },
      { word: 'お土産', reading: 'おみやげ', romaji: 'omiyage', meaning: '伴手禮/名產' },
      { word: '散歩', reading: 'さんぽ', romaji: 'sanpo', meaning: '散步' },
      { word: '手紙', reading: 'てがみ', romaji: 'tegami', meaning: '信件' },
      { word: '銀行', reading: 'ぎんこう', romaji: 'ginkō', meaning: '銀行' },
      { word: '買い物', reading: 'かいもの', romaji: 'kaimono', meaning: '購物' },
      { word: '寄る', reading: 'よる', romaji: 'yoru', meaning: '順路去/靠近' },
    ],
    quiz: [
      { question: 'この写真を見る___、家族を思い出す。(每當)', options: ['ついでに', 'たびに', '最中に', 'ばかりに'], answer: 1 },
      { question: '「出張」的讀音是？', options: ['しゅっちょう', 'しゅちょう', 'しゅつちょう', 'しゅうちょ'], answer: 0 },
      { question: '買い物に行く___、銀行に寄った。(順便)', options: ['たびに', 'ついでに', 'うちに', '最中に'], answer: 1 },
      { question: '「思い出す」的意思是？', options: ['想出來', '思考', '回憶起/想起', '發明'], answer: 2 },
      { question: '「昔」的讀音是？', options: ['むかし', 'きゅう', 'ふるい', 'さき'], answer: 0 },
    ]
  },

  // ---- 第 53 關：狀態的漸變 (逐漸改變：～ていく / ～てくる) ----
  {
    id: 'n3_ch53',
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
      { word: '増える', reading: 'ふえる', romaji: 'fueru', meaning: '增加(自動詞)' },
      { word: '減る', reading: 'へる', romaji: 'heru', meaning: '減少(自動詞)' },
      { word: '変わる', reading: 'かわる', romaji: 'kawaru', meaning: '改變' },
      { word: '慣れる', reading: 'なれる', romaji: 'nareru', meaning: '習慣' },
      { word: '寒くなる', reading: 'さむくなる', romaji: 'samuku naru', meaning: '變冷' },
      { word: '大きくなる', reading: 'おおきくなる', romaji: 'ōkiku naru', meaning: '變大/長大' },
      { word: '分かってくる', reading: 'わかってくる', romaji: 'wakatte kuru', meaning: '漸漸了解' },
      { word: '続く', reading: 'つづく', romaji: 'tsuzuku', meaning: '持續' },
    ],
    quiz: [
      { question: 'これからも日本語の勉強を続け___つもりです。(持續下去)', options: ['ていく', 'てくる', 'ておく', 'てしまう'], answer: 0 },
      { question: '最近、少し太っ___。(一直到現在漸漸變胖)', options: ['ていった', 'てきた', 'ておいた', 'てあった'], answer: 1 },
      { question: '「増える」的意思是？', options: ['減少', '停止', '增加', '改變'], answer: 2 },
      { question: '雨が降っ___。傘を持っていますか。(下起雨來了)', options: ['てきた', 'ていった', 'ておいた', 'てみた'], answer: 0 },
      { question: '「どんどん」的意思是？', options: ['偶爾', '不斷地/接連不斷', '稍微', '慢慢地'], answer: 1 },
    ]
  },

  // ---- 第 54 關：原來是這麼一回事 (理解與結論：～わけだ / ～というわけだ) ----
  {
    id: 'n3_ch54',
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
      { word: '眠い', reading: 'ねむい', romaji: 'nemui', meaning: '想睡的/睏的' },
      { word: 'つまり', reading: 'つまり', romaji: 'tsumari', meaning: '也就是說/總而言之' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長的' },
      { word: '住む', reading: 'すむ', romaji: 'sumu', meaning: '居住' },
      { word: '理由', reading: 'りゆう', romaji: 'riyū', meaning: '理由' },
      { word: '納得する', reading: 'なっとくする', romaji: 'nattoku suru', meaning: '理解/接受' },
      { word: '結論', reading: 'けつろん', romaji: 'ketsuron', meaning: '結論' },
      { word: '理解する', reading: 'りかいする', romaji: 'rikai suru', meaning: '理解' },
      { word: '説明する', reading: 'せつめいする', romaji: 'setsumei suru', meaning: '說明' },
    ],
    quiz: [
      { question: '毎日練習しているから、上手な___。(難怪會擅長)', options: ['はずだ', 'わけだ', 'ことだ', 'ものだ'], answer: 1 },
      { question: '「つまり」的意思是？', options: ['可是', '但是', '總而言之/也就是說', '然而'], answer: 2 },
      { question: '熱が39度もある。体がだるい___。(難怪)', options: ['はずだ', 'ことだ', 'わけだ', 'べきだ'], answer: 2 },
      { question: '「納得する」的意思是？', options: ['不滿', '拒絕', '生氣', '理解/接受'], answer: 3 },
      { question: 'つまり、会議は中止___わけですね。', options: ['だという', 'だ', 'という', 'な'], answer: 2 },
    ]
  },

  // ---- 第 55 關：剛剛才結束 (剛做完：～たばかりだ / ～ところだ) ----
  {
    id: 'n3_ch55',
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
      { word: '出発する', reading: 'しゅっぱつする', romaji: 'shuppatsu suru', meaning: '出發' },
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚' },
      { word: '終わる', reading: 'おわる', romaji: 'owaru', meaning: '結束' },
      { word: '到着する', reading: 'とうちゃくする', romaji: 'tōchaku suru', meaning: '抵達' },
      { word: '入社する', reading: 'にゅうしゃする', romaji: 'nyūsha suru', meaning: '進公司' },
      { word: '覚える', reading: 'おぼえる', romaji: 'oboeru', meaning: '記住/背' },
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: '回去' },
    ],
    quiz: [
      { question: '半年前に結婚した___です。(心理上覺得才剛結婚)', options: ['ところ', 'ばかり', '最中', 'たび'], answer: 1 },
      { question: 'たった今、会議が終わっ___です。(客觀上剛剛結束)', options: ['たところ', 'たばかり', 'るばかり', 'た最中'], answer: 0 },
      { question: '「さっき」與「たった今」哪個表示的時間距離現在更近？', options: ['さっき', 'たった今', '一樣近', '無法比較'], answer: 1 },
      { question: '先月入社した___なので、まだ仕事が分かりません。', options: ['ところ', 'ばかり', '最中', 'たび'], answer: 1 },
      { question: '「到着する」的讀音是？', options: ['とうちゃくする', 'とちゃくする', 'とうじゃくする', 'どうちゃくする'], answer: 0 },
    ]
  },

  // ---- 第 56 關：簡直就像... (比喻與典型：～みたい / ～らしい) ----
  {
    id: 'n3_ch56',
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
      { word: '明るい', reading: 'あかるい', romaji: 'akarui', meaning: '開朗的/明亮的' },
      { word: '性格', reading: 'せいかく', romaji: 'seikaku', meaning: '性格' },
      { word: '春', reading: 'はる', romaji: 'haru', meaning: '春天' },
      { word: '男らしい', reading: 'おとこらしい', romaji: 'otokorashii', meaning: '有男子氣概的' },
      { word: '女らしい', reading: 'おんならしい', romaji: 'onnarashii', meaning: '有女人味的' },
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
    ]
  },

  // ---- 第 57 關：出乎意料之外 (明明...卻：～わりに / ～にしては) ----
  {
    id: 'n3_ch57',
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
      { word: '太る', reading: 'ふとる', romaji: 'futoru', meaning: '變胖' },
      { word: '外国人', reading: 'がいこくじん', romaji: 'gaikokujin', meaning: '外國人' },
      { word: '初めて', reading: 'はじめて', romaji: 'hajimete', meaning: '第一次' },
      { word: '上手', reading: 'じょうず', romaji: 'jōzu', meaning: '擅長的' },
      { word: '下手', reading: 'へた', romaji: 'heta', meaning: '不擅長的' },
      { word: '年', reading: 'とし', romaji: 'toshi', meaning: '年齡/歲數' },
      { word: '若く見える', reading: 'わかくみえる', romaji: 'wakaku mieru', meaning: '看起來年輕' },
      { word: '勉強する', reading: 'べんきょうする', romaji: 'benkyō suru', meaning: '讀書/學習' },
      { word: '成績', reading: 'せいせき', romaji: 'seiseki', meaning: '成績' },
    ],
    quiz: [
      { question: '値段が安い___、とても美味しい。(明明很便宜卻)', options: ['にしては', 'わりに', 'ために', 'ように'], answer: 1 },
      { question: '10歳___、体が大きい。(以10歲這個明確數字來說)', options: ['わりに', 'にしては', 'ために', 'ように'], answer: 1 },
      { question: '「若く見える」的意思是？', options: ['看起來很老', '看起來很窮', '看起來年輕', '看起來很笨'], answer: 2 },
      { question: 'たくさん勉強した___、成績が悪かった。', options: ['わりには', 'にしては', 'ために', 'ように'], answer: 0 },
      { question: '「成績」的讀音是？', options: ['せいせき', 'せせき', 'せいでき', 'せでき'], answer: 0 },
    ]
  },

  // ---- 第 58 關：多虧了與都怪你 (好壞原因：～おかげで / ～せいで) ----
  {
    id: 'n3_ch58',
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
      { word: '合格する', reading: 'ごうかくする', romaji: 'gōkaku suru', meaning: '及格/合格' },
      { word: '景色', reading: 'けしき', romaji: 'keshiki', meaning: '景色/風景' },
      { word: '遅刻する', reading: 'ちこくする', romaji: 'chikoku suru', meaning: '遲到' },
      { word: '寝坊する', reading: 'ねぼうする', romaji: 'nebō suru', meaning: '睡過頭' },
      { word: '失敗する', reading: 'しっぱいする', romaji: 'shippai suru', meaning: '失敗' },
      { word: '成功する', reading: 'せいこうする', romaji: 'seikō suru', meaning: '成功' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙' },
      { word: '渋滞', reading: 'じゅうたい', romaji: 'jūtai', meaning: '塞車' },
      { word: '間に合う', reading: 'まにあう', romaji: 'maniau', meaning: '來得及' },
      { word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: '感冒' },
    ],
    quiz: [
      { question: '友達が手伝ってくれた___、早く終わった。(好結果)', options: ['せいで', 'おかげで', 'ために', 'ように'], answer: 1 },
      { question: '渋滞の___、飛行機に間に合わなかった。(壞結果)', options: ['せいで', 'おかげで', 'ために', 'ように'], answer: 0 },
      { question: '「寝坊」的讀音是？', options: ['ねぼう', 'あさぼう', 'しんぼう', 'ねほう'], answer: 0 },
      { question: '「間に合う」的意思是？', options: ['遲到', '見面', '來得及', '剛好'], answer: 2 },
      { question: '薬を飲んだ___、熱が下がった。(好結果)', options: ['せいで', 'おかげで', 'わりに', 'ばかりに'], answer: 1 },
    ]
  },

  // ---- 第 59 關：滿滿都是、淨是 (數量與頻率：～ばかり / ～だらけ) ----
  {
    id: 'n3_ch59',
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
      { word: 'ゲーム', reading: 'げーむ', romaji: 'gēmu', meaning: '遊戲' },
      { word: '甘い', reading: 'あまい', romaji: 'amai', meaning: '甜的' },
      { word: '泥', reading: 'どろ', romaji: 'doro', meaning: '泥巴' },
      { word: '間違い', reading: 'まちがい', romaji: 'machigai', meaning: '錯誤' },
      { word: '埃', reading: 'ほこり', romaji: 'hokori', meaning: '灰塵' },
      { word: '血', reading: 'ち', romaji: 'chi', meaning: '血' },
      { word: '文句', reading: 'もんく', romaji: 'monku', meaning: '抱怨/不滿' },
      { word: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', meaning: '玩耍' },
      { word: '作文', reading: 'さくぶん', romaji: 'sakubun', meaning: '作文' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣' },
    ],
    quiz: [
      { question: '弟は遊んで___いる。(老是在玩)', options: ['だらけ', 'ばかり', 'のみ', 'しか'], answer: 1 },
      { question: '部屋の隅は埃___だった。(滿是灰塵)', options: ['ばかり', 'だけ', 'だらけ', 'のみ'], answer: 2 },
      { question: '「文句」的意思是？', options: ['文章', '抱怨/不滿', '句子', '文學'], answer: 1 },
      { question: '彼は文句___言っている。(老是在抱怨)', options: ['だらけ', 'ばかり', 'しか', 'だけ'], answer: 1 },
      { question: '「泥」的讀音是？', options: ['どろ', 'すな', 'つち', 'ほこり'], answer: 0 },
    ]
  },

  // ---- 第 60 關：差不多就是這樣 (程度表達：～くらい / ～ほど) ----
  {
    id: 'n3_ch60',
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
      { word: '死ぬ', reading: 'しぬ', romaji: 'shinu', meaning: '死' },
      { word: '疲れる', reading: 'つかれる', romaji: 'tsukareru', meaning: '疲累' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣' },
      { word: '痛い', reading: 'いたい', romaji: 'itai', meaning: '痛的' },
      { word: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaning: '親切的' },
      { word: '試験', reading: 'しけん', romaji: 'shiken', meaning: '考試' },
      { word: '嫌', reading: 'いや', romaji: 'iya', meaning: '討厭的' },
      { word: '寂しい', reading: 'さびしい', romaji: 'sabishii', meaning: '寂寞的' },
      { word: '怖い', reading: 'こわい', romaji: 'kowai', meaning: '可怕的' },
      { word: '驚く', reading: 'おどろく', romaji: 'odoroku', meaning: '吃驚/驚訝' },
    ],
    quiz: [
      { question: '声が出ない___驚いた。(到了發不出聲音的地步)', options: ['ばかり', 'ほど', 'だけ', 'しか'], answer: 1 },
      { question: '「嫌」的意思是？', options: ['喜歡的', '可怕的', '討厭的', '寂寞的'], answer: 2 },
      { question: '母の料理___美味しいものはない。(沒有比...更...)', options: ['くらい', 'しか', 'だけ', 'ばかり'], answer: 0 },
      { question: '「怖い」的讀音是？', options: ['こわい', 'いたい', 'くらい', 'つらい'], answer: 0 },
      { question: '歩けない___足が痛い。(到了不能走的地步)', options: ['ほど', 'ばかり', 'だけ', 'のみ'], answer: 0 },
    ]
  },

  // ---- 第 61 關：絕對錯不了 (強烈推測：～に違いない / ～はずだ) ----
  {
    id: 'n3_ch61',
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
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的/事實' },
      { word: '絶対に', reading: 'ぜったいに', romaji: 'zettai ni', meaning: '絕對' },
      { word: '見つかる', reading: 'みつかる', romaji: 'mitsukaru', meaning: '被找到' },
    ],
    quiz: [
      { question: '彼の話は嘘に___。(肯定是謊言)', options: ['違いない', '過ぎない', 'はずがない', 'わけがない'], answer: 0 },
      { question: '鈴木さんは10年アメリカに住んでいたから、英語が話せる___だ。(按理說應該)', options: ['わけ', 'はず', 'もの', 'こと'], answer: 1 },
      { question: '「財布」的讀音是？', options: ['さいふ', 'さいぶ', 'ざいふ', 'ざいぶ'], answer: 0 },
      { question: 'あんな高い車、彼に買える___。(不可能)', options: ['はずがない', 'に違いない', 'はずだ', 'べきだ'], answer: 0 },
      { question: '「絶対に」的意思是？', options: ['稍微', '絕對', '可能', '大概'], answer: 1 },
    ]
  },

  // ---- 第 62 關：有這個壞可能 (擔憂與可能：～恐れがある / ～かもしれない) ----
  {
    id: 'n3_ch62',
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
      { word: '伝染する', reading: 'でんせんする', romaji: 'densen suru', meaning: '傳染' },
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '疾病/生病' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '事實/真的' },
      { word: '危険', reading: 'きけん', romaji: 'kiken', meaning: '危險' },
      { word: '地震', reading: 'じしん', romaji: 'jishin', meaning: '地震' },
      { word: '津波', reading: 'つなみ', romaji: 'tsunami', meaning: '海嘯' },
    ],
    quiz: [
      { question: '津波の___があります。(有發生海嘯的危險)', options: ['恐れ', '心配', '不安', '怖さ'], answer: 0 },
      { question: '約束の時間に遅れる___。(也許會遲到)', options: ['に違いない', 'はずだ', 'かもしれない', 'わけだ'], answer: 2 },
      { question: '「影響」的讀音是？', options: ['えいきょう', 'えいこう', 'えきょう', 'えこう'], answer: 0 },
      { question: '「伝染する」的意思是？', options: ['傳達', '傳統', '傳染', '傳說'], answer: 2 },
      { question: '明日は雪が降る___。(說不定)', options: ['恐れがある', 'かもしれない', 'はずだ', 'に違いない'], answer: 1 },
    ]
  },

  // ---- 第 63 關：聽別人說的 (客觀傳聞：～ということだ / ～そうだ) ----
  {
    id: 'n3_ch63',
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
      { word: 'ニュース', reading: 'にゅーす', romaji: 'nyūsu', meaning: '新聞' },
      { word: '地震', reading: 'じしん', romaji: 'jishin', meaning: '地震' },
      { word: '部長', reading: 'ぶちょう', romaji: 'buchō', meaning: '部長' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '請假/休息' },
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
    ]
  },

  // ---- 第 64 關：我就是這麼認為 (主觀認定：～に決まっている) ----
  {
    id: 'n3_ch64',
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
      { word: '決まる', reading: 'きまる', romaji: 'kimaru', meaning: '決定' },
      { word: '練習する', reading: 'れんしゅうする', romaji: 'renshū suru', meaning: '練習' },
      { word: '負ける', reading: 'まける', romaji: 'makeru', meaning: '輸/敗' },
      { word: '勝つ', reading: 'かつ', romaji: 'katsu', meaning: '贏/勝' },
      { word: '無理', reading: 'むり', romaji: 'muri', meaning: '不可能/勉強' },
      { word: '絶対', reading: 'ぜったい', romaji: 'zettai', meaning: '絕對' },
      { word: '当然', reading: 'とうぜん', romaji: 'tōzen', meaning: '理所當然' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣' },
      { word: '危ない', reading: 'あぶない', romaji: 'abunai', meaning: '危險的' },
    ],
    quiz: [
      { question: '一人でこんな重い物を持つのは、無理___。(一定是不可能)', options: ['に決まっている', 'に違いない', 'はずだ', 'かもしれない'], answer: 0 },
      { question: '「負ける」的反義詞是？', options: ['逃げる', '勝つ', '怒る', '泣く'], answer: 1 },
      { question: 'そんなことをしたら、先生が怒る___。(肯定會生氣)', options: ['に決まっている', 'わけがない', 'はずがない', '恐れがある'], answer: 0 },
      { question: '「無理」的讀音是？', options: ['むり', 'ふり', 'ぶち', 'むち'], answer: 0 },
      { question: 'あんな高い場所は、危ない___。(肯定是危險的)', options: ['に決まっている', 'かもしれない', 'はずだ', 'わけだ'], answer: 0 },
    ]
  },

  // ---- 第 65 關：話也不能這麼說 (部分否定：～わけではない / ～とは限らない) ----
  {
    id: 'n3_ch65',
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
      { word: '幸せ', reading: 'しあわせ', romaji: 'shiawase', meaning: '幸福' },
      { word: '嫌', reading: 'いや', romaji: 'iya', meaning: '討厭' },
      { word: '限る', reading: 'かぎる', romaji: 'kagiru', meaning: '限制/只限於' },
      { word: '必ずしも', reading: 'かならずしも', romaji: 'kanarazushimo', meaning: '未必/不一定(配否定)' },
      { word: '高い', reading: 'たかい', romaji: 'takai', meaning: '高/貴的' },
      { word: '全部', reading: 'ぜんぶ', romaji: 'zenbu', meaning: '全部' },
      { word: '信じる', reading: 'しんじる', romaji: 'shinjiru', meaning: '相信' },
      { word: '正しい', reading: 'ただしい', romaji: 'tadashii', meaning: '正確的' },
      { word: '便利', reading: 'べんり', romaji: 'benri', meaning: '便利的' },
    ],
    quiz: [
      { question: '日本人がみんな寿司が好きだ___。(不一定喜歡)', options: ['とは限らない', 'わけではない', 'に決まっている', 'に違いない'], answer: 0 },
      { question: '「幸せ」的意思是？', options: ['辛勞', '幸福', '希望', '失望'], answer: 1 },
      { question: '歌が下手な___けど、歌いたくない。(倒也不是不會唱)', options: ['わけじゃない', 'とは限らない', 'はずがない', 'に違いない'], answer: 0 },
      { question: '高いものが___いいものとは限らない。(未必)', options: ['必ずしも', '絶対に', 'きっと', 'まさに'], answer: 0 },
      { question: '「限る」的讀音是？', options: ['かぎる', 'おわる', 'きまる', 'すぎる'], answer: 0 },
    ]
  },

  // ---- 第 66 關：你應該這麼做 (強烈建議與義務：～べきだ / ～ことだ) ----
  {
    id: 'n3_ch66',
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
      { word: '守る', reading: 'まもる', romaji: 'mamoru', meaning: '遵守/保護' },
      { word: '夜遅く', reading: 'よるおそく', romaji: 'yoru osoku', meaning: '深夜/很晚' },
      { word: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', meaning: '玩耍' },
      { word: '練習する', reading: 'れんしゅうする', romaji: 'renshū suru', meaning: '練習' },
      { word: '無理する', reading: 'むりする', romaji: 'muri suru', meaning: '勉強/硬撐' },
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉' },
      { word: '信じる', reading: 'しんじる', romaji: 'shinjiru', meaning: '相信' },
      { word: '従う', reading: 'したがう', romaji: 'shitagau', meaning: '服從/遵從' },
      { word: '規則', reading: 'きそく', romaji: 'kisoku', meaning: '規則' },
    ],
    quiz: [
      { question: '他人の悪口を言う___ではない。(不應該)', options: ['べき', 'はず', 'わけ', 'こと'], answer: 0 },
      { question: '「謝る」的意思是？', options: ['感謝', '道歉', '原諒', '生氣'], answer: 1 },
      { question: '健康でいたければ、タバコを吸わない___。(最好)', options: ['ことだ', 'べきだ', 'ものだ', 'わけだ'], answer: 0 },
      { question: '「従う」的讀音是？', options: ['したがう', 'まよう', 'にげる', 'むかう'], answer: 0 },
      { question: '規則は守る___だ。(理應)', options: ['べき', 'はず', 'わけ', 'こと'], answer: 0 },
    ]
  },

  // ---- 第 67 關：這才是社會常理 (普遍真理：～ものだ / ～ものではない) ----
  {
    id: 'n3_ch67',
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
      { word: '過ぎる', reading: 'すぎる', romaji: 'sugiru', meaning: '流逝/經過' },
      { word: '親', reading: 'おや', romaji: 'oya', meaning: '雙親/父母' },
      { word: '子供', reading: 'こども', romaji: 'kodomo', meaning: '小孩' },
      { word: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', meaning: '玩耍' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記' },
      { word: '変わる', reading: 'かわる', romaji: 'kawaru', meaning: '改變' },
      { word: '昔', reading: 'むかし', romaji: 'mukashi', meaning: '從前' },
      { word: '叱る', reading: 'しかる', romaji: 'shikaru', meaning: '責罵' },
      { word: '人生', reading: 'じんせい', romaji: 'jinsei', meaning: '人生' },
    ],
    quiz: [
      { question: '人の悪口を言う___はない。(本來就不該)', options: ['もの', 'こと', 'わけ', 'はず'], answer: 0 },
      { question: '「過ぎる」的意思是？', options: ['前進', '停止', '流逝/經過', '後退'], answer: 2 },
      { question: '昔はよく先生に叱られた___。(以前經常)', options: ['ものだ', 'ことだ', 'わけだ', 'はずだ'], answer: 0 },
      { question: '「親」的讀音是？', options: ['おや', 'ちち', 'はは', 'あに'], answer: 0 },
      { question: '人生は思い通りにいかない___。(本來就是這樣)', options: ['ものだ', 'ことだ', 'わけだ', 'べきだ'], answer: 0 },
    ]
  },

  // ---- 第 68 關：根本沒必要 (無須去做：～ことはない) ----
  {
    id: 'n3_ch68',
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
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉' },
      { word: '時間', reading: 'じかん', romaji: 'jikan', meaning: '時間' },
      { word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: '著急/趕快' },
      { word: '心配する', reading: 'しんぱいする', romaji: 'shinpai suru', meaning: '擔心' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣' },
      { word: '諦める', reading: 'あきらめる', romaji: 'akirameru', meaning: '放棄' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣' },
      { word: '気にする', reading: 'きにする', romaji: 'ki ni suru', meaning: '在意/介意' },
      { word: '遠慮する', reading: 'えんりょする', romaji: 'enryo suru', meaning: '客氣' },
    ],
    quiz: [
      { question: 'そんなに心配する___よ。(沒必要)', options: ['ことはない', 'ものはない', 'わけはない', 'はずはない'], answer: 0 },
      { question: '「遠慮する」的意思是？', options: ['生氣', '客氣', '擔心', '放棄'], answer: 1 },
      { question: '君が泣く___。(用不著)', options: ['ことだ', 'ことはない', 'ものだ', 'ものではない'], answer: 1 },
      { question: '「諦める」的讀音是？', options: ['あきらめる', 'あやまめる', 'あらためる', 'あつめる'], answer: 0 },
      { question: '少しの失敗で諦める___。(沒必要)', options: ['ことはない', 'ことだ', 'ものだ', 'ものではない'], answer: 0 },
    ]
  },

  // ---- 第 69 關：充滿感情的感嘆 (多麼...啊：～ことか / ～ものか) ----
  {
    id: 'n3_ch69',
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
      { word: '合格する', reading: 'ごうかくする', romaji: 'gōkaku suru', meaning: '及格/合格' },
      { word: '嬉しい', reading: 'うれしい', romaji: 'ureshii', meaning: '開心的' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣' },
      { word: '二度と', reading: 'にどと', romaji: 'nido to', meaning: '絕對不...第二次(配否定)' },
      { word: '負ける', reading: 'まける', romaji: 'makeru', meaning: '輸/敗' },
      { word: '辛い', reading: 'つらい', romaji: 'tsurai', meaning: '痛苦的/難受的' },
      { word: '信じる', reading: 'しんじる', romaji: 'shinjiru', meaning: '相信' },
    ],
    quiz: [
      { question: '家族に会えなくて、どんなに寂しかった___。(多麼...啊)', options: ['ことか', 'ものか', 'わけか', 'はずか'], answer: 0 },
      { question: 'あんな人の言うことなんて、信じる___！(怎麼可能相信)', options: ['ものか', 'ことか', 'わけか', 'はずか'], answer: 0 },
      { question: '「辛い」的意思是？', options: ['開心的', '辣的/痛苦的', '甜的', '鹹的'], answer: 1 },
      { question: 'これまで何度失敗した___。(不知多少次)', options: ['ことか', 'ものか', 'わけか', 'ばかりか'], answer: 0 },
      { question: '「二度と」通常搭配什麼句型？', options: ['肯定句', '否定句', '命令句', '疑問句'], answer: 1 },
    ]
  },

  // ---- 第 70 關：不管再怎麼努力 (逆接條件：～たとえ～ても / ～いくら～ても) ----
  {
    id: 'n3_ch70',
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
      { word: '反対する', reading: 'はんたいする', romaji: 'hantai suru', meaning: '反對' },
      { word: '留学する', reading: 'りゅうがくする', romaji: 'ryūgaku suru', meaning: '留學' },
      { word: '行われる', reading: 'おこなわれる', romaji: 'okonawareru', meaning: '被舉行' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考' },
      { word: '答え', reading: 'こたえ', romaji: 'kotae', meaning: '答案' },
      { word: '太る', reading: 'ふとる', romaji: 'futoru', meaning: '變胖' },
      { word: '失敗する', reading: 'しっぱいする', romaji: 'shippai suru', meaning: '失敗' },
      { word: '離れる', reading: 'はなれる', romaji: 'hanareru', meaning: '離開/分開' },
    ],
    quiz: [
      { question: '___雨でも、行きます。(就算)', options: ['たとえ', 'いくら', 'どんなに', 'とても'], answer: 0 },
      { question: '___食べても、太らない。(不管再怎麼)', options: ['たとえ', 'いくら', 'どうしても', 'もちろん'], answer: 1 },
      { question: '「反対する」的意思是？', options: ['贊成', '反對', '同意', '放棄'], answer: 1 },
      { question: 'たとえ失敗し___、諦めない。(就算失敗)', options: ['ても', 'たら', 'れば', 'と'], answer: 0 },
      { question: '「答え」的讀音是？', options: ['こたえ', 'こえ', 'おぼえ', 'おしえ'], answer: 0 },
    ]
  },

  // ---- 第 71 關：伴隨著變化 (隨著A，B也改變：～にしたがって / ～につれて) ----
  {
    id: 'n3_ch71',
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
      { word: '行動する', reading: 'こうどうする', romaji: 'kōdō suru', meaning: '行動' },
      { word: '経つ', reading: 'たつ', romaji: 'tatsu', meaning: '流逝(時間)' },
      { word: '悲しみ', reading: 'かなしみ', romaji: 'kanashimi', meaning: '悲傷' },
      { word: '薄れる', reading: 'うすれる', romaji: 'usureru', meaning: '變淡' },
      { word: '年をとる', reading: 'としをとる', romaji: 'toshi o toru', meaning: '變老/上年紀' },
      { word: '記憶力', reading: 'きおくりょく', romaji: 'kiokuryoku', meaning: '記憶力' },
      { word: '落ちる', reading: 'おちる', romaji: 'ochiru', meaning: '掉落/衰退' },
      { word: '発展する', reading: 'はってんする', romaji: 'hatten suru', meaning: '發展' },
      { word: '経済', reading: 'けいざい', romaji: 'keizai', meaning: '經濟' },
    ],
    quiz: [
      { question: '時間が経つ___、痛みがなくなった。(隨著)', options: ['につれて', 'とともに', 'にくらべて', 'に対して'], answer: 0 },
      { question: '「経つ」的意思是？', options: ['站立', '經過/流逝', '切斷', '建造'], answer: 1 },
      { question: '規則に___行動してください。(遵從)', options: ['したがって', 'つれて', 'ともなって', '対して'], answer: 0 },
      { question: '経済が発展する___、環境が悪化した。(隨著)', options: ['にしたがって', 'において', 'によって', 'に対して'], answer: 0 },
      { question: '「記憶力」的讀音是？', options: ['きおくりょく', 'きおくろく', 'きようりょく', 'きおくちから'], answer: 0 },
    ]
  },

  // ---- 第 72 關：以此為契機 (轉捩點：～をきっかけに / ～を契機に) ----
  {
    id: 'n3_ch72',
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
      { word: 'やめる', reading: 'やめる', romaji: 'yameru', meaning: '停止/戒除' },
      { word: 'アニメ', reading: 'あにめ', romaji: 'anime', meaning: '動畫' },
      { word: '勉強', reading: 'べんきょう', romaji: 'benkyō', meaning: '學習' },
      { word: '始める', reading: 'はじめる', romaji: 'hajimeru', meaning: '開始' },
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
    ]
  },

  // ---- 第 73 關：從...角度來看 (判斷根據：～からいうと / ～から見ると) ----
  {
    id: 'n3_ch73',
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
      { word: 'ふさわしい', reading: 'ふさわしい', romaji: 'fusawashii', meaning: '適合的/相稱的' },
      { word: '現状', reading: 'げんじょう', romaji: 'genjō', meaning: '現狀' },
      { word: '親', reading: 'おや', romaji: 'oya', meaning: '雙親' },
      { word: 'いつまでも', reading: 'いつまでも', romaji: 'itsumademo', meaning: '永遠' },
      { word: '外国人', reading: 'がいこくじん', romaji: 'gaikokujin', meaning: '外國人' },
      { word: '習慣', reading: 'しゅうかん', romaji: 'shūkan', meaning: '習慣' },
      { word: '不思議', reading: 'ふしぎ', romaji: 'fushigi', meaning: '不可思議的' },
      { word: '立場', reading: 'たちば', romaji: 'tachiba', meaning: '立場' },
      { word: '成績', reading: 'せいせき', romaji: 'seiseki', meaning: '成績' },
    ],
    quiz: [
      { question: '親の立場___、反対するしかない。(從...立場來看)', options: ['から見れば', 'からいうと', 'にしては', 'にとって'], answer: 0 },
      { question: '成績___、彼が合格するだろう。(從...數據上來說)', options: ['からいって', 'から見れば', 'にとって', 'に対して'], answer: 0 },
      { question: '「ふさわしい」的意思是？', options: ['不可思議的', '適合的/相稱的', '嚴格的', '麻煩的'], answer: 1 },
      { question: '「現状」的讀音是？', options: ['げんじょう', 'げんしょ', 'けんじょう', 'けんしょ'], answer: 0 },
      { question: '子供___見ると、親の気持ちはわからない。(在小孩看來)', options: ['から', 'に', 'で', 'を'], answer: 0 },
    ]
  },

  // ---- 第 74 關：與其這樣不如... (重新評價：～というより / ～かわりに) ----
  {
    id: 'n3_ch74',
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
      { word: '失礼', reading: 'しつれい', romaji: 'shitsurei', meaning: '失禮' },
      { word: '無礼', reading: 'ぶれい', romaji: 'burei', meaning: '無禮' },
      { word: '涼しい', reading: 'すずしい', romaji: 'suzushii', meaning: '涼爽的' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '寒冷的' },
      { word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: '工作' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息/放假' },
      { word: '会議に出る', reading: 'かいぎにでる', romaji: 'kaigi ni deru', meaning: '出席會議' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙' },
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導' },
    ],
    quiz: [
      { question: '歩くという___、走っているようだ。(與其說是)', options: ['より', 'から', 'まで', 'ほど'], answer: 0 },
      { question: '車で行く___、自転車で行く。(代替)', options: ['かわりに', 'より', 'ために', 'ように'], answer: 0 },
      { question: '「涼しい」的讀音是？', options: ['さむい', 'あつい', 'すずしい', 'あたたかい'], answer: 2 },
      { question: '英語を教える___、日本語を教えてください。(作為交換)', options: ['かわりに', 'より', 'ために', 'ように'], answer: 0 },
      { question: '「無礼」的意思是？', options: ['沒有禮物', '無禮/沒禮貌', '不用錢', '免費'], answer: 1 },
    ]
  },

  // ---- 第 75 關：竟然...太誇張了 (輕視與驚訝：～なんて / ～なんか / ～とは) ----
  {
    id: 'n3_ch75',
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
      { word: 'びっくりする', reading: 'びっくりする', romaji: 'bikkuri suru', meaning: '吃驚/嚇一跳' },
      { word: '思う', reading: 'おもう', romaji: 'omou', meaning: '認為/想' },
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚' },
      { word: 'ゲーム', reading: 'げーむ', romaji: 'gēmu', meaning: '遊戲' },
      { word: '信じられない', reading: 'しんじられない', romaji: 'shinjirarenai', meaning: '不敢相信' },
      { word: '優勝する', reading: 'ゆうしょうする', romaji: 'yūshō suru', meaning: '奪冠/得第一' },
      { word: '嘘', reading: 'うそ', romaji: 'uso', meaning: '謊言' },
      { word: '冗談', reading: 'じょうだん', romaji: 'jōdan', meaning: '開玩笑' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣' },
    ],
    quiz: [
      { question: '私が優勝する___、信じられない。(竟然)', options: ['なんて', 'ほど', 'くらい', 'しか'], answer: 0 },
      { question: 'お酒___、もう飲みたくない。(這種東西)', options: ['なんか', 'ばかり', 'だらけ', 'のみ'], answer: 0 },
      { question: '「冗談」的意思是？', options: ['認真', '開玩笑', '麻煩', '生氣'], answer: 1 },
      { question: 'あんなに優しい人が犯人だ___。(沒想到竟然)', options: ['とは', 'とは限らない', 'わけではない', 'に違いない'], answer: 0 },
      { question: '「優勝」的讀音是？', options: ['ゆうしょう', 'ゆうしょう', 'ゆしょう', 'ゆしょう'], answer: 0 },
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
          { jp: '體調が悪くても、働かざるを得ない。', romaji: 'Taichō ga warukute mo, hatarakazaru o enai.', zh: '即使身體不舒服，也不得不工作。' },
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
      { word: '結論', reading: 'けつろん', romaji: 'ketsuron', meaning: '結論' },
      { word: '根拠', reading: 'こんきょ', romaji: 'konkyo', meaning: '根據' },
      { word: '矛盾', reading: 'むじゅん', romaji: 'mujun', meaning: '矛盾' },
      { question: '體調が悪くても、___ざるを得ない。', options: ['休ま', '働か', '食べ', '寝'], answer: 1 },
      { word: '主張', reading: 'しゅちょう', romaji: 'shuchō', meaning: '主張' },
      { question: '「〜にほかならない」表示？', options: ['不得不', '正是', '不可能', '不一定'], answer: 1 },
      { word: '妥協', reading: 'だきょう', romaji: 'dakyō', meaning: '妥協' },
      { word: '論文', reading: 'ろんぶん', romaji: 'ronbun', meaning: '論文' },
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
      { word: '開店', reading: 'かいてん', romaji: 'kaiten', meaning: '開店' },
      { word: '至る', reading: 'いたる', romaji: 'itaru', meaning: '到達' },
      { word: '伴う', reading: 'ともなう', romaji: 'tomonau', meaning: '伴隨' },
      { word: '生じる', reading: 'しょうじる', romaji: 'shōjiru', meaning: '產生' },
      { question: '「〜をもって」常用於？', options: ['日常對話', '正式場合', '朋友之間', '家庭生活'], answer: 1 },
      { word: '及ぶ', reading: 'およぶ', romaji: 'oyobu', meaning: '達到/涉及' },
      { world: '開店', reading: 'かいてん', romaji: 'kaiten', meaning: '開店' },
      { question: '「〜に至るまで」表示？', options: ['範圍之小', '範圍之廣', '時間之短', '距離之近'], answer: 1 },
    ]
  },
]
