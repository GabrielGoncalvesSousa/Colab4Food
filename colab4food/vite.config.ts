import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetifyPlugin from 'vite-plugin-vuetify'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'


// https://vitejs.dev/config/
//@ts-ignore

function resolve(dir) {
  return path.join(__dirname, '..', '..', dir);
}


export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  return {

    //se usarmos js ele importa logo as cenas do react para podermos usar jsx (podermos misturar html dentro de scripts)
    //Em typescript chama se tsx
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        vue: 'vue/dist/vue.esm-bundler.js',
        'balm-ui': 'balm-ui',


        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
        'balm-ui-next': 'balm-ui/dist/balm-ui-next.js',

        'balm-ui-css': 'balm-ui/dist/balm-ui.css',

      }
    },

    styles: {
      extname: 'scss'
    },

    build: {
      rollupOptions: {
        external: [

        ]
      }
    },


    server: {
      port: 5000,
      host: true,
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // isCustomElement: tag => tag.startsWith('v')
          }
        }
      }),
      vuetifyPlugin({ autoImport: true }),
      viteCommonjs(),
      vueJsx(),



      //Desactivated autoImport, managed to find a solution for importing axios
      //in a clean and effective way, since what auto import does is declaring
      //every import it detects you use as global
      //   AutoImport({

      // // targets to transform
      // include: [
      //   /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      //   /\.vue$/, /\.vue\?vue/, // .vue
      //   /\.md$/, // .md
      // ],

      // // global imports to register
      // imports: [
      //   // presets
      //   'vue',
      //   'vue-router',
      //   // custom
      //   {
      //     'axios': [
      //       // default imports
      //       ['default', 'axios'], // import { default as axios } from 'axios',

      //     ],
      //     'AxiosKey':[
      //       ['default','AxiosKey']
      //     ]
      //   },
      // ],

      // // Generate corresponding .eslintrc-auto-import.json file.
      // // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      // eslintrc: {
      //   enabled: false, // Default `false`
      //   filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      //   globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      // },

      // // custom resolvers
      // // see https://github.com/antfu/unplugin-auto-import/pull/23/
      // resolvers: [
      //   /* ... */
      // ],

      // // Filepath to generate corresponding .d.ts file.
      // // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // // Set `false` to disable.
      // dts: './auto-imports.d.ts',

      //   })
    ],

  }
}
)

