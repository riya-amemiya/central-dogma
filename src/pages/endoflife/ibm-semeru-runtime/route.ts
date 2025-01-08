import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIbmSemeruRuntimeResponse200Schema } from "./schema";

export const endoflifeIbmSemeruRuntimeRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ibm-semeru-runtime",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIbmSemeruRuntimeResponse200Schema,
        },
      },
      description: "Get the IbmSemeruRuntime end-of-life information",
    },
  },
});
