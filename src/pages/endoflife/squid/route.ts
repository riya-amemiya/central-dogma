import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSquidResponse200Schema } from "./schema";

export const endoflifeSquidRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
