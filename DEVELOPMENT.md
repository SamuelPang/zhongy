# 中医知识网站 - 开发指导文档

> 基于现有 24 篇中医 Markdown 文档，构建交互式 SPA 学习网站

---

## 📋 项目概述

### 目标
将中医文档知识库转化为可视化的交互式单页应用（SPA），部署于 GitHub Pages。

### 核心特性
- **8 大专题**：按内容主题划分，非文档目录
- **SVG 可视化**：自定义 SVG 动画，专业、准确、交互简洁
- **文档集成**：Markdown 文档分页浏览
- **学习进度**：本地存储学习进度和书签

---

## 🏗️ 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| **框架** | Vue 3 + Vite | 轻量、高性能 |
| **路由** | Vue Router 4 | 页面导航 |
| **状态管理** | Pinia | 学习进度、书签 |
| **Markdown** | marked + highlight.js | 解析和代码高亮 |
| **可视化** | GSAP + 自定义 SVG | 流畅动画 |
| **样式** | Tailwind CSS | 快速开发响应式 UI |
| **部署** | GitHub Actions | 自动部署到 GitHub Pages |

---

## 📁 项目结构

```
zhongy-web/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── DEVELOPMENT.md              # 本文件
│
├── public/
│   └── docs/                   # Markdown 源文件
│
├── src/
│   ├── main.js
│   ├── App.vue
│   │
│   ├── router/
│   │   └── index.js
│   │
│   ├── stores/
│   │   └── app.js
│   │
│   ├── data/
│   │   ├── topics.js           # 8 大专题配置
│   │   ├── documents.js        # 24 篇文档数据
│   │   └── knowledge-map.js    # 知识关联数据
│   │
│   ├── views/
│   │   ├── Home.vue            # 首页
│   │   └── topics/
│   │       ├── Philosophy.vue  # 哲学篇
│   │       ├── Theory.vue      # 理论篇
│   │       ├── Diagnosis.vue   # 诊断篇
│   │       ├── Treatment.vue   # 治则篇
│   │       ├── Clinical.vue    # 临床篇
│   │       ├── Classics.vue    # 经典篇
│   │       ├── Wellness.vue    # 养生篇（预留）
│   │       └── Modern.vue      # 现代篇（预留）
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.vue
│   │   │   ├── Sidebar.vue
│   │   │   └── Footer.vue
│   │   │
│   │   ├── svg-viz/            # SVG 可视化组件
│   │   │   ├── home/
│   │   │   │   ├── EightTopics.vue
│   │   │   │   └── LearningPath.vue
│   │   │   ├── philosophy/
│   │   │   │   ├── YinYangChart.vue
│   │   │   │   ├── FiveElementsCycle.vue
│   │   │   │   └── QiMechanism.vue
│   │   │   ├── theory/
│   │   │   │   ├── OrganSystem.vue
│   │   │   │   ├── MeridianChart.vue
│   │   │   │   ├── QiBloodFlow.vue
│   │   │   │   └── SixMeridians.vue
│   │   │   ├── diagnosis/
│   │   │   │   ├── FourExams.vue
│   │   │   │   ├── EightPrinciples.vue
│   │   │   │   └── DiagnosticTree.vue
│   │   │   ├── treatment/
│   │   │   │   ├── TherapyTree.vue
│   │   │   │   ├── FormulaPairing.vue
│   │   │   │   └── AcupointMap.vue
│   │   │   └── clinical/
│   │   │       ├── ConstitutionMap.vue
│   │   │       └── DiseaseTherapy.vue
│   │   │
│   │   └── document/
│   │       ├── DocumentViewer.vue
│   │       ├── DocList.vue
│   │       └── DocNavigation.vue
│   │
│   └── assets/
│       ├── styles/
│       │   └── main.css
│       └── images/
│
└── dist/
```

---

## 🎯 专题划分

| 专题 | 路由 | 对应文档 | 核心 SVG 组件 |
|------|------|---------|-------------|
| **哲学篇** | `/topic/philosophy` | 01-02, 04-05 | 阴阳图、五行图、气机图 |
| **理论篇** | `/topic/theory` | 03, 06-09, 24 | 脏腑图、经络图、气血图、六经图 |
| **诊断篇** | `/topic/diagnosis` | 10-13 | 四诊图、八纲矩阵、辨证树 |
| **治则篇** | `/topic/treatment` | 14-17 | 治法树、方剂图、穴位图 |
| **临床篇** | `/topic/clinical` | 18-20 | 体质图、病症治法图 |
| **经典篇** | `/topic/classics` | 21-24 | 经典知识树、六经图、药性图 |
| **养生篇** | `/topic/wellness` | 预留 | 四季养生图、穴位保健图 |
| **现代篇** | `/topic/modern` | 预留 | 中西对比图、案例流程图 |

---

## 📚 文档映射

| 编号 | 标题 | 所属专题 | 难度 |
|------|------|---------|------|
| 01 | 源流概述 | 哲学篇 | ⭐ |
| 02 | 医易同源 | 哲学篇 | ⭐⭐⭐ |
| 03 | 中医系统论 | 理论篇 | ⭐⭐ |
| 04 | 阴阳学说 | 哲学篇 | ⭐⭐ |
| 05 | 五行学说 | 哲学篇 | ⭐⭐⭐ |
| 06 | 藏象学说 | 理论篇 | ⭐⭐⭐ |
| 07 | 气血津液 | 理论篇 | ⭐⭐ |
| 08 | 经络学说 | 理论篇 | ⭐⭐⭐⭐ |
| 09 | 病因病机 | 理论篇 | ⭐⭐⭐ |
| 10 | 望诊 | 诊断篇 | ⭐⭐ |
| 11 | 闻诊 | 诊断篇 | ⭐⭐ |
| 12 | 问诊 | 诊断篇 | ⭐⭐ |
| 13 | 切诊 | 诊断篇 | ⭐⭐⭐ |
| 14 | 中药学概论 | 治则篇 | ⭐⭐⭐ |
| 15 | 方剂学概论 | 治则篇 | ⭐⭐⭐ |
| 16 | 食疗养生 | 治则篇 | ⭐⭐ |
| 17 | 针灸推拿 | 治则篇 | ⭐⭐⭐⭐ |
| 18 | 常见病证 | 临床篇 | ⭐⭐ |
| 19 | 四季养生 | 临床篇 | ⭐⭐ |
| 20 | 体质辨识 | 临床篇 | ⭐⭐⭐ |
| 21 | 黄帝内经 | 经典篇 | ⭐⭐⭐ |
| 22 | 伤寒论 | 经典篇 | ⭐⭐⭐⭐ |
| 23 | 金匮要略 | 经典篇 | ⭐⭐⭐ |
| 24 | 神农本草经 | 经典篇 | ⭐⭐⭐ |

---

## 🎨 SVG 可视化设计规范

### 设计原则

1. **专业性优先**：经络图、脏腑图需符合中医经典
2. **简洁交互**：鼠标悬停高亮、点击展开详情
3. **动画流畅**：使用 GSAP 实现淡入、缩放、连线动画
4. **响应式**：适配桌面和移动端

### 核心组件规范

#### 1. 阴阳太极图 (`YinYangChart.vue`)

```svg
<svg viewBox="0 0 400 400">
  <!-- 太极外圆 -->
  <circle cx="200" cy="200" r="180" />
  
  <!-- 阴阳鱼 -->
  <path d="M200,20 A180,180 0 1,1 200,380 A90,90 0 1,0 200,200 A90,90 0 1,1 200,20" />
  
  <!-- 阴中阳点 -->
  <circle cx="200" cy="290" r="20" fill="white" />
  
  <!-- 阳中阴点 -->
  <circle cx="200" cy="110" r="20" fill="black" />
  
  <!-- 交互区域 -->
  <g class="interactive" data-element="yin">
    <text x="200" y="320">阴</text>
  </g>
  <g class="interactive" data-element="yang">
    <text x="200" y="80">阳</text>
  </g>
</svg>
```

**交互功能**：
- 悬停：高亮对应区域，显示 tooltip
- 点击：展开阴阳关系详解

#### 2. 五行生克图 (`FiveElementsCycle.vue`)

```svg
<svg viewBox="0 0 600 600">
  <!-- 五行节点 -->
  <g class="element" data-element="wood">
    <circle cx="300" cy="100" r="50" />
    <text x="300" y="105">木</text>
  </g>
  <g class="element" data-element="fire">
    <circle cx="500" cy="250" r="50" />
    <text x="500" y="255">火</text>
  </g>
  <g class="element" data-element="earth">
    <circle cx="300" cy="400" r="50" />
    <text x="300" y="405">土</text>
  </g>
  <g class="element" data-element="metal">
    <circle cx="100" cy="250" r="50" />
    <text x="100" y="255">金</text>
  </g>
  <g class="element" data-element="water">
    <circle cx="300" cy="250" r="50" />
    <text x="300" y="255">水</text>
  </g>
  
  <!-- 生克连线 -->
  <!-- 相生（顺时针） -->
  <path class="sheng" d="M300,150 Q400,200 450,250" />
  <path class="sheng" d="M450,300 Q350,350 300,350" />
  <path class="sheng" d="M300,350 Q150,300 150,250" />
  <path class="sheng" d="M150,250 Q200,150 250,100" />
  
  <!-- 相克（星形） -->
  <path class="ke" d="M300,120 L300,350" />
  <path class="ke" d="M480,270 L120,270" />
  <path class="ke" d="M320,120 L120,230" />
  <path class="ke" d="M480,230 L280,380" />
  <path class="ke" d="M120,270 L480,270" />
</svg>
```

**交互功能**：
- 悬停节点：高亮对应五行，显示属性、对应脏腑
- 悬停连线：高亮生克关系，显示"木生火"等说明

#### 3. 人体经络图 (`MeridianChart.vue`)

**精度要求**：
- 12 正经 + 任督二脉
- 常用穴位 300+
- 多视角：正面、背面、侧面
- 男女区分：女性胸部穴位特殊标注
- 老幼比例：提供缩放说明

**穴位标注规范**：
```svg
<g class="acupoint" data-id="ST36" data-meridian="足阳明胃经">
  <circle cx="300" cy="500" r="5" class="point" />
  <text x="310" y="505">足三里 ST36</text>
</g>
```

**穴位信息卡片**（点击/悬停）：
```
┌─────────────────────────────┐
│  足三里 ST36                │
│  ─────────────────────────  │
│  归经：足阳明胃经           │
│  位置：犊鼻下 3 寸，胫骨前嵴外 1 寸│
│  主治：脾胃病、下肢痿痹     │
│  操作：直刺 1-2 寸           │
└─────────────────────────────┘
```

---

## 🚀 开发流程

### 阶段一：基础框架（1-2 天）

1. 初始化 Vue 3 + Vite 项目
2. 配置 Vue Router、Pinia
3. 集成 Tailwind CSS
4. 集成 marked + highlight.js
5. 创建基础布局组件

### 阶段二：专题页面骨架（2-3 天）

1. 创建 8 个专题页面组件
2. 编写文档解析脚本
3. 实现文档列表和详情页
4. 实现专题间导航

### 阶段三：SVG 可视化（5-7 天）⭐核心

1. 首页 8 专题入口（环形 SVG）
2. 哲学篇：阴阳图、五行图
3. 理论篇：脏腑图、经络图（重点）
4. 诊断篇：四诊图、八纲矩阵
5. 治则篇：治法树、穴位图
6. 临床篇：体质图
7. 添加 GSAP 动画

### 阶段四：交互优化（2-3 天）

1. SVG 节点点击交互
2. 搜索功能
3. 学习进度记录
4. 响应式设计

### 阶段五：部署（1 天）

1. GitHub Actions 配置
2. 性能优化
3. 测试

---

## 📝 编码规范

### Vue 组件规范

```vue
<template>
  <div class="component-name">
    <!-- 内容 -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props
const props = defineProps({
  title: String
})

// Emits
const emit = defineEmits(['click'])

// State
const state = ref({})

// Methods
const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.component-name {
  /* 样式 */
}
</style>
```

### SVG 组件规范

```vue
<template>
  <svg class="viz-chart" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <!-- SVG 内容 -->
  </svg>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  data: Object
})

onMounted(() => {
  // 初始化动画
  gsap.from('.element', {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    stagger: 0.2
  })
})
</script>

<style scoped>
.viz-chart {
  width: 100%;
  height: auto;
}

.element {
  cursor: pointer;
  transition: all 0.3s ease;
}

.element:hover {
  fill: #3b82f6;
}
</style>
```

### 数据文件规范

```javascript
// data/topics.js
export const topics = {
  philosophy: {
    id: 'philosophy',
    title: '哲学篇',
    subtitle: '阴阳五行，哲学基础',
    icon: '📚',
    color: '#3b82f6',
    documents: ['01', '02', '04', '05'],
    viz: {
      primary: 'YinYangChart',
      secondary: ['FiveElementsCycle', 'QiMechanism']
    },
    description: '中医理论的哲学基础，包括阴阳学说、五行学说等'
  },
  // ... 其他专题
}
```

---

## 🧪 测试清单

### 功能测试
- [ ] 专题导航正常
- [ ] 文档浏览正常
- [ ] SVG 可视化渲染正常
- [ ] SVG 交互功能正常
- [ ] 搜索功能正常
- [ ] 学习进度保存正常

### 兼容性测试
- [ ] Chrome 最新版
- [ ] Firefox 最新版
- [ ] Safari 最新版
- [ ] Edge 最新版
- [ ] 移动端浏览器

### 性能测试
- [ ] 首屏加载 < 3s
- [ ] SVG 动画流畅（60fps）
- [ ] 内存占用合理

---

## 📦 部署配置

### GitHub Pages 配置

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📖 参考资料

### 中医经典
- 《黄帝内经》
- 《伤寒论》
- 《金匮要略》
- 《神农本草经》

### 技术文档
- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [GSAP 文档](https://greensock.com/docs/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

### 穴位参考
- 《针灸甲乙经》
- 国家标准《腧穴名称与定位》(GB/T 12346-2006)

---

## 📞 联系方式

项目维护者：[你的姓名]  
问题反馈：[GitHub Issues](https://github.com/your-repo/issues)

---

**版本**: 1.0  
**最后更新**: 2026 年 8 月
