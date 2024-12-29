import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApiPlatformResponse200Schema } from "./schema";

export const endoflifeApiPlatformRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/api-platform",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApiPlatformResponse200Schema,
        },
      },
      description: "Get the ApiPlatform end-of-life information",
    },
  },
});
