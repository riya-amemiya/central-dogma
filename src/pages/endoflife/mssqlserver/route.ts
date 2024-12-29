import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMssqlserverResponse200Schema } from "./schema";

export const endoflifeMssqlserverRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mssqlserver",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMssqlserverResponse200Schema,
        },
      },
      description: "Get the Mssqlserver end-of-life information",
    },
  },
});
