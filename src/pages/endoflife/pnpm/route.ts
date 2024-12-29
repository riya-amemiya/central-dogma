import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPnpmResponse200Schema } from "./schema";

export const endoflifePnpmRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/pnpm",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPnpmResponse200Schema,
        },
      },
      description: "Get the Pnpm end-of-life information",
    },
  },
});
