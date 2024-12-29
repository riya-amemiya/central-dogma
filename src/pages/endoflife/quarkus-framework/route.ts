import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetQuarkusFrameworkResponse200Schema } from "./schema";

export const endoflifeQuarkusFrameworkRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/quarkus-framework",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetQuarkusFrameworkResponse200Schema,
        },
      },
      description: "Get the QuarkusFramework end-of-life information",
    },
  },
});
