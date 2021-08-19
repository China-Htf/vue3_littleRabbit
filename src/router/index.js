import { createRouter, createWebHashHistory } from "vue-router";

// 路由规则
const routes = [];

// createRouter({}) 创建路由实例
const router = createRouter({
  // createWebHashHistory() 使用 hash 的路由模式
  history: createWebHashHistory(),
  routes,
});

export default router;
