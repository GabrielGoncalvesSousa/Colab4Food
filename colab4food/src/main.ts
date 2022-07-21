import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia';

// import BalmUI from 'balm-ui'
// import BalmUI, { UiButton, $alert } from 'balm-ui';
// import BalmUINext from 'balm-ui/dist/balm-ui-next';
// import BalmUIPlus, { UiEditor } from 'balm-ui/dist/balm-ui-plus';


import BalmUI from 'balm-ui' // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus' // BalmJS Team Material Components
import BalmUINext from 'balm-ui-next' // Experimental Material Components
import 'balm-ui-css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
const vuetify = createVuetify({
  components,
  directives
})
/*  Axios Vs VueAxios
* Axios foi criado para Vue 2 e como estamos a usar Vue 3 + typescript usamos o VueAxios (que é basicamente um ficheiro tipo plugin)
* como o axios e o axios Normal como as opcoes para o VueAxios.
*/
// BalmUI
loadFonts()

const pinia = createPinia()
const app = createApp(App)
  .use(router)
  .use(vuetify)
  .use(BalmUI)
  .use(BalmUIPlus)
  .use(BalmUINext)
  .use(pinia)
app.mount('#app')
