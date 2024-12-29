import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNuxtResponse200Schema } from "./schema";

export const endoflifeNuxtRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
