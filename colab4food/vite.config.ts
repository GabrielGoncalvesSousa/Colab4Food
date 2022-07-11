import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import axiosPlug from './src/plugins/axiosPlug'
// import ss from './src/shims-axios'
// import shims from './src/shims-axios'
// import env from "./env.d"
import axios from 'axios';
import externalGlobals from 'rollup-plugin-external-globals';


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      port: 5000,
      host: true,
    },
    plugins: [
      vue({}),
      vuetify({ autoImport: true }),
      viteCommonjs(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      axi: JSON.stringify(`import axios from 'axios'`),
      axi2: { axios }
    },

    envDir: './src/env',

    build: {
      rollupOptions: {
        external: true
      }
    }
  }
}
)

