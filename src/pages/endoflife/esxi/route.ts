import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetEsxiResponse200Schema } from "./schema";

export const endoflifeEsxiRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/esxi",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEsxiResponse200Schema,
        },
      },
      description: "Get the Esxi end-of-life information",
    },
  },
});
