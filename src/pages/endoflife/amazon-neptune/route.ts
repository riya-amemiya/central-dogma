import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAmazonNeptuneResponse200Schema } from "./schema";

export const endoflifeAmazonNeptuneRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-neptune",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonNeptuneResponse200Schema,
        },
      },
      description: "Get the AmazonNeptune end-of-life information",
    },
  },
});
