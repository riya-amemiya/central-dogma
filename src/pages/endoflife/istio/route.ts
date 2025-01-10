import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIstioResponse200Schema } from "./schema";

export const endoflifeIstioRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/istio",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIstioResponse200Schema,
        },
      },
      description: "Get the Istio end-of-life information",
    },
  },
});
