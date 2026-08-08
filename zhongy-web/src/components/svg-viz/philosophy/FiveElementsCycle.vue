<template>
  <div class="five-elements-cycle">
    <svg viewBox="0 0 600 600" class="viz-svg">
      <!-- 相生连线（顺时针） -->
      <path
        v-for="(conn, i) in shengConnections"
        :key="'sheng-' + i"
        :d="conn.path"
        :stroke="hoveredElement === conn.from || hoveredElement === conn.to ? '#58755c' : '#a8c0a0'"
        stroke-width="3"
        fill="none"
        marker-end="url(#arrow-green)"
        class="connection"
      />
      
      <!-- 相克连线（星形） -->
      <path
        v-for="(conn, i) in keConnections"
        :key="'ke-' + i"
        :d="conn.path"
        :stroke="hoveredElement === conn.from || hoveredElement === conn.to ? '#8f2b24' : '#d3a09a'"
        stroke-width="2"
        fill="none"
        stroke-dasharray="5,5"
        marker-end="url(#arrow-red)"
        class="connection"
      />
      
      <!-- 五行节点 -->
      <g
        v-for="element in elements"
        :key="element.name"
        class="element-node"
        :class="{ active: hoveredElement === element.name }"
        @mouseenter="hoveredElement = element.name"
        @mouseleave="hoveredElement = null"
      >
        <circle
          :cx="element.x"
          :cy="element.y"
          r="55"
          :fill="element.color"
          class="element-circle"
        />
        <circle
          :cx="element.x"
          :cy="element.y"
          r="55"
          fill="none"
          stroke="#d3a09a"
          stroke-width="1"
          opacity="0.5"
        />
        <text
          :x="element.x"
          :y="element.y + 5"
          text-anchor="middle"
          :fill="element.textColor"
          font-size="32"
          font-family="Kaiti SC, STKaiti, KaiTi, serif"
          font-weight="bold"
        >{{ element.name }}</text>
      </g>
      
      <!-- 箭头定义 -->
      <defs>
        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#58755c" />
        </marker>
        <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#8f2b24" />
        </marker>
      </defs>
    </svg>
    
    <!-- 信息面板 -->
    <div v-if="hoveredElement" class="info-panel" :style="infoPanelStyle">
      <h4>{{ getElementInfo(hoveredElement).name }}行</h4>
      <p><strong>特性：</strong>{{ getElementInfo(hoveredElement).property }}</p>
      <p><strong>对应脏腑：</strong>{{ getElementInfo(hoveredElement).organs }}</p>
      <p><strong>相生：</strong>{{ getElementInfo(hoveredElement).sheng }}</p>
      <p><strong>相克：</strong>{{ getElementInfo(hoveredElement).ke }}</p>
    </div>
    
    <div class="legend">
      <div class="legend-item">
        <span class="legend-color green"></span>
        <span>相生（生我、我生）</span>
      </div>
      <div class="legend-item">
        <span class="legend-color red"></span>
        <span>相克（克我、我克）</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

const hoveredElement = ref(null)

const elements = [
  { name: '木', x: 300, y: 100, color: '#5a8f5c', textColor: '#faf6ec', property: '曲直', organs: '肝、胆' },
  { name: '火', x: 500, y: 250, color: '#a8322a', textColor: '#faf6ec', property: '炎上', organs: '心、小肠' },
  { name: '土', x: 300, y: 400, color: '#a8842c', textColor: '#faf6ec', property: '稼穑', organs: '脾、胃' },
  { name: '金', x: 100, y: 250, color: '#dcd5c4', textColor: '#33302b', property: '从革', organs: '肺、大肠' },
  { name: '水', x: 300, y: 250, color: '#33302b', textColor: '#faf6ec', property: '润下', organs: '肾、膀胱' }
]

const shengConnections = [
  { from: '木', to: '火', path: 'M300,155 Q400,180 450,250' },
  { from: '火', to: '土', path: 'M450,300 Q350,350 300,350' },
  { from: '土', to: '金', path: 'M300,350 Q150,300 150,250' },
  { from: '金', to: '水', path: 'M150,250 Q200,150 250,100' },
  { from: '水', to: '木', path: 'M300,100 L300,155' }
]

const keConnections = [
  { from: '木', to: '土', path: 'M320,120 L280,380' },
  { from: '土', to: '水', path: 'M280,380 L320,200' },
  { from: '水', to: '火', path: 'M320,200 L480,230' },
  { from: '火', to: '金', path: 'M480,270 L120,270' },
  { from: '金', to: '木', path: 'M120,230 L280,100' }
]

const getElementInfo = (name) => elements.find(e => e.name === name) || {}

const infoPanelStyle = computed(() => {
  if (!hoveredElement.value) return {}
  const el = elements.find(e => e.name === hoveredElement.value)
  return {
    left: `${el.x}px`,
    top: `${el.y + 70}px`
  }
})

onMounted(() => {
  gsap.from('.element-node', {
    duration: 0.8,
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    ease: 'back.out(1.7)'
  })
  
  gsap.from('.connection', {
    duration: 0.6,
    opacity: 0,
    strokeDasharray: '100',
    strokeDashoffset: '100',
    stagger: 0.1,
    delay: 0.5,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.five-elements-cycle {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.viz-svg {
  width: 100%;
  max-width: 600px;
  height: auto;
}

.element-node {
  cursor: pointer;
  transition: all 0.3s;
}

.element-circle {
  transition: all 0.3s;
}

.element-node:hover .element-circle {
  filter: brightness(1.12);
  stroke: #faf6ec;
  stroke-width: 3;
}

.connection {
  transition: all 0.3s;
}

.info-panel {
  position: absolute;
  background: #fbf8f1;
  border: 1px solid #e5d8bc;
  padding: 1rem 1.25rem;
  border-radius: 3px;
  box-shadow: 0 4px 20px rgba(51, 48, 43, 0.15);
  max-width: 220px;
  z-index: 10;
  transform: translateX(-50%);
}

.info-panel h4 {
  margin-bottom: 0.5rem;
  color: #262320;
  font-size: 1.1rem;
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', serif;
  letter-spacing: 0.2em;
}

.info-panel p {
  font-size: 0.8rem;
  color: #4d4941;
  margin: 0.25rem 0;
}

.info-panel strong {
  color: #262320;
}

.legend {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #4d4941;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 2px;
}

.legend-color.green {
  background: #58755c;
}

.legend-color.red {
  background: #8f2b24;
}
</style>
