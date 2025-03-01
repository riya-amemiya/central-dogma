import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDependencyTrackResponse200Schema } from "./schema";

export const endoflifeDependencyTrackRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/dependency-track",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDependencyTrackResponse200Schema,
        },
      },
      description: "Get the DependencyTrack end-of-life information",
    },
  },
});
