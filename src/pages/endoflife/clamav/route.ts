import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetClamavResponse200Schema } from "./schema";

export const endoflifeClamavRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/clamav",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetClamavResponse200Schema,
        },
      },
      description: "Get the Clamav end-of-life information",
    },
  },
});
