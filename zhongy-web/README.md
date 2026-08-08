# 中医知识库前端 (zhongy-web)

基于 24 篇中医 Markdown 文档构建的交互式 SPA 学习网站，中国风界面设计。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 快速开始

### 环境要求

- Node.js >= 18（推荐 20）
- npm >= 9

### 安装依赖

```bash
npm ci
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
zhongy-web/
├── src/
│   ├── views/              # 页面组件
│   │   └── topics/         # 8 大专题页面
│   ├── components/         # 组件
│   │   ├── layout/         # 布局组件
│   │   ├── svg-viz/        # SVG 可视化组件
│   │   └── document/       # 文档组件
│   ├── data/               # 专题与文档数据
│   ├── router/             # 路由配置
│   ├── stores/             # 状态管理
│   └── assets/styles/      # 中国风全局主题
├── index.html
└── package.json
```

## 🎯 功能特性

- **8 大专题**：哲学、理论、诊断、治则、临床、经典、养生、现代
- **SVG 可视化**：太极阴阳图、五行生克图、八主题知识图谱
- **文档浏览**：Markdown 文档分页展示与导航
- **学习进度**：本地存储学习进度和书签
- **中国风主题**：宣纸底色、朱砂印章、楷体标题、回纹装饰
- **响应式设计**：适配桌面和移动端

## 🛠️ 技术栈

- Vue 3（Composition API）
- Vite 5
- Vue Router 4
- Pinia
- Tailwind CSS 3
- GSAP
- marked

## 📝 开发指南

详见 [DEVELOPMENT.md](../DEVELOPMENT.md)

## 📄 许可证

[MIT](../LICENSE)
