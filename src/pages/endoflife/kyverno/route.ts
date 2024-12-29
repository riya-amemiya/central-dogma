import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKyvernoResponse200Schema } from "./schema";

export const endoflifeKyvernoRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kyverno",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKyvernoResponse200Schema,
        },
      },
      description: "Get the Kyverno end-of-life information",
    },
  },
});
