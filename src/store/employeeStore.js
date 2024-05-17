import { defineStore } from 'pinia';

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    editModal: false,
    editModalData: null
  }),
  actions: {
    openEditModal(data) {
      this.editModalData = data;
      this.editModal = true;
    },
    closeEditModal() {
      this.editModal = false;
      this.editModalData = null;
    },
    setEditModalData(data) {
      this.editModalData = data;
    }
  },
  getters: {
    getEditModal: state => state.editModal,
    getEditModalData: state => state.editModalData
  }
});
