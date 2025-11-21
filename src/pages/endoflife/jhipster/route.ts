import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetJhipsterResponse200Schema } from "./schema";

export const endoflifeJhipsterRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/jhipster",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJhipsterResponse200Schema,
        },
      },
      description: "Get the Jhipster end-of-life information",
    },
  },
});
