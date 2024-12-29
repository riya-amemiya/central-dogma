import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAnsibleCoreResponse200Schema } from "./schema";

export const endoflifeAnsibleCoreRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ansible-core",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAnsibleCoreResponse200Schema,
        },
      },
      description: "Get the AnsibleCore end-of-life information",
    },
  },
});
