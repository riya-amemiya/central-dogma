import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetForgejoResponse200Schema } from "./schema";

export const endoflifeForgejoRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/forgejo",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetForgejoResponse200Schema,
        },
      },
      description: "Get the Forgejo end-of-life information",
    },
  },
});
