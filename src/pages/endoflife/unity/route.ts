import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetUnityResponse200Schema } from "./schema";

export const endoflifeUnityRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/unity",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetUnityResponse200Schema,
        },
      },
      description: "Get the Unity end-of-life information",
    },
  },
});
