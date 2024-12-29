import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetBootstrapResponse200Schema } from "./schema";

export const endoflifeBootstrapRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/bootstrap",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetBootstrapResponse200Schema,
        },
      },
      description: "Get the Bootstrap end-of-life information",
    },
  },
});
