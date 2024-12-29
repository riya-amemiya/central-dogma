import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRailsResponse200Schema } from "./schema";

export const endoflifeRailsRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/rails",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRailsResponse200Schema,
        },
      },
      description: "Get the Rails end-of-life information",
    },
  },
});
