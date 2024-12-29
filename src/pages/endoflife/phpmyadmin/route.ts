import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPhpmyadminResponse200Schema } from "./schema";

export const endoflifePhpmyadminRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/phpmyadmin",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPhpmyadminResponse200Schema,
        },
      },
      description: "Get the Phpmyadmin end-of-life information",
    },
  },
});
