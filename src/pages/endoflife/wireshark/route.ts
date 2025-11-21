import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetWiresharkResponse200Schema } from "./schema";

export const endoflifeWiresharkRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/wireshark",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWiresharkResponse200Schema,
        },
      },
      description: "Get the Wireshark end-of-life information",
    },
  },
});
