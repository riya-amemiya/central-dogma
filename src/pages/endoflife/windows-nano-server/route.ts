import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWindowsNanoServerResponse200Schema } from "./schema";

export const endoflifeWindowsNanoServerRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/windows-nano-server",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWindowsNanoServerResponse200Schema,
        },
      },
      description: "Get the WindowsNanoServer end-of-life information",
    },
  },
});
