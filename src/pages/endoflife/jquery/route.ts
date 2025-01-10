import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetJqueryResponse200Schema } from "./schema";

export const endoflifeJqueryRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/jquery",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJqueryResponse200Schema,
        },
      },
      description: "Get the Jquery end-of-life information",
    },
  },
});
