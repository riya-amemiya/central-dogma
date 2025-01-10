import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetUnrealircdResponse200Schema } from "./schema";

export const endoflifeUnrealircdRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/unrealircd",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetUnrealircdResponse200Schema,
        },
      },
      description: "Get the Unrealircd end-of-life information",
    },
  },
});
