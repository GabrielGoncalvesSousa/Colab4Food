import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
//@ts-ignore
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
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    envDir: './src/env',

  }
}
)

