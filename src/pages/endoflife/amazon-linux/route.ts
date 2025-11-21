import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetAmazonLinuxResponse200Schema } from "./schema";

export const endoflifeAmazonLinuxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-linux",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonLinuxResponse200Schema,
        },
      },
      description: "Get the AmazonLinux end-of-life information",
    },
  },
});
