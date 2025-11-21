import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetControlmResponse200Schema } from "./schema";

export const endoflifeControlmRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/controlm",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetControlmResponse200Schema,
        },
      },
      description: "Get the Controlm end-of-life information",
    },
  },
});
