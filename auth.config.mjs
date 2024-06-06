import Twitch from "@auth/core/providers/twitch";
import { defineConfig } from "auth-astro";

export default defineConfig({
  providers: [
    Twitch({
      clientId: import.meta.env.AUTH_TWITCH_ID,
      clientSecret: import.meta.env.AUTH_TWITCH_SECRET,
      issuer: "https://id.twitch.tv/oauth2",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
});
