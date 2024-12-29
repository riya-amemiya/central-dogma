import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRubyResponse200Schema } from "./schema";

export const endoflifeRubyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ruby",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRubyResponse200Schema,
        },
      },
      description: "Get the Ruby end-of-life information",
    },
  },
});
