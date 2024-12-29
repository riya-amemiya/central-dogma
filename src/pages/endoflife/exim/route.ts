import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetEximResponse200Schema } from "./schema";

export const endoflifeEximRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/exim",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEximResponse200Schema,
        },
      },
      description: "Get the Exim end-of-life information",
    },
  },
});