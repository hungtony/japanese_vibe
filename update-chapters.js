const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'data');

// ----- Helper: Add tags to verbs and adjectives (Basic regex heuristic for N3) -----
function tagN3Vocabulary(content) {
  // A simplified tagging function. Since N3 is large, we'll inject tags manually 
  // or use a predefined dictionary. To be perfectly accurate without a dictionary, 
  // we'll apply a mapping for common N3 verbs/adjs found in the file.
  
  // Since we only have ~250 vocab words in N3, let's just do a blanket regex for some known endings 
  // and manually fix the rest if needed, but the user asked for meticulous tagging. 
  // Let's use a simpler approach: I'll overwrite N3 file content with the tags later.
  // For this script, we'll just handle the renumbering and insertions.
  return content;
}

// ----- Update N4 -----
let n4Content = fs.readFileSync(path.join(srcDir, 'chaptersN4.js'), 'utf8');

// 1. Expand n4_ch35 (如果...的話)
const ch35GrammarAdd = `
      {
        pattern: '動詞辭書形 / 名詞だ ＋ と',
        explanation: '表示「一...就會...」。客觀的自然法則、真理、或是某個動作必然導致的結果。',
        examples: [
          { jp: '春{はる}になると、桜{さくら}が咲{さ}きます。', romaji: 'Haru ni naru to, sakura ga sakimasu.', zh: '一到春天，櫻花就會開。' },
        ]
      },
      {
        pattern: '普通形 / 名詞 ＋ なら',
        explanation: '表示「如果是那個情況的話...」。承接對方的話題，給予建議或判斷。',
        examples: [
          { jp: '温泉{おんせん}へ行{い}くなら、箱根{はこね}がいいですよ。', romaji: 'Onsen e iku nara, Hakone ga ii desu yo.', zh: '如果要泡溫泉的話，箱根很不錯喔。' },
        ]
      }`;
n4Content = n4Content.replace(/(pattern: '動詞\/形容詞\/名詞の た形 ＋ ら'.*?\]\s*\n\s*})/s, `$1,\n${ch35GrammarAdd}`);

// 2. Insert new chapter after n4_ch46
const newN4Ch = `
  // ---- 第 X 關：容易與困難 (～やすい/にくい) ----
  {
    id: 'NEW_N4_CH',
    level: 'N4',
    title: '容易與困難 (～やすい/にくい)',
    grammar: [
      {
        pattern: '動詞ます形(去ます) ＋ やすい / にくい',
        explanation: '表示做某件事的難易度，或是某事物容易/不容易發生某種變化。「やすい」是容易，「にくい」是困難。接續後整個詞視為【い形容詞】變化。',
        examples: [
          { jp: 'この靴{くつ}は歩{ある}きやすいです。', romaji: 'Kono kutsu wa arukiyasui desu.', zh: '這雙鞋很好走。' },
          { jp: 'この薬{くすり}は苦{にが}くて飲{の}みにくいです。', romaji: 'Kono kusuri wa nigakute nominikui desu.', zh: '這藥很苦很難吃。' },
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
      { word: 'ガラス', reading: 'がらす', romaji: 'garasu', meaning: '玻璃' },
    ],
    quiz: [
      { question: 'このペンは書き___。(很好寫)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 0 },
      { question: '「滑る」的意思是？', options: ['滑倒/打滑', '跌倒', '飛', '跳'], answer: 0 },
      { question: 'ガラスは割れ___。(容易破)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 0 },
      { question: '漢字は覚え___です。(很難記)', options: ['やすい', 'にくい', 'たい', 'ながら'], answer: 1 },
      { question: '「割れる」的讀音是？', options: ['われる', 'こわれる', 'おれる', 'きれる'], answer: 0 },
    ]
  },`;

n4Content = n4Content.replace(/(id: 'n4_ch46'.*?\]\s*\n\s*},)/s, `$1\n${newN4Ch}`);

// 3. Renumber N4 IDs starting from 28
let n4Index = 28;
n4Content = n4Content.replace(/id: '(n4_ch\d+|NEW_N4_CH)'/g, () => `id: 'n4_ch${n4Index++}'`);
// Fix title numbers
let n4TitleIndex = 28;
n4Content = n4Content.replace(/\/\/ ---- 第 \d+ 關：|\/\/ ---- 第 X 關：/g, () => `// ---- 第 ${n4TitleIndex++} 關：`);
n4Content = n4Content.replace(/\/\/ N4 章節資料 - 初級 \(\d+章\)/, '// N4 章節資料 - 初級 (26章)');
fs.writeFileSync(path.join(srcDir, 'chaptersN4.js'), n4Content);


// ----- Update N3 -----
let n3Content = fs.readFileSync(path.join(srcDir, 'chaptersN3.js'), 'utf8');

const newN3Chs = `
  // ---- 第 X 關：被逼著做 (使役受身形) ----
  {
    id: 'NEW_N3_CH1',
    level: 'N3',
    title: '被逼著做 (使役受身形)',
    grammar: [
      {
        pattern: '動詞使役受身形 (～させられる)',
        explanation: '表示「被迫做某事」，帶有極度不情願、受害的心情。變化規則：【I類】改あ段＋される (例外：す結尾改させられる)。【II類】去ます＋させられる。【III類】する→させられる / 来る→こさせられる。',
        examples: [
          { jp: '子{こ}どものころ、母{はは}に野菜{やさい}を食{た}べさせられました。', romaji: 'Kodomo no koro, haha ni yasai o tabesaseraremashita.', zh: '小時候被媽媽逼著吃蔬菜。' },
          { jp: '昨日{きのう}は部長{ぶちょう}にお酒{さけ}を飲{の}まされました。', romaji: 'Kinō wa buchō ni osake o nomasaremashita.', zh: '昨天被部長灌酒（被迫喝酒）。' },
        ]
      }
    ],
    vocabulary: [
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝 (I類動詞)' },
      { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: '吃 (II類動詞)' },
      { word: '待つ', reading: 'まつ', romaji: 'matsu', meaning: '等待 (I類動詞)' },
      { word: '歌う', reading: 'うたう', romaji: 'utau', meaning: '唱歌 (I類動詞)' },
      { word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: '跑 (I類動詞)' },
      { word: '書く', reading: 'かく', romaji: 'kaku', meaning: '寫 (I類動詞)' },
      { word: '野菜', reading: 'やさい', romaji: 'yasai', meaning: '蔬菜' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥' },
      { word: 'カラオケ', reading: 'からおけ', romaji: 'karaoke', meaning: '卡拉OK' },
      { word: '嫌', reading: 'いや', romaji: 'iya', meaning: '討厭的 (な形容詞)' },
    ],
    quiz: [
      { question: '「飲む」的使役被動形是？', options: ['飲まされる', '飲ませられる', '飲まられる', '飲めされる'], answer: 0 },
      { question: '部長にカラオケを___。(被逼著唱)', options: ['歌わされた', '歌わせられた', '歌われた', '歌わせた'], answer: 0 },
      { question: '「食べる」的使役被動形是？', options: ['食べさせられる', '食べされる', '食べらされる', '食べませられる'], answer: 0 },
      { question: '雨の中を___。(被迫跑步)', options: ['走らされた', '走させられた', '走られた', '走らせた'], answer: 0 },
      { question: '「待つ」的使役被動形是？', options: ['待たされる', '待たせられる', '待たられる', '待てされる'], answer: 0 },
    ]
  },

  // ---- 第 X 關：希望別人做 (～てほしい) ----
  {
    id: 'NEW_N3_CH2',
    level: 'N3',
    title: '希望別人做 (～てほしい)',
    grammar: [
      {
        pattern: '動詞て形 ＋ ほしい / もらいたい',
        explanation: '表示說話者對他人的期望，希望對方做某事。「希望你(他)...」。期待的對象用助詞「に」標示。不能用來表達自己想做某事(自己想做用～たい)。',
        examples: [
          { jp: 'あなたに教{おし}えてほしいです。', romaji: 'Anata ni oshiete hoshii desu.', zh: '我希望你能教我。' },
          { jp: '雨{あめ}が降{ふ}らないでもらいたい。', romaji: 'Ame ga furanai de moraitai.', zh: '真希望不要下雨。' },
        ]
      }
    ],
    vocabulary: [
      { word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: '教導 (II類動詞)' },
      { word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: '幫忙 (I類動詞)' },
      { word: '来る', reading: 'くる', romaji: 'kuru', meaning: '來 (III類動詞)' },
      { word: '治る', reading: 'なおる', romaji: 'naoru', meaning: '痊癒/復原 (I類動詞)' },
      { word: '言う', reading: 'いう', romaji: 'iu', meaning: '說 (I類動詞)' },
      { word: '早く', reading: 'はやく', romaji: 'hayaku', meaning: '早點/快點 (副詞)' },
      { word: 'ずっと', reading: 'ずっと', romaji: 'zutto', meaning: '一直 (副詞)' },
      { word: '一緒に', reading: 'いっしょに', romaji: 'issho ni', meaning: '一起 (副詞)' },
      { word: '宿題', reading: 'しゅくだい', romaji: 'shukudai', meaning: '作業' },
      { word: '病気', reading: 'びょうき', romaji: 'byōki', meaning: '生病/疾病' },
    ],
    quiz: [
      { question: '先生___教えてほしいです。(希望老師)', options: ['に', 'が', 'を', 'で'], answer: 0 },
      { question: '「治る」的意思是？', options: ['壞掉', '痊癒/復原', '生病', '修理'], answer: 1 },
      { question: 'あなたにずっと一緒に___ほしい。(希望你在)', options: ['いて', 'あって', 'して', 'きて'], answer: 0 },
      { question: '早く病気が___ほしいです。(希望病快好)', options: ['治って', '治して', '治りて', '治ってて'], answer: 0 },
      { question: 'この事は誰にも___もらいたい。(希望你別說)', options: ['言わないで', '言わなくて', '言わなく', '言わない'], answer: 0 },
    ]
  },
`;

n3Content = n3Content.replace(/export const chaptersN3 = \[\n/, `export const chaptersN3 = [\n${newN3Chs}`);

// Renumber N3 IDs starting from 54
let n3Index = 54;
n3Content = n3Content.replace(/id: '(n3_ch\d+|NEW_N3_CH1|NEW_N3_CH2)'/g, () => `id: 'n3_ch${n3Index++}'`);
// Fix title numbers
let n3TitleIndex = 54;
n3Content = n3Content.replace(/\/\/ ---- 第 \d+ 關：|\/\/ ---- 第 X 關：/g, () => `// ---- 第 ${n3TitleIndex++} 關：`);
n3Content = n3Content.replace(/\/\/ N3 章節資料 - 中級 \(\d+章\)/, '// N3 章節資料 - 中級 (27章)');
fs.writeFileSync(path.join(srcDir, 'chaptersN3.js'), n3Content);

// ----- Update N2 -----
let n2Content = fs.readFileSync(path.join(srcDir, 'chaptersN2.js'), 'utf8');
let n2Index = 81; // 54 + 27 = 81
n2Content = n2Content.replace(/id: 'n2_ch\d+'/g, () => `id: 'n2_ch${n2Index++}'`);
fs.writeFileSync(path.join(srcDir, 'chaptersN2.js'), n2Content);

// ----- Update N1 -----
let n1Content = fs.readFileSync(path.join(srcDir, 'chaptersN1.js'), 'utf8');
let n1Index = 83; // 81 + 2 = 83
n1Content = n1Content.replace(/id: 'n1_ch\d+'/g, () => `id: 'n1_ch${n1Index++}'`);
fs.writeFileSync(path.join(srcDir, 'chaptersN1.js'), n1Content);

console.log("Renumbering complete. N5: 27, N4: 26, N3: 27, N2: 2, N1: 2.");
