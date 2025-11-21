import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetComposerResponse200Schema } from "./schema";

export const endoflifeComposerRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/composer",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetComposerResponse200Schema,
        },
      },
      description: "Get the Composer end-of-life information",
    },
  },
});
