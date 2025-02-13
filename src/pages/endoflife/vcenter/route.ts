import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVcenterResponse200Schema } from "./schema";

export const endoflifeVcenterRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/vcenter",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVcenterResponse200Schema,
        },
      },
      description: "Get the Vcenter end-of-life information",
    },
  },
});
