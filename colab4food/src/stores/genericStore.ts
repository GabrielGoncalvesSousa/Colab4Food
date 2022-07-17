import { defineStore } from 'pinia'
import axios from 'axios';
export const useGenericStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    axios: axios,
    currentQueryOutput: '',
  }),

  getters: {
    doubleCount: (state) => state.counter * 2,
    getAxios: (state) => state.axios
  },
  actions: {
    increment() {
      this.counter++
    },

    async getAllOrgInfo(id_organizacao: number) {
      try {
        return (await (axios.post('http://localhost:3000/organizacao/getAllOrgInfo', {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          id: 1
        }))).data

      } catch (err) {
        console.log(err);
      }
    }
  }

})
