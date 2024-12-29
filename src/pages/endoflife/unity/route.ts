import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetUnityResponse200Schema } from "./schema";

export const endoflifeUnityRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
