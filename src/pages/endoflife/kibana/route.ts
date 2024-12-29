import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKibanaResponse200Schema } from "./schema";

export const endoflifeKibanaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kibana",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKibanaResponse200Schema,
        },
      },
      description: "Get the Kibana end-of-life information",
    },
  },
});
