import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWagtailResponse200Schema } from "./schema";

export const endoflifeWagtailRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/wagtail",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWagtailResponse200Schema,
        },
      },
      description: "Get the Wagtail end-of-life information",
    },
  },
});
