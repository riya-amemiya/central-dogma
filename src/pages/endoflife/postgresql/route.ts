import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPostgresqlResponse200Schema } from "./schema";

export const endoflifePostgresqlRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/postgresql",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPostgresqlResponse200Schema,
        },
      },
      description: "Get the Postgresql end-of-life information",
    },
  },
});