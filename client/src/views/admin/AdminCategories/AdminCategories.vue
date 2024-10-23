<template>
  <div class="container mx-auto p-4">
    <SearchCategory />
    <AddCategory />
    <TableCategory />
  </div>
</template>

<script setup>
import AddCategory from './AddCategory.vue';
import SearchCategory from './SearchCategory.vue';
import TableCategory from './TableCategory.vue';
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
