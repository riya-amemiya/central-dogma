import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKdePlasmaResponse200Schema } from "./schema";

export const endoflifeKdePlasmaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kde-plasma",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKdePlasmaResponse200Schema,
        },
      },
      description: "Get the KdePlasma end-of-life information",
    },
  },
});
