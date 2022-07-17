import { defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    axios:axios
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getAxios: (state) => state.axios
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
