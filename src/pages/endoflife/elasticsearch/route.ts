import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetElasticsearchResponse200Schema } from "./schema";

export const endoflifeElasticsearchRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
