import { defineNuxtModule, createResolver, addComponent, installModule, addImports } from '@nuxt/kit'


export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-snackbar',
    configKey: 'snackbar'
  },
  

  defaults: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.css.push(resolver.resolve('./runtime/assets/styles.css'))

    await installModule('@nuxtjs/tailwindcss',{
      exposeConfig: true,
      config: {
        darkMode: 'class',
        content: {
          files: [
            resolver.resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolver.resolve('./runtime/*.{mjs,js,ts}')
          ]
        }
      }
    })

    await installModule("nuxt-icon");

    addImports({
      name: 'useSnackbars',
      as: 'useSnackbars',
      from: resolver.resolve('./runtime/composables/useSnackbars')
    })
    addComponent({name: 'SnackbarContainer', filePath: resolver.resolve('./runtime/components/SnackbarContainer')})
  }
})
