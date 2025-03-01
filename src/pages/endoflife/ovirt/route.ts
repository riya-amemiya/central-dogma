import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOvirtResponse200Schema } from "./schema";

export const endoflifeOvirtRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ovirt",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOvirtResponse200Schema,
        },
      },
      description: "Get the Ovirt end-of-life information",
    },
  },
});
