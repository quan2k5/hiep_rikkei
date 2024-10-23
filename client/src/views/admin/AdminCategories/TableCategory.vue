<template>
  <section class="p-6">
    <div class="overflow-x-auto mt-4">
      <table class="table-auto w-full border-collapse bg-white border border-gray-200">
        <thead>
          <tr>
            <th class="px-2 py-2 bg-gray-200 border">STT</th>
            <th class="px-2 py-2 bg-gray-200 border">Tên danh mục</th>
            <th class="px-2 py-2 bg-gray-200 border">Ảnh minh họa</th>
            <th class="px-2 py-2 bg-gray-200 border">Mô tả</th>
            <th class="px-2 py-2 bg-gray-200 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in paginatedCategories" :key="category.id">
            <td class="px-2 py-2 border">{{ index + 1 + (currentPage - 1) * pageSize }}</td>
            <td class="px-2 py-2 border">{{ category.category_name }}</td>
            <td class="px-2 py-2 border">
              <img :src="category.image" class="w-16 h-16 object-cover" />
            </td>
            <td class="px-2 py-2 border">{{ category.description }}</td>
            <td class="px-2 py-2 border">
              <button @click="editCategory(category)" class="mr-2 text-blue-500">Sửa</button>
              <button @click="deleteCategory(category.id)" class="text-red-500">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal để chỉnh sửa/thêm danh mục -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4">{{ isEditing ? "Chỉnh sửa danh mục" : "Thêm danh mục" }}</h2>
        <form @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <input v-model="category.category_name" type="text" placeholder="Tên danh mục" class="w-full p-2 border border-gray-300 rounded-md" />
            <textarea v-model="category.description" placeholder="Mô tả" class="w-full p-2 border border-gray-300 rounded-md"></textarea>
            <input v-model="category.image" type="text" placeholder="Ảnh minh họa" class="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div class="mt-4 flex justify-end">
            <button type="button" @click="showModal = false" class="px-4 py-2 bg-gray-300 rounded-md">Hủy</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">{{ isEditing ? "Cập nhật" : "Thêm" }}</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";

const store = useStore();
const currentPage = ref(1);
const pageSize = ref(5);
const showModal = ref(false);
const isEditing = ref(false);
const category = ref({ category_name: "", description: "", image: "" });

// Lấy danh sách danh mục khi component được gắn vào
onMounted(() => {
  store.dispatch("fetchAllCategories");
});

// Lấy danh sách danh mục từ store
const categories = computed(() => store.state.category.filteredCategories);
const paginatedCategories = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return categories.value.slice(start, start + pageSize.value);
});

// Hàm xóa danh mục
const deleteCategory = (categoryId) => {
  Swal.fire({
    title: "Bạn có chắc chắn muốn xóa?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Xóa",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch("deleteCategory", categoryId);
      Swal.fire("Đã xóa!", "Danh mục đã được xóa.", "success");
    }
  });
};

// Hàm mở modal để chỉnh sửa danh mục
const editCategory = (categoryToEdit) => {
  category.value = { ...categoryToEdit };
  isEditing.value = true;
  showModal.value = true;
};

// Hàm xử lý khi gửi form
const handleSubmit = () => {
  if (isEditing.value) {
    store.dispatch("updateCategory", category.value);
  } else {
    store.dispatch("addCategory", category.value);
  }
  showModal.value = false; // Đóng modal sau khi gửi
};
</script>

<style scoped>
</style>
