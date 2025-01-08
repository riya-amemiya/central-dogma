import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpensuseResponse200Schema } from "./schema";

export const endoflifeOpensuseRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/opensuse",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpensuseResponse200Schema,
        },
      },
      description: "Get the Opensuse end-of-life information",
    },
  },
});
