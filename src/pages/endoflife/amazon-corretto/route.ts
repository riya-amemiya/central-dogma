import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAmazonCorrettoResponse200Schema } from "./schema";

export const endoflifeAmazonCorrettoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-corretto",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonCorrettoResponse200Schema,
        },
      },
      description: "Get the AmazonCorretto end-of-life information",
    },
  },
});
