import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpensearchResponse200Schema } from "./schema";

export const endoflifeOpensearchRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/opensearch",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpensearchResponse200Schema,
        },
      },
      description: "Get the Opensearch end-of-life information",
    },
  },
});
