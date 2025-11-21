import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetApacheKafkaResponse200Schema } from "./schema";

export const endoflifeApacheKafkaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-kafka",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheKafkaResponse200Schema,
        },
      },
      description: "Get the ApacheKafka end-of-life information",
    },
  },
});
