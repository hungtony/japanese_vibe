// N1 章節資料 - 上級 (25章)
export const chaptersN1 = [
  // ---- 第 119 關：就在一瞬間 (〜が早いか / 〜や否や) ----
  {
    id: 'n1_ch119',
    level: 'N1',
    title: '就在一瞬間 (〜が早いか / 〜や否や)',
    grammar: [
      {
        pattern: '動詞辭書形/た形 ＋ が早(はや)いか',
        explanation: '一...就立刻...。表示前一個動作剛發生，幾乎在同一瞬間就發生了下一個動作。後項多為意想不到的事或說話者無法控制的突發事件，不能帶有意向、命令。',
        examples: [
          { jp: 'ベルが鳴{な}るが早{はや}いか、生徒{せいと}たちは教室{きょうしつ}を飛{と}び出{だ}した。', romaji: 'Beru ga naru ga hayai ka, seito tachi wa kyōshitsu o tobidashita.', zh: '鐘聲一響，學生們就衝出了教室。' }
        ]
      },
      {
        pattern: '動詞辭書形 ＋ や / や否(いな)や',
        explanation: '一...就...。與「が早いか」類似，表示兩個動作幾乎同時發生。後項常接發生的事實，不接說話者的意志、命令或否定。語氣較為生硬。',
        examples: [
          { jp: '彼{かれ}はその知{し}らせを聞{き}くや否{いな}や、会社{かいしゃ}を飛{と}び出{だ}した。', romaji: 'Kare wa sono shirase o kiku ya ina ya, kaisha o tobidashita.', zh: '他一聽到那個消息，就飛奔出了公司。' }
        ]
      }
    ],
    vocabulary: [
      { word: '知らせ', reading: 'しらせ', romaji: 'shirase', meaning: '通知/消息' },
      { word: '飛び出す', reading: 'とびだす', romaji: 'tobidasu', meaning: '衝出/飛奔出 (I類動詞)' },
      { word: 'ベル', reading: 'べる', romaji: 'beru', meaning: '鐘聲/鈴聲' },
      { word: '鳴る', reading: 'なる', romaji: 'naru', meaning: '鳴響 (I類動詞)' },
      { word: '否や', reading: 'いなや', romaji: 'inaya', meaning: '立刻/否' },
      { word: '急用', reading: 'きゅうよう', romaji: 'kyūyō', meaning: '急事' },
      { word: '逃げる', reading: 'にげる', romaji: 'nigeru', meaning: '逃跑 (II類動詞)' },
      { word: '泥棒', reading: 'どろぼう', romaji: 'dorobō', meaning: '小偷' },
      { word: '警察', reading: 'けいさつ', romaji: 'keisatsu', meaning: '警察' },
      { word: '姿', reading: 'すがた', romaji: 'sugata', meaning: '身影/姿態' }
    ],
    quiz: [
      { question: '泥棒は警察の姿を見る___、逃げ出した。(一...就...)', options: ['や否や', 'が早いか', 'の両方とも正解', 'ゆえに'], answer: 2 },
      { question: '授業の終わりのベルが鳴る___、彼は教室を出た。', options: ['が早いか', 'のみならず', 'にかかわらず', '極まる'], answer: 0 },
      { question: '「泥棒」的讀音是？', options: ['どろぼう', 'とろぼう', 'どろほう', 'とろほう'], answer: 0 },
      { question: '「急用」的意思是？', options: ['休息', '急事', '用餐', '利用'], answer: 1 },
      { question: '彼が帰って来る___、雨が降り出した。(一回來就下雨/接辭書形)', options: ['や', '極まる', 'ずくめ', 'がてら'], answer: 0 }
    ]
  },

  // ---- 第 120 關：剛做完馬上就 (〜そばから / 〜なり) ----
  {
    id: 'n1_ch120',
    level: 'N1',
    title: '剛做完馬上就 (〜そばから / 〜なり)',
    grammar: [
      {
        pattern: '動詞辭書形/た形 ＋ そばから',
        explanation: '剛...馬上就又...。表示「一直重複著剛做完A，馬上就出現對抗A的B狀況」。通常帶有「徒勞無功、不管怎麼做都沒用」的無奈或抱怨語氣。',
        examples: [
          { jp: '覚{おぼ}えるそばから忘{わす}れてしまう。', romaji: 'Oboeru soba kara wasurete shimau.', zh: '剛背起來馬上就又忘了。' }
        ]
      },
      {
        pattern: '動詞辭書形 ＋ なり',
        explanation: '一...就立刻...。表示與平常不同的突發動作。前後主語通常是同一個人(通常是第三人稱)，且後項常是出乎意料或不好的行為。',
        examples: [
          { jp: '彼{かれ}は私{わたし}の顔{かお}を見{み}るなり、泣{な}き出{だ}した。', romaji: 'Kare wa watashi no kao o miru nari, nakidashita.', zh: '他一看到我的臉，就哭了出來。' }
        ]
      }
    ],
    vocabulary: [
      { word: '覚える', reading: 'おぼえる', romaji: 'oboeru', meaning: '記住/背 (II類動詞)' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記 (II類動詞)' },
      { word: '片付ける', reading: 'かたづける', romaji: 'katadzukeru', meaning: '整理/收拾 (II類動詞)' },
      { word: '散らかす', reading: 'ちらかす', romaji: 'chirakasu', meaning: '弄亂 (I類動詞)' },
      { word: '泣き出す', reading: 'なきだす', romaji: 'nakidasu', meaning: '哭出來 (I類動詞)' },
      { word: '怒鳴る', reading: 'どなる', romaji: 'donaru', meaning: '怒吼/大罵 (I類動詞)' },
      { word: '倒れる', reading: 'たおれる', romaji: 'taoreru', meaning: '倒下 (II類動詞)' },
      { word: '部屋', reading: 'へや', romaji: 'heya', meaning: '房間' },
      { word: '子供', reading: 'こども', romaji: 'kodomo', meaning: '小孩' },
      { word: '徒労', reading: 'とろう', romaji: 'torō', meaning: '徒勞無功' }
    ],
    quiz: [
      { question: '部屋を片付ける___、子供がすぐに散らかしてしまう。(剛整理好馬上就...)', options: ['そばから', 'なり', 'が早いか', 'や否や'], answer: 0 },
      { question: '彼は部屋に入る___、ソファに倒れ込んだ。(一進去立刻/同一主語意外動作)', options: ['なり', 'そばから', '極まる', 'ずくめ'], answer: 0 },
      { question: '「怒鳴る」的意思是？', options: ['大笑', '哭泣', '怒吼/大罵', '稱讚'], answer: 2 },
      { question: '聞いた___忘れてしまうなんて、年をとった証拠だ。(剛聽完馬上忘)', options: ['そばから', 'なり', 'や否や', 'べくもない'], answer: 0 },
      { question: '「散らかす」的讀音是？', options: ['ちらかす', 'とらかす', 'ひらかす', 'ちらかす'], answer: 0 }
    ]
  },

  // ---- 第 121 關：以這件事為起點 (〜を皮切りに / 〜を限りに) ----
  {
    id: 'n1_ch121',
    level: 'N1',
    title: '以這件事為起點 (〜を皮切りに / 〜を限りに)',
    grammar: [
      {
        pattern: '名詞 ＋ を皮切(かわき)りに(して) / を皮切りとして',
        explanation: '以...為開端。表示以某件事為起點，隨後發生了一連串相同或相似的事情，或者情況開始向同一個方向發展。不能用於自然現象。',
        examples: [
          { jp: 'このフェスティバルは東京{とうきょう}を皮切{かわき}りに、全国{ぜんこく}１０都市{とし}で開催{かいさい}される。', romaji: 'Kono fesutibaru wa Tōkyō o kawakiri ni, zenkoku jū-toshi de kaisai sareru.', zh: '這個音樂節以東京為開端，將在全國十個城市舉辦。' }
        ]
      },
      {
        pattern: '名詞(表示時間・期限) ＋ を限(かぎ)りに',
        explanation: '以...為最後期限 / 到...為止。表示某個一直持續的事情到此結束。常接「今日、今年、今回」等。',
        examples: [
          { jp: '今日{きょう}を限{かぎ}りに、たばこをやめることにした。', romaji: 'Kyō o kagiri ni, tabako o yameru koto ni shita.', zh: '我決定以今天為界，把菸戒了。' }
        ]
      }
    ],
    vocabulary: [
      { word: '皮切り', reading: 'かわきり', romaji: 'kawakiri', meaning: '開端/起點' },
      { word: '限る', reading: 'かぎる', romaji: 'kagiru', meaning: '限制/到...為止 (I類動詞)' },
      { word: '全国', reading: 'ぜんこく', romaji: 'zenkoku', meaning: '全國' },
      { word: '都市', reading: 'とし', romaji: 'toshi', meaning: '都市/城市' },
      { word: '開催', reading: 'かいさい', romaji: 'kaisai', meaning: '舉辦' },
      { word: '引退', reading: 'いんたい', romaji: 'intai', meaning: '引退/退休' },
      { word: '辞める', reading: 'やめる', romaji: 'yameru', meaning: '辭職/戒除 (II類動詞)' },
      { word: '公演', reading: 'こうえん', romaji: 'kōen', meaning: '公演' },
      { word: '次々', reading: 'つぎつぎ', romaji: 'tsugitsugi', meaning: '接連不斷地' },
      { word: '最後', reading: 'さいご', romaji: 'saigo', meaning: '最後' }
    ],
    quiz: [
      { question: '今月___、この店は閉店いたします。(以今個月為最後期限)', options: ['を限りに', 'を皮切りに', 'そばから', 'なり'], answer: 0 },
      { question: '大阪のライブ___、全国ツアーが始まる。(以...為開端/起點)', options: ['を皮切りに', 'を限りに', '極まる', 'ずくめ'], answer: 0 },
      { question: '「開催」的讀音是？', options: ['かいさい', 'かいさつ', 'かいざい', 'かいじょう'], answer: 0 },
      { question: '今回___、ギャンブルはもうしないと誓った。(以這次為界線不再做)', options: ['を限りに', 'を皮切りに', 'が早いか', 'や否や'], answer: 0 },
      { question: '「引退」的意思是？', options: ['引導', '退休/引退', '吸引', '忍耐'], answer: 1 }
    ]
  },

  // ---- 第 122 關：保持著原貌 (〜ながらに / 〜ながらも) ----
  {
    id: 'n1_ch122',
    level: 'N1',
    title: '保持著原貌 (〜ながらに / 〜ながらも)',
    grammar: [
      {
        pattern: '動詞ます形去ます / 名詞 ＋ ながらに(して)',
        explanation: '保持著...的狀態、原封不動。表示保持原本的狀態沒有改變。常搭配特定詞彙：生まれながらに(天生)、昔ながらに(昔日風貌)、居ながらに(不出門就...)。',
        examples: [
          { jp: 'インターネットのおかげで、家{いえ}に居{い}ながらにして世界中{せかいじゅう}の情報{じょうほう}が手{て}に入{はい}る。', romaji: 'Intānetto no okage de, ie ni inagara ni shite sekaijū no jōhō ga te ni hairu.', zh: '多虧了網路，不用出門就能獲得全世界的資訊。' }
        ]
      },
      {
        pattern: '動/い形/な形/名(であり) ＋ ながら（も）',
        explanation: '雖然...但是...、儘管...卻...。表示逆接，前後兩項是同一主語。',
        examples: [
          { jp: '彼{かれ}は若{わか}いながらも、立派{りっぱ}な社長{しゃちょう}だ。', romaji: 'Kare wa wakai nagara mo, rippa na shachō da.', zh: '他雖然年輕，卻是一位出色的社長。' }
        ]
      }
    ],
    vocabulary: [
      { word: '生まれながら', reading: 'うまれながら', romaji: 'umarenagara', meaning: '天生地' },
      { word: '昔ながら', reading: 'むかしながら', romaji: 'mukashinagara', meaning: '保持昔日風貌' },
      { word: '居ながら', reading: 'いながら', romaji: 'inagara', meaning: '待在原地' },
      { word: '涙ながら', reading: 'なみだながら', romaji: 'namidanagara', meaning: '眼淚汪汪地' },
      { word: '立派', reading: 'りっぱ', romaji: 'rippa', meaning: '出色的/氣派的 (な形容詞)' },
      { word: '才能', reading: 'さいのう', romaji: 'sainō', meaning: '才能' },
      { word: '製法', reading: 'せいほう', romaji: 'seihō', meaning: '製造方法' },
      { word: '狭い', reading: 'せまい', romaji: 'semai', meaning: '狹窄的 (い形容詞)' },
      { word: '訴える', reading: 'うったえる', romaji: 'uttaeru', meaning: '控訴/呼籲 (II類動詞)' },
      { word: '情報', reading: 'じょうほう', romaji: 'jōhō', meaning: '資訊/情報' }
    ],
    quiz: [
      { question: 'この村には___の風景が残っている。(保持著昔日風貌)', options: ['昔ながら', '生まれながら', '狭いながら', '涙ながら'], answer: 0 },
      { question: '彼は生まれ___にして天才的な音楽の才能を持っていた。(天生地)', options: ['ながら', 'を皮切り', 'を限り', 'が早いか'], answer: 0 },
      { question: '「才能」的讀音是？', options: ['さいのう', 'ざいのう', 'さいどう', 'ざいどう'], answer: 0 },
      { question: '狭い___も、自分の家は落ち着く。(雖然狹窄但是...)', options: ['ながら', '極まる', 'ずくめ', 'そばから'], answer: 0 },
      { question: '彼女は涙___に事件の真相を語った。(眼淚汪汪地/保持著流淚的狀態)', options: ['ながら', 'なり', 'や否や', 'を限りに'], answer: 0 }
    ]
  },

  // ---- 第 123 關：順便與兼顧 (〜がてら / 〜かたがた / 〜かたわら) ----
  {
    id: 'n1_ch123',
    level: 'N1',
    title: '順便與兼顧 (〜がてら / 〜かたがた)',
    grammar: [
      {
        pattern: '動詞ます形去ます / 動作性名詞 ＋ がてら',
        explanation: '順便...。做A動作的時候也兼做B。A是主要目的，B是次要。常用於散步、購物等移動行為。',
        examples: [
          { jp: '散歩{さんぽ}がてら、コンビニで牛乳{ぎゅうにゅう}を買{か}ってきた。', romaji: 'Sanpo gatera, konbini de gyūnyū o katte kita.', zh: '去散步順便在超商買了牛奶。' }
        ]
      },
      {
        pattern: '動作性名詞 ＋ かたがた',
        explanation: '順便...、兼做...。與「がてら」類似，但更為正式、生硬，多用於拜訪、問候、道謝等商務或正式場合。',
        examples: [
          { jp: 'ご挨拶{あいさつ}かたがた、お伺{うかが}いしました。', romaji: 'Goaisatsu katagata, oukagai shimashita.', zh: '順便來向您打聲招呼。' }
        ]
      },
      {
        pattern: '動詞辭書形 / 名詞の ＋ かたわら',
        explanation: '一面...一面...。表示在做主要工作或活動(本業)的同時，也從事其他活動。通常表示長期的雙重身分。',
        examples: [
          { jp: '彼{かれ}は会社員{かいしゃいん}として働{はたら}くかたわら、小説{しょうせつ}を書{か}いている。', romaji: 'Kare wa kaishain to shite hataraku katawara, shōsetsu o kaite iru.', zh: '他一面當上班族，一面寫小說。' }
        ]
      }
    ],
    vocabulary: [
      { word: '散歩', reading: 'さんぽ', romaji: 'sanpo', meaning: '散步' },
      { word: '挨拶', reading: 'あいさつ', romaji: 'aisatsu', meaning: '打招呼/致詞' },
      { word: '見舞い', reading: 'みまい', romaji: 'mimai', meaning: '探望病人' },
      { word: 'お礼', reading: 'おれい', romaji: 'orei', meaning: '道謝' },
      { word: '報告', reading: 'ほうこく', romaji: 'hōkoku', meaning: '報告' },
      { word: '会社員', reading: 'かいしゃいん', romaji: 'kaishain', meaning: '上班族' },
      { word: '小説', reading: 'しょうせつ', romaji: 'shōsetsu', meaning: '小說' },
      { word: '伺う', reading: 'うかがう', romaji: 'ukagau', meaning: '拜訪/請教(謙讓語) (I類動詞)' },
      { word: '兼ねる', reading: 'かねる', romaji: 'kaneru', meaning: '兼顧 (II類動詞)' },
      { word: '本業', reading: 'ほんぎょう', romaji: 'hongyō', meaning: '本業' }
    ],
    quiz: [
      { question: '買い物の___、図書館に寄って本を借りた。(去購物順便...)', options: ['がてら', 'かたがた', 'かたわら', 'ながらに'], answer: 0 },
      { question: '部長の病気見舞い___、仕事の報告に行った。(探病兼做報告/正式)', options: ['かたがた', 'がてら', 'かたわら', 'なり'], answer: 0 },
      { question: '「見舞い」的意思是？', options: ['見面', '探望病人', '道謝', '跳舞'], answer: 1 },
      { question: '母は家事の___、ボランティア活動をしている。(從事家事的同時/長期)', options: ['かたわら', 'がてら', 'かたがた', '皮切りに'], answer: 0 },
      { question: '「伺う」的讀音是？', options: ['うかがう', 'ねがう', 'むかう', 'したがう'], answer: 0 }
    ]
  },

  // ---- 第 124 關：到了極點 (〜極まる / 〜の至り) ----
  {
    id: 'n1_ch124',
    level: 'N1',
    title: '到了極點 (〜極まる / 〜の至り)',
    grammar: [
      {
        pattern: 'な形（去な） ＋ 極(きわ)まる / 極(きわ)まりない',
        explanation: '極其...、...到了極點。多接負面評價的字眼(危險、失禮、遺憾)，表示程度達到極限。「極まる」與「極まりない」意思相同。',
        examples: [
          { jp: '飲酒運転{いんしゅうんてん}など、危険極{きけんきわ}まりない。', romaji: 'Inshu unten nado, kiken kiwamari nai.', zh: '酒後駕車等行為，真是危險到了極點。' }
        ]
      },
      {
        pattern: '名詞 ＋ の至(いた)り',
        explanation: '...之至。表示某種感情達到了最高點。常搭配固定的慣用詞(光栄、感激、若気)。非常生硬正式的表達。',
        examples: [
          { jp: 'こんな素晴{すば}らしい賞{しょう}をいただき、光栄{こうえい}の至{いた}りです。', romaji: 'Konna subarashii shō o itadaki, kōei no itari desu.', zh: '能獲得如此棒的獎，真是光榮之至。' }
        ]
      }
    ],
    vocabulary: [
      { word: '極まる', reading: 'きわまる', romaji: 'kiwamaru', meaning: '達到極限 (I類動詞)' },
      { word: '危険', reading: 'きけん', romaji: 'kiken', meaning: '危險的 (な形容詞)' },
      { word: '失礼', reading: 'しつれい', romaji: 'shitsurei', meaning: '失禮的 (な形容詞)' },
      { word: '残念', reading: 'ざんねん', romaji: 'zannen', meaning: '遺憾的 (な形容詞)' },
      { word: '退屈', reading: 'たいくつ', romaji: 'taikutsu', meaning: '無聊的 (な形容詞)' },
      { word: '不愉快', reading: 'ふゆかい', romaji: 'fuyukai', meaning: '不愉快的 (な形容詞)' },
      { word: '至り', reading: 'いたり', romaji: 'itari', meaning: '極點/之至' },
      { word: '光栄', reading: 'こうえい', romaji: 'kōei', meaning: '光榮' },
      { word: '感激', reading: 'かんげき', romaji: 'kangeki', meaning: '感激' },
      { word: '若気', reading: 'わかげ', romaji: 'wakage', meaning: '年輕氣盛' }
    ],
    quiz: [
      { question: 'あんな態度をとるなんて、失礼___。(失禮到了極點)', options: ['極まりない', 'の至り', 'ばかりか', 'はおろか'], answer: 0 },
      { question: '社長の前でミスをするとは、若気___でした。(年輕氣盛之極/不成熟)', options: ['の至り', '極まる', 'ずくめ', 'まみれ'], answer: 0 },
      { question: '「光栄」的讀音是？', options: ['こうえい', 'こうえん', 'ごうえい', 'こえい'], answer: 0 },
      { question: 'この映画はーストーリーが単調で、退屈___。(無聊到了極點)', options: ['極まる', 'の至り', 'がてら', 'かたがた'], answer: 0 },
      { question: '「若気」的意思是？', options: ['年輕氣盛', '感冒', '運氣', '天氣'], answer: 0 }
    ]
  },

  // ---- 第 125 關：清一色與沾滿了 (〜ずくめ / 〜まみれ) ----
  {
    id: 'n1_ch125',
    level: 'N1',
    title: '清一色與沾滿了 (〜ずくめ / 〜まみれ)',
    grammar: [
      {
        pattern: '名詞 ＋ ずくめ',
        explanation: '清一色、全是...。表示周圍全都是某種事物或接連發生某事。可用於好現象(いいことずくめ、ごちそうずくめ)或外表顏色(黒ずくめ)。',
        examples: [
          { jp: '今年{ことし}は結婚{けっこん}や昇進{しょうしん}など、いいことずくめの一年{いちねん}だった。', romaji: 'Kotoshi wa kekkon ya shōshin nado, ii koto zukume no ichinen datta.', zh: '今年結婚又升職，是好事連連(清一色好事)的一年。' }
        ]
      },
      {
        pattern: '名詞 ＋ まみれ',
        explanation: '沾滿了...。表示表面上沾滿了不好的、髒的東西(如泥、血、汗、灰塵等)。(類似N3的だらけ，但まみれ更強調黏附在表面)。',
        examples: [
          { jp: 'サッカー部{ぶ}の息子{むすこ}が、泥{どろ}まみれになって帰{かえ}ってきた。', romaji: 'Sakkā-bu no musuko ga, doro mamire ni natte kaette kita.', zh: '足球社的兒子弄得渾身是泥地回來了。' }
        ]
      }
    ],
    vocabulary: [
      { word: 'ずくめ', reading: 'ずくめ', romaji: 'zukume', meaning: '清一色/全是' },
      { word: 'まみれ', reading: 'まみれ', romaji: 'mamire', meaning: '沾滿了(髒東西)' },
      { word: '昇進', reading: 'しょうしん', romaji: 'shōshin', meaning: '升職' },
      { word: 'ごちそう', reading: 'ごちそう', romaji: 'gochisō', meaning: '美食/盛宴' },
      { word: '泥', reading: 'どろ', romaji: 'doro', meaning: '泥巴' },
      { word: '汗', reading: 'あせ', romaji: 'ase', meaning: '汗水' },
      { word: '血', reading: 'ち', romaji: 'chi', meaning: '血' },
      { word: 'ほこり', reading: 'ほこり', romaji: 'hokori', meaning: '灰塵' },
      { word: '借金', reading: 'しゃっきん', romaji: 'shakkin', meaning: '借款/負債' },
      { word: '黒', reading: 'くろ', romaji: 'kuro', meaning: '黑色' }
    ],
    quiz: [
      { question: 'マラソン選手が、汗___になってゴールした。(渾身是汗)', options: ['まみれ', 'ずくめ', '極まりない', 'の至り'], answer: 0 },
      { question: '彼女は毎日___の服を着ている。(全黑的)', options: ['黒ずくめ', '黒まみれ', '黒ばっかり', '黒極まる'], answer: 0 },
      { question: '「昇進」的讀音是？', options: ['しょうしん', 'そうしん', 'しょうじん', 'じょうしん'], answer: 0 },
      { question: '宝くじにも当たり、今年はいいこと___だ。(好事連連/全是好事)', options: ['ずくめ', 'まみれ', 'だらけ', 'のみならず'], answer: 0 },
      { question: '「血」的意思與讀音是？', options: ['血 / ち', '汗 / あせ', '泥 / どろ', '淚 / なみだ'], answer: 0 }
    ]
  },

  // ---- 第 126 關：連...都 / 光是...就 (〜だに / 〜すら) ----
  {
    id: 'n1_ch126',
    level: 'N1',
    title: '連...都 / 光是...就 (〜だに / 〜すら)',
    grammar: [
      {
        pattern: '動詞辭書形 / 名詞 ＋ だに',
        explanation: '光是...就 / 甚至連...都(不)。常與「想像、考える、聞く、思い出す」等心理感覺的詞語連用。',
        examples: [
          { jp: 'あんな恐{おそ}ろしい事件{じけん}、想像{そうぞう}するだに恐{おそ}ろしい。', romaji: 'Anna osoroshii jiken, sōzō suru da ni osoroshii.', zh: '那種可怕的事件，光是想像就覺得恐怖。' },
          { jp: '夢{ゆめ}にだに思{おも}わなかった。', romaji: 'Yume ni da ni omowanakatta.', zh: '連作夢都沒想到(常用否定)。' }
        ]
      },
      {
        pattern: '名詞(＋助詞) ＋ すら / ですら',
        explanation: '連...都。舉出一個極端的例子，暗示其他的更是如此(同「さえ」，但語氣較硬)。',
        examples: [
          { jp: '忙{いそが}しくて、寝{ね}る時間{じかん}すらありません。', romaji: 'Isogashikute, neru jikan sura arimasen.', zh: '忙到連睡覺的時間都沒有。' }
        ]
      }
    ],
    vocabulary: [
      { word: '想像', reading: 'そうぞう', romaji: 'sōzō', meaning: '想像' },
      { word: '恐ろしい', reading: 'おそろしい', romaji: 'osoroshii', meaning: '可怕的 (い形容詞)' },
      { word: '夢', reading: 'ゆめ', romaji: 'yume', meaning: '夢' },
      { word: '事件', reading: 'じけん', romaji: 'jiken', meaning: '事件' },
      { word: '微動', reading: 'びどう', romaji: 'bidō', meaning: '微動' },
      { word: '子供', reading: 'こども', romaji: 'kodomo', meaning: '小孩' },
      { word: '名前', reading: 'なまえ', romaji: 'namae', meaning: '名字' },
      { word: '記憶', reading: 'きおく', romaji: 'kioku', meaning: '記憶' },
      { word: '書く', reading: 'かく', romaji: 'kaku', meaning: '寫 (I類動詞)' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考 (II類動詞)' }
    ],
    quiz: [
      { question: '子供___わかるような簡単な問題だ。(連小孩都懂)', options: ['すら/ですら', 'だに', '極まる', 'の至り'], answer: 0 },
      { question: 'こんな大災害が起こるとは、想像する___恐ろしい。(光是想像就...)', options: ['だに', 'すら', 'ずくめ', 'まみれ'], answer: 0 },
      { question: '「微動」的意思是？', options: ['大動作', '稍微移動', '不動', '震動'], answer: 1 },
      { question: '彼女はショックのあまり、微動___しなかった。(連動都不動)', options: ['だに', 'すら', '極まりなく', 'ずくめで'], answer: 0 },
      { question: '「恐ろしい」的讀音是？', options: ['おそろしい', 'あやしい', 'くるしい', 'たのしい'], answer: 0 }
    ]
  },

  // ---- 第 127 關：哪怕只有一點點也絕不 (〜たりとも / 〜であれ) ----
  {
    id: 'n1_ch127',
    level: 'N1',
    title: '哪怕只有一點點也絕不 (〜たりとも / 〜であれ)',
    grammar: [
      {
        pattern: '數量詞(１＋量詞) ＋ たりとも ＋ 否定',
        explanation: '哪怕只(有)一...也絕不...。強調即使是最小的數量也絕不容許。常接「1日、1滴、1秒、1円」。',
        examples: [
          { jp: '試験中{しけんちゅう}は、一秒{いちびょう}たりとも無駄{むだ}にできない。', romaji: 'Shiken-chū wa, ichibyō tari tomo muda ni dekinai.', zh: '考試時，哪怕是一秒鐘也不能浪費。' }
        ]
      },
      {
        pattern: '名詞 / 疑問詞 ＋ であれ / であろうと',
        explanation: '無論是... / 即使是...。表示無論處於什麼特殊或極端的情況下，結果都是一樣的。',
        examples: [
          { jp: 'どんな理由{りゆう}であれ、暴力{ぼうりょく}はいけない。', romaji: 'Donna riyū de are, bōryoku wa ikenai.', zh: '無論基於什麼理由，都不允許使用暴力。' }
        ]
      }
    ],
    vocabulary: [
      { word: '一秒', reading: 'いちびょう', romaji: 'ichibyō', meaning: '一秒鐘' },
      { word: '一滴', reading: 'いってき', romaji: 'itteki', meaning: '一滴' },
      { word: '一日', reading: 'いちにち', romaji: 'ichinichi', meaning: '一日' },
      { word: '一円', reading: 'いちえん', romaji: 'ichien', meaning: '一元' },
      { word: '無駄', reading: 'むだ', romaji: 'muda', meaning: '浪費/徒勞 (な形容詞)' },
      { word: '油断', reading: 'ゆだん', romaji: 'yudan', meaning: '疏忽/大意' },
      { word: '理由', reading: 'りゆう', romaji: 'riyū', meaning: '理由' },
      { word: '暴力', reading: 'ぼうりょく', romaji: 'bōryoku', meaning: '暴力' },
      { word: '社長', reading: 'しゃちょう', romaji: 'shachō', meaning: '總經理' },
      { word: '誰', reading: 'だれ', romaji: 'dare', meaning: '誰' }
    ],
    quiz: [
      { question: '砂漠では、水は一滴___無駄にできない。(哪怕只有一滴也絕不)', options: ['たりとも', 'であれ', 'すら', 'だに'], answer: 0 },
      { question: '相手が社長___、間違っていることは指摘すべきだ。(即使是/無論是)', options: ['であれ', 'たりとも', 'ずくめ', 'まみれ'], answer: 0 },
      { question: '「油断」的意思是？', options: ['加油', '斷油', '疏忽/大意', '努力'], answer: 2 },
      { question: '敵が何人___、私たちは最後まで戦う。(無論敵人有幾人)', options: ['であろうと', 'たりとも', 'がてら', 'かたがた'], answer: 0 },
      { question: '「無駄」的讀音是？', options: ['むだ', 'ぶだ', 'むた', 'ぶた'], answer: 0 }
    ]
  },

  // ---- 第 128 關：強烈的情感共鳴 (〜にたえない / 〜にたえる) ----
  {
    id: 'n1_ch128',
    level: 'N1',
    title: '強烈的情感共鳴 (〜にたえない)',
    grammar: [
      {
        pattern: '感情名詞 ＋ に堪(た)えない',
        explanation: '...得無法忍受、不勝...。前面只接特定的感情名詞(感謝、感激、同情、後悔、悲堪)，表示感情強烈到了極點。',
        examples: [
          { jp: '皆さまのご親切{しんせつ}に、感謝{かんしゃ}に堪{た}えません。', romaji: 'Minasama no goshinsetsu ni, kansha ni taemasen.', zh: '對各位的親切，我不勝感激(感激得不得了)。' }
        ]
      },
      {
        pattern: '動詞辭書形 / 名詞 ＋ にたえる / にたえない',
        explanation: '值得... / 不值得... / 經不起...。表示有沒有價值去聽/看/鑑賞。',
        examples: [
          { jp: 'この小説{しょうせつ}は、大人{おとな}の鑑賞{かんしょう}にたえる作品{さくひん}だ。', romaji: 'Kono shōsetsu wa, otona no kanshō ni taeru sakuhin da.', zh: '這本小說是一部值得大人鑑賞的作品。' },
          { jp: '彼{かれ}の悪口{わるぐち}は聞{き}くに堪{た}えない。', romaji: 'Kare no waruguchi wa kiku ni taenai.', zh: '他的壞話簡直不堪入耳(不值得/經不起聽)。' }
        ]
      }
    ],
    vocabulary: [
      { word: '堪える', reading: 'たえる', romaji: 'taeru', meaning: '忍受/值得 (II類動詞)' },
      { word: '感謝', reading: 'かんしゃ', romaji: 'kansha', meaning: '感謝' },
      { word: '同情', reading: 'どうじょう', romaji: 'dōjō', meaning: '同情' },
      { word: '感激', reading: 'かんげき', romaji: 'kangeki', meaning: '感激' },
      { word: '後悔', reading: 'こうかい', romaji: 'kōkai', meaning: '後悔' },
      { word: '鑑賞', reading: 'かんしょう', romaji: 'kanshō', meaning: '鑑賞' },
      { word: '評価', reading: 'ひょうか', romaji: 'hyōka', meaning: '評價' },
      { word: '読む', reading: 'よむ', romaji: 'yomu', meaning: '閱讀 (I類動詞)' },
      { word: '見る', reading: 'みる', romaji: 'miru', meaning: '看 (II類動詞)' },
      { word: '聞く', reading: 'きく', romaji: 'kiku', meaning: '聽 (I類動詞)' }
    ],
    quiz: [
      { question: '事故の被害者のことを思うと、同情___。(不勝同情/同情得受不了)', options: ['にたえない', 'にたえる', 'に越したことはない', 'までもない'], answer: 0 },
      { question: 'そのスキャンダルは、とても読む___内容だった。(不堪入目/不值得看)', options: ['にたえない', 'にたえる', '極まった', 'の至り'], answer: 0 },
      { question: '「鑑賞」的讀音是？', options: ['かんしょう', 'かんそ', 'けんしょう', 'けんそ'], answer: 0 },
      { question: 'この映画は何度見ても、見る___名作だ。(值得一看再看)', options: ['にたえる', 'にたえない', 'がてら', 'かたわら'], answer: 0 },
      { question: '「同情」的意思是？', options: ['同樣的', '同意', '同情', '同時'], answer: 2 }
    ]
  },

  // ---- 第 129 關：忍不住/衷心期盼 (〜を禁じ得ない / 〜てやまない) ----
  {
    id: 'n1_ch129',
    level: 'N1',
    title: '忍不住/衷心期盼 (〜を禁じ得ない / 〜てやまない)',
    grammar: [
      {
        pattern: '感情名詞 ＋ を禁(きん)じ得(え)ない',
        explanation: '禁不住...、不禁...。表示某種感情自然湧上心頭，想壓抑也壓抑不住。是非常書面的表達。',
        examples: [
          { jp: '彼{かれ}の悲惨{ひさん}な経験{けいけん}を聞{き}いて、涙{なみだ}を禁{きん}じ得{え}なかった。', romaji: 'Kare no hisan na keiken o kiite, namida o kinjienakatta.', zh: '聽了他悲慘的經歷，我不禁流下眼淚。' }
        ]
      },
      {
        pattern: '動詞て形 ＋ やまない',
        explanation: '衷心...、不斷地...。表示對他人的強烈感情(如祈禱、期待、愛、希望等)持續不斷。通常不是指看得到的動作，而是內心的強烈感受。',
        examples: [
          { jp: '皆様{みなさま}のご健康{けんこう}とご成功{せいこう}を祈{いの}ってやみません。', romaji: 'Minasama no gokenkō to goseikō o inotte yamimasen.', zh: '衷心祈禱各位健康、成功。' }
        ]
      }
    ],
    vocabulary: [
      { word: '禁じ得ない', reading: 'きんじえない', romaji: 'kinjienai', meaning: '禁不住' },
      { word: '涙', reading: 'なみだ', romaji: 'namida', meaning: '眼淚' },
      { word: '怒り', reading: 'いかり', romaji: 'ikari', meaning: '憤怒 (名詞)' },
      { word: '驚き', reading: 'おどろき', romaji: 'odoroki', meaning: '驚訝 (名詞)' },
      { word: '同情', reading: 'どうじょう', romaji: 'dōjō', meaning: '同情' },
      { word: 'やむ', reading: 'やむ', romaji: 'yamu', meaning: '停止 (I類動詞)' },
      { word: '祈る', reading: 'いのる', romaji: 'inoru', meaning: '祈禱 (I類動詞)' },
      { word: '願う', reading: 'ねがう', romaji: 'negau', meaning: '期望 (I類動詞)' },
      { word: '愛する', reading: 'あいする', romaji: 'aisuru', meaning: '愛 (III類動詞)' },
      { word: '期待', reading: 'きたい', romaji: 'kitai', meaning: '期待' }
    ],
    quiz: [
      { question: 'あんな殘酷な事件を起こすなんて、激しい怒り___。(不禁感到憤怒)', options: ['を禁じ得ない', 'てやまない', 'にたえない', '極まりない'], answer: 0 },
      { question: '卒業生の今後の活躍を願っ___。(衷心期望/期望不會停止)', options: ['てやまない', 'を禁じ得ない', 'に越したことはない', 'までもない'], answer: 0 },
      { question: '「祈る」的意思是？', options: ['拒絕', '生氣', '祈禱', '哭泣'], answer: 2 },
      { question: '素晴らしいオーケストラの演奏に、感動___。(不禁感動)', options: ['を禁じ得えなかった', 'てやまなかった', 'にたえなかった', 'の至りだった'], answer: 0 },
      { question: '「涙」的讀音是？', options: ['なみだ', 'あせ', 'ち', 'よだれ'], answer: 0 }
    ]
  },

  // ---- 第 130 關：不這麼做不行 (〜ずにはすまない / 〜ないではおかない) ----
  {
    id: 'n1_ch130',
    level: 'N1',
    title: '不這麼做不行 (〜ずにはすまない / 〜ないではおかない)',
    grammar: [
      {
        pattern: '動詞ない形去ない ＋ ずにはすまない / ないではすまない',
        explanation: '不...是無法解決的、非...不可。表示從社會道德、自己的良心或常理來看，如果不這麼做，事情就無法交代/過不去。',
        examples: [
          { jp: '私{わたし}の不注意{ふちゅうい}で壊{こわ}したのだから、弁償{べんしょう}せずにはすまないだろう。', romaji: 'Watashi no fuchūi de kowashita no dakara, benshō sezu ni wa sumanai darō.', zh: '是因為我的不小心弄壞的，所以非賠償不可吧。' }
        ]
      },
      {
        pattern: '動詞ない形 ＋ ではおかない / ずにはおかない',
        explanation: '絕對要...、非...不可。表示說話者具有極強烈的決心或意志，一定要做成某件事。或表示某個狀況「絕對會自然地引發某個結果」。',
        examples: [
          { jp: 'あんなひどいことをした彼{かれ}を、許{ゆる}さないではおかない。', romaji: 'Anna hidoi koto o shita kare o, yurusanai de wa okanai.', zh: '他做了那麼過分的事，我絕對饒不了他(非不原諒不可)。' }
        ]
      }
    ],
    vocabulary: [
      { word: '済む', reading: 'すむ', romaji: 'sumu', meaning: '解決/完結/過得去 (I類動詞)' },
      { word: '置く', reading: 'おく', romaji: 'oku', meaning: '放/擱置 (I類動詞)' },
      { word: '弁償', reading: 'べんしょう', romaji: 'benshō', meaning: '賠償' },
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉 (I類動詞)' },
      { word: '責任', reading: 'せきにん', romaji: 'sekinin', meaning: '責任' },
      { word: '許す', reading: 'ゆるす', romaji: 'yurusu', meaning: '原諒 (I類動詞)' },
      { word: '罰する', reading: 'ばっする', romaji: 'bassuru', meaning: '懲罰 (III類動詞)' },
      { word: '感動', reading: 'かんどう', romaji: 'kandō', meaning: '感動' },
      { word: '不注意', reading: 'ふちゅうい', romaji: 'fuchūi', meaning: '不小心' },
      { word: '規則', reading: 'きそく', romaji: 'kisoku', meaning: '規則' }
    ],
    quiz: [
      { question: '社長に大きな迷惑をかけたのだから、謝ら___。(非道歉不可/良心道德上)', options: ['ずにはすまない', 'ないではおかない', 'てやまない', 'を禁じ得ない'], answer: 0 },
      { question: 'この映画は、見るものを感動させ___。(絕對會讓觀眾感動)', options: ['ずにはおかない', 'ずにはすまない', 'にたえない', '極まる'], answer: 0 },
      { question: '「弁償」的意思是？', options: ['便當', '賠償', '辯論', '傷兵'], answer: 1 },
      { question: 'あれほどの不正をしたのだから、彼を罰せ___。(絕對要懲罰他/意志)', options: ['ずにはおかない', 'ずにはすまない', 'ばかりか', 'はおろか'], answer: 0 },
      { question: '「謝る」的讀音是？', options: ['あやまる', 'あつまる', 'いばる', 'いのる'], answer: 0 }
    ]
  },

  // ---- 第 131 關：被迫不得不 (〜を余儀なくされる / 〜を余儀なくさせる) ----
  {
    id: 'n1_ch131',
    level: 'N1',
    title: '被迫不得不 (〜を余儀なくされる)',
    grammar: [
      {
        pattern: '名詞 ＋ を余儀(よぎ)なくされる',
        explanation: '被迫...、不得不...。主語通常是人。表示因為某種無可奈何的狀況，只好採取某個原本不想採取的行動。極度書面。',
        examples: [
          { jp: '突然{とつぜん}の病気{びょうき}により、彼{かれ}は引退{いんたい}を余儀{よぎ}なくされた。', romaji: 'Totsuzen no byōki ni yori, kare wa intai o yoginaku sareta.', zh: '因為突如其來的疾病，他被迫引退。' }
        ]
      },
      {
        pattern: '名詞 ＋ を余儀(よぎ)なくさせる',
        explanation: '迫使...不得不...。主語通常是某個事件、狀況(如颱風、地震、事故)，該狀況迫使人們不得不做出某個改變。',
        examples: [
          { jp: '大型台風{おおがたたいふう}の接近{せっきん}が、イベントの中止{ちゅうし}を余儀{よぎ}なくさせた。', romaji: 'Ōgata taifū no sekkin ga, ibento no chūshi o yoginaku saseta.', zh: '大型颱風的逼近，迫使活動不得不中止。' }
        ]
      }
    ],
    vocabulary: [
      { word: '余儀', reading: 'よぎ', romaji: 'yogi', meaning: '其他方法(通常接沒有)' },
      { word: '引退', reading: 'いんたい', romaji: 'intai', meaning: '引退' },
      { word: '退任', reading: 'たいにん', romaji: 'tainin', meaning: '退職' },
      { word: '辞任', reading: 'じにん', romaji: 'jinin', meaning: '辭職' },
      { word: '変更', reading: 'へんこう', romaji: 'henkō', meaning: '變更' },
      { word: '中止', reading: 'ちゅうし', romaji: 'chūshi', meaning: '中止' },
      { word: '延期', reading: 'えんき', romaji: 'enki', meaning: '延期' },
      { word: '悪天候', reading: 'あくてんこう', romaji: 'akutenkō', meaning: '壞天氣' },
      { word: '接近', reading: 'せっきん', romaji: 'sekkin', meaning: '接近' },
      { word: '資金', reading: 'しきん', romaji: 'shikin', meaning: '資金' }
    ],
    quiz: [
      { question: '資金不足により、計画の変更___。(我們被迫變更)', options: ['を余儀なくされた', 'を余儀なくさせた', 'ずにはすまない', 'ないではおかない'], answer: 0 },
      { question: '大雪が、列車の運行中止___。(大雪這個主語迫使...)', options: ['を余儀なくさせた', 'を余儀なくされた', 'にたえない', 'てやまない'], answer: 0 },
      { question: '「余儀」的意思最接近什麼？', options: ['儀式', '餘裕', '其他方法', '義務'], answer: 2 },
      { question: '怪我のため、選手は試合の欠場___。(選手被迫)', options: ['を余儀なくされた', 'を余儀なくさせた', 'すら', 'だに'], answer: 0 },
      { question: '「悪天候」的讀音是？', options: ['あくてんこう', 'わるてんき', 'あくてんき', 'わるてんこう'], answer: 0 }
    ]
  },

  // ---- 第 132 關：基於面子與責任 (〜手前 / 〜ばこそ) ----
  {
    id: 'n1_ch132',
    level: 'N1',
    title: '基於面子與責任 (〜手前 / 〜ばこそ)',
    grammar: [
      {
        pattern: '動詞辭書形/た形/ている / 名詞の ＋ 手前(てまえ)',
        explanation: '礙於...的面子、既然已經...。表示考慮到他人的眼光、自己的立場或曾經說過的話，不能不做某事(或不能不這樣做)。',
        examples: [
          { jp: '絶対(ぜったい)にやると宣言(せんげん)した手前(てまえ)、今(いま)さらやめられない。', romaji: 'Zettai ni yaru to sengen shita temae, imasara yamerarenai.', zh: '既然已經當眾宣布絕對要做，礙於面子現在無法退出。' }
        ]
      },
      {
        pattern: '動詞ば形 / い形ければ / な形/名詞であれば ＋ こそ',
        explanation: '正因為...才...。強調正是因為這個理由，才會導致後面的結果。和「からこそ」意思相同，但「ばこそ」是較古老、生硬的文法。',
        examples: [
          { jp: '君(きみ)のためを思(おも)えばこそ、厳(きび)しく叱(しか)るのだ。', romaji: 'Kimi no tame o omoeba koso, kibishiku shikaru no da.', zh: '正因為為你著想，才會嚴厲地責罵你。' }
        ]
      }
    ],
    vocabulary: [
      { word: '手前', reading: 'てまえ', romaji: 'temae', meaning: '面子/跟前' },
      { word: '宣言', reading: 'せんげん', romaji: 'sengen', meaning: '宣言/宣布' },
      { word: '今さら', reading: 'いまさら', romaji: 'imasara', meaning: '事到如今' },
      { word: '叱る', reading: 'しかる', romaji: 'shikaru', meaning: '責罵 (I類動詞)' },
      { word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: '嚴格的 (い形容詞)' },
      { word: '知る', reading: 'しる', romaji: 'shiru', meaning: '知道/認識 (I類動詞)' },
      { word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: '約定' },
      { word: '引く', reading: 'ひく', romaji: 'hiku', meaning: '退縮/拉 (I類動詞)' },
      { word: '健康', reading: 'けんこう', romaji: 'kenkō', meaning: '健康的 (な形容詞)' },
      { word: '心配', reading: 'しんぱい', romaji: 'shinpai', meaning: '擔心的 (な形容詞)' }
    ],
    quiz: [
      { question: '子供たちの___、親がそんなみっともない真似はできない。(礙於面子)', options: ['手前', 'ばこそ', 'なり', 'そばから'], answer: 0 },
      { question: '愛していれ___、こんなに心配するのです。(正因為愛)', options: ['ばこそ', '手前', 'がてら', 'かたがた'], answer: 0 },
      { question: '「今さら」的意思是？', options: ['現在立刻', '事到如今', '未來', '過去'], answer: 1 },
      { question: '皆の前でやると言った___、やるしかない。(既然已經說了)', options: ['手前', 'ばこそ', 'を限りに', '極まる'], answer: 0 },
      { question: '「宣言」的讀音是？', options: ['せんげん', 'せんごん', 'しんげん', 'しんけん'], answer: 0 }
    ]
  },

  // ---- 第 133 關：身為...怎能如此 (〜たるもの / 〜ともあろう者が) ----
  {
    id: 'n1_ch133',
    level: 'N1',
    title: '身為...怎能如此 (〜たるもの / 〜ともあろう者が)',
    grammar: [
      {
        pattern: '名詞 ＋ たるもの（は）',
        explanation: '作為...、身為...。表示作為某種擁有崇高立場或責任的人(如教師、領導、父母等)，理所當然應該具備某種態度或做出某種行為。',
        examples: [
          { jp: '教師(きょうし)たるもの、常(つね)に学生(がくせい)の模範(もはん)とならなければならない。', romaji: 'Kyōshi taru mono, tsune ni gakusei no mohan to naranakereba naranai.', zh: '身為教師，必須經常作為學生的表率。' }
        ]
      },
      {
        pattern: '名詞 ＋ ともあろう者(もの)が / ともあろう ＋ 名詞',
        explanation: '堂堂一個...居然...。表示擁有優秀能力或崇高地位的人，竟然做出了不符合其身分的愚蠢或糟糕的行為。帶有強烈的驚訝、輕蔑或責備語氣。',
        examples: [
          { jp: '警察官(けいさつかん)ともあろう者(もの)が、万引(まんび)きをするとは信(しん)じられない。', romaji: 'Keisatsukan tomo arō mono ga, manbiki o suru to wa shinjirarenai.', zh: '堂堂一個警察居然去偷東西，真是令人難以置信。' }
        ]
      }
    ],
    vocabulary: [
      { word: '教師', reading: 'きょうし', romaji: 'kyōshi', meaning: '教師' },
      { word: '模範', reading: 'もはん', romaji: 'mohan', meaning: '模範/表率' },
      { word: '警察官', reading: 'けいさつかん', romaji: 'keisatsukan', meaning: '警察' },
      { word: '万引き', reading: 'まんびき', romaji: 'manbiki', meaning: '順手牽羊/偷竊' },
      { word: '政治家', reading: 'せいじか', romaji: 'seijika', meaning: '政治家' },
      { word: '賄賂', reading: 'わいろ', romaji: 'wairo', meaning: '賄賂' },
      { word: '受け取る', reading: 'うけとる', romaji: 'uketoru', meaning: '收受 (I類動詞)' },
      { word: '医者', reading: 'いしゃ', romaji: 'isha', meaning: '醫師' },
      { word: '命', reading: 'いのち', romaji: 'inochi', meaning: '生命' },
      { word: '尊い', reading: 'とうとい', romaji: 'tōtoi', meaning: '尊貴的 (い形容詞)' }
    ],
    quiz: [
      { question: '一国の首相___、あんな発言をするとは情けない。(堂堂一個總理居然)', options: ['ともあろう者が', 'たるもの', '手前', 'ばこそ'], answer: 0 },
      { question: 'プロのスポーツ選手___、毎日厳しい練習をするのは当然だ。(身為...)', options: ['たるもの', 'ともあろう者が', '極まる', 'の至り'], answer: 0 },
      { question: '「賄賂」的讀音是？', options: ['わいろ', 'まいない', 'ばいろ', 'まいろ'], answer: 0 },
      { question: '「万引き」的意思是？', options: ['引導', '一萬塊', '偷竊', '萬有引力'], answer: 2 },
      { question: '医者___者が、患者を放置するなんて許せない。(堂堂一個醫生)', options: ['ともあろう', 'たる', 'であれ', 'を皮切りに'], answer: 0 }
    ]
  },

  // ---- 第 134 關：取決於 / 無論如何 (〜いかん / 〜いかんによらず) ----
  {
    id: 'n1_ch134',
    level: 'N1',
    title: '取決於 / 無論如何 (〜いかん / 〜いかんによらず)',
    grammar: [
      {
        pattern: '名詞（の） ＋ いかんだ / いかんで（は） / いかんによって（は）',
        explanation: '取決於...。表示後項的結果完全視前項的狀況或程度而定。「いかん」漢字可寫作「如何」。',
        examples: [
          { jp: '検査(けんさ)の結果(けっか)いかんでは、手術(しゅじゅつ)が必要(ひつよう)になるかもしれない。', romaji: 'Kensa no kekka ikan de wa, shujutsu ga hitsuyō ni naru kamo shirenai.', zh: '取決於檢查結果，可能需要動手術。' },
          { jp: '成功(せいこう)するかどうかは、君(きみ)の努力(どりょく)いかんだ。', romaji: 'Seikō suru ka dō ka wa, kimi no doryoku ikan da.', zh: '能否成功，全看你的努力而定。' }
        ]
      },
      {
        pattern: '名詞(の) ＋ いかんによらず / いかんにかかわらず / いかんを問(と)わず',
        explanation: '無論...如何、不管...如何。表示前項的狀況如何都不影響後項的事實。(同にかかわらず)。',
        examples: [
          { jp: '理由(りゆう)のいかんによらず、遅刻(ちこく)は認(みと)められない。', romaji: 'Riyū no ikan ni yorazu, chikoku wa mitomerarenai.', zh: '不論理由為何，都不允許遲到。' }
        ]
      }
    ],
    vocabulary: [
      { word: '如何', reading: 'いかん', romaji: 'ikan', meaning: '如何' },
      { word: '検査', reading: 'けんさ', romaji: 'kensa', meaning: '檢查' },
      { word: '手術', reading: 'しゅじゅつ', romaji: 'shujutsu', meaning: '手術' },
      { word: '必要', reading: 'ひつよう', romaji: 'hitsuyō', meaning: '必要的 (な形容詞)' },
      { word: '努力', reading: 'どりょく', romaji: 'doryoku', meaning: '努力' },
      { word: '成績', reading: 'せいせき', romaji: 'seiseki', meaning: '成績' },
      { word: '退学', reading: 'たいがく', romaji: 'taigaku', meaning: '退學' },
      { word: '理由', reading: 'りゆう', romaji: 'riyū', meaning: '理由' },
      { word: '遅刻', reading: 'ちこく', romaji: 'chikoku', meaning: '遲到' },
      { word: '認める', reading: 'みとめる', romaji: 'mitomeru', meaning: '承認/允許 (II類動詞)' }
    ],
    quiz: [
      { question: '成績の___は、退学になる可能性もある。(取決於成績如何)', options: ['いかんによって', 'いかんによらず', 'たるもの', 'ばこそ'], answer: 0 },
      { question: '天候の___かわらず、試合は行われます。(不管天氣如何)', options: ['いかんにか', 'いかんを問', 'いかんによら', '以上皆是'], answer: 3 },
      { question: '「手術」的讀音是？', options: ['しゅじゅつ', 'しゅじゅ', 'しゅうじゅつ', 'てじゅつ'], answer: 0 },
      { question: '国籍の___は問わず、優秀な人材を採用します。(不問國籍如何)', options: ['いかん', '手前', '次第', 'ばかり'], answer: 0 },
      { question: '「認める」的意思是？', options: ['認識', '看見', '承認/允許', '了解'], answer: 2 }
    ]
  },

  // ---- 第 135 關：正因為處於此狀態 (〜ゆえに / 〜とあって) ----
  {
    id: 'n1_ch135',
    level: 'N1',
    title: '正因為處於此狀態 (〜ゆえに / 〜とあって)',
    grammar: [
      {
        pattern: '普通形 / 名詞(である) / な形(である) ＋ ゆえ（に / の）',
        explanation: '因為...。表示原因理由。極度書面，常見於古文、書信或正式演講。「故に」。',
        examples: [
          { jp: '悪天候(あくてんこう)ゆえに、フライトはキャンセルされた。', romaji: 'Akutenkō yue ni, furaito wa kyanseru sareta.', zh: '因為天氣惡劣，航班被取消了。' },
          { jp: '有名人(ゆうめいじん)ゆえの悩(なや)みもある。', romaji: 'Yūmeijin yue no nayami mo aru.', zh: '也有因為是名人才有的煩惱。' }
        ]
      },
      {
        pattern: '普通形 / 名詞 ＋ とあって',
        explanation: '正因為處於...的特殊情況下。表示由於前項是某種稀有或特別的事件，因此引發了後項非比尋常的盛況或結果。',
        examples: [
          { jp: '人気(にんき)アイドルが来(く)るとあって、会場(かいじょう)は熱気(ねっき)に包(つつ)まれている。', romaji: 'Ninki aidoru ga kuru to atte, kaijō wa nekki ni tsutsumarete iru.', zh: '正因為人氣偶像要來，會場被熱情的氣氛包圍。' }
        ]
      }
    ],
    vocabulary: [
      { word: '故に', reading: 'ゆえに', romaji: 'yueni', meaning: '因為' },
      { word: '悪天候', reading: 'あくてんこう', romaji: 'akutenkō', meaning: '壞天氣' },
      { word: 'フライト', reading: 'ふらいと', romaji: 'furaito', meaning: '航班' },
      { word: 'キャンセル', reading: 'きゃんせる', romaji: 'kyanseru', meaning: '取消' },
      { word: '有名人', reading: 'ゆうめいじん', romaji: 'yūmeijin', meaning: '名人' },
      { word: '悩み', reading: 'なやみ', romaji: 'nayami', meaning: '煩惱' },
      { word: '熱気', reading: 'ねっき', romaji: 'nekki', meaning: '熱情/熱氣' },
      { word: '包む', reading: 'つつむ', romaji: 'tsutsumu', meaning: '包圍/包裝 (I類動詞)' },
      { word: '無料', reading: 'むりょう', romaji: 'muryō', meaning: '免費' },
      { word: '混雑', reading: 'こんざつ', romaji: 'konzatsu', meaning: '擁擠' }
    ],
    quiz: [
      { question: '入場無料___、遊園地は大変な混雑だった。(正因為處於免費的特殊狀況)', options: ['とあって', 'ゆえに', 'の両方とも正解だが、とあって更強調特殊熱鬧狀況', 'いかんにより'], answer: 2 },
      { question: '彼は若さ___、時々失敗もする。(因為年輕故)', options: ['ゆえに', 'とあって', 'を問わず', 'にかかわらず'], answer: 0 },
      { question: '「悩み」的意思是？', options: ['頭腦', '煩惱', '生氣', '眼淚'], answer: 1 },
      { question: '久しぶりの再会___、彼らは夜遅くまで語り合った。(正因為是好不容易的重逢)', options: ['とあって', 'ゆえの', '極まる', 'の至り'], answer: 0 },
      { question: '「混雑」的讀音是？', options: ['こんざつ', 'こんさつ', 'ごんざつ', 'こんだく'], answer: 0 }
    ]
  },

  // ---- 第 136 關：完全無視困難 (〜をものともせずに / 〜をよそに) ----
  {
    id: 'n1_ch136',
    level: 'N1',
    title: '完全無視困難 (〜をものともせずに / 〜をよそに)',
    grammar: [
      {
        pattern: '名詞 ＋ をものともせずに',
        explanation: '完全無懼於...、將...克服。表示把原本會造成多大阻礙的困難完全不當一回事，勇敢克服並完成了壯舉。多用於讚美。',
        examples: [
          { jp: '彼(かれ)らは吹雪(ふぶき)をものともせずに、山頂(さんちょう)を目指(めざ)した。', romaji: 'Karera wa fubuki o mono to mo sezu ni, sanchō o mezashita.', zh: '他們完全無懼於暴風雪，向山頂邁進。' }
        ]
      },
      {
        pattern: '名詞 ＋ をよそに',
        explanation: '無視...、不顧...。表示無視周圍的意見、擔心或批評，依然我行我素地做自己的事。多用於負面評價。',
        examples: [
          { jp: '彼(かれ)は親(おや)の心配(しんぱい)をよそに、毎日(まいにち)遊(あそ)んでばかりいる。', romaji: 'Kare wa oya no shinpai o yoso ni, mainichi asonde bakari iru.', zh: '他不顧父母的擔心，每天光是玩。' }
        ]
      }
    ],
    vocabulary: [
      { word: '吹雪', reading: 'ふぶき', romaji: 'fubuki', meaning: '暴風雪' },
      { word: '山頂', reading: 'さんちょう', romaji: 'sanchō', meaning: '山頂' },
      { word: '目指す', reading: 'めざす', romaji: 'mezasu', meaning: '以...為目標 (I類動詞)' },
      { word: 'よそ', reading: 'よそ', romaji: 'yoso', meaning: '別處/旁觀' },
      { word: '心配', reading: 'しんぱい', romaji: 'shinpai', meaning: '擔心' },
      { word: '住民', reading: 'じゅうみん', romaji: 'jūmin', meaning: '居民' },
      { word: '反対', reading: 'はんたい', romaji: 'hantai', meaning: '反對' },
      { word: '建設', reading: 'けんせつ', romaji: 'kensetsu', meaning: '建設' },
      { word: '危険', reading: 'きけん', romaji: 'kiken', meaning: '危險' },
      { word: '進む', reading: 'すすむ', romaji: 'susumu', meaning: '前進 (I類動詞)' }
    ],
    quiz: [
      { question: '周囲の猛反対___、二人は結婚した。(無視周圍的意見)', options: ['をよそに', 'をものともせずに', 'を皮切りに', 'を限りに'], answer: 0 },
      { question: '危険___、消防士たちは火の中に飛び込んでいった。(勇於克服危險)', options: ['をものともせずに', 'をよそに', 'とあって', 'ゆえに'], answer: 0 },
      { question: '「吹雪」的讀音是？', options: ['ふぶき', 'しらゆき', 'ふゆき', 'ぶぶき'], answer: 0 },
      { question: '「よそ」的意思是？', options: ['自己人', '別處/他方/不關己', '預測', '結果'], answer: 1 },
      { question: '親の期待___、彼は勝手に学校を辞めてしまった。(無視期待)', options: ['をよそに', 'をものともせずに', 'たるもの', 'ともあろう'], answer: 0 }
    ]
  },

  // ---- 第 137 關：如果沒有...就無法 (〜なくしては / 〜なしに) ----
  {
    id: 'n1_ch137',
    level: 'N1',
    title: '如果沒有...就無法 (〜なくしては / 〜なしに)',
    grammar: [
      {
        pattern: '名詞 ＋ なくして（は） / なしには',
        explanation: '如果沒有...的話(就無法...)。表示前項是絕對不可或缺的條件，沒有它後項的結果就無法成立。後項必定是否定句。',
        examples: [
          { jp: '皆様(みなさま)のご協力(きょうりょく)なくしては、この大会(たいかい)の成功(せいこう)はあり得(え)ませんでした。', romaji: 'Minasama no gokyōryoku naku shite wa, kono taikai no seikō wa ariesen deshita.', zh: '如果沒有各位的協助，這場大會是不可能成功的。' },
          { jp: '涙(なみだ)なしには見(み)られない映画(えいが)。', romaji: 'Namida nashi ni wa mirarenai eiga.', zh: '無法不流著淚看的電影(沒流淚就看不下去的電影)。' }
        ]
      },
      {
        pattern: '名詞 ＋ なしに / なしで',
        explanation: '沒有...的狀態。不伴隨某事物就進行動作。例如：予告なしに(沒有預告地)。無需後項接否定。',
        examples: [
          { jp: '彼(かれ)は挨拶(あいさつ)なしに部屋(へや)を出(で)ていった。', romaji: 'Kare wa aisatsu nashi ni heya o dete itta.', zh: '他連聲招呼都沒打就走出了房間。' }
        ]
      }
    ],
    vocabulary: [
      { word: '協力', reading: 'きょうりょく', romaji: 'kyōryoku', meaning: '協力/幫忙' },
      { word: '成功', reading: 'せいこう', romaji: 'seikō', meaning: '成功' },
      { word: 'あり得る', reading: 'ありうる / ありえる', romaji: 'ariuru', meaning: '有可能的 (II類動詞)' },
      { word: '涙', reading: 'なみだ', romaji: 'namida', meaning: '眼淚' },
      { word: '予告', reading: 'よこく', romaji: 'yokoku', meaning: '預告' },
      { word: '挨拶', reading: 'あいさつ', romaji: 'aisatsu', meaning: '打招呼' },
      { word: '許可', reading: 'きょか', romaji: 'kyoka', meaning: '許可' },
      { word: '理解', reading: 'りかい', romaji: 'rikai', meaning: '理解' },
      { word: '発展', reading: 'はってん', romaji: 'hatten', meaning: '發展' },
      { word: '語る', reading: 'かたる', romaji: 'kataru', meaning: '講述 (I類動詞)' }
    ],
    quiz: [
      { question: '先生の指導___、私の合格はなかっただろう。(如果沒有)', options: ['なくしては', 'をよそに', 'をものともせずに', 'ばこそ'], answer: 0 },
      { question: '事前連絡___、急に休むのは困る。(不伴隨聯絡)', options: ['なしに', 'なくしては', 'とあって', 'ゆえに'], answer: 0 },
      { question: '「予告」的意思是？', options: ['警告', '預告', '告知', '宣告'], answer: 1 },
      { question: '努力___、成功は手に入らない。(沒有努力的話)', options: ['なしには', 'なしで', 'なしに', '三者皆可'], answer: 3 },
      { question: '「語る」的讀音是？', options: ['かたる', 'はなす', 'いう', 'さとる'], answer: 0 }
    ]
  },

  // ---- 第 138 關：有種壞傾向 / 落得...地步 (〜きらいがある / 〜始末だ) ----
  {
    id: 'n1_ch138',
    level: 'N1',
    title: '有種壞傾向 / 落得...地步 (〜きらいがある / 〜始末だ)',
    grammar: [
      {
        pattern: '動詞辭書形 / 名詞の ＋ きらいがある',
        explanation: '有...的不良傾向。表示某人或某事物具有一種令人不滿的習慣或趨勢。不能用於自己。',
        examples: [
          { jp: '彼(かれ)は物事(ものごと)を悲観的(ひかんてき)に考(かんが)えるきらいがある。', romaji: 'Kare wa monogoto o hikanteki ni kangaeru kirai ga aru.', zh: '他看待事物有悲觀的傾向。' }
        ]
      },
      {
        pattern: '動詞辭書形/ている/た ＋ 始末(しまつ)だ',
        explanation: '最終落得...的下場/地步。表示經過一連串不好的事情後，最後演變成極其糟糕的結局。常接「とうとう、最終的に」。',
        examples: [
          { jp: '息子(むすこ)は仕事(しごと)も辞(や)め、とうとう借金(しゃっきん)まで作る始末(しまつ)だ。', romaji: 'Musuko wa shigoto mo yame, tōtō shakkin made tsukuru shimatsu da.', zh: '兒子辭了工作，最後竟落得欠債的地步。' }
        ]
      }
    ],
    vocabulary: [
      { word: '嫌い', reading: 'きらい', romaji: 'kirai', meaning: '傾向/討厭' },
      { word: '始末', reading: 'しまつ', romaji: 'shimatsu', meaning: '結局/下場/處理' },
      { word: '物事', reading: 'ものごと', romaji: 'monogoto', meaning: '事物/事情' },
      { word: '悲観的', reading: 'ひかんてき', romaji: 'hikanteki', meaning: '悲觀的 (な形容詞)' },
      { word: '借金', reading: 'しゃっきん', romaji: 'shakkin', meaning: '借款/負債' },
      { word: '大げさ', reading: 'おおげさ', romaji: 'ōgesa', meaning: '誇張的 (な形容詞)' },
      { word: '逃げ出す', reading: 'にげだす', romaji: 'nigedasu', meaning: '逃跑/溜走 (I類動詞)' },
      { word: 'とうとう', reading: 'とうとう', romaji: 'tōtō', meaning: '到底/終於(接負面)' },
      { word: '傾向', reading: 'けいこう', romaji: 'keikō', meaning: '傾向' },
      { word: '辞める', reading: 'やめる', romaji: 'yameru', meaning: '辭職 (II類動詞)' }
    ],
    quiz: [
      { question: '現代の若者は、本を読まない___。(有不看書的不良傾向)', options: ['きらいがある', '始末だ', 'ずくめだ', 'まみれだ'], answer: 0 },
      { question: '彼は話を大げさに言う___。(有誇大其辭的傾向)', options: ['きらいがある', '始末だ', 'までもない', 'べくもない'], answer: 0 },
      { question: '「始末」的意思是？', options: ['開始', '結局/下場(多為糟)', '收拾', '皆可(多指結局及收拾)'], answer: 3 },
      { question: '遊んでばかりいて、とうとう留年する___。(落得被當的下場)', options: ['始末だ', 'きらいがある', 'の至りだ', '極まる'], answer: 0 },
      { question: '「悲観的」的讀音是？', options: ['ひかんてき', 'びかんてき', 'ひがいてき', 'びがいてき'], answer: 0 }
    ]
  },

  // ---- 第 139 關：絕對不可能做得到 (〜べくもない / 〜ようがない) ----
  {
    id: 'n1_ch139',
    level: 'N1',
    title: '絕對不可能做得到 (〜べくもない / 〜ようがない)',
    grammar: [
      {
        pattern: '動詞辭書形 ＋ べくもない',
        explanation: '根本不可能...、無從...。表示因為缺乏某條件或處於某狀態，所以想當然不可能做到某事。極度書面。常用「知るべくもない(無從得知)、望むべくもない(奢望不起)」。',
        examples: [
          { jp: '彼(かれ)が今(いま)どこで何(なに)をしているかなど、知(し)るべくもない。', romaji: 'Kare ga ima doko de nani o shite iru ka nado, shiru beku mo nai.', zh: '他現在在哪裡做什麼，我們無從得知。' }
        ]
      },
      {
        pattern: '動詞ます形去ます ＋ ようがない / ようもない',
        explanation: '無法...、沒有方法...。表示即使想做，也沒有方法或手段能做到。(N3已學，N1常做比較)。',
        examples: [
          { jp: '木(き)が腐(くさ)っていて、直(なお)しようがない。', romaji: 'Ki ga kusatte ite, naoshiyō ga nai.', zh: '木頭已經爛了，無法修補。' }
        ]
      }
    ],
    vocabulary: [
      { word: '望む', reading: 'のぞむ', romaji: 'nozomu', meaning: '期望/希望 (I類動詞)' },
      { word: '知る', reading: 'しる', romaji: 'shiru', meaning: '知道 (I類動詞)' },
      { word: '直す', reading: 'なおす', romaji: 'naosu', meaning: '修理 (I類動詞)' },
      { word: '腐る', reading: 'くさる', romaji: 'kusaru', meaning: '腐爛 (I類動詞)' },
      { word: '方法', reading: 'ほうほう', romaji: 'hōhō', meaning: '方法' },
      { word: '不可能', reading: 'ふかのう', romaji: 'fukanō', meaning: '不可能的 (な形容詞)' },
      { word: '勝利', reading: 'しょうり', romaji: 'shōri', meaning: '勝利' },
      { word: '比較', reading: 'ひかく', romaji: 'hikaku', meaning: '比較' },
      { word: '到底', reading: 'とうてい', romaji: 'tōtei', meaning: '到底/無論如何都(接否定)' },
      { word: '説明', reading: 'せつめい', romaji: 'setsumei', meaning: '說明' }
    ],
    quiz: [
      { question: '相手は世界チャンピオンだ。勝利など望む___。(根本不敢奢望)', options: ['べくもない', 'ようがない', 'きらいがある', '始末だ'], answer: 0 },
      { question: '電話番号も住所もわからないので、連絡の取り___。(沒有方法聯絡)', options: ['ようがない', 'べくもない', 'までもない', 'ずにはすまない'], answer: 0 },
      { question: '「腐る」的意思是？', options: ['生氣', '腐爛', '吃掉', '打破'], answer: 1 },
      { question: 'プロとアマチュアでは、比較する___。(無從比較)', options: ['べくもない', 'ようがない(方法論)', 'の両方可能', '都不對'], answer: 0 },
      { question: '「勝利」的讀音是？', options: ['しょうり', 'そうり', 'じょうり', 'ぞうり'], answer: 0 }
    ]
  },

  // ---- 第 140 關：即使不到... / 根本不須... (〜ないまでも / 〜までもない) ----
  {
    id: 'n1_ch140',
    level: 'N1',
    title: '即使不到... / 根本不須... (〜ないまでも / 〜までもない)',
    grammar: [
      {
        pattern: '動詞ない形 ＋ までも',
        explanation: '即使做不到...、就算不到...的程度(至少也...)。表示雖然達不到極端的A程度，但至少希望達到較低的B程度。',
        examples: [
          { jp: '毎日(まいにち)とは言(い)わないまでも、週(しゅう)に一回(いっかい)は電話(でんわ)してほしい。', romaji: 'Mainichi to wa iwanai made mo, shū ni ikkai wa denwa shite hoshii.', zh: '即使不說要每天，也希望你一週打一次電話來。' }
        ]
      },
      {
        pattern: '動詞辭書形 ＋ までもない / までもなく',
        explanation: '根本沒必要...。表示事情非常明顯或理所當然，不須刻意去做某動作。(也是N2句型，N1作為統整比較)。',
        examples: [
          { jp: '結果(けっか)は言(い)うまでもなく、我々(われわれ)の負(ま)けだ。', romaji: 'Kekka wa iu made mo naku, wareware no make da.', zh: '結果不用多說，是我們輸了。' }
        ]
      }
    ],
    vocabulary: [
      { word: '満点', reading: 'まんてん', romaji: 'manten', meaning: '滿分' },
      { word: '合格', reading: 'ごうかく', romaji: 'gōkaku', meaning: '及格' },
      { word: '我々', reading: 'われわれ', romaji: 'wareware', meaning: '我們' },
      { word: '週に一回', reading: 'しゅうにいっかい', romaji: 'shū ni ikkai', meaning: '一週一次' },
      { word: '電話', reading: 'でんわ', romaji: 'denwa', meaning: '電話' },
      { word: '確認', reading: 'かくにん', romaji: 'kakunin', meaning: '確認' },
      { word: '当然', reading: 'とうぜん', romaji: 'tōzen', meaning: '當然' },
      { word: '最高', reading: 'さいこう', romaji: 'saikō', meaning: '最高' },
      { word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: '道歉' },
      { word: '会う', reading: 'あう', romaji: 'au', meaning: '見面' }
    ],
    quiz: [
      { question: '満点は取れ___、合格ラインは超えたい。(即使拿不到滿分至少...)', options: ['ないまでも', 'までもない', 'べくもない', 'ようがない'], answer: 0 },
      { question: 'そんな簡単なこと、わざわざ説明する___。(根本沒必要說明)', options: ['までもない', 'ないまでも', 'きらいがある', '始末だ'], answer: 0 },
      { question: '「我々」的意思是？', options: ['他們', '我們', '我', '大家'], answer: 1 },
      { question: '賛成し___、せめて反対はしないでほしい。(即使不贊成至少...)', options: ['ないまでも', 'までもない', 'べくもない', 'ようがない'], answer: 0 },
      { question: '「満点」的讀音是？', options: ['まんてん', 'ばんてん', 'まんてい', 'ばんてい'], answer: 0 }
    ]
  },

  // ---- 第 141 關：攸關性命與波及範圍 (〜にかかわる / 〜に至るまで) ----
  {
    id: 'n1_ch141',
    level: 'N1',
    title: '攸關性命與波及範圍 (〜にかかわる / 〜に至るまで)',
    grammar: [
      {
        pattern: '名詞 ＋ にかかわる',
        explanation: '關係到...、攸關...。表示某件事情非常重大，將會影響到前項(如生命、名譽、死活等重大事物)。',
        examples: [
          { jp: 'これは人(ひと)の命(いのち)にかかわる重大(じゅうだい)な問題(もんだい)だ。', romaji: 'Kore wa hito no inochi ni kakawaru jūdai na mondai da.', zh: '這是攸關人命的重大問題。' }
        ]
      },
      {
        pattern: '名詞 ＋ に至(いた)るまで',
        explanation: '甚至連...都、直到...。強調範圍之廣大，連想不到的細節或極端的部分都包含在內。(N1初期也提過，這裡最為總結)。',
        examples: [
          { jp: '彼(かれ)は服装(ふくそう)から靴(くつ)に至(いた)るまで、全(すべ)てが高級(こうきゅう)ブランドだ。', romaji: 'Kare wa fukusō kara kutsu ni itaru made, subete ga kōkyū burando da.', zh: '他從衣服一直到鞋子，全身都是名牌。' }
        ]
      }
    ],
    vocabulary: [
      { word: '命', reading: 'いのち', romaji: 'inochi', meaning: '生命' },
      { word: '名誉', reading: 'めいよ', romaji: 'meiyo', meaning: '名譽' },
      { word: '信用', reading: 'しんよう', romaji: 'shinyō', meaning: '信用' },
      { word: '生死', reading: 'せいし', romaji: 'seishi', meaning: '生死' },
      { word: '死活', reading: 'しかつ', romaji: 'shikatsu', meaning: '死活' },
      { word: '重大', reading: 'じゅうだい', romaji: 'jūdai', meaning: '重大的 (な形容詞)' },
      { word: '服装', reading: 'ふくそう', romaji: 'fukusō', meaning: '服裝' },
      { word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: '鞋子' },
      { word: '高級', reading: 'こうきゅう', romaji: 'kōkyū', meaning: '高級的 (な形容詞)' },
      { word: 'ブランド', reading: 'ぶらんど', romaji: 'burando', meaning: '名牌/品牌' }
    ],
    quiz: [
      { question: '食品の偽装は、会社の信用___事件だ。(攸關信用)', options: ['にかかわる', 'に至るまで', 'をものともせずに', 'をよそに'], answer: 0 },
      { question: 'この計画は、会社の死活___問題です。(攸關死活)', options: ['にかかわる', 'に至るまで', 'ゆえに', 'とあって'], answer: 0 },
      { question: '「名誉」的讀音是？', options: ['めいよ', 'めいよう', 'なよ', 'なよう'], answer: 0 },
      { question: '彼は趣味の車___、すべてにお金をかけている。(甚至連...都)', options: ['に至るまで', 'にかかわる', 'をよそに', 'を皮切りに'], answer: 0 },
      { question: '「生死」的讀音是？', options: ['せいし', 'しょうし', 'せいじ', 'いきしに'], answer: 0 }
    ]
  },

  // ---- 第 142 關：如同... / 說著... (〜ごとく / 〜とばかりに) ----
  {
    id: 'n1_ch142',
    level: 'N1',
    title: '如同... / 說著... (〜ごとく / 〜とばかりに)',
    grammar: [
      {
        pattern: '動詞辭書/た形/名詞の ＋ ごとく / ごとき / ごと（比喻）',
        explanation: '宛如...一般、如同...。和「のように/のような」意思相同，但屬於極為古老、生硬的文言文表現。ごとく接動形、ごとき接名詞。',
        examples: [
          { jp: '湯(ゆ)水(みず)のごとくお金(かね)を使(つか)う。', romaji: 'Yumizu no gotoku okane o tsukau.', zh: '花錢如流水。' },
          { jp: '私(わたし)ごときが、このような大役(たいやく)を務(つと)められるでしょうか。', romaji: 'Watashi gotoki ga, kono yō na taiyaku o tsutomerareru deshō ka.', zh: '像我這樣的人，能勝任如此重任嗎？(自謙表現)' }
        ]
      },
      {
        pattern: '發言/感情 ＋ とばかり（に）',
        explanation: '顯出「...」的樣子、彷彿在說「...」一般。並沒有真的說出口，但動作神態就像是在表達那句話。不適用於說話者自身。',
        examples: [
          { jp: '彼(かれ)は「出(で)ていけ」とばかりに、ドアを指(さ)さした。', romaji: 'Kare wa "dete ike" to bakari ni, doa o sasu.', zh: '他指著門，彷彿在說「給我滾出去」。' }
        ]
      }
    ],
    vocabulary: [
      { word: '湯水', reading: 'ゆみず', romaji: 'yumizu', meaning: '熱水與冷水/流水' },
      { word: '大役', reading: 'たいやく', romaji: 'taiyaku', meaning: '重任' },
      { word: '務める', reading: 'つとめる', romaji: 'tsutomeru', meaning: '擔任/勝任 (II類動詞)' },
      { word: '指さす', reading: 'ゆびさす', romaji: 'yubisasu', meaning: '用手指 (I類動詞)' },
      { word: '帰れ', reading: 'かえれ', romaji: 'kaere', meaning: '回去！(命令形)' },
      { word: '出ていけ', reading: 'でていけ', romaji: 'dete ike', meaning: '滾出去！(命令形)' },
      { word: '嵐', reading: 'あらし', romaji: 'arashi', meaning: '暴風雨' },
      { word: '鬼', reading: 'おに', romaji: 'oni', meaning: '鬼' },
      { word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: '生氣 (I類動詞)' },
      { word: 'ため息', reading: 'ためいき', romaji: 'tameiki', meaning: '嘆氣' }
    ],
    quiz: [
      { question: '滝の___汗が流れた。(如同瀑布一般)', options: ['ごとく', 'ごとき', 'とばかりに', '手前'], answer: 0 },
      { question: '私___の若輩者が、意見を述べるのは恐縮です。(像我這樣的人)', options: ['ごとき', 'ごとく', 'とばかりに', 'ばこそ'], answer: 0 },
      { question: '「大役」的讀音是？', options: ['たいやく', 'だいやく', 'おおやく', 'だいえき'], answer: 0 },
      { question: '彼は「もう終わった」___深い大きなため息をついた。(彷彿在說)', options: ['とばかりに', 'ごとく', 'きらいがある', '始末だ'], answer: 0 },
      { question: '「湯水」的意思是？', options: ['水溝', '溫泉水', '熱水與冷水/比喻為不值錢或易消逝之物', '口水'], answer: 2 }
    ]
  },

  // ---- 第 143 關：JLPT N1 超生硬公文與文言文大盤點 ----
  {
    id: 'n1_ch143',
    level: 'N1',
    title: 'JLPT N1 超生硬公文與文言文大盤點',
    grammar: [
      {
        pattern: '〜を禁じ得ない / 〜の手前 / 〜たるもの (總結回顧)',
        explanation: '在N1文法中，許多表達屬於死語或只有在極度正式的公文、演講中才會出現。例如「を禁じ得ない」只會用在追悼會或正式感言；「たるもの」常用在教訓他人。',
        examples: [
          { jp: 'N1文法(ぶんぽう)は、日本人(にほんじん)すら使(つか)わないものがある。', romaji: 'N1 bunpō wa, nihonjin sura tsukawanai mono ga aru.', zh: 'N1文法中，甚至有連日本人都不用的東西。' }
        ]
      },
      {
        pattern: '〜べく / 〜まじき',
        explanation: '「動詞辭書形＋べく」表示為了...而...，是「ために」的文言文。「名詞＋にあるまじき＋名詞」表示身為該立場絕對不能有的行為。',
        examples: [
          { jp: 'これはプロにあるまじきミスだ。', romaji: 'Kore wa puro ni aru majiki misu da.', zh: '這是身為專業人士絕不該犯的錯誤。' }
        ]
      }
    ],
    vocabulary: [
      { word: '公文', reading: 'こうぶん', romaji: 'kōbun', meaning: '公文' },
      { word: '文言文', reading: 'ぶんごぶん', romaji: 'bungobun', meaning: '文言文/古文' },
      { word: '追悼会', reading: 'ついとうかい', romaji: 'tsuitōkai', meaning: '追悼會' },
      { word: '感言', reading: 'かんげん', romaji: 'kangen', meaning: '感言' },
      { word: '死語', reading: 'しご', romaji: 'shigo', meaning: '死語(沒人用的字)' },
      { word: 'プロ', reading: 'ぷろ', romaji: 'puro', meaning: '專業人士' },
      { word: 'あるまじき', reading: 'あるまじき', romaji: 'arumajiki', meaning: '絕不該有的' },
      { word: 'まじき', reading: 'まじき', romaji: 'majiki', meaning: '不該的' },
      { word: '許す', reading: 'ゆるす', romaji: 'yurusu', meaning: '原諒 (I類動詞)' },
      { word: 'ミス', reading: 'みす', romaji: 'misu', meaning: '錯誤(Miss)' }
    ],
    quiz: [
      { question: '学生にある___行為だ。(身為學生不該有的)', options: ['まじき', 'べく', 'ごとく', 'たるもの'], answer: 0 },
      { question: '目標を達成する___、彼は毎日練習している。(為了達成/文言)', options: ['べく', 'まじき', 'とばかりに', '手前'], answer: 0 },
      { question: '「追悼会」的讀音是？', options: ['ついとうかい', 'つどうかい', 'おもいかい', 'ずいとうかい'], answer: 0 },
      { question: '政治家にある___発言で、辞任することになった。(身為政治家不該有的)', options: ['まじき', 'べく', 'たる', 'ともあろう'], answer: 0 },
      { question: '「死語」的意思是？', options: ['沒人教的語言', '死後的世界', '廢棄不再使用的詞彙', '死者的遺言'], answer: 2 }
    ]
  }
];
