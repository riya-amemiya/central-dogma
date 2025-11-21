import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetAmazonEksResponse200Schema } from "./schema";

export const endoflifeAmazonEksRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-eks",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonEksResponse200Schema,
        },
      },
      description: "Get the AmazonEks end-of-life information",
    },
  },
});
