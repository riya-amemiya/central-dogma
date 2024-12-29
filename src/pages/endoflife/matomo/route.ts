import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMatomoResponse200Schema } from "./schema";

export const endoflifeMatomoRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
