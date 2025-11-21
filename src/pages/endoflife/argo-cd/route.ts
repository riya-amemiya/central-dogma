import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetArgoCdResponse200Schema } from "./schema";

export const endoflifeArgoCdRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/argo-cd",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetArgoCdResponse200Schema,
        },
      },
      description: "Get the ArgoCd end-of-life information",
    },
  },
});
