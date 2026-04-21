// 旅遊實戰地圖 - 全 28 關句型資料 (已加註假名與文法修正)
export const travelZones = [
  // ═══════════════════════════════════════════════
  // ✈️ Zone 1：抵達與出發 (機場與交通)
  // ═══════════════════════════════════════════════
  {
    id: 'zone1',
    name: '抵達與出發',
    nameJp: '到着・出発',
    emoji: '✈️',
    color: 'tz1',
    chapters: [
      {
        id: 'travel_01',
        title: '海關與入境',
        titleJp: '税関・入国審査',
        phrases: [
          {
            id: 't01_01',
            situation: '說明旅遊目的',
            japanese: '観{かん}光{こう}です。',
            romaji: 'Kankō desu.',
            chinese: '（我來）觀光的。',
            tip: '海關問「目的は何ですか？」時直接回答，簡短有力。商務出差則說「出張です」。'
          },
          {
            id: 't01_02',
            situation: '說明停留天數',
            japanese: '七{なの}日{か}間{かん}滞{たい}在{ざい}する予{よ}定{てい}です。',
            romaji: 'Nanokakan taizai suru yotei desu.',
            chinese: '預計停留七天。',
            tip: '天數替換：三日間(みっかかん)、一週間(いっしゅうかん)、二週間(にしゅうかん)。'
          },
          {
            id: 't01_03',
            situation: '說明住宿地點',
            japanese: '新{しん}宿{じゅく}のホテルに泊{と}まります。',
            romaji: 'Shinjuku no hoteru ni tomarimasu.',
            chinese: '我住在新宿的飯店。',
            tip: '如果有預訂確認單可以直接出示，說「これです」（就是這個）即可。'
          },
          {
            id: 't01_04',
            situation: '申報免稅品',
            japanese: '申{しん}告{こく}するものは何{なに}もありません。',
            romaji: 'Shinkoku suru mono wa nani mo arimasen.',
            chinese: '沒有需要申報的物品。',
            tip: '超過免稅額度時說：「申告があります」(shinkoku ga arimasu)。'
          },
          {
            id: 't01_05',
            situation: '護照被問',
            japanese: 'パスポートをお見{み}せします。',
            romaji: 'Pasupōto o o-mise shimasu.',
            chinese: '我出示護照給您看。',
            tip: '直接遞出時說「どうぞ」(dōzo)也很自然。'
          },
          {
            id: 't01_06',
            situation: '請求翻譯協助',
            japanese: '中{ちゅう}国{ごく}語{ご}（台{たい}湾{わん}語{ご}）の通{つう}訳{やく}はありますか？',
            romaji: 'Chūgokugo (Taiwango) no tsūyaku wa arimasu ka?',
            chinese: '請問有中文（台灣語）的翻譯人員嗎？',
            tip: '遇到聽不懂的問題，不要緊張，直接這樣問。'
          },
          {
            id: 't01_07',
            situation: '確認行李',
            japanese: 'この荷{に}物{もつ}は機{き}内{ない}に持{も}ち込{こ}めますか？',
            romaji: 'Kono nimotsu wa kinai ni mochikome masu ka?',
            chinese: '這件行李可以帶上飛機嗎？',
            tip: '隨身行李通常限重 7kg，超重時說「預け入れたいです」（想要托運）。'
          },
          {
            id: 't01_08',
            situation: '領取行李',
            japanese: 'バゲージクレームはどこですか？',
            romaji: 'Bagēji kurēmu wa doko desu ka?',
            chinese: '請問行李提取處在哪裡？',
            tip: '也可以說「荷物の受け取りはどこですか？」意思相同。'
          },
        ]
      },
      {
        id: 'travel_02',
        title: '尋找交通工具',
        titleJp: '交通手段を探す',
        phrases: [
          {
            id: 't02_01',
            situation: '詢問電車位置',
            japanese: '電{でん}車{しゃ}の乗{の}り場{ば}はどこですか？',
            romaji: 'Densha no noriba wa doko desu ka?',
            chinese: '請問電車搭乘處在哪裡？',
            tip: '「乗り場」是所有交通工具搭乘處的通用詞，電車、巴士都能用。'
          },
          {
            id: 't02_02',
            situation: '詢問利木津巴士',
            japanese: '新{しん}宿{じゅく}行{ゆ}きのリムジンバスはありますか？',
            romaji: 'Shinjuku-yuki no rimujin basu wa arimasu ka?',
            chinese: '請問有到新宿的直達巴士嗎？',
            tip: '「〇〇行き」是「往〇〇方向」的說法，非常實用。'
          },
          {
            id: 't02_03',
            situation: '確認搭乘月台',
            japanese: '渋{しぶ}谷{や}に行{い}くには何{なん}番{ばん}線{せん}に乗{の}ればいいですか？',
            romaji: 'Shibuya ni iku niwa nanbansen ni noreba ii desu ka?',
            chinese: '請問去澀谷要搭幾號線？',
            tip: '確認月台號碼的萬用句型。把「渋谷」換成目的地即可。'
          },
          {
            id: 't02_04',
            situation: '問下一班車',
            japanese: '次{つぎ}の電{でん}車{しゃ}は何{なん}時{じ}に来{き}ますか？',
            romaji: 'Tsugi no densha wa nanji ni kimasu ka?',
            chinese: '請問下一班電車幾點來？',
            tip: '如果趕時間，可以補一句：「急いでいます」（我在趕時間）。'
          },
          {
            id: 't02_05',
            situation: '確認是否已到站',
            japanese: 'この電{でん}車{しゃ}は新{しん}宿{じゅく}に止{と}まりますか？',
            romaji: 'Kono densha wa Shinjuku ni tomarimasu ka?',
            chinese: '這班電車有停新宿嗎？',
            tip: '急行或特急列車會跳過某些站，確認很重要！'
          },
          {
            id: 't02_06',
            situation: '請人告知到站',
            japanese: '渋{しぶ}谷{や}に着{つ}いたら教{おし}えてもらえますか？',
            romaji: 'Shibuya ni tsuitara oshiete moraemasu ka?',
            chinese: '到澀谷的時候可以告訴我嗎？',
            tip: '請求別人幫忙時的禮貌說法，對方通常都會很樂意幫忙。'
          },
          {
            id: 't02_07',
            situation: '問到哪裡換車',
            japanese: 'どこで乗{の}り換{か}えればいいですか？',
            romaji: 'Doko de norikaereba ii desu ka?',
            chinese: '請問在哪裡換乘（轉車）？',
            tip: '「乗り換え」是換車/轉乘，是搭電車最常用到的詞之一。'
          },
          {
            id: 't02_08',
            situation: '詢問大巴士站',
            japanese: 'バス停{てい}はどこですか？',
            romaji: 'Basu-tei wa doko desu ka?',
            chinese: '請問公車站在哪裡？',
            tip: '機場到飯店也可用高速巴士，詢問時說「高速バスの乗り場は？」。'
          },
        ]
      },
      {
        id: 'travel_03',
        title: '購買車票與儲值',
        titleJp: '切符購入・チャージ',
        phrases: [
          {
            id: 't03_01',
            situation: '購買普通票',
            japanese: '渋{しぶ}谷{や}まで一{いち}枚{まい}ください。',
            romaji: 'Shibuya made ichimai kudasai.',
            chinese: '請給我一張到澀谷的票。',
            tip: '直接到自動售票機，找票價表後按金額即可。這句話在人工窗口使用。'
          },
          {
            id: 't03_02',
            situation: '購買來回票',
            japanese: '渋{しぶ}谷{や}まで往{おう}復{ふく}二{に}枚{まい}ください。',
            romaji: 'Shibuya made ōfuku nimai kudasai.',
            chinese: '請給我兩張到澀谷的來回票。',
            tip: '「往復」(ōfuku) 是來回。買來回票有時可以享有折扣。'
          },
          {
            id: 't03_03',
            situation: '購買 Suica 卡',
            japanese: 'Suicaカードを一{いち}枚{まい}買{か}いたいのですが。',
            romaji: 'Suica kādo o ichimai kaitai no desu ga.',
            chinese: '我想買一張 Suica 卡。',
            tip: '「〜のですが」結尾帶有委婉詢問的意思，比直接說「ください」更有禮貌。'
          },
          {
            id: 't03_04',
            situation: 'Suica 儲值',
            japanese: '1000円{えん}チャージしてください。',
            romaji: 'Sen-en chāji shite kudasai.',
            chinese: '請幫我儲值1000日圓。',
            tip: '「チャージ」(charge) 就是儲值。Suica/PASMO/ICOCA 都適用這個說法。'
          },
          {
            id: 't03_05',
            situation: '詢問餘額',
            japanese: '残{ざん}高{だか}はいくらですか？',
            romaji: 'Zandaka wa ikura desu ka?',
            chinese: '請問餘額是多少？',
            tip: '也可以在 Suica 機器上查看。紅色 IC 圖標的機器都可以查詢。'
          },
          {
            id: 't03_06',
            situation: '購買指定席',
            japanese: '新{しん}幹{かん}線{せん}の指{し}定{てい}席{せき}を予{よ}約{やく}したいのですが。',
            romaji: 'Shinkansen no shiteiseki o yoyaku shitai no desu ga.',
            chinese: '我想預約新幹線的對號座。',
            tip: '「指定席」是對號座，「自由席」是自由座（便宜但要搶）。'
          },
          {
            id: 't03_07',
            situation: '購買一日券',
            japanese: '一{いち}日{にち}乗{じょう}車{しゃ}券{けん}を二{に}枚{まい}ください。',
            romaji: 'Ichinichi jōshaken o nimai kudasai.',
            chinese: '請給我兩張一日券。',
            tip: '觀光城市的一日券通常很划算，景點集中時強烈推薦！'
          },
          {
            id: 't03_08',
            situation: '詢問兒童票',
            japanese: '子{こ}供{ども}料{りょう}金{きん}はいくらですか？',
            romaji: 'Kodomo ryōkin wa ikura desu ka?',
            chinese: '請問兒童票價是多少？',
            tip: '日本鐵路通常6~11歲為兒童票，約為成人票的一半。'
          },
        ]
      },
      {
        id: 'travel_04',
        title: '搭乘計程車',
        titleJp: 'タクシーに乗る',
        phrases: [
          {
            id: 't04_01',
            situation: '告知目的地（有地址）',
            japanese: 'この住{じゅう}所{しょ}までお願{ねが}いします。',
            romaji: 'Kono jūsho made onegai shimasu.',
            chinese: '麻煩請到這個地址。',
            tip: '把地址印出來或在手機上顯示，直接遞給司機是最保險的做法！'
          },
          {
            id: 't04_02',
            situation: '告知目的地（有名稱）',
            japanese: '新{しん}宿{じゅく}駅{えき}の西{にし}口{ぐち}までお願{ねが}いします。',
            romaji: 'Shinjuku-eki no nishiguchi made onegai shimasu.',
            chinese: '麻煩請到新宿車站西口。',
            tip: '「〜口」是出口的意思。東口(ひがしぐち)、西口(にしぐち)、南口(みなみぐち)、北口(きたぐち)。'
          },
          {
            id: 't04_03',
            situation: '行李放後車廂',
            japanese: 'トランクに荷{に}物{もつ}を入{い}れてもいいですか？',
            romaji: 'Toranku ni nimotsu o irete mo ii desu ka?',
            chinese: '可以把行李放在後車廂嗎？',
            tip: '通常司機會主動幫忙，但詢問一下是禮貌。「トランク」就是後車廂。'
          },
          {
            id: 't04_04',
            situation: '請司機等一下',
            japanese: 'ちょっと待{ま}っていただけますか？',
            romaji: 'Chotto matte itadakemasu ka?',
            chinese: '可以稍等一下嗎？',
            tip: '比「ちょっと待って」更禮貌。需要跑去拿東西或有人要一起搭時使用。'
          },
          {
            id: 't04_05',
            situation: '確認費用',
            japanese: 'だいたいいくらかかりますか？',
            romaji: 'Daitai ikura kakarimasu ka?',
            chinese: '大概需要多少錢？',
            tip: '日本計程車費用計算嚴格，出發前問一下避免驚嚇。'
          },
          {
            id: 't04_06',
            situation: '請到對面停車',
            japanese: 'あそこで止{と}めてください。',
            romaji: 'Asoko de tomete kudasai.',
            chinese: '請在那邊停車。',
            tip: '指示停車位置的萬用句。「ここで」(koko de) = 這裡停，「あそこで」= 那邊停。'
          },
          {
            id: 't04_07',
            situation: '確認可用付款方式',
            japanese: 'カードで払{はら}えますか？',
            romaji: 'Kādo de haraemasu ka?',
            chinese: '可以刷卡嗎？',
            tip: '日本很多計程車現在接受信用卡和 IC 卡，但還是先確認比較安心。'
          },
          {
            id: 't04_08',
            situation: '找零',
            japanese: 'お釣{つ}りはいりません。',
            romaji: 'Otsuri wa irimasen.',
            chinese: '不用找零了。',
            tip: '給小費時使用這句。日本小費文化不普遍，但計程車可以這樣表示謝意。'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🏨 Zone 2：安頓身心 (飯店與住宿)
  // ═══════════════════════════════════════════════
  {
    id: 'zone2',
    name: '安頓身心',
    nameJp: 'ホテル・宿泊',
    emoji: '🏨',
    color: 'tz2',
    chapters: [
      {
        id: 'travel_05',
        title: '辦理入住',
        titleJp: 'チェックイン',
        phrases: [
          {
            id: 't05_01',
            situation: '確認預訂',
            japanese: '予{よ}約{やく}しています。山{やま}田{だ}です。',
            romaji: 'Yoyaku shite imasu. Yamada desu.',
            chinese: '我有預訂。我是山田（您的姓名）。',
            tip: '把「山田」換成你用來訂房的姓名。如果是英文名字就直接說英文。'
          },
          {
            id: 't05_02',
            situation: '出示護照',
            japanese: 'パスポートをお持{も}ちしました。',
            romaji: 'Pasupōto o omochi shimashita.',
            chinese: '我把護照帶來了。',
            tip: '直接把護照遞給對方說「どうぞ」也很自然。辦理入住通常需要護照。'
          },
          {
            id: 't05_03',
            situation: '詢問房間',
            japanese: '部{へ}屋{や}の準{じゅん}備{び}はできていますか？',
            romaji: 'Heya no junbi wa dekite imasu ka?',
            chinese: '請問房間準備好了嗎？',
            tip: '提早到時很有用。如果房間還沒好，可以先寄放行李。'
          },
          {
            id: 't05_04',
            situation: '請求升級',
            japanese: 'アップグレードはできますか？',
            romaji: 'Appuguredo wa dekimasu ka?',
            chinese: '請問可以升等嗎？',
            tip: '淡季或有會員身份時可以試試，有時候酒店會免費升等！'
          },
          {
            id: 't05_05',
            situation: '詢問 Wi-Fi 密碼',
            japanese: 'Wi-Fiのパスワードを教{おし}えていただけますか？',
            romaji: 'Wai-fai no pasuwādo o oshiete itadakemasu ka?',
            chinese: '可以告訴我 Wi-Fi 密碼嗎？',
            tip: '大部分日本飯店都有免費 Wi-Fi，有時候密碼在房卡信封上就有。'
          },
          {
            id: 't05_06',
            situation: '確認退房時間',
            japanese: 'チェックアウトは何{なん}時{じ}ですか？',
            romaji: 'Chekku-auto wa nanji desu ka?',
            chinese: '請問退房時間是幾點？',
            tip: '日本飯店通常退房時間為11:00或中午12:00。'
          },
          {
            id: 't05_07',
            situation: '延遲退房',
            japanese: 'レイトチェックアウトはできますか？',
            romaji: 'Reito chekku-auto wa dekimasu ka?',
            chinese: '請問可以延遲退房嗎？',
            tip: '通常需要額外付費，或看飯店狀況。通常可以延到下午2~3點。'
          },
          {
            id: 't05_08',
            situation: '詢問行李寄存',
            japanese: '荷{に}物{もつ}を預{あず}けることはできますか？',
            romaji: 'Nimotsu o azukeru koto wa dekimasu ka?',
            chinese: '請問可以寄放行李嗎？',
            tip: '退房後還要繼續遊玩時非常實用！通常飯店都有提供免費寄放服務。'
          },
        ]
      },
      {
        id: 'travel_06',
        title: '設施詢問',
        titleJp: '施設について',
        phrases: [
          {
            id: 't06_01',
            situation: '詢問早餐時間',
            japanese: '朝{ちょう}食{しょく}は何{なん}時{じ}から何{なん}時{じ}までですか？',
            romaji: 'Chōshoku wa nanji kara nanji made desu ka?',
            chinese: '請問早餐是幾點到幾點？',
            tip: '日本飯店的自助早餐非常值得期待！通常6:30~10:00左右。'
          },
          {
            id: 't06_02',
            situation: '詢問早餐地點',
            japanese: '朝{ちょう}食{しょく}はどこで食{た}べられますか？',
            romaji: 'Chōshoku wa doko de taberaremasu ka?',
            chinese: '請問早餐在哪裡用餐？',
            tip: '有些飯店早餐在特定樓層，有些在客房，入住時確認一下。'
          },
          {
            id: 't06_03',
            situation: '詢問溫泉位置',
            japanese: '大{だい}浴{よく}場{じょう}（温{おん}泉{せん}）はどこですか？',
            romaji: 'Daiyokujō (onsen) wa doko desu ka?',
            chinese: '請問大浴場（溫泉）在哪裡？',
            tip: '溫泉旅館必問句！「大浴場」是大型公共浴池，是日本住宿的一大享受。'
          },
          {
            id: 't06_04',
            situation: '詢問溫泉時間',
            japanese: '温{おん}泉{せん}は何{なん}時{じ}まで入{はい}れますか？',
            romaji: 'Onsen wa nanji made hairemasu ka?',
            chinese: '請問溫泉可以泡到幾點？',
            tip: '通常溫泉會有清潔時間，深夜到隔天清晨期間暫停開放。'
          },
          {
            id: 't06_05',
            situation: '詢問洗衣機位置',
            japanese: 'コインランドリーはありますか？',
            romaji: 'Koin randorī wa arimasu ka?',
            chinese: '請問有投幣式洗衣機嗎？',
            tip: '長期旅遊必備！通常在地下室或特定樓層，也需要零錢或 Suica 付款。'
          },
          {
            id: 't06_06',
            situation: '詢問周邊便利店',
            japanese: 'この近{ちか}くにコンビニはありますか？',
            romaji: 'Kono chikaku ni konbini wa arimasu ka?',
            chinese: '這附近有便利商店嗎？',
            tip: '日本便利商店什麼都賣！24小時、ATM、熱食... 旅遊必備情報。'
          },
          {
            id: 't06_07',
            situation: '索取地圖',
            japanese: 'この辺{あた}りの地{ち}図{ず}はありますか？',
            romaji: 'Kono atari no chizu wa arimasu ka?',
            chinese: '請問有這附近的地圖嗎？',
            tip: '接待台通常會有免費的觀光地圖，可以一次多拿幾張。'
          },
          {
            id: 't06_08',
            situation: '詢問推薦餐廳',
            japanese: 'おすすめのレストランはありますか？',
            romaji: 'Osusume no resutoran wa arimasu ka?',
            chinese: '請問有推薦的餐廳嗎？',
            tip: '飯店工作人員通常很樂意推薦在地好店，而且推薦的通常都不錯！'
          },
        ]
      },
      {
        id: 'travel_07',
        title: '房間疑難雜症',
        titleJp: '部屋のトラブル',
        phrases: [
          {
            id: 't07_01',
            situation: '冷氣故障',
            japanese: 'エアコンが壊{こわ}れているようです。',
            romaji: 'Eakon ga kowarete iru yō desu.',
            chinese: '冷氣好像壞掉了。',
            tip: '「〜ようです」是「好像是〜」的委婉說法，比直接說「壊れた」更有禮貌。'
          },
          {
            id: 't07_02',
            situation: '沒有熱水',
            japanese: 'お湯{ゆ}が出{で}ないのですが、確{かく}認{にん}していただけますか？',
            romaji: 'Oyu ga denai no desu ga, kakunin shite itadakemasu ka?',
            chinese: '熱水沒有出來，可以幫我確認嗎？',
            tip: '「〜ていただけますか？」是請求協助的最禮貌句型，飯店客訴必用。'
          },
          {
            id: 't07_03',
            situation: '要求更多毛巾',
            japanese: 'タオルをもう二{に}枚{まい}持{も}ってきてもらえますか？',
            romaji: 'Taoru o mō nimai motte kite moraemasuka?',
            chinese: '可以再給我兩條毛巾嗎？',
            tip: '可以替換：枕(まくら)枕頭、毛布(もうふ)毛毯、ハンガー衣架。'
          },
          {
            id: 't07_04',
            situation: '廁所堵塞',
            japanese: 'トイレが詰{つ}まっています。',
            romaji: 'Toire ga tsumatte imasu.',
            chinese: '廁所堵塞了。',
            tip: '「詰まる」(tsumaru) 是堵塞的意思。緊急狀況直接說出來就好，不用擔心。'
          },
          {
            id: 't07_05',
            situation: '房間太吵',
            japanese: 'お隣{となり}の部{へ}屋{や}がうるさくて眠{ねむ}れません。',
            romaji: 'Otonari no heya ga urusakute nemuremasen.',
            chinese: '隔壁房間太吵了，我沒辦法睡覺。',
            tip: '可以請求換房：「別の部屋に変えていただけますか？」。'
          },
          {
            id: 't07_06',
            situation: '房卡失效',
            japanese: 'カードキーが使{つか}えなくなりました。',
            romaji: 'Kādo kī ga tsukaenaku narimashita.',
            chinese: '房卡沒辦法用了。',
            tip: '常見原因是放在手機旁邊導致消磁。去前台重新設定就好。'
          },
          {
            id: 't07_07',
            situation: '要求清潔服務',
            japanese: '部{へ}屋{や}を掃{そう}除{じ}してもらえますか？',
            romaji: 'Heya o sōji shite moraemasuka?',
            chinese: '可以幫我清潔房間嗎？',
            tip: '掛上「清掃してください」(sēsō shite kudasai) 的門牌，也可以申請清掃。'
          },
          {
            id: 't07_08',
            situation: '要求不打擾',
            japanese: 'しばらくの間{あいだ}、部{へ}屋{や}に入{はい}らないでください。',
            romaji: 'Shibaraku no aida, heya ni hairanai de kudasai.',
            chinese: '請暫時不要進入房間。',
            tip: '掛上「起こさないでください」(okosanai de kudasai) 的勿擾門牌也是一樣的效果。'
          },
        ]
      },
      {
        id: 'travel_08',
        title: '退房與寄放行李',
        titleJp: 'チェックアウト・荷物預かり',
        phrases: [
          {
            id: 't08_01',
            situation: '辦理退房',
            japanese: 'チェックアウトをお願{ねが}いします。〇〇号{ごう}室{しつ}です。',
            romaji: 'Chekku-auto o onegai shimasu. ○○-gōshitsu desu.',
            chinese: '我要退房。我是〇〇號房。',
            tip: '把「〇〇」換成你的房號。通常需要歸還房卡。'
          },
          {
            id: 't08_02',
            situation: '確認帳單',
            japanese: '請{せい}求{きゅう}書{しょ}を確{かく}認{にん}させてください。',
            romaji: 'Seikyūsho o kakunin sasete kudasai.',
            chinese: '請讓我確認一下帳單。',
            tip: '退房前仔細確認帳單，有任何不符合的地方都要立刻提出。'
          },
          {
            id: 't08_03',
            situation: '詢問帳單明細',
            japanese: 'この金{きん}額{がく}は何{なん}ですか？',
            romaji: 'Kono kingaku wa nan desu ka?',
            chinese: '這筆金額是什麼費用？',
            tip: '帳單上看不懂的項目，直接指著問就好。日本飯店工作人員都很耐心！'
          },
          {
            id: 't08_04',
            situation: '寄放行李（退房後）',
            japanese: 'チェックアウト後{ご}も荷{に}物{もつ}を預{あず}けられますか？',
            romaji: 'Chekku-auto go mo nimotsu o azukeraremasu ka?',
            chinese: '退房後也可以寄放行李嗎？',
            tip: '幾乎所有飯店都提供這個服務，通常免費。讓你退房後繼續輕鬆玩！'
          },
          {
            id: 't08_05',
            situation: '詢問寄放費用',
            japanese: '荷{に}物{もつ}の預{あず}かりは有{ゆう}料{りょう}ですか？',
            romaji: 'Nimotsu no azukari wa yūryō desu ka?',
            chinese: '寄放行李需要收費嗎？',
            tip: '「有料」(yūryō) = 要錢，「無料」(muryō) = 免費。'
          },
          {
            id: 't08_06',
            situation: '取回行李',
            japanese: '預{あず}けた荷{に}物{もつ}を受{う}け取{と}りたいのですが。',
            romaji: 'Azuketa nimotsu o uketoritai no desu ga.',
            chinese: '我想取回我寄放的行李。',
            tip: '通常會給你一張寄存票，取行李時需要出示。'
          },
          {
            id: 't08_07',
            situation: '請幫忙叫計程車',
            japanese: 'タクシーを呼{よ}んでいただけますか？',
            romaji: 'Takushī o yonde itadakemasu ka?',
            chinese: '可以幫我叫計程車嗎？',
            tip: '飯店前台通常可以幫忙叫車，也可以請他們推薦最近的計程車搭車處。'
          },
          {
            id: 't08_08',
            situation: '詢問附近行李寄放',
            japanese: 'コインロッカーはどこにありますか？',
            romaji: 'Koin rokkā wa doko ni arimasu ka?',
            chinese: '投幣式置物櫃在哪裡？',
            tip: '車站裡幾乎都有「コインロッカー」，旅遊當天輕裝上陣的最佳方案！'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🍣 Zone 3：大快朵頤 (美食與餐廳)
  // ═══════════════════════════════════════════════
  {
    id: 'zone3',
    name: '大快朵頤',
    nameJp: '飲食・レストラン',
    emoji: '🍣',
    color: 'tz3',
    chapters: [
      {
        id: 'travel_09',
        title: '進店與候位',
        titleJp: '入店・待ち時間',
        phrases: [
          {
            id: 't09_01',
            situation: '確認是否可以入座',
            japanese: '二{ふた}人{り}ですが、入{はい}れますか？',
            romaji: 'Futari desu ga, hairemasu ka?',
            chinese: '我們兩位，請問可以進去嗎？',
            tip: '人數說法：一名(いちめい)、二名(ふたり/にめい)、三名(さんめい)、四名(よんめい)。'
          },
          {
            id: 't09_02',
            situation: '是否有預訂',
            japanese: '予{よ}約{やく}はしていませんが大{だい}丈{じょう}夫{ぶ}ですか？',
            romaji: 'Yoyaku wa shite imasen ga daijōbu desu ka?',
            chinese: '我們沒有預訂，請問可以嗎？',
            tip: '日本熱門餐廳很多都要預訂，旅遊前最好提前查清楚！'
          },
          {
            id: 't09_03',
            situation: '詢問等待時間',
            japanese: 'どのくらい待{ま}ちますか？',
            romaji: 'Dono kurai machimasu ka?',
            chinese: '大概需要等多久？',
            tip: '如果等不了，可以問是否可以留電話：「電話番号を教えると呼んでもらえますか？」'
          },
          {
            id: 't09_04',
            situation: '指定座位類型',
            japanese: 'テーブル席{せき}がいいのですが。',
            romaji: 'Tēburu-seki ga ii no desu ga.',
            chinese: '我們想坐桌子的位子。',
            tip: '可替換：カウンター席(かうんたーせき) 吧檯、お座敷(おざしき) 和式座位（需脫鞋）。'
          },
          {
            id: 't09_05',
            situation: '詢問室外座位',
            japanese: 'テラス席{せき}はありますか？',
            romaji: 'Terasu-seki wa arimasu ka?',
            chinese: '請問有露台座位嗎？',
            tip: '天氣好的時候可以試試看！春秋季在日本戶外用餐是很棒的體驗。'
          },
          {
            id: 't09_06',
            situation: '要求確認禁煙區',
            japanese: '禁{きん}煙{えん}席{せき}をお願{ねが}いします。',
            romaji: 'Kin-en seki o onegai shimasu.',
            chinese: '請給我們禁煙區的位子。',
            tip: '日本餐廳很多仍有吸煙區，入座前確認抽煙政策很重要。'
          },
          {
            id: 't09_07',
            situation: '需要高腳椅',
            japanese: 'ベビーチェアはありますか？',
            romaji: 'Bebī chea wa arimasu ka?',
            chinese: '請問有嬰兒椅嗎？',
            tip: '帶小孩用餐時必問！「ベビーカー」是嬰兒車，詢問停放位置也很重要。'
          },
          {
            id: 't09_08',
            situation: '入座就位',
            japanese: 'こちらへどうぞ。',
            romaji: 'Kochira e dōzo.',
            chinese: '請往這邊走。（服務員帶位時會說的話）',
            tip: '這句是服務員說的。聽到時就跟著走就好，說「ありがとうございます」表示感謝。'
          },
        ]
      },
      {
        id: 'travel_10',
        title: '點餐神句',
        titleJp: 'ご注文',
        phrases: [
          {
            id: 't10_01',
            situation: '請服務員過來',
            japanese: 'すみません！注{ちゅう}文{もん}してもいいですか？',
            romaji: 'Sumimasen! Chūmon shite mo ii desu ka?',
            chinese: '不好意思！可以點餐了嗎？',
            tip: '日本餐廳服務員不會主動來問，需要你出聲招呼。說「すみません！」是最常用的方法。'
          },
          {
            id: 't10_02',
            situation: '詢問中文菜單',
            japanese: '中{ちゅう}国{ごく}語{ご}のメニューはありますか？',
            romaji: 'Chūgokugo no menyū wa arimasu ka?',
            chinese: '請問有中文菜單嗎？',
            tip: '觀光地區很多餐廳都有中文菜單或圖片菜單。「英語」換成具體語言即可。'
          },
          {
            id: 't10_03',
            situation: '點這道菜',
            japanese: 'これをください。',
            romaji: 'Kore o kudasai.',
            chinese: '請給我這個。（指著菜單說）',
            tip: '最萬用的點餐句！手指著照片說就好，簡單又有效。'
          },
          {
            id: 't10_04',
            situation: '點同樣的菜',
            japanese: 'あれと同{おな}じものをください。',
            romaji: 'Are to onaji mono o kudasai.',
            chinese: '請給我和那個一樣的。（指著別人的餐點）',
            tip: '看到別桌的菜很好吃的時候，直接指著說！日本店員都能理解。'
          },
          {
            id: 't10_05',
            situation: '詢問今日特餐',
            japanese: '日{ひ}替{が}わりランチはありますか？',
            romaji: 'Higawari ranchi wa arimasu ka?',
            chinese: '請問有今日特餐嗎？',
            tip: '「日替わり」是每天更換的意思，通常是最划算的組合！'
          },
          {
            id: 't10_06',
            situation: '確認菜單內容',
            japanese: 'これはどんな料{りょう}理{り}ですか？',
            romaji: 'Kore wa donna ryōri desu ka?',
            chinese: '請問這是什麼料理？',
            tip: '對菜單不確定時的好用句。可以搭配手勢指著菜單上的項目一起說。'
          },
          {
            id: 't10_07',
            situation: '詢問食材',
            japanese: 'この料{りょう}理{り}には何{なに}が入{はい}っていますか？',
            romaji: 'Kono ryōri ni wa nani ga haitte imasu ka?',
            chinese: '請問這道菜裡面有什麼食材？',
            tip: '有過敏顧慮時很重要的確認句。可接著說「〜は大丈夫ですか？」（〜食材沒問題嗎？）'
          },
          {
            id: 't10_08',
            situation: '詢問推薦菜',
            japanese: 'おすすめは何{なん}ですか？',
            romaji: 'Osusume wa nan desu ka?',
            chinese: '請問有什麼推薦的嗎？',
            tip: '讓服務員幫你選，通常都不會失望！「おすすめ」就是推薦的意思。'
          },
        ]
      },
      {
        id: 'travel_11',
        title: '客製化與過敏',
        titleJp: 'カスタマイズ・アレルギー',
        phrases: [
          {
            id: 't11_01',
            situation: '不要加蔥',
            japanese: 'ネギ抜{ぬ}きでお願{ねが}いします。',
            romaji: 'Negi-nuki de onegai shimasu.',
            chinese: '麻煩不要加蔥。',
            tip: '「〜抜き」 = 去掉〜。可替換：玉ねぎ(たまねぎ)洋蔥、パクチー香菜、山椒山椒。'
          },
          {
            id: 't11_02',
            situation: '對蝦過敏',
            japanese: '海{え}老{び}アレルギーがあります。',
            romaji: 'Ebi arerugī ga arimasu.',
            chinese: '我對蝦子過敏。',
            tip: '食物過敏一定要說清楚！可替換：そば蕎麥、卵雞蛋、牛乳牛奶、小麦小麥。'
          },
          {
            id: 't11_03',
            situation: '素食者',
            japanese: '私{わたし}はベジタリアンです。肉{にく}と魚{さかな}は食{た}べられません。',
            romaji: 'Watashi wa bejitarian desu. Niku to sakana wa taberaremasen.',
            chinese: '我是素食者。我不能吃肉和魚。',
            tip: '也可以說「ヴィーガン」(vegan，全素)。日本素食餐廳有增加趨勢，但仍需注意高湯。'
          },
          {
            id: 't11_04',
            situation: '不吃豬肉（穆斯林/宗教原因）',
            japanese: '豚{ぶた}肉{にく}は食{た}べられません。',
            romaji: 'Butaniku wa taberaremasen.',
            chinese: '我不能吃豬肉。',
            tip: '可加說原因：「宗教上の理由で」(因為宗教因素)，讓對方更能理解。'
          },
          {
            id: 't11_05',
            situation: '醬料少放',
            japanese: 'ソースは少{すく}なめにしてください。',
            romaji: 'Sōsu wa sukuname ni shite kudasai.',
            chinese: '醬料請少放一點。',
            tip: '「〜め」接在形容詞後面表示「稍微〜一點」。多放：多め(おおめ)。'
          },
          {
            id: 't11_06',
            situation: '辣度調整',
            japanese: '辛{から}さは控{ひか}えめにしてください。',
            romaji: 'Karasa wa hikaeme ni shite kudasai.',
            chinese: '請把辣度調低一點。',
            tip: '「控えめ」(hikaeme) 是「稍微少一點」的意思，不能吃辣時使用！'
          },
          {
            id: 't11_07',
            situation: '更換配菜',
            japanese: 'サラダをスープに変{か}えられますか？',
            romaji: 'Sarada o sūpu ni kaeraremasu ka?',
            chinese: '可以把沙拉換成湯嗎？',
            tip: '套餐常有替換選項，不確定的話直接問，很多店都可以接受！'
          },
          {
            id: 't11_08',
            situation: '確認無含某食材',
            japanese: 'この料{りょう}理{り}にはピーナッツが入{はい}っていませんか？',
            romaji: 'Kono ryōri ni wa pīnattsu ga haitte imasen ka?',
            chinese: '這道菜沒有花生對嗎？',
            tip: '嚴重過敏者務必確認！也可以攜帶印好的過敏說明卡片，更安全。'
          },
        ]
      },
      {
        id: 'travel_12',
        title: '結帳與分開算',
        titleJp: '会計・割り勘',
        phrases: [
          {
            id: 't12_01',
            situation: '請求帳單',
            japanese: 'お会{かい}計{けい}をお願{ねが}いします。',
            romaji: 'Okaikei o onegai shimasu.',
            chinese: '麻煩結帳。',
            tip: '也可以叫服務員並做出書寫的手勢。在結帳台直接走去也OK！'
          },
          {
            id: 't12_02',
            situation: '一起結帳',
            japanese: '一{いっ}緒{しょ}にお願{ねが}いします。',
            romaji: 'Issho ni onegai shimasu.',
            chinese: '一起結帳請。',
            tip: '全部人一起付時使用。若要各付各的就說「別々に」(betsubetsu ni)。'
          },
          {
            id: 't12_03',
            situation: '分開結帳',
            japanese: '別{べつ}々{べつ}に払{はら}いたいのですが。',
            romaji: 'Betsubetsu ni haraitai no desu ga.',
            chinese: '我們想要分開結帳。',
            tip: '日本越來越多餐廳接受分帳，但小餐廳可能不行，先詢問比較好。'
          },
          {
            id: 't12_04',
            situation: '詢問可否刷卡',
            japanese: 'クレジットカードは使{つか}えますか？',
            romaji: 'Kurejitto kādo wa tsukaemasu ka?',
            chinese: '請問可以刷信用卡嗎？',
            tip: '日本仍有許多現金的店，尤其是小店和居酒屋，記得帶日圓現金備用！'
          },
          {
            id: 't12_05',
            situation: '詢問可否掃碼付款',
            japanese: 'PayPayは使{つか}えますか？',
            romaji: 'Peipei wa tsukaemasu ka?',
            chinese: '請問可以使用 PayPay 嗎？',
            tip: 'PayPay 是日本最主流的電子支付！台灣的街口、LINE Pay 一般無法使用。'
          },
          {
            id: 't12_06',
            situation: '確認服務費',
            japanese: 'サービス料{りょう}は含{ふく}まれていますか？',
            romaji: 'Sābisu-ryō wa fukumarete imasu ka?',
            chinese: '請問含服務費了嗎？',
            tip: '日本某些高級餐廳會另收10~15%的服務費，提前確認避免驚嚇！'
          },
          {
            id: 't12_07',
            situation: '投訴帳單錯誤',
            japanese: '金{きん}額{がく}が違{ちが}うようなのですが、確{かく}認{にん}していただけますか？',
            romaji: 'Kingaku ga chigau yō na no desu ga, kakunin shite itadakemasu ka?',
            chinese: '金額好像不對，可以幫我確認嗎？',
            tip: '委婉指出帳單問題的禮貌說法，「〜ようなのですが」讓語氣更溫和。'
          },
          {
            id: 't12_08',
            situation: '要求收據',
            japanese: 'レシートをいただけますか？',
            romaji: 'Reshīto o itadakemasu ka?',
            chinese: '可以給我收據嗎？',
            tip: '日本收據通常會自動給，需要發票(領收書)時說「領収書(りょうしゅうしょ)をください」。'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🛍️ Zone 4：血拚時刻 (購物與藥妝)
  // ═══════════════════════════════════════════════
  {
    id: 'zone4',
    name: '血拚時刻',
    nameJp: '買い物・ショッピング',
    emoji: '🛍️',
    color: 'tz4',
    chapters: [
      {
        id: 'travel_13',
        title: '尋找商品',
        titleJp: '商品を探す',
        phrases: [
          {
            id: 't13_01',
            situation: '詢問商品是否有售',
            japanese: 'すみません、これはありますか？',
            romaji: 'Sumimasen, kore wa arimasu ka?',
            chinese: '不好意思，請問有這個嗎？（出示圖片）',
            tip: '出示商品圖片詢問最有效！翻譯APP截圖也可以。'
          },
          {
            id: 't13_02',
            situation: '詢問賣哪個樓層',
            japanese: 'この商{しょう}品{ひん}は何{なん}階{かい}に売{う}っていますか？',
            romaji: 'Kono shōhin wa nankai ni utte imasu ka?',
            chinese: '請問這個商品在幾樓賣？',
            tip: '樓層數：地下1階(B1)、1階(1F)、2階(2F)... 日本的樓層稱呼為「階」，1樓就是1階。'
          },
          {
            id: 't13_03',
            situation: '詢問某品牌在哪',
            japanese: 'ユニクロのコーナーはどこですか？',
            romaji: 'Yunikuro no kōnā wa doko desu ka?',
            chinese: '請問 Uniqlo 的專區在哪裡？',
            tip: '把「ユニクロ」換成你要找的品牌名稱。「コーナー」是專區的意思。'
          },
          {
            id: 't13_04',
            situation: '詢問藥妝店位置',
            japanese: 'ドラッグストアはどこにありますか？',
            romaji: 'Doraggu sutoa wa doko ni arimasu ka?',
            chinese: '請問藥妝店在哪裡？',
            tip: '日本的「ドラッグストア」就是藥妝店，常見有マツモトキヨシ、ウエルシア、ツルハ等。'
          },
          {
            id: 't13_05',
            situation: '找不到商品',
            japanese: 'すみません、〇〇はどこに置{お}いてありますか？',
            romaji: 'Sumimasen, ○○ wa doko ni oite arimasu ka?',
            chinese: '不好意思，〇〇放在哪裡？',
            tip: '把〇〇換成商品名稱，例如：日焼け止め(ひやけどめ)防曬乳、シャンプー洗髮精。'
          },
          {
            id: 't13_06',
            situation: '詢問是否缺貨',
            japanese: 'これは現{げん}在{ざい}在{ざい}庫{こ}はありますか？',
            romaji: 'Kore wa genzai zaiko wa arimasu ka?',
            chinese: '請問這個目前有庫存嗎？',
            tip: '「在庫」(zaiko) 是庫存的意思。如果沒有可以問：「いつ入荷しますか？」（什麼時候到貨？）'
          },
          {
            id: 't13_07',
            situation: '詢問可否訂購',
            japanese: 'お取{と}り寄{よ}せはできますか？',
            romaji: 'Otoriyose wa dekimasu ka?',
            chinese: '可以訂購嗎？',
            tip: '「お取り寄せ」是指從其他地方調貨。如果旅程還有幾天，可以試試看。'
          },
          {
            id: 't13_08',
            situation: '請人幫忙找尺寸',
            japanese: 'Mサイズはありますか？',
            romaji: 'Emu saizu wa arimasu ka?',
            chinese: '請問有 M 號嗎？',
            tip: '尺寸：S(エス)、M(エム)、L(エル)、XL(エックスエル)。也可以說「〜号」如「9号」。'
          },
        ]
      },
      {
        id: 'travel_14',
        title: '試用與尺寸',
        titleJp: '試着・サイズ',
        phrases: [
          {
            id: 't14_01',
            situation: '詢問可否試穿',
            japanese: '試{し}着{ちゃく}してもいいですか？',
            romaji: 'Shichaku shite mo ii desu ka?',
            chinese: '可以試穿嗎？',
            tip: '「試着室」(しちゃくしつ) 是試衣間的意思。試穿後不想買說「また来ます」（我再來）。'
          },
          {
            id: 't14_02',
            situation: '要求大一號',
            japanese: 'もう一{ひと}つ大{おお}きいサイズはありますか？',
            romaji: 'Mō hitotsu ōkii saizu wa arimasu ka?',
            chinese: '有再大一號的尺寸嗎？',
            tip: '「もう一つ」是「再一個」的意思。小一號：「もう一つ小さいサイズ」。'
          },
          {
            id: 't14_03',
            situation: '詢問試穿結果',
            japanese: 'サイズが合{あ}いませんでした。',
            romaji: 'Saizu ga aimasen deshita.',
            chinese: '尺寸不合。',
            tip: '可以補充說：「大きすぎます」（太大了）或「小さすぎます」（太小了）。'
          },
          {
            id: 't14_04',
            situation: '詢問試用化妝品',
            japanese: 'テスターを使{つか}ってみてもいいですか？',
            romaji: 'Tesutā o tsukatte mite mo ii desu ka?',
            chinese: '可以試用 tester 嗎？',
            tip: '「テスター」(tester) 是試用品的意思。藥妝店通常都有，直接問沒問題。'
          },
          {
            id: 't14_05',
            situation: '請測量尺寸',
            japanese: 'サイズを測{はか}っていただけますか？',
            romaji: 'Saizu o hakatte itadakemasu ka?',
            chinese: '可以幫我量一下尺寸嗎？',
            tip: '買西裝、禮裝時特別有用。日本服務很仔細，通常都會認真幫你量。'
          },
          {
            id: 't14_06',
            situation: '詢問試鞋',
            japanese: 'これを履{は}いてみてもいいですか？',
            romaji: 'Kore o haite mite mo ii desu ka?',
            chinese: '可以試穿這雙鞋嗎？',
            tip: '「履く」(haku) 是穿鞋子/褲子的動詞。可以搭配：「24.5cmです」說明尺寸。'
          },
          {
            id: 't14_07',
            situation: '不適合決定不買',
            japanese: 'イメージと違{ちが}いましたので、やめておきます。',
            romaji: 'Imēji to chigaimashita node, yame te okimasu.',
            chinese: '和我想像的不一樣，我就不買了。',
            tip: '禮貌地拒絕購買的說法。不需要道歉，這是很自然的購物行為。'
          },
          {
            id: 't14_08',
            situation: '決定購買',
            japanese: 'これにします。',
            romaji: 'Kore ni shimasu.',
            chinese: '我要這個。',
            tip: '最乾脆的購買決定句！「〜にします」是「決定選〜」的說法，也可用於點餐。'
          },
        ]
      },
      {
        id: 'travel_15',
        title: '顏色與庫存',
        titleJp: '色・在庫確認',
        phrases: [
          {
            id: 't15_01',
            situation: '詢問其他顏色',
            japanese: '他{ほか}の色{いろ}はありますか？',
            romaji: 'Hoka no iro wa arimasu ka?',
            chinese: '有其他顏色嗎？',
            tip: '常用顏色：白(しろ)、黒(くろ)、赤(あか)、青(あお)、緑(みどり)、黄(き)、ピンク(pink)。'
          },
          {
            id: 't15_02',
            situation: '指定顏色',
            japanese: '黒{くろ}いのはありますか？',
            romaji: 'Kuroi no wa arimasu ka?',
            chinese: '有黑色的嗎？',
            tip: '顏色說法：白い(しろい)、黒い(くろい)、青い(あおい)、赤い(あかい)、黄色い(きいろい)。'
          },
          {
            id: 't15_03',
            situation: '詢問是否最後一個',
            japanese: 'これは最{さい}後{ご}の一{ひと}つですか？',
            romaji: 'Kore wa saigo no hitotsu desu ka?',
            chinese: '這是最後一個嗎？',
            tip: '如果是限量商品更要問！有時候搶最後一個反而有紀念價值。'
          },
          {
            id: 't15_04',
            situation: '詢問新品',
            japanese: '新{しん}商{しょう}品{ひん}はどれですか？',
            romaji: 'Shin-shōhin wa dore desu ka?',
            chinese: '哪個是新商品？',
            tip: '日本推陳出新很快，在藥妝店問這句，往往能發現寶藏！'
          },
          {
            id: 't15_05',
            situation: '詢問限定商品',
            japanese: '限{げん}定{てい}品{ひん}はありますか？',
            romaji: 'Genteihin wa arimasu ka?',
            chinese: '請問有限定商品嗎？',
            tip: '日本的「期間限定」、「地域限定」商品是旅遊購物的一大亮點！'
          },
          {
            id: 't15_06',
            situation: '詢問熱賣商品',
            japanese: '人{にん}気{き}商{しょう}品{ひん}はどれですか？',
            romaji: 'Ninki shōhin wa dore desu ka?',
            chinese: '請問哪個是熱賣商品？',
            tip: '「人気」(にんき) 是人氣/熱門的意思。問熱門商品通常能快速找到好物！'
          },
          {
            id: 't15_07',
            situation: '詢問同款不同尺寸',
            japanese: 'このデザインでLサイズはありますか？',
            romaji: 'Kono dezain de eru saizu wa arimasu ka?',
            chinese: '這個款式有 L 號嗎？',
            tip: '「デザイン」是款式的意思。簡單清楚地表達你的需求。'
          },
          {
            id: 't15_08',
            situation: '確認商品正品',
            japanese: 'これは本{ほん}物{もの}ですか？',
            romaji: 'Kore wa honmono desu ka?',
            chinese: '這是正品嗎？',
            tip: '在市場或地攤購物時可以問，但在正規百貨或藥妝店通常都是正品，不需要擔心。'
          },
        ]
      },
      {
        id: 'travel_16',
        title: '免稅與付款',
        titleJp: '免税・お支払い',
        phrases: [
          {
            id: 't16_01',
            situation: '詢問是否可以退稅',
            japanese: '免{めん}税{ぜい}にできますか？',
            romaji: 'Menzei ni dekimasu ka?',
            chinese: '可以辦免稅嗎？',
            tip: '購物滿5,000日圓（未含稅）以上可以退稅！需要護照，通常在專區辦理。'
          },
          {
            id: 't16_02',
            situation: '辦理退稅',
            japanese: 'タックスフリーをお願{ねが}いします。パスポートはこちらです。',
            romaji: 'Takkusu furī o onegai shimasu. Pasupōto wa kochira desu.',
            chinese: '麻煩辦理免稅。這是護照。',
            tip: '「タックスフリー」= Tax Free。辦理時會需要護照，把購買的商品帶在身邊。'
          },
          {
            id: 't16_03',
            situation: '詢問分開包裝',
            japanese: '個{こ}別{べつ}に包{つつ}んでいただけますか？',
            romaji: 'Kobetsu ni tsutsunde itadakemasu ka?',
            chinese: '可以分開包裝嗎？',
            tip: '要分送給不同的人當伴手禮時非常實用！日本的包裝服務通常都做得很漂亮。'
          },
          {
            id: 't16_04',
            situation: '詢問可否禮品包裝',
            japanese: 'ギフト包{ほう}装{そう}をお願{ねが}いできますか？',
            romaji: 'Gifuto hōsō o onegai dekimasu ka?',
            chinese: '可以幫我做禮品包裝嗎？',
            tip: '很多店都有精美的禮品包裝服務，有時候需要額外費用，先確認一下。'
          },
          {
            id: 't16_05',
            situation: '付現金',
            japanese: '現{げん}金{きん}で払{はら}います。',
            romaji: 'Genkin de haraimasu.',
            chinese: '我用現金付款。',
            tip: '「現金」(genkin) 是現金。在小店或居酒屋通常只接受現金！'
          },
          {
            id: 't16_06',
            situation: '詢問點數累積',
            japanese: 'ポイントカードはありますか？',
            romaji: 'Pointo kādo wa arimasu ka?',
            chinese: '請問有集點卡嗎？',
            tip: '日本有很多店家的集點卡系統，旅遊期間可以累積點數換優惠！'
          },
          {
            id: 't16_07',
            situation: '詢問是否有折扣',
            japanese: '割{わり}引{びき}はありますか？',
            romaji: 'Waribiki wa arimasu ka?',
            chinese: '請問有折扣嗎？',
            tip: '「割引」(waribiki) 是折扣的意思。持有觀光護照或會員卡有時可以享優惠。'
          },
          {
            id: 't16_08',
            situation: '詢問退款政策',
            japanese: '返{へん}品{ぴん}・交{こう}換{かん}はできますか？',
            romaji: 'Henpin/kōkan wa dekimasu ka?',
            chinese: '請問可以退換貨嗎？',
            tip: '「返品」= 退貨，「交換」= 換貨。日本退換貨通常條件較嚴格，購買前確認！'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // ⛩️ Zone 5：漫步日本 (觀光與社交)
  // ═══════════════════════════════════════════════
  {
    id: 'zone5',
    name: '漫步日本',
    nameJp: '観光・社交',
    emoji: '⛩️',
    color: 'tz5',
    chapters: [
      {
        id: 'travel_17',
        title: '購買門票',
        titleJp: '入場券を買う',
        phrases: [
          {
            id: 't17_01',
            situation: '購買成人票',
            japanese: '大{おと}人{な}二{に}枚{まい}ください。',
            romaji: 'Otona nimai kudasai.',
            chinese: '請給我兩張成人票。',
            tip: '大人(おとな)=成人票，子供(こども)=兒童票，シニア=老年票，学生=學生票。'
          },
          {
            id: 't17_02',
            situation: '詢問票價',
            japanese: '入{にゅう}場{じょう}料{りょう}はいくらですか？',
            romaji: 'Nyūjō-ryō wa ikura desu ka?',
            chinese: '請問入場費是多少？',
            tip: '也可以問：「料金表はありますか？」（有沒有票價表？）'
          },
          {
            id: 't17_03',
            situation: '詢問有無語音導覽',
            japanese: '音{おん}声{せい}ガイドはありますか？中{ちゅう}国{ごく}語{ご}はありますか？',
            romaji: 'Onsei gaido wa arimasu ka? Chūgokugo wa arimasu ka?',
            chinese: '請問有語音導覽嗎？有中文的嗎？',
            tip: '很多大型博物館、寺廟都有多語言語音導覽，通常需要另外租用。'
          },
          {
            id: 't17_04',
            situation: '詢問開放時間',
            japanese: '何{なん}時{じ}から何{なん}時{じ}まで開{あ}いていますか？',
            romaji: 'Nanji kara nanji made aite imasu ka?',
            chinese: '請問從幾點開放到幾點？',
            tip: '同時可以問：「定休日はありますか？」（有固定休館日嗎？）'
          },
          {
            id: 't17_05',
            situation: '詢問套票',
            japanese: 'セット券{けん}はありますか？',
            romaji: 'Setto-ken wa arimasu ka?',
            chinese: '請問有套票嗎？',
            tip: '多個景點的聯合票通常更划算！也可以問「共通券」(きょうつうけん)。'
          },
          {
            id: 't17_06',
            situation: '詢問免費日',
            japanese: '無{む}料{りょう}で入{はい}れる日{ひ}はありますか？',
            romaji: 'Muryō de haireru hi wa arimasu ka?',
            chinese: '有免費入場的日子嗎？',
            tip: '部分博物館在特定日子免費開放（如國定假日前後），先查一下很省錢！'
          },
          {
            id: 't17_07',
            situation: '購買紀念品',
            japanese: 'ミュージアムショップはどこですか？',
            romaji: 'Myūjiamu shoppu wa doko desu ka?',
            chinese: '博物館的禮品店在哪裡？',
            tip: '日本博物館的周邊商品設計非常精美，常常成為最有紀念價值的伴手禮！'
          },
          {
            id: 't17_08',
            situation: '詢問拍照限制',
            japanese: '写{しゃ}真{しん}を撮{と}ってもいいですか？',
            romaji: 'Shashin o totte mo ii desu ka?',
            chinese: '可以拍照嗎？',
            tip: '日本有些神社、美術館禁止拍照，看到「撮影禁止」標誌就要遵守。'
          },
        ]
      },
      {
        id: 'travel_18',
        title: '問路與迷航',
        titleJp: '道を聞く',
        phrases: [
          {
            id: 't18_01',
            situation: '詢問某地怎麼走',
            japanese: 'すみません、〇〇はどうやって行{い}けばいいですか？',
            romaji: 'Sumimasen, ○○ wa dō yatte ikeba ii desu ka?',
            chinese: '不好意思，請問去〇〇怎麼走？',
            tip: '把〇〇換成目的地名稱。也可以說「〇〇への行き方を教えてください」。'
          },
          {
            id: 't18_02',
            situation: '確認現在位置',
            japanese: '今{いま}、地{ち}図{ず}上{じょう}のどこにいますか？',
            romaji: 'Ima, chizujō no doko ni imasu ka?',
            chinese: '請問我現在在地圖上的哪裡？',
            tip: '給對方看地圖/手機Google Maps，讓對方直接指出現在位置最有效！'
          },
          {
            id: 't18_03',
            situation: '徒步需時詢問',
            japanese: '歩{ある}いて何{なん}分{ぷん}くらいかかりますか？',
            romaji: 'Aruite nanpun kurai kakarimasu ka?',
            chinese: '走路大概需要幾分鐘？',
            tip: '根據回答判斷是否需要搭車。太遠的話可以問搭電車/巴士的方法。'
          },
          {
            id: 't18_04',
            situation: '詢問附近的地標',
            japanese: 'この近{ちか}くに有{ゆう}名{めい}なランドマークはありますか？',
            romaji: 'Kono chikaku ni yūmei na randomāku wa arimasu ka?',
            chinese: '這附近有什麼著名地標嗎？',
            tip: '迷路時先找地標定位，再用Google Maps導航比較容易。'
          },
          {
            id: 't18_05',
            situation: '請求帶路',
            japanese: 'そこまで連{つ}れて行{い}っていただけますか？',
            romaji: 'Soko made tsurete itte itadakemasu ka?',
            chinese: '可以帶我過去嗎？',
            tip: '日本人非常熱心，如果附近就說「少し先なので」（就在附近）通常願意帶路！'
          },
          {
            id: 't18_06',
            situation: '迷路求救',
            japanese: '迷{まよ}ってしまいました。助{たす}けてもらえますか？',
            romaji: 'Mayotte shimaimashita. Tasukete moraemasu ka?',
            chinese: '我迷路了，可以幫幫我嗎？',
            tip: '「迷う」是迷路/迷失方向的意思。不要慌張，日本人通常都很樂意幫助迷路的旅客！'
          },
          {
            id: 't18_07',
            situation: '確認方向',
            japanese: 'この道{みち}まっすぐ行{い}けばいいですか？',
            romaji: 'Kono michi massugu ikeba ii desu ka?',
            chinese: '這條路一直走就到了嗎？',
            tip: '方向詞：まっすぐ(直走)、右(みぎ)、左(ひだり)、あそこ(那裡)、こっち(這邊)。'
          },
          {
            id: 't18_08',
            situation: '向路人尋求Google Maps確認',
            japanese: 'すみません、これで合{あ}っていますか？',
            romaji: 'Sumimasen, kore de atte imasu ka?',
            chinese: '不好意思，這樣走對嗎？（出示手機地圖）',
            tip: '把手機地圖給路人看，最直接有效！「合っている」= 是對的。'
          },
        ]
      },
      {
        id: 'travel_19',
        title: '拍照神助攻',
        titleJp: '写真撮影',
        phrases: [
          {
            id: 't19_01',
            situation: '拜託路人幫拍照',
            japanese: 'すみません、写{しゃ}真{しん}を撮{と}っていただけますか？',
            romaji: 'Sumimasen, shashin o totte itadakemasu ka?',
            chinese: '不好意思，可以幫我們拍照嗎？',
            tip: '遞上手機時說「どうぞ」。日本人通常非常願意幫忙，甚至會幫你拍多張！'
          },
          {
            id: 't19_02',
            situation: '指定拍攝構圖',
            japanese: 'このボタンを押{お}すだけでいいです。',
            romaji: 'Kono botan o osu dake de ii desu.',
            chinese: '只要按這個按鈕就好了。',
            tip: '先讓對方看你要按的快門鍵，避免誤操作或橫向/縱向拍錯。'
          },
          {
            id: 't19_03',
            situation: '確認可以這樣拍嗎',
            japanese: 'この構{こう}図{ず}で撮{と}ってもいいですか？',
            romaji: 'Kono kōzu de totte mo ii desu ka?',
            chinese: '可以用這個構圖拍嗎？',
            tip: '在神社或私人場所先確認是否允許拍照，特別是某些特別角度。'
          },
          {
            id: 't19_04',
            situation: '請再拍一張',
            japanese: 'もう一{いち}枚{まい}お願{ねが}いできますか？',
            romaji: 'Mō ichimai onegai dekimasu ka?',
            chinese: '可以再拍一張嗎？',
            tip: '「もう一枚」是再一張的意思。說完後微笑說「はい、チーズ！」(Cheese!) 就好。'
          },
          {
            id: 't19_05',
            situation: '請移動一點',
            japanese: 'もう少{すこ}し右{みぎ}に移{い}動{どう}してください。',
            romaji: 'Mō sukoshi migi ni idō shite kudasai.',
            chinese: '請再往右移動一點。',
            tip: '導引被拍者移動：右(みぎ)右→、左(ひだり)左←、前(まえ)前→、後(うしろ)後退。'
          },
          {
            id: 't19_06',
            situation: '詢問可否拍攝對方',
            japanese: '一{いっ}緒{しょ}に写{しゃ}真{しん}を撮{と}ってもいいですか？',
            romaji: 'Issho ni shashin o totte mo ii desu ka?',
            chinese: '可以一起拍照嗎？',
            tip: '遇到穿傳統服裝的表演者或可愛的人，禮貌地詢問是基本禮儀。'
          },
          {
            id: 't19_07',
            situation: '詢問攝影限制',
            japanese: 'ここで写{しゃ}真{しん}を撮{と}ってもかまいませんか？',
            romaji: 'Koko de shashin o totte mo kamaimasen ka?',
            chinese: '在這裡拍照沒關係嗎？',
            tip: '「かまいません」= 沒問題/不介意。比「いいですか」更禮貌。'
          },
          {
            id: 't19_08',
            situation: '感謝對方幫忙拍照',
            japanese: 'ありがとうございます。すごく良{よ}い写{しゃ}真{しん}が撮{と}れました！',
            romaji: 'Arigatō gozaimasu. Sugoku yoi shashin ga toremashita!',
            chinese: '非常感謝！拍到了很棒的照片！',
            tip: '真心的感謝讓對方也開心！日本人聽到稱讚通常會非常開心，互相留下美好回憶。'
          },
        ]
      },
      {
        id: 'travel_20',
        title: '簡單寒暄',
        titleJp: '日常挨拶',
        phrases: [
          {
            id: 't20_01',
            situation: '讚美食物好吃',
            japanese: 'とても美{おい}味{し}いです！',
            romaji: 'Totemo oishii desu!',
            chinese: '真的非常好吃！',
            tip: '更強烈的讚美：「最高です！」(最棒了!)、「絶品です！」(絕品/無與倫比!)。'
          },
          {
            id: 't20_02',
            situation: '讚美某樣東西很厲害',
            japanese: 'すごいですね！',
            romaji: 'Sugoi desu ne!',
            chinese: '好厲害喔！',
            tip: '「すごい」是萬用讚美詞！配上「ですね」顯得更有同理心，對方通常會很高興。'
          },
          {
            id: 't20_03',
            situation: '感謝款待',
            japanese: 'ご馳{ち}走{そう}様{さま}でした。',
            romaji: 'Gochisōsama deshita.',
            chinese: '謝謝款待。（用餐結束後說）',
            tip: '離開餐廳時一定要說！這是日本非常重要的禮儀，對老闆/廚師表達感謝。'
          },
          {
            id: 't20_04',
            situation: '感謝辛勞',
            japanese: 'お疲{つか}れ様{さま}でした。',
            romaji: 'Otsukaresama deshita.',
            chinese: '您辛苦了。',
            tip: '表達欣賞對方努力的話，日常用途非常廣泛，旅遊服務人員都適用。'
          },
          {
            id: 't20_05',
            situation: '初次見面',
            japanese: 'はじめまして。どうぞよろしくお願{ねが}いします。',
            romaji: 'Hajimemashite. Dōzo yoroshiku onegai shimasu.',
            chinese: '初次見面。請多多指教。',
            tip: '正式的初次見面問候語，配合微微鞠躬，給人留下很好的第一印象！'
          },
          {
            id: 't20_06',
            situation: '道別',
            japanese: 'またいつか会{あ}いましょうね。',
            romaji: 'Mata itsuka aimashō ne.',
            chinese: '希望有一天能再見面。',
            tip: '結交到好的旅伴或當地朋友道別時說這句，充滿溫度！'
          },
          {
            id: 't20_07',
            situation: '輕鬆道歉',
            japanese: 'すみません、失{しつ}礼{れい}しました。',
            romaji: 'Sumimasen, shitsurei shimashita.',
            chinese: '對不起，打擾了。',
            tip: '「すみません」是對不起+打擾對方的萬用謙語。「失礼しました」表示正式道歉。'
          },
          {
            id: 't20_08',
            situation: '迴應對方的幫助',
            japanese: '助{たす}かりました。本{ほん}当{とう}にありがとうございます。',
            romaji: 'Tasukarimashita. Hontō ni arigatō gozaimasu.',
            chinese: '您真的幫了我的大忙。真的非常感謝您。',
            tip: '「助かりました」比單純說ありがとう更有感情，讓對方知道你真的很感激！'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 🚨 Zone 6：危機解除 (緊急狀況與求助)
  // ═══════════════════════════════════════════════
  {
    id: 'zone6',
    name: '危機解除',
    nameJp: '緊急・トラブル',
    emoji: '🚨',
    color: 'tz6',
    chapters: [
      {
        id: 'travel_21',
        title: '遺失物品',
        titleJp: '落とし物・紛失',
        phrases: [
          {
            id: 't21_01',
            situation: '護照遺失',
            japanese: 'パスポートをなくしてしまいました。',
            romaji: 'Pasupōto o nakushite shimaimashita.',
            chinese: '我把護照弄丟了。',
            tip: '護照遺失請立刻聯絡最近的台灣辦事處（台北駐日經濟文化辦事處）。'
          },
          {
            id: 't21_02',
            situation: '錢包遺失',
            japanese: '財{さい}布{ふ}をなくしてしまいました。どうすればいいですか？',
            romaji: 'Saifu o nakushite shimaimashita. Dō sureba ii desu ka?',
            chinese: '我把錢包遺失了。我該怎麼辦？',
            tip: '日本遺失物找回率出奇地高！先到最近的「交番」(こうばん，派出所)報遺失。'
          },
          {
            id: 't21_03',
            situation: '東西掉在電車上',
            japanese: '電{でん}車{しゃ}の中{なか}に荷{に}物{もつ}を忘{わす}れてきてしまいました。',
            romaji: 'Densha no naka ni nimotsu o wasurete kite shimaimashita.',
            chinese: '我把行李忘在電車裡了。',
            tip: '立刻聯絡該條線路的「忘れ物センター」(遺失物中心)，或到站務員室說明。'
          },
          {
            id: 't21_04',
            situation: '報遺失',
            japanese: '落{お}とし物{もの}の届{とど}け出{で}をしたいのですが。',
            romaji: 'Otoshimono no todokede o shitai no desu ga.',
            chinese: '我想申報遺失物。',
            tip: '到警察署或交番說這句話，警察會做記錄並協助尋找。'
          },
          {
            id: 't21_05',
            situation: '描述遺失物',
            japanese: '黒{くろ}い財{さい}布{ふ}で、中{なか}に現{げん}金{きん}とカードが入{はい}っています。',
            romaji: 'Kuroi saifu de, naka ni genkin to kādo ga haitte imasu.',
            chinese: '是一個黑色的錢包，裡面有現金和卡片。',
            tip: '描述遺失物的顏色、形狀、內容物，越詳細越好！'
          },
          {
            id: 't21_06',
            situation: '描述遺失時間地點',
            japanese: '〇〇駅{えき}で、10時{じ}頃{ごろ}なくしたと思{おも}います。',
            romaji: '○○-eki de, jūji goro nakushita to omoimasu.',
            chinese: '大概在〇〇站、10點左右遺失的。',
            tip: '時間和地點越精確越好。「〇〇頃」= 大約〇〇時候。'
          },
          {
            id: 't21_07',
            situation: '詢問遺失物招領處',
            japanese: '遺{い}失{しつ}物{ぶつ}取{とり}扱{あつか}い所{しょ}はどこですか？',
            romaji: 'Ishitsubutsu toriatsukai-jo wa doko desu ka?',
            chinese: '請問遺失物招領處在哪裡？',
            tip: '大型車站、百貨公司、主題公園都有專設的遺失物招領處。'
          },
          {
            id: 't21_08',
            situation: '確認聯絡方式',
            japanese: '見{み}つかったら、このホテルに連{れん}絡{らく}していただけますか？',
            romaji: 'Mitsukattara, kono hoteru ni renraku shite itadakemasu ka?',
            chinese: '如果找到的話，可以聯絡這間飯店嗎？',
            tip: '留下可以聯絡到你的方式。飯店電話是最可靠的聯絡方式之一。'
          },
        ]
      },
      {
        id: 'travel_22',
        title: '身體不適',
        titleJp: '体調不良・医療',
        phrases: [
          {
            id: 't22_01',
            situation: '發燒',
            japanese: '熱{ねつ}があります。',
            romaji: 'Netsu ga arimasu.',
            chinese: '我發燒了。',
            tip: '可以加說溫度：「38度あります」（體溫38度）。到藥局可以先買退燒藥「解熱剤」。'
          },
          {
            id: 't22_02',
            situation: '肚子痛',
            japanese: 'お腹{なか}が痛{いた}いです。',
            romaji: 'Onaka ga itai desu.',
            chinese: '我肚子痛。',
            tip: '身體部位痛的說法：頭(あたま)頭、喉(のど)喉嚨、足(あし)腳、背中(せなか)背部。'
          },
          {
            id: 't22_03',
            situation: '尋找藥局',
            japanese: 'この近{ちか}くに薬{やっ}局{きょく}はありますか？',
            romaji: 'Kono chikaku ni yakkyoku wa arimasu ka?',
            chinese: '這附近有藥局嗎？',
            tip: '「薬局」是正規藥局（需要處方箋），便利購買成藥請去「ドラッグストア」。'
          },
          {
            id: 't22_04',
            situation: '尋找醫院',
            japanese: '内{ない}科{か}はどこにありますか？',
            romaji: 'Naika wa doko ni arimasu ka?',
            chinese: '請問內科在哪裡？',
            tip: '各科名稱：外科(げか)外科、歯科(しか)牙科、眼科(がんか)眼科、耳鼻科(じびか)耳鼻喉科。'
          },
          {
            id: 't22_05',
            situation: '在醫院說明症狀',
            japanese: 'ここが痛{いた}いです。（患{かん}部{ぶ}を指{さ}して）',
            romaji: 'Koko ga itai desu. (Kanbu o sashite)',
            chinese: '這裡很痛。（指著患處說）',
            tip: '不知道日文怎麼說的時候，直接指著不舒服的地方說「ここ」最有效！'
          },
          {
            id: 't22_06',
            situation: '有帶藥單',
            japanese: '普{ふ}段{だん}飲{の}んでいる薬{くすり}はこれです。',
            romaji: 'Fudan nonde iru kusuri wa kore desu.',
            chinese: '我平時吃的藥是這個。',
            tip: '把藥品包裝或說明書給醫生看。出發前最好把慢性病用藥的英文名稱準備好。'
          },
          {
            id: 't22_07',
            situation: '詢問旅遊保險',
            japanese: '海{かい}外{がい}旅{りょ}行{こう}保{ほ}険{けん}で対{たい}応{おう}できますか？',
            romaji: 'Kaigai ryokō hoken de taiō dekimasu ka?',
            chinese: '可以用海外旅遊保險嗎？',
            tip: '出國前一定要買旅遊保險！看診前出示保險卡或聯絡保險公司的緊急電話。'
          },
          {
            id: 't22_08',
            situation: '請人幫叫救護車',
            japanese: '救{きゅう}急{きゅう}車{しゃ}を呼{よ}んでください！',
            romaji: 'Kyūkyūsha o yonde kudasai!',
            chinese: '請叫救護車！',
            tip: '日本急救電話：119（消防/救護車）。警察電話：110。觀光諮詢：#9999。'
          },
        ]
      },
      {
        id: 'travel_23',
        title: '尋求協助',
        titleJp: '助けを求める',
        phrases: [
          {
            id: 't23_01',
            situation: '緊急求救',
            japanese: '助{たす}けてください！',
            romaji: 'Tasukete kudasai!',
            chinese: '請幫幫我！',
            tip: '危急情況下最直接有效的求救語。說完後立刻指出問題所在。'
          },
          {
            id: 't23_02',
            situation: '告知是外國人',
            japanese: '私{わたし}は外{がい}国{こく}人{じん}で、日{に}本{ほん}語{ご}があまりわかりません。',
            romaji: 'Watashi wa gaikokujin de, nihongo ga amari wakarimasen.',
            chinese: '我是外國人，日文不太懂。',
            tip: '說出這句話後，對方通常會更耐心地用簡單的日文或手勢溝通。'
          },
          {
            id: 't23_03',
            situation: '請求借電話',
            japanese: '電{でん}話{わ}を貸{か}していただけますか？',
            romaji: 'Denwa o kashite itadakemasu ka?',
            chinese: '可以借我打電話嗎？',
            tip: '手機沒電或迷失時很有用。現在大部分地方也有公共Wi-Fi，可以嘗試連接。'
          },
          {
            id: 't23_04',
            situation: '請求幫助聯絡',
            japanese: '台{たい}湾{わん}の連{れん}絡{らく}先{さき}に電{でん}話{わ}するのを手{て}伝{つだ}っていただけますか？',
            romaji: 'Taiwan no renrakusaki ni denwa suru no o tetsudatte itadakemasu ka?',
            chinese: '可以幫我聯絡台灣的聯絡人嗎？',
            tip: '準備好緊急聯絡人的電話號碼，在需要時可以請人幫忙撥打。'
          },
          {
            id: 't23_05',
            situation: '尋找警察',
            japanese: 'すぐ近{ちか}くに交{こう}番{ばん}はありますか？',
            romaji: 'Sugu chikaku ni kōban wa arimasu ka?',
            chinese: '這附近有派出所嗎？',
            tip: '「交番」(こうばん) 是日本的警察局派出所，幾乎每個區域都有，非常密集！'
          },
          {
            id: 't23_06',
            situation: '遭遇竊盜',
            japanese: '盗{とう}難{なん}にあいました。警{けい}察{さつ}に届{とど}けたいのですが。',
            romaji: 'Tōnan ni aimashita. Keisatsu ni todoke tai no desu ga.',
            chinese: '我遭到竊盜了。我想報警。',
            tip: '「盗難にあう」是遭遇竊盜的說法。申請報案證明(被害届)是辦理保險理賠必要的文件。'
          },
          {
            id: 't23_07',
            situation: '找到掉落的東西要上交',
            japanese: 'これを拾{ひろ}ったのですが、届{とど}けたいです。',
            romaji: 'Kore o hirotta no desu ga, todoke tai desu.',
            chinese: '我撿到這個東西，想上交。',
            tip: '日本人非常誠實，在日本撿到東西都會上交！你也可以這樣做，去附近的交番上交。'
          },
          {
            id: 't23_08',
            situation: '遭遇詐騙',
            japanese: 'だまされたと思{おも}います。助{たす}けてください。',
            romaji: 'Damasareta to omoimasu. Tasukete kudasai.',
            chinese: '我覺得我被騙了。請幫幫我。',
            tip: '遇到詐騙或不明收費，立刻離開現場並尋求警察協助。日本總體治安很好，但仍需注意。'
          },
        ]
      },
      {
        id: 'travel_24',
        title: '天災與避難',
        titleJp: '災害・避難',
        phrases: [
          {
            id: 't24_01',
            situation: '詢問避難所',
            japanese: '避{ひ}難{なん}所{じょ}はどこですか？',
            romaji: 'Hinanjo wa doko desu ka?',
            chinese: '請問避難所在哪裡？',
            tip: '日本有完善的避難設施，通常在小學、公園等地。跟著人群走或看路標。'
          },
          {
            id: 't24_02',
            situation: '地震後確認電車',
            japanese: '電{でん}車{しゃ}はまだ動{うご}いていますか？',
            romaji: 'Densha wa mada ugoite imasu ka?',
            chinese: '電車現在還有在行駛嗎？',
            tip: '地震後電車通常會暫停確認安全，通常30分~1小時後恢復，可以在車站等待。'
          },
          {
            id: 't24_03',
            situation: '詢問目前危險程度',
            japanese: 'ここは安{あん}全{ぜん}ですか？',
            romaji: 'Koko wa anzen desu ka?',
            chinese: '這裡安全嗎？',
            tip: '大地震後要遠離玻璃和建築物外牆。確認安全後再移動。'
          },
          {
            id: 't24_04',
            situation: '告知有人受傷',
            japanese: 'けが人{にん}がいます！急{いそ}いで助{たす}けに来{き}てください！',
            romaji: 'Keganin ga imasu! Isoide tasuke ni kite kudasai!',
            chinese: '有人受傷了！請趕快來幫忙！',
            tip: '「けが人」是受傷者的意思。立刻打119求救，告知所在地址或建築物名稱。'
          },
          {
            id: 't24_05',
            situation: '詢問是否需要撤離',
            japanese: 'ここから逃{に}げなければなりませんか？',
            romaji: 'Koko kara nigenakereba narimasen ka?',
            chinese: '我們必須從這裡撤離嗎？',
            tip: '訓練有素的日本防災廣播通常都有指引，跟著指示行動最安全。'
          },
          {
            id: 't24_06',
            situation: '詢問海嘯預警',
            japanese: '津{つ}波{なみ}警{けい}報{ほう}が出{で}ていますか？',
            romaji: 'Tsunami keihō ga dete imasu ka?',
            chinese: '現在有發出海嘯警報嗎？',
            tip: '在海邊感受到地震，不要等警報，立刻向高處撤離！「高台へ避難」= 向高地避難。'
          },
          {
            id: 't24_07',
            situation: '颱風確認',
            japanese: '台{たい}風{ふう}で交{こう}通{つう}機{き}関{かん}は動{うご}いていますか？',
            romaji: 'Taifū de kōtsū kikan wa ugoite imasu ka?',
            chinese: '颱風造成的影響，交通還有運行嗎？',
            tip: '颱風季節（7~10月）要特別注意，很多電車和飛機會暫時停駛。提前查好備案路線。'
          },
          {
            id: 't24_08',
            situation: '確認緊急聯絡電話',
            japanese: '緊{きん}急{きゅう}の場{ば}合{あい}、何{なん}番{ばん}に電{でん}話{わ}すればいいですか？',
            romaji: 'Kinkyū no baai, nanban ni denwa sureba ii desu ka?',
            chinese: '緊急情況的話，應該打幾號電話？',
            tip: '日本緊急電話：119（火災/救護車）、110（警察）。觀光遇到問題：#9999（觀光廳諮詢台）。'
          },
        ]
      },
    ]
  },
  // ═══════════════════════════════════════════════
  // 🍙 Zone 7：在地實戰 (便利商店、居酒屋與自駕)
  // ═══════════════════════════════════════════════
  {
    id: 'zone7',
    name: '在地實戰',
    nameJp: 'ローカル実戦',
    emoji: '🍙',
    color: 'tz7',
    chapters: [
      {
        id: 'travel_25',
        title: '便利商店結帳',
        titleJp: 'コンビニ会計',
        phrases: [
          {
            id: 't25_01',
            situation: '需要袋子',
            japanese: '袋{ふくろ}をお願{ねが}いします。',
            romaji: 'Fukuro o onegai shimasu.',
            chinese: '麻煩給我袋子。',
            tip: '店員會問「袋はご利用ですか？」(需要袋子嗎？)。不需要則說「いいえ、結構です」(不用了)。'
          },
          {
            id: 't25_02',
            situation: '不需要袋子',
            japanese: '袋{ふくろ}はいりません。このままでいいです。',
            romaji: 'Fukuro wa irimasen. Kono mama de ii desu.',
            chinese: '不需要袋子。這樣就可以了。',
            tip: '自己有帶環保袋時可以說「マイバッグを持っています」(我有帶環保袋)。'
          },
          {
            id: 't25_03',
            situation: '需要加熱',
            japanese: '温{あたた}めてください。',
            romaji: 'Atatamete kudasai.',
            chinese: '請幫我加熱。',
            tip: '買便當常被問「お弁当温めますか？」(便當需要加熱嗎？)。'
          },
          {
            id: 't25_04',
            situation: '索取餐具',
            japanese: 'お箸{はし}（スプーン）をつけてください。',
            romaji: 'Ohashi (supūn) o tsukete kudasai.',
            chinese: '請給我筷子（湯匙）。',
            tip: '有時店員會主動問「お箸はお付けしますか？」(需要附上筷子嗎？)。'
          },
          {
            id: 't25_05',
            situation: '買熱食炸物',
            japanese: 'ファミチキを一{ひと}つください。',
            romaji: 'Famichiki o hitotsu kudasai.',
            chinese: '請給我一個全家炸雞。',
            tip: '「〇〇を一つください」是萬用句型。炸雞、肉包等都在櫃台點。'
          },
          {
            id: 't25_06',
            situation: '詢問特定支付',
            japanese: '交通系{こうつうけい}ICカードで払{はら}えますか？',
            romaji: 'Kōtsūkei aishī kādo de haraemasu ka?',
            chinese: '可以用交通IC卡（如Suica）付嗎？',
            tip: '便利商店幾乎支援所有支付。可以替換成「Apple Pay」、「クレジットカード」(信用卡)。'
          },
          {
            id: 't25_07',
            situation: '集點',
            japanese: 'ポイントをつけてください。',
            romaji: 'Pointo o tsukete kudasai.',
            chinese: '請幫我集點。',
            tip: '店員常問「ポイントカードはお持ちですか？」(有集點卡嗎？)。沒有的話說「ないです」。'
          },
          {
            id: 't25_08',
            situation: '買熱飲肉包',
            japanese: '肉{にく}まんを一{ひと}つお願{ねが}いします。',
            romaji: 'Nikuman o hitotsu onegai shimasu.',
            chinese: '麻煩給我一個肉包。',
            tip: '冬天超商的熱食非常受歡迎！ピザまん(披薩包)、あんまん(紅豆包)。'
          }
        ]
      },
      {
        id: 'travel_26',
        title: '居酒屋文化',
        titleJp: '居酒屋文化',
        phrases: [
          {
            id: 't26_01',
            situation: '總之先來杯生啤酒',
            japanese: 'とりあえず生{なま}で！',
            romaji: 'Toriaezu nama de!',
            chinese: '總之先來杯生啤酒！',
            tip: '日本居酒屋定番起手式！大家坐下第一件事通常就是點飲料。'
          },
          {
            id: 't26_02',
            situation: '詢問喝到飽',
            japanese: '飲{の}み放題{ほうだい}はありますか？',
            romaji: 'Nomihōdai wa arimasu ka?',
            chinese: '請問有喝到飽嗎？',
            tip: '「飲み放題」通常有時間限制（如2小時），非常划算。'
          },
          {
            id: 't26_03',
            situation: '確認座位費',
            japanese: 'お通{とお}し代{だい}はかかりますか？',
            romaji: 'Otōshidai wa kakarimasu ka?',
            chinese: '請問會收小菜費（座位費）嗎？',
            tip: '日本居酒屋通常會上「お通し」(強制小菜)，約300-500日圓，是正常的文化。'
          },
          {
            id: 't26_04',
            situation: '加點飲料',
            japanese: 'ハイボールをおかわりお願{ねが}いします。',
            romaji: 'Haibōru o okawari onegai shimasu.',
            chinese: '麻煩再來一杯 Highball（威士忌蘇打）。',
            tip: '「おかわり」是再來一杯/一碗的意思。'
          },
          {
            id: 't26_05',
            situation: '乾杯',
            japanese: '乾杯{かんぱい}！',
            romaji: 'Kanpai!',
            chinese: '乾杯！',
            tip: '碰杯時說。注意不要喝得太醉影響他人喔！'
          },
          {
            id: 't26_06',
            situation: '詢問推薦下酒菜',
            japanese: 'お酒{さけ}に合{あ}うおすすめはありますか？',
            romaji: 'Osake ni au osusume wa arimasu ka?',
            chinese: '有推薦什麼下酒的菜嗎？',
            tip: '讓店員推薦最道地的居酒屋料理！'
          },
          {
            id: 't26_07',
            situation: '不喝酒的選擇',
            japanese: 'ノンアルコールドリンクはありますか？',
            romaji: 'Non-arukōru dorinku wa arimasu ka?',
            chinese: '請問有無酒精飲料嗎？',
            tip: '不喝酒的人也可以點烏龍茶(ウーロン茶)或無酒精啤酒。'
          },
          {
            id: 't26_08',
            situation: '最後的收尾',
            japanese: '締{し}めのご飯{はん}は何{なに}がおすすめですか？',
            romaji: 'Shime no gohan wa nani ga osusume desu ka?',
            chinese: '收尾的飯/麵有什麼推薦的嗎？',
            tip: '日本人喝酒後習慣吃碗拉麵或茶泡飯(お茶漬け)來「締め」(收尾)。'
          }
        ]
      },
      {
        id: 'travel_27',
        title: '租車與自駕',
        titleJp: 'レンタカー・ドライブ',
        phrases: [
          {
            id: 't27_01',
            situation: '辦理取車',
            japanese: '車{くるま}を予約{よやく}しています。',
            romaji: 'Kuruma o yoyaku shite imasu.',
            chinese: '我有預約租車。',
            tip: '請準備好護照、台灣駕照以及日文譯本（非常重要！）。'
          },
          {
            id: 't27_02',
            situation: '還車地點',
            japanese: 'どこに返却{へんきゃく}すればいいですか？',
            romaji: 'Doko ni henkyaku sureba ii desu ka?',
            chinese: '請問要在哪裡還車？',
            tip: '如果是「乗り捨て」(甲地租乙地還)，一定要先確認好還車店鋪的位置。'
          },
          {
            id: 't27_03',
            situation: '加油加滿',
            japanese: 'レギュラー、満{まん}タンでお願{ねが}いします。',
            romaji: 'Regyurā, mantan de onegai shimasu.',
            chinese: '95無鉛（Regular），麻煩加滿。',
            tip: '日本租車通常是加紅色的「レギュラー」(Regular)。還車前一定要加滿(満タン)。'
          },
          {
            id: 't27_04',
            situation: '設定導航語言',
            japanese: 'ナビを中国語{ちゅうごくご}に設定{せってい}していただけますか？',
            romaji: 'Nabi o chūgokugo ni settei shite itadakemasu ka?',
            chinese: '可以幫我把導航設定成中文嗎？',
            tip: '出發前請店員幫忙設定，會讓整趟旅程輕鬆很多。'
          },
          {
            id: 't27_05',
            situation: '發生車禍',
            japanese: '事故{じこ}に遭{あ}いました。警察{けいさつ}を呼{よ}んでください。',
            romaji: 'Jiko ni aimashita. Keisatsu o yonde kudasai.',
            chinese: '我發生車禍了。請幫忙叫警察。',
            tip: '就算是很小的擦撞，在日本也一定要報警(110)並通知租車公司，否則保險不理賠。'
          },
          {
            id: 't27_06',
            situation: '詢問ETC',
            japanese: 'ETCカードは借{か}りられますか？',
            romaji: 'Ī-tī-shī kādo wa kariraremasu ka?',
            chinese: '可以租借 ETC 卡嗎？',
            tip: '走高速公路有 ETC 會方便很多，部分租車方案有包含過路費(如KEP)。'
          },
          {
            id: 't27_07',
            situation: '詢問停車場',
            japanese: '近{ちか}くにコインパーキングはありますか？',
            romaji: 'Chikaku ni koin pākingu wa arimasu ka?',
            chinese: '這附近有投幣式停車場嗎？',
            tip: '日本絕對不能路邊違停！一定要找「コインパーキング」(Coin Parking)。'
          },
          {
            id: 't27_08',
            situation: '保險加保',
            japanese: 'フルカバーの保険{ほけん}に入{はい}りたいです。',
            romaji: 'Furu kabā no hoken ni hairitai desu.',
            chinese: '我想加入全險（免責補償）。',
            tip: '出國自駕強烈建議保最高級別的險(NOC補償等)，花小錢買平安。'
          }
        ]
      },
      {
        id: 'travel_28',
        title: '擁擠與移動',
        titleJp: '混雑・移動',
        phrases: [
          {
            id: 't28_01',
            situation: '要下車借過',
            japanese: '降{お}ります。すみません、通{とお}してください。',
            romaji: 'Orimasu. Sumimasen, tōshite kudasai.',
            chinese: '我要下車。不好意思，請借過。',
            tip: '在滿員電車上要下車時，大聲說這句，人群就會讓開。'
          },
          {
            id: 't28_02',
            situation: '不小心撞到人',
            japanese: 'あっ、すみません！大丈夫{だいじょうぶ}ですか？',
            romaji: 'A, sumimasen! Daijōbu desu ka?',
            chinese: '啊，對不起！你沒事吧？',
            tip: '在擁擠的車站撞到人，立刻道歉是基本禮貌。'
          },
          {
            id: 't28_03',
            situation: '讓座',
            japanese: 'ここ、どうぞ。',
            romaji: 'Koko, dōzo.',
            chinese: '這裡請坐。',
            tip: '站起來並指著座位說這句。有時日本長者不好意思坐，可以微笑示意後稍微走開。'
          },
          {
            id: 't28_04',
            situation: '確認座位有人嗎',
            japanese: 'ここは空{あ}いていますか？',
            romaji: 'Koko wa aite imasu ka?',
            chinese: '請問這個位子是空的嗎？',
            tip: '在美食街或新幹線自由座找位子時確認用。'
          },
          {
            id: 't28_05',
            situation: '排隊確認',
            japanese: 'これは並{なら}んでいますか？',
            romaji: 'Kore wa narande imasu ka?',
            chinese: '請問這是在排隊嗎？',
            tip: '看到人潮不確定是不是隊尾時問一下，避免不小心插隊。'
          },
          {
            id: 't28_06',
            situation: '找隊伍尾端',
            japanese: '最後尾{さいこうび}はどこですか？',
            romaji: 'Saikōbi wa doko desu ka?',
            chinese: '請問隊伍的最尾端在哪裡？',
            tip: '熱門餐廳或活動排隊時，工作人員有時會舉著「最後尾」的牌子。'
          },
          {
            id: 't28_07',
            situation: '提醒掉東西',
            japanese: 'すみません、落{お}ちましたよ。',
            romaji: 'Sumimasen, ochimashita yo.',
            chinese: '不好意思，（東西）掉了喔。',
            tip: '發現前面的人掉錢包或車票時，熱心提醒的好用句。'
          },
          {
            id: 't28_08',
            situation: '行李擋路道歉',
            japanese: '邪魔{じゃま}になってすみません。',
            romaji: 'Jama ni natte sumimasen.',
            chinese: '不好意思擋到路了。',
            tip: '拖著大行李箱在狹窄通道或車廂內，對旁邊的人表達歉意。'
          }
        ]
      }
    ]
  }
]

// 取得所有章節的flat list（用於路由查找）
export const allTravelChapters = travelZones.flatMap(zone =>
  zone.chapters.map(chapter => ({ ...chapter, zone }))
)

// 依ID查找章節
export const getTravelChapterById = (id) =>
  allTravelChapters.find(ch => ch.id === id)
