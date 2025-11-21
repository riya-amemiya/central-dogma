import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetCakephpResponse200Schema } from "./schema";

export const endoflifeCakephpRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/cakephp",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCakephpResponse200Schema,
        },
      },
      description: "Get the Cakephp end-of-life information",
    },
  },
});
