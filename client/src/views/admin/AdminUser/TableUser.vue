<template>
    <section class="p-6">
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th class="text-left px-2 py-2 bg-gray-200  border">STT</th>
              <th class="text-left px-2 py-2 bg-gray-200  border">Username</th>
              <th class="text-left px-2 py-2 bg-gray-200  border">Full Name</th>
              <th class="text-left px-2 py-2 bg-gray-200  border">Phone</th>
              <th class="text-left px-2 py-2 bg-gray-200  border">Address</th>
              <th class="text-left px-2 py-2 bg-gray-200  border">Email</th>
              <th class="text-left px-2 py-2 bg-gray-200  border">Status</th>
              <th class="text-left px-2 py-2 bg-gray-200  border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in paginatedUsers" :key="user.id">
              <td class="text-left px-2 py-2  border">
                {{ (currentPage - 1) * pageSize + index + 1 }}
              </td>
  
              <td class="text-left px-2 py-2  border">{{ user.username }}</td>
              <td class="text-left px-2 py-2  border">{{ user.fullName }}</td>
              <td class="text-left px-2 py-2  border">{{ user.phone }}</td>
              <td class="text-left px-2 py-2  border">{{ user.address }}</td>
              <td class="text-left px-2 py-2  border">{{ user.email }}</td>
              <td class="text-left px-2 py-2  border">
                <span
                  :class="{
                    'text-green-500': user.status,
                    'text-red-500': !user.status,
                  }"
                >
                  {{ user.status ? "Active" : "Inactive" }}
                </span>
              </td>
              <td class="text-left px-2 py-2  border">
                <button
                  :class="
                    user.status
                    // ? 'bg-blue-500 hover:bg-blue-700'
                    // : 'bg-red-500 hover:bg-red-700'
                  "
                  class="font-bold py-1 text-black px-2 rounded mr-2"
                  @click="
                    user.status ? confirmLockUser(user) : confirmUnlockUser(user)
                  "
                >
                  <i
                    :class="user.status ? 'fa fa-unlock' : 'fa fa-lock'"
                    aria-hidden="true"
                  ></i>
                </button>
                <button
                  class="font-bold py-1 text-black px-2 rounded mr-2"
                  @click="deleteUser(user.id)"
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="flex items-center justify-between py-4 px-6 bg-white shadow-md rounded-lg"
        >
          <!-- Page size selector -->
          <!-- <div class="flex items-center space-x-2">
            <label for="pageSize" class="text-sm font-medium text-gray-700"
              >Records per page:</label
            >
            <select
              v-model="pageSize"
              @change="updatePageSize"
              class="block w-20 px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div> -->
  
          <!-- Page navigation -->
          <div class="flex items-center space-x-4">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span class="text-sm font-medium text-gray-700"
              >Page {{ currentPage }} of {{ totalPages }}</span
            >
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, computed, ref } from "vue";
  import { useStore } from "vuex";
  import Swal from "sweetalert2";
  
  const store = useStore();
  console.log("giá trị của store là:", store);
  
  onMounted(() => {
    store.dispatch("fetchAllUsers");
  });
  
  // Confirm lock user
  const confirmLockUser = (user) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Bạn có muốn khóa người dùng này không?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK, khóa!",
      cancelButtonText: "Đóng",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await store.dispatch("lockUser", user.id);
        await store.dispatch("fetchAllUsers");
        Swal.fire("Đã khóa!", "Người dùng đã bị khóa.", "success");
      }
    });
  };
  
  // Confirm unlock user
  const confirmUnlockUser = (user) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Bạn có muốn mở khóa người dùng này không?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK, mở khóa!",
      cancelButtonText: "Đóng",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await store.dispatch("unlockUser", user.id);
        await store.dispatch("fetchAllUsers");
        Swal.fire("Đã mở khóa!", "Người dùng đã được mở khóa.", "success");
      }
    });
  };
  const deleteUser = (userId) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Bạn có muốn xóa người dùng này không?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK, xóa!",
      cancelButtonText: "Đóng",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await store.dispatch("deleteUser", userId);
        await store.dispatch("fetchAllUsers");
        Swal.fire("Đã xóa!", "Người dùng đã bị xóa.", "success");
      }
    });
  };
  
  const pageSize = ref(5);
  const currentPage = computed(() => store.state.user.currentPage);
  console.log("222222222222222", currentPage);
  
  const paginatedUsers = computed(() => store.getters.paginatedUsers);
  console.log("paginatedUsers",paginatedUsers);
  
  const totalPages = computed(() => store.getters.totalPage);
  
  const updatePageSize = () => {
    store.commit("setPageSize", pageSize.value);
    store.commit("setCurrentPage", 1);
  };
  
  const prevPage = () => {
    console.log("current page back", currentPage);
    console.log("paginatedUsers",paginatedUsers);
    
    if (currentPage.value > 1) {
      store.commit("setCurrentPage", currentPage.value - 1);
    }
  };
  
  const nextPage = () => {
    console.log(1111);
    console.log("paginatedUsers",paginatedUsers);
  
    console.log("current page:", currentPage);
    console.log("total page:", totalPages);
  
    if (currentPage.value < totalPages.value) {
      console.log(1111);
      store.commit("setCurrentPage", currentPage.value + 1);
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  