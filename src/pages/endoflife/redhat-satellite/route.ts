import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRedhatSatelliteResponse200Schema } from "./schema";

export const endoflifeRedhatSatelliteRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/redhat-satellite",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRedhatSatelliteResponse200Schema,
        },
      },
      description: "Get the RedhatSatellite end-of-life information",
    },
  },
});
