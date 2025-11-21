import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSurfaceResponse200Schema } from "./schema";

export const endoflifeSurfaceRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/surface",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSurfaceResponse200Schema,
        },
      },
      description: "Get the Surface end-of-life information",
    },
  },
});
