import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetFluxResponse200Schema } from "./schema";

export const endoflifeFluxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/flux",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFluxResponse200Schema,
        },
      },
      description: "Get the Flux end-of-life information",
    },
  },
});
