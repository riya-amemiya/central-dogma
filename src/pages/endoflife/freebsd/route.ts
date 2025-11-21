import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetFreebsdResponse200Schema } from "./schema";

export const endoflifeFreebsdRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/freebsd",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFreebsdResponse200Schema,
        },
      },
      description: "Get the Freebsd end-of-life information",
    },
  },
});
