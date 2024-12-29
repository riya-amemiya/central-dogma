import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpenzfsResponse200Schema } from "./schema";

export const endoflifeOpenzfsRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/openzfs",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpenzfsResponse200Schema,
        },
      },
      description: "Get the Openzfs end-of-life information",
    },
  },
});
