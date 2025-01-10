import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGraalvmResponse200Schema } from "./schema";

export const endoflifeGraalvmRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/graalvm",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGraalvmResponse200Schema,
        },
      },
      description: "Get the Graalvm end-of-life information",
    },
  },
});
