import Twitch from "@auth/core/providers/twitch";
import { defineConfig } from "auth-astro";

export default defineConfig({
  providers: [
    Twitch({
      clientId: import.meta.env.AUTH_TWITCH_ID,
      clientSecret: import.meta.env.AUTH_TWITCH_SECRET,
    }),
  ],
});
