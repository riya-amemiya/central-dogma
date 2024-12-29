import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetZentyalResponse200Schema } from "./schema";

export const endoflifeZentyalRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/zentyal",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetZentyalResponse200Schema,
        },
      },
      description: "Get the Zentyal end-of-life information",
    },
  },
});