import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetColdfusionResponse200Schema } from "./schema";

export const endoflifeColdfusionRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/coldfusion",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetColdfusionResponse200Schema,
        },
      },
      description: "Get the Coldfusion end-of-life information",
    },
  },
});
