import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetMsexchangeResponse200Schema } from "./schema";

export const endoflifeMsexchangeRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/msexchange",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMsexchangeResponse200Schema,
        },
      },
      description: "Get the Msexchange end-of-life information",
    },
  },
});
