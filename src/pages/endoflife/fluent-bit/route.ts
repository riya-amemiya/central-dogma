import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFluentBitResponse200Schema } from "./schema";

export const endoflifeFluentBitRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/fluent-bit",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFluentBitResponse200Schema,
        },
      },
      description: "Get the FluentBit end-of-life information",
    },
  },
});
