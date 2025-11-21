import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { appPages } from "./pages";

const app = new OpenAPIHono();

app.get(
  "/",
  cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  async (c) => {
    return c.json({
      message: "Hello, world!",
    });
  },
);

app.route("/", appPages);

const port = process.env.PORT === undefined ? 3000 : Number(process.env.PORT);

app.doc("/doc", (c) => {
  c.header(
    "Cache-Control",
    `public, max-age=${convertTime(OneDayMs, "ms", "s")}`,
  );
  return {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Central Dogma",
    },
    servers: [
      {
        url:
          port === 3000
            ? "http://localhost:3000"
            : "https://central-dogma.oshaburikitchin.com",
      },
    ],
  };
});

app.get(
  "/doc-ui",
  cacheMiddleware({
    directives: ["public"],
  }),
  swaggerUI({ url: "/doc" }),
);

// biome-ignore lint/style/noDefaultExport: default export is used for bun
export default {
  port,
  fetch: app.fetch,
};
