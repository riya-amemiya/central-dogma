import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetNuxtResponse200Schema } from "./schema";

export const endoflifeNuxtRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nuxt",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNuxtResponse200Schema,
        },
      },
      description: "Get the Nuxt end-of-life information",
    },
  },
});
