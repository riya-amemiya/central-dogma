import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCakephpResponse200Schema } from "./schema";

export const endoflifeCakephpRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/cakephp",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCakephpResponse200Schema,
        },
      },
      description: "Get the Cakephp end-of-life information",
    },
  },
});
