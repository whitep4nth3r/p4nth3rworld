import { defineConfig } from "astro/config";
import auth from "auth-astro";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";

import Sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    auth(),
    tailwind(),
    Sentry({
      dsn: "https://4e15bfb05cdfab4664d7a35f9a660669@o4505635661873152.ingest.us.sentry.io/4507384490360832",
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
