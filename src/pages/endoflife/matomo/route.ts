import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMatomoResponse200Schema } from "./schema";

export const endoflifeMatomoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/matomo",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMatomoResponse200Schema,
        },
      },
      description: "Get the Matomo end-of-life information",
    },
  },
});
