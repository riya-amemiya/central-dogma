import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetJreleaserResponse200Schema } from "./schema";

export const endoflifeJreleaserRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/jreleaser",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJreleaserResponse200Schema,
        },
      },
      description: "Get the Jreleaser end-of-life information",
    },
  },
});
