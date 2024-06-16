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
  theme: {
    colors: {
      amber: "#FFD700",
    },
  },
  shortcuts: {},
  safelist: ["lt-md:fixed lt-md:inset-0"],
  presets: [presetUno(), presetWind(), presetTypography()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
