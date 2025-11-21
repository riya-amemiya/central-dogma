import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetApacheHopResponse200Schema } from "./schema";

export const endoflifeApacheHopRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-hop",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheHopResponse200Schema,
        },
      },
      description: "Get the ApacheHop end-of-life information",
    },
  },
});
