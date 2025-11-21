import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetGerritResponse200Schema } from "./schema";

export const endoflifeGerritRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/gerrit",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGerritResponse200Schema,
        },
      },
      description: "Get the Gerrit end-of-life information",
    },
  },
});
