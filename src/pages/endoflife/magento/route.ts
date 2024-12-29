import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMagentoResponse200Schema } from "./schema";

export const endoflifeMagentoRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/magento",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMagentoResponse200Schema,
        },
      },
      description: "Get the Magento end-of-life information",
    },
  },
});
