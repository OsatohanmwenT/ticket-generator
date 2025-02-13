/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_IMAGEKIT_URL_ENPOINT: string;
    readonly VITE_IMAGEKIT_PUBLIC_KEY: string;
    readonly VITE_IMAGEKIT_PRIVATE_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }