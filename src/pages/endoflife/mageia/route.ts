import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMageiaResponse200Schema } from "./schema";

export const endoflifeMageiaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mageia",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMageiaResponse200Schema,
        },
      },
      description: "Get the Mageia end-of-life information",
    },
  },
});
