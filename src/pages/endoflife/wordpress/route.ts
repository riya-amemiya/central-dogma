import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWordpressResponse200Schema } from "./schema";

export const endoflifeWordpressRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/wordpress",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWordpressResponse200Schema,
        },
      },
      description: "Get the Wordpress end-of-life information",
    },
  },
});
