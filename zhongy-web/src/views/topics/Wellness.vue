<template>
  <div class="topic-page">
    <div class="topic-header">
      <h1 class="topic-title">{{ topic.title }}</h1>
      <p class="topic-subtitle">{{ topic.subtitle }}</p>
      <p class="topic-desc">{{ topic.description }}</p>
    </div>
    
    <div class="placeholder-card">
      <div class="placeholder-icon">待</div>
      <h3>建设中</h3>
      <p>本专题内容正在开发中，敬请期待。</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { topics } from '@/data/topics'

const route = useRoute()
const topicId = computed(() => route.params.topicId || 'wellness')
const topic = computed(() => topics[topicId.value] || {})
</script>
