// api/productAPI.js
import apiClient from './instance';

export const getAllProducts = async (page = 1, limit = 5) => {
  return await apiClient.get(`/products?_page=${page}&_limit=${limit}`);
};

export const deleteProduct = async (productId) => {
  return await apiClient.delete(`/products/${productId}`);
};

export const updateProduct = async (product) => {
  return await apiClient.put(`/products/${product.id}`, product);
};

export const addProduct = async (product) => {
  return await apiClient.post('/products', product);
};
