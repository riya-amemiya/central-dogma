import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetHarborResponse200Schema } from "./schema";

export const endoflifeHarborRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/harbor",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetHarborResponse200Schema,
        },
      },
      description: "Get the Harbor end-of-life information",
    },
  },
});
