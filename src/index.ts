import { Hono } from "hono";

import { cacheMiddleware } from "./utils/cacheMiddleware.js";

const app = new Hono();

app.get(
  "/",
  cacheMiddleware({
    directives: ["public"],
  }),
  (c) => {
    return c.text("Hello Hono!");
  },
);

const port = process.env.PORT === undefined ? 3000 : Number(process.env.PORT);
// biome-ignore lint/style/noDefaultExport: <explanation>
export default {
  port,
  fetch: app.fetch,
};
