import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheCamelResponse200Schema } from "./schema";

export const endoflifeApacheCamelRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-camel",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheCamelResponse200Schema,
        },
      },
      description: "Get the ApacheCamel end-of-life information",
    },
  },
});
