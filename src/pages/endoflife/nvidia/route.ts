import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNvidiaResponse200Schema } from "./schema";

export const endoflifeNvidiaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nvidia",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNvidiaResponse200Schema,
        },
      },
      description: "Get the Nvidia end-of-life information",
    },
  },
});
