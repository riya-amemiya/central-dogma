import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFreebsdResponse200Schema } from "./schema";

export const endoflifeFreebsdRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
