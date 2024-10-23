<template>
  <div>
    <button
      @click="showModal = true"
      class="ml-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
    >
      Thêm mới
    </button>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4">
          {{ isEditing ? "Chỉnh sửa danh mục" : "Thêm danh mục" }}
        </h2>
        <form @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <input
              v-model="category.category_name"
              type="text"
              placeholder="Tên danh mục"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <textarea
              v-model="category.description"
              placeholder="Mô tả"
              class="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
            <input
              v-model="category.image"
              type="text"
              placeholder="Ảnh minh họa"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div class="mt-4 flex justify-end">
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 bg-gray-300 rounded-md"
            >
              Hủy
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {{ isEditing ? "Cập nhật" : "Thêm" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

// Khởi tạo store và các biến cần thiết
const store = useStore();
const showModal = ref(false);
const category = ref({ category_name: "", description: "", image: "" });
const isEditing = ref(false);

// Hàm xử lý khi gửi form
const handleSubmit = () => {
  if (isEditing.value) {
    store.dispatch("updateCategory", category.value);
  } else {
    store.dispatch("addCategory", category.value);
  }
  showModal.value = false; // Đóng modal sau khi gửi
};

// Hàm để chỉnh sửa danh mục
const editCategory = (categoryToEdit) => {
  category.value = { ...categoryToEdit };
  isEditing.value = true;
  showModal.value = true;
};
</script>

<style scoped>
</style>
