import LoginAdmin from "@/views/auth/LoginAdmin.vue";
import LoginUser from "@/views/auth/LoginUser.vue";
import RegisterUser from "@/views/auth/RegisterUser.vue";

const authRoutes = [
  {
    path: "/login",
    name: "login",
    component: LoginUser,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterUser,
  },
  {
    path: "/login/admin",
    name: "login-admin",
    component: LoginAdmin,
  },
];
export default authRoutes;
