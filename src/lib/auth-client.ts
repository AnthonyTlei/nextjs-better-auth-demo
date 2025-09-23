import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react";

export const auhtClient = createAuthClient({
  plugins: [nextCookies()],
});
