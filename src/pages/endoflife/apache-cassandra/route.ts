import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetApacheCassandraResponse200Schema } from "./schema";

export const endoflifeApacheCassandraRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-cassandra",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheCassandraResponse200Schema,
        },
      },
      description: "Get the ApacheCassandra end-of-life information",
    },
  },
});
