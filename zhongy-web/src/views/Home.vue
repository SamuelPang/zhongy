<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-decoration left">遵<br/>道<br/>贵<br/>德</div>
      <div class="hero-content">
        <span class="seal hero-seal">中</span>
        <h1 class="hero-title">中医知识库</h1>
        <p class="hero-subtitle">从《黄帝内经》始，循序研习中医之学</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">24</span>
            <span class="stat-label">篇文档</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">8</span>
            <span class="stat-label">大专题</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">约八万</span>
            <span class="stat-label">字内容</span>
          </div>
        </div>
      </div>
      <div class="hero-decoration right">博<br/>极<br/>医<br/>源</div>
    </section>
    
    <section class="topics-section">
      <h2 class="section-title">学习专题</h2>
      <div class="topics-grid">
        <router-link
          v-for="topic in topicList"
          :key="topic.id"
          :to="`/topic/${topic.id}`"
          class="topic-card"
          :class="{ disabled: topic.placeholder }"
        >
          <div class="topic-card-header">
            <span class="topic-icon" :style="{ background: topic.color }">{{ topic.icon }}</span>
            <span v-if="topic.placeholder" class="placeholder-badge">待成</span>
          </div>
          <h3 class="topic-title">{{ topic.title }}</h3>
          <p class="topic-subtitle">{{ topic.subtitle }}</p>
          <p class="topic-desc">{{ topic.description }}</p>
          <div class="topic-docs">
            <span class="docs-count">{{ topic.documents.length }}</span>
            <span>篇文档</span>
          </div>
        </router-link>
      </div>
    </section>
    
    <section class="viz-section">
      <h2 class="section-title">知识图谱</h2>
      <EightTopicsViz />
    </section>
  </div>
</template>

<script setup>
import { topicList } from '@/data/topics'
import EightTopicsViz from '@/components/svg-viz/home/EightTopics.vue'
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* 卷轴式 hero：纸色底 + 细线边框 + 竖排点缀 */
.hero {
  position: relative;
  background: linear-gradient(180deg, #f3ead6 0%, #ecdfc5 100%);
  border: 1px solid #e5d8bc;
  border-radius: 4px;
  color: #262320;
  padding: 4rem 4rem;
  margin-bottom: 3rem;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
  width: 1px;
  background: #b08d57;
  opacity: 0.4;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1rem;
  width: 1px;
  background: #b08d57;
  opacity: 0.4;
}

.hero-decoration {
  position: absolute;
  top: 1.5rem;
  bottom: 1.5rem;
  writing-mode: vertical-rl;
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', serif;
  font-size: 1rem;
  letter-spacing: 0.5em;
  color: #b08d57;
  opacity: 0.7;
}

.hero-decoration.left { left: 2.5rem; }
.hero-decoration.right { right: 2.5rem; }

.hero-content {
  text-align: center;
}

.hero-seal {
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1.9rem;
  margin-bottom: 1rem;
}

.hero-title {
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  margin-bottom: 0.75rem;
  color: #262320;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: #4d4941;
  margin-bottom: 2.5rem;
  letter-spacing: 0.15em;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: #a8322a;
}

.stat-label {
  font-size: 0.875rem;
  color: #8a857b;
  letter-spacing: 0.2em;
}

.topics-section {
  margin-bottom: 3rem;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.topic-card {
  background: #fbf8f1;
  border: 1px solid #e5d8bc;
  border-radius: 4px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 6px rgba(51, 48, 43, 0.06);
  transition: all 0.3s;
}

.topic-card:hover:not(.disabled) {
  transform: translateY(-3px);
  border-color: #b08d57;
  box-shadow: 0 8px 18px rgba(51, 48, 43, 0.12);
}

.topic-card.disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.topic-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.topic-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #faf6ec;
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', serif;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: inset 0 0 0 1px rgba(250, 246, 236, 0.35);
}

.placeholder-badge {
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  background: #e5e2dc;
  color: #8a857b;
  border-radius: 2px;
  letter-spacing: 0.15em;
}

.topic-title {
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  margin-bottom: 0.25rem;
  color: #262320;
}

.topic-subtitle {
  font-size: 0.875rem;
  color: #8a857b;
  margin-bottom: 0.75rem;
  letter-spacing: 0.1em;
}

.topic-desc {
  font-size: 0.875rem;
  color: #4d4941;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.topic-docs {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #8a857b;
}

.docs-count {
  font-weight: 700;
  color: #a8322a;
}

.viz-section {
  margin-bottom: 3rem;
}
</style>
