import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAmazonCdkResponse200Schema } from "./schema";

export const endoflifeAmazonCdkRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-cdk",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonCdkResponse200Schema,
        },
      },
      description: "Get the AmazonCdk end-of-life information",
    },
  },
});
