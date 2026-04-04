// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "0xProto",
      cssVariable: "--font-0xProto",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/0xProto-Regular.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/0xProto-italic.woff2"],
            weight: "normal",
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/0xProto-bold.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
});
