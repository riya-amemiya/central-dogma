import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetIphoneResponse200Schema } from "./schema";

export const endoflifeIphoneRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/iphone",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIphoneResponse200Schema,
        },
      },
      description: "Get the Iphone end-of-life information",
    },
  },
});
