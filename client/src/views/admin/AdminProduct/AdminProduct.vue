<template>
  <div class="container mx-auto p-4">
    <SearchProduct />
    <AddProduct />
    <TableProduct />
  </div>
</template>

<script setup>
import AddProduct from './AddProduct.vue';
import SearchProduct from './SearchProduct.vue';
import TableProduct from './TableProduct.vue';
</script>

<style scoped>
/* Additional styles can go here if needed */
</style>
