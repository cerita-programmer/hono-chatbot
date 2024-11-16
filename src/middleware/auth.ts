import { createMiddleware } from "hono/factory";

const customAuth = createMiddleware(async (c, next) => {
  const API_KEY = c.req.header("X-Api-Key");

  if (API_KEY !== Bun.env.AUTH_API_KEY) {
    return c.json(
      {
        message: "Unauthorized",
      },
      401
    );
  }

  await next();
});
export { customAuth };
