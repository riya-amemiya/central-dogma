import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";

import { appPages } from "./pages/index.js";
import { cacheMiddleware } from "./utils/cacheMiddleware.js";

const app = new OpenAPIHono();

app.get(
  "/",
  cacheMiddleware({
    directives: ["public"],
  }),
  (c) => {
    return c.text("Hello Hono!");
  },
);

app.route("/", appPages);

app.doc31("/doc", {
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "Central Dogma",
  },
});

app.get("/doc-ui", swaggerUI({ url: "/doc" }));

const port = process.env.PORT === undefined ? 3000 : Number(process.env.PORT);
// biome-ignore lint/style/noDefaultExport: <explanation>
export default {
  port,
  fetch: app.fetch,
};
