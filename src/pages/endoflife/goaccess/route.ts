import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGoaccessResponse200Schema } from "./schema";

export const endoflifeGoaccessRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/goaccess",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGoaccessResponse200Schema,
        },
      },
      description: "Get the Goaccess end-of-life information",
    },
  },
});
