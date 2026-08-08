# 贡献指南

感谢你对本项目的关注！欢迎提交 Issue 和 Pull Request。

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 开发流程

1. Fork 本仓库
2. Clone 到本地
   ```bash
   git clone https://github.com/your-username/zhongy.git
   cd zhongy
   ```
3. 安装依赖
   ```bash
   npm install
   ```
4. 创建新分支
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. 开发并测试
   ```bash
   npm run dev
   ```
6. 提交代码
   ```bash
   git commit -m "feat: add your feature"
   ```
7. 推送到远程
   ```bash
   git push origin feature/your-feature-name
   ```
8. 在 GitHub 上发起 Pull Request

## 分支命名规范

- `feature/xxx` - 新功能
- `bugfix/xxx` - 修复 Bug
- `docs/xxx` - 文档更新
- `chore/xxx` - 其他改动

## Commit 规范

使用约定式提交（Conventional Commits）：

- `feat:` - 新功能
- `fix:` - Bug 修复
- `docs:` - 文档更新
- `style:` - 代码格式
- `refactor:` - 重构
- `test:` - 测试
- `chore:` - 构建/工具

示例：
```bash
git commit -m "feat: 添加阴阳图可视化组件"
git commit -m "fix: 修复五行图渲染异常"
```

## Issue 模板

- **Bug 报告**：描述问题、复现步骤、期望行为
- **功能请求**：说明需求背景、使用场景
- **讨论**：使用 Discussions 进行一般性讨论

## 代码规范

- 使用 ESLint / Prettier 保持代码风格一致
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case
- 添加必要的注释

## PR 审查

PR 需要满足以下条件才能合并：

- [ ] 代码通过 CI 检查
- [ ] 至少 1 个 Maintainer Review
- [ ] 描述清晰，说明改动内容和原因
- [ ] 相关 Issue 已关联（如 `Closes #123`）

## 行为准则

请保持友好和尊重，营造开放的社区氛围。

## 问题？

如有问题，请创建 Issue 或联系维护者。

再次感谢你的贡献！
