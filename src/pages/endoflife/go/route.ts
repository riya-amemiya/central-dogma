import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGoResponse200Schema } from "./schema";

export const endoflifeGoRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/go",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGoResponse200Schema,
        },
      },
      description: "Get the Go end-of-life information",
    },
  },
});
