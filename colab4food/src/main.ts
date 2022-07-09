import { createApp, defineComponent } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Sidebar from '@/components/TheSidebar.vue';
import HomeComponent from '@/components/TheHome.vue';
import OrganizationsComponent from '@/components/TheOrganizations.vue';
import MainMenu from '@/views/MainView.vue';

/*  Axios Vs VueAxios
* Axios foi criado para Vue 2 e como estamos a usar Vue 3 + typescript usamos o VueAxios (que é basicamente um ficheiro tipo plugin)
* como o axios e o axios Normal como as opcoes para o VueAxios.
*/

loadFonts()


let app = createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueAxios, axios)
  .component('Sidebar', Sidebar)
  .component('HomeComponent', HomeComponent)
  .component('OrganizationsComponent', OrganizationsComponent)
  .component('MainMenu', MainMenu)
app.mount('#app')
