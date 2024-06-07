import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server";

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await getSession(context.request);
  context.locals.session = session;
  return next();
});
