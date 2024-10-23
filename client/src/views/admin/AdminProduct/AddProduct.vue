<template>
    <div>
      <button @click="showModal = true" class="ml-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">Thêm sản phẩm</button>
      <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 class="text-2xl font-bold mb-4">Thêm sản phẩm</h2>
          <form @submit.prevent="handleSubmit">
            <input v-model="product.product_name" type="text" placeholder="Tên sản phẩm" class="w-full p-2 border" />
            <textarea v-model="product.description" placeholder="Mô tả" class="w-full p-2 border"></textarea>
            <input v-model="product.unit_price" type="text" placeholder="Giá" class="w-full p-2 border" />
            <input v-model="product.stock_quantity" type="text" placeholder="Số lượng" class="w-full p-2 border" />
            <input v-model="product.image" type="text" placeholder="URL Ảnh" class="w-full p-2 border" />
            <div class="mt-4 flex justify-end">
              <button type="button" @click="showModal = false" class="px-4 py-2 bg-gray-300 rounded">Hủy</button>
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Thêm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  const file = ref(null);
  const downloadURL = ref(null);
  const store = useStore();
  const showModal = ref(false);
  const product = ref({ product_name: "", description: "", unit_price: "", stock_quantity: "", image: "" });
  
  
  const handleSubmit = async () => {
    await store.dispatch('addProduct', product.value);
    store.dispatch('fetchProducts'); // Lấy danh sách sản phẩm khi component được khởi tạo

    showModal.value = false;
  };
  </script>
  
  <style scoped>
  /* Style cho component này */
  </style>
  