<template>
    <div class="flex">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Main content -->
      <div class="flex-1">
        <!-- Header -->
        <Header />
  
        <!-- Children page -->
        <router-view/>
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from './Header.vue';
  import Sidebar from './Sidebar.vue';
  
   
  </script>
  