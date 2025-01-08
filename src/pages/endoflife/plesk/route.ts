import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPleskResponse200Schema } from "./schema";

export const endoflifePleskRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/plesk",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPleskResponse200Schema,
        },
      },
      description: "Get the Plesk end-of-life information",
    },
  },
});
