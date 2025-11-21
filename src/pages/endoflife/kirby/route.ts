import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetKirbyResponse200Schema } from "./schema";

export const endoflifeKirbyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kirby",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKirbyResponse200Schema,
        },
      },
      description: "Get the Kirby end-of-life information",
    },
  },
});
