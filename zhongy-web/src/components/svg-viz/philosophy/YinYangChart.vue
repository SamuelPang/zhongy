<template>
  <div class="yin-yang-chart">
    <svg viewBox="0 0 400 400" class="viz-svg">
      <!-- 太极外圆 -->
      <circle cx="200" cy="200" r="180" fill="#fbf8f1" stroke="#b08d57" stroke-width="2" />
      
      <!-- 阳鱼（白色部分） -->
      <path
        d="M200,20 A180,180 0 0,1 200,380 A90,90 0 0,0 200,200 A90,90 0 0,1 200,20 Z"
        fill="white"
        :class="{ 'active': hoveredElement === 'yang' }"
        @mouseenter="hoveredElement = 'yang'"
        @mouseleave="hoveredElement = null"
      />
      
      <!-- 阴鱼（黑色部分） -->
      <path
        d="M200,20 A180,180 0 0,0 200,380 A90,90 0 0,1 200,200 A90,90 0 0,0 200,20 Z"
        fill="#262320"
        :class="{ 'active': hoveredElement === 'yin' }"
        @mouseenter="hoveredElement = 'yin'"
        @mouseleave="hoveredElement = null"
      />
      
      <!-- 阳中阴点 -->
      <circle cx="200" cy="290" r="25" fill="white" :class="{ 'active': hoveredElement === 'yang' }" />
      <circle cx="200" cy="290" r="12" fill="#262320" />
      
      <!-- 阴中阳点 -->
      <circle cx="200" cy="110" r="25" fill="#262320" :class="{ 'active': hoveredElement === 'yin' }" />
      <circle cx="200" cy="110" r="12" fill="white" />
      
      <!-- 标签 -->
      <text x="200" y="85" text-anchor="middle" fill="#262320" font-size="18" font-weight="bold" font-family="Kaiti SC, STKaiti, KaiTi, serif">阳</text>
      <text x="200" y="335" text-anchor="middle" fill="white" font-size="18" font-weight="bold" font-family="Kaiti SC, STKaiti, KaiTi, serif">阴</text>
      
      <!-- 属性说明 -->
      <g v-if="hoveredElement === 'yang'" class="info-panel" :transform="infoPanelTransform.yang">
        <rect x="0" y="0" width="150" height="60" rx="3" fill="#fbf8f1" stroke="#b08d57" />
        <text x="15" y="25" font-size="12" font-weight="bold" fill="#262320">阳的属性</text>
        <text x="15" y="45" font-size="10" fill="#4d4941">天、日、热、动、刚</text>
      </g>
      
      <g v-if="hoveredElement === 'yin'" class="info-panel" :transform="infoPanelTransform.yin">
        <rect x="200" y="0" width="150" height="60" rx="3" fill="#fbf8f1" stroke="#b08d57" />
        <text x="215" y="25" font-size="12" font-weight="bold" fill="#262320">阴的属性</text>
        <text x="215" y="45" font-size="10" fill="#4d4941">地、月、寒、静、柔</text>
      </g>
    </svg>
    
    <div class="chart-desc">
      <h3>阴阳学说</h3>
      <p>阴阳是对自然界相互对立、相互关联的事物和现象的概括。</p>
      <div class="properties">
        <div class="property-item">
          <strong>互根互用：</strong>阴阳相互依存，互为根本
        </div>
        <div class="property-item">
          <strong>消长平衡：</strong>阴阳此消彼长，动态平衡
        </div>
        <div class="property-item">
          <strong>相互转化：</strong>阴可转阳，阳可转阴
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

const hoveredElement = ref(null)

const infoPanelTransform = computed(() => ({
  yang: 'translate(260, 50)',
  yin: 'translate(-120, 50)'
}))

onMounted(() => {
  gsap.from('.viz-svg', {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    ease: 'power2.out'
  })
  
  gsap.from('.chart-desc', {
    duration: 0.8,
    opacity: 0,
    y: 20,
    delay: 0.5,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.yin-yang-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.viz-svg {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.path {
  cursor: pointer;
  transition: filter 0.3s;
}

.path.active {
  filter: brightness(1.1);
}

.info-panel {
  opacity: 0;
  transition: opacity 0.3s;
}

.info-panel:hover {
  opacity: 1;
}

.chart-desc {
  margin-top: 2rem;
  text-align: center;
  max-width: 500px;
}

.chart-desc h3 {
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  font-size: 1.5rem;
  letter-spacing: 0.25em;
  color: #262320;
  margin-bottom: 0.75rem;
}

.chart-desc p {
  color: #4d4941;
  margin-bottom: 1.5rem;
}

.properties {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.property-item {
  padding: 0.75rem 1rem;
  background: #f6f0e2;
  border: 1px solid #e5d8bc;
  border-left: 4px solid #a8322a;
  border-radius: 3px;
  font-size: 0.875rem;
  color: #4d4941;
}

.property-item strong {
  color: #262320;
}
</style>
