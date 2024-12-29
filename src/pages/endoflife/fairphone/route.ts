import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFairphoneResponse200Schema } from "./schema";

export const endoflifeFairphoneRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/fairphone",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFairphoneResponse200Schema,
        },
      },
      description: "Get the Fairphone end-of-life information",
    },
  },
});