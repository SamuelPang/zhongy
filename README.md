# 中医知识库

> 基于 24 篇中医经典自学文档的交互式学习平台

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deploy](https://github.com/SamuelPang/zhongy/actions/workflows/deploy.yml/badge.svg)](https://github.com/SamuelPang/zhongy/actions/workflows/deploy.yml)

## 📖 项目简介

本项目将 24 篇中医经典自学 Markdown 文档转化为交互式单页应用（SPA）学习平台，涵盖哲学基础、理论基础、诊断方法、治疗原则、临床实践、经典文献、养生保健、现代发展 8 大专题。

### 核心功能

- **8 大专题**：系统化中医知识体系（哲学 / 理论 / 诊断 / 治则 / 临床 / 经典 / 养生 / 现代）
- **SVG 可视化**：太极阴阳图、五行生克图、八主题知识图谱等交互图表
- **文档浏览**：Markdown 文档结构化阅读，支持前后篇导航
- **学习进度**：本地存储学习进度与书签
- **中国风设计**：宣纸底色、朱砂印章、楷体标题、回纹装饰
- **响应式布局**：适配桌面与移动端

## 📂 仓库结构

```
zhongy/
├── 中医自学文档群/          # 24 篇中医 Markdown 源文档
│   ├── 01-哲学基础/         # 周易、医易同源
│   ├── 02-理论基础/         # 阴阳五行、藏象、经络
│   ├── 03-诊断方法/         # 四诊、辨证
│   ├── 04-治疗基础/         # 中药、方剂、食疗、外治
│   ├── 05-临床应用/         # 常见病、养生、体质
│   ├── 06-经典研读/         # 内经、伤寒、金匮、本草
│   └── 附录/                # 学习路线图、术语表、推荐书目
│
├── zhongy-web/              # Vue 3 前端应用
│   ├── src/
│   │   ├── views/           # 页面组件
│   │   ├── components/      # 布局 / SVG 可视化 / 文档组件
│   │   ├── data/            # 专题与文档数据
│   │   ├── router/          # 路由配置
│   │   ├── stores/          # 状态管理（进度、书签）
│   │   └── assets/          # 全局风格（中国风主题）
│   └── package.json
│
├── .github/
│   ├── workflows/           # CI/CD（提交即部署 GitHub Pages）
│   └── ISSUE_TEMPLATE/      # Bug / 功能模板
├── CONTRIBUTING.md          # 贡献指南
├── CODE_OF_CONDUCT.md       # 行为准则
├── DEVELOPMENT.md           # 开发指导文档
└── LICENSE                  # MIT 协议
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18（推荐 20）
- npm >= 9

### 安装与运行

```bash
# 1. 安装依赖
cd zhongy-web
npm ci

# 2. 开发模式（http://localhost:3000）
npm run dev

# 3. 构建生产版本
npm run build

# 4. 预览生产版本
npm run preview
```

clone 仓库后执行 `npm ci && npm run dev` 即可直接运行。

## 🚀 部署

采用 GitHub Actions **提交即部署** 工作流（`.github/workflows/deploy.yml`）：

- 推送至 `main` 分支自动触发构建并部署到 **GitHub Pages**
- 支持 `workflow_dispatch` 手动触发
- 构建产物位于 `https://<owner>.github.io/zhongy/`

首次启用需在仓库 **Settings → Pages** 中将 Source 选择为 **GitHub Actions**。

## 🛠️ 技术栈

### 前端

| 领域 | 技术 |
|------|------|
| 框架 | Vue 3（Composition API） |
| 构建 | Vite 5 |
| 路由 | Vue Router 4 |
| 状态 | Pinia |
| 样式 | Tailwind CSS 3 + 自定义中国风主题 |
| 动画 | GSAP |
| Markdown | marked |

### 工程

- CI/CD：GitHub Actions
- 开源协议：MIT

## 📚 内容体系

| 专题 | 主题 | 文档数 |
|------|------|--------|
| 哲学篇 | 阴阳五行、哲学基础 | 4 |
| 理论篇 | 藏象经络、核心理论 | 6 |
| 诊断篇 | 四诊合参、辨证论治 | 4 |
| 治则篇 | 治法方药、治疗原则 | 4 |
| 临床篇 | 常见病证、体质养生 | 3 |
| 经典篇 | 四大经典、源流传承 | 4 |
| 养生篇 | 防病保健（建设中） | - |
| 现代篇 | 中西医结合（建设中） | - |

## 🤝 贡献指南

欢迎贡献代码与内容！请阅读：

- [贡献指南](CONTRIBUTING.md) — 开发流程、分支与提交规范
- [行为准则](CODE_OF_CONDUCT.md) — 社区行为规范
- [开发指导](DEVELOPMENT.md) — 项目架构与开发细节
- [Issue 模板](.github/ISSUE_TEMPLATE/) — 提交 Bug 或功能请求

### 快速贡献

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m "feat: 添加新功能"`
4. 推送分支：`git push origin feature/your-feature`
5. 发起 Pull Request（合并前需通过 CI）

## 📄 许可证

本项目采用 [MIT 协议](LICENSE)

---

<div align="center">

**博极医源 · 精勤不倦**

⭐ 如果这个项目对你有帮助，欢迎 Star 支持！

</div>
