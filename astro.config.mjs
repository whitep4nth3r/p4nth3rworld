import { defineConfig } from "astro/config";
import auth from "auth-astro";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    auth(),
    tailwind(),
    sentry({
      dsn: import.meta.env.SENTRY_DSN,
      debug: true,
      sourceMapsUploadOptions: {
        project: "p4nth3rworld",
        authToken: import.meta.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  output: "server",
  adapter: netlify(),
});
