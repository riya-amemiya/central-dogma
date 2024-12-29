import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetEnvoyResponse200Schema } from "./schema";

export const endoflifeEnvoyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/envoy",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEnvoyResponse200Schema,
        },
      },
      description: "Get the Envoy end-of-life information",
    },
  },
});
