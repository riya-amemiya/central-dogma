import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheActivemqResponse200Schema } from "./schema";

export const endoflifeApacheActivemqRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
