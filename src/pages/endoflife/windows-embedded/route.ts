import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetWindowsEmbeddedResponse200Schema } from "./schema";

export const endoflifeWindowsEmbeddedRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/windows-embedded",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWindowsEmbeddedResponse200Schema,
        },
      },
      description: "Get the WindowsEmbedded end-of-life information",
    },
  },
});
