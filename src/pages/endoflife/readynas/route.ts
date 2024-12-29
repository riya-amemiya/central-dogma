import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetReadynasResponse200Schema } from "./schema";

export const endoflifeReadynasRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/readynas",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetReadynasResponse200Schema,
        },
      },
      description: "Get the Readynas end-of-life information",
    },
  },
});
