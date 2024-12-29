import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetLog4jResponse200Schema as GetLog4indexResponse200Schema } from "./schema";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const endoflifeLog4jRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/log4j",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLog4indexResponse200Schema,
        },
      },
      description: "Get the Log4j end-of-life information",
    },
  },
});
