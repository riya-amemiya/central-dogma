import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetMeilisearchResponse200Schema } from "./schema";

export const endoflifeMeilisearchRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
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
