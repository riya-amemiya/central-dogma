import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetAmazonGlueResponse200Schema } from "./schema";

export const endoflifeAmazonGlueRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-glue",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonGlueResponse200Schema,
        },
      },
      description: "Get the AmazonGlue end-of-life information",
    },
  },
});
