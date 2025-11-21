import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSilverstripeResponse200Schema } from "./schema";

export const endoflifeSilverstripeRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/silverstripe",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSilverstripeResponse200Schema,
        },
      },
      description: "Get the Silverstripe end-of-life information",
    },
  },
});
