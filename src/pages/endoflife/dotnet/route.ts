import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDotnetResponse200Schema } from "./schema";

export const endoflifeDotnetRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/dotnet",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDotnetResponse200Schema,
        },
      },
      description: "Get the Dotnet end-of-life information",
    },
  },
});
