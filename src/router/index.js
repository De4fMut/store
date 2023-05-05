import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/views/Home.vue"

const routes = [
    {
        path: "/",
        name: "main",
        component: () => import("@/layouts/Main.vue"),
    },
    {
        path: "/account",
        name: "account",
        component: () => import("@/views/Account.vue"),
    },
    {
        path: "/addresses",
        name: "addresses",
        component: () => import("@/views/Addresses.vue"),
    },
    {
        path: "/addresses1",
        name: "addresses1",
        component: () => import("@/views/addresses1.vue"),
    },
    {
        path: "/analytics",
        name: "analytics",
        component: () => import("@/views/Analytics.vue"),
    },
    {
        path: "/carriers",
        name: "carriers",
        component: () => import("@/views/Carriers.vue"),
    },
    {
        path: "/goods",
        name: "goods",
        component: () => import("@/views/Goods.vue"),
    },
    {
        path: "/logistic",
        name: "logistic",
        component: () => import("@/views/Logistic.vue"),
    },
    {
        path: "/privateConfig",
        name: "privateConfig",
        component: () => import("@/views/PrivateConfig.vue"),
    },
    {
        path: "/storehouseInfo",
        name: "storehouseInfo",
        component: () => import("@/views/StorehouseInfo.vue"),
    },
    {
        path: "/tasks",
        name: "tasks",
        component: () => import("@/views/Tasks.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
