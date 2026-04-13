// 各等級程度測驗題庫 - 每級 10 題
export const placementQuizByLevel = {
  N5: [
    { id: 1, question: '私{わたし}___学生{がくせい}です。', options: ['が', 'は', 'を', 'に'], answer: 1, explanation: '「は」是主題助詞。「私は学生です」= 我是學生。' },
    { id: 2, question: '毎日{まいにち}コーヒー___飲{の}みます。', options: ['が', 'に', 'を', 'で'], answer: 2, explanation: '「を」是受詞助詞。「コーヒーを飲みます」= 喝咖啡。' },
    { id: 3, question: '学校{がっこう}___行{い}きます。', options: ['を', 'で', 'に', 'が'], answer: 2, explanation: '「に」表示移動的目的地。' },
    { id: 4, question: '図書館{としょかん}___勉強{べんきょう}します。', options: ['に', 'を', 'で', 'が'], answer: 2, explanation: '「で」表示動作的場所。' },
    { id: 5, question: 'この本{ほん}は面白{おもしろ}___です。', options: ['い', 'な', 'く', 'に'], answer: 0, explanation: '「面白い」是い形容詞，直接加「です」。' },
    { id: 6, question: '机{つくえ}の___に本{ほん}があります。', options: ['した', 'なか', 'うえ', 'となり'], answer: 2, explanation: '「上（うえ）」= 上面。桌上有書。' },
    { id: 7, question: '夏{なつ}___冬{ふゆ}のほうが好{す}きです。', options: ['が', 'の', 'より', 'から'], answer: 2, explanation: '「より」用於比較。比起夏天更喜歡冬天。' },
    { id: 8, question: '日本{にほん}に行{い}き___です。', options: ['ます', 'たい', 'ません', 'ました'], answer: 1, explanation: '「〜たいです」= 想要...。想去日本。' },
    { id: 9, question: '昨日{きのう}は暑{あつ}___です。', options: ['い', 'く', 'かった', 'くない'], answer: 2, explanation: 'い形容詞過去式：い→かった。昨天很熱。' },
    { id: 10, question: '___テレビを見{み}ません。', options: ['いつも', 'よく', 'あまり', 'とても'], answer: 2, explanation: '「あまり〜ません」= 不太...。' },
  ],
  N4: [
    { id: 1, question: 'ここに座___ください。', options: ['て', 'って', 'で', 'った'], answer: 1, explanation: '「座る」的て形是「座って」。請坐。' },
    { id: 2, question: '今、勉強___います。', options: ['して', 'する', 'した', 'し'], answer: 0, explanation: '「〜ています」表示進行中。正在唸書。' },
    { id: 3, question: '写真を撮って___いいですか。', options: ['が', 'を', 'も', 'に'], answer: 2, explanation: '「〜てもいいですか」= 可以...嗎？' },
    { id: 4, question: 'ここで走って___いけません。', options: ['も', 'は', 'が', 'を'], answer: 1, explanation: '「〜てはいけません」= 不可以...。' },
    { id: 5, question: '雨が降っ___、家にいます。', options: ['ても', 'たら', 'から', 'ので'], answer: 1, explanation: '「〜たら」= 如果...的話。' },
    { id: 6, question: '薬を飲ま___なりません。', options: ['ないと', 'なければ', 'なくて', 'ないで'], answer: 1, explanation: '「〜なければなりません」= 必須...。' },
    { id: 7, question: '日本に行った___があります。', options: ['もの', 'こと', 'ところ', 'とき'], answer: 1, explanation: '「〜たことがある」= 曾經...。' },
    { id: 8, question: '先生に怒___れました。', options: ['ら', 'り', 'る', 'れ'], answer: 0, explanation: '「怒る」的被動形是「怒られる」。' },
    { id: 9, question: '窓を開___ください。', options: ['いて', 'けて', 'して', 'って'], answer: 1, explanation: '「開ける」的て形是「開けて」。' },
    { id: 10, question: '明日は雨が降る___です。', options: ['そう', 'よう', 'みたい', 'らしい'], answer: 0, explanation: '「〜そうです」= 看起來要...。' },
  ],
  N3: [
    { id: 1, question: '先生の___で、合格できました。', options: ['せい', 'おかげ', 'ため', 'わけ'], answer: 1, explanation: '「おかげで」= 多虧了...（正面結果）。' },
    { id: 2, question: '寝坊した___で、遅刻した。', options: ['おかげ', 'せい', 'だけ', 'ほど'], answer: 1, explanation: '「せいで」= 都怪...（負面結果）。' },
    { id: 3, question: '彼は忙しい___だ。', options: ['はず', 'よう', 'べき', 'わけ'], answer: 1, explanation: '「〜ようだ」= 好像...。' },
    { id: 4, question: '彼はもう着いた___だ。', options: ['よう', 'みたい', 'はず', 'そう'], answer: 2, explanation: '「〜はずだ」= 應該...（確信度高）。' },
    { id: 5, question: '友達に教えて___た。', options: ['もらっ', 'くれ', 'あげ', 'やっ'], answer: 2, explanation: '「〜てあげる」= 為別人做...。' },
    { id: 6, question: '約束した以上、守ら___。', options: ['なければならない', 'なくてもいい', 'るはずがない', 'りたくない'], answer: 0, explanation: '「〜以上」= 既然...就必須...。' },
    { id: 7, question: 'この料理は見た目___おいしそうだ。', options: ['からには', 'からして', 'からこそ', 'からでは'], answer: 1, explanation: '「〜からして」= 光從...就...。' },
    { id: 8, question: '努力した___、結果が出なかった。', options: ['のに', 'から', 'ので', 'けど'], answer: 0, explanation: '「〜のに」= 明明...卻...。' },
    { id: 9, question: '彼女は歌手として___、女優としても活躍している。', options: ['だけでなく', 'しか', 'ばかりか', 'ところか'], answer: 0, explanation: '「〜だけでなく」= 不只是...，還...。' },
    { id: 10, question: '天気予報に___、明日は雨だそうだ。', options: ['とって', 'よると', 'おいて', 'つれて'], answer: 1, explanation: '「〜によると」= 根據...。' },
  ],
  N2: [
    { id: 1, question: '努力した___、不合格だった。', options: ['にもかかわらず', 'おかげで', 'せいで', 'ために'], answer: 0, explanation: '「〜にもかかわらず」= 儘管...卻...。' },
    { id: 2, question: '漢字___、ひらがなも読めない。', options: ['ばかりか', 'どころか', 'だけでなく', 'のみならず'], answer: 1, explanation: '「〜どころか」= 別說...，連...都...。' },
    { id: 3, question: '勉強すれば___ほど、面白くなる。', options: ['した', 'して', 'する', 'し'], answer: 2, explanation: '「〜ば〜ほど」= 越...越...。' },
    { id: 4, question: '彼は社長で___、一流の研究者でもある。', options: ['あるからには', 'あると同時に', 'あるにもかかわらず', 'あるどころか'], answer: 1, explanation: '「〜と同時に」= 同時也是...。' },
    { id: 5, question: '何度説明されても、___理解できない。', options: ['やっと', 'なかなか', 'たちまち', 'いよいよ'], answer: 1, explanation: '「なかなか〜ない」= 怎麼也無法...。' },
    { id: 6, question: 'この問題は難し___、誰も解けなかった。', options: ['すぎるから', 'すぎて', 'すぎるほど', 'すぎても'], answer: 1, explanation: '「〜すぎて」= 太...以至於...。' },
    { id: 7, question: '子供___、そのくらいのことは分かる。', options: ['だって', 'でさえ', 'のくせに', 'にしても'], answer: 1, explanation: '「〜でさえ」= 連...都...。' },
    { id: 8, question: '忙しい___、手伝ってくれた。', options: ['にもかかわらず', 'くせに', 'としたら', 'からには'], answer: 0, explanation: '「〜にもかかわらず」= 儘管...卻...。' },
    { id: 9, question: '時間がない___、急いでください。', options: ['ものだから', 'ことだから', 'わけだから', 'はずだから'], answer: 0, explanation: '「〜ものだから」= 因為...所以（辯解語氣）。' },
    { id: 10, question: '説明を聞いた___、やり方が分かった。', options: ['あげく', '上で', 'ところ', '末に'], answer: 2, explanation: '「〜ところ」= ...之後（發現）。' },
  ],
  N1: [
    { id: 1, question: '成功は努力の結果に___ならない。', options: ['ほか', 'わけ', 'こと', 'もの'], answer: 0, explanation: '「〜にほかならない」= 正是...。' },
    { id: 2, question: '体調が悪くても、働か___を得ない。', options: ['ず', 'ざる', 'ない', 'なく'], answer: 1, explanation: '「〜ざるを得ない」= 不得不...。' },
    { id: 3, question: '彼女の才能___、将来は大物になるだろう。', options: ['をもって', 'からすると', 'ともなると', 'にひきかえ'], answer: 1, explanation: '「〜からすると」= 從...來推測。' },
    { id: 4, question: '社長の命令___、従わざるを得ない。', options: ['とあれば', 'ともなれば', 'ときたら', 'とばかりに'], answer: 0, explanation: '「〜とあれば」= 如果是...的話。' },
    { id: 5, question: '努力なく___、成功はありえない。', options: ['して', 'しては', 'しても', 'したら'], answer: 0, explanation: '「〜なくして」= 沒有...就不可能...。' },
    { id: 6, question: '本日___もって、閉店いたします。', options: ['が', 'に', 'を', 'で'], answer: 2, explanation: '「〜をもって」= 以...為期。' },
    { id: 7, question: '彼の行動は常識___逸脱している。', options: ['から', 'を', 'に', 'で'], answer: 1, explanation: '「〜を逸脱する」= 逸脫...。' },
    { id: 8, question: '新人___、この成果は素晴らしい。', options: ['にしては', 'としたら', 'ならでは', 'からして'], answer: 0, explanation: '「〜にしては」= 以...來說（超出預期）。' },
    { id: 9, question: '環境問題は一国___解決できるものではない。', options: ['のみで', 'だけに', 'ばかりに', 'からして'], answer: 0, explanation: '「〜のみで」= 只靠...。' },
    { id: 10, question: '彼は学者___、実業家としても成功した。', options: ['もさることながら', 'にもまして', 'はおろか', 'のみならず'], answer: 3, explanation: '「〜のみならず」= 不僅...。' },
  ],
}

// 根據測驗分數和選擇的等級判定起始位置
export function determineLevel(selectedLevel, correctCount) {
  const passed = correctCount >= 7 // 70% pass

  if (passed) {
    // 通過該等級測驗 → 從該等級開始學習
    return selectedLevel
  } else {
    // 未通過 → 降一級
    const levelOrder = ['N5', 'N4', 'N3', 'N2', 'N1']
    const idx = levelOrder.indexOf(selectedLevel)
    return idx > 0 ? levelOrder[idx - 1] : 'N5'
  }
}
