<!-- <template>
  <div class="search-container flex items-center space-x-4 mb-4">
    <input 
      type="text" 
      v-model="searchTerm" 
      placeholder="Tìm kiếm theo tên hoặc email" 
      class="search-input w-[880px] ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button @click="handleSearch" class="px-4  py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">
      Tìm kiếm
    </button>
    <div class="sort-container flex items-center space-x-2">
      <label for="sortOptions" class="font-medium">Sắp xếp:</label>
      <select id="sortOptions" v-model="sortOption" @change="handleSort" class="border border-gray-300 rounded-md p-2 focus:ring-blue-500">
        <option value="asc">Tăng dần theo tên</option>
        <option value="desc">Giảm dần theo tên</option>
      </select>
    </div>

    
  </div>

  
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const searchTerm = ref('');
  const sortOption = ref('asc');
  const store = useStore();
  
  const handleSearch = () => {
    store.dispatch("searchUser", searchTerm.value);
  };
  
  const handleSort = () => {
    store.commit("setSortOption", sortOption.value);  // Cập nhật lựa chọn sắp xếp
    store.dispatch("sortUsers");  // Gọi hành động sắp xếp
  };
  </script>
   -->

   <template>
    <div class="flex items-center space-x-4 mb-4">
      <input type="text" v-model="searchTerm" placeholder="Tìm kiếm theo tên hoặc email" class="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4 " />
      <button @click="handleSearch" class="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">Tìm kiếm</button>
      <div class="flex items-center space-x-2">
        <label for="sortOptions" class="font-medium">Sắp xếp:</label>
        <select id="sortOptions" v-model="sortOption" @change="handleSort" class="border border-gray-300 rounded-md p-2 focus:ring-blue-500">
          <option value="asc">Tăng dần theo tên</option>
          <option value="desc">Giảm dần theo tên</option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const searchTerm = ref('');
  const sortOption = ref('asc');
  const store = useStore();
  
  const handleSearch = () => {
    store.dispatch("searchUser", searchTerm.value);
  };
  
  const handleSort = () => {
    store.commit("setSortOption", sortOption.value);
    store.dispatch("sortUsers");
  };
  </script>
  
  <style scoped>
  </style>
  