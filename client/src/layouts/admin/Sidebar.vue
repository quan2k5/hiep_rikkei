<template>
  <menu class="flex flex-col min-h-screen w-64 bg-gray-900 text-white overflow-y-auto  p-6">
    <h1 class="text-2xl font-bold mb-6">Admin</h1>
    <ul class="space-y-4">
      <li>
        <div
          @click="dashboardAdmin"
          :class="{
            'bg-gray-700 text-blue-400': isActive('/admin/dashboard'),
            'hover:text-blue-400': !isActive('/admin/dashboard')
          }"
          class="cursor-pointer flex items-center p-2 rounded"
        >
          <i class="fa fa-dashboard mr-2"></i>Dashboard
        </div>
      </li>
      <li>
        <div
          @click="userAdmin"
          :class="{
            'bg-gray-700 text-blue-400': isActive('/admin/user'),
            'hover:text-blue-400': !isActive('/admin/user')
          }"
          class="cursor-pointer flex items-center p-2 rounded"
        >
          <i class="fa fa-users mr-2"></i>Users
        </div>
      </li>
      <li>
        <div
          @click="categoriesAdmin"
          :class="{
            'bg-gray-700 text-blue-400': isActive('/admin/categories'),
            'hover:text-blue-400': !isActive('/admin/categories')
          }"
          class="cursor-pointer flex items-center p-2 rounded"
        >
          <i class="fa fa-calendar mr-2"></i>Categories
        </div>
      </li>
      <li>
        <div
          @click="productAdmin"
          :class="{
            'bg-gray-700 text-blue-400': isActive('/admin/product'),
            'hover:text-blue-400': !isActive('/admin/product')
          }"
          class="cursor-pointer flex items-center p-2 rounded"
        >
          <i class="fa fa-archive mr-2"></i>Product
        </div>
      </li>
      <li>
        <div
          @click="messageAdmin"
          :class="{
            'bg-gray-700 text-blue-400': isActive('/admin/message'),
            'hover:text-blue-400': !isActive('/admin/message')
          }"
          class="cursor-pointer flex items-center p-2 rounded"
        >
          <i class="fa fa-envelope mr-2"></i>Email
        </div>
      </li>
      <li>
        <div
          @click="uiAdmin"
          :class="{
            'bg-gray-700 text-blue-400': isActive('/admin/ui'),
            'hover:text-blue-400': !isActive('/admin/ui')
          }"
          class="cursor-pointer flex items-center p-2 rounded"
        >
          <i class="fa fa-eye mr-2"></i>UI
        </div>
      </li>
      <li>
        <div
          @click="profileAdmin"
          :class="{
            'bg-gray-700 text-blue-400': isActive('/admin/profile'),
            'hover:text-blue-400': !isActive('/admin/profile')
          }"
          class="cursor-pointer flex items-center p-2 rounded"
        >
          <i class="fa fa-user mr-2"></i>Profile
        </div>
      </li>
      <li>
        <div
          @click="logout"
          :class="{
            'bg-gray-700 text-blue-400': isActive('/login/admin'),
            'hover:text-blue-400': !isActive('/login/admin')
          }"
          class="cursor-pointer flex items-center p-2 rounded"
        >
          <i class="fa fa-sign-in mr-2"></i>Logout
        </div>
      </li>
    </ul>
  </menu>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isActive = (path) => route.path === path;

const logout = () => {
  localStorage.removeItem('admin');  
  router.push('/login/admin');  
};

const dashboardAdmin = () => {
  router.push('/admin/dashboard');
};

const userAdmin = () => {
  router.push('/admin/user');
};

const categoriesAdmin = () => {
  router.push('/admin/categories');
};

const productAdmin = () => {
  router.push('/admin/product');
};

const messageAdmin = () => {
  router.push('/admin/message');
};

const uiAdmin = () => {
  router.push('/admin/ui');
};

const profileAdmin = () => {
  router.push('/admin/profile');
};
</script>

<style>
.menu-item:hover {
  background-color: #4a5568;  
}
</style>
