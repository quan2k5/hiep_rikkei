<template>
  <div>
    <Header/>
    <Banner/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script setup>
import Banner from './Banner.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
 
</script>

<style>

</style>