import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMicrosoftBuildOfOpenjdkResponse200Schema } from "./schema";

export const endoflifeMicrosoftBuildOfOpenjdkRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
