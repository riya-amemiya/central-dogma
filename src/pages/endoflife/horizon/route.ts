import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetHorizonResponse200Schema } from "./schema";

export const endoflifeHorizonRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/horizon",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetHorizonResponse200Schema,
        },
      },
      description: "Get the Horizon end-of-life information",
    },
  },
});
