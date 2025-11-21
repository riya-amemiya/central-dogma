import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetOpenwrtResponse200Schema } from "./schema";

export const endoflifeOpenwrtRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/openwrt",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpenwrtResponse200Schema,
        },
      },
      description: "Get the Openwrt end-of-life information",
    },
  },
});
