const fs = require('fs');
const content = fs.readFileSync('src/data/chaptersN3.js', 'utf8');
const regex = /{ word: '([^']+)', reading: '([^']+)', romaji: '([^']+)', meaning: '([^']+)' }/g;
let match;
const words = [];
while ((match = regex.exec(content)) !== null) {
  if (!match[4].includes('類動詞') && !match[4].includes('形容詞')) {
    words.push({ word: match[1], meaning: match[4] });
  }
}
console.log(JSON.stringify(words, null, 2));