import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSplunkResponse200Schema } from "./schema";

export const endoflifeSplunkRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/splunk",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSplunkResponse200Schema,
        },
      },
      description: "Get the Splunk end-of-life information",
    },
  },
});