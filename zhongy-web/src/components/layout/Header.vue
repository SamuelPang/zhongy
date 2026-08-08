<template>
  <header class="header">
    <div class="meander-line"></div>
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <span class="seal">中</span>
          <span class="logo-text">中医知识库</span>
        </router-link>
        
        <nav class="header-nav">
          <router-link to="/" class="nav-link">首页</router-link>
          <a href="https://github.com/SamuelPang/zhongy" target="_blank" class="nav-link">
            GitHub
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background: #fbf8f1;
  border-bottom: 1px solid #e5d8bc;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.meander-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-image: repeating-linear-gradient(
    90deg,
    #a8322a 0 8px,
    transparent 8px 16px
  );
  opacity: 0.5;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #33302b;
}

.seal {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.35rem;
}

.logo-text {
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.2em;
}

.header-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif;
  font-size: 1.05rem;
  letter-spacing: 0.15em;
  color: #4d4941;
  text-decoration: none;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: #a8322a;
  border-bottom-color: #a8322a;
}

.nav-link.router-link-active {
  color: #a8322a;
  border-bottom-color: #a8322a;
}
</style>
