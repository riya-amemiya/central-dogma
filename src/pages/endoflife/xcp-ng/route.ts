import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetXcpNgResponse200Schema } from "./schema";

export const endoflifeXcpNgRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/xcp-ng",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetXcpNgResponse200Schema,
        },
      },
      description: "Get the XcpNg end-of-life information",
    },
  },
});
