import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetTwigResponse200Schema } from "./schema";

export const endoflifeTwigRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/twig",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetTwigResponse200Schema,
        },
      },
      description: "Get the Twig end-of-life information",
    },
  },
});
