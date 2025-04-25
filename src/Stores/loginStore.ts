import { defineStore } from "pinia";

export const useLoginStore = defineStore('login', {
  state: () => ({
    isOpen: false
  }),
  actions: {
    showModalLogin() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
  },
  persist: {
    key: 'login',
    storage: localStorage,
  }
})