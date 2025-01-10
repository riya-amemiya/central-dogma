import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMacosResponse200Schema } from "./schema";

export const endoflifeMacosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/macos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMacosResponse200Schema,
        },
      },
      description: "Get the Macos end-of-life information",
    },
  },
});
