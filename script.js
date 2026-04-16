const fs = require('fs');

let fileContent = fs.readFileSync('C:\\workspaces\\vibe-code\\src\\data\\chaptersN4.js', 'utf8');
fileContent = fileContent.replace(/\r\n/g, '\n');

fileContent = fileContent.replace('// N4 章節資料 - 初級 (25章)', '// N4 章節資料 - 初級 (26章)');

for (let i = 50; i >= 26; i--) {
  const new_i = i >= 47 ? i + 3 : i + 2;
  fileContent = fileContent.replace(new RegExp(`id: 'n4_ch${i}'`, 'g'), `id: 'n4_ch${new_i}'`);
  fileContent = fileContent.replace(new RegExp(`// ---- 第 ${i} 關：`, 'g'), `// ---- 第 ${new_i} 關：`);
}

const ch37OldGrammar = `      {
        pattern: '動詞/形容詞/名詞の た形 ＋ ら',
        explanation: '表示假設條件或時間先後。「如果...的話 / ...之後」。這是口語中最常用、限制最少的條件句。',
        examples: [
          { jp: '雨{あめ}が降{ふ}ったら、家{いえ}にいます。', romaji: 'Ame ga futtara, ie ni imasu.', zh: '如果下雨的話，就待在家。' },
          { jp: '駅{えき}に着{つ}いたら、電話{でんわ}してください。', romaji: 'Eki ni tsuitara, denwa shite kudasai.', zh: '到了車站之後，請打電話給我。' },
        ]
      }
    ],`;

const ch37NewGrammar = `      {
        pattern: '動詞/形容詞/名詞の た形 ＋ ら',
        explanation: '表示假設條件或時間先後。「如果...的話 / ...之後」。這是口語中最常用、限制最少的條件句。',
        examples: [
          { jp: '雨{あめ}が降{ふ}ったら、家{いえ}にいます。', romaji: 'Ame ga futtara, ie ni imasu.', zh: '如果下雨的話，就待在家。' },
          { jp: '駅{えき}に着{つ}いたら、電話{でんわ}してください。', romaji: 'Eki ni tsuitara, denwa shite kudasai.', zh: '到了車站之後，請打電話給我。' },
        ]
      },
      {
        pattern: '動詞辭書形/ない形 ＋ と',
        explanation: '表示必然的條件結果、自然法則或機器的操作。「一...就會...」。',
        examples: [
          { jp: 'このボタンを押{お}すと、水{みず}が出{で}ます。', romaji: 'Kono botan o osu to, mizu ga demasu.', zh: '一按這個按鈕，水就會出來。' }
        ]
      },
      {
        pattern: '普通形 ＋ なら',
        explanation: '承接對方的話題，給予建議或意見。「如果是...的話」。名詞和な形容詞不加「だ」。',
        examples: [
          { jp: '温泉{おんせん}なら、箱根{はこね}がいいですよ。', romaji: 'Onsen nara, Hakone ga ii desu yo.', zh: '如果是溫泉的話，箱根很不錯喔。' }
        ]
      }
    ],`;

if (!fileContent.includes(ch37OldGrammar)) {
  console.log("Failed to find ch37OldGrammar");
} else {
  fileContent = fileContent.replace(ch37OldGrammar, ch37NewGrammar);
}

const ch37OldQuiz = `      { question: '安かっ___、買います。(如果便宜的話)', options: ['たら', 'れば', 'と', 'なら'], answer: 0 },
      { question: '「着く」的讀音是？', options: ['つく', 'きく', 'さく', 'なく'], answer: 0 },
    ]
  },`;

const ch37NewQuiz = `      { question: '安かっ___、買います。(如果便宜的話)', options: ['たら', 'れば', 'と', 'なら'], answer: 0 },
      { question: 'ボタンを押す___、水が出ます。(一按就會)', options: ['たら', 'れば', 'と', 'なら'], answer: 2 },
      { question: '温泉___、箱根がいいですよ。(如果說到溫泉)', options: ['たら', 'れば', 'と', 'なら'], answer: 3 },
    ]
  },`;

if (!fileContent.includes(ch37OldQuiz)) {
  console.log("Failed to find ch37OldQuiz");
} else {
  fileContent = fileContent.replace(ch37OldQuiz, ch37NewQuiz);
}

const new48EndRegex = /id: 'n4_ch48'[\s\S]*?\]\n  \},/m;
const match = fileContent.match(new48EndRegex);

if (match) {
  const newChapter = `

  // ---- 第 49 關：容易與困難 (～やすい/にくい) ----
  {
    id: 'n4_ch49',
    level: 'N4',
    title: '容易與困難 (～やすい/にくい)',
    grammar: [
      {
        pattern: '動詞ます形(去ます) ＋ やすいです / にくいです',
        explanation: '表示某個動作很容易做，或很難做。「やすい」表示容易、好做；「にくい」表示困難、難做。接續後會變成「い形容詞」的變化方式。',
        examples: [
          { jp: 'このペンはとても書{か}きやすいです。', romaji: 'Kono pen wa totemo kakiyasui desu.', zh: '這支筆非常好寫。' },
          { jp: 'この靴{くつ}は歩{ある}きにくいです。', romaji: 'Kono kutsu wa arukinikui desu.', zh: '這雙鞋很難走。' },
        ]
      }
    ],
    vocabulary: [
      { word: '書く', reading: 'かく', romaji: 'kaku', meaning: '寫 (I類動詞)' },
      { word: '歩く', reading: 'あるく', romaji: 'aruku', meaning: '走路 (I類動詞)' },
      { word: '使う', reading: 'つかう', romaji: 'tsukau', meaning: '使用 (I類動詞)' },
      { word: '読む', reading: 'よむ', romaji: 'yomu', meaning: '閱讀 (I類動詞)' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃 (II類動詞)' },
      { word: '分かりやすい', reading: 'わかりやすい', romaji: 'wakariyasui', meaning: '容易懂的 (い形容詞)' },
      { word: '飲みにくい', reading: 'のみにくい', romaji: 'nominikui', meaning: '難喝的 (い形容詞)' },
      { word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: '鞋子' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: 'ペン', reading: 'ぺん', romaji: 'pen', meaning: '筆' },
    ],
    quiz: [
      { question: 'この薬は___にくいです。(難喝)', options: ['飲む', '飲み', '飲んで', '飲ま'], answer: 1 },
      { question: 'この本はとても___やすいです。(好懂)', options: ['分かる', '分かり', '分かって', '分から'], answer: 1 },
      { question: '「歩きにくい」的意思是？', options: ['容易走', '難走', '想走', '不想走'], answer: 1 },
      { question: 'このパソコンは使い___。(好用)', options: ['にくい', 'やすい', 'たい', 'ながら'], answer: 1 },
      { question: '「靴」的讀音是？', options: ['くつ', 'くすり', 'かさ', 'かばん'], answer: 0 },
    ]
  },`;
  
  const replacement = match[0] + newChapter;
  fileContent = fileContent.replace(match[0], replacement);
} else {
  console.log("Failed to match new48EndRegex");
}

fs.writeFileSync('C:\\workspaces\\vibe-code\\src\\data\\chaptersN4.js', fileContent);
console.log("Done");
