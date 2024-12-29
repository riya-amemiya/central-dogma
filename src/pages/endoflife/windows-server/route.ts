import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWindowsServerResponse200Schema } from "./schema";

export const endoflifeWindowsServerRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/windows-server",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWindowsServerResponse200Schema,
        },
      },
      description: "Get the WindowsServer end-of-life information",
    },
  },
});
