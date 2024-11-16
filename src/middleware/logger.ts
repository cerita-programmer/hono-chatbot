import { createMiddleware } from "hono/factory";

const customLogger = createMiddleware(async (c, next) => {
  console.log(`[Before] Request started: [${c.req.method}] ${c.req.url}`); //before handler
  await next();
  console.log(`[After] Response sent: [${c.req.method}] ${c.req.url}`); //after handler
});

export { customLogger };
