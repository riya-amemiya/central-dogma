import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGhcResponse200Schema } from "./schema";

export const endoflifeGhcRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ghc",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGhcResponse200Schema,
        },
      },
      description: "Get the Ghc end-of-life information",
    },
  },
});
