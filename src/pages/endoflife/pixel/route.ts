import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPixelResponse200Schema } from "./schema";

export const endoflifePixelRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/pixel",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPixelResponse200Schema,
        },
      },
      description: "Get the Pixel end-of-life information",
    },
  },
});
