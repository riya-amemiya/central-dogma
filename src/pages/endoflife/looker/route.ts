import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetLookerResponse200Schema } from "./schema";

export const endoflifeLookerRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/looker",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLookerResponse200Schema,
        },
      },
      description: "Get the Looker end-of-life information",
    },
  },
});
