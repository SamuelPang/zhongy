<template>
  <footer class="footer">
    <div class="meander-line"></div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>中医知识库</h4>
          <p>循序研习中医典籍</p>
          <p>阴阳五行 · 藏象经络 · 辨证论治</p>
        </div>
        <div class="footer-section">
          <h4>相关链接</h4>
          <a href="https://github.com/SamuelPang/zhongy" target="_blank">GitHub</a>
        </div>
        <div class="footer-section">
          <h4>版本信息</h4>
          <p>v1.0.0</p>
          <p>岁在丙午 · 仲秋</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 中医知识库。仅供学习参考，不作为专业医疗建议。</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #262320;
  color: #a8a194;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
  position: relative;
}

.meander-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-image: repeating-linear-gradient(
    90deg,
    #b08d57 0 8px,
    transparent 8px 16px
  );
  opacity: 0.6;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: #efe6d0;
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  margin-bottom: 0.75rem;
}

.footer-section p {
  font-size: 0.875rem;
  margin: 0.25rem 0;
}

.footer-section a {
  color: #a8a194;
  text-decoration: none;
  font-size: 0.875rem;
}

.footer-section a:hover {
  color: #e5d8bc;
}

.footer-bottom {
  border-top: 1px solid #4d4941;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
}
</style>
