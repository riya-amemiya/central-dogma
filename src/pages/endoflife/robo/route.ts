import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetRoboResponse200Schema } from "./schema";

export const endoflifeRoboRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/robo",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRoboResponse200Schema,
        },
      },
      description: "Get the Robo end-of-life information",
    },
  },
});
