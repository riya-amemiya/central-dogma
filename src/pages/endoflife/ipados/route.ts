import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIpadosResponse200Schema } from "./schema";

export const endoflifeIpadosRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ipados",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIpadosResponse200Schema,
        },
      },
      description: "Get the Ipados end-of-life information",
    },
  },
});
