/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_MAPS_EMBED_URL?: string;
  readonly VITE_MAPS_PLACE_URL?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
