import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetVisionosResponse200Schema } from "./schema";

export const endoflifeVisionosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/visionos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVisionosResponse200Schema,
        },
      },
      description: "Get the Visionos end-of-life information",
    },
  },
});
