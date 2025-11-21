import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetMicrosoftBuildOfOpenjdkResponse200Schema } from "./schema";

export const endoflifeMicrosoftBuildOfOpenjdkRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/microsoft-build-of-openjdk",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMicrosoftBuildOfOpenjdkResponse200Schema,
        },
      },
      description: "Get the MicrosoftBuildOfOpenjdk end-of-life information",
    },
  },
});
