import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDceResponse200Schema } from "./schema";

export const endoflifeDceRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/dce",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDceResponse200Schema,
        },
      },
      description: "Get the Dce end-of-life information",
    },
  },
});
