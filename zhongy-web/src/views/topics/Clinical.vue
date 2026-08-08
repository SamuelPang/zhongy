<template>
  <div class="topic-page">
    <div class="topic-header">
      <h1 class="topic-title">{{ topic.title }}</h1>
      <p class="topic-subtitle">{{ topic.subtitle }}</p>
      <p class="topic-desc">{{ topic.description }}</p>
    </div>
    
    <div v-if="topic.placeholder" class="placeholder-card">
      <div class="placeholder-icon">待</div>
      <h3>建设中</h3>
      <p>本专题内容正在开发中，敬请期待。</p>
    </div>
    
    <template v-else>
      <div class="viz-section">
        <h2 class="section-title">知识可视化</h2>
        <p class="viz-placeholder">可视化组件开发中...</p>
      </div>
      
      <div class="docs-section">
        <h2 class="section-title">文档列表</h2>
        <div class="docs-grid">
          <router-link v-for="doc in topicDocuments" :key="doc.id" :to="`/topic/${topic.id}?doc=${doc.id}`" class="doc-card">
            <div class="doc-header">
              <span class="doc-number">{{ doc.order }}</span>
              <span class="doc-title">{{ doc.title }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { topics } from '@/data/topics'
import { getDocumentsByTopic } from '@/data/documents'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const appStore = useAppStore()
const topicId = computed(() => route.params.topicId || 'clinical')
const topic = computed(() => topics[topicId.value] || {})
const topicDocuments = computed(() => getDocumentsByTopic(topicId.value))

onMounted(() => { appStore.loadFromStorage() })
</script>
