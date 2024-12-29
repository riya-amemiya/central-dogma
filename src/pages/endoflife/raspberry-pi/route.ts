import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRaspberryPiResponse200Schema } from "./schema";

export const endoflifeRaspberryPiRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
