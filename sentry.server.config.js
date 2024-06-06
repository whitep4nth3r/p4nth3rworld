import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://4e15bfb05cdfab4664d7a35f9a660669@o4505635661873152.ingest.us.sentry.io/4507384490360832",
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["https://p4nth3rb0t-mainframe.herokuapp.com", /\/world\//],
});
