const fs = require('fs');

let content = fs.readFileSync('C:/workspaces/vibe-code/src/data/chaptersN4.js', 'utf8');

// Update top comment
content = content.replace(/\/\/ N4 章節資料 - 初級 \(\d+章\)/, '// N4 章節資料 - 初級 (26章)');

// Split by chapter start
const parts = content.split(/\/\/ ---- 第 \d+ 關：/);
const header = parts[0];
const chapters = parts.slice(1);

let newChapters = [];
let currentChapNum = 28;

for (let i = 0; i < chapters.length; i++) {
    let chapContent = chapters[i];
    
    // Extract title from comment
    const titleMatch = chapContent.match(/^(.*?)\s*----\r?\n/);
    if (!titleMatch) {
      console.log('No title match for chapter ' + i);
      continue;
    }
    const titleComment = titleMatch[1];
    // Remove the original first line (title line) from chapContent
    chapContent = chapContent.substring(titleMatch[0].length);
    
    // Update ID
    // Find the current id using regex
    chapContent = chapContent.replace(/id:\s*'n4_ch\d+',/, `id: 'n4_ch${currentChapNum}',`);
    
    // The "如果...的話 (假設條件)" is old chapter 35 (currentChapNum = 37 here)
    if (chapContent.includes("如果...的話 (假設條件)")) {
        // Expand grammar
        const grammarRegex = /(grammar:\s*\[)([\s\S]*?)(^\s*\]\,)/m;
        const match = chapContent.match(grammarRegex);
        if (match) {
            let newGrammarStr = `
      {
        pattern: '動詞ば形 / い形容詞ければ',
        explanation: '表示假設的條件「如果...的話」。【ば形變化】I類動詞字尾改え段加ば；II類動詞去ます加れば；III類：する變すれば，来る變くれば。い形容詞去い加ければ。',
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
      },
      {
        pattern: '動詞辭書形 ＋ と',
        explanation: '表示必然的結果、自然現象或習慣。「一...就會...」。',
        examples: [
          { jp: 'このボタンを押{お}すと、切符{きっぷ}が出{で}ます。', romaji: 'Kono botan o osu to, kippu ga demasu.', zh: '一按下這個按鈕，票就會出來。' },
        ]
      },
      {
        pattern: '普通形 ＋ なら',
        explanation: '承接對方的話題，給予建議或意見。「如果是...的話」。',
        examples: [
          { jp: '温泉{おんせん}なら、箱根{はこね}がいいですよ。', romaji: 'Onsen nara, Hakone ga ii desu yo.', zh: '如果是溫泉的話，箱根很不錯喔。' },
        ]
      }`;
            chapContent = chapContent.replace(grammarRegex, `$1${newGrammarStr}\n    ],`);
        }
        
        // Expand quiz
        const quizRegex = /(quiz:\s*\[)([\s\S]*?)(^\s*\]\n)/m;
        const quizMatch = chapContent.match(quizRegex);
        if (quizMatch) {
            let newQuizStr = `
      { question: '「行く」的ば形是？', options: ['行けば', '行かば', '行こば', '行きば'], answer: 0 },
      { question: '駅に着い___、電話してください。(之後)', options: ['たら', 'れば', 'と', 'なら'], answer: 0 },
      { question: '春になる___、桜が咲きます。(自然結果)', options: ['と', 'たら', 'なら', 'ば'], answer: 0 },
      { question: 'パソコンを買う___、あの店がいいですよ。(如果...)', options: ['なら', 'と', 'たら', 'ば'], answer: 0 },
      { question: '安かっ___、買います。(如果便宜的話)', options: ['たら', 'れば', 'と', 'なら'], answer: 0 },`;
            chapContent = chapContent.replace(quizRegex, `$1${newQuizStr}\n    ]\n`);
        }
    }

    // Reconstruct chapter block
    newChapters.push(`// ---- 第 ${currentChapNum} 關：${titleComment} ----\n${chapContent}`);
    
    // Insert new chapter after "做得太超過了 (～すぎます)"
    if (chapContent.includes("做得太超過了 (～すぎます)")) {
        currentChapNum++;
        const newChapterStr = `// ---- 第 ${currentChapNum} 關：容易與困難 (～やすい/にくい) ----
  {
    id: 'n4_ch${currentChapNum}',
    level: 'N4',
    title: '容易與困難 (～やすい/にくい)',
    grammar: [
      {
        pattern: '動詞ます形(去ます) ＋ やすい / にくい',
        explanation: '表示動作的容易或困難程度。「やすい」是容易做，「にくい」是很難做。變化方式和い形容詞完全相同。',
        examples: [
          { jp: 'このペンはとても書{か}きやすいです。', romaji: 'Kono pen wa totemo kakiyasui desu.', zh: '這支筆很好寫。' },
          { jp: 'この靴{くつ}は歩{ある}きにくいです。', romaji: 'Kono kutsu wa arukinikui desu.', zh: '這雙鞋很難走。' },
        ]
      }
    ],
    vocabulary: [
      { word: '使う', reading: 'つかう', romaji: 'tsukau', meaning: '使用 (I類動詞)' },
      { word: '壊れる', reading: 'こわれる', romaji: 'kowareru', meaning: '壞掉 (II類動詞)' },
      { word: '割れる', reading: 'われる', romaji: 'wareru', meaning: '破裂 (II類動詞)' },
      { word: '分かる', reading: 'わかる', romaji: 'wakaru', meaning: '明白/了解 (I類動詞)' },
      { word: '滑る', reading: 'すべる', romaji: 'suberu', meaning: '滑 (I類動詞)' },
      { word: '歩く', reading: 'あるく', romaji: 'aruku', meaning: '走路 (I類動詞)' },
      { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: '喝 (I類動詞)' },
      { word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: '藥 (名詞)' },
      { word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: '鞋子 (名詞)' },
      { word: 'ペン', reading: 'ぺん', romaji: 'pen', meaning: '筆 (名詞)' },
    ],
    quiz: [
      { question: 'この薬は___にくいです。(難喝)', options: ['飲む', '飲み', '飲んで', '飲ま'], answer: 1 },
      { question: 'この靴は歩き___です。(很好走)', options: ['やすい', 'にくい', 'すぎ', 'たい'], answer: 0 },
      { question: 'ガラスは___やすいです。(容易破)', options: ['割れ', '壊れ', '滑り', '使い'], answer: 0 },
      { question: '雨の日は道が___やすいです。(容易滑)', options: ['滑り', '滑る', '滑って', '滑ら'], answer: 0 },
      { question: 'この説明は分かり___。(很難懂)', options: ['にくいです', 'やすいです', 'すぎます', 'たいです'], answer: 0 },
    ]
  },
`;
        newChapters.push(newChapterStr);
    }
    
    currentChapNum++;
}

fs.writeFileSync('C:/workspaces/vibe-code/src/data/chaptersN4.js', header + newChapters.join(''));
console.log('Done!');
