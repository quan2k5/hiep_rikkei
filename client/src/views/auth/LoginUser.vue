<template>
    <div>
      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-6xl">
          <!-- Left Side (Banner Image) -->
          <div class="hidden lg:flex items-center justify-center bg-blue-50 rounded-l-lg">
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
              alt="Auth Cover Bg"
              class="h-full object-cover rounded-l-lg"
            />
          </div>
  
          <!-- Right Side (Login Form) -->
          <div class="flex items-center justify-center p-8 lg:p-12 w-full lg:w-1/2">
            <div class="w-full max-w-md login-form"> <!-- Đặt class cho chiều rộng -->
              <!-- Logo -->
              <div class="text-center mb-6">
                <img
                  class="w-16 mx-auto"
                  src="https://www.pngmart.com/files/21/Administrator-PNG-File.png"
                  alt="Logo Sapochee.Io.Vn"
                />
                <h2 class="text-2xl font-bold mt-2">Sapochee.Io.Vn</h2>
              </div>
  
              <!-- Welcome Message -->
              <h4 class="text-xl font-semibold mb-2 text-gray-700">Welcome to Sapochee.Io.Vn! 👋</h4>
              <p class="mb-4 text-gray-500">Vui lòng đăng nhập để có thể sử dụng dịch vụ</p>
  
              <!-- Login Form -->
              <form class="space-y-4">
                <div class="space-y-1">
                  <label for="username" class="block text-sm font-medium text-gray-700">Email or Tài khoản</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nhập email hoặc tài khoản"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
  
                <div class="space-y-1">
                  <label for="password" class="block text-sm font-medium text-gray-700">Mật Khẩu</label>
                  <div class="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                      required
                    />
                    <span class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                      <i class="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
  
                <button type="submit" class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Đăng Nhập
                </button>
              </form>
  
              <!-- Sign Up Link -->
              <p class="text-center mt-4 text-sm text-gray-500">
                Bạn chưa có tài khoản? 
                <a href="/oauth/dang-ky?redirect=https%3A%2F%2Fsapochee.io.vn%2F" class="text-blue-600 hover:underline">
                  Đăng ký ngay
                </a>
              </p>
  
              <!-- Divider -->
              <div class="my-4 flex items-center">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="px-4 text-sm text-gray-500">or</span>
                <div class="flex-grow border-t border-gray-300"></div>
              </div>
  
              <!-- Social Login Buttons -->
              <div class="flex space-x-3 justify-center">
                <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <i class="bx bxl-facebook"></i>
                </a>
                <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700">
                  <i class="bx bxl-google-plus"></i>
                </a>
                <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                  <i class="bx bxl-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style>
  .login-form {
    width: 392px; 
  }
  </style>
  