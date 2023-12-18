<!-- HomePage.vue -->
<template>
  <div>
    <h2>Selamat Datang di Toko Online</h2>
    <ListBarang />
  </div>
</template>

<script>
import ListBarang from './ListBarang.vue';

export default {
  components: {
    ListBarang,
  },
  async beforeRouteEnter(to, from, next) {
    const isLoggedIn = await isUserLoggedIn();
    if (!isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  },
};


async function isUserLoggedIn() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return true; 
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 2px solid #8b4513; 
  border-radius: 8px;
}

.welcome-message {
  color: #8b4513;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>