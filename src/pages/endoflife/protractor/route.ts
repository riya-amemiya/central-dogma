import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetProtractorResponse200Schema } from "./schema";

export const endoflifeProtractorRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/protractor",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetProtractorResponse200Schema,
        },
      },
      description: "Get the Protractor end-of-life information",
    },
  },
});
