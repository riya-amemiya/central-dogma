import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRustResponse200Schema } from "./schema";

export const endoflifeRustRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/rust",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRustResponse200Schema,
        },
      },
      description: "Get the Rust end-of-life information",
    },
  },
});