import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheStrutsResponse200Schema } from "./schema";

export const endoflifeApacheStrutsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-struts",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheStrutsResponse200Schema,
        },
      },
      description: "Get the ApacheStruts end-of-life information",
    },
  },
});
