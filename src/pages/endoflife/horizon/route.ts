import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetHorizonResponse200Schema } from "./schema";

export const endoflifeHorizonRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/horizon",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetHorizonResponse200Schema,
        },
      },
      description: "Get the Horizon end-of-life information",
    },
  },
});
