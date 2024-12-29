import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMsexchangeResponse200Schema } from "./schema";

export const endoflifeMsexchangeRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/msexchange",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMsexchangeResponse200Schema,
        },
      },
      description: "Get the Msexchange end-of-life information",
    },
  },
});
