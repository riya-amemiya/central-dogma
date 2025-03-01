import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPopOsResponse200Schema } from "./schema";

export const endoflifePopOsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/pop-os",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPopOsResponse200Schema,
        },
      },
      description: "Get the PopOs end-of-life information",
    },
  },
});
