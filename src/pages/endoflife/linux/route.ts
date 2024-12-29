import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetLinuxResponse200Schema } from "./schema";

export const endoflifeLinuxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/linux",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLinuxResponse200Schema,
        },
      },
      description: "Get the Linux end-of-life information",
    },
  },
});
