import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCalicoResponse200Schema } from "./schema";

export const endoflifeCalicoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/calico",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCalicoResponse200Schema,
        },
      },
      description: "Get the Calico end-of-life information",
    },
  },
});
