import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetQtResponse200Schema } from "./schema";

export const endoflifeQtRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/qt",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetQtResponse200Schema,
        },
      },
      description: "Get the Qt end-of-life information",
    },
  },
});
