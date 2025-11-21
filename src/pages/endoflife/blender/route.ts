import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetBlenderResponse200Schema } from "./schema";

export const endoflifeBlenderRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/blender",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetBlenderResponse200Schema,
        },
      },
      description: "Get the Blender end-of-life information",
    },
  },
});
