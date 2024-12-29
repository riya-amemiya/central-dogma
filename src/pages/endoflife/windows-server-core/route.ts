import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWindowsServerCoreResponse200Schema } from "./schema";

export const endoflifeWindowsServerCoreRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/windows-server-core",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWindowsServerCoreResponse200Schema,
        },
      },
      description: "Get the WindowsServerCore end-of-life information",
    },
  },
});
