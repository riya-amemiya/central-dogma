import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKedaResponse200Schema } from "./schema";

export const endoflifeKedaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/keda",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKedaResponse200Schema,
        },
      },
      description: "Get the Keda end-of-life information",
    },
  },
});
