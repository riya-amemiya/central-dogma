import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetNokiaResponse200Schema } from "./schema";

export const endoflifeNokiaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nokia",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNokiaResponse200Schema,
        },
      },
      description: "Get the Nokia end-of-life information",
    },
  },
});
