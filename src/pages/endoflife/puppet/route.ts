import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPuppetResponse200Schema } from "./schema";

export const endoflifePuppetRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/puppet",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPuppetResponse200Schema,
        },
      },
      description: "Get the Puppet end-of-life information",
    },
  },
});
