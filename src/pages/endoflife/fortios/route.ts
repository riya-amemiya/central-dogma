import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFortiosResponse200Schema } from "./schema";

export const endoflifeFortiosRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/fortios",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFortiosResponse200Schema,
        },
      },
      description: "Get the Fortios end-of-life information",
    },
  },
});
