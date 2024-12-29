import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMicronautResponse200Schema } from "./schema";

export const endoflifeMicronautRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/micronaut",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMicronautResponse200Schema,
        },
      },
      description: "Get the Micronaut end-of-life information",
    },
  },
});
