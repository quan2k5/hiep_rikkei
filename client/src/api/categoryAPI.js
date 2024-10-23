// api/categoryAPI.js
import apiClient from './instance';

export const getAllCategories = async () => {
  return await apiClient.get('/categories');
};

export const deleteCategory = async (categoryId) => {
  return await apiClient.delete(`/categories/${categoryId}`);
};

export const updateCategory = async (category) => {
  return await apiClient.put(`/categories/${category.id}`, category);
};

export const addCategory = async (category) => {
  return await apiClient.post('/categories', category);
};
