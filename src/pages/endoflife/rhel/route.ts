import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRhelResponse200Schema } from "./schema";

export const endoflifeRhelRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/rhel",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRhelResponse200Schema,
        },
      },
      description: "Get the Rhel end-of-life information",
    },
  },
});
