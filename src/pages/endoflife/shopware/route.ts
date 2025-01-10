import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetShopwareResponse200Schema } from "./schema";

export const endoflifeShopwareRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/shopware",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetShopwareResponse200Schema,
        },
      },
      description: "Get the Shopware end-of-life information",
    },
  },
});
