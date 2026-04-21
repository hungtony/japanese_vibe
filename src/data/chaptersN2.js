// N2 章節資料 - 中上級 (25章)
export const chaptersN2 = [
  // ---- 第 94 關：隆重的時刻 (〜に際して / 〜にあたって) ----
  {
    id: 'n2_ch94',
    level: 'N2',
    title: '隆重的時刻 (〜に際して / 〜にあたって)',
    grammar: [
      {
        pattern: '名詞 / 動詞辭書形 ＋ に際(さい)して / に際し',
        explanation: '在...之際、當...的時候。用於某個重要或隆重的時刻、動作開始之前。比「〜の時に」更正式。',
        examples: [
          { jp: '帰国{きこく}に際{さい}して、お世話{せわ}になった方々{かたがた}に挨拶{あいさつ}をした。', romaji: 'Kikoku ni saishite, osewa ni natta katagata ni aisatsu o shita.', zh: '在回國之際，向照顧過我的人們打了招呼。' }
        ]
      },
      {
        pattern: '名詞 / 動詞辭書形 ＋ にあたって / にあたり',
        explanation: '在...之際、當...的時候。與「に際して」類似，但更強調積極、重要的準備階段，不可用於負面事件。',
        examples: [
          { jp: '新{あたら}しい事業{じぎょう}を始{はじ}めるにあたって、綿密{めんみつ}な計画{けいかく}を立{た}てた。', romaji: 'Atarashii jigyō o hajimeru ni atatte, menmitsu na keikaku o tateta.', zh: '在開始新事業之際，制定了縝密的計畫。' }
        ]
      }
    ],
    vocabulary: [
      { word: '帰国', reading: 'きこく', romaji: 'kikoku', meaning: '回國' },
      { word: '世話', reading: 'せわ', romaji: 'sewa', meaning: '照顧' },
      { word: '挨拶', reading: 'あいさつ', romaji: 'aisatsu', meaning: '打招呼/致詞' },
      { word: '事業', reading: 'じぎょう', romaji: 'jigyō', meaning: '事業' },
      { word: '綿密', reading: 'めんみつ', romaji: 'menmitsu', meaning: '縝密的 (な形容詞)' },
      { word: '計画', reading: 'けいかく', romaji: 'keikaku', meaning: '計畫' },
      { word: '出発', reading: 'しゅっぱつ', romaji: 'shuppatsu', meaning: '出發' },
      { word: '開会', reading: 'かいかい', romaji: 'kaikai', meaning: '開會/開幕' },
      { word: '決意', reading: 'けつい', romaji: 'ketsui', meaning: '決心' },
      { word: '述べる', reading: 'のべる', romaji: 'noberu', meaning: '敘述/表達 (II類動詞)' }
    ],
    quiz: [
      { question: '大会の開会___、主催者が挨拶を述べた。(在...之際)', options: ['に際して', 'にしたがって', 'にとっても', 'につれて'], answer: 0 },
      { question: '「事業」的讀音是？', options: ['じぎょう', 'じきょう', 'ちぎょう', 'じごう'], answer: 0 },
      { question: '留学___、いろいろな準備をしなければならない。(在出發留學之前)', options: ['にあたって', 'として', 'ばかりに', 'について'], answer: 0 },
      { question: '「挨拶」的意思是？', options: ['道別', '感謝', '打招呼/致詞', '道歉'], answer: 2 },
      { question: '新生活を始める___、決意を述べました。', options: ['にあたって', 'に対して', 'によって', 'にくらべて'], answer: 0 }
    ]
  },

  // ---- 第 95 關：快到措手不及 (〜かと思うと / 〜か〜ないかのうちに) ----
  {
    id: 'n2_ch95',
    level: 'N2',
    title: '快到措手不及 (〜かと思うと / 〜かのうちに)',
    grammar: [
      {
        pattern: '動詞た形 ＋ かと思(おも)うと / かと思ったら',
        explanation: '剛...就...。表示前一個動作剛發生，後一個動作緊接著發生，且出乎說話者意料之外。不能用於說話者自身的行為。',
        examples: [
          { jp: '空{そら}が暗{くら}くなったかと思{おも}うと、激{はげ}しい雨{あめ}が降{ふ}り出{だ}した。', romaji: 'Sora ga kuraku natta ka to omou to, hageshii ame ga furidashita.', zh: '天空剛變暗，就下起了大雨。' }
        ]
      },
      {
        pattern: '動詞辭書形/た形 ＋ か ＋ 動詞ない形 ＋ ないかのうちに',
        explanation: '剛...的時候就...。表示甚至不確定前一個動作是否完全結束，後一個動作就發生了。時間間隔極短。',
        examples: [
          { jp: '授業{じゅぎょう}が終{お}わるか終{お}わらないかのうちに、彼{かれ}は教室{きょうしつ}を飛{と}び出{だ}した。', romaji: 'Jugyō ga owaru ka owaranai ka no uchi ni, kare wa kyōshitsu o tobidashita.', zh: '下課鐘聲都還沒響完，他就衝出了教室。' }
        ]
      }
    ],
    vocabulary: [
      { word: '激しい', reading: 'はげしい', romaji: 'hageshii', meaning: '激烈的 (い形容詞)' },
      { word: '飛び出す', reading: 'とびだす', romaji: 'tobidasu', meaning: '衝出/飛出 (I類動詞)' },
      { word: '鳴る', reading: 'なる', romaji: 'naru', meaning: '鳴響 (I類動詞)' },
      { word: 'ベル', reading: 'べる', romaji: 'beru', meaning: '鈴聲' },
      { word: '途端', reading: 'とたん', romaji: 'totan', meaning: '剛...的時候' },
      { word: '慌てる', reading: 'あわてる', romaji: 'awateru', meaning: '慌張 (II類動詞)' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣 (I類動詞)' },
      { word: '笑う', reading: 'わらう', romaji: 'warau', meaning: '笑 (I類動詞)' },
      { word: '消える', reading: 'きえる', romaji: 'kieru', meaning: '消失 (II類動詞)' },
      { word: 'あっという間に', reading: 'あっというまに', romaji: 'attoiumani', meaning: '轉眼之間' }
    ],
    quiz: [
      { question: 'ベルが鳴るか鳴らない___、電車がドアを閉めた。', options: ['かのうちに', 'かと思うと', 'ばかりに', '次第'], answer: 0 },
      { question: '「激しい」的意思是？', options: ['悲傷的', '激烈的', '溫柔的', '安靜的'], answer: 1 },
      { question: '弟はさっきまで泣いていた___、今は笑っている。', options: ['かと思うと', 'かのうちに', 'にかけては', 'にしたがって'], answer: 0 },
      { question: '「慌てる」的讀音是？', options: ['あわてる', 'あてる', 'あつてる', 'おそれる'], answer: 0 },
      { question: '彼が来た___、あっという間に帰ってしまった。(剛來就轉眼間回去了)', options: ['かと思ったら', 'かのうちに', 'にかかわらず', 'からには'], answer: 0 }
    ]
  },

  // ---- 第 96 關：趁著與正當 (〜最中だ / 〜うちに) ----
  {
    id: 'n2_ch96',
    level: 'N2',
    title: '趁著與正當 (〜最中に / 〜うちに)',
    grammar: [
      {
        pattern: '動詞て形いる / 名詞の ＋ 最中(さいちゅう)に',
        explanation: '正在...的時候。強調動作正在進行的最高點，卻被意外的事情打斷。(N3已學，N2常出於比較)',
        examples: [
          { jp: 'スピーチの最中{さいちゅう}に、マイクが壊{こわ}れてしまった。', romaji: 'Supīchi no saichū ni, maiku ga kowarete shimatta.', zh: '演講到一半，麥克風壞了。' }
        ]
      },
      {
        pattern: '動/い形/な形(な) / 名詞(の) ＋ うちに',
        explanation: '趁著...的時候。表示如果不趁著狀態改變前去做，之後會很困難。',
        examples: [
          { jp: 'スープが温{あたた}かいうちに、飲{の}んでください。', romaji: 'Sūpu ga atatakai uchi ni, nonde kudasai.', zh: '請趁著湯還熱的時候喝。' }
        ]
      }
    ],
    vocabulary: [
      { word: '最中', reading: 'さいちゅう', romaji: 'saichū', meaning: '正在...之中' },
      { word: '壊れる', reading: 'こわれる', romaji: 'kowareru', meaning: '壞掉 (II類動詞)' },
      { word: '温かい', reading: 'あたたかい', romaji: 'atatakai', meaning: '溫暖的/熱的 (い形容詞)' },
      { word: '冷める', reading: 'さめる', romaji: 'sameru', meaning: '冷卻 (II類動詞)' },
      { word: '若い', reading: 'わかい', romaji: 'wakai', meaning: '年輕的 (い形容詞)' },
      { word: '暗い', reading: 'くらい', romaji: 'kurai', meaning: '暗的 (い形容詞)' },
      { word: '明ける', reading: 'あける', romaji: 'akeru', meaning: '天明/結束 (II類動詞)' },
      { word: '経験', reading: 'けいけん', romaji: 'keiken', meaning: '經驗' },
      { word: '体力', reading: 'たいりょく', romaji: 'tairyoku', meaning: '體力' },
      { word: '独身', reading: 'どくしん', romaji: 'dokushin', meaning: '單身' }
    ],
    quiz: [
      { question: '若くて体力がある___、色々な経験をした方がいい。(趁著)', options: ['うちに', '最中に', 'かと思うと', 'ばかりに'], answer: 0 },
      { question: '会議の___、急に停電になった。(正當...時)', options: ['最中に', 'うちに', '際して', 'にあたって'], answer: 0 },
      { question: '「独身」的讀音是？', options: ['どくしん', 'とくしん', 'どくじん', 'とくじん'], answer: 0 },
      { question: '「冷める」的意思是？', options: ['加熱', '變熱', '變冷/冷卻', '結冰'], answer: 2 },
      { question: '忘れない___、メモをしておこう。(趁著還沒忘記)', options: ['うちに', '最中に', '際して', 'にあたって'], answer: 0 }
    ]
  },

  // ---- 第 97 關：動作的先後與持續 (〜て以来 / 〜次第) ----
  {
    id: 'n2_ch97',
    level: 'N2',
    title: '動作的先後與持續 (〜て以来 / 〜次第)',
    grammar: [
      {
        pattern: '動詞て形 ＋ 以来(いらい)',
        explanation: '自從...以來。表示自從發生了某事後，某種狀態一直持續至今。後面通常接表示狀態持續的句子。',
        examples: [
          { jp: '日本{にほん}に来{き}て以来{いらい}、毎日{まいにち}納豆{なっとう}を食{た}べている。', romaji: 'Nihon ni kite irai, mainichi nattō o tabete iru.', zh: '自從來到日本以來，我每天都吃納豆。' }
        ]
      },
      {
        pattern: '動詞ます形去ます / 名詞 ＋ 次第(しだい)',
        explanation: '一...就立即...。表示前項動作一完成，立刻順理成章地進行後項動作。多用於商業場合的預定或通知。',
        examples: [
          { jp: 'スケジュールが決{き}まり次第{しだい}、ご連絡{れんらく}します。', romaji: 'Sukejūru ga kimari shidai, gorenraku shimasu.', zh: '行程一決定，就立刻與您聯絡。' }
        ]
      }
    ],
    vocabulary: [
      { word: '以来', reading: 'いらい', romaji: 'irai', meaning: '自從...以來' },
      { word: '納豆', reading: 'なっとう', romaji: 'nattō', meaning: '納豆' },
      { word: '次第', reading: 'しだい', romaji: 'shidai', meaning: '一...立刻' },
      { word: 'スケジュール', reading: 'すけじゅーる', romaji: 'sukejūru', meaning: '行程' },
      { word: '連絡', reading: 'れんらく', romaji: 'renraku', meaning: '聯絡' },
      { word: '到着', reading: 'とうちゃく', romaji: 'tōchaku', meaning: '抵達' },
      { word: '報告', reading: 'ほうこく', romaji: 'hōkoku', meaning: '報告' },
      { word: '解決', reading: 'かいけつ', romaji: 'kaiketsu', meaning: '解決' },
      { word: '卒業', reading: 'そつぎょう', romaji: 'sotsugyō', meaning: '畢業' },
      { word: 'ずっと', reading: 'ずっと', romaji: 'zutto', meaning: '一直' }
    ],
    quiz: [
      { question: '空港に到着___、すぐにお電話します。(一抵達就)', options: ['次第', '以来', 'うちに', '最中に'], answer: 0 },
      { question: '「解決」的讀音是？', options: ['かいけつ', 'かいきつ', 'がけつ', 'がいけつ'], answer: 0 },
      { question: '彼と知り合っ___、私の人生は明るくなった。(自從...以來)', options: ['て以来', '次第', 'にあたって', 'てからでないと'], answer: 0 },
      { question: '製品が完成し___、発送いたします。(一完成就)', options: ['次第', '以来', 'ばかりに', 'うちに'], answer: 0 },
      { question: '「到着」的意思是？', options: ['出發', '抵達', '搭乘', '離開'], answer: 1 }
    ]
  },

  // ---- 第 98 關：前提與代表 (〜てからでないと / 〜をはじめ) ----
  {
    id: 'n2_ch98',
    level: 'N2',
    title: '前提與代表 (〜てからでないと / 〜をはじめ)',
    grammar: [
      {
        pattern: '動詞て形 ＋ からでないと / からでなければ',
        explanation: '如果不先...的話(就不能...)。表示如果不先完成前項動作，後項的狀況就無法實現。後項常接否定或負面的詞。',
        examples: [
          { jp: '上司{じょうし}に相談{そうだん}してからでないと、決断{けつだん}できない。', romaji: 'Jōshi ni sōdan shite kara de nai to, ketsudan dekinai.', zh: '如果不先跟主管討論，就無法做決定。' }
        ]
      },
      {
        pattern: '名詞 ＋ をはじめ / をはじめとする',
        explanation: '以...為首、以及...。用來舉出最具代表性的例子，暗示除此之外還有很多。',
        examples: [
          { jp: '日本{にほん}には富士山{ふじさん}をはじめ、多{おお}くの美{うつく}しい山{やま}がある。', romaji: 'Nihon ni wa Fujisan o hajime, ōku no utsukushii yama ga aru.', zh: '日本有以富士山為首的許多美麗山岳。' }
        ]
      }
    ],
    vocabulary: [
      { word: '上司', reading: 'じょうし', romaji: 'jōshi', meaning: '主管/上司' },
      { word: '相談', reading: 'そうだん', romaji: 'sōdan', meaning: '商量/討論' },
      { word: '決断', reading: 'けつだん', romaji: 'ketsudan', meaning: '決定' },
      { word: '代表', reading: 'だいひょう', romaji: 'daihyō', meaning: '代表' },
      { word: '富士山', reading: 'ふじさん', romaji: 'fujisan', meaning: '富士山' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachō', meaning: '總經理' },
      { word: '手続き', reading: 'てつづき', romaji: 'tetsuzuki', meaning: '手續' },
      { word: '許可', reading: 'きょか', romaji: 'kyoka', meaning: '許可' },
      { word: '署名', reading: 'しょめい', romaji: 'shomei', meaning: '簽名' },
      { word: '実物', reading: 'じつぶつ', romaji: 'jitsubutsu', meaning: '實物' }
    ],
    quiz: [
      { question: '親の許可をもらっ___、この契約は結べない。(如果不先)', options: ['てからでないと', 'をはじめ', '次第', 'て以来'], answer: 0 },
      { question: '社長___、多くの社員がそのイベントに参加した。(以...為首)', options: ['をはじめ', 'てからでないと', 'にあたって', 'ばかりに'], answer: 0 },
      { question: '「決断」的意思是？', options: ['決心/決定', '商量', '猶豫', '放棄'], answer: 0 },
      { question: '実物を見___、買うかどうか決められません。(如果不先看實物)', options: ['てからでないと', 'をはじめ', 'るうちに', 'た次第で'], answer: 0 },
      { question: '「手続き」的讀音是？', options: ['てつづき', 'てつずき', 'てまき', 'てとき'], answer: 0 }
    ]
  },

  // ---- 第 99 關：都是因為... (〜ばかりに / 〜せいで) ----
  {
    id: 'n2_ch99',
    level: 'N2',
    title: '都是因為... (〜ばかりに / 〜せいで)',
    grammar: [
      {
        pattern: '普通形／名詞である／な形容詞な/である ＋ ばかりに',
        explanation: '就只是因為...。表示就因為某個小原因或單一原因，導致了非常不好的結果。充滿悔恨、遺憾的語氣。',
        examples: [
          { jp: 'お金{かね}がないばかりに、進学{しんがく}を諦{あきら}めた。', romaji: 'Okane ga nai bakari ni, shingaku o akirameta.', zh: '就只是因為沒錢，放棄了升學。' }
        ]
      },
      {
        pattern: '普通形 / 名詞の / な形容詞な ＋ せいで(總結複習)',
        explanation: '都怪...。表示導致不好結果的原因，帶有怪罪的語氣。(N3範圍但常與ばかりに比較)',
        examples: [
          { jp: 'バスが遅{おく}れたせいで、遅刻{ちこく}した。', romaji: 'Basu ga okureta sei de, chikoku shita.', zh: '都怪公車誤點，我遲到了。' }
        ]
      }
    ],
    vocabulary: [
      { word: '進学', reading: 'しんがく', romaji: 'shingaku', meaning: '升學' },
      { word: '諦める', reading: 'あきらめる', romaji: 'akirameru', meaning: '放棄 (II類動詞)' },
      { word: '嘘', reading: 'うそ', romaji: 'uso', meaning: '謊言' },
      { word: '信用', reading: 'しんよう', romaji: 'shinyō', meaning: '信用' },
      { word: '失う', reading: 'うしなう', romaji: 'ushinau', meaning: '失去 (I類動詞)' },
      { word: '確認', reading: 'かくにん', romaji: 'kakunin', meaning: '確認' },
      { word: '怠る', reading: 'おこたる', romaji: 'okotaru', meaning: '疏忽 (I類動詞)' },
      { word: '失敗', reading: 'しっぱい', romaji: 'shippai', meaning: '失敗' },
      { word: '言い訳', reading: 'いいわけ', romaji: 'iiwake', meaning: '藉口' },
      { word: '後悔', reading: 'こうかい', romaji: 'kōkai', meaning: '後悔' }
    ],
    quiz: [
      { question: '一度嘘をついた___、信用を失ってしまった。(就因為一次說謊)', options: ['ばかりに', '次第', 'をはじめ', 'うちに'], answer: 0 },
      { question: '「諦める」的意思是？', options: ['堅持', '放棄', '開始', '完成'], answer: 1 },
      { question: '確認を怠った___、大きなミスをしてしまった。(怪罪這件事)', options: ['せいで', '次第で', 'にあたって', 'に対して'], answer: 0 },
      { question: '「後悔」的讀音是？', options: ['こうかい', 'こかい', 'ごうがい', 'こうはい'], answer: 0 },
      { question: '本当のことを言わなかった___、皆に誤解された。(就只是因為沒說實話)', options: ['ばかりに', 'うちに', 'て以来', 'をはじめ'], answer: 0 }
    ]
  },

  // ---- 第 100 關：多虧了/正因為 (〜おかげで / 〜からこそ) ----
  {
    id: 'n2_ch100',
    level: 'N2',
    title: '多虧了/正因為 (〜おかげで / 〜からこそ)',
    grammar: [
      {
        pattern: '普通形 / 名詞の / な形容詞な ＋ おかげで',
        explanation: '多虧了...。表示導致好結果的原因，帶有感謝的語氣。有時會反串用作嘲諷(拜你所賜)。(複習與強調)',
        examples: [
          { jp: '先生{せんせい}のおかげで、合格{ごうかく}できました。', romaji: 'Sensei no okage de, gōkaku dekimashita.', zh: '多虧了老師才考上。' }
        ]
      },
      {
        pattern: '普通形 ＋ からこそ',
        explanation: '正因為...。強調就是這個原因，而非其他別的原因。(から表示原因，こそ表示強調)',
        examples: [
          { jp: 'あなたのことを思{おも}っているからこそ、厳{きび}しく言{い}うのです。', romaji: 'Anata no koto o omotte iru kara koso, kibishiku iu no desu.', zh: '正因為為你著想，才會說得這麼嚴格。' }
        ]
      }
    ],
    vocabulary: [
      { word: '合格', reading: 'ごうかく', romaji: 'gōkaku', meaning: '及格/考上' },
      { word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: '嚴格的 (い形容詞)' },
      { word: '応援', reading: 'おうえん', romaji: 'ōen', meaning: '加油/支持' },
      { word: '愛情', reading: 'あいじょう', romaji: 'aijō', meaning: '愛情/關愛' },
      { word: '努力', reading: 'どりょく', romaji: 'doryoku', meaning: '努力' },
      { word: '成功', reading: 'せいこう', romaji: 'seikō', meaning: '成功' },
      { word: '感謝', reading: 'かんしゃ', romaji: 'kansha', meaning: '感謝' },
      { word: '指摘', reading: 'してき', romaji: 'shiteki', meaning: '指正' },
      { word: '注意', reading: 'ちゅうい', romaji: 'chūi', meaning: '注意/告誡' },
      { word: '親友', reading: 'しんゆう', romaji: 'shinyū', meaning: '摯友' }
    ],
    quiz: [
      { question: '皆さんが応援してくれた___、私達は勝てました。(多虧)', options: ['おかげで', 'からこそ', 'せいで', 'ばかりに'], answer: 0 },
      { question: '「厳しい」的意思是？', options: ['溫柔的', '嚴格的', '寂寞的', '開心的'], answer: 1 },
      { question: '親友だ___、こんなに厳しい指摘をするのだ。(正因為)', options: ['からこそ', 'おかげで', 'にあたって', 'てからでないと'], answer: 0 },
      { question: '努力した___、今の私がある。(正因為)', options: ['からこそ', 'ばかりに', 'せいで', 'うちに'], answer: 0 },
      { question: '「親友」的讀音是？', options: ['しんゆう', 'ともだち', 'なかま', 'しんよう'], answer: 0 }
    ]
  },

  // ---- 第 101 關：基於某種立場或角度 (〜からいうと / 〜から見ると) ----
  {
    id: 'n2_ch101',
    level: 'N2',
    title: '基於某種立場或角度 (〜からいうと / 〜から見ると)',
    grammar: [
      {
        pattern: '名詞 ＋ から言(い)うと / から言えば / から言って',
        explanation: '從...來説、就...而言。從某個觀點、角度或情況來判斷。不能直接接表示「人」的名詞。',
        examples: [
          { jp: '能力{のうりょく}から言{い}って、彼{かれ}がリーダーにふさわしい。', romaji: 'Nōryoku kara itte, kare ga rīdā ni fusawashii.', zh: '從能力來說，他最適合當隊長。' }
        ]
      },
      {
        pattern: '名詞 ＋ から見(み)ると / から見れば / から見て',
        explanation: '從...的立場來看。通常接表示人物或立場的名詞，表示以那個人的視角來看。',
        examples: [
          { jp: '親{おや}から見{み}れば、いつまでも子供{こども}は心配{しんぱい}なものだ。', romaji: 'Oya kara mireba, itsumademo kodomo wa shinpai na mono da.', zh: '在父母看來，孩子無論到多大都令人擔心。' }
        ]
      }
    ],
    vocabulary: [
      { word: '能力', reading: 'のうりょく', romaji: 'nōryoku', meaning: '能力' },
      { word: 'リーダー', reading: 'りーだー', romaji: 'rīdā', meaning: '隊長/領導者' },
      { word: 'ふさわしい', reading: 'ふさわしい', romaji: 'fusawashii', meaning: '適合的 (い形容詞)' },
      { word: '心配', reading: 'しんぱい', romaji: 'shinpai', meaning: '擔心' },
      { word: '現状', reading: 'げんじょう', romaji: 'genjō', meaning: '現狀' },
      { word: '専門家', reading: 'せんもんか', romaji: 'senmonka', meaning: '專家' },
      { word: '危険', reading: 'きけん', romaji: 'kiken', meaning: '危險' },
      { word: '消費', reading: 'しょうひ', romaji: 'shōhi', meaning: '消費' },
      { word: '価格', reading: 'かかく', romaji: 'kakaku', meaning: '價格' },
      { word: '基準', reading: 'きじゅん', romaji: 'kijun', meaning: '基準' }
    ],
    quiz: [
      { question: '専門家___、あの橋はそろそろ危険らしい。(從專家的立場來看)', options: ['から見ると', 'からいうと', 'からこそ', 'にあたって'], answer: 0 },
      { question: '成績___、彼が合格する可能性は高い。(從成績這個角度來說)', options: ['から言って', 'から見れば', 'ばかりに', 'うちに'], answer: 0 },
      { question: '「ふさわしい」的意思是？', options: ['不可能的', '適合的', '奇怪的', '可惜的'], answer: 1 },
      { question: '消費者___、価格は安ければ安いほど良い。(從消費者的立場)', options: ['から見れば', 'からいうと', 'ばかりに', 'おかげで'], answer: 0 },
      { question: '「専門家」的讀音是？', options: ['せんもんか', 'せんもんしゃ', 'ぜんもんか', 'せんもんが'], answer: 0 }
    ]
  },

  // ---- 第 102 關：以此為契機/基礎 (〜をきっかけに / 〜をもとに) ----
  {
    id: 'n2_ch102',
    level: 'N2',
    title: '以此為契機/基礎 (〜をきっかけに / 〜をもとに)',
    grammar: [
      {
        pattern: '名詞 ＋ をきっかけに(して) / を契機(けいき)として',
        explanation: '以...為契機。表示以某件事情為開端、轉機，產生了重大的變化或展開。',
        examples: [
          { jp: '病気{びょうき}をきっかけに、酒{さけ}をやめた。', romaji: 'Byōki o kikkake ni, sake o yameta.', zh: '以生病為契機，我戒酒了。' }
        ]
      },
      {
        pattern: '名詞 ＋ をもとに(して)',
        explanation: '以...為基礎、素材。表示以某事物為基礎來創作、設計或判斷。後項常有製作、寫作等行為。',
        examples: [
          { jp: 'この映画{えいが}は実話{じつわ}をもとにして作{つく}られた。', romaji: 'Kono eiga wa jitsuwa o moto ni shite tsukurareta.', zh: '這部電影是以真實故事為原型製作的。' }
        ]
      }
    ],
    vocabulary: [
      { word: '契機', reading: 'けいき', romaji: 'keiki', meaning: '契機' },
      { word: '実話', reading: 'じつわ', romaji: 'jitsuwa', meaning: '真實故事' },
      { word: '映画', reading: 'えいが', romaji: 'eiga', meaning: '電影' },
      { word: '素材', reading: 'そざい', romaji: 'sozai', meaning: '素材' },
      { word: '小説', reading: 'しょうせつ', romaji: 'shōsetsu', meaning: '小說' },
      { word: 'データ', reading: 'でーた', romaji: 'dēta', meaning: '數據資料' },
      { word: '分析', reading: 'ぶんせき', romaji: 'bunseki', meaning: '分析' },
      { word: '出会い', reading: 'であい', romaji: 'deai', meaning: '相遇' },
      { word: '転職', reading: 'てんしょく', romaji: 'tenshoku', meaning: '轉職' },
      { word: '判断', reading: 'はんだん', romaji: 'handan', meaning: '判斷' }
    ],
    quiz: [
      { question: 'アンケートのデータ___、結果を分析した。(以...為基礎)', options: ['をもとに', 'をきっかけに', 'からいうと', 'から見ると'], answer: 0 },
      { question: '大学での出会い___、彼らは結婚した。(以...為契機)', options: ['をきっかけに', 'をもとに', 'ばかりに', 'うちに'], answer: 0 },
      { question: '「実話」的意思是？', options: ['謊言', '真實故事', '童話', '傳說'], answer: 1 },
      { question: '今回の事故___、安全対策が強化された。(以...為契機)', options: ['を契機に', 'をもとに', 'にあたって', 'に際して'], answer: 0 },
      { question: '「転職」的讀音是？', options: ['てんしょく', 'てんきん', 'たいしょく', 'てんしゅう'], answer: 0 }
    ]
  },

  // ---- 第 103 關：伴隨變化 (〜に伴って / 〜につれて) ----
  {
    id: 'n2_ch103',
    level: 'N2',
    title: '伴隨變化 (〜に伴って / 〜につれて)',
    grammar: [
      {
        pattern: '動詞辭書形 / 名詞 ＋ に伴(ともな)って / に伴い',
        explanation: '隨著...、伴隨著...。表示A的事態發生時，B的事態也同時發生。前後不一定是正比例變化。偏正式的書面語。',
        examples: [
          { jp: '人口{じんこう}の減少{げんしょう}に伴{ともな}って、空{あ}き家{や}が増{ふ}えている。', romaji: 'Jinkō no genshō ni tomonatte, akiya ga fuete iru.', zh: '伴隨人口的減少，空屋正在增加。' }
        ]
      },
      {
        pattern: '動詞辭書形 / 名詞 ＋ に連(つ)れて',
        explanation: '隨著...。表示A變化，B也跟著隨之改變。強調單向的持續漸變過程，前後通常是「數量或程度增加/減少」的詞。',
        examples: [
          { jp: '高{たか}く登{のぼ}るにつれて、気温{きおん}が下{さ}がります。', romaji: 'Takaku noboru ni tsurete, kion ga sagarimasu.', zh: '隨著攀登得越來越高，氣溫也隨之下降。' }
        ]
      }
    ],
    vocabulary: [
      { word: '人口', reading: 'じんこう', romaji: 'jinkō', meaning: '人口' },
      { word: '減少', reading: 'げんしょう', romaji: 'genshō', meaning: '減少' },
      { word: '空き家', reading: 'あきや', romaji: 'akiya', meaning: '空屋' },
      { word: '増える', reading: 'ふえる', romaji: 'fueru', meaning: '增加 (II類動詞)' },
      { word: '登る', reading: 'のぼる', romaji: 'noboru', meaning: '攀登 (I類動詞)' },
      { word: '気温', reading: 'きおん', romaji: 'kion', meaning: '氣溫' },
      { word: '下がる', reading: 'さがる', romaji: 'sagaru', meaning: '下降 (I類動詞)' },
      { word: '発展', reading: 'はってん', romaji: 'hatten', meaning: '發展' },
      { word: '慣れる', reading: 'なれる', romaji: 'nareru', meaning: '習慣 (II類動詞)' },
      { word: '経済', reading: 'けいざい', romaji: 'keizai', meaning: '經濟' }
    ],
    quiz: [
      { question: '経済の発展___、生活が豊かになった。(伴隨/書面)', options: ['に伴って', 'をもとに', 'をきっかけに', 'からいうと'], answer: 0 },
      { question: '年をとる___、記憶力が弱くなる。(隨著漸變)', options: ['につれて', 'をもとに', 'ばかりに', 'うちに'], answer: 0 },
      { question: '「減少」的讀音是？', options: ['げんしょう', 'げんそ', 'かんしょう', 'かんそ'], answer: 0 },
      { question: '「空き家」的意思是？', options: ['新家', '空屋', '豪宅', '旅館'], answer: 1 },
      { question: '時間が経つ___、悲しみが薄れていった。(漸漸薄弱)', options: ['につれて', 'に伴って', 'をもとにして', 'を契機に'], answer: 0 }
    ]
  },

  // ---- 第 104 關：即使/就算 (〜にしても / 〜にしろ) ----
  {
    id: 'n2_ch104',
    level: 'N2',
    title: '即使/就算 (〜にしても / 〜にしろ)',
    grammar: [
      {
        pattern: '普通形 / 名詞 ＋ にしても / にしろ / にせよ',
        explanation: '即使...也...、就算...也...。列舉極端的例子，表示不管在哪種情況下都如此。「にせよ/にしろ」還可用於並列「A也好B也好」。',
        examples: [
          { jp: 'いくら忙{いそが}しいにしても、連絡{れんらく}くらいはできるでしょう。', romaji: 'Ikura isogashii ni shite mo, renraku kurai wa dekiru deshō.', zh: '就算再怎麼忙，至少能聯絡一下吧。' },
          { jp: '来{く}るにしろ来{こ}ないにしろ、知{し}らせてください。', romaji: 'Kuru ni shiro konai ni shiro, shirasete kudasai.', zh: '來也好不來也好，請通知我一聲。' }
        ]
      }
    ],
    vocabulary: [
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的 (い形容詞)' },
      { word: '連絡', reading: 'れんらく', romaji: 'renraku', meaning: '聯絡' },
      { word: '知らせる', reading: 'しらせる', romaji: 'shiraseru', meaning: '通知 (II類動詞)' },
      { word: '意見', reading: 'いけん', romaji: 'iken', meaning: '意見' },
      { word: '賛成', reading: 'さんせい', romaji: 'sansei', meaning: '贊成' },
      { word: '反対', reading: 'はんたい', romaji: 'hantai', meaning: '反對' },
      { word: '冗談', reading: 'じょうだん', romaji: 'jōdan', meaning: '玩笑' },
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉 (I類動詞)' },
      { word: '事実', reading: 'じじつ', romaji: 'jijitsu', meaning: '事實' },
      { word: '諦める', reading: 'あきらめる', romaji: 'akirameru', meaning: '放棄 (II類動詞)' }
    ],
    quiz: [
      { question: '冗談だ___、言っていいことと悪いことがある。(就算是)', options: ['にしても', 'に伴って', 'につれて', 'をもとに'], answer: 0 },
      { question: '賛成する___反対する___、意見は言ってください。(無論A或B)', options: ['にしろ/にしろ', 'とか/とか', 'をもとに/をもとに', '次第/次第'], answer: 0 },
      { question: '「知らせる」的意思是？', options: ['通知', '知道', '忘記', '學習'], answer: 0 },
      { question: '失敗した___、次頑張ればいい。(即使)', options: ['にせよ', 'に伴って', 'にあたって', 'からいうと'], answer: 0 },
      { question: '「冗談」的讀音是？', options: ['じょうだん', 'じょだん', 'しょうたん', 'しょうだん'], answer: 0 }
    ]
  },

  // ---- 第 105 關：反對與對比 (〜反面 / 〜一方で) ----
  {
    id: 'n2_ch105',
    level: 'N2',
    title: '反對與對比 (〜反面 / 〜一方で)',
    grammar: [
      {
        pattern: '普通形 / 名詞である / な形な ＋ 反面(はんめん)',
        explanation: '相反的一面、另一方面。描述【同一個事物】不僅有一種性質，同時還具備另一個相反性質(多為正反對比)。',
        examples: [
          { jp: '都会{とかい}の生活{せいかつ}は便利{べんり}な反面{はんめん}、ストレスも多{おお}い。', romaji: 'Tokai no seikatsu wa benri na hanmen, sutoresu mo ōi.', zh: '都會生活雖然便利，但另一方面壓力也很大。' }
        ]
      },
      {
        pattern: '普通形 / 名詞である / な形である ＋ 一方(いっぽう)で',
        explanation: '一方面...同時另一方面也...。用於敘述兩種同時並存的事態(不一定是正反對比，也可以是並列的兩面)。',
        examples: [
          { jp: '彼女{かのじょ}は女優{じょゆう}として活躍{かつやく}する一方{いっぽう}で、ボランティア活動{かつどう}もしている。', romaji: 'Kanojo wa joyū to shite katsuyaku suru ippō de, borantia katsudō mo shite iru.', zh: '她一方面作為女演員活躍，另一方面也從事志工活動。' }
        ]
      }
    ],
    vocabulary: [
      { word: '反面', reading: 'はんめん', romaji: 'hanmen', meaning: '另一方面/反面' },
      { word: '都会', reading: 'とかい', romaji: 'tokai', meaning: '都會' },
      { word: 'ストレス', reading: 'すとれす', romaji: 'sutoresu', meaning: '壓力' },
      { word: '女優', reading: 'じょゆう', romaji: 'joyū', meaning: '女演員' },
      { word: '活躍', reading: 'かつやく', romaji: 'katsuyaku', meaning: '活躍' },
      { word: '活動', reading: 'かつどう', romaji: 'katsudō', meaning: '活動' },
      { word: '一人暮らし', reading: 'ひとりぐらし', romaji: 'hitorigurashi', meaning: '獨居' },
      { word: '自由', reading: 'じゆう', romaji: 'jiyū', meaning: '自由' },
      { word: '寂しい', reading: 'さびしい', romaji: 'sabishii', meaning: '寂寞的 (い形容詞)' },
      { word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: '嚴格的 (い形容詞)' }
    ],
    quiz: [
      { question: '一人暮らしは自由な___、少し寂しい時もある。(雖然自由，但在相反面)', options: ['反面', '次第', 'に伴って', 'をはじめ'], answer: 0 },
      { question: '「女優」的讀音是？', options: ['じょゆう', 'にょゆう', 'じょおう', 'にょおう'], answer: 0 },
      { question: '彼は経営者である___、作家でもある。(一方面...另一方面也是...)', options: ['一方で', '反面', 'にしても', 'をもとに'], answer: 0 },
      { question: '「活躍」的意思是？', options: ['躍起', '活躍', '活潑', '復活'], answer: 1 },
      { question: 'あの先生は厳しい___、とても学生思いだ。(嚴厲的同時/相反面)', options: ['反面', 'からいうと', 'に際して', 'ばかりに'], answer: 0 }
    ]
  },

  // ---- 第 106 關：既然...當然就... (〜以上 / 〜からには) ----
  {
    id: 'n2_ch106',
    level: 'N2',
    title: '既然...當然就... (〜以上 / 〜からには)',
    grammar: [
      {
        pattern: '普通形 / 名詞である ＋ 以上(いじょう)(は)',
        explanation: '既然...那就必須...。表示因為前面的事實已定，所以後面要採取理所當然的態度、決心。(與からには幾乎同義)',
        examples: [
          { jp: '約束{やくそく}した以上{いじょう}、守{まも}らなければならない。', romaji: 'Yakusoku shita ijō, mamoranakereba naranai.', zh: '既然約定好了，就必須遵守。' }
        ]
      },
      {
        pattern: '普通形 ＋ からには',
        explanation: '既然...就...。接續事實，後項表達強烈的決意、義務或勸誘。(也是N3範圍，N2常考)',
        examples: [
          { jp: '試合{しあい}に出{で}るからには、勝{か}ちたい。', romaji: 'Shiai ni deru kara ni wa, kachitai.', zh: '既然要上場比賽，當然會想贏。' }
        ]
      }
    ],
    vocabulary: [
      { word: '以上', reading: 'いじょう', romaji: 'ijō', meaning: '以上/既然' },
      { word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: '約定' },
      { word: '守る', reading: 'まもる', romaji: 'mamoru', meaning: '遵守/保護 (I類動詞)' },
      { word: '試合', reading: 'しあい', romaji: 'shiai', meaning: '比賽' },
      { word: '勝つ', reading: 'かつ', romaji: 'katsu', meaning: '贏 (I類動詞)' },
      { word: '引き受ける', reading: 'ひきうける', romaji: 'hikiukeru', meaning: '承擔/答應 (II類動詞)' },
      { word: '責任', reading: 'せきにん', romaji: 'sekinin', meaning: '責任' },
      { word: '留学', reading: 'りゅうがく', romaji: 'ryūgaku', meaning: '留學' },
      { word: 'マスターする', reading: 'ますたーする', romaji: 'masutā suru', meaning: '精通/掌握' },
      { word: '最後まで', reading: 'さいごまで', romaji: 'saigomade', meaning: '到最後' }
    ],
    quiz: [
      { question: '仕事をひきうけた___、最後まで責任を持ってやりたい。(既然)', options: ['以上', '一方', '反面', '次第'], answer: 0 },
      { question: 'やると決めた___、絶対に成功させよう。(既然)', options: ['からには', 'ばかりに', 'に伴って', 'にしては'], answer: 0 },
      { question: '「引き受ける」的意思是？', options: ['拒絕', '承擔/答應', '拉開', '引導'], answer: 1 },
      { question: '学生である___、勉強を第一に考えるべきだ。', options: ['以上', '一方', '最中', 'うち'], answer: 0 },
      { question: '「責任」的讀音是？', options: ['せきにん', 'せきめい', 'ぜきにん', 'ぜきめい'], answer: 0 }
    ]
  },

  // ---- 第 107 關：萬一/假設的話 (〜としたら / 〜とすれば) ----
  {
    id: 'n2_ch107',
    level: 'N2',
    title: '萬一/假設的話 (〜としたら / 〜とすれば)',
    grammar: [
      {
        pattern: '普通形 ＋ としたら / とすれば / とすると',
        explanation: '如果...的話、假設...的話。表示純粹的假設(現實尚未發生，或與現實相反)，然後推斷會產生什麼結果或提出疑問。',
        examples: [
          { jp: 'もし明日{あした}地球{ちきゅう}が滅亡{めつぼう}するとしたら、今日{きょう}何{なに}をしますか。', romaji: 'Moshi ashita chikyū ga metsubō suru to shitara, kyō nani o shimasu ka.', zh: '如果明天地球就要毀滅的話，你今天要做什麼？' }
        ]
      }
    ],
    vocabulary: [
      { word: '地球', reading: 'ちきゅう', romaji: 'chikyū', meaning: '地球' },
      { word: '滅亡', reading: 'めつぼう', romaji: 'metsubō', meaning: '滅亡' },
      { word: '無人島', reading: 'むじんとう', romaji: 'mujintō', meaning: '無人島' },
      { word: '持参', reading: 'じさん', romaji: 'jisan', meaning: '攜帶/帶來' },
      { word: '宝くじ', reading: 'たからくじ', romaji: 'takarakuji', meaning: '彩券/樂透' },
      { word: '当たる', reading: 'あたる', romaji: 'ataru', meaning: '中獎/命中 (I類動詞)' },
      { word: '車', reading: 'くるま', romaji: 'kuruma', meaning: '車子' },
      { word: '買う', reading: 'かう', romaji: 'kau', meaning: '買 (I類動詞)' },
      { word: '本当', reading: 'ほんとう', romaji: 'hontō', meaning: '真的 (な形容詞)' },
      { word: '許す', reading: 'ゆるす', romaji: 'yurusu', meaning: '原諒/允許 (I類動詞)' }
    ],
    quiz: [
      { question: '無人島に一つだけ物を持っていく___、何がいいですか。(假設)', options: ['としたら', '以上', 'ばかりに', 'からには'], answer: 0 },
      { question: '彼の話が本当だ___、これは大変なことです。(假設)', options: ['とすると', 'に伴って', 'につれて', 'をはじめ'], answer: 0 },
      { question: '「宝くじ」的意思是？', options: ['紙張', '彩券/樂透', '垃圾', '寶藏'], answer: 1 },
      { question: '宝くじが当たった___、家を買いたいです。(假設)', options: ['とすれば', '以上', '次第', '以来'], answer: 0 },
      { question: '「滅亡」的讀音是？', options: ['めつぼう', 'めっぽう', 'べつぼう', 'めつもう'], answer: 0 }
    ]
  },

  // ---- 第 108 關：無論如何都不影響 (〜を問わず / 〜にかかわらず) ----
  {
    id: 'n2_ch108',
    level: 'N2',
    title: '無論如何都不影響 (〜を問わず / 〜にかかわらず)',
    grammar: [
      {
        pattern: '名詞 ＋ を問(と)わず',
        explanation: '不論...。表示前項條件不構成限制，都可以一視同仁。常接包含對立概念的詞(如男女、晝夜、內外、國籍等)。',
        examples: [
          { jp: 'このマラソン大会{たいかい}は年齢{ねんれい}や性別{せいべつ}を問{と}わず、誰{だれ}でも参加{さんか}できます。', romaji: 'Kono marason taikai wa nenrei ya seibetsu o towazu, dare demo sanka dekimasu.', zh: '這場馬拉松比賽不論年齡與性別，誰都可以參加。' }
        ]
      },
      {
        pattern: '名詞 / 動詞辭書形/ない形 ＋ にかかわらず / にかかわりなく',
        explanation: '不管...。表示前項的狀況或程度完全不影響後項。常接帶有變化的詞(如天氣、結果、參加與否)。',
        examples: [
          { jp: '明日{あした}は雨{あめ}が降{ふ}る降{ふ}らないにかかわらず、試合{しあい}を行{おこな}います。', romaji: 'Ashita wa ame ga furu furanai ni kakawarazu, shiai o okonaimasu.', zh: '明天不管下不下雨，比賽都照常進行。' }
        ]
      }
    ],
    vocabulary: [
      { word: '年齢', reading: 'ねんれい', romaji: 'nenrei', meaning: '年齡' },
      { word: '性別', reading: 'せいべつ', romaji: 'seibetsu', meaning: '性別' },
      { word: '昼夜', reading: 'ちゅうや', romaji: 'chūya', meaning: '晝夜' },
      { word: '経験', reading: 'けいけん', romaji: 'keiken', meaning: '經驗' },
      { word: '有無', reading: 'うむ', romaji: 'umu', meaning: '有無' },
      { word: '天候', reading: 'てんこう', romaji: 'tenkō', meaning: '天氣狀況' },
      { word: '晴雨', reading: 'せいう', romaji: 'seiu', meaning: '晴雨' },
      { word: '参加', reading: 'さんか', romaji: 'sanka', meaning: '參加' },
      { word: '不参加', reading: 'ふさんか', romaji: 'fusanka', meaning: '不參加' },
      { word: '国籍', reading: 'こくせき', romaji: 'kokuseki', meaning: '國籍' }
    ],
    quiz: [
      { question: 'このアルバイトは経験の有無___、応募できます。(不問)', options: ['を問わず', 'をはじめ', 'からいうと', '以上'], answer: 0 },
      { question: '「有無」的讀音是？', options: ['うむ', 'ゆうむ', 'あります', 'ありなし'], answer: 0 },
      { question: '結果がいい悪い___、努力したことが大事だ。(不管)', options: ['にかかわらず', 'を問わず', 'としたら', '以上'], answer: 0 },
      { question: '営業時間は昼夜___、24時間営業です。(不論)', options: ['を問わず', 'にかけて', 'にあたって', 'から見ると'], answer: 0 },
      { question: '「昼夜」的意思是？', options: ['午餐', '晝夜', '夏天', '半夜'], answer: 1 }
    ]
  },

  // ---- 第 109 關：只有/不僅 (〜に限って / 〜のみならず) ----
  {
    id: 'n2_ch109',
    level: 'N2',
    title: '只有/不僅 (〜に限って / 〜のみならず)',
    grammar: [
      {
        pattern: '名詞 ＋ に限(かぎ)って',
        explanation: '偏偏在...的時候 / 唯獨對...而言。表示只有在那種情況下發生了不好的事(偏偏)；或是表示深信唯獨某對象絕對不會做壞事。',
        examples: [
          { jp: '傘{かさ}を持{も}っていない日{ひ}に限{かぎ}って、雨{あめ}が降{ふ}る。', romaji: 'Kasa o motte inai hi ni kagitte, ame ga furu.', zh: '偏偏在沒帶傘的日子下雨。' },
          { jp: '彼{かれ}に限{かぎ}って、そんなひどいことをするはずがない。', romaji: 'Kare ni kagitte, sonna hidoi koto o suru hazu ga nai.', zh: '唯獨他，絕對不可能做那麼過分的事。' }
        ]
      },
      {
        pattern: '名詞 / 普通形 ＋ のみならず',
        explanation: '不僅...而且...。同「だけでなく」，但是是較生硬的書面語。後接「も」等並列詞。',
        examples: [
          { jp: 'この問題{もんだい}は日本{にほん}のみならず、世界中{せかいじゅう}の問題{もんだい}だ。', romaji: 'Kono mondai wa nihon nomi narazu, sekaijū no mondai da.', zh: '這個問題不僅是日本，也是全世界的問題。' }
        ]
      }
    ],
    vocabulary: [
      { word: '限る', reading: 'かぎる', romaji: 'kagiru', meaning: '限制/限於 (I類動詞)' },
      { word: '傘', reading: 'かさ', romaji: 'kasa', meaning: '傘' },
      { word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: '急忙/趕時間 (I類動詞)' },
      { word: '遅延', reading: 'ちえん', romaji: 'chien', meaning: '延遲' },
      { word: '息子', reading: 'むすこ', romaji: 'musuko', meaning: '兒子' },
      { word: '世界中', reading: 'せかいじゅう', romaji: 'sekaijū', meaning: '全世界' },
      { word: '影響', reading: 'えいきょう', romaji: 'eikyō', meaning: '影響' },
      { word: '増加', reading: 'ぞうか', romaji: 'zōka', meaning: '增加' },
      { word: '女性', reading: 'じょせい', romaji: 'josei', meaning: '女性' },
      { word: '男性', reading: 'だんせい', romaji: 'dansei', meaning: '男性' }
    ],
    quiz: [
      { question: '急いでいる時___、電車が遅れる。(偏偏只有在)', options: ['に限って', 'のみならず', 'を問わず', 'にかかわらず'], answer: 0 },
      { question: '彼女は英語___、フランス語も話せる。(不僅)', options: ['のみならず', 'に限って', 'にかかわらず', 'にもかかわらず'], answer: 0 },
      { question: '「急ぐ」的意思是？', options: ['生氣', '急忙/趕時間', '突然', '大叫'], answer: 1 },
      { question: 'うちの息子___、万引きなんて絶対しません。(唯獨對...深信)', options: ['に限って', 'のみならず', 'として', 'からいうと'], answer: 0 },
      { question: '「遅延」的讀音是？', options: ['ちえん', 'おくえん', 'おくのび', 'ちのび'], answer: 0 }
    ]
  },

  // ---- 第 110 關：豈止/更別說 (〜ばかりか / 〜はおろか) ----
  {
    id: 'n2_ch110',
    level: 'N2',
    title: '豈止/更別說 (〜ばかりか / 〜はおろか)',
    grammar: [
      {
        pattern: '普通形 / 名詞 / な形な ＋ ばかりか / ばかりでなく',
        explanation: '不僅...而且還...。強調前項已經夠令人驚訝了，後項還有更進一步的情況。',
        examples: [
          { jp: '彼{かれ}は漢字{かんじ}が読{よ}めないばかりか、ひらがなも書{か}けない。', romaji: 'Kare wa kanji ga yomenai bakari ka, hiragana mo kakenai.', zh: '他豈止是不會讀漢字，連平假名都不會寫。' }
        ]
      },
      {
        pattern: '名詞 ＋ はおろか',
        explanation: '不用說...就連...。表示前項是理所當然的(程度較高)，連程度較低的後項都做不到。後項常接「も、さえ、まで」，常用於負面。',
        examples: [
          { jp: '喉{のど}が痛{いた}くて、食{た}べ物{もの}はおろか水{みず}も飲{の}めない。', romaji: 'Nodo ga itakute, tabemono wa oroka mizu mo nomenai.', zh: '喉嚨痛得要命，食物不用說了，(連)水也喝不下。' }
        ]
      }
    ],
    vocabulary: [
      { word: '喉', reading: 'のど', romaji: 'nodo', meaning: '喉嚨' },
      { word: '漢字', reading: 'かんじ', romaji: 'kanji', meaning: '漢字' },
      { word: '敬語', reading: 'けいご', romaji: 'keigo', meaning: '敬語' },
      { word: '挨拶', reading: 'あいさつ', romaji: 'aisatsu', meaning: '打招呼' },
      { word: 'ひどい', reading: 'ひどい', romaji: 'hidoi', meaning: '嚴重的/過分的 (い形容詞)' },
      { word: '怪我', reading: 'けが', romaji: 'kega', meaning: '受傷' },
      { word: '歩く', reading: 'あるく', romaji: 'aruku', meaning: '走路 (I類動詞)' },
      { word: '立つ', reading: 'たつ', romaji: 'tatsu', meaning: '站立 (I類動詞)' },
      { word: '高級', reading: 'こうきゅう', romaji: 'kōkyū', meaning: '高級的 (な形容詞)' },
      { word: 'レストラン', reading: 'れすとらん', romaji: 'resutoran', meaning: '餐廳' }
    ],
    quiz: [
      { question: '風邪で熱がある___、咳も止まらない。(不僅...)', options: ['ばかりか', 'はおろか', 'に限って', 'のみならず'], answer: 0 },
      { question: '「怪我」的意思是？', options: ['生病', '奇怪', '受傷', '怪物'], answer: 2 },
      { question: '足に大怪我をして、走るの___歩くこともできない。(不用說...連...)', options: ['はおろか', 'ばかりか', 'に限って', 'のみ'], answer: 0 },
      { question: '彼は敬語___、普通の挨拶もできない。(不用說...連...)', options: ['はおろか', 'ばかりか', 'を問わず', 'にかかわらず'], answer: 0 },
      { question: '「挨拶」的讀音是？', options: ['あいさつ', 'あいさす', 'えいさつ', 'えいさす'], answer: 0 }
    ]
  },

  // ---- 第 111 關：強烈的情感與生理反應 (〜てたまらない / 〜てしょうがない) ----
  {
    id: 'n2_ch111',
    level: 'N2',
    title: '強烈的情感與生理反應 (〜てたまらない)',
    grammar: [
      {
        pattern: '動詞て形 / い形くて / な形で ＋ たまらない',
        explanation: '...得不得了、...得受不了。表示某種感情、感覺或慾望極其強烈，強烈到無法忍受的地步。',
        examples: [
          { jp: '暑{あつ}くてたまらない。', romaji: 'Atsukute tamaranai.', zh: '熱得受不了。' },
          { jp: '家族{かぞく}に会{あ}いたくてたまらない。', romaji: 'Kazoku ni aitakute tamaranai.', zh: '想見家人想得不得了。' }
        ]
      },
      {
        pattern: '動詞て形 / い形くて / な形で ＋ しょうがない / しかたがない',
        explanation: '...得不得了、不由得...。意思與たまらない相近，但たまらない多偏向生理/肉體感覺，しょうがない/しかたがない多偏向心理情緒(如擔心、無聊的程度)。',
        examples: [
          { jp: '結果{けっか}が気{き}になってしょうがない。', romaji: 'Kekka ga ki ni natte shō ga nai.', zh: '在意結果在意得不得了。' }
        ]
      }
    ],
    vocabulary: [
      { word: '暑い', reading: 'あつい', romaji: 'atsui', meaning: '熱的 (い形容詞)' },
      { word: '喉が渇く', reading: 'のどがかわく', romaji: 'nodo ga kawaku', meaning: '口渴 (I類動詞)' },
      { word: '気になる', reading: 'きになる', romaji: 'ki ni naru', meaning: '在意/擔心 (I類動詞)' },
      { word: 'かゆい', reading: 'かゆい', romaji: 'kayui', meaning: '癢的 (い形容詞)' },
      { word: '暇', reading: 'ひま', romaji: 'hima', meaning: '空閒的/無聊的 (な形容詞)' },
      { word: '心配', reading: 'しんぱい', romaji: 'shinpai', meaning: '擔心的 (な形容詞)' },
      { word: '恥ずかしい', reading: 'はずかしい', romaji: 'hazukashii', meaning: '羞恥的/不好意思的 (い形容詞)' },
      { word: '残念', reading: 'ざんねん', romaji: 'zannen', meaning: '遺憾的 (な形容詞)' },
      { word: '虫', reading: 'むし', romaji: 'mushi', meaning: '蟲' },
      { word: '刺される', reading: 'さされる', romaji: 'sasareru', meaning: '被刺/被咬 (II類動詞)' }
    ],
    quiz: [
      { question: '虫に刺されたところが痒く___。(癢得不得了)', options: ['てたまらない', 'て以来', 'てからでないと', 'ばかりか'], answer: 0 },
      { question: '明日の試験の結果が心配で___。(擔心得不得了)', options: ['しょうがない', 'はおろか', 'をはじめ', 'のもとで'], answer: 0 },
      { question: '「かゆい」的意思是？', options: ['痛的', '熱的', '癢的', '冷的'], answer: 2 },
      { question: '新しいスマホが欲しく___。(想要得受不了)', options: ['てたまらない', 'てしょうがない', 'の両方とも正解', '都不對'], answer: 2 },
      { question: '「恥ずかしい」的讀音是？', options: ['はずかしい', 'かなしい', 'うれしい', 'さびしい'], answer: 0 }
    ]
  },

  // ---- 第 112 關：忍不住/不得不 (〜ざるを得ない / 〜ずにはいられない) ----
  {
    id: 'n2_ch112',
    level: 'N2',
    title: '忍不住/不得不 (〜ざるを得ない)',
    grammar: [
      {
        pattern: '動詞ない形去ない ＋ ざるを得(え)ない',
        explanation: '不得不...。表示因為某種狀況或壓力，雖然心裡不想，但別無選擇只能這麼做。「する」改為「せざるを得ない」。',
        examples: [
          { jp: '熱{ねつ}が39度{ど}もあるので、仕事{しごと}を休{やす}まざるを得{え}ない。', romaji: 'Netsu ga sanjūkyū do mo aru node, shigoto o yasumazaru o enai.', zh: '發燒到39度，不得不請假了。' }
        ]
      },
      {
        pattern: '動詞ない形去ない ＋ ずにはいられない / ないではいられない',
        explanation: '忍不住...、無法不...。表示無法抑制內心的某種情感或衝動，自然而然就做了這個動作。「する」改為「せずにはいられない」。',
        examples: [
          { jp: 'この映画{えいが}の最後{さいご}のシーンは、泣{な}かずにはいられなかった。', romaji: 'Kono eiga no saigo no shīn wa, nakazu ni wa irarenakatta.', zh: '這部電影最後的一幕，讓人忍不住哭了出來。' }
        ]
      }
    ],
    vocabulary: [
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息/請假 (I類動詞)' },
      { word: '中止', reading: 'ちゅうし', romaji: 'chūshi', meaning: '中止' },
      { word: '泣く', reading: 'なく', romaji: 'naku', meaning: '哭泣 (I類動詞)' },
      { word: '笑う', reading: 'わらう', romaji: 'warau', meaning: '笑 (I類動詞)' },
      { word: '言う', reading: 'いう', romaji: 'iu', meaning: '說 (I類動詞)' },
      { word: '感動', reading: 'かんどう', romaji: 'kandō', meaning: '感動' },
      { word: '命令', reading: 'めいれい', romaji: 'meirei', meaning: '命令' },
      { word: '従う', reading: 'したがう', romaji: 'shitagau', meaning: '服從/遵從 (I類動詞)' },
      { word: '借金', reading: 'しゃっきん', romaji: 'shakkin', meaning: '借款/負債' },
      { word: '我慢', reading: 'がまん', romaji: 'gaman', meaning: '忍耐' }
    ],
    quiz: [
      { question: '社長の命令なので、従わ___。(不得不服從)', options: ['ざるを得ない', 'ずにはいられない', 'てはならない', 'ばかりか'], answer: 0 },
      { question: '「する」接「ざるを得ない」時，正確形是？', options: ['しざるを得ない', 'せざるを得ない', 'すざるを得ない', 'さざるを得ない'], answer: 1 },
      { question: '彼の冗談が面白くて、笑わ___。(忍不住笑)', options: ['ずにはいられない', 'ざるを得ない', 'てたまらない', 'はおろか'], answer: 0 },
      { question: '「借金」的意思是？', options: ['存款', '借款/負債', '利息', '金幣'], answer: 1 },
      { question: '台風が近づいているため、イベントを中止___。(不得不中止)', options: ['せざるを得ない', 'せずにはいられない', 'しざるを得ない', 'するしかない'], answer: 0 }
    ]
  },

  // ---- 第 113 關：絕對不可能/哪有空 (〜わけがない / 〜どころではない) ----
  {
    id: 'n2_ch113',
    level: 'N2',
    title: '絕對不可能/哪有空 (〜わけがない)',
    grammar: [
      {
        pattern: '普通形／名詞である／な形な ＋ わけがない / はずがない',
        explanation: '絕對不可能...、哪有可能...。基於某種理由進行強烈的否定，認為絕無此可能。(N3已學，N2常考比較)',
        examples: [
          { jp: '彼{かれ}がそんなひどいことを言{い}うわけがない。', romaji: 'Kare ga sonna hidoi koto o iu wake ga nai.', zh: '他絕不可能說那種過分的話。' }
        ]
      },
      {
        pattern: '動詞辭書形/ている / 名詞 ＋ どころではない',
        explanation: '哪有空...、根本不是...的時候。表示由於生病、太忙、金錢不足等強烈原因，現在的狀況完全不容許做某事。',
        examples: [
          { jp: '疲{つか}れていて、遊{あそ}びに行{い}くどころではない。', romaji: 'Tsukarete ite, asobi ni iku dokoro de wa nai.', zh: '累都累死了，哪有空去玩。' }
        ]
      }
    ],
    vocabulary: [
      { word: '貧乏', reading: 'びんぼう', romaji: 'binbō', meaning: '貧窮的 (な形容詞)' },
      { word: '冗談', reading: 'じょうだん', romaji: 'jōdan', meaning: '玩笑' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣 (I類動詞)' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的 (い形容詞)' },
      { word: '疲れる', reading: 'つかれる', romaji: 'tsukareru', meaning: '疲累 (II類動詞)' },
      { word: '旅行', reading: 'りょこう', romaji: 'ryokō', meaning: '旅行' },
      { word: '宿題', reading: 'しゅくだい', romaji: 'shukudai', meaning: '作業' },
      { word: '信じる', reading: 'しんじる', romaji: 'shinjiru', meaning: '相信 (II類動詞)' },
      { word: '金持ち', reading: 'かねもち', romaji: 'kanemochi', meaning: '有錢人' },
      { word: '家賃', reading: 'やちん', romaji: 'yachin', meaning: '房租' }
    ],
    quiz: [
      { question: '明日から試験だ。ゲームをしている___。(哪有空)', options: ['どころではない', 'わけがない', 'はずがない', 'に違いない'], answer: 0 },
      { question: '「貧乏」的意思是？', options: ['富裕的', '貧窮的', '健康的', '生病的'], answer: 1 },
      { question: '彼が犯人？そんな___。(哪有可能)', options: ['わけがない', 'どころではない', 'ばかりか', 'はおろか'], answer: 0 },
      { question: '家賃も払えないのに、旅行に行く___。(哪有餘裕/空)', options: ['どころではない', 'わけではない', 'とは限らない', 'にすぎない'], answer: 0 },
      { question: '「家賃」的讀音是？', options: ['やちん', 'いえちん', 'かちん', 'やまさ'], answer: 0 }
    ]
  },

  // ---- 第 114 關：最好不過/沒必要 (〜に越したことはない / 〜までもない) ----
  {
    id: 'n2_ch114',
    level: 'N2',
    title: '最好不過/沒必要 (〜に越したことはない)',
    grammar: [
      {
        pattern: '普通形 / 名詞(である) / な形(である) ＋ に越(こ)したことはない',
        explanation: '...是最好不過的了。表示從一般常識來看，這樣做或有這樣東西的話是更好的、最理想的。',
        examples: [
          { jp: 'お金{かね}は多{おお}いに越{こ}したことはない。', romaji: 'Okane wa ōi ni koshita koto wa nai.', zh: '錢自然是越多越好。' }
        ]
      },
      {
        pattern: '動詞辭書形 ＋ までもない / までもなく',
        explanation: '根本沒必要...。表示事情非常明顯或理所當然，甚至不需要刻意去做某動作(如不需要說、不需要去)。',
        examples: [
          { jp: '言{い}うまでもなく、彼{かれ}が一番{いちばん}優秀{ゆうしゅう}だ。', romaji: 'Iu made mo naku, kare ga ichiban yūshū da.', zh: '不用說也知道，他是最優秀的。' }
        ]
      }
    ],
    vocabulary: [
      { word: '越す', reading: 'こす', romaji: 'kosu', meaning: '越過/超過 (I類動詞)' },
      { word: '用心', reading: 'ようじん', romaji: 'yōjin', meaning: '小心/提防' },
      { word: '健康', reading: 'けんこう', romaji: 'kenkō', meaning: '健康的 (な形容詞)' },
      { word: '優秀', reading: 'ゆうしゅう', romaji: 'yūshū', meaning: '優秀的 (な形容詞)' },
      { word: '言う', reading: 'いう', romaji: 'iu', meaning: '說/講 (I類動詞)' },
      { word: '調べる', reading: 'しらべる', romaji: 'shiraberu', meaning: '調查/查閱 (II類動詞)' },
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜的 (い形容詞)' },
      { word: '早い', reading: 'はやい', romaji: 'hayai', meaning: '早的 (い形容詞)' },
      { word: '確認', reading: 'かくにん', romaji: 'kakunin', meaning: '確認' },
      { word: '安全', reading: 'あんぜん', romaji: 'anzen', meaning: '安全的 (な形容詞)' }
    ],
    quiz: [
      { question: '家賃は安ければ安いに___。(便宜是最好不過的)', options: ['越したことはない', 'までもない', 'ほかはない', 'すぎない'], answer: 0 },
      { question: 'そんなことは、わざわざ調べる___。(根本沒必要查)', options: ['までもない', 'に越したことはない', 'どころではない', 'ざるを得ない'], answer: 0 },
      { question: '「用心深いに越したことはない。」的意思是？', options: ['再小心也不為過(最好小心)', '不用太小心', '超過小心', '不需要小心'], answer: 0 },
      { question: '行く___く、結果はわかっている。(不用去也知道)', options: ['までもな', 'に越したことはな', 'どころではな', 'わけがな'], answer: 0 },
      { question: '「優秀」的讀音是？', options: ['ゆうしゅう', 'ゆうすう', 'ゆうしゅ', 'ゆうきゅう'], answer: 0 }
    ]
  },

  // ---- 第 115 關：社會常理/理所當然 (〜べきだ / 〜ものだ) ----
  {
    id: 'n2_ch115',
    level: 'N2',
    title: '社會常理/理所當然 (〜べきだ / 〜ものだ)',
    grammar: [
      {
        pattern: '動詞辭書形 ＋ べきだ / べきではない',
        explanation: '應該... / 不應該...。表示基於社會道德或常理，理當如此。語氣較強烈。(する可用「すべき」)(N3已學，N2常考時態與反義)',
        examples: [
          { jp: '約束{やくそく}したなら、守{まも}るべきだ。', romaji: 'Yakusoku shita nara, mamoru beki da.', zh: '既然約定了，就應該遵守。' }
        ]
      },
      {
        pattern: '動詞辭書/ない形 / い形い / な形な ＋ ものだ / ものではない',
        explanation: '本來就是...的 / 不該是...的。表示事物的一般性質、社會的普遍真理。與べきだ比起來，它不帶有強烈的指責意味，而是感嘆真理。',
        examples: [
          { jp: '子供{こども}は外{そと}で元気{げんき}に遊{あそ}ぶものだ。', romaji: 'Kodomo wa soto de genki ni asobu mono da.', zh: '小孩子本來就該在外面充滿活力地玩耍。' }
        ]
      }
    ],
    vocabulary: [
      { word: '社会', reading: 'しゃかい', romaji: 'shakai', meaning: '社會' },
      { word: '常識', reading: 'じょうしき', romaji: 'jōshiki', meaning: '常識' },
      { word: '守る', reading: 'まもる', romaji: 'mamoru', meaning: '遵守 (I類動詞)' },
      { word: '規則', reading: 'きそく', romaji: 'kisoku', meaning: '規則' },
      { word: '敬語', reading: 'けいご', romaji: 'keigo', meaning: '敬語' },
      { word: '尊敬', reading: 'そんけい', romaji: 'sonkei', meaning: '尊敬' },
      { word: '親', reading: 'おや', romaji: 'oya', meaning: '父母' },
      { word: '叱る', reading: 'しかる', romaji: 'shikaru', meaning: '責罵 (I類動詞)' },
      { word: '人間', reading: 'にんげん', romaji: 'ningen', meaning: '人類' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記 (II類動詞)' }
    ],
    quiz: [
      { question: '学生はもっと勉強する___。(應該要/倫理義務)', options: ['べきだ', 'はずがない', 'わけがない', 'どころではない'], answer: 0 },
      { question: '時間は誰にでも平等な___。(時間本來就是平等的/真理)', options: ['ものだ', 'べきだ', 'までもない', 'ほかはない'], answer: 0 },
      { question: '「する」接「べき」時，除了「するべき」還可以是？', options: ['すべき', 'しべき', 'せべき', 'さべき'], answer: 0 },
      { question: '「常識」的意思是？', options: ['奇怪的事', '常識', '法律', '規則'], answer: 1 },
      { question: '目上の人には敬語を使う___ではない。(這裡應該選肯定還是否定？「不應該不...？」不，題目錯了，要選什麼呢。)', options: ['もの', 'べき', 'べき/もの皆不對，應為肯定的べきだ', 'わけ'], answer: 2 }
    ]
  },

  // ---- 第 116 關：對某人而言/作為... (〜にとって / 〜として) ----
  {
    id: 'n2_ch116',
    level: 'N2',
    title: '對某人而言/作為... (〜にとって / 〜として)',
    grammar: [
      {
        pattern: '名詞 ＋ にとって',
        explanation: '對...而言。從某個特定的主體(人或事物)的角度來看，對他來說有某種影響或評價。後項多接「重要、困難、開心」等評價字眼。',
        examples: [
          { jp: '私{わたし}にとって、家族{かぞく}は一番{いちばん}大切{たいせつ}なものだ。', romaji: 'Watashi ni totte, kazoku wa ichiban taisetsu na mono da.', zh: '對我而言，家人是最重要的。' }
        ]
      },
      {
        pattern: '名詞 ＋ として',
        explanation: '作為...、以...的身分或資格。後接動作、狀態或評價。',
        examples: [
          { jp: '彼{かれ}は留学生{りゅうがくせい}として日本{にほん}に来{き}ました。', romaji: 'Kare wa ryūgakusei to shite nihon ni kimashita.', zh: '他作為留學生來到了日本。' }
        ]
      }
    ],
    vocabulary: [
      { word: '大切', reading: 'たいせつ', romaji: 'taisetsu', meaning: '重要的 (な形容詞)' },
      { word: '留学生', reading: 'りゅうがくせい', romaji: 'ryūgakusei', meaning: '留學生' },
      { word: '選手', reading: 'せんしゅ', romaji: 'senshu', meaning: '選手' },
      { word: '代表', reading: 'だいひょう', romaji: 'daihyō', meaning: '代表' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachō', meaning: '總經理' },
      { word: '外国', reading: 'がいこく', romaji: 'gaikoku', meaning: '外國' },
      { word: '価値', reading: 'かち', romaji: 'kachi', meaning: '價值' },
      { word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: '嚴格的 (い形容詞)' },
      { word: '必要', reading: 'ひつよう', romaji: 'hitsuyō', meaning: '必要的 (な形容詞)' },
      { word: '趣味', reading: 'しゅみ', romaji: 'shumi', meaning: '興趣' }
    ],
    quiz: [
      { question: '彼___、車はただの移動手段にすぎない。(對他而言)', options: ['にとって', 'として', 'に対して', 'について'], answer: 0 },
      { question: '「価値」的讀音是？', options: ['かち', 'かし', 'がち', 'かじ'], answer: 0 },
      { question: '日本の代表___オリンピックに出場した。(作為代表)', options: ['として', 'にとって', 'ばかりに', 'からいうと'], answer: 0 },
      { question: '「趣味」的意思是？', options: ['味道', '氣味', '興趣', '工作'], answer: 2 },
      { question: '趣味___テニスをやっています。(作為興趣)', options: ['として', 'にとって', 'をもとに', 'に際して'], answer: 0 }
    ]
  },

  // ---- 第 117 關：不過是/無非是 (〜にすぎない / 〜にほかならない) ----
  {
    id: 'n2_ch117',
    level: 'N2',
    title: '不過是/無非是 (〜にすぎない / 〜にほかならない)',
    grammar: [
      {
        pattern: '普通形／名詞 ＋ にすぎない',
        explanation: '只不過是...而已。帶有貶低或表示程度輕微的語氣，認為某事物沒什麼大不了或只是小部分。',
        examples: [
          { jp: '私{わたし}は自分{じぶん}の意見{いけん}を言{い}ったに過{す}ぎない。', romaji: 'Watashi wa jibun no iken o itta ni suginai.', zh: '我只不過是說了自己的意見而已。' }
        ]
      },
      {
        pattern: '名詞 ＋ にほかならない',
        explanation: '無非是...、正是...。強烈斷定原因、理由或事物的本質「不是別的，正是這個」。語氣較生硬。',
        examples: [
          { jp: '彼{かれ}の成功{せいこう}は、努力{どりょく}の結果{けっか}にほかならない。', romaji: 'Kare no seikō wa, doryoku no kekka ni hokanaranai.', zh: '他的成功，無非就是努力的結果。' }
        ]
      }
    ],
    vocabulary: [
      { word: '意見', reading: 'いけん', romaji: 'iken', meaning: '意見' },
      { word: '過ぎる', reading: 'すぎる', romaji: 'sugiru', meaning: '過分/經過 (II類動詞)' },
      { word: '努力', reading: 'どりょく', romaji: 'doryoku', meaning: '努力' },
      { word: '結果', reading: 'けっか', romaji: 'kekka', meaning: '結果' },
      { word: '愛', reading: 'あい', romaji: 'ai', meaning: '愛' },
      { word: '冗談', reading: 'じょうだん', romaji: 'jōdan', meaning: '玩笑' },
      { word: '偶然', reading: 'ぐうぜん', romaji: 'gūzen', meaning: '偶然/巧合' },
      { word: '一部', reading: 'いちぶ', romaji: 'ichibu', meaning: '一部份' },
      { word: '間違い', reading: 'まちがい', romaji: 'machigai', meaning: '錯誤' },
      { word: '感謝', reading: 'かんしゃ', romaji: 'kansha', meaning: '感謝' }
    ],
    quiz: [
      { question: '彼が怒ったのは、あなたへの愛情___。(正因為/無非是因為)', options: ['にほかならない', 'にすぎない', 'にちがいない', 'までもない'], answer: 0 },
      { question: 'これはほんの一部___。(不過是一部)', options: ['にすぎない', 'にほかならない', 'に違いない', 'としたら'], answer: 0 },
      { question: '「偶然」的意思是？', options: ['必然', '自然', '偶然/巧合', '偶爾'], answer: 2 },
      { question: 'ただの冗談___のに、彼は怒ってしまった。(只不過是玩笑)', options: ['にすぎない', 'にほかならない', 'ばかりに', 'のみならず'], answer: 0 },
      { question: '「努力」的讀音是？', options: ['どりょく', 'とっりょく', 'どうりょく', 'どろく'], answer: 0 }
    ]
  },

  // ---- 第 118 關：N2 級別商務敬語與謙讓語總合 ----
  {
    id: 'n2_ch118',
    level: 'N2',
    title: 'N2 級別商務敬語與謙讓語總合',
    grammar: [
      {
        pattern: 'お/ご～くださる',
        explanation: '表示尊敬的對方給予恩惠的行為。「您為我做...」。',
        examples: [
          { jp: 'わざわざお越{こ}しくださり、ありがとうございます。', romaji: 'Wazawaza okoshi kudasari, arigatō gozaimasu.', zh: '感謝您特地前來。' }
        ]
      },
      {
        pattern: 'お/ご～いただく',
        explanation: '表示謙讓的自己請求或接受對方的行為。「請您... / 承蒙您...」。',
        examples: [
          { jp: '少々{しょうしょう}お待{ま}ちいただけますか。', romaji: 'Shōshō omachi itadakemasu ka.', zh: '能請您稍等一下嗎？' },
          { jp: 'ご意見{いけん}をいただき、感謝{かんしゃ}いたします。', romaji: 'Goiken o itadaki, kansha itashimasu.', zh: '承蒙給予意見，非常感謝。' }
        ]
      },
      {
        pattern: 'させていただける / させていただけますか',
        explanation: '表示謙讓的自己向對方請求許可來做某事。「能允許我做...嗎？」。在商場上極常使用。',
        examples: [
          { jp: '自己紹介{じこしょうかい}をさせていただきます。', romaji: 'Jikoshōkai o sasete itadakimasu.', zh: '容我為各位做自我介紹。' }
        ]
      }
    ],
    vocabulary: [
      { word: 'お越し', reading: 'おこし', romaji: 'okoshi', meaning: '前來/光臨(尊敬語)' },
      { word: 'いただく', reading: 'いただく', romaji: 'itadaku', meaning: '得到/吃/喝(謙讓語) (I類動詞)' },
      { word: 'わざわざ', reading: 'わざわざ', romaji: 'wazawaza', meaning: '特地' },
      { word: '少々', reading: 'しょうしょう', romaji: 'shōshō', meaning: '稍等/稍微' },
      { word: '自己紹介', reading: 'じこしょうかい', romaji: 'jikoshōkai', meaning: '自我介紹' },
      { word: '感謝', reading: 'かんしゃ', romaji: 'kansha', meaning: '感謝' },
      { word: '案内', reading: 'あんない', romaji: 'annai', meaning: '嚮導/指引' },
      { word: '拝見する', reading: 'はいけんする', romaji: 'haiken suru', meaning: '看(謙讓語) (III類動詞)' },
      { word: '申し上げる', reading: 'もうしあげる', romaji: 'mōshiageru', meaning: '說/告訴(謙讓語) (II類動詞)' },
      { word: '承知する', reading: 'しょうちする', romaji: 'shōchi suru', meaning: '知道/了解(謙讓語) (III類動詞)' }
    ],
    quiz: [
      { question: '先生がこの本を___。(您借給我/尊敬)', options: ['お貸しくださった', 'お貸しいただいた', 'お貸しした', '貸させていただいた'], answer: 0 },
      { question: 'ここで少し休ま___。(能讓我休息嗎/請求許可)', options: ['せていただけますか', 'れていただけますか', 'してございますか', 'せてくださいますか'], answer: 0 },
      { question: '私がご___いたします。(我來為您帶路/謙讓)', options: ['案内', 'お越し', '拝見', '承知'], answer: 0 },
      { question: '「拝見する」是什麼的謙讓語？', options: ['見る', '言う', '食べる', '行く'], answer: 0 },
      { question: '社長の荷物を___。(我幫社長拿/謙讓)', options: ['お持ちした', 'お持ちになられた', '持ってくださった', 'お持ちいただいた'], answer: 0 }
    ]
  }
];
