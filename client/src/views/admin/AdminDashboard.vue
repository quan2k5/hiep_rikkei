<template>
  <section class="p-6">
    <div class="grid grid-cols-3 gap-4">
      <!-- Clients -->
      <div class="bg-blue-100 p-4 rounded-lg shadow flex items-center">
        <i class="fa fa-users text-blue-600 text-3xl mr-2"></i>
        <div>
          <h2 class="text-xl font-semibold">Clients</h2>
          <p class="text-4xl font-bold">512</p>
        </div>
      </div>
      <!-- Sales -->
      <div class="bg-green-100 p-4 rounded-lg shadow flex items-center">
        <i class="fa fa-dollar-sign text-green-600 text-3xl mr-2"></i>
        <div>
          <h2 class="text-xl font-semibold">Sales</h2>
          <p class="text-4xl font-bold">$7,770</p>
        </div>
      </div>
      <!-- Performance -->
      <div class="bg-yellow-100 p-4 rounded-lg shadow flex items-center">
        <i class="fa fa-chart-line text-yellow-600 text-3xl mr-2"></i>
        <div>
          <h2 class="text-xl font-semibold">Performance</h2>
          <p class="text-4xl font-bold">256%</p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  const admin = localStorage.getItem("admin");
  if (!admin) {
    router.push("/login/admin"); // Redirect to login if no admin found
  }
});
</script>
  
  <style scoped>
/* Additional styles can be added here if needed */
</style>
  