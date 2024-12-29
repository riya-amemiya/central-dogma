import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMeilisearchResponse200Schema } from "./schema";

export const endoflifeMeilisearchRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/meilisearch",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMeilisearchResponse200Schema,
        },
      },
      description: "Get the Meilisearch end-of-life information",
    },
  },
});
