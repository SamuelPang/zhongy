import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useAppStore = defineStore('app', () => {
  // 学习进度
  const progress = ref({})
  
  // 书签
  const bookmarks = ref([])
  
  // 当前文档
  const currentDocument = ref(null)
  
  // 加载本地存储
  function loadFromStorage() {
    const savedProgress = localStorage.getItem('zhongy_progress')
    const savedBookmarks = localStorage.getItem('zhongy_bookmarks')
    
    if (savedProgress) {
      progress.value = JSON.parse(savedProgress)
    }
    if (savedBookmarks) {
      bookmarks.value = JSON.parse(savedBookmarks)
    }
  }
  
  // 保存进度
  function markDocumentCompleted(docId) {
    progress.value[docId] = {
      completed: true,
      timestamp: new Date().toISOString()
    }
    saveToStorage()
  }
  
  // 添加书签
  function addBookmark(docId, position, title) {
    const existingIndex = bookmarks.value.findIndex(b => b.docId === docId)
    const bookmark = {
      docId,
      position,
      title,
      timestamp: new Date().toISOString()
    }
    
    if (existingIndex >= 0) {
      bookmarks.value[existingIndex] = bookmark
    } else {
      bookmarks.value.push(bookmark)
    }
    saveToStorage()
  }
  
  // 删除书签
  function removeBookmark(docId) {
    bookmarks.value = bookmarks.value.filter(b => b.docId !== docId)
    saveToStorage()
  }
  
  // 保存到本地存储
  function saveToStorage() {
    localStorage.setItem('zhongy_progress', JSON.stringify(progress.value))
    localStorage.setItem('zhongy_bookmarks', JSON.stringify(bookmarks.value))
  }
  
  // 监听变化自动保存
  watch([progress, bookmarks], () => {
    saveToStorage()
  }, { deep: true })
  
  // 获取完成百分比
  function getCompletionRate() {
    const total = Object.keys(progress.value).length
    const completed = Object.values(progress.value).filter(p => p.completed).length
    return total > 0 ? Math.round((completed / total) * 100) : 0
  }
  
  return {
    progress,
    bookmarks,
    currentDocument,
    loadFromStorage,
    markDocumentCompleted,
    addBookmark,
    removeBookmark,
    getCompletionRate
  }
})
