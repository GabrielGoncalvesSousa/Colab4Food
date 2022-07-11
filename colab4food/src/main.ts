import LoginView from '@/views/LoginView.vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Sidebar from '@/components/TheSidebar.vue';
import HomeComponent from '@/components/TheHome.vue';
import OrganizationsComponent from '@/components/TheOrganizations.vue';
import MainMenu from '@/views/MainView.vue';
import brincarVue from '@/views/brincar.vue';
import zaxios from 'axios';
import AxiosStatic from 'axios'
/*  Axios Vs VueAxios
* Axios foi criado para Vue 2 e como estamos a usar Vue 3 + typescript usamos o VueAxios (que é basicamente um ficheiro tipo plugin)
* como o axios e o axios Normal como as opcoes para o VueAxios.
*/

console.log(axios);

loadFonts()
declare global {
  const axios = zaxios
}



let app = createApp(App)
  .use(router)
  .use(vuetify)
  .component('Sidebar', Sidebar)
  .component('HomeComponent', HomeComponent)
  .component('OrganizationsComponent', OrganizationsComponent)
  .component('MainMenu', MainMenu)
  .component('Brincar', brincarVue)
  .component('LoginView', LoginView)
// .provide(AxiosKey, axios)
app.mount('#app')


