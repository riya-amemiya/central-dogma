import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheCassandraResponse200Schema } from "./schema";

export const endoflifeApacheCassandraRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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