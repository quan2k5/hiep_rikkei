<template>
    <div class="imageProduct_form">
      <div class="image_product_title">Hình ảnh danh mục</div>
      <div class="main_content">
      <div class="uploadImage_part">
        <div class="upload_icon_part">
          <svg
            class="upload_icon"
            viewBox="0 0 23 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z"
            ></path>
            <path
              d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z"
            ></path>
          </svg>
        </div>
        <label for="fileinput" class="uploadImage_content">Thêm hình ảnh</label>
        <input
          type="file"
          id="fileinput"
          class="upload_input"
          @change="handleImageChange"
        />
      </div>
      <div class="img_box" v-if="image">
        <img :src="image" alt="">
      </div>
      </div>
      <!-- <div class="message_error">{{error}}</div> -->
    </div>
  </template>
  <script setup>
  import {computed } from 'vue';
  import { useStore } from 'vuex';
  import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
  const props=defineProps(['image','error'])
  const emits=defineEmits(['handleImange']);
  import {storage} from '../../../firebase/config'
  const handleImageChange = async(event) => {
    const files=event.target.files; ;
    if(files && files.length > 0){
      const file = files[0];
      const storageRef = ref(storage, `images/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const url= await getDownloadURL(snapshot.ref);
        emits('handleImange',url);   
      }catch(error){
        console.log('lỗi'); 
      }
    }
  };
  </script>
  <style scoped>
  .main_content{
    display: flex;
    gap:10px
  }
  
  .imageProduct_form {
    background-color: var(--white-color);
    min-height: 100px;
    border-radius: 2px;
    margin-bottom: 10px;
  }
  
  .image_product_title {
    margin-top: 0;
    height: 34px;
    padding: 0px 0px 0px;
  }
  
  .image_list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  
  .image_item {
    width: 80px;
    height: 90px;
    padding: 10px 15px;
    border: 1px solid rgba(128, 128, 128, 0.473);
    position: relative;
    padding-bottom: 30px;
  }
  
  .image_item img {
    width: 100%;
    height: 120%;
    border-radius: 2px;
  }
  
  .delete_image_item {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.342);
    bottom: 0;
    right: 0;
    color: white;
    text-align: center;
    left: 0;
  }
  
  .delete_image_item i {
    cursor: pointer;
  }
  
  .uploadImage_part {
    width: 100px;
    border: 1px dashed black;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
  }
  
  .upload_icon_part {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .upload_icon {
    color: orangered;
    width: 70%;
    height: 70%;
  }
  
  .uploadImage_content {
    font-size: small;
    cursor: pointer;
  }
  
  .upload_input {
    display: none;
  }
  
  .uploadImage_part:hover {
    border-color:blue;
    background-color: #fef9f8;
  }
  
  .message_error {
    color: red;
    margin-top: 10px;
  }
  .img_box img{
    width: 90px;
    height: 100px;
  }
  .message_error{
    font-size: small;
    color: red;
  }
  </style>
  