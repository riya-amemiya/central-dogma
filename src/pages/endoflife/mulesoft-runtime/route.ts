import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMulesoftRuntimeResponse200Schema } from "./schema";

export const endoflifeMulesoftRuntimeRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mulesoft-runtime",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMulesoftRuntimeResponse200Schema,
        },
      },
      description: "Get the MulesoftRuntime end-of-life information",
    },
  },
});
