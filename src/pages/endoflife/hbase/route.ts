import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetHbaseResponse200Schema } from "./schema";

export const endoflifeHbaseRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/hbase",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetHbaseResponse200Schema,
        },
      },
      description: "Get the Hbase end-of-life information",
    },
  },
});
