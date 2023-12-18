import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';


import Home from './components/HomePage.vue';
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';


const app = createApp(App);


app.config.globalProperties.registeredUsers = [];
app.config.globalProperties.isLoggedIn = false;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: LoginForm },
    { path: '/register', component: RegisterForm },
  
  ],
});

app.use(router);

app.mount('#app');
