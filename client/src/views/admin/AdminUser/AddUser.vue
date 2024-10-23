<!-- <template>
  <div>
    <button @click="showModal = true" class="ml-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">
      Thêm mới
    </button>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4">Thêm người dùng mới</h2>
        <form @submit.prevent="handleAddUser">
          <div class="space-y-4">
            <input
              v-model="newUser.username"
              type="text"
              placeholder="Tên đăng nhập"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              v-model="newUser.fullName"
              type="text"
              placeholder="Tên đầy đủ"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              v-model="newUser.email"
              type="email"
              placeholder="Email"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              v-model="newUser.password"
              type="password"
              placeholder="Mật khẩu"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              v-model="newUser.phone"
              type="text"
              placeholder="Số điện thoại"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              v-model="newUser.address"
              type="text"
              placeholder="Địa chỉ"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              v-model="newUser.avatar"
              type="text"
              placeholder="Avatar URL"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <div class="flex items-center space-x-2">
              <label for="status">Trạng thái:</label>
              <input
                v-model="newUser.status"
                type="checkbox"
                id="status"
                class="w-4 h-4"
              />
            </div>
          </div>
          <div class="mt-4 flex justify-end space-x-2">
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 bg-gray-300 text-black font-bold rounded hover:bg-gray-400 transition"
            >
              Hủy
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const showModal = ref(false);
const newUser = ref({
  username: '',
  fullName: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  avatar: '',
  status: true,
});


const handleAddUser = () => {
  const user = {
    ...newUser.value,
    created_at: new Date().toISOString(),
    updated_at: '',
  };
  store.dispatch('addUserAction', user);
  showModal.value = false; // Close the modal after adding user
};
</script>

<style scoped>

</style> -->

<template>
  <div>
    <button @click="showModal = true" class="ml-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">
      Thêm mới
    </button>
    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4">Thêm người dùng mới</h2>
        <form @submit.prevent="handleAddUser" class="space-y-4">
          <input v-model="newUser.username" type="text" placeholder="Tên đăng nhập" class="w-full p-2 border border-gray-300 rounded-md" />
          <input v-model="newUser.fullName" type="text" placeholder="Tên đầy đủ" class="w-full p-2 border border-gray-300 rounded-md" />
          <input v-model="newUser.email" type="email" placeholder="Email" class="w-full p-2 border border-gray-300 rounded-md" />
          <input v-model="newUser.password" type="password" placeholder="Mật khẩu" class="w-full p-2 border border-gray-300 rounded-md" />
          <input v-model="newUser.phone" type="text" placeholder="Số điện thoại" class="w-full p-2 border border-gray-300 rounded-md" />
          <input v-model="newUser.address" type="text" placeholder="Địa chỉ" class="w-full p-2 border border-gray-300 rounded-md" />
          <input v-model="newUser.avatar" type="text" placeholder="Avatar URL" class="w-full p-2 border border-gray-300 rounded-md" />
          <div class="flex items-center space-x-2">
            <label for="status" class="text-gray-700">Trạng thái:</label>
            <input v-model="newUser.status" type="checkbox" id="status" class="w-4 h-4" />
          </div>
          <div class="mt-4 flex justify-end space-x-2">
            <button type="button" @click="showModal = false" class="px-4 py-2 bg-gray-300 text-black font-bold rounded hover:bg-gray-400 transition">Hủy</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">Thêm</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const showModal = ref(false);
const newUser = ref({
  username: '',
  fullName: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  avatar: '',
  status: true,
});

const handleAddUser = () => {
  const user = {
    ...newUser.value,
    created_at: new Date().toISOString(),
    updated_at: '',
  };
  store.dispatch('addUserAction', user);
  showModal.value = false; // Close the modal after adding user
};
</script>

<style scoped>
</style>
