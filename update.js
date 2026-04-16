const fs = require('fs');
const path = 'C:\\workspaces\\vibe-code\\src\\data\\chaptersN5.js';
let content = fs.readFileSync(path, 'utf8');

const replacements = [
  // Grammar ch7
  ["肯定：～ます，否定：～ません，過去：～ました。", "肯定：～ます，否定：～ません，過去：～ました。日文動詞依「ます」前一音分為I類(い段)、II類(え段或少數い段)、III類(します、きます)。"],
  // Grammar ch14
  ["い形字尾是「い」，な形接名詞要加「な」。", "形容詞分兩類：い形容詞字尾是「い」，な形容詞接名詞時加「な」。(注意：きれい、有名是な形容詞)"],
  // Grammar ch15
  ["否定去掉「い」加「くない」。過去式去掉「い」加「かった」。", "い形容詞的否定去「い」加「くない」，過去式去「い」加「かった」。(な形容詞則用 じゃありません / でした)"],
  // Grammar ch22
  ["請求對方做某事。", "請求對方做某事。て形變化：I類(いちり→って、みびに→んで、き→いて、ぎ→いで)、II類(去ます加て)、III類(します→して、きます→きて)。"],
  // Grammar ch24
  ["用て形連接多個動作。", "用て形連接多個動作。依發生順序排列，時態由最後一個動詞決定。"],
  // Grammar ch25
  ["請求對方不要做某事。", "請求對方不要做某事。ない形變化：I類(ます前音改あ段加ない)、II類(去ます加ない)、III類(しない、こない)。"],

  // Vocabulary meanings
  ["meaning: '起床'", "meaning: '起床 (II類動詞)'"],
  ["meaning: '睡覺'", "meaning: '睡覺 (II類動詞)'"],
  ["meaning: '學習'", "meaning: '學習 (III類動詞)'"],
  ["meaning: '結束'", "meaning: '結束 (I類動詞)'"],
  ["meaning: '工作'", "meaning: '工作 (I類動詞)'"],
  ["meaning: '休息'", "meaning: '休息 (I類動詞)'"],
  
  ["meaning: '去'", "meaning: '去 (I類動詞)'"],
  ["meaning: '來'", "meaning: '來 (III類動詞)'"],
  ["meaning: '回家'", "meaning: '回家 (I類動詞)'"],
  
  ["meaning: '吃'", "meaning: '吃 (II類動詞)'"],
  ["meaning: '喝'", "meaning: '喝 (I類動詞)'"],
  ["meaning: '看'", "meaning: '看 (II類動詞)'"],
  ["meaning: '聽/問'", "meaning: '聽/問 (I類動詞)'"],
  ["meaning: '讀'", "meaning: '讀 (I類動詞)'"],
  ["meaning: '寫'", "meaning: '寫 (I類動詞)'"],
  ["meaning: '買'", "meaning: '買 (I類動詞)'"],
  ["meaning: '拍照'", "meaning: '拍照 (I類動詞)'"],
  ["meaning: '做'", "meaning: '做 (III類動詞)'"],
  ["meaning: '遇見'", "meaning: '遇見 (I類動詞)'"],
  
  ["meaning: '給予'", "meaning: '給予 (II類動詞)'"],
  ["meaning: '得到'", "meaning: '得到 (I類動詞)'"],
  
  ["meaning: '便宜'", "meaning: '便宜 (い形容詞)'"],
  ["meaning: '高/貴'", "meaning: '高/貴 (い形容詞)'"],
  ["meaning: '親切'", "meaning: '親切 (な形容詞)'"],
  ["meaning: '漂亮'", "meaning: '漂亮 (な形容詞)'"],
  ["meaning: '好吃'", "meaning: '好吃 (い形容詞)'"],
  ["meaning: '寒冷'", "meaning: '寒冷 (い形容詞)'"],
  ["meaning: '炎熱'", "meaning: '炎熱 (い形容詞)'"],
  ["meaning: '有名'", "meaning: '有名 (な形容詞)'"],
  ["meaning: '健康/元氣'", "meaning: '健康/元氣 (な形容詞)'"],
  ["meaning: '安靜'", "meaning: '安靜 (な形容詞)'"],
  
  ["meaning: '不熱'", "meaning: '不熱 (い形容詞)'"],
  ["meaning: '太好了'", "meaning: '太好了 (い形容詞)'"],
  ["meaning: '不多'", "meaning: '不多 (い形容詞)'"],
  ["meaning: '多'", "meaning: '多 (い形容詞)'"],
  ["meaning: '少'", "meaning: '少 (い形容詞)'"],
  ["meaning: '寬敞'", "meaning: '寬敞 (い形容詞)'"],
  ["meaning: '狹窄'", "meaning: '狹窄 (い形容詞)'"],
  ["meaning: '近'", "meaning: '近 (い形容詞)'"],
  ["meaning: '遠'", "meaning: '遠 (い形容詞)'"],
  ["meaning: '忙碌'", "meaning: '忙碌 (い形容詞)'"],
  
  ["meaning: '喜歡'", "meaning: '喜歡 (な形容詞)'"],
  ["meaning: '討厭'", "meaning: '討厭 (な形容詞)'"],
  ["meaning: '擅長'", "meaning: '擅長 (な形容詞)'"],
  ["meaning: '不擅長'", "meaning: '不擅長 (な形容詞)'"],
  
  ["meaning: '有(無生命)'", "meaning: '有(無生命) (I類動詞)'"],
  ["meaning: '有(有生命)'", "meaning: '有(有生命) (II類動詞)'"],
  
  ["meaning: '想要'", "meaning: '想要 (い形容詞)'"],
  ["meaning: '想去'", "meaning: '想去 (I類動詞)'"],
  ["meaning: '想吃'", "meaning: '想吃 (II類動詞)'"],
  ["meaning: '想買'", "meaning: '想買 (I類動詞)'"],
  ["meaning: '想游泳'", "meaning: '想游泳 (I類動詞)'"],
  ["meaning: '想玩/遊玩'", "meaning: '想玩/遊玩 (I類動詞)'"],
  ["meaning: '想喝'", "meaning: '想喝 (I類動詞)'"],
  ["meaning: '沒有'", "meaning: '沒有 (I類動詞)'"],
  
  ["meaning: '請等'", "meaning: '請等 (I類動詞)'"],
  ["meaning: '請看'", "meaning: '請看 (II類動詞)'"],
  ["meaning: '請教'", "meaning: '請教 (II類動詞)'"],
  ["meaning: '請借'", "meaning: '請借 (I類動詞)'"],
  ["meaning: '請拿/持有'", "meaning: '請拿/持有 (I類動詞)'"],
  ["meaning: '請叫(車/人)'", "meaning: '請叫(車/人) (I類動詞)'"],
  ["meaning: '請幫忙'", "meaning: '請幫忙 (I類動詞)'"],
  ["meaning: '請趕快'", "meaning: '請趕快 (I類動詞)'"],
  
  ["meaning: '可以'", "meaning: '可以 (い形容詞)'"],
  ["meaning: '進去'", "meaning: '進去 (I類動詞)'"],
  ["meaning: '抽菸'", "meaning: '抽菸 (I類動詞)'"],
  
  ["meaning: '洗'", "meaning: '洗 (I類動詞)'"],
  ["meaning: '淋浴/洗澡'", "meaning: '淋浴/洗澡 (II類動詞)'"],
  ["meaning: '出門'", "meaning: '出門 (II類動詞)'"],
  ["meaning: '下車'", "meaning: '下車 (II類動詞)'"],
  ["meaning: '換乘'", "meaning: '換乘 (II類動詞)'"],
  ["meaning: '散步'", "meaning: '散步 (III類動詞)'"],
  
  ["meaning: '不要忘記'", "meaning: '不要忘記 (II類動詞)'"],
  ["meaning: '不要看'", "meaning: '不要看 (II類動詞)'"],
  ["meaning: '不要擔心'", "meaning: '不要擔心 (III類動詞)'"],
  ["meaning: '要注意/小心'", "meaning: '要注意/小心 (II類動詞)'"],
  ["meaning: '不要勉強'", "meaning: '不要勉強 (III類動詞)'"]
];

for (const [oldStr, newStr] of replacements) {
  content = content.split(oldStr).join(newStr);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Replacements completed.');
