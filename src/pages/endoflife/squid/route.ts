import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSquidResponse200Schema } from "./schema";

export const endoflifeSquidRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/squid",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSquidResponse200Schema,
        },
      },
      description: "Get the Squid end-of-life information",
    },
  },
});
