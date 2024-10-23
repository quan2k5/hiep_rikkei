<template>
  <div class="container mx-auto p-4">
    <SearchUser />
    <AddUser />
    <TableUser />
  </div>
</template>

<script setup>
import AddUser from './AddUser.vue';
import SearchUser from './SearchUser.vue';
import TableUser from './TableUser.vue';
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
