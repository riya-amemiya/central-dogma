import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetEclipseTemurinResponse200Schema } from "./schema";

export const endoflifeEclipseTemurinRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
