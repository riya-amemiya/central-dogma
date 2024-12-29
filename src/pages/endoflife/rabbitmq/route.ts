import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRabbitmqResponse200Schema } from "./schema";

export const endoflifeRabbitmqRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/rabbitmq",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRabbitmqResponse200Schema,
        },
      },
      description: "Get the Rabbitmq end-of-life information",
    },
  },
});
