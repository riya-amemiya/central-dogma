import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMandrelResponse200Schema } from "./schema";

export const endoflifeMandrelRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mandrel",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMandrelResponse200Schema,
        },
      },
      description: "Get the Mandrel end-of-life information",
    },
  },
});
