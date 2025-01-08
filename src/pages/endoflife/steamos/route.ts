import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSteamosResponse200Schema } from "./schema";

export const endoflifeSteamosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/steamos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSteamosResponse200Schema,
        },
      },
      description: "Get the Steamos end-of-life information",
    },
  },
});
