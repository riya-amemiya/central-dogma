import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetTarantoolResponse200Schema } from "./schema";

export const endoflifeTarantoolRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/tarantool",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetTarantoolResponse200Schema,
        },
      },
      description: "Get the Tarantool end-of-life information",
    },
  },
});
