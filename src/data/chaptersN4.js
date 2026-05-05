// N4 章節資料 - 初級 (27章)
export const chaptersN4 = [
  // ---- 第 28 關：普通形變身 (動詞、形容詞、名詞的常體表現) ----
  {
    id: 'n4_ch28',
    level: 'N4',
    title: '普通形變身 (常體表現)',
    grammar: [
      {
        pattern: '動詞普通形（字典形、ない形、た形、なかった形）',
        explanation: '普通形（常體）是不帶「ます/です」的口語表現，常用於家人、朋友等親近的人之間的對話。也是許多進階文法的基礎接續型態。\n\n【型態轉變規則】\n1. 辞書形 (現在肯定)：\n   - I類動詞：將字尾的「い段」音改為「う段」音。例：書きます(kaki) -> 書く(kaku)、行きます(iki) -> 行く(iku)。\n   - II類動詞：去掉「ます」直接加「る」。例：食べます -> 食べる、見ます -> 見る。\n   - III類動詞：します -> する、きます -> くる。\n2. ない形 (現在否定)：\n   - I類動詞：將字尾的「い段」音改為「あ段」音 + ない。※字尾是「い」時改為「わ」。例：書きます -> 書かない、会います -> 会わない。\n   - II類動詞：去掉「ます」加「ない」。例：食べます -> 食べない。\n   - III類動詞：します -> しない、きます -> こない。\n3. た形 (過去肯定)：\n   - 變化規則完全同「て形」，只是把「て/で」改成「た/だ」。\n   - I類：い、ち、り -> った (買った)；み、び、に -> んだ (飲んだ)；き -> いた (書いた)；ぎ -> いだ (急いだ)；し -> した (話した)；※行く -> 行った。\n   - II類：去ます加た (食べた)。\n   - III類：した、きた。\n4. なかった形 (過去否定)：\n   - 將「ない形」的「ない」去掉，改為「なかった」。例：書かない -> 書かなかった、食べない -> 食べなかった。',
        examples: [
          { jp: '明日{あした}、東京{とうきょう}へ行{い}く。', romaji: 'Ashita, tōkyō e iku.', zh: '明天要去東京。（行く = 行きます）' },
          { jp: '昨日{きのう}は全然{ぜんぜん}勉強{べんきょう}しなかった。', romaji: 'Kinō wa zenzen benkyō shinakatta.', zh: '昨天完全沒讀書。（しなかった = しませんでした）' },
          { jp: '今晩{こんばん}、友達{ともだち}とご飯{はん}を食{た}べる。', romaji: 'Konban, tomodachi to gohan o taberu.', zh: '今晚要和朋友吃飯。（食べる = 食べます）' },
          { jp: 'その映画{えいが}、まだ見{み}ていない。', romaji: 'Sono eiga, mada mite inai.', zh: '那部電影我還沒看。（いない = いません）' },
          { jp: '先週{せんしゅう}、新{あたら}しいパソコンを買{か}った。', romaji: 'Senshū, atarashii pasokon o katta.', zh: '上週買了新電腦。（買った = 買いました）' }
        ]
      },
      {
        pattern: 'い形容詞 / な形容詞(だ) / 名詞(だ)',
        explanation: '形容詞與名詞的普通形變化：\n\n【い形容詞】\n- 變化規則：直接去掉句尾的「です」。\n- 現在肯定：面白い (面白いです)\n- 現在否定：面白くない (面白くないです / 面白くありません)\n- 過去肯定：面白かった (面白かったです)\n- 過去否定：面白くなかった (面白くなかったです / 面白くありませんでした)\n\n【な形容詞 / 名詞】\n- 變化規則：將「です」改為「だ」等相對應的變化。\n- 現在肯定：暇だ / 休みだ (暇です / 休みです)\n- 現在否定：暇じゃない / 休みじゃない (暇じゃありません)\n- 過去肯定：暇だった / 休みだった (暇でした)\n- 過去否定：暇じゃなかった / 休みじゃなかった (暇じゃありませんでした)',
        examples: [
          { jp: 'この本{ほん}はとても面白{おもしろ}い。', romaji: 'Kono hon wa totemo omoshiroi.', zh: '這本書非常有趣。（面白い = 面白いです）' },
          { jp: '今日{きょう}は会社{かいしゃ}が休{やす}みだ。', romaji: 'Kyō wa kaisha ga yasumi da.', zh: '今天公司放假。（休みだ = 休みです）' },
          { jp: '昨日{きのう}のテストは難{むずか}しくなかった。', romaji: 'Kinō no tesuto wa muzukashikunakatta.', zh: '昨天的考試不難。（難しくなかった = 難しくありませんでした）' },
          { jp: '昔{むかし}、ここは静{しず}かだった。', romaji: 'Mukashi, koko wa shizuka datta.', zh: '以前這裡很安靜。（静かだった = 静かでした）' },
          { jp: 'あの人{ひと}は学生{がくせい}じゃない。', romaji: 'Ano hito wa gakusei ja nai.', zh: '那個人不是學生。（じゃない = じゃありません）' }
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
      { word: '行く', reading: 'いく', romaji: 'iku', meaning: '去 (I類動詞)' }
    ],
    quiz: [
      { question: '「食べます」的普通形（現在肯定）是？', options: ['食べる', '食べた', '食べない', '食べなかった'], answer: 0 },
      { question: '「学生です」的普通形是？', options: ['学生', '学生だ', '学生な', '学生じゃない'], answer: 1 },
      { question: '「行きません」的普通形（現在否定）是？', options: ['行く', '行かない', '行った', '行かなかった'], answer: 1 },
      { question: '「暇」的意思是？', options: ['休息', '有趣的', '空閒的', '忙碌的'], answer: 2 },
      { question: '「忙しいです」的普通形是？', options: ['忙しいだ', '忙しい', '忙しくない', '忙しいな'], answer: 1 },
      { question: '「休まない」的普通形過去式是？', options: ['休まない', '休んだ', '休まなかった', '休まなくない'], answer: 2 },
      { question: '「静かです」的普通形過去式是？', options: ['静かだった', '静かだ', '静かじゃない', '静かな'], answer: 0 },
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
        explanation: '「んです」是強調、說明或尋求解釋的說法。通常用於：(1)解釋原因或理由；(2)要求對方詳細說明；(3)引起對方注意。相較於單純的「～です/ます」，「んです」帶有更多個人的情感、關心或是好奇心。在口語中非常常見，文章中則常寫作「～のです」。\n\n【型態轉變規則 (接續方法)】\n- 動詞：普通形 + んです (例：行くんです / 行かないんです / 行ったんです)\n- い形容詞：普通形 + んです (例：高いんです / 高くないんです / 高かったんです)\n- な形容詞：將字尾的「だ」改成「な」 + んです (例：静かだ -> 静かなんです / 静かじゃないんです)\n- 名詞：將字尾的「だ」改成「な」 + んです (例：病気だ -> 病気なんです / 病気じゃないんです)',
        examples: [
          { jp: 'どうして遅{おく}れたんですか。', romaji: 'Dōshite okureta n desu ka.', zh: '為什麼遲到了呢？（強烈詢問理由）' },
          { jp: 'バスが来{こ}なかったんです。', romaji: 'Basu ga konakatta n desu.', zh: '因為公車沒來啊。（解釋遲到的原因）' },
          { jp: '頭{あたま}が痛{いた}いんです。', romaji: 'Atama ga itai n desu.', zh: '因為我頭痛。（解釋自己不舒服的狀況）' },
          { jp: 'このケーキ、とても美味{おい}しいんです。', romaji: 'Kono kēki, totemo oishii n desu.', zh: '這個蛋糕，非常好吃喔。（強調自己的推薦）' },
          { jp: '私{わたし}は学生{がくせい}なんです。', romaji: 'Watashi wa gakusei nan desu.', zh: '因為我是學生啊。（說明身份以作為理由）' }
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
      { question: '明日テストが___んです。', options: ['あるな', 'ある', 'あるの', 'あるだ'], answer: 1 },
      { question: 'どうして___んですか。', options: ['泣いている', '泣くの', '泣いてだ', '泣きな'], answer: 0 },
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
        explanation: '可能形表示「擁有某種能力」或「客觀情況允許」做某事（= 能夠... / 可以... / 會...）。注意：使用可能形時，前面的受詞助詞通常會從「を」變成「が」。\n\n【型態轉變規則】\n1. I類動詞：將字尾的「う段」音改為同行的「え段」音，再加「る」。\n   - 書く (kaku) -> 書ける (kakeru) (會寫)\n   - 話す (hanasu) -> 話せる (hanaseru) (會說)\n   - 飲む (nomu) -> 飲める (nomeru) (能喝)\n2. II類動詞：去掉「ます/る」，加上「られる」。(口語中常把「ら」省略，變成「れる」，即所謂的「ら抜き言葉」)\n   - 食べる -> 食べられる (能吃)\n   - 見る -> 見られる (能看)\n3. III類動詞：不規則變化。\n   - する -> できる (會做 / 能做)\n   - くる -> こられる (能來)',
        examples: [
          { jp: '私{わたし}は日本語{にほんご}が話{はな}せます。', romaji: 'Watashi wa nihongo ga hanasemasu.', zh: '我會說日語。（話す -> 話せる）' },
          { jp: 'ここではタバコが吸{す}えません。', romaji: 'Koko de wa tabako ga suemasen.', zh: '這裡不能抽菸。（吸う -> 吸える -> 吸えない）' },
          { jp: '一人{ひとり}で病院{びょういん}へ行{い}けますか。', romaji: 'Hitori de byōin e ikemasu ka.', zh: '你一個人能去醫院嗎？（行く -> 行ける）' },
          { jp: '刺身{さしみ}が食{た}べられますか。', romaji: 'Sashimi ga taberaremasu ka.', zh: '你敢吃生魚片嗎？（食べる -> 食べられる）' },
          { jp: '明日{あした}は忙{いそが}しいので、パーティーに行{い}けません。', romaji: 'Ashita wa isogashii node, pātī ni ikemasen.', zh: '因為明天很忙，所以無法去派對。' }
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
      { word: 'ピアノ', reading: 'ピアノ', romaji: 'piano', meaning: '鋼琴' },
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
      { question: '「来る」的可能形是？', options: ['こられる', 'きられる', 'くられる', 'これる'], answer: 0 },
      { question: '刺身が___。', options: ['食べせます', '食べられます', '食べれます', '食べます'], answer: 1 },
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
        explanation: '表示同一個人在同一時間內「同時進行兩個動作」（一邊...一邊...）。\n重點在於：後面的動詞是「主要動作」，前面的動詞是「次要/附帶動作」。\n\n【型態轉變規則】\n- 將動詞的「ます形」去掉「ます」，直接接上「ながら」。\n- I類動詞：聞きます -> 聞き + ながら = 聞きながら\n- II類動詞：見ます -> 見 + ながら = 見ながら\n- III類動詞：します -> し + ながら = しながら',
        examples: [
          { jp: '音楽{おんがく}を聞{き}きながら、勉強{べんきょう}します。', romaji: 'Ongaku o kikinagara, benkyō shimasu.', zh: '一邊聽音樂一邊讀書。（讀書是主要動作）' },
          { jp: 'お茶{ちゃ}を飲{の}みながら、話{はな}しましょう。', romaji: 'O-cha o nominagara, hanashimashō.', zh: '我們邊喝茶邊聊吧。' },
          { jp: '運転{うんてん}しながら、電話{でんわ}をしてはいけません。', romaji: 'Unten shinagara, denwa o shite wa ikemasen.', zh: '不可以邊開車邊講電話。' },
          { jp: 'テレビを見{み}ながら、ご飯{はん}を食{た}べます。', romaji: 'Terebi o minagara, gohan o tabemasu.', zh: '邊看電視邊吃飯。' },
          { jp: '歩{ある}きながら、本{ほん}を読{よ}まないでください。', romaji: 'Arukinagara, hon o yomanaide kudasai.', zh: '請不要邊走路邊看書。' }
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
      { word: 'ガム', reading: 'ガム', romaji: 'gamu', meaning: '口香糖' },
    ],
    quiz: [
      { question: '音楽を聞き___、勉強します。', options: ['たり', 'ながら', 'て', 'から'], answer: 1 },
      { question: '「働く」的讀音是？', options: ['うごく', 'あるく', 'はたらく', 'いく'], answer: 2 },
      { question: 'テレビを___ながら、ご飯を食べます。(看)', options: ['見る', '見て', '見', '見た'], answer: 2 },
      { question: '「歩く」的意思是？', options: ['跑步', '跳躍', '走路', '駕駛'], answer: 2 },
      { question: '運転___ながら、電話をしてはいけません。', options: ['し', 'する', 'して', 'す'], answer: 0 },
      { question: 'お茶を___ながら、話しましょう。', options: ['飲む', '飲んで', '飲み', '飲ま'], answer: 2 },
      { question: '音楽を___ながら、掃除をします。', options: ['聞く', '聞き', '聞いて', '聞か'], answer: 1 },
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
        explanation: '在日文中，動詞、形容詞的「普通形」可以直接放在名詞前面，作為修飾語（類似中文的「～的」），用來構成較長的句子（連體修飾句）。\n\n【型態轉變與接續規則】\n- 動詞普通形 (辞書形/ない形/た形/なかった形) + 名詞。例：行く人 (去的人) / 行かない人 (不去的人) / 行った人 (去過的人)。\n- い形容詞：保持原樣 + 名詞。例：高い本 (貴的書)。\n- な形容詞：字尾保留「な」 + 名詞。例：静かな町 (安靜的城鎮)。\n- 名詞：名詞 +「の」+ 名詞。例：私の本 (我的書)。\n※特別注意：在修飾名詞的子句中，主詞的助詞通常會從「は」改為「が」。',
        examples: [
          { jp: 'これは私{わたし}が昨日{きのう}買{か}った本{ほん}です。', romaji: 'Kore wa watashi ga kinō katta hon desu.', zh: '這是我昨天買的書。（買った 修飾 本）' },
          { jp: 'メガネをかけている人{ひと}は田中{たなか}さんです。', romaji: 'Megane o kakete iru hito wa Tanaka-san desu.', zh: '戴著眼鏡的人是田中先生。（かけている 修飾 人）' },
          { jp: '母{はは}が作{つく}る料理{りょうり}が一番{いちばん}好{す}きです。', romaji: 'Haha ga tsukuru ryōri ga ichiban suki desu.', zh: '我最喜歡媽媽做的菜。（母が作る 修飾 料理）' },
          { jp: '明日{あした}提出{ていしゅつ}しないといけないレポートがあります。', romaji: 'Ashita teishutsu shinai to ikenai repōto ga arimasu.', zh: '有份明天必須提交的報告。（提出しないといけない 修飾 レポート）' },
          { jp: 'あそこで寝{ね}ている猫{ねこ}は私{わたし}のです。', romaji: 'Asoko de nete iru neko wa watashi no desu.', zh: '在那裡睡覺的貓是我的。（寝ている 修飾 猫）' }
        ]
      }
    ],
    vocabulary: [
      { word: '本', reading: 'ほん', romaji: 'hon', meaning: '書' },
      { word: '買う', reading: 'かう', romaji: 'kau', meaning: '買 (I類動詞)' },
      { word: '昨日', reading: 'きのう', romaji: 'kinō', meaning: '昨天' },
      { word: 'メガネ', reading: 'メガネ', romaji: 'megane', meaning: '眼鏡' },
      { word: 'かける', reading: 'かける', romaji: 'kakeru', meaning: '戴上(眼鏡等) (II類動詞)' },
      { word: '人', reading: 'ひと', romaji: 'hito', meaning: '人' },
      { word: '映画', reading: 'えいが', romaji: 'eiga', meaning: '電影' },
      { word: '見る', reading: 'みる', romaji: 'miru', meaning: '看 (II類動詞)' },
      { word: '料理', reading: 'りょうり', romaji: 'ryōri', meaning: '料理' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作/做 (I類動詞)' },
    ],
    quiz: [
      { question: '昨日___映画はとても面白かった。(看的)', options: ['見る', '見た', '見て', '見ない'], answer: 1 },
      { question: '母が___料理が一番好きです。(做的)', options: ['作る', '作った', '作って', '作らない'], answer: 0 },
      { question: '「かける」在這裡的意思是？', options: ['打電話', '花費(時間)', '戴上(眼鏡)', '懸掛'], answer: 2 },
      { question: '帽子をかぶって___人は誰ですか。(戴著)', options: ['いる', 'ある', 'みる', 'おく'], answer: 0 },
      { question: '「作る」的讀音是？', options: ['わかる', 'おくる', 'つくる', 'おこる'], answer: 2 },
      { question: 'これは私が___ケーキです。', options: ['作る', '作った', '作って', '作らない'], answer: 1 },
      { question: 'あそこで___人は田中さんです。', options: ['寝ている', '寝るの', '寝て', '寝たの'], answer: 0 },
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
        explanation: '表示「某個動作發生後，所留下來的自然結果與狀態」。通常用於描述眼前的客觀事實（不帶有人為意圖）。由於是描述狀態，助詞通常使用「が」。\n\n【自動詞與他動詞的差異】\n- 自動詞：動作自然發生，不需要接受動作的對象（受詞）。例如：開く(開)、閉まる(關)、つく(點亮)、消える(熄滅)、壊れる(壞掉)。',
        examples: [
          { jp: '窓{まど}が開{あ}いています。', romaji: 'Mado ga aite imasu.', zh: '窗戶開著。（客觀描述窗戶的狀態）' },
          { jp: 'このパソコンは壊{こわ}れています。', romaji: 'Kono pasokon wa kowarete imasu.', zh: '這台電腦壞了。（狀態一直持續）' },
          { jp: '部屋{へや}の電気{でんき}が消{き}えています。', romaji: 'Heya no denki ga kiete imasu.', zh: '房間的燈關著。（燈沒有亮著的狀態）' },
          { jp: 'ドアに鍵{かぎ}がかかっています。', romaji: 'Doa ni kagi ga kakatte imasu.', zh: '門上著鎖。（鎖著的狀態）' },
          { jp: '道{みち}が込{こ}んでいます。', romaji: 'Michi ga konde imasu.', zh: '路上正在塞車。（擁擠的狀態）' }
        ]
      },
      {
        pattern: '名詞 ＋ が ＋ 他動詞て形 ＋ あります',
        explanation: '表示「有人刻意做了某動作，且該動作的結果狀態保留到現在」。強調「人為的目的與意圖」，雖然不知道是誰做的，但明顯是人為的結果。即使原本他動詞搭配的是「を」，在這裡通常也會改成「が」。\n\n【常見他動詞】\n- 他動詞：有人為去執行的動作。例如：開ける(打開)、閉める(關上)、つける(打開電源)、消す(關閉電源)、貼る(貼上)、置く(放置)。',
        examples: [
          { jp: '壁{かべ}にカレンダーが貼{は}ってあります。', romaji: 'Kabe ni karendā ga hatte arimasu.', zh: '牆上貼著日曆。（有人為了看日期而貼的）' },
          { jp: '机{つくえ}の上{うえ}に本{ほん}が置{お}いてあります。', romaji: 'Tsukue no ue ni hon ga oite arimasu.', zh: '桌上放著書。（有人刻意放在那的）' },
          { jp: '窓{まど}が開{あ}けてあります。', romaji: 'Mado ga akete arimasu.', zh: '窗戶被打開著。（有人為了通風而刻意打開）' },
          { jp: 'ホワイトボードに字{じ}が書{か}いてあります。', romaji: 'Howaitobōdo ni ji ga kaite arimasu.', zh: '白板上寫著字。（有人為了某目的寫的）' },
          { jp: 'ビールは冷蔵庫{れいぞうこ}に入{い}れてあります。', romaji: 'Bīru wa reizōko ni irete arimasu.', zh: '啤酒已經放進冰箱裡了。（為了冰鎮而放）' }
        ]
      }
    ],
    vocabulary: [
      { word: '開く', reading: 'あく', romaji: 'aku', meaning: '開(自動詞) (I類動詞)' },
      { word: '閉まる', reading: 'しまる', romaji: 'shimaru', meaning: '關(自動詞) (I類動詞)' },
      { word: 'つく', reading: 'つく', romaji: 'tsuku', meaning: '開啟/點亮(自動詞) (I類動詞)' },
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
      { question: '壁にポスターが___。', options: ['貼っています', '貼ってあります', '貼ります', '貼るです'], answer: 1 },
      { question: '窓が___います。', options: ['開けて', '開いて', '開く', '開ける'], answer: 1 },
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
        explanation: '表示說話者自己已經決定好的一段時間的計畫或打算。「我打算... / 我想...」。與單純的意向形相比，加上「と思っています」表示這個想法在心中已經醞釀了一段時間，不是臨時起意的。\n\n【型態轉變規則 (意向形)】\n1. I類動詞：將字尾的「う段」音改為同行的「お段」音，再加「う」。\n   - 買う -> 買お + う = 買おう\n   - 行く -> 行こ + う = 行こう\n   - 話す -> 話そ + う = 話そう\n2. II類動詞：去掉「ます/る」，加「よう」。\n   - 食べる -> 食べよう\n   - 見る -> 見よう\n3. III類動詞：不規則變化。\n   - する -> しよう\n   - くる -> こよう',
        examples: [
          { jp: '週末{しゅうまつ}は海{うみ}へ行{い}こうと思{おも}っています。', romaji: 'Shūmatsu wa umi e ikō to omotte imasu.', zh: '我打算週末去海邊。（行こう = 行く的意向形）' },
          { jp: '来年{らいねん}、新{あたら}しい車{くるま}を買{か}おうと思{おも}っています。', romaji: 'Rainen, atarashii kuruma o kaō to omotte imasu.', zh: '我打算明年買新車。（買おう = 買う的意向形）' },
          { jp: '将来{しょうらい}、日本{にほん}で働{はたら}こうと思{おも}っています。', romaji: 'Shōrai, nihon de hatarakō to omotte imasu.', zh: '我將來打算在日本工作。（働こう = 働く的意向形）' },
          { jp: '今日{きょう}は早{はや}く帰{かえ}ろうと思{おも}っています。', romaji: 'Kyō wa hayaku kaerō to omotte imasu.', zh: '我今天打算早點回家。（帰ろう = 帰る的意向形）' },
          { jp: '日本語{にほんご}の勉強{べんきょう}を続{つづ}けようと思{おも}っています。', romaji: 'Nihongo no benkyō o tsuzukeyō to omotte imasu.', zh: '我打算繼續學日文。（続けよう = 続ける的意向形）' }
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
      { question: '来年、日本へ___と思っています。', options: ['行こう', '行く', '行った', '行か'], answer: 0 },
      { question: '新しい車を___と思っています。', options: ['買う', '買おう', '買って', '買った'], answer: 1 },
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
        explanation: '給予對方強烈的建議或忠告。「最好... / 最好不要...」。因為語氣強烈（暗示不這麼做的話會有不好的後果），通常用於上對下，或是明顯為對方著想的情況。對於長輩或不熟的人使用時會顯得不禮貌。\n\n【型態轉變規則】\n- 肯定建議：動詞た形 (過去式) + ほうがいいです。 (例：行ったほうがいいです / 食べたほうがいいです)\n- 否定建議：動詞ない形 (現在否定) + ほうがいいです。 (例：行かないほうがいいです / 食べないほうがいいです)',
        examples: [
          { jp: '毎日{まいにち}運動{うんどう}したほうがいいですよ。', romaji: 'Mainichi undō shita hō ga ii desu yo.', zh: '最好每天運動喔。（した = する的た形）' },
          { jp: '夜遅{よるおそ}くまで起{お}きていないほうがいいです。', romaji: 'Yoru osoku made okite inai hō ga ii desu.', zh: '最好不要熬夜到太晚。（いない = いる的ない形）' },
          { jp: '熱{ねつ}があるから、早{はや}く寝{ね}たほうがいいです。', romaji: 'Netsu ga aru kara, hayaku neta hō ga ii desu.', zh: '因為發燒了，所以最好早點睡。（寝た = 寝る的た形）' },
          { jp: 'タバコは吸{す}わないほうがいいですよ。', romaji: 'Tabako wa suwanai hō ga ii desu yo.', zh: '最好不要抽菸比較好喔。（吸わない = 吸う的ない形）' },
          { jp: '無理{むり}をしないほうがいいですよ。', romaji: 'Muri o shinai hō ga ii desu yo.', zh: '最好不要太勉強自己喔。（しない = する的ない形）' }
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
      { word: 'タバコ', reading: 'タバコ', romaji: 'tabako', meaning: '香菸' },
      { word: '吸う', reading: 'すう', romaji: 'sū', meaning: '吸(菸) (I類動詞)' },
      { word: '無理する', reading: 'むりする', romaji: 'muri suru', meaning: '勉強/硬撐 (III類動詞)' },
    ],
    quiz: [
      { question: '早く病院へ___ほうがいいです。(最好去)', options: ['行く', '行って', '行った', '行かない'], answer: 2 },
      { question: 'タバコは___ほうがいいです。(最好不要抽)', options: ['吸う', '吸った', '吸わなかった', '吸わない'], answer: 3 },
      { question: '「無理する」的意思是？', options: ['浪費', '生病', '勉強/硬撐', '休息'], answer: 2 },
      { question: '「遅い」的讀音是？', options: ['おそい', 'はやい', 'とおい', 'ちかい'], answer: 0 },
      { question: '薬を___ほうがいいですよ。(最好吃/喝)', options: ['飲んだ', '飲む', '飲んで', '飲まない'], answer: 0 },
      { question: '無理を___ほうがいいですよ。', options: ['しない', 'しなかった', 'する', 'して'], answer: 0 },
      { question: '早く___ほうがいいです。', options: ['寝た', '寝る', '寝て', '寝ない'], answer: 0 },
    ]
  },

  // ---- 第 36 關：絕對服從 (命令形與禁止形) ----
  {
    id: 'n4_ch36',
    level: 'N4',
    title: '絕對服從 (命令與禁止)',
    grammar: [
      {
        pattern: '動詞命令形 / 動詞辞書形＋な（禁止形）',
        explanation: '強烈的命令（去做！）或禁止（不准做！）。語氣非常強硬，通常只在以下情況使用：1. 緊急狀況(如逃生)；2. 交通標誌或口號；3. 上對下的強烈命令；4. 男性之間非常粗魯的對話。\n\n【型態轉變規則 (命令形)】\n1. I類動詞：將字尾的「う段」音改為同行的「え段」音。\n   - 行く -> 行け\n   - 飲む -> 飲め\n2. II類動詞：去掉「ます/る」，加「ろ」。\n   - 食べる -> 食べろ\n   - 見る -> 見ろ\n3. III類動詞：\n   - する -> しろ\n   - くる -> こい\n\n【型態轉變規則 (禁止形)】\n- 所有動詞：辞書形 + な。\n   - 行く -> 行くな (不准去)\n   - 食べる -> 食べるな (不准吃)',
        examples: [
          { jp: '急{いそ}げ！', romaji: 'Isoge!', zh: '快一點！（急ぐ的命令形）' },
          { jp: '触{さわ}るな！', romaji: 'Sawaru na!', zh: '不准摸！（触る的禁止形）' },
          { jp: '危{あぶ}ないから、あそこへ行{い}くな！', romaji: 'Abunai kara, asoko e iku na!', zh: '因為很危險，不准去那裡！（行く的禁止形）' },
          { jp: '頑張{がんば}れ！', romaji: 'Ganbare!', zh: '加油！（頑張る的命令形，常用於口號或運動比賽）' },
          { jp: '逃{に}げろ！', romaji: 'Nigero!', zh: '快逃！（逃げる的命令形，緊急情況使用）' }
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
      { question: '「飲む」的禁止形是？', options: ['飲むな', '飲め', '飲まない', '飲まないな'], answer: 0 },
      { question: '「する」的命令形是？', options: ['すれ', 'しろ', 'せよ', 'しな'], answer: 1 },
    ]
  },

  // ---- 第 37 關：如果...的話 (條件形「ば形」與「たら」) ----
  {
    id: 'n4_ch37',
    level: 'N4',
    title: '如果...的話 (假設條件)',
    grammar: [
      {
        pattern: '動詞ば形 / い形容詞ければ / な形容詞・名詞なら',
        explanation: '表示假設的條件「如果...的話」。這是最標準的條件句句型。\n\n【型態轉變規則 (ば形)】\n1. I類動詞：將字尾「う段」音改為同行的「え段」音，再加「ば」。(行く -> 行けば)\n2. II類動詞：去掉「ます/る」，加「れば」。(食べる -> 食べれば)\n3. III類動詞：する -> すれば、くる -> くれば。\n4. い形容詞：去掉字尾「い」，加「ければ」。(安い -> 安ければ / ない -> なければ)\n5. な形容詞/名詞：直接加「なら」。(暇 -> 暇なら / 雨 -> 雨なら)',
        examples: [
          { jp: '春{はる}になれば、桜{さくら}が咲{さ}きます。', romaji: 'Haru ni nareba, sakura ga sakimasu.', zh: '到了春天櫻花就會開。（なる -> なれば）' },
          { jp: '安{やす}ければ、買{か}います。', romaji: 'Yasukereba, kaimasu.', zh: '如果便宜的話，我就買。（安い -> 安ければ）' },
          { jp: '明日{あした}天気{てんき}が良{よ}ければ、海{うみ}に行{い}きましょう。', romaji: 'Ashita tenki ga yokereba, umi ni ikimashō.', zh: '明天如果天氣好，我們就去海邊吧。（いい -> よければ）' },
          { jp: '時間{じかん}がなければ、やらなくてもいいです。', romaji: 'Jikan ga nakereba, yaranakute mo ii desu.', zh: '如果沒時間的話，不做也可以。（ない -> なければ）' },
          { jp: 'ボタンを押{お}せば、水{みず}が出{で}ます。', romaji: 'Botan o oseba, mizu ga demasu.', zh: '如果按按鈕，水就會出來。（押す -> 押せば）' }
        ]
      },
      {
        pattern: '動詞/形容詞/名詞の た形 ＋ ら',
        explanation: '表示假設條件或時間先後。「如果...的話 / ...之後」。這是口語中最常用、限制最少的條件句。後半句常常是個人的意志、命令或請求。\n\n【接續規則】：全部使用「過去式(た形)」加上「ら」。\n- 動詞：行った + ら -> 行ったら\n- い形容詞：安かった + ら -> 安かったら\n- な形容詞/名詞：暇だった + ら -> 暇だったら',
        examples: [
          { jp: '雨{あめ}が降{ふ}ったら、家{いえ}にいます。', romaji: 'Ame ga futtara, ie ni imasu.', zh: '如果下雨的話，就待在家。（降る -> 降った -> 降ったら）' },
          { jp: '駅{えき}に着{つ}いたら、電話{でんわ}してください。', romaji: 'Eki ni tsuitara, denwa shite kudasai.', zh: '到了車站之後，請打電話給我。（時間先後：抵達之後）' },
          { jp: 'お金{かね}があったら、旅行{りょこう}したいです。', romaji: 'Okane ga attara, ryokō shitai desu.', zh: '如果有錢的話，想去旅行。（ある -> あった -> あったら）' },
          { jp: '仕事{しごと}が終{お}わったら、飲{の}みに行{い}きませんか。', romaji: 'Shigoto ga owattara, nomi ni ikimasen ka.', zh: '工作結束後，要不要去喝一杯？（終わる -> 終わった -> 終わったら）' },
          { jp: '嫌{いや}だったら、食{た}べなくてもいいですよ。', romaji: 'Iya dattara, tabenakute mo ii desu yo.', zh: '如果不喜歡的話，不吃也可以喔。（嫌だ -> 嫌だった -> 嫌だったら）' }
        ]
      },
      {
        pattern: '動詞辞書形 / 動詞ない形 ＋ と',
        explanation: '表示「一...就會... / 必然導致的結果」。常用於客觀的自然法則、真理、或是機器操作的說明。後半句【絕對不可以】接自己的意志、命令或請求。\n- 接續規則：只能接在現在式（辞書形/ない形）的後面。',
        examples: [
          { jp: '春{はる}になると、桜{さくら}が咲{さ}きます。', romaji: 'Haru ni naru to, sakura ga sakimasu.', zh: '一到春天，櫻花就會開。（自然法則）' },
          { jp: 'このボタンを押{お}すと、ドアが開{あ}きます。', romaji: 'Kono botan o osu to, doa ga akimasu.', zh: '一按這個按鈕，門就會打開。（機器操作）' },
          { jp: 'まっすぐ行{い}くと、右{みぎ}に銀行{ぎんこう}があります。', romaji: 'Massugu iku to, migi ni ginkō ga arimasu.', zh: '一直往前走，右邊就會有銀行。（指路說明）' },
          { jp: 'お酒{さけ}を飲{の}むと、顔{かお}が赤{あか}くなります。', romaji: 'Osake o nomu to, kao ga akaku narimasu.', zh: '一喝酒臉就會變紅。（生理現象）' },
          { jp: '薬{くすり}を飲{の}まないと、治{なお}りませんよ。', romaji: 'Kusuri o nomanai to, naorimasen yo.', zh: '不吃藥的話，就不會好喔。（必然結果）' }
        ]
      },
      {
        pattern: '普通形 / 名詞 ＋ なら',
        explanation: '表示「如果是那個情況的話...」。通常是承接對方的話題或剛獲得的情報，給予對方建議、忠告或判斷。名詞與な形容詞不用加「だ」。',
        examples: [
          { jp: '温泉{おんせん}へ行{い}くなら、箱根{はこね}がいいですよ。', romaji: 'Onsen e iku nara, Hakone ga ii desu yo.', zh: '如果要泡溫泉的話，箱根很不錯喔。（承接對方想泡溫泉的話題）' },
          { jp: 'パソコンを買{か}うなら、秋葉原{あきはばら}が安{やす}いです。', romaji: 'Pasokon o kau nara, Akihabara ga yasui desu.', zh: '如果想買電腦，秋葉原比較便宜。' },
          { jp: '疲{つか}れているなら、休{やす}んだほうがいいです。', romaji: 'Tsukarete iru nara, yasunda hō ga ii desu.', zh: '如果你覺得累的話，最好休息一下。（根據對方的狀態給建議）' },
          { jp: '明日{あした}雨{あめ}なら、試合{しあい}は中止{ちゅうし}です。', romaji: 'Ashita ame nara, shiai wa chūshi desu.', zh: '如果明天下雨的話，比賽就取消。（名詞+なら）' },
          { jp: '嫌{いや}なら、無理{むり}しなくてもいいですよ。', romaji: 'Iya nara, muri shinakute mo ii desu yo.', zh: '如果不願意的話，不用勉強喔。（な形容詞+なら）' }
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
      { question: '「食べる」的ば形是？', options: ['食べれば', '食べらば', '食べろば', '食べば'], answer: 0 },
      { question: '雨が___、行きません。', options: ['降ると', '降ったら', '降れば', '降るなら'], answer: 1 },
    ]
  },

  // ---- 第 38 關：照貓畫虎 (按照...去做：～とおりに) ----
  {
    id: 'n4_ch38',
    level: 'N4',
    title: '照貓畫虎 (～とおりに)',
    grammar: [
      {
        pattern: '動詞辞書形/た形 ＋ とおりに / 名詞 ＋ のとおりに',
        explanation: '表示與前面的事物完全一樣地執行動作。「按照... / 如同... / 照著...」。\n\n【型態轉變與接續】\n- 動詞辞書形 + とおりに：按照【接下來要做/預定的】事去做。(例：言うとおりに -> 按照我要說的去做)\n- 動詞た形 + とおりに：按照【已經發生/做過】的事去做。(例：言ったとおりに -> 按照我已經說過的去做)\n- 名詞 + の + とおりに：按照某個名詞所指示的。(例：説明書のとおりに -> 按照說明書)\n※若是名詞直接接續，也可以寫成「～どおりに」(例：予定どおりに、説明書どおりに)。',
        examples: [
          { jp: '私{わたし}が言{い}ったとおりに、書{か}いてください。', romaji: 'Watashi ga itta tōri ni, kaite kudasai.', zh: '請照著我已經說過的寫。' },
          { jp: '説明書{せつめいしょ}のとおりに、組{く}み立{た}てました。', romaji: 'Setsumeisho no tōri ni, kumitatemashita.', zh: '按照說明書組裝好了。' },
          { jp: '先生{せんせい}が教{おし}えたとおりに、作{つく}ってみました。', romaji: 'Sensei ga oshieta tōri ni, tsukutte mimashita.', zh: '按照老師教的試做看看了。' },
          { jp: '線{せん}のとおりに、紙{かみ}を切{き}ってください。', romaji: 'Sen no tōri ni, kami o kitte kudasai.', zh: '請沿著線把紙剪開。' },
          { jp: '見{み}たとおりに、話{はな}してください。', romaji: 'Mita tōri ni, hanashite kudasai.', zh: '請照著你看到的說出來。' }
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
      { question: '説明書の___に、使います。', options: ['とおり', 'どうり', 'まま', 'よう'], answer: 0 },
      { question: '見た___に、絵を描いてください。', options: ['とおり', 'よう', 'ため', 'から'], answer: 0 },
    ]
  },

  // ---- 第 39 關：為了某個期盼 (非意志目的：～ように) ----
  {
    id: 'n4_ch39',
    level: 'N4',
    title: '為了某個期盼 (～ように)',
    grammar: [
      {
        pattern: '非意志動詞辞書形/動詞ない形 ＋ ように',
        explanation: '表示為了達成某個目標狀態。「為了能夠... / 為了不要...」。\n注意：這與「ために(為了)」不同。「ように」前面通常接【不受個人意志直接控制的動詞】。\n\n【常接續的動詞類型】\n1. 可能形動詞：話せる(能說)、行ける(能去)。\n2. 無意志自動詞：わかる(明白)、見える(看得見)、聞こえる(聽得見)。\n3. 動詞ない形(否定)：忘れない(不忘記)、遅れない(不遲到)、風邪を引かない(不感冒)。',
        examples: [
          { jp: '日本語{にほんご}が話{はな}せるように、毎日{まいにち}練習{れんしゅう}します。', romaji: 'Nihongo ga hanaseru yō ni, mainichi renshū shimasu.', zh: '為了能說日語，我每天練習。（話せる為可能形）' },
          { jp: '風邪{かぜ}を引{ひ}かないように、気{き}をつけています。', romaji: 'Kaze o hikanai yō ni, ki o tsukete imasu.', zh: '為了不感冒，我很小心注意。（引かない為否定形）' },
          { jp: '忘{わす}れないように、メモをしておきます。', romaji: 'Wasurenai yō ni, memo o shite okimasu.', zh: '為了不要忘記，我會先做筆記。' },
          { jp: '後{うし}ろの人{ひと}にもよく見{み}えるように、大{おお}きく書{か}きました。', romaji: 'Ushiro no hito ni mo yoku mieru yō ni, ōkiku kakimashita.', zh: '為了讓後面的人也能看清楚，我寫得很大。（見える為無意志動詞）' },
          { jp: '新幹線{しんかんせん}の時間{じかん}に遅{おく}れないように、早{はや}く起{お}きました。', romaji: 'Shinkansen no jikan ni okurenai yō ni, hayaku okimashita.', zh: '為了趕上新幹線不遲到，我早起了。' }
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
      { question: '風邪を___ように、コートを着ます。', options: ['引かない', '引く', '引いた', '引いて'], answer: 0 },
      { question: '字が___ように、メガネをかけます。', options: ['見える', '見る', '見られる', '見せる'], answer: 0 },
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
        explanation: '表示將動作作為禮物「給予某人」或「接受某人為自己做某事」。\n\n【型態轉變與助詞規則】\n1. ～てあげる (我幫別人做 / 別人幫別人做)：\n   - Aは Bに ～てあげる。\n   - 若動詞的對象原本用「を」，此處仍然保留。(例：私は友達のパソコンを直してあげた)\n2. ～てもらう (我請/接受別人幫我做)：\n   - Aは Bに ～てもらう。 (A是接受恩惠的人，B是動作執行者)\n3. ～てくれる (別人主動幫我做)：\n   - Aは 私に ～てくれる。 (A是動作執行者，接受者一定是我或我這一方的人)',
        examples: [
          { jp: '私{わたし}は友達{ともだち}に日本語{にほんご}を教{おし}えてあげました。', romaji: 'Watashi wa tomodachi ni nihongo o oshiete agemashita.', zh: '我教了朋友日文。（我為朋友做）' },
          { jp: '私{わたし}は鈴木{すずき}さんに駅{えき}まで送{おく}ってもらいました。', romaji: 'Watashi wa Suzuki-san ni eki made okutte moraimashita.', zh: '我請鈴木先生送我到車站。（我接受恩惠）' },
          { jp: '母{はは}が弁当{べんとう}を作{つか}ってくれました。', romaji: 'Haha ga bentō o tsukutte kuremashita.', zh: '媽媽幫我做了便當。（媽媽為我做）' },
          { jp: '私{わたし}が写真{しゃしん}を撮{と}ってあげましょうか。', romaji: 'Watashi ga shashin o totte agemashō ka.', zh: '我來幫你拍照吧？（主動提出幫忙）' },
          { jp: '木村{きむら}さんが道{みち}を案内{あんない}してくれました。', romaji: 'Kimura-san ga michi o annai shite kuremashita.', zh: '木村先生幫我帶路了。（別人為我做）' }
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
      { question: '私は田中さんに本を貸して___ました。', options: ['あげ', 'くれ', 'もらい', 'いただき'], answer: 0 },
      { question: '妹が私にケーキを作って___ました。', options: ['くれ', 'もらい', 'あげ', 'やり'], answer: 0 },
    ]
  },

  // ---- 第 41 關：把動作當作名詞 (名詞化：V原のは / のが / のを) ----
  {
    id: 'n4_ch41',
    level: 'N4',
    title: '把動作當作名詞 (名詞化)',
    grammar: [
      {
        pattern: '動詞辞書形 ＋ のは / のが / のを',
        explanation: '「名詞化」是將一個動作子句轉換成名詞，才能在句子中擔任主詞或受詞。日文中，在動詞的普通形後面加上「の」，就可以把「做某事」變成名詞。\n\n【助詞的搭配】\n1. ～のは (做某事是...)：通常搭配評價或感覺的形容詞。例：面白い(有趣)、難しい(困難)。\n2. ～のが (對於做某事感到...)：通常搭配表示好惡或能力的形容詞。例：好き(喜歡)、上手(擅長)、速い(快)。\n3. ～のを (把做某事...)：當作他動詞的受詞。例：忘れる(忘記)、知っている(知道)。',
        examples: [
          { jp: '日本語{にほんご}を勉強{べんきょう}するのは面白{おもしろ}いです。', romaji: 'Nihongo o benkyō suru no wa omoshiroi desu.', zh: '學日文很有趣。（～のは＋評價）' },
          { jp: '私{わたし}は音楽{おんがく}を聞{き}くのが好{す}きです。', romaji: 'Watashi wa ongaku o kiku no ga suki desu.', zh: '我喜歡聽音樂。（～のが＋喜好）' },
          { jp: '薬{くすり}を飲{の}むのを忘{わす}れました。', romaji: 'Kusuri o nomu no o wasuremashita.', zh: '我忘記吃藥了。（～のを＋動詞）' },
          { jp: '田中{たなか}さんが来{こ}ないのを知{し}っていますか。', romaji: 'Tanaka-san ga konai no o shitte imasu ka.', zh: '你知道田中先生不來嗎？（ない形名詞化）' },
          { jp: '一人{ひとり}で暮{く}らすのは大変{たいへん}です。', romaji: 'Hitori de kurasu no wa taihen desu.', zh: '一個人生活很辛苦。（～のは＋評價）' }
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
      { question: 'スポーツを見る___好きです。', options: ['のが', 'のを', 'のは', 'のに'], answer: 0 },
      { question: '一人で旅行する___楽しいです。', options: ['のは', 'のを', 'のが', 'のに'], answer: 0 },
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
        explanation: '被動形表示「被某人做某事」，在日文中非常常用，特別是當某個動作對自己造成了麻煩、受害或困擾時（受害被動）。發出動作的人（加害者）後方會接助詞「に」。\n\n【型態轉變規則】\n1. I類動詞：將字尾的「う段」音改為同行的「あ段」音，加「れる」。(※字尾是「う」時改為「わ」)\n   - 踏む -> 踏まれる (被踩)\n   - 怒る -> 怒られる (被罵)\n   - 言う -> 言われる (被說)\n2. II類動詞：去掉「ます/る」，加「られる」。\n   - 褒める -> 褒められる (被稱讚)\n   - 見る -> 見られる (被看到)\n3. III類動詞：不規則變化。\n   - する -> される (被做)\n   - くる -> こられる (被來訪/造成困擾)',
        examples: [
          { jp: '私{わたし}は先生{せんせい}に褒{ほめ}られました。', romaji: 'Watashi wa sensei ni homeraremashita.', zh: '我被老師稱讚了。（褒める -> 褒められる）' },
          { jp: '電車{でんしゃ}で足{あし}を踏{ふ}まれました。', romaji: 'Densha de ashi o fumaremashita.', zh: '在電車上被踩到腳了。（踏む -> 踏まれる）' },
          { jp: '私{わたし}は母{はは}に叱{しか}られました。', romaji: 'Watashi wa haha ni shikararemashita.', zh: '我被媽媽罵了。（叱る -> 叱られる）' },
          { jp: '泥棒{どろぼう}に財布{さいふ}を盗{ぬす}まれました。', romaji: 'Dorobō ni saifu o nusumaremashita.', zh: '我的錢包被小偷偷了。（盗む -> 盗まれる）' },
          { jp: '昨日{きのう}、雨{あめ}に降{ふ}られて大変{たいへん}でした。', romaji: 'Kinō, ame ni furarete taihen deshita.', zh: '昨天被雨淋了，真慘。（降る -> 降られる，事物也能當加害者）' }
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
      { question: '私は母に___ました。', options: ['叱られ', '叱らせ', '叱り', '叱れ'], answer: 0 },
      { question: '「食べる」的被動形是？', options: ['食べられる', '食べさせる', '食べれる', '食べせる'], answer: 0 },
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
        explanation: '在句子中段使用「て形」，可以表示前半句是後半句的原因或理由。「因為...所以...」。\n注意限制：後半句【不能】接個人意志（如：想做）、命令（去...）、請求（請...）。通常後半句會接：(1)感情的產生；(2)可能或不可能的結果；(3)無法控制的自然結果。\n\n【型態轉變與接續規則】\n- 動詞：て形。例：聞いて (聽了之後/因為聽了)\n- い形容詞：去「い」加「くて」。例：大きくて (因為大)、難しくて (因為難)\n- な形容詞 / 名詞：加「で」。例：複雑で (因為複雜)、病気で (因為生病)',
        examples: [
          { jp: 'ニュースを聞{き}いて、びっくりしました。', romaji: 'Nyūsu o kiite, bikkuri shimashita.', zh: '聽到新聞，嚇了一跳。（動詞て形 + 感情）' },
          { jp: '風邪{かぜ}で、学校{がっこう}を休{やす}みました。', romaji: 'Kaze de, gakkō o yasumimashita.', zh: '因為感冒，所以向學校請了假。（名詞で + 結果）' },
          { jp: '問題{もんだい}が難{むずか}しくて、分{わ}かりません。', romaji: 'Mondai ga muzukashikute, wakarimasen.', zh: '因為問題太難，所以我不懂。（い形容詞くて + 不可能）' },
          { jp: '事故{じこ}があって、電車{でんしゃ}が遅{おく}れました。', romaji: 'Jiko ga atte, densha ga okuremashita.', zh: '因為發生事故，所以電車延誤了。（動詞て形 + 自然結果）' },
          { jp: '字{じ}が複雑{ふくざつ}で、読{よ}めません。', romaji: 'Ji ga fukuzatsu de, yomemasen.', zh: '因為字很複雜，所以我不會唸。（な形容詞で + 不可能）' }
        ]
      }
    ],
    vocabulary: [
      { word: 'ニュース', reading: 'ニュース', romaji: 'nyūsu', meaning: '新聞' },
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
      { question: 'テストが___、悲しいです。', options: ['難しくて', '難しいで', '難しく', '難しいくて'], answer: 0 },
      { question: '熱が___、休みます。', options: ['あって', 'あるで', 'ありて', 'あんで'], answer: 0 },
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
        explanation: '當你想把一個疑問句嵌入另一個大句子中時（例如：「請告訴我『幾點開會？』」），必須使用普通形並加上疑問詞。\n\n【兩種句型的差異與轉變規則】\n1. 句子本身有疑問詞 (誰、何、どこ、いつ)：\n   - 疑問詞 + 普通形 + か。(例：誰が来るか、知っていますか)\n2. 句子沒有疑問詞 (Yes/No問句)：\n   - 普通形 + かどうか。(例：美味しいかどうか、食べてみてください)\n※特別注意：名詞與な形容詞在接續時，【不要加だ】，直接接 か / かどうか。',
        examples: [
          { jp: '会議{かいぎ}は何時{なんじ}に始{はじ}まるか、知{し}っていますか。', romaji: 'Kaigi wa nan-ji ni hajimaru ka, shitte imasu ka.', zh: '你知道會議幾點開始嗎？（有疑問詞「何時」）' },
          { jp: 'その話{はなし}が本当{ほんとう}かどうか、分{わ}かりません。', romaji: 'Sono hanashi ga hontō ka dō ka, wakarimasen.', zh: '不知道那件事是不是真的。（Yes/No判斷，本当為な形容詞去だ）' },
          { jp: 'これが誰{だれ}の傘{かさ}か、教{おし}えてください。', romaji: 'Kore ga dare no kasa ka, oshiete kudasai.', zh: '請告訴我這是誰的傘。（名詞「傘」去だ直接接か）' },
          { jp: '明日{あした}パーティーに行{い}くかどうか、まだ決{き}めていません。', romaji: 'Ashita pātī ni iku ka dō ka, mada kimete imasen.', zh: '明天去不去派對，我還沒決定。（Yes/No判斷）' },
          { jp: '箱{はこ}の中{なか}に何{なに}が入{はい}っているか、見{み}てみましょう。', romaji: 'Hako no naka ni nani ga haitte iru ka, mite mimashō.', zh: '我們來看看箱子裡裝了什麼吧。（有疑問詞「何」）' }
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
      { question: '明日パーティーに行く___、分かりません。', options: ['かどうか', 'か', 'が', 'を'], answer: 0 },
      { question: 'これが誰の傘___、知っていますか。', options: ['か', 'かどうか', 'だ', 'な'], answer: 0 },
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
        explanation: '這是「行為授受（幫忙別人/請人幫忙）」的進階尊敬語與謙讓語版本。用於對象是長輩、上司或客戶時，以表達高度的敬意。\n\n【型態對應與接續】\n1. てあげる → てさしあげる (我為長輩做)：但因「我為你做」帶有施恩的感覺，直接對長輩說會很不禮貌，通常只用於描述給第三者聽，或是直接用「お＋動詞ます形＋する」代替。\n2. てもらう → ていただく (請長輩為我做)：非常常用，表示「承蒙您為我做...」。(例：教えていただく)\n3. てくれる → てくださる (長輩主動為我做)：表示「長輩賜予我某個行為」。(例：教えてくださる)',
        examples: [
          { jp: '先生{せんせい}に日本語{にほんご}を教{おし}えていただきました。', romaji: 'Sensei ni nihongo o oshiete itadakimashita.', zh: '承蒙老師教我日語。（我請老師教）' },
          { jp: '社長{しゃちょう}が私{わたし}に手紙{てがみ}を書{か}いてくださいました。', romaji: 'Shachō ga watashi ni tegami o kaite kudasaimashita.', zh: '社長寫了信給我。（社長主動寫）' },
          { jp: '部長{ぶちょう}にレポートを見{み}ていただきました。', romaji: 'Buchō ni repōto o mite itadakimashita.', zh: '請部長幫我看了報告。（我請部長看）' },
          { jp: 'お客様{きゃくさま}に道{みち}を案内{あんない}してさしあげました。', romaji: 'O-kyakusama ni michi o annai shite sashiagemashita.', zh: '我為客人帶了路。（我為長輩做）' },
          { jp: '先生{せんせい}が本{ほん}を貸{か}してくださいました。', romaji: 'Sensei ga hon o kashite kudasaimashita.', zh: '老師借了書給我。（老師主動借）' }
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
      { question: '先生が本を貸して___ました。', options: ['ください', 'いただき', 'さしあげ', 'もらい'], answer: 0 },
      { question: '私は社長に傘をお貸しして___ました。', options: ['さしあげ', 'いただき', 'ください', 'あげ'], answer: 0 },
    ]
  },

  // ---- 第 46 關：為了明確目標 (意志目的：～ために) ----
  {
    id: 'n4_ch46',
    level: 'N4',
    title: '為了明確目標 (～ために)',
    grammar: [
      {
        pattern: '動詞辞書形/名詞＋の ＋ ために',
        explanation: '表示具有明確個人意志的「目的」。「為了(做)...」。與「ように」不同，「ために」前後句的主語必須是同一個人，且前面的動詞必須是【可以用意志控制的動詞】。\n\n【接續與型態轉變】\n- 動詞：辞書形 + ために。(例：買うために -> 為了買)\n- 名詞：名詞 + の + ために。(例：家族のために -> 為了家人)\n※特別注意：如果是「ために」後面直接接名詞，會變成「ための」。(例：家族のための料理 -> 為了家人做的料理)',
        examples: [
          { jp: '家{いえ}を買{か}うために、貯金{ちょきん}しています。', romaji: 'Ie o kau tame ni, chokin shite imasu.', zh: '為了買房子，我正在存錢。（買房子是意志動詞）' },
          { jp: '家族{かぞく}のために、一生懸命{いっしょうけんめい}働{はたら}きます。', romaji: 'Kazoku no tame ni, isshōkenmei hatarakimasu.', zh: '為了家人，我拼命工作。（名詞+の+ために）' },
          { jp: '健康{けんこう}のために、毎朝{まいあさ}走{はし}っています。', romaji: 'Kenkō no tame ni, maiasa hashitte imasu.', zh: '為了健康，我每天早上跑步。' },
          { jp: '大学{だいがく}に入{はい}るために、勉強{べんきょう}しています。', romaji: 'Daigaku ni hairu tame ni, benkyō shite imasu.', zh: '為了考上大學，我正在讀書。' },
          { jp: 'これは会社{かいしゃ}に行{い}くための靴{くつ}です。', romaji: 'Kore wa kaisha ni iku tame no kutsu desu.', zh: '這是為了去公司穿的鞋子。（ための + 名詞）' }
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
      { question: '家族の___、家を買います。', options: ['ために', 'ように', 'から', 'ので'], answer: 0 },
      { question: '漢字を覚える___、毎日書いています。', options: ['ために', 'ように', 'から', 'ので'], answer: 0 },
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
        explanation: '「樣態」的そうです，表示說話者根據眼睛看到的表面狀況，所做出的直覺判斷。「看起來好像(會)...」。\n\n【接續與型態轉變】\n- 動詞：ます形去掉「ます」 + そうです。 (例：降ります -> 降りそうです / 落ちます -> 落ちそうです)\n- い形容詞：去掉字尾「い」 + そうです。 (例：美味しい -> 美味しそうです / 忙しい -> 忙しそうです)\n  ※特例：「いい(好)」變成「よさそうです」、「ない(沒有)」變成「なさそうです」。\n- な形容詞：直接接 そうです。 (例：元気 -> 元気そうです / 暇 -> 暇そうです)\n※名詞【不可以】接樣態的そうです。',
        examples: [
          { jp: 'このケーキはとても美味{おい}しそうです。', romaji: 'Kono kēki wa totemo oishisō desu.', zh: '這個蛋糕看起來非常好吃。（美味しい去い）' },
          { jp: '今{いま}にも雨{あめ}が降{ふ}りそうです。', romaji: 'Imanimo ame ga furisō desu.', zh: '看起來馬上就要下雨了。（降ります去ます）' },
          { jp: 'あの人{ひと}はとても元気{げんき}そうです。', romaji: 'Ano hito wa totemo genkisō desu.', zh: '那個人看起來很有精神。（元気な形容詞）' },
          { jp: '荷物{にもつ}が重{おも}そうですね、持{も}ちましょうか。', romaji: 'Nimotsu ga omosō desu ne, mochimashō ka.', zh: '行李看起來很重呢，我來幫你拿吧？（重い去い）' },
          { jp: 'ボタンが落{お}ちそうです。', romaji: 'Botan ga ochisō desu.', zh: '按鈕看起來快掉了。（落ちます去ます）' }
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
      { question: 'この料理は辛___。', options: ['そうです', 'いそうです', 'だそうです', 'なそうです'], answer: 0 },
      { question: '雨が降り___です。', options: ['そう', 'るそう', 'たそう', 'てそう'], answer: 0 },
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
        explanation: '表示動作或狀態的程度「超出了適當的範圍」，通常帶有負面、不好的語氣。「太過於... / ...過頭了」。\n\n【接續與型態變化】\n- 與「樣態的そうです」接續完全相同！\n- 動詞：ます形去掉「ます」 + すぎます。 (例：飲みます -> 飲みすぎます)\n- い形容詞：去掉字尾「い」 + すぎます。 (例：高い -> 高すぎます)\n- な形容詞：直接接 すぎます。 (例：静か -> 静かすぎます)\n※接續後，「～すぎる」可以當作一個II類動詞來做各種變化 (如：すぎました、すぎないで)。',
        examples: [
          { jp: '昨夜{ゆうべ}、お酒{さけ}を飲{の}みすぎました。', romaji: 'Yūbe, o-sake o nomisugimashita.', zh: '昨晚酒喝太多了。（飲みます去ます）' },
          { jp: 'この問題{もんだい}は難{むずか}しすぎます。', romaji: 'Kono mondai wa muzukashisugimasu.', zh: '這個問題太難了。（難しい去い）' },
          { jp: 'この服{ふく}は私{わたし}には大{おお}きすぎます。', romaji: 'Kono fuku wa watashi ni wa ōkisugimasu.', zh: '這件衣服對我來說太大了。（大きい去い）' },
          { jp: 'テレビを見{み}すぎないでください。', romaji: 'Terebi o misuginaide kudasai.', zh: '請不要看電視看太久。（見ます去ます + すぎないで）' },
          { jp: 'この町{まち}は静{しず}かすぎて、つまらないです。', romaji: 'Kono machi wa shizukasugite, tsumaranai desu.', zh: '這個城鎮太安靜了，很無聊。（静かな形容詞）' }
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
      { question: '「昨夜」的常用讀音（表示昨晚）是？', options: ['さくや', 'ゆうべ', 'きのうのよる', 'あしたのよる'], answer: 1 },
      { question: 'このテレビは___すぎます。', options: ['高', '高い', '高く', '高て'], answer: 0 },
      { question: 'お酒を飲み___ました。', options: ['すぎ', 'やすい', 'にくい', 'たい'], answer: 0 },
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
        explanation: '表示做某件事的難易度，或是某事物容易/不容易發生某種物理變化。「やすい」表示容易做，「にくい」表示很難做、不容易發生。\n\n【接續與型態變化】\n- 將動詞「ます形」去掉「ます」，加上「やすい/にくい」。(例：食べます -> 食べやすい)\n- 加完之後，整個詞就當作【い形容詞】來變化。\n  - 現在肯定：書きやすいです\n  - 過去肯定：書きやすかったです\n  - 否定：書きやすくないです\n  - 修飾名詞：書きやすいペン (好寫的筆)',
        examples: [
          { jp: 'この靴{くつ}はとても歩{ある}きやすいです。', romaji: 'Kono kutsu wa totemo arukiyasui desu.', zh: '這雙鞋非常好走。（歩きます去ます）' },
          { jp: 'この薬{くすり}は苦{にが}くて飲{の}みにくいです。', romaji: 'Kono kusuri wa nigakute nominikui desu.', zh: '這藥很苦很難吃。（飲みます去ます）' },
          { jp: 'このガラスは割{わ}れやすいので、注意{ちゅうい}してください。', romaji: 'Kono garasu wa wareyasui node, chūi shite kudasai.', zh: '這玻璃很容易破，請小心。（割れます去ます）' },
          { jp: 'あの先生{せんせい}の説明{せつめい}は分{わ}かりにくいです。', romaji: 'Ano sensei no setsumei wa wakarinikui desu.', zh: '那位老師的說明很難懂。（分かります去ます）' },
          { jp: 'これは使{つか}いやすいパソコンですね。', romaji: 'Kore wa tsukaiyasui pasokon desu ne.', zh: '這是一台很好用的電腦呢。（い形容詞修飾名詞）' }
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
      { word: 'ガラス', reading: 'ガラス', romaji: 'garasu', meaning: '玻璃' },
    ],
    quiz: [
      { question: 'このペンは書き___。(很好寫)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 0 },
      { question: '「滑る」的意思是？', options: ['滑倒/打滑', '跌倒', '飛', '跳'], answer: 0 },
      { question: 'ガラスは割れ___。(容易破)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 0 },
      { question: '漢字は覚え___です。(很難記)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 1 },
      { question: '「割れる」的讀音是？', options: ['われる', 'こわれる', 'おれる', 'きれる'], answer: 0 },
      { question: 'この靴は歩き___です。', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 0 },
      { question: 'この本は字が小さくて読み___です。', options: ['にくい', 'やすい', 'たい', 'ながら'], answer: 0 },
    ]
  },

  // ---- 第 50 關：就在這一瞬間 (動作時間點：～ところです) ----
  {
    id: 'n4_ch50',
    level: 'N4',
    title: '就在這一瞬間 (～ところです)',
    grammar: [
      {
        pattern: '動詞辞書形/て形いる/た形 ＋ ところです',
        explanation: '表示動作正處於哪個精確的時間點或階段。「ところ」原本是「場所」的意思，在這裡轉化為「時間的點」。\n\n【三個階段的接續】\n1. 動作剛要開始：動詞辞書形 + ところです。(正準備要... / 正要開始...)\n   - 搭配副詞：今から、これから。\n2. 動作正在進行：動詞て形 + いるところです。(正在...當中)\n   - 搭配副詞：今、ちょうど。\n3. 動作剛剛結束：動詞た形 + ところです。(剛剛才...結束)\n   - 搭配副詞：たった今。\n   - 與「～たばかり(剛剛...)」的差別：たった今必須是真的剛過幾秒/幾分鐘，而たばかり可以是心理上的感覺(如：昨天才剛買)。',
        examples: [
          { jp: '今{いま}からご飯{ごはん}を食{た}べるところです。', romaji: 'Ima kara gohan o taberu tokoro desu.', zh: '現在正準備要吃飯。（辞書形：正要開始）' },
          { jp: '今{いま}、部屋{へや}を掃除{そうじ}しているところです。', romaji: 'Ima, heya o sōji shite iru tokoro desu.', zh: '現在正在打掃房間。（て形いる：正在進行）' },
          { jp: 'たった今{いま}、バスが出発{しゅっぱつ}したところです。', romaji: 'Tattaima, basu ga shuppatsu shita tokoro desu.', zh: '公車剛剛才出發。（た形：剛結束）' },
          { jp: 'ちょうど会議{かいぎ}が終{お}わったところです。', romaji: 'Chōdo kaigi ga owatta tokoro desu.', zh: '會議剛剛正好結束。（た形：剛結束）' },
          { jp: 'これから出{で}かけるところです。', romaji: 'Kore kara dekakeru tokoro desu.', zh: '現在正準備要出門。（辞書形：正要開始）' }
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
      { question: '今からご飯を食べる___です。', options: ['ところ', 'ばかり', 'ため', 'よう'], answer: 0 },
      { question: '今、部屋を掃除して___ところです。', options: ['いる', 'ある', 'みる', 'おく'], answer: 0 },
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
        explanation: '「傳聞」的そうです，表示從別的地方聽來的客觀情報。「聽說...」。常常與「～によると(根據...)」連用，標示情報來源。\n\n【接續與型態變化 (與樣態完全不同)】\n傳聞必須接「普通形（常體）」！\n- 動詞：普通形 + そうです。(例：降るそうです / 降らないそうです / 降ったそうです)\n- い形容詞：普通形 + そうです。(例：美味しいそうです)\n- な形容詞：普通形 + そうです。(例：暇だそうです)\n- 名詞：普通形 + そうです。(例：雨だそうです)\n※特別注意：名詞與な形容詞的現在肯定，【必須保留だ】！(例：元気だそうです)',
        examples: [
          { jp: '天気予報{てんきよほう}によると、明日{あした}は雨{あめ}だそうです。', romaji: 'Tenkiyohō ni yoru to, ashita wa ame da sō desu.', zh: '根據天氣預報，聽說明天會下雨。（名詞+だそうです）' },
          { jp: '山田{やまだ}さんは来月{らいげつ}結婚{けっこん}するそうです。', romaji: 'Yamada-san wa raigetsu kekkon suru sō desu.', zh: '聽說山田先生下個月要結婚。（動詞辞書形）' },
          { jp: 'あのレストランはとても美味{おい}しいそうです。', romaji: 'Ano resutoran wa totemo oishii sō desu.', zh: '聽說那家餐廳非常好吃。（い形容詞）' },
          { jp: '田中{たなか}さんは今日{きょう}、会社{かいしゃ}を休{やす}むそうです。', romaji: 'Tanaka-san wa kyō, kaisha o yasumu sō desu.', zh: '聽說田中先生今天向公司請假。' },
          { jp: '佐藤{さとう}さんの奥{おく}さんはとても綺麗{きれい}だそうです。', romaji: 'Satō-san no okusan wa totemo kirei da sō desu.', zh: '聽說佐藤先生的太太非常漂亮。（な形容詞+だそうです）' }
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
      { question: 'ニュースによると、明日は雪___そうです。', options: ['だ', 'な', 'の', '（不加）'], answer: 0 },
      { question: '田中さんは来月結婚___そうです。', options: ['する', 'し', 'して', 'した'], answer: 0 },
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
        explanation: '表示「指示、強迫某人做某事（強制）」或是「容許、讓某人做某事（容許）」。\n\n【型態轉變規則】\n1. I類動詞：將字尾的「う段」音改為同行的「あ段」音，加「せる」。(※字尾是「う」時改為「わ」)\n   - 読む -> 読ませる (讓...讀)\n   - 待つ -> 待たせる (讓...等)\n   - 買う -> 買わせる (讓...買)\n2. II類動詞：去掉「ます/る」，加「させる」。\n   - 食べる -> 食べさせる (讓...吃)\n   - 見る -> 見させる (讓...看)\n3. III類動詞：\n   - する -> させる (讓...做)\n   - くる -> こさせる (讓...來)\n\n【助詞的搭配】\n- 自動詞的使役句：Aは B【を】 走らせる。(讓B跑)\n- 他動詞的使役句：Aは B【に】 本【を】 読ませる。(讓B讀書)',
        examples: [
          { jp: '先生{せんせい}は学生{がくせい}に本{ほん}を読{よ}ませました。', romaji: 'Sensei wa gakusei ni hon o yomasemashita.', zh: '老師讓學生讀書。（他動詞，強制）' },
          { jp: '母{はは}は子供{こども}に野菜{やさい}を食{た}べさせます。', romaji: 'Haha wa kodomo ni yasai o tabesasemasu.', zh: '媽媽讓小孩吃蔬菜。（他動詞，強制）' },
          { jp: 'お母{かあ}さん、私{わたし}にこの服{ふく}を買{か}わせてください。', romaji: 'Okāsan, watashi ni kono fuku o kawasete kudasai.', zh: '媽媽，請讓我買這件衣服。（容許的請求）' },
          { jp: '社長{しゃちょう}は田中{たなか}さんを大阪{おおさか}へ出張{しゅっちょう}させました。', romaji: 'Shachō wa Tanaka-san o Ōsaka e shucchō sasemashita.', zh: '社長讓田中先生去大阪出差。（自動詞，助詞用を）' },
          { jp: '子供{こども}が泣{な}いているので、好{す}きなことをさせます。', romaji: 'Kodomo ga naite iru node, suki na koto o sasemasu.', zh: '因為小孩在哭，就讓他做喜歡的事吧。（容許）' }
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
      { question: '「飲む」的使役形是？', options: ['飲ませる', '飲まれる', '飲める', '飲みさせる'], answer: 0 },
      { question: '先生は学生に作文を___。', options: ['書かせました', '書かれました', '書けました', '書きました'], answer: 0 },
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
        explanation: '尊敬語是用來描述【長輩或客人的動作】，以抬高對方來表示敬意。\n\n【常見的三種形式】\n1. 特殊尊敬語（最常考且最尊貴）：\n   - 行く/来る/いる -> いらっしゃる\n   - 食べる/飲む -> 召し上がる\n   - 言う -> おっしゃる\n   - する -> なさる\n   - 見る -> ご覧になる\n   - 知っている -> ご存じだ\n2. お＋動詞ます形(去ます)＋になる：\n   - 帰る -> お帰りになる / 読む -> お読みになる\n3. 動詞被動形(～れる/られる)：\n   - 行く -> 行かれる / 言う -> 言われる',
        examples: [
          { jp: '社長{しゃちょう}はお帰{かえ}りになりました。', romaji: 'Shachō wa o-kaeri ni narimashita.', zh: '社長已經回去了。（お＋帰り＋になる）' },
          { jp: '先生{せんせい}は何{なに}を召{め}し上{あ}がりますか。', romaji: 'Sensei wa nani o meshiagarimasu ka.', zh: '老師您要吃/喝什麼？（食べる/飲む的特殊尊敬語）' },
          { jp: 'お客様{きゃくさま}がいらっしゃいました。', romaji: 'O-kyakusama ga irasshaimashita.', zh: '客人來了。（来る的特殊尊敬語）' },
          { jp: '先生{せんせい}は明日{あした}の会議{かいぎ}の時間{じかん}をご存{ぞん}じですか。', romaji: 'Sensei wa ashita no kaigi no jikan o gozonji desu ka.', zh: '老師您知道明天會議的時間嗎？（知っている的特殊尊敬語）' },
          { jp: '部長{ぶちょう}がそうおっしゃいました。', romaji: 'Buchō ga sō osshaimashita.', zh: '部長是這麼說的。（言う的特殊尊敬語）' }
        ]
      },
      {
        pattern: '謙讓語 (お＋動詞ます形＋する / 特殊謙讓語)',
        explanation: '謙讓語是用來描述【自己或自己這一方的人的動作】，藉由壓低自己來間接抬高對方。\n\n【常見的兩種形式】\n1. 特殊謙讓語（最常考）：\n   - 行く/来る -> 参る (まいる) / 伺う (拜訪：うかがう)\n   - いる -> おる\n   - 食べる/飲む/もらう -> いただく\n   - 言う -> 申す (もうす)\n   - する -> いたす\n   - 見る -> 拝見する (はいけんする)\n2. お＋動詞ます形(去ます)＋する：\n   - 持つ -> お持ちする / 呼ぶ -> お呼びする',
        examples: [
          { jp: '私{わたし}が荷物{にもつ}をお持{も}ちします。', romaji: 'Watashi ga nimotsu o o-mochi shimasu.', zh: '我來幫您拿行李。（お＋持ち＋する）' },
          { jp: '明日{あした}、３時{さんじ}に伺{うかが}います。', romaji: 'Ashita, san-ji ni ukagaimasu.', zh: '明天三點我會去拜訪您。（行く/訪問的特殊謙讓語）' },
          { jp: '私{わたし}は田中{たなか}と申{もう}します。', romaji: 'Watashi wa Tanaka to mōshimasu.', zh: '敝姓田中。（言う的特殊謙讓語）' },
          { jp: '資料{しりょう}を拝見{はいけん}しました。', romaji: 'Shiryō o haiken shimashita.', zh: '我已經看過資料了。（見る的特殊謙讓語）' },
          { jp: '喜{よろこ}んでお手伝{てつだ}いいたします。', romaji: 'Yorokonde o-tetsudai itashimasu.', zh: '我很樂意幫忙。（する的特殊謙讓語）' }
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
      { question: '「行く・来る」的謙讓語是？', options: ['いらっしゃる', '参る', 'いただく', '申す'], answer: 1 },
      { question: '「おっしゃる」的意思是？', options: ['吃/喝', '看', '做', '說(尊敬)'], answer: 3 },
      { question: '私が荷物をお持ち___。', options: ['します', 'なります', 'いらっしゃいます', 'なさります'], answer: 0 },
      { question: '「伺う」的意思包含？', options: ['問/聽/拜訪(謙讓)', '吃/喝(尊敬)', '說(尊敬)', '做(謙讓)'], answer: 0 },
      { question: '「食べる」的謙讓語是？', options: ['いただく', '召し上がる', 'おっしゃる', 'なさる'], answer: 0 },
      { question: '社長は新聞を___。', options: ['ご覧になります', '拝見します', '見られます', 'お見します'], answer: 0 },
    ]
  },

  // ---- 第 54 關：改變與決定 (～になる / ～にする) ----
  {
    id: 'n4_ch54',
    level: 'N4',
    title: '改變與決定 (なる / にする)',
    grammar: [
      {
        pattern: 'い形容詞(去い)く / な形容詞・名詞に ＋ なります',
        explanation: '表示事物「自然而然地發生改變，轉變成某種狀態」。「變得... / 成為...」。\n\n【型態轉變與接續】\n- い形容詞：去掉字尾「い」，加「く」＋ なります。(例：寒い -> 寒くなります)\n- な形容詞：去掉字尾「だ/な」，加「に」＋ なります。(例：元気 -> 元気になります)\n- 名詞：直接加「に」＋ なります。(例：医者 -> 医者になります)',
        examples: [
          { jp: '最近{さいきん}、寒{さむ}くなりました。', romaji: 'Saikin, samuku narimashita.', zh: '最近變冷了。（寒い -> 寒く）' },
          { jp: '彼{かれ}は医者{いしゃ}になりました。', romaji: 'Kare wa isha ni narimashita.', zh: '他成為了醫生。（名詞＋に）' },
          { jp: '薬{くすり}を飲{の}んで、元気{げんき}になりました。', romaji: 'Kusuri o nonde, genki ni narimashita.', zh: '吃了藥之後，變得有精神了。（元気＋に）' },
          { jp: '夜{よる}になって、暗{くら}くなりました。', romaji: 'Yoru ni natte, kuraku narimashita.', zh: '到了晚上，變暗了。（暗い -> 暗く）' },
          { jp: '日本語{にほんご}が上手{じょうず}になりましたね。', romaji: 'Nihongo ga jōzu ni narimashita ne.', zh: '你的日文變好了呢。（上手＋に）' }
        ]
      },
      {
        pattern: '名詞 ＋ にします',
        explanation: '表示經過思考後，「主觀的意志選擇或決定」。「決定是... / 就選...吧」。最常出現在餐廳點餐，或是會議決定時間、地點等情境。\n\n【與なります的差異】\n- ～になります：客觀的改變（天氣變冷、長大成為醫生）。\n- ～にします：主觀的選擇（菜單上有很多，我選咖啡）。',
        examples: [
          { jp: '私{わたし}はコーヒーにします。', romaji: 'Watashi wa kōhī ni shimasu.', zh: '我要咖啡。（點餐時的選擇）' },
          { jp: '明日{あした}の会議{かいぎ}は３時{さんじ}にします。', romaji: 'Ashita no kaigi wa san-ji ni shimasu.', zh: '明天的會議定在三點。（人為決定時間）' },
          { jp: '旅行{りょこう}は京都{きょうと}にします。', romaji: 'Ryokō wa Kyōto ni shimasu.', zh: '旅行的地點決定去京都。' },
          { jp: 'プレゼントはこの時計{とけい}にします。', romaji: 'Purezento wa kono tokei ni shimasu.', zh: '禮物就決定選這款手錶了。' },
          { jp: 'ホテルは駅{えき}の前{まえ}のホテルにします。', romaji: 'Hoteru wa eki no mae no hoteru ni shimasu.', zh: '飯店就決定選車站前面的那家。' }
        ]
      }
    ],
    vocabulary: [
      { word: 'なる', reading: 'なる', romaji: 'naru', meaning: '變成/成為 (I類動詞)' },
      { word: 'する', reading: 'する', romaji: 'suru', meaning: '做/決定 (III類動詞)' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '寒冷的 (い形容詞)' },
      { word: '医者', reading: 'いしゃ', romaji: 'isha', meaning: '醫生' },
      { word: '最近', reading: 'さいきん', romaji: 'saikin', meaning: '最近' },
      { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: '會議' },
      { word: '暖かい', reading: 'あたたかい', romaji: 'atatakai', meaning: '溫暖的 (い形容詞)' },
      { word: '丈夫', reading: 'じょうぶ', romaji: 'jōbu', meaning: '堅固的/健康的 (な形容詞)' },
      { word: '決める', reading: 'きめる', romaji: 'kimeru', meaning: '決定 (II類動詞)' },
      { word: '静か', reading: 'しずか', romaji: 'shizuka', meaning: '安靜的 (な形容詞)' },
    ],
    quiz: [
      { question: '私はコーヒー___します。(點餐：我要咖啡)', options: ['を', 'に', 'が', 'で'], answer: 1 },
      { question: '春になって、暖かく___。(變暖和了)', options: ['しました', 'なりました', 'ありました', 'いました'], answer: 1 },
      { question: '「医者」的意思是？', options: ['護士', '醫生', '老師', '律師'], answer: 1 },
      { question: '部屋が静か___なりました。(變得安靜)', options: ['く', 'に', 'な', 'で'], answer: 1 },
      { question: '「暖かい」的讀音是？', options: ['あたたかい', 'あつい', 'つめたい', 'すずしい'], answer: 0 },
      { question: '私は紅茶___します。', options: ['に', 'を', 'が', 'で'], answer: 0 },
      { question: '日本語が上手___なりました。', options: ['に', 'く', 'な', 'で'], answer: 0 },
    ]
  },

  // ---- 第 55 關：準備與嘗試 (～ておく / ～てみる) ----
  {
    id: 'n4_ch55',
    level: 'N4',
    title: '準備與嘗試 (ておく/てみる)',
    grammar: [
      {
        pattern: '動詞て形 ＋ おきます',
        explanation: '表示三種意義：\n1. 為了將來某個目的，【事先做好準備】。(例：旅行前先訂飯店)\n2. 為了下次使用，【處理善後】。(例：用完剪刀放回原處)\n3. 讓事物【保持原狀 / 放置不管】。(例：窗戶開著不用關)\n※在口語中，「～ておきます」常常縮音為「～ときます」；「～ておいて」縮音為「～といて」。',
        examples: [
          { jp: '旅行{りょこう}の前{まえ}に、ホテルを予約{よやく}しておきます。', romaji: 'Ryokō no mae ni, hoteru o yoyaku shite okimasu.', zh: '旅行前，我會事先預約好飯店。（事前準備）' },
          { jp: '使{つか}った後{あと}で、ハサミを戻{もど}しておいてください。', romaji: 'Tsukatta ato de, hasami o modoshite oite kudasai.', zh: '使用完後，請把剪刀放回原處。（事後善後）' },
          { jp: '窓{まど}はそのまま開{あ}けておいてください。', romaji: 'Mado wa sono mama akete oite kudasai.', zh: '窗戶請保持開著。（保持原狀）' },
          { jp: '明日{あした}の会議{かいぎ}の資料{しりょう}を読{よ}んでおきます。', romaji: 'Ashita no kaigi no shiryō o yonde okimasu.', zh: '我會事先讀好明天會議的資料。（事前準備）' },
          { jp: '時間{じかん}がないから、これはここに置{お}いといて。', romaji: 'Jikan ga nai kara, kore wa koko ni oitoite.', zh: '因為沒時間了，這個就先放這裡。（口語縮音：置いておいて -> 置いといて）' }
        ]
      },
      {
        pattern: '動詞て形 ＋ みます',
        explanation: '表示「嘗試做某事看看」。「...看看」。通常用於沒有做過的事情，或是請對方實際去體驗看看。',
        examples: [
          { jp: 'この靴{くつ}を履{は}いてみてもいいですか。', romaji: 'Kono kutsu o haite mite mo ii desu ka.', zh: '我可以試穿這雙鞋看看嗎？' },
          { jp: '美味{おい}しいから、食{た}べてみてください。', romaji: 'Oishii kara, tabete mite kudasai.', zh: '這很好吃，請吃吃看。' },
          { jp: 'サイズが合{あ}うかどうか、着{き}てみます。', romaji: 'Saizu ga au ka dō ka, kite mimasu.', zh: '為了確認尺寸合不合，我試穿看看。' },
          { jp: '分{わ}からないから、インターネットで調{しら}べてみます。', romaji: 'Wakaranai kara, intānetto de shirabete mimasu.', zh: '因為不懂，我上網查查看。' },
          { jp: '一度{いちど}、富士山{ふじさん}に登{のぼ}ってみたいです。', romaji: 'Ichido, Fujisan ni nobotte mitai desu.', zh: '真想去爬一次富士山看看。（～てみたい：想嘗試...）' }
        ]
      }
    ],
    vocabulary: [
      { word: '置く', reading: 'おく', romaji: 'oku', meaning: '放置/事先做好 (I類動詞)' },
      { word: '見る', reading: 'みる', romaji: 'miru', meaning: '看/嘗試 (II類動詞)' },
      { word: '予約する', reading: 'よやくする', romaji: 'yoyaku suru', meaning: '預約 (III類動詞)' },
      { word: '旅行', reading: 'りょこう', romaji: 'ryokō', meaning: '旅行' },
      { word: '履く', reading: 'はく', romaji: 'haku', meaning: '穿(下半身/鞋) (I類動詞)' },
      { word: 'ホテル', reading: 'ホテル', romaji: 'hoteru', meaning: '飯店' },
      { word: '切符', reading: 'きっぷ', romaji: 'kippu', meaning: '車票' },
      { word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: '思考 (II類動詞)' },
      { word: '開ける', reading: 'あける', romaji: 'akeru', meaning: '打開(他動) (II類動詞)' },
      { word: '閉める', reading: 'しめる', romaji: 'shimeru', meaning: '關閉(他動) (II類動詞)' },
    ],
    quiz: [
      { question: '明日までに切符を買って___。(事先買好)', options: ['おきます', 'みます', 'います', 'あります'], answer: 0 },
      { question: '美味しいかどうか、食べて___。(吃吃看)', options: ['おきます', 'みます', 'しまいます', 'あります'], answer: 1 },
      { question: '「予約する」的意思是？', options: ['準備', '預約', '約定', '購買'], answer: 1 },
      { question: 'ドアはそのままにして___。(讓它保持原樣/放置不管)', options: ['おいてください', 'みてください', 'いってください', 'きてください'], answer: 0 },
      { question: '「履く」的意思是？', options: ['穿(鞋/褲)', '穿(外套)', '戴(帽子)', '戴(眼鏡)'], answer: 0 },
      { question: '旅行の前に、ホテルを予約して___。', options: ['おきます', 'みます', 'あります', 'います'], answer: 0 },
      { question: 'この靴を履いて___もいいですか。', options: ['みて', 'おいて', 'あって', 'いて'], answer: 0 },
    ]
  },

  // ---- 第 56 關：徹底與遺憾 (～てしまう) ----
  {
    id: 'n4_ch56',
    level: 'N4',
    title: '徹底與遺憾 (～てしまう)',
    grammar: [
      {
        pattern: '動詞て形 ＋ しまいます',
        explanation: '表示兩種截然不同的語氣：\n1. 【徹底完成】：表示某個動作或任務已經全部結束、毫無保留。(例：吃光了、做完了)。常搭配「全部(ぜんぶ)」、「もう(已經)」。\n2. 【遺憾/懊悔】：表示不小心發生了某個意外，或是做了無法挽回的事，帶有遺憾、後悔、糟糕了的心情。(例：忘記了、弄壞了、弄丟了)。\n※口語縮約形：\n- ～てしまう -> ～ちゃう (例：食べちゃう)\n- ～でしまう -> ～じゃう (例：飲んじゃう)',
        examples: [
          { jp: '宿題{しゅくだい}は全部{ぜんぶ}やってしまいました。', romaji: 'Shukudai wa zenbu yatte shimaimashita.', zh: '作業全部做完了。（徹底完成）' },
          { jp: '買{か}ったばかりのケーキを全部{ぜんぶ}食{た}べてしまいました。', romaji: 'Katta bakari no kēki o zenbu tabete shimaimashita.', zh: '把剛買的蛋糕全部吃光了。（徹底完成）' },
          { jp: '電車{でんしゃ}に傘{かさ}を忘{わす}れてしまいました。', romaji: 'Densha ni kasa o wasurete shimaimashita.', zh: '不小心把傘忘在電車上了。（遺憾/糟糕了）' },
          { jp: 'あっ、コーヒーをこぼしてしまいました。', romaji: 'A, kōhī o koboshite shimaimashita.', zh: '啊，不小心把咖啡打翻了。（懊悔）' },
          { jp: 'パソコンが壊{こわ}れちゃった。', romaji: 'Pasokon ga kowarechatta.', zh: '糟糕，電腦壞掉了。（口語縮約：てしまった -> ちゃっ た）' }
        ]
      }
    ],
    vocabulary: [
      { word: 'しまう', reading: 'しまう', romaji: 'shimau', meaning: '收拾/結束 (I類動詞)' },
      { word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: '忘記 (II類動詞)' },
      { word: '宿題', reading: 'しゅくだい', romaji: 'shukudai', meaning: '作業' },
      { word: '全部', reading: 'ぜんぶ', romaji: 'zenbu', meaning: '全部' },
      { word: '傘', reading: 'かさ', romaji: 'kasa', meaning: '傘' },
      { word: '落とす', reading: 'おとす', romaji: 'otosu', meaning: '弄掉/掉落 (I類動詞)' },
      { word: '壊す', reading: 'こわす', romaji: 'kowasu', meaning: '弄壞 (I類動詞)' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到 (II類動詞)' },
      { word: '間違える', reading: 'まちがえる', romaji: 'machigaeru', meaning: '弄錯 (II類動詞)' },
      { word: 'パソコン', reading: 'パソコン', romaji: 'pasokon', meaning: '電腦' },
    ],
    quiz: [
      { question: '昨日買った本は、もう読んで___。(彻底讀完了)', options: ['みました', 'おきました', 'しまいました', 'ありました'], answer: 2 },
      { question: '「落とす」的意思是？', options: ['掉落/遺失', '弄壞', '忘記', '弄錯'], answer: 0 },
      { question: 'パスポートをなくして___。(糟糕，護照弄丟了)', options: ['しまいました', 'おきました', 'みました', 'いきました'], answer: 0 },
      { question: '「宿題」的讀音是？', options: ['しゅくだい', 'じゅくだい', 'しゅくたい', 'じゅくたい'], answer: 0 },
      { question: '「～てしまう」的口語縮略形「～ちゃう」是表示？', options: ['吃掉某物', '糟糕或徹底完成', '事先做好', '嘗試做'], answer: 1 },
      { question: '電車に傘を忘れて___。', options: ['おきました', 'しまいました', 'みました', 'ありました'], answer: 1 },
      { question: '宿題は全部やって___。', options: ['しまいました', 'おきました', 'みました', 'ありました'], answer: 0 },
    ]
  },

  // ---- 第 57 關：不僅與限定 (～し / ～しか) ----
  {
    id: 'n4_ch57',
    level: 'N4',
    title: '不僅與限定 (し / しか)',
    grammar: [
      {
        pattern: '普通形 ＋ し、 普通形 ＋ し、 ～',
        explanation: '表示「不僅...而且... / 再加上...」。用於並列列舉兩個以上的理由、優點或缺點。語氣比單純的「て」更強調各個項目的累積。\n\n【接續規則】\n- 必須接在【普通形】後面。\n- 動詞、い形容詞：直接接「し」。\n- な形容詞、名詞：必須加上「だ」再接「し」。(例：綺麗だし、学生だし)',
        examples: [
          { jp: 'この店{みせ}は美味{おい}しいし、安{やす}いし、よく来{き}ます。', romaji: 'Kono mise wa oishii shi, yasui shi, yoku kimasu.', zh: '這家店不但好吃而且便宜，所以我常來。' },
          { jp: '熱{ねつ}もあるし、頭{あたま}も痛{いた}いし、今日{きょう}は休{やす}みます。', romaji: 'Netsu mo aru shi, atama mo itai shi, kyō wa yasumimasu.', zh: '因為發燒加上頭痛，所以今天請假。' },
          { jp: '給料{きゅうりょう}もいいし、残業{ざんぎょう}もないし、いい会社{かいしゃ}です。', romaji: 'Kyūryō mo ii shi, zangyō mo nai shi, ii kaisha desu.', zh: '薪水不錯，又沒有加班，是家好公司。' },
          { jp: '駅{えき}から近{ちか}いし、静{しず}かだし、この部屋{へや}にします。', romaji: 'Eki kara chikai shi, shizuka da shi, kono heya ni shimasu.', zh: '離車站近又安靜，我決定要這個房間。（静かだし：な形容詞＋だ）' },
          { jp: '雨{あめ}も降{ふ}っているし、今日{きょう}は出{で}かけません。', romaji: 'Ame mo futte iru shi, kyō wa dekakemasen.', zh: '而且又在下雨，今天就不出門了。（有時可以只列舉一個理由，暗示還有其他原因）' }
        ]
      },
      {
        pattern: '名詞 ＋ しか ＋ 否定形',
        explanation: '表示限定的「只有... / 僅僅...」。\n\n【與「だけ」的差異】\n- だけ：可以用於肯定句。(例：千円だけあります -> 只有一千圓。客觀陳述)\n- しか：後面【必定接否定形】，且帶有說話者認為「實在太少了、不夠、很遺憾」的強烈負面情感。(例：千円しかありません -> 竟然只有一千圓，根本不夠啊！)',
        examples: [
          { jp: '財布{さいふ}に千円{せんえん}しかありません。', romaji: 'Saifu ni sen-en shika arimasen.', zh: '錢包裡竟然只有一千日圓。（語氣：太少了）' },
          { jp: '日本語{にほんご}が少{すこ}ししか話{はな}せません。', romaji: 'Nihongo ga sukoshi shika hanasemasen.', zh: '我只會說一點點日文。（語氣：還很不足）' },
          { jp: '昨日{きのう}は３時間{さんじかん}しか寝{ね}ていません。', romaji: 'Kinō wa san-jikan shika nete imasen.', zh: '昨天竟然只睡了三個小時。（語氣：睡眠不足）' },
          { jp: 'パーティーには５人{ごにん}しか来{き}ませんでした。', romaji: 'Pātī ni wa go-nin shika kimasen deshita.', zh: '派對竟然只有五個人來。（語氣：人太少了）' },
          { jp: '私{わたし}はひらがなしか読{よ}めません。', romaji: 'Watashi wa hiragana shika yomemasen.', zh: '我只看得懂平假名。（漢字片假名都不懂）' }
        ]
      }
    ],
    vocabulary: [
      { word: '美味しい', reading: 'おいしい', romaji: 'oishii', meaning: '好吃的 (い形容詞)' },
      { word: '安い', reading: 'やすい', romaji: 'yasui', meaning: '便宜的 (い形容詞)' },
      { word: '熱', reading: 'ねつ', romaji: 'netsu', meaning: '發燒' },
      { word: '頭', reading: 'あたま', romaji: 'atama', meaning: '頭' },
      { word: '痛い', reading: 'いたい', romaji: 'itai', meaning: '痛的 (い形容詞)' },
      { word: '千円', reading: 'せんえん', romaji: 'sen-en', meaning: '一千日圓' },
      { word: '少し', reading: 'すこし', romaji: 'sukoshi', meaning: '一點點' },
      { word: '財布', reading: 'さいふ', romaji: 'saifu', meaning: '錢包' },
      { word: '近い', reading: 'ちかい', romaji: 'chikai', meaning: '近的 (い形容詞)' },
      { word: '選ぶ', reading: 'えらぶ', romaji: 'erabu', meaning: '選擇 (I類動詞)' },
    ],
    quiz: [
      { question: 'ここは駅から近い___、家賃も安い___。(不僅...而且...)', options: ['し／し', 'と／と', 'から／から', 'たり／たり'], answer: 0 },
      { question: '時間が5分___ありません。(竟然只有五分鐘/太少了)', options: ['だけ', 'しか', 'ばかり', 'ぐらい'], answer: 1 },
      { question: '日本語が少し___話せません。(只會說一點)', options: ['だけ', 'しか', 'まで', 'から'], answer: 1 },
      { question: '「財布」的意思是？', options: ['財產', '錢包', '背包', '鞋子'], answer: 1 },
      { question: '「選ぶ」的讀音是？', options: ['えらぶ', 'ならぶ', 'あそぶ', 'よぶ'], answer: 0 },
      { question: 'この店は美味しい___、安い___、よく来ます。', options: ['し／し', 'と／と', 'から／から', 'たり／たり'], answer: 0 },
      { question: '財布に千円___ありません。', options: ['だけ', 'しか', 'ばかり', 'ぐらい'], answer: 1 },
    ]
  },

  // ---- 第 58 關：要不要... (～たらどうですか) ----
  {
    id: 'n4_ch58',
    level: 'N4',
    title: '要不要... (勸誘與建議)',
    grammar: [
      {
        pattern: '動詞た形 ＋ らどうですか',
        explanation: '用來輕微地給予對方建議或勸誘。「要不要做某事看看？ / ...如何呢？」。\n\n【與「ほうがいいです」的比較】\n- ～たほうがいいです (最好...)：語氣較強烈，帶有「不這麼做會不好」的警告意味。\n- ～たらどうですか (要不要...)：語氣較委婉，單純提出一個選項或建議讓對方考慮，比較沒有強迫性。即使對方不接受也沒關係。',
        examples: [
          { jp: '少{すこ}し休{やす}んだらどうですか。', romaji: 'Sukoshi yasundara dō desu ka.', zh: '你要不要稍微休息一下呢？' },
          { jp: '先生{せんせい}に聞{き}いてみたらどうですか。', romaji: 'Sensei ni kiite mitara dō desu ka.', zh: '你要不試著問問老師看看？' },
          { jp: '薬{くすり}を飲{の}んだらどうですか。', romaji: 'Kusuri o nondara dō desu ka.', zh: '你要不要吃個藥呢？' },
          { jp: 'もっと野菜{やさい}を食{た}べたらどうですか。', romaji: 'Motto yasai o tabetara dō desu ka.', zh: '你要不要多吃點蔬菜呢？' },
          { jp: '病院{びょういん}に行{い}ったらどうですか。', romaji: 'Byōin ni ittara dō desu ka.', zh: '你要不要去一趟醫院呢？' }
        ]
      }
    ],
    vocabulary: [
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息 (I類動詞)' },
      { word: '聞く', reading: 'きく', romaji: 'kiku', meaning: '問/聽 (I類動詞)' },
      { word: '病院', reading: 'びょういん', romaji: 'byōin', meaning: '醫院' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: '疲れる', reading: 'つかれる', romaji: 'tsukareru', meaning: '疲累 (II類動詞)' },
      { word: '相談する', reading: 'そうだんする', romaji: 'sōdan suru', meaning: '商量/諮詢 (III類動詞)' },
      { word: '少し', reading: 'すこし', romaji: 'sukoshi', meaning: '稍微/一點點' },
      { word: '気分', reading: 'きぶん', romaji: 'kibun', meaning: '心情/精神狀態' },
      { word: '悪い', reading: 'わるい', romaji: 'warui', meaning: '不好的/差的 (い形容詞)' },
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: '回去 (I類動詞)' },
    ],
    quiz: [
      { question: '早く病院へ行っ___。(要不要去醫院呢?)', options: ['たらどうですか', 'たほうがいいです', 'てはいけません', 'てみてください'], answer: 0 },
      { question: '先生に相談し___。(要不要商量看看?)', options: ['たらどうですか', 'なければなりません', 'てもいいです', 'てはいけません'], answer: 0 },
      { question: '「相談する」的意思是？', options: ['思考', '商量/諮詢', '聊天', '吵架'], answer: 1 },
      { question: '「気分」的意思是？', options: ['氣候', '天氣', '氣氛', '心情/精神狀態'], answer: 3 },
      { question: '疲れたなら、少し休ん___。(要不要休息呢)', options: ['だらどうですか', 'だほうがいい', 'でください', 'でもいい'], answer: 0 },
      { question: '先生に聞いてみ___。(要不要問問看?)', options: ['たらどうですか', 'たほうがいいです', 'てはいけません', 'てみてください'], answer: 0 },
      { question: 'もっと野菜を食べ___。(要不要多吃點蔬菜?)', options: ['たらどうですか', 'なければなりません', 'てもいいです', 'てはいけません'], answer: 0 },
    ]
  },

  // ---- 第 59 關：N4 總複習 (動詞變化/長句) ----
  {
    id: 'n4_ch59',
    level: 'N4',
    title: 'N4 總複習 (動詞變化/長句)',
    grammar: [
      {
        pattern: '動詞三大類分類與基礎變化 (辞書形、ない形、て形、た形)',
        explanation: '【N4動詞變形總複習】\n日文動詞分為三類。最複雜的I類動詞（又稱五段動詞）其字尾會在あ、い、う、え、お這五個段上變化。\n- ます形 (i段)：書きます (kakimasu)\n- ない形 (a段)：書かない (kakanai) ※注意字尾是「う」的，會變成「わ」(例:会う->会わない)\n- 辞書形 (u段)：書く (kaku)\n- ば形 (e段)：書けば (kakeba)\n- 意向形 (o段)：書こう (kakō)\n\nII類（一段動詞）變化最簡單，一律去掉「ます」直接接後綴 (例：食べる)。\nIII類（不規則）只有「する」與「くる」，需死背。',
        examples: [
          { jp: '書{か}く(I) -> 書{か}かない -> 書{か}いて -> 書{か}いた', romaji: 'kaku -> kakanai -> kaite -> kaita', zh: '寫（I類動詞的基礎變化）' },
          { jp: '食{た}べる(II) -> 食{た}べない -> 食{た}べて -> 食{た}べた', romaji: 'taberu -> tabenai -> tabete -> tabeta', zh: '吃（II類動詞的基礎變化）' },
          { jp: '話{はな}す(I) -> 話{はな}さない -> 話{はな}して -> 話{はな}した', romaji: 'hanasu -> hanasanai -> hanashite -> hanashita', zh: '說（I類動詞的基礎變化）' },
          { jp: '会{あ}う(I) -> 会{あ}わない -> 会{あ}って -> 会{あ}った', romaji: 'au -> awanai -> atte -> atta', zh: '見面（字尾う的特殊變化）' },
          { jp: 'くる(III) -> こない -> きて -> きた', romaji: 'kuru -> konai -> kite -> kita', zh: '來（III類動詞的基礎變化）' }
        ]
      },
      {
        pattern: 'N4 重大動詞變形與銜接心法 (可能、被動、使役、ば形、て形延伸)',
        explanation: '【三大進階變形總結 (以I類為例)】\n1. 可能形 (能做...)：改 e段 + る (書ける/飲める)\n2. 被動形 (被做...)：改 a段 + れる (書かれる/飲まれる)\n3. 使役形 (讓做...)：改 a段 + せる (書かせる/飲ませる)\n※II類皆為去ます加 られる(可能/被動) / させる(使役)。\n\n【て形的進階應用】\n- ておく：事先準備好 / 放置不管\n- てみる：嘗試做看看\n- てしまう：徹底完成 / 遺憾後悔',
        examples: [
          { jp: '飲{の}める(可能) / 飲{の}まれる(被動) / 飲{の}ませる(使役) / 飲{の}めば(條件)', romaji: 'nomeru / nomareru / nomaseru / nomaseru / nomeba', zh: '能喝 / 被喝 / 讓...喝 / 如果喝' },
          { jp: '食{た}べられる(可能/被動) / 食{た}べさせる(使役) / 食{た}べれば(條件)', romaji: 'taberareru / tabesaseru / tabereba', zh: '能吃/被吃 / 讓...吃 / 如果吃' },
          { jp: '来{こ}られる(可能/被動) / 来{こ}させる(使役) / 来{く}れば(條件)', romaji: 'korareru / kosaseru / kureba', zh: '能來/被來 / 讓...來 / 如果來' },
          { jp: '読{よ}んでおく(準備) / 読{よ}んでみる(嘗試) / 読{よ}んでしまう(完成)', romaji: 'yonde oku / yonde miru / yonde shimau', zh: '事先讀 / 讀讀看 / 讀完了' },
          { jp: '見{み}ておく(準備) / 見{み}てみる(嘗試) / 見{み}てしまう(完成)', romaji: 'mite oku / mite miru / mite shimau', zh: '事先看 / 看看看 / 看完了' }
        ]
      },
      {
        pattern: '修飾名詞與長句結構',
        explanation: 'N4最重要的閱讀技巧就是「拆解長句」。日文中，動詞與形容詞的「普通形（包含現在式/過去式、肯定/否定）」可以直接用來修飾後面的名詞，就像是一長串的形容詞一樣。\n\n【閱讀心法】\n- 看到名詞前方有一整句動作時，先找出主要名詞。\n- 確認動作的時態（是過去發生了，還是未來要發生）。\n- 確認主詞的助詞（修飾子句中的主詞通常用「が」）。',
        examples: [
          { jp: '昨日{きのう}私{わたし}が作{つく}った料理{りょうり}は美味{おい}しかったです。', romaji: 'Kinō watashi ga tsukutta ryōri wa oishikatta desu.', zh: '昨天我做的料理很好吃。（過去肯定的修飾）' },
          { jp: '明日{あした}日本{にほん}へ行{い}く予定{よてい}があります。', romaji: 'Ashita nihon e iku yotei ga arimasu.', zh: '明天有去日本的計畫。（現在肯定的修飾）' },
          { jp: '昨日{きのう}来{こ}なかった人{ひと}は誰{だれ}ですか。', romaji: 'Kinō konakatta hito wa dare desu ka.', zh: '昨天沒來的人是誰？（過去否定的修飾）' },
          { jp: 'メガネをかけている人{ひと}が田中{たなか}さんです。', romaji: 'Megane o kakete iru hito ga Tanaka-san desu.', zh: '戴著眼鏡的人是田中先生。（進行狀態的修飾）' },
          { jp: 'これは私{わたし}が一番{いちばん}好{す}きな映画{えいが}です。', romaji: 'Kore wa watashi ga ichiban suki na eiga desu.', zh: '這是我最喜歡的電影。（な形容詞的修飾）' }
        ]
      }
    ],
    vocabulary: [
      { word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: '回去 (I類動詞)' },
      { word: '借りる', reading: 'かりる', romaji: 'kariru', meaning: '借入 (II類動詞)' },
      { word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: '跑 (I類動詞)' },
      { word: '続く', reading: 'つづく', romaji: 'tsuzuku', meaning: '繼續 (I類動詞)' },
      { word: '褒める', reading: 'ほめる', romaji: 'homeru', meaning: '稱讚 (II類動詞)' },
      { word: '連絡する', reading: 'れんらくする', romaji: 'renraku suru', meaning: '聯絡 (III類動詞)' },
      { word: '複雑', reading: 'ふくざつ', romaji: 'fukuzatsu', meaning: '複雜的 (な形容詞)' },
      { word: '寂しい', reading: 'さびしい', romaji: 'sabishii', meaning: '寂寞的 (い形容詞)' },
      { word: '役に立つ', reading: 'やくにたつ', romaji: 'yaku ni tatsu', meaning: '有用的 (I類動詞)' },
      { word: '予定', reading: 'よてい', romaji: 'yotei', meaning: '預定/計畫 (名詞)' }
    ],
    quiz: [
      { question: '「帰る」雖然字尾是る，但它屬於哪一類動詞？', options: ['I類動詞', 'II類動詞', 'III類動詞', '特殊動詞'], answer: 0 },
      { question: '「褒める」的被動形（被稱讚）是？', options: ['褒めさせる', '褒められる', '褒めれる', '褒めませる'], answer: 1 },
      { question: '先生が学生に本を___。（讓學生讀，使役形）', options: ['読ませた', '読まれた', '読めた', '読めば'], answer: 0 },
      { question: '「走る」的條件形（如果跑的話）是？', options: ['走れば', '走らば', '走ろば', '走って'], answer: 0 },
      { question: '昨日私が___本はとても面白かったです。(買的)', options: ['買う', '買った', '買って', '買わない'], answer: 1 },
      { question: '日本へ行く予定が___。', options: ['あります', 'います', 'します', 'なります'], answer: 0 },
      { question: '「食べる」的ない形是？', options: ['食べない', '食べらない', '食ばない', '食ばらない'], answer: 0 }
    ]
  }
];
