import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetForgejoResponse200Schema } from "./schema";

export const endoflifeForgejoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/forgejo",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetForgejoResponse200Schema,
        },
      },
      description: "Get the Forgejo end-of-life information",
    },
  },
});
