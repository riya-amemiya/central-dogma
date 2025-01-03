import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRoboResponse200Schema } from "./schema";

export const endoflifeRoboRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
