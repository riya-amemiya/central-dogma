import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVisionosResponse200Schema } from "./schema";

export const endoflifeVisionosRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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