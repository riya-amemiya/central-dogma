import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWindowsResponse200Schema } from "./schema";

export const endoflifeWindowsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/windows",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWindowsResponse200Schema,
        },
      },
      description: "Get the Windows end-of-life information",
    },
  },
});
