import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAlibabaDragonwellResponse200Schema } from "./schema";

export const endoflifeAlibabaDragonwellRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/alibaba-dragonwell",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAlibabaDragonwellResponse200Schema,
        },
      },
      description: "Get the AlibabaDragonwell end-of-life information",
    },
  },
});
