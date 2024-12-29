import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSvelteResponse200Schema } from "./schema";

export const endoflifeSvelteRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
