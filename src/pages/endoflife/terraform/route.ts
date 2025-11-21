import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetTerraformResponse200Schema } from "./schema";

export const endoflifeTerraformRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/terraform",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetTerraformResponse200Schema,
        },
      },
      description: "Get the Terraform end-of-life information",
    },
  },
});
