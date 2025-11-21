import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetRabbitmqResponse200Schema } from "./schema";

export const endoflifeRabbitmqRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
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
