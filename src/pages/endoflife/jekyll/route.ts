import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetJekyllResponse200Schema } from "./schema";

export const endoflifeJekyllRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/jekyll",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJekyllResponse200Schema,
        },
      },
      description: "Get the Jekyll end-of-life information",
    },
  },
});
