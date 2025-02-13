import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetReactNativeResponse200Schema } from "./schema";

export const endoflifeReactNativeRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
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
