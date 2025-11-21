import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetCoderResponse200Schema } from "./schema";

export const endoflifeCoderRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/coder",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCoderResponse200Schema,
        },
      },
      description: "Get the Coder end-of-life information",
    },
  },
});
