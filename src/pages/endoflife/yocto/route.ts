import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetYoctoResponse200Schema } from "./schema";

export const endoflifeYoctoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/yocto",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetYoctoResponse200Schema,
        },
      },
      description: "Get the Yocto end-of-life information",
    },
  },
});
