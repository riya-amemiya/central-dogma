import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetElasticsearchResponse200Schema } from "./schema";

export const endoflifeElasticsearchRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/elasticsearch",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetElasticsearchResponse200Schema,
        },
      },
      description: "Get the Elasticsearch end-of-life information",
    },
  },
});
