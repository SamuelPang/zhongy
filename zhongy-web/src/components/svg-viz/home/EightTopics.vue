<template>
  <div class="eight-topics-viz">
    <svg viewBox="0 0 800 600" class="viz-svg">
      <!-- 中心太极印章 -->
      <circle cx="400" cy="300" r="60" fill="#a8322a" class="center-circle" />
      <circle cx="400" cy="300" r="60" fill="none" stroke="#d3a09a" stroke-width="1.5" />
      <text x="400" y="297" text-anchor="middle" fill="#faf6ec" font-size="22" font-family="Kaiti SC, STKaiti, KaiTi, serif" font-weight="bold">中医</text>
      <text x="400" y="320" text-anchor="middle" fill="#f0e3c4" font-size="9" font-family="Kaiti SC, STKaiti, KaiTi, serif">博 极 医 源</text>
      
      <!-- 8 个专题节点 -->
      <g
        v-for="(topic, index) in positionedTopics"
        :key="topic.id"
        class="topic-node"
        :class="{ active: hoveredTopic === topic.id }"
        @mouseenter="hoveredTopic = topic.id"
        @mouseleave="hoveredTopic = null"
        @click="goToTopic(topic.id)"
      >
        <!-- 连接线 -->
        <line
          :x1="400" :y1="300"
          :x2="topic.x" :y2="topic.y"
          stroke="#d6b98a"
          stroke-width="1.5"
          stroke-dasharray="6 4"
          :class="{ 'active-line': hoveredTopic === topic.id }"
        />
        
        <!-- 节点印章 -->
        <rect
          :x="topic.x - 26" :y="topic.y - 26"
          width="52" height="52"
          rx="4"
          :fill="topic.color"
          class="node-circle"
        />
        <rect
          :x="topic.x - 26" :y="topic.y - 26"
          width="52" height="52"
          rx="4"
          fill="none"
          :stroke="hoveredTopic === topic.id ? '#faf6ec' : '#d3a09a'"
          stroke-width="1.5"
          class="node-stroke"
        />
        
        <!-- 单字 -->
        <text
          :x="topic.x" :y="topic.y + 7"
          text-anchor="middle"
          fill="#faf6ec"
          font-size="20"
          font-family="Kaiti SC, STKaiti, KaiTi, serif"
          font-weight="bold"
        >{{ topic.icon }}</text>
        
        <!-- 标题 -->
        <text
          :x="topic.x" :y="topic.y + 42"
          text-anchor="middle"
          fill="#4d4941"
          font-size="13"
          font-family="Kaiti SC, STKaiti, KaiTi, serif"
        >{{ topic.title }}</text>
      </g>
    </svg>
    
    <!-- Tooltip -->
    <div v-if="hoveredTopic" class="tooltip" :style="tooltipStyle">
      <h4>{{ getTopicInfo(hoveredTopic).title }}</h4>
      <p>{{ getTopicInfo(hoveredTopic).description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { topicList } from '@/data/topics'
import gsap from 'gsap'

const hoveredTopic = ref(null)

// 计算 8 个节点的位置（环形布局）
const positionedTopics = computed(() => {
  const centerX = 400
  const centerY = 300
  const radius = 220
  const angleStep = (2 * Math.PI) / topicList.length
  
  return topicList.map((topic, index) => {
    const angle = index * angleStep - Math.PI / 2
    return {
      ...topic,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    }
  })
})

const tooltipStyle = computed(() => {
  if (!hoveredTopic.value) return {}
  const topic = positionedTopics.value.find(t => t.id === hoveredTopic.value)
  return {
    left: `${topic.x}px`,
    top: `${topic.y - 80}px`
  }
})

function getTopicInfo(id) {
  return topicList.find(t => t.id === id) || {}
}

function goToTopic(id) {
  const topic = getTopicInfo(id)
  if (topic && !topic.placeholder) {
    window.location.href = `/topic/${id}`
  }
}

// 初始化动画
onMounted(() => {
  gsap.from('.center-circle', {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)'
  })
  
  gsap.from('.topic-node', {
    duration: 0.8,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    delay: 0.3,
    ease: 'back.out(1.7)'
  })
})
</script>

<style scoped>
.eight-topics-viz {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.viz-svg {
  width: 100%;
  height: auto;
}

.center-circle {
  cursor: default;
}

.topic-node {
  cursor: pointer;
  transition: all 0.3s;
}

.node-circle,
.node-stroke {
  transition: all 0.3s;
}

.topic-node:hover .node-circle {
  filter: brightness(1.12);
}

.active-line {
  stroke: #a8322a !important;
  stroke-width: 2 !important;
  stroke-dasharray: none !important;
}

.tooltip {
  position: absolute;
  transform: translate(-50%, -100%);
  background: #fbf8f1;
  border: 1px solid #e5d8bc;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0 4px 15px rgba(51, 48, 43, 0.15);
  max-width: 250px;
  z-index: 10;
}

.tooltip h4 {
  margin-bottom: 0.5rem;
  color: #262320;
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', serif;
  letter-spacing: 0.15em;
}

.tooltip p {
  font-size: 0.875rem;
  color: #4d4941;
  line-height: 1.6;
}
</style>
