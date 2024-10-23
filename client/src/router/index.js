import { createRouter, createWebHistory } from "vue-router";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import adminRoutes from "./adminRoutes";

// sử dụng toán tử Spread Operator để bảo lưu các phần tử route  
const routes = [...userRoutes,...authRoutes,...adminRoutes];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router



