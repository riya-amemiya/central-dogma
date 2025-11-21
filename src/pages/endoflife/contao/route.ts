import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetContaoResponse200Schema } from "./schema";

export const endoflifeContaoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/contao",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetContaoResponse200Schema,
        },
      },
      description: "Get the Contao end-of-life information",
    },
  },
});
