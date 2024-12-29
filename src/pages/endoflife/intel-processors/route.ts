import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIntelProcessorsResponse200Schema } from "./schema";

export const endoflifeIntelProcessorsRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/intel-processors",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIntelProcessorsResponse200Schema,
        },
      },
      description: "Get the IntelProcessors end-of-life information",
    },
  },
});
