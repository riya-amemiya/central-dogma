import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetBellsoftLibericaResponse200Schema } from "./schema";

export const endoflifeBellsoftLibericaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/bellsoft-liberica",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetBellsoftLibericaResponse200Schema,
        },
      },
      description: "Get the BellsoftLiberica end-of-life information",
    },
  },
});
