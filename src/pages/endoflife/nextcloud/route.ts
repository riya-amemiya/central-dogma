import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetNextcloudResponse200Schema } from "./schema";

export const endoflifeNextcloudRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nextcloud",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNextcloudResponse200Schema,
        },
      },
      description: "Get the Nextcloud end-of-life information",
    },
  },
});
