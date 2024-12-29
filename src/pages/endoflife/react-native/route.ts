import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetReactNativeResponse200Schema } from "./schema";

export const endoflifeReactNativeRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/react-native",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetReactNativeResponse200Schema,
        },
      },
      description: "Get the ReactNative end-of-life information",
    },
  },
});
