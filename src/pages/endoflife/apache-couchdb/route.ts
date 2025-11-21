import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetApacheCouchdbResponse200Schema } from "./schema";

export const endoflifeApacheCouchdbRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-couchdb",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheCouchdbResponse200Schema,
        },
      },
      description: "Get the ApacheCouchdb end-of-life information",
    },
  },
});
