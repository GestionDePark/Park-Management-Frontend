/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly REMOTE_URL: string;
  readonly IS_DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
