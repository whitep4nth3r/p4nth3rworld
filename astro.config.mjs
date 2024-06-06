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
      dsn: import.meta.env.SENTRY_DSN,
      debug: true,
      integrations: [Sentry.browserTracingIntegration()],
      tracePropagationTargets: ["https://p4nth3rb0t-mainframe.herokuapp.com", /\/world\//],
      sourceMapsUploadOptions: {
        project: "p4nth3rworld",
        authToken: import.meta.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  output: "server",
  adapter: netlify(),
});
