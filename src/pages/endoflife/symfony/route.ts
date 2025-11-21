import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSymfonyResponse200Schema } from "./schema";

export const endoflifeSymfonyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/symfony",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSymfonyResponse200Schema,
        },
      },
      description: "Get the Symfony end-of-life information",
    },
  },
});
