import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCentosResponse200Schema } from "./schema";

export const endoflifeCentosRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
