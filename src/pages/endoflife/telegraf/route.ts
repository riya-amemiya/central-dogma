import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetTelegrafResponse200Schema } from "./schema";

export const endoflifeTelegrafRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/telegraf",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetTelegrafResponse200Schema,
        },
      },
      description: "Get the Telegraf end-of-life information",
    },
  },
});
