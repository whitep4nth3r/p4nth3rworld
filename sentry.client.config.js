import * as Sentry from "@sentry/astro";

Sentry.init({
  // dsn: import.meta.env.PUBLIC_SENTRY_DSN,
  dsn: import.meta.env.PUBLIC_ENV === "prod" ? import.meta.env.PUBLIC_SENTRY_DSN : "",
  tracesSampleRate: 1.0,
  debug: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 1.0,
});
