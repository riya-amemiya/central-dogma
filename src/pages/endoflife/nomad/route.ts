import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetNomadResponse200Schema } from "./schema";

export const endoflifeNomadRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nomad",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNomadResponse200Schema,
        },
      },
      description: "Get the Nomad end-of-life information",
    },
  },
});
