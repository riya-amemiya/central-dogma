import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPhpResponse200Schema } from "./schema";

export const endoflifePhpRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/php",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPhpResponse200Schema,
        },
      },
      description: "Get the Php end-of-life information",
    },
  },
});
