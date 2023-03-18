// 1.Dependency
import { createRouter, createWebHistory } from "vue-router";

// 2.Components
const Index = () => import("../views/Index.vue");

// 3.Routes
const routes = [{ path: "/", component: Index }];

// 4.Build An Instance
const router = createRouter({
    history: createWebHistory('/base/'), //history api
    // base : '/base',
    routes,
});

export default router;
