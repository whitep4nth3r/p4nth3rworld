import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: import.meta.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["https://p4nth3rb0t-mainframe.herokuapp.com", /\/world\//],
});
