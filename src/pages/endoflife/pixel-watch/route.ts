import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPixelWatchResponse200Schema } from "./schema";

export const endoflifePixelWatchRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/pixel-watch",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPixelWatchResponse200Schema,
        },
      },
      description: "Get the PixelWatch end-of-life information",
    },
  },
});
