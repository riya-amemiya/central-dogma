import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetReactResponse200Schema } from "./schema";

export const endoflifeReactRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/react",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetReactResponse200Schema,
        },
      },
      description: "Get the React end-of-life information",
    },
  },
});
