import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSolrResponse200Schema } from "./schema";

export const endoflifeSolrRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/solr",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSolrResponse200Schema,
        },
      },
      description: "Get the Solr end-of-life information",
    },
  },
});
