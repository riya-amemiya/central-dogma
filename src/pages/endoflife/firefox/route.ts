import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFirefoxResponse200Schema } from "./schema";

export const endoflifeFirefoxRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/firefox",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFirefoxResponse200Schema,
        },
      },
      description: "Get the Firefox end-of-life information",
    },
  },
});
