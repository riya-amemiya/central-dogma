import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIpadResponse200Schema } from "./schema";

export const endoflifeIpadRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ipad",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIpadResponse200Schema,
        },
      },
      description: "Get the Ipad end-of-life information",
    },
  },
});
