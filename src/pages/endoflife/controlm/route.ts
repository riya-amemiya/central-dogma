import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetControlmResponse200Schema } from "./schema";

export const endoflifeControlmRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/controlm",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetControlmResponse200Schema,
        },
      },
      description: "Get the Controlm end-of-life information",
    },
  },
});
