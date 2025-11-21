import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetNumpyResponse200Schema } from "./schema";

export const endoflifeNumpyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/numpy",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNumpyResponse200Schema,
        },
      },
      description: "Get the Numpy end-of-life information",
    },
  },
});
