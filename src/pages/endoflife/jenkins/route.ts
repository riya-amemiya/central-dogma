import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetJenkinsResponse200Schema } from "./schema";

export const endoflifeJenkinsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/jenkins",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJenkinsResponse200Schema,
        },
      },
      description: "Get the Jenkins end-of-life information",
    },
  },
});
