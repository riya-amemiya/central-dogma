import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNeosResponse200Schema } from "./schema";

export const endoflifeNeosRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/neos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNeosResponse200Schema,
        },
      },
      description: "Get the Neos end-of-life information",
    },
  },
});
