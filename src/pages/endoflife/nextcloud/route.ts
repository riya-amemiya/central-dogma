import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNextcloudResponse200Schema } from "./schema";

export const endoflifeNextcloudRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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