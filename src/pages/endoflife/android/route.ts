import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAndroidResponse200Schema } from "./schema";

export const endoflifeAndroidRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/android",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAndroidResponse200Schema,
        },
      },
      description: "Get the Android end-of-life information",
    },
  },
});
