import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSubversionResponse200Schema } from "./schema";

export const endoflifeSubversionRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/subversion",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSubversionResponse200Schema,
        },
      },
      description: "Get the Subversion end-of-life information",
    },
  },
});
