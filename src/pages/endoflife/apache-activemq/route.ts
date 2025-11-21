import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetApacheActivemqResponse200Schema } from "./schema";

export const endoflifeApacheActivemqRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-activemq",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheActivemqResponse200Schema,
        },
      },
      description: "Get the ApacheActivemq end-of-life information",
    },
  },
});
