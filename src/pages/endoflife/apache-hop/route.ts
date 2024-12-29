import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheHopResponse200Schema } from "./schema";

export const endoflifeApacheHopRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
