import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetRaspberryPiResponse200Schema } from "./schema";

export const endoflifeRaspberryPiRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/raspberry-pi",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRaspberryPiResponse200Schema,
        },
      },
      description: "Get the RaspberryPi end-of-life information",
    },
  },
});
