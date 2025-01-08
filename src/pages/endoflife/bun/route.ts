import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetBunResponse200Schema } from "./schema";

export const endoflifeBunRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/bun",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetBunResponse200Schema,
        },
      },
      description: "Get the Bun end-of-life information",
    },
  },
});
