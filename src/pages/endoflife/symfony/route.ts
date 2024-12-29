import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSymfonyResponse200Schema } from "./schema";

export const endoflifeSymfonyRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/symfony",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSymfonyResponse200Schema,
        },
      },
      description: "Get the Symfony end-of-life information",
    },
  },
});