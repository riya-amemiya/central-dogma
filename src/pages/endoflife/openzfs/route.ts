import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetOpenzfsResponse200Schema } from "./schema";

export const endoflifeOpenzfsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/openzfs",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpenzfsResponse200Schema,
        },
      },
      description: "Get the Openzfs end-of-life information",
    },
  },
});
