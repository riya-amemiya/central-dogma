import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSvelteResponse200Schema } from "./schema";

export const endoflifeSvelteRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/svelte",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSvelteResponse200Schema,
        },
      },
      description: "Get the Svelte end-of-life information",
    },
  },
});
