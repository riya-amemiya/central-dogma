import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSpringBootResponse200Schema } from "./schema";

export const endoflifeSpringBootRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/spring-boot",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSpringBootResponse200Schema,
        },
      },
      description: "Get the SpringBoot end-of-life information",
    },
  },
});
