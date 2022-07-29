import { defineStore } from 'pinia'
import axios from 'axios';
export const useGenericStore = defineStore({
 id: 'counter',
 state: () => ({
  counter: 0,
  axios: axios,
 }),


 getters: {
  doubleCount: (state) => state.counter * 2,
  getAxios: (state) => state.axios
 },

 actions: {
  increment() {
   this.counter++
  },

  //Orgs CRUD
  //Create org
  async createOrg() {


  },

  //Get org by id
  async getOneOrgInfo(id_organizacao: number) {
   try {
    return (await (axios.post('http://localhost:3000/organizacao/getOneOrgInfo', {
     headers: { 'content-type': 'application/x-www-form-urlencoded' },
     id: id_organizacao
    }))).data

   } catch (err) {
    console.log(err);
   }
  },

  //Edit org
  async editOrg(org: any) {

  },

  //Remove org
  async removeOrg() {

  },

  //Contact Process CRUD
  //Get all contact processes
  async getAllInfoProcessosContacto() {
   try {
    return (await (axios.post('http://localhost:3000/processo/getAllInfoProcessosContacto', {
    }))).data
   } catch (err) {
    console.log(err);
   }
  },

  //Get contact process by id
  async getOneInfoProcessoContacto(id_processoContacto: number) {
   try {
    return (await (axios.post('http://localhost:3000/processo/getOneInfoProcessoContacto', {
     headers: { 'content-type': 'application/x-www-form-urlencoded' },
     id: id_processoContacto
    }))).data

   } catch (err) {
    console.log(err);
   }
  },

  //Edit contact process
  async editInfoProcessoContacto(processoContacto: any) { },

  //Remove contact process
  async removeProcessoContacto() { },

  //Oportunities CRUD

  //Create opportunity
  async createOportunidade() { },

  //Get all oportunities
  async getAllInfoOportunidades() {
   try {
    return (await (axios.post('http://localhost:3000/oportunidade/getAllInfoOportunidades', {
    }))).data
   } catch (err) {
    console.log(err);
   }
  },

  //Get oportunitie by id
  async getOportunidadeById(id_oportunidade: number) {
   try {
    return (await (axios.post('http://localhost:3000/oportunidade/getOportunidadeById', {
     headers: { 'content-type': 'application/x-www-form-urlencoded' },
     id: id_oportunidade
    }))).data
   } catch (err) {
    console.log(err);
   }
  },

  //Edit oportunitie
  async editOportunidade(oportunidade: any) { },

  //Remove oportunitie
  async removeOportunidade() { },
 }


})
