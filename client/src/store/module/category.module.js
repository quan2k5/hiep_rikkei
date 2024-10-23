import {
  getAllCategories,
  deleteCategory,
  updateCategory,
  addCategory
} from '@/api/categoryAPI';

const category = {
  state: {
    categories: [],
    filteredCategories: [],
  },
  mutations: {
    setCategoriesMutations(state, categories) {
      state.categories = categories;
      state.filteredCategories = categories;
    },
    deleteCategoryMutations(state, categoryId) {
      state.categories = state.categories.filter(cat => cat.id !== categoryId);
      state.filteredCategories = state.filteredCategories.filter(cat => cat.id !== categoryId);
    },
    addCategoryMutations(state, newCategory) {
      state.categories.push(newCategory);
      state.filteredCategories.push(newCategory);
    },
    updateCategoryMutations(state, updatedCategory) {
      const index = state.categories.findIndex(cat => cat.id === updatedCategory.id);
      if (index !== -1) {
        state.categories.splice(index, 1, updatedCategory);
        state.filteredCategories.splice(index, 1, updatedCategory);
      }
    },
    filteredCategoriesMutations(state, searchQuery) {
      state.filteredCategories = state.categories.filter(cat =>
        cat.category_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
  actions: {
    async fetchAllCategories({ commit }) {
      const response = await getAllCategories();
      commit('setCategoriesMutations', response.data);
    },
    async deleteCategory({ commit }, categoryId) {
      await deleteCategory(categoryId);
      commit('deleteCategoryMutations', categoryId);
    },
    async addCategory({ commit }, newCategory) {
      const response = await addCategory(newCategory);
      commit('addCategoryMutations', response.data);
    },
    async updateCategory({ commit }, updatedCategory) {
      const response = await updateCategory(updatedCategory);
      commit('updateCategoryMutations', response.data);
    },
    searchCategories({ commit }, searchQuery) {
      commit('filteredCategoriesMutations', searchQuery);
    },
  },
  getters: {
    totalCategories(state) {
      return state.filteredCategories.length;
    },
    getCategories: (state) => state.categories
  },
};

export default category;
