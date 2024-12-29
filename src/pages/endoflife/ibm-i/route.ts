import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIbmIResponse200Schema } from "./schema";

export const endoflifeIbmIRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ibm-i",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIbmIResponse200Schema,
        },
      },
      description: "Get the IbmI end-of-life information",
    },
  },
});
