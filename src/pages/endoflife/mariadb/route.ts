import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetMariadbResponse200Schema } from "./schema";

export const endoflifeMariadbRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mariadb",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMariadbResponse200Schema,
        },
      },
      description: "Get the Mariadb end-of-life information",
    },
  },
});
