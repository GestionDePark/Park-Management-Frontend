/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly USE_REMOTE: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
