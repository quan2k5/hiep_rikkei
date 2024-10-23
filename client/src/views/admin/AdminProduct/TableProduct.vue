<template>
  <section class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
    <table class="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Tên sản phẩm</th>
          <th class="border p-2">Hình ảnh</th>
          <th class="border p-2">Mô tả</th>
          <th class="border p-2">Giá</th>
          <th class="border p-2">Số lượng</th>
          <th class="border p-2">Danh mục</th>
          <th class="border p-2">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="hover:bg-gray-100">
          <td class="border p-2">{{ product.product_name }}</td>
          <td class="border p-2">
            <img :src="product.image[0]" alt="" class="w-20 h-20 object-cover">
          </td>
          <td class="border p-2">{{ product.description }}</td>
          <td class="border p-2">{{ product.unit_price }}</td>
          <td class="border p-2">{{ product.stock_quantity }}</td>
          <td class="border p-2">{{ findNameCategory(product.categoryId) }}</td>
          <td class="border p-2">
            <button @click="openEditModal(product)" class="text-green-500 hover:underline">Sửa</button>
            <button @click="deleteProduct(product.id)" class="text-red-500 hover:underline">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  
    <div class="flex justify-between items-center mt-4">
      <div>
        <label for="pageSize" class="mr-2">Số sản phẩm mỗi trang:</label>
        <select v-model="pageSize" @change="updatePageSize" class="border rounded p-1">
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </div>

      <div>
        <button @click="prevPage" :disabled="currentPage === 1" class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">Trang trước</button>
        <span class="mx-2">Trang {{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">Trang sau</button>
      </div>
    </div>
  
    <!-- Modal sửa sản phẩm -->
    <div v-if="isEditModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4">Sửa sản phẩm</h2>
        <form @submit.prevent="handleUpdate">
          <input v-model="editedProduct.product_name" type="text" placeholder="Tên sản phẩm" class="w-full p-2 border" />
          <textarea v-model="editedProduct.description" placeholder="Mô tả" class="w-full p-2 border"></textarea>
          <input v-model="editedProduct.unit_price" type="text" placeholder="Giá" class="w-full p-2 border" />
          <input v-model="editedProduct.stock_quantity" type="text" placeholder="Số lượng" class="w-full p-2 border" />
          <div class="mt-4 flex justify-end">
            <button type="button" @click="closeEditModal" class="px-4 py-2 bg-gray-300 rounded">Hủy</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Lưu</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { getAllCategories } from "../../../api/categoryAPI";  

const store = useStore();
const products = computed(() => store.getters.getProducts);
const isEditModalOpen = ref(false);
const editedProduct = ref({});

// Pagination logic
const currentPage = computed(() => store.state.product.currentPage);
const pageSize = ref(store.state.product.pageSize);
const totalPages = computed(() => store.getters.totalPages);

const updatePageSize = () => {
  store.dispatch('setPageSize', pageSize.value);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    store.dispatch('setCurrentPage', currentPage.value - 1);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    store.dispatch('setCurrentPage', currentPage.value + 1);
  }
};

onMounted(() => {
  store.dispatch('fetchProducts');
});

const openEditModal = (product) => {
  editedProduct.value = { ...product };
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
  editedProduct.value = {};
  store.dispatch('fetchProducts');
};

const deleteProduct = async (productId) => {
  await store.dispatch('deleteProduct', productId);
  store.dispatch('fetchProducts');
};

const handleUpdate = async () => {
  await store.dispatch('updateProduct', editedProduct.value);
  closeEditModal();
};

const categoriesList = reactive([]);

const fetchCategories = async () => {
  try {
    const response = await getAllCategories();
    categoriesList.push(...response.data);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
};

const findNameCategory = (categoryId) => {
  const findCategory = categoriesList.find(cat => cat.id == categoryId);
  return findCategory ? findCategory.category_name : "Không xác định";
};

onMounted(async () => {
  store.dispatch('fetchProducts');
  await fetchCategories();
});
</script>

<style scoped>
/* Style cho component này */
</style>
