import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetJreleaserResponse200Schema } from "./schema";

export const endoflifeJreleaserRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
