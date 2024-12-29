import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheLuceneResponse200Schema } from "./schema";

export const endoflifeApacheLuceneRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-lucene",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheLuceneResponse200Schema,
        },
      },
      description: "Get the ApacheLucene end-of-life information",
    },
  },
});
