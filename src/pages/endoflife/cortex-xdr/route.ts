import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCortexXdrResponse200Schema } from "./schema";

export const endoflifeCortexXdrRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/cortex-xdr",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCortexXdrResponse200Schema,
        },
      },
      description: "Get the CortexXdr end-of-life information",
    },
  },
});
