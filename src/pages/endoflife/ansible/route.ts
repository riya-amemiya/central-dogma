import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAnsibleResponse200Schema } from "./schema";

export const endoflifeAnsibleRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ansible",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAnsibleResponse200Schema,
        },
      },
      description: "Get the Ansible end-of-life information",
    },
  },
});
