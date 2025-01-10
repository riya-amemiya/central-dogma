import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetQuasarResponse200Schema } from "./schema";

export const endoflifeQuasarRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/quasar",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetQuasarResponse200Schema,
        },
      },
      description: "Get the Quasar end-of-life information",
    },
  },
});
