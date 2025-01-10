import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheApisixResponse200Schema } from "./schema";

export const endoflifeApacheApisixRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-apisix",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheApisixResponse200Schema,
        },
      },
      description: "Get the ApacheApisix end-of-life information",
    },
  },
});
