// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "ZxProto",
      cssVariable: "--font-ZxProto",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/ZxProto-Regular.ttf"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/ZxProto-Bold.ttf"],
            weight: 700,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/ZxProto-Italic.ttf"],
            weight: "normal",
            style: "italic",
          },
        ],
      },
    },
  ],
});
