import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGerritResponse200Schema } from "./schema";

export const endoflifeGerritRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
