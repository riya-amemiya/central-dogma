import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNodejsResponse200Schema } from "./schema";

export const endoflifeNodejsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nodejs",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNodejsResponse200Schema,
        },
      },
      description: "Get the Nodejs end-of-life information",
    },
  },
});
