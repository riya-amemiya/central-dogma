import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAngularjsResponse200Schema } from "./schema";

export const endoflifeAngularjsRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/angularjs",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAngularjsResponse200Schema,
        },
      },
      description: "Get the Angularjs end-of-life information",
    },
  },
});
