import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetPostmarketosResponse200Schema } from "./schema";

export const endoflifePostmarketosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/postmarketos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPostmarketosResponse200Schema,
        },
      },
      description: "Get the Postmarketos end-of-life information",
    },
  },
});
