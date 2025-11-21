import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetEclipseTemurinResponse200Schema } from "./schema";

export const endoflifeEclipseTemurinRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/eclipse-temurin",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEclipseTemurinResponse200Schema,
        },
      },
      description: "Get the EclipseTemurin end-of-life information",
    },
  },
});
