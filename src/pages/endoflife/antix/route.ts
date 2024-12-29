import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAntixResponse200Schema } from "./schema";

export const endoflifeAntixRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/antix",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAntixResponse200Schema,
        },
      },
      description: "Get the Antix end-of-life information",
    },
  },
});
