import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAmazonRdsMariadbResponse200Schema } from "./schema";

export const endoflifeAmazonRdsMariadbRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-rds-mariadb",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonRdsMariadbResponse200Schema,
        },
      },
      description: "Get the AmazonRdsMariadb end-of-life information",
    },
  },
});
