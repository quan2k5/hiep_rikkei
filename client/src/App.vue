<template>
  <div>
    <!-- <LoginUser/> -->
    <!-- <LoginAdmin /> -->
     <!-- <AdminDashboard/> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import LoginUser from "./views/auth/LoginUser.vue";
import LoginAdmin from "./views/auth/LoginAdmin.vue";
import AdminDashboard from "./views/admin/AdminDashboard.vue";
const router = useRouter();
</script>

<style>
</style>