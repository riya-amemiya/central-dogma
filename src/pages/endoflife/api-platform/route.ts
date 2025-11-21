import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetApiPlatformResponse200Schema } from "./schema";

export const endoflifeApiPlatformRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
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
