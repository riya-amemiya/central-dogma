import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetEtcdResponse200Schema } from "./schema";

export const endoflifeEtcdRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/etcd",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEtcdResponse200Schema,
        },
      },
      description: "Get the Etcd end-of-life information",
    },
  },
});
