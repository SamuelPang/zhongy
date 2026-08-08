<template>
  <div class="document-viewer">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>加载中...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>
    
    <div v-else class="doc-content">
      <div v-html="renderedContent" class="markdown-body"></div>
      
      <div class="doc-navigation">
        <router-link v-if="prevDoc" :to="`/topic/${topicId}?doc=${prevDoc.id}`" class="nav-btn prev">
          ← {{ prevDoc.title }}
        </router-link>
        <router-link v-if="nextDoc" :to="`/topic/${topicId}?doc=${nextDoc.id}`" class="nav-btn next">
          {{ nextDoc.title }} →
        </router-link>
      </div>
      
      <div class="doc-actions">
        <button @click="markCompleted" class="btn btn-primary" :class="{ completed: isCompleted }">
          {{ isCompleted ? '已习毕' : '记已习毕' }}
        </button>
        <button @click="addBookmark" class="btn btn-outline">
          收于书签
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { getDocumentById, getNextDocument, getPrevDocument } from '@/data/documents'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const appStore = useAppStore()

const loading = ref(true)
const error = ref(null)
const content = ref('')

const docId = computed(() => route.query.doc)
const topicId = computed(() => route.params.topicId)
const document = computed(() => docId.value ? getDocumentById(docId.value) : null)
const prevDoc = computed(() => document.value ? getPrevDocument(document.value.id) : null)
const nextDoc = computed(() => document.value ? getNextDocument(document.value.id) : null)
const isCompleted = computed(() => document.value ? appStore.progress[document.value.id]?.completed : false)

const renderedContent = computed(() => {
  if (!content.value) return ''
  return marked(content.value)
})

async function loadDocument() {
  if (!document.value) {
    loading.value = false
    return
  }
  
  try {
    // 这里应该从 public/docs 目录加载 Markdown 文件
    // 暂时使用占位内容
    content.value = `# ${document.value.title}

> 文档加载中...

这是**${document.value.title}**的内容占位符。

## 内容结构

1. 章节一
2. 章节二
3. 章节三

## 示例

\`\`\`javascript
console.log('Hello, 中医!')
\`\`\`
`
    loading.value = false
  } catch (e) {
    error.value = '加载文档失败：' + e.message
    loading.value = false
  }
}

function markCompleted() {
  if (document.value) {
    appStore.markDocumentCompleted(document.value.id)
  }
}

function addBookmark() {
  if (document.value) {
    appStore.addBookmark(document.value.id, 0, document.value.title)
  }
}

onMounted(() => {
  loadDocument()
})
</script>

<style scoped>
.document-viewer {
  max-width: 800px;
}

.loading, .error {
  text-align: center;
  padding: 3rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e5d8bc;
  border-top-color: #a8322a;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error {
  color: #a8322a;
}

.doc-content {
  background: #fbf8f1;
  border: 1px solid #e5d8bc;
  border-radius: 4px;
  padding: 2.5rem 2.75rem;
  box-shadow: 0 2px 8px rgba(51, 48, 43, 0.06);
}

.markdown-body {
  line-height: 2;
  color: #33302b;
  font-size: 1.02rem;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  color: #262320;
  margin-top: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.markdown-body h1 {
  font-size: 2rem;
  border-bottom: 2px solid #b08d57;
  padding-bottom: 0.5rem;
}

.markdown-body h2 {
  font-size: 1.5rem;
  border-bottom: 1px solid #d6b98a;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  border-left: 4px solid #a8322a;
}

.markdown-body h3 { font-size: 1.25rem; }

.markdown-body p {
  margin-bottom: 1rem;
  text-align: justify;
}

.markdown-body code {
  background: #efe6d0;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  font-size: 0.9em;
  color: #7a241e;
}

.markdown-body pre {
  background: #33302b;
  color: #efe6d0;
  padding: 1rem;
  border-radius: 3px;
  overflow-x: auto;
  margin: 1rem 0;
  border-left: 4px solid #b08d57;
}

.markdown-body pre code {
  background: none;
  padding: 0;
  color: inherit;
}

.markdown-body blockquote {
  border-left: 4px solid #a8322a;
  background: #f6f0e2;
  padding: 0.75rem 1.25rem;
  margin: 1rem 0;
  color: #4d4941;
  border-radius: 0 3px 3px 0;
}

.markdown-body ul, .markdown-body ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

.markdown-body li {
  margin: 0.5rem 0;
}

.markdown-body table {
  border-collapse: collapse;
  margin: 1rem 0;
  width: 100%;
}

.markdown-body th,
.markdown-body td {
  border: 1px solid #e5d8bc;
  padding: 0.5rem 0.75rem;
}

.markdown-body th {
  background: #f6f0e2;
  color: #33302b;
}

.doc-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5d8bc;
}

.nav-btn {
  padding: 0.6rem 1.25rem;
  background: #f6f0e2;
  border: 1px solid #e5d8bc;
  color: #4d4941;
  text-decoration: none;
  border-radius: 3px;
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  letter-spacing: 0.05em;
  transition: all 0.2s;
}

.nav-btn:hover {
  background: #a8322a;
  border-color: #a8322a;
  color: #faf6ec;
}

.doc-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn.completed {
  background-color: #58755c;
  border-color: #58755c;
}
</style>
