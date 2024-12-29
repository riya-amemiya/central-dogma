import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpenbsdResponse200Schema } from "./schema";

export const endoflifeOpenbsdRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/openbsd",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpenbsdResponse200Schema,
        },
      },
      description: "Get the Openbsd end-of-life information",
    },
  },
});
