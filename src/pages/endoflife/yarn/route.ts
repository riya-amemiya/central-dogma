import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetYarnResponse200Schema } from "./schema";

export const endoflifeYarnRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/yarn",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetYarnResponse200Schema,
        },
      },
      description: "Get the Yarn end-of-life information",
    },
  },
});
