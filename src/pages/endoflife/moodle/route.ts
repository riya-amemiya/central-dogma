import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMoodleResponse200Schema } from "./schema";

export const endoflifeMoodleRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/moodle",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMoodleResponse200Schema,
        },
      },
      description: "Get the Moodle end-of-life information",
    },
  },
});
