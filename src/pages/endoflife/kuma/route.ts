import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKumaResponse200Schema } from "./schema";

export const endoflifeKumaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kuma",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKumaResponse200Schema,
        },
      },
      description: "Get the Kuma end-of-life information",
    },
  },
});
