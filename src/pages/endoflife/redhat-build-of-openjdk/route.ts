import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetRedhatBuildOfOpenjdkResponse200Schema } from "./schema";

export const endoflifeRedhatBuildOfOpenjdkRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/redhat-build-of-openjdk",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRedhatBuildOfOpenjdkResponse200Schema,
        },
      },
      description: "Get the RedhatBuildOfOpenjdk end-of-life information",
    },
  },
});
