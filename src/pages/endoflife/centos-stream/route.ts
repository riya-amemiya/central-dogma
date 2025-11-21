import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetCentosStreamResponse200Schema } from "./schema";

export const endoflifeCentosStreamRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/centos-stream",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCentosStreamResponse200Schema,
        },
      },
      description: "Get the CentosStream end-of-life information",
    },
  },
});
