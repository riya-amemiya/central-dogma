import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSolrResponse200Schema } from "./schema";

export const endoflifeSolrRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
