# Nuxt Snackbar

[![npm version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> A highly customizable module to create snackbars for the Nuxt framework

## Features

- Built using [Tailwind CSS](https://tailwindcss.com) and [Nuxt Icon](https://github.com/nuxt-modules/icon)
- Highly customizable (shape, position, color...)
- Easy to integrate and use

## Installation

Add the `@luxorus/nuxt-snackbar` dependency to your project

```sh
# Using npm
npm install @luxorus/nuxt-snackbar

# Using pnpm
pnpm add @luxorus/nuxt-snackbar
```

Then, add the module to the modules array in `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ['@luxorus/nuxt-snackbar'],
})
```

And that's it! No further configuration is needed to run the module

## Usage

1. Add the `<SnackbarContainer />` tag to the `app.vue` file or to your layout file

```html
<template>
  <div>
    <div>
      <h1>My amazing app</h1>
    </div>
    <SnackbarContainer />
  </div>
</template>
```

2. Use the provided `useSnackbars` composable to add snackbars

```ts
useSnackbars().push({ type: 'error', content: 'My error message', duration: 5000 })
```

## Documentation

### Visual Customization

These are props passed to the `<SnackbarContainer />` tag to personalize the appearance of the snackbars

**position**
- Type: `"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"`
- Default: `"bottom-center"`

**shape**
- Type: `"rounded" | "oval" | "sharp"`
- Default: `"oval"`

**color**
- Type: `String`
- Default: `"#fff"`

**background**
- Type: `String`
- Default: `"#2f2f2f"`

### API

This module comes with a `useSnackbars` composable to directly manipulate the snackbars

```ts
// Access all the snackbars
useSnackbars().snackbars

// Add a snackbar
// Types: "error" | "success" | "warning" | "info"
useSnackbars().push({type: "info", content:"My snackbar info", duration: 10000})

// Remove a snackbar with a specific id
useSnackbar().remove(2)
```

## Credits

- [nuxt/nuxt](https://github.com/nuxt/nuxt)
- [nuxt-modules/tailwindcss](https://github.com/nuxt-modules/tailwindcss)
- [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [nuxt-modules/icon](https://github.com/nuxt-modules/icon)

## License

This project is licensed under the [MIT License](https://github.com/Luxoruus/nuxt-snackbar/blob/main/LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/%40luxorus%2Fnuxt-snackbar
[npm-version-href]: https://www.npmjs.com/package/@luxorus/nuxt-snackbar
[license-src]: https://img.shields.io/npm/l/%40luxorus%2Fnuxt-snackbar
[license-href]: https://github.com/Luxoruus/nuxt-snackbar/blob/main/LICENSE
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com