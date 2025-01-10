import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpenbsdResponse200Schema } from "./schema";

export const endoflifeOpenbsdRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/openbsd",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpenbsdResponse200Schema,
        },
      },
      description: "Get the Openbsd end-of-life information",
    },
  },
});
