import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },

   // Add the new route
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
