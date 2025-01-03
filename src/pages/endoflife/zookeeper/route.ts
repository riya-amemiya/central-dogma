import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetZookeeperResponse200Schema } from "./schema";

export const endoflifeZookeeperRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/zookeeper",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetZookeeperResponse200Schema,
        },
      },
      description: "Get the Zookeeper end-of-life information",
    },
  },
});
