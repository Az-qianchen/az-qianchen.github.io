import { defineConfig, presetUno } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [presetUno, presetAttributify, presetIcons],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|md|mdx?|astro|elm|php|phtml|html)($|\?)/,
        "*.ts",
      ],
    },
  },
});
