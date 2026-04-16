import re

with open(
    r"C:\workspaces\vibe-code\src\data\chaptersN5.js", "r", encoding="utf-8"
) as f:
    content = f.read()

# Replace the top comment
content = content.replace(
    "// N5 章節資料 - 入門 (25章)", "// N5 章節資料 - 入門 (27章)"
)

# Define new chapters
ch11_content = """  // ---- 第 11 關：現在正在... (狀態與進行) ----
  {
    id: 'n5_ch11',
    level: 'N5',
    title: '現在正在... (狀態與進行)',
    grammar: [
      {
        pattern: 'Vて形 + います',
        explanation: '表示動作正在進行、狀態持續或反覆的習慣。',
        examples: [
          { jp: '今{いま}、雨{あめ}が降{ふ}っています。', romaji: 'Ima, ame ga futte imasu.', zh: '現在正在下雨。' },
          { jp: '私{わたし}は車{くるま}を持{も}っています。', romaji: 'Watashi wa kuruma o motte imasu.', zh: '我有一輛車（狀態持續）。' }
        ]
      }
    ],
    vocabulary: [
      { word: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', meaning: '結婚 (III類動詞)' },
      { word: '知る', reading: 'しる', romaji: 'shiru', meaning: '知道/認識 (I類動詞)' },
      { word: '住む', reading: 'すむ', romaji: 'sumu', meaning: '居住 (I類動詞)' },
      { word: '持つ', reading: 'もつ', romaji: 'motsu', meaning: '持有/拿 (I類動詞)' },
      { word: '降る', reading: 'ふる', romaji: 'furu', meaning: '降下(雨/雪) (I類動詞)' },
      { word: '売る', reading: 'うる', romaji: 'uru', meaning: '賣 (I類動詞)' },
      { word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: '製作 (I類動詞)' },
      { word: '独身', reading: 'どくしん', romaji: 'dokushin', meaning: '單身 (名詞)' },
      { word: '車', reading: 'くるま', romaji: 'kuruma', meaning: '車 (名詞)' },
      { word: '今', reading: 'いま', romaji: 'ima', meaning: '現在 (名詞)' }
    ],
    quiz: [
      { question: '表示正在下雨：雨が___。', options: ['降ります', '降って', '降っています', '降った'], answer: 2 },
      { question: '「知る」的て形+います形式是？', options: ['知っています', '知ります', '知って', '知りました'], answer: 0 },
      { question: '「結婚する」屬於哪一類動詞？', options: ['I類動詞', 'II類動詞', 'III類動詞', '不規則動詞'], answer: 2 },
      { question: '「車」的讀音是？', options: ['くるま', 'でんしゃ', 'じてんしゃ', 'ばす'], answer: 0 },
      { question: '「單身」的日文是？', options: ['どくしん', 'けっこん', 'かぞく', 'ともだち'], answer: 0 }
    ]
  },

"""

ch26_content = """  // ---- 第 26 關：因為所以 (原因理由) ----
  {
    id: 'n5_ch26',
    level: 'N5',
    title: '因為所以 (原因理由)',
    grammar: [
      {
        pattern: '〜から / 〜ので',
        explanation: '表示原因理由。「から」主觀原因，「ので」客觀原因。な形容詞和名詞接「ので」時要用「な」。',
        examples: [
          { jp: '忙{いそが}しいから、行{い}きません。', romaji: 'Isogashii kara, ikimasen.', zh: '因為很忙，所以不去。' },
          { jp: '雨{あめ}なので、休{やす}みます。', romaji: 'Ame na node, yasumimasu.', zh: '因為下雨，所以休息。' }
        ]
      }
    ],
    vocabulary: [
      { word: '暑い', reading: 'あつい', romaji: 'atsui', meaning: '熱的 (い形容詞)' },
      { word: '寒い', reading: 'さむい', romaji: 'samui', meaning: '冷的 (い形容詞)' },
      { word: '好き', reading: 'すき', romaji: 'suki', meaning: '喜歡 (な形容詞)' },
      { word: '嫌い', reading: 'きらい', romaji: 'kirai', meaning: '討厭 (な形容詞)' },
      { word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的 (い形容詞)' },
      { word: '用事', reading: 'ようじ', romaji: 'yōji', meaning: '事情/要事 (名詞)' },
      { word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: '遲到 (II類動詞)' },
      { word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: '休息/請假 (I類動詞)' },
      { word: '危ない', reading: 'あぶない', romaji: 'abunai', meaning: '危險的 (い形容詞)' },
      { word: '安全', reading: 'あんぜん', romaji: 'anzen', meaning: '安全的 (な形容詞)' }
    ],
    quiz: [
      { question: '「因為很忙」：忙しい___。', options: ['から', 'まで', 'に', 'を'], answer: 0 },
      { question: '名詞接「ので」時要加什麼？', options: ['だ', 'な', 'の', 'に'], answer: 1 },
      { question: '「用事」的意思是？', options: ['事情', '生病', '遲到', '休息'], answer: 0 },
      { question: '「危ない」的反義詞是？', options: ['安全', '嫌い', '好き', '遅れる'], answer: 0 },
      { question: '「遲到」的日文是？', options: ['おくれる', 'やすむ', 'いそぐ', 'くる'], answer: 0 }
    ]
  },

"""

# We need to insert `ch11_content` right before `// ---- 第 11 關：做點什麼吧 (邀請與提議：～ませんか / ～ましょう) ----`
# But since we'll also be renumbering, it's easier to process sequentially.

parts = re.split(r"(  // ---- 第 \d+ 關：.*)", content)
# parts[0] is the prefix before chapter 1
# parts[1], parts[2] is ch 1 header and content
# ...
# We need to extract the chapters and manipulate them.

chapters = []
for i in range(1, len(parts), 2):
    header = parts[i]
    body = parts[i + 1]

    # Extract the original number and title
    m = re.match(r"  // ---- 第 (\d+) 關：(.*) ----", header)
    old_num = int(m.group(1))
    title_part = m.group(2)

    chapters.append({"old_num": old_num, "title_part": title_part, "body": body})

# Now build the new sequence
new_sequence = []
new_num = 1

for ch in chapters:
    if ch["old_num"] == 11:
        # Insert the new chapter 11 here
        new_sequence.append({"num": new_num, "is_new": True, "content": ch11_content})
        new_num += 1

    # Append the current chapter, but update its number
    ch["new_num"] = new_num
    new_sequence.append(ch)
    new_num += 1

    if ch["old_num"] == 24:
        # Insert the new chapter 26 here
        new_sequence.append({"num": new_num, "is_new": True, "content": ch26_content})
        new_num += 1

# Reconstruct the document
final_content = parts[0]

for item in new_sequence:
    if item.get("is_new"):
        final_content += item["content"]
    else:
        # Update header
        header = f"  // ---- 第 {item['new_num']} 關：{item['title_part']} ----"

        # Update id
        body = item["body"]
        body = re.sub(r"id: 'n5_ch\d+'", f"id: 'n5_ch{item['new_num']}'", body)

        final_content += header + body

with open(
    r"C:\workspaces\vibe-code\src\data\chaptersN5.js", "w", encoding="utf-8"
) as f:
    f.write(final_content)

print("Done")
