import LoginView from '@/views/LoginView.vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios';
import { AxiosKey } from './symbols';

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';



/*  Axios Vs VueAxios
* Axios foi criado para Vue 2 e como estamos a usar Vue 3 + typescript usamos o VueAxios (que é basicamente um ficheiro tipo plugin)
* como o axios e o axios Normal como as opcoes para o VueAxios.
*/

loadFonts()

let app = createApp(App)
  .use(router)
  .use(vuetify)
  .use(BalmUI)
  .use(BalmUIPlus)
  .provide(AxiosKey, axios)
app.mount('#app')


