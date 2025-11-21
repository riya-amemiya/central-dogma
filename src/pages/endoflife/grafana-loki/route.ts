import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetGrafanaLokiResponse200Schema } from "./schema";

export const endoflifeGrafanaLokiRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/grafana-loki",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGrafanaLokiResponse200Schema,
        },
      },
      description: "Get the GrafanaLoki end-of-life information",
    },
  },
});
