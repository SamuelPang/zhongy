export const documents = [
  { id: '01', title: '源流概述', topic: 'philosophy', order: 1, difficulty: 1, path: '01-源流概述.md' },
  { id: '02', title: '医易同源', topic: 'philosophy', order: 2, difficulty: 3, path: '02-医易同源.md' },
  { id: '03', title: '中医系统论', topic: 'theory', order: 3, difficulty: 2, path: '03-中医系统论.md' },
  { id: '04', title: '阴阳学说', topic: 'philosophy', order: 4, difficulty: 2, path: '04-阴阳学说.md' },
  { id: '05', title: '五行学说', topic: 'philosophy', order: 5, difficulty: 3, path: '05-五行学说.md' },
  { id: '06', title: '藏象学说', topic: 'theory', order: 6, difficulty: 3, path: '06-藏象学说.md' },
  { id: '07', title: '气血津液', topic: 'theory', order: 7, difficulty: 2, path: '07-气血津液.md' },
  { id: '08', title: '经络学说', topic: 'theory', order: 8, difficulty: 4, path: '08-经络学说.md' },
  { id: '09', title: '病因病机', topic: 'theory', order: 9, difficulty: 3, path: '09-病因病机.md' },
  { id: '10', title: '望诊', topic: 'diagnosis', order: 10, difficulty: 2, path: '10-望诊.md' },
  { id: '11', title: '闻诊', topic: 'diagnosis', order: 11, difficulty: 2, path: '11-闻诊.md' },
  { id: '12', title: '问诊', topic: 'diagnosis', order: 12, difficulty: 2, path: '12-问诊.md' },
  { id: '13', title: '切诊', topic: 'diagnosis', order: 13, difficulty: 3, path: '13-切诊.md' },
  { id: '14', title: '中药学概论', topic: 'treatment', order: 14, difficulty: 3, path: '14-中药学概论.md' },
  { id: '15', title: '方剂学概论', topic: 'treatment', order: 15, difficulty: 3, path: '15-方剂学概论.md' },
  { id: '16', title: '食疗养生', topic: 'treatment', order: 16, difficulty: 2, path: '16-食疗养生.md' },
  { id: '17', title: '针灸推拿', topic: 'treatment', order: 17, difficulty: 4, path: '17-针灸推拿.md' },
  { id: '18', title: '常见病证', topic: 'clinical', order: 18, difficulty: 2, path: '18-常见病证.md' },
  { id: '19', title: '四季养生', topic: 'clinical', order: 19, difficulty: 2, path: '19-四季养生.md' },
  { id: '20', title: '体质辨识', topic: 'clinical', order: 20, difficulty: 3, path: '20-体质辨识.md' },
  { id: '21', title: '黄帝内经', topic: 'classics', order: 21, difficulty: 3, path: '21-黄帝内经.md' },
  { id: '22', title: '伤寒论', topic: 'classics', order: 22, difficulty: 4, path: '22-伤寒论.md' },
  { id: '23', title: '金匮要略', topic: 'classics', order: 23, difficulty: 3, path: '23-金匮要略.md' },
  { id: '24', title: '神农本草经', topic: 'classics', order: 24, difficulty: 3, path: '24-神农本草经.md' }
]

export function getDocumentsByTopic(topicId) {
  return documents.filter(doc => doc.topic === topicId)
}

export function getDocumentById(id) {
  return documents.find(doc => doc.id === id)
}

export function getNextDocument(currentId) {
  const currentIndex = documents.findIndex(doc => doc.id === currentId)
  if (currentIndex < documents.length - 1) {
    return documents[currentIndex + 1]
  }
  return null
}

export function getPrevDocument(currentId) {
  const currentIndex = documents.findIndex(doc => doc.id === currentId)
  if (currentIndex > 0) {
    return documents[currentIndex - 1]
  }
  return null
}
