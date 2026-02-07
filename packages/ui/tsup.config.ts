import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button.tsx", "src/dialog.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
