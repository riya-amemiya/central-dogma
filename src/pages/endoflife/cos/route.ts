import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCosResponse200Schema } from "./schema";

export const endoflifeCosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/cos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCosResponse200Schema,
        },
      },
      description: "Get the Cos end-of-life information",
    },
  },
});
