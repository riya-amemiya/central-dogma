import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSaltResponse200Schema } from "./schema";

export const endoflifeSaltRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/salt",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSaltResponse200Schema,
        },
      },
      description: "Get the Salt end-of-life information",
    },
  },
});
