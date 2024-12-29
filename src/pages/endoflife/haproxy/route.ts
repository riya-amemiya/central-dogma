import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetHaproxyResponse200Schema } from "./schema";

export const endoflifeHaproxyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/haproxy",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetHaproxyResponse200Schema,
        },
      },
      description: "Get the Haproxy end-of-life information",
    },
  },
});
