import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetCentosResponse200Schema } from "./schema";

export const endoflifeCentosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/centos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCentosResponse200Schema,
        },
      },
      description: "Get the Centos end-of-life information",
    },
  },
});
