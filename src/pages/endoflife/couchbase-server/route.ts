import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCouchbaseServerResponse200Schema } from "./schema";

export const endoflifeCouchbaseServerRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/couchbase-server",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCouchbaseServerResponse200Schema,
        },
      },
      description: "Get the CouchbaseServer end-of-life information",
    },
  },
});
