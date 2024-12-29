import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetTwigResponse200Schema } from "./schema";

export const endoflifeTwigRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
