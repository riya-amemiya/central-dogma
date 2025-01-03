import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetTerraformResponse200Schema } from "./schema";

export const endoflifeTerraformRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
