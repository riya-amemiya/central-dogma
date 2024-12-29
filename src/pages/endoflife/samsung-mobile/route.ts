import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSamsungMobileResponse200Schema } from "./schema";

export const endoflifeSamsungMobileRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/samsung-mobile",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSamsungMobileResponse200Schema,
        },
      },
      description: "Get the SamsungMobile end-of-life information",
    },
  },
});
