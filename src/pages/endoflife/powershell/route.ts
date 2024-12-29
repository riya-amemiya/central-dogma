import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPowershellResponse200Schema } from "./schema";

export const endoflifePowershellRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/powershell",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPowershellResponse200Schema,
        },
      },
      description: "Get the Powershell end-of-life information",
    },
  },
});
