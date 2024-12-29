import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPangpResponse200Schema } from "./schema";

export const endoflifePangpRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/pangp",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPangpResponse200Schema,
        },
      },
      description: "Get the Pangp end-of-life information",
    },
  },
});
