import { defineConfig } from "astro/config";
import auth from "auth-astro";
// import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import Sentry from "@sentry/astro";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    auth(),
    tailwind(),
    Sentry({
      dsn: process.env.PUBLIC_ENV === "prod" ? process.env.PUBLIC_SENTRY_DSN : "",
      debug: true,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      sourceMapsUploadOptions: {
        project: "p4nth3rworld",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
