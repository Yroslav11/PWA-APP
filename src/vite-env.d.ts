/// <reference types="vite/client" />

// Добавьте это для CSS
declare module '*.css' {
  const css: string
  export default css
}

// Для других ресурсов (картинки и т.д.)
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'