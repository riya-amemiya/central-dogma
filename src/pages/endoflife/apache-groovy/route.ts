import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheGroovyResponse200Schema } from "./schema";

export const endoflifeApacheGroovyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-groovy",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheGroovyResponse200Schema,
        },
      },
      description: "Get the ApacheGroovy end-of-life information",
    },
  },
});
