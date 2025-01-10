import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGrafanaResponse200Schema } from "./schema";

export const endoflifeGrafanaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/grafana",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGrafanaResponse200Schema,
        },
      },
      description: "Get the Grafana end-of-life information",
    },
  },
});
