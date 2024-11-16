import { Hono } from "hono";
import { customAuth } from "./middleware/auth";
import { customLogger } from "./middleware/logger";
import { cors } from "hono/cors";
import api from "./route/api";

const app = new Hono();

app.use("/api/*", cors());
app.use("*", customLogger);
app.use("/api/*", customAuth);

app.route("/api", api);

export default app;
