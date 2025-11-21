import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetGstreamerResponse200Schema } from "./schema";

export const endoflifeGstreamerRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/gstreamer",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGstreamerResponse200Schema,
        },
      },
      description: "Get the Gstreamer end-of-life information",
    },
  },
});
