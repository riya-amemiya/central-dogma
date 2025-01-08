import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRosResponse200Schema } from "./schema";

export const endoflifeRosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ros",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRosResponse200Schema,
        },
      },
      description: "Get the Ros end-of-life information",
    },
  },
});
