import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetKibanaResponse200Schema } from "./schema";

export const endoflifeKibanaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
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
