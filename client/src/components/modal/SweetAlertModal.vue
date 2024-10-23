<!-- src/components/AlertModal.vue -->
<template>
  <div></div>
  <!-- Empty component as SweetAlert handles the UI -->
</template>
  
  <script setup>
import Swal from "sweetalert2";

// src/utils/sweetAlert.js
import Swal from "sweetalert2";

export const showAlert = (type, title, text) => {
  return Swal.fire({
    icon: type, // 'success', 'error', 'warning', etc.
    title: title,
    text: text,
    confirmButtonText: "OK",
    timer: 2000,
    showConfirmButton: false,
  });
};
</script>
  