<!-- LoginForm.vue -->
<template>
  <div class="form-container">
    <form @submit.prevent="login" class="form">
      <h2>Login</h2>
      <label for="username">Nama Pengguna:</label>
      <input v-model="username" type="text" id="username" required>

      <label for="password">Kata Sandi:</label>
      <input v-model="password" type="password" id="password" required>

      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const user = this.$root.registeredUsers.find(
        (u) => u.username === this.username && u.password === this.password
      );

      if (user) {
        this.$root.isLoggedIn = true;
        alert('Login berhasil!');
        this.$router.push('/home');
      } else {
        alert('Login gagal. Cek kembali nama pengguna dan kata sandi.');
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #f8f8f863;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

label {
  display: block;
  margin: 10px 0;
  font-weight: bold;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.btn {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2980b9;
}
</style>

