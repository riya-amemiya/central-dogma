import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetBeatsResponse200Schema } from "./schema";

export const endoflifeBeatsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/beats",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetBeatsResponse200Schema,
        },
      },
      description: "Get the Beats end-of-life information",
    },
  },
});
