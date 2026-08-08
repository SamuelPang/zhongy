<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <div class="sidebar-section">
        <h3 class="sidebar-title">专题导航</h3>
        <nav class="topic-nav">
          <router-link
            v-for="topic in topicList"
            :key="topic.id"
            :to="`/topic/${topic.id}`"
            class="topic-link"
            :class="{ active: $route.path === `/topic/${topic.id}` }"
          >
            <span class="topic-icon" :style="{ background: topic.color }">{{ topic.icon }}</span>
            <span class="topic-name">{{ topic.title }}</span>
            <span v-if="topic.placeholder" class="badge">待成</span>
          </router-link>
        </nav>
      </div>
      
      <div class="sidebar-section">
        <h3 class="sidebar-title">学习进度</h3>
        <div class="progress-card">
          <div class="progress-header">
            <span>完成度</span>
            <span class="progress-rate">{{ completionRate }}%</span>
          </div>
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: `${completionRate}%` }"
            ></div>
          </div>
        </div>
      </div>
      
      <div class="sidebar-section" v-if="bookmarks.length > 0">
        <h3 class="sidebar-title">书签</h3>
        <div class="bookmark-list">
          <router-link
            v-for="bookmark in bookmarks"
            :key="bookmark.docId"
            :to="`/topic/${getDocumentTopic(bookmark.docId)}`"
            class="bookmark-item"
          >
            <span class="bookmark-title">{{ bookmark.title }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { topicList } from '@/data/topics'
import { documents, getDocumentById } from '@/data/documents'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const completionRate = computed(() => appStore.getCompletionRate())
const bookmarks = computed(() => appStore.bookmarks)

function getDocumentTopic(docId) {
  const doc = getDocumentById(docId)
  return doc?.topic || 'philosophy'
}

onMounted(() => {
  appStore.loadFromStorage()
})
</script>

<style scoped>
.sidebar {
  width: 280px;
  background: #fbf8f1;
  border-right: 1px solid #e5d8bc;
  padding: 1.5rem 1.25rem;
  overflow-y: auto;
  height: calc(100vh - 57px);
  position: sticky;
  top: 57px;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sidebar-title {
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: #4d4941;
  padding-left: 0.75rem;
  border-left: 3px solid #a8322a;
}

.topic-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.topic-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 3px;
  text-decoration: none;
  color: #4d4941;
  transition: all 0.2s;
}

.topic-link:hover {
  background: #f6f0e2;
  border-color: #e5d8bc;
  color: #262320;
}

.topic-link.active {
  background: #f0dcd8;
  border-color: #d3a09a;
  color: #7a241e;
  font-weight: 700;
}

.topic-icon {
  width: 1.9rem;
  height: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: #faf6ec;
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', serif;
  font-size: 1rem;
  font-weight: 700;
  flex-shrink: 0;
}

.topic-name {
  flex: 1;
  letter-spacing: 0.1em;
}

.badge {
  font-size: 0.625rem;
  padding: 0.125rem 0.375rem;
  background: #e5e2dc;
  color: #8a857b;
  border-radius: 2px;
}

.progress-card {
  background: #f6f0e2;
  border: 1px solid #e5d8bc;
  padding: 1rem;
  border-radius: 3px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #4d4941;
}

.progress-rate {
  font-weight: 700;
  color: #a8322a;
}

.progress-bar {
  height: 0.5rem;
  background: #e5d8bc;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #a8322a, #b08d57);
  transition: width 0.5s ease;
}

.bookmark-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bookmark-item {
  padding: 0.5rem 0.75rem;
  background: #f6f0e2;
  border: 1px solid #e5d8bc;
  border-radius: 3px;
  text-decoration: none;
  color: #4d4941;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.bookmark-item:hover {
  background: #efe6d0;
  color: #262320;
}
</style>
