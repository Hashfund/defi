import {
  defineConfig,
  presetUno,
  presetWind,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  shortcuts: {},
  safelist: ["lt-md:fixed lt-md:inset-0"],
  presets: [presetUno(), presetWind(), presetTypography()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
