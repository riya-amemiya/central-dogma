import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetPhpbbResponse200Schema } from "./schema";

export const endoflifePhpbbRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/phpbb",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPhpbbResponse200Schema,
        },
      },
      description: "Get the Phpbb end-of-life information",
    },
  },
});
