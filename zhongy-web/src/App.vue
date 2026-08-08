<template>
  <div class="app-container">
    <Header />
    <main class="main-content">
      <Sidebar />
      <div class="content-wrapper">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
import Footer from './components/layout/Footer.vue'
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
}

.content-wrapper {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
