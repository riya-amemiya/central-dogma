import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAlmalinuxResponse200Schema } from "./schema";

export const endoflifeAlmalinuxRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/almalinux",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAlmalinuxResponse200Schema,
        },
      },
      description: "Get the Almalinux end-of-life information",
    },
  },
});