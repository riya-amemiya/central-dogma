import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSlackwareResponse200Schema } from "./schema";

export const endoflifeSlackwareRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/slackware",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSlackwareResponse200Schema,
        },
      },
      description: "Get the Slackware end-of-life information",
    },
  },
});