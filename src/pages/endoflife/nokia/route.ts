import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNokiaResponse200Schema } from "./schema";

export const endoflifeNokiaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nokia",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNokiaResponse200Schema,
        },
      },
      description: "Get the Nokia end-of-life information",
    },
  },
});
