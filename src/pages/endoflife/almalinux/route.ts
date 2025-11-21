import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetAlmalinuxResponse200Schema } from "./schema";

export const endoflifeAlmalinuxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
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
