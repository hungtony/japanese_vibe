// 章節資料 - N5~N1 各等級（依等級拆分為獨立檔案）
import { chaptersN5 } from './chaptersN5'
import { chaptersN4 } from './chaptersN4'
import { chaptersN3 } from './chaptersN3'
import { chaptersN2 } from './chaptersN2'
import { chaptersN1 } from './chaptersN1'

export const levelConfig = {
  N5: { color: 'n5', label: '入門', description: '基礎文法、助詞與日常表達 (28章)' },
  N4: { color: 'n4', label: '初級', description: '日常生活與簡單對話 (27章)' },
  N3: { color: 'n3', label: '中級', description: '社交與表達意見 (28章)' },
  N2: { color: 'n2', label: '中上級', description: '新聞閱讀與正式場合' },
  N1: { color: 'n1', label: '上級', description: '學術與商務日語' },
}

export const chapters = [
  ...chaptersN5,
  ...chaptersN4,
  ...chaptersN3,
  ...chaptersN2,
  ...chaptersN1,
]
