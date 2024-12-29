import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRedhatBuildOfOpenjdkResponse200Schema } from "./schema";

export const endoflifeRedhatBuildOfOpenjdkRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
