import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { appPages } from "./pages";

const app = new OpenAPIHono();

app.get(
  "/",
  cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  async (c) => {
    return c.json({
      message: "Hello, world!",
    });
  },
);

app.route("/", appPages);

app.doc31("/doc", {
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "Central Dogma",
  },
  servers: [
    {
      url: "https://central-dogma.oshaburikitchin.com",
    },
  ],
});

app.get("/doc-ui", swaggerUI({ url: "/doc" }));

const port = process.env.PORT === undefined ? 3000 : Number(process.env.PORT);
// biome-ignore lint/style/noDefaultExport: <explanation>
export default {
  port,
  fetch: app.fetch,
};
