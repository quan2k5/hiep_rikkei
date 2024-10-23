<template>
  <div class="search-container flex items-center space-x-4 mb-4">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Tìm kiếm theo tên hoặc mô tả"
      class="search-input w-[800px] ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      @click="handleSearch"
      class="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
    >
      Tìm kiếm
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const searchTerm = ref('');
const store = useStore();

// Hàm tìm kiếm danh mục
const handleSearch = () => {
  store.dispatch("searchCategories", searchTerm.value);
};
</script>

<style scoped>
</style>
