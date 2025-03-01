import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetEurolinuxResponse200Schema } from "./schema";

export const endoflifeEurolinuxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/eurolinux",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEurolinuxResponse200Schema,
        },
      },
      description: "Get the Eurolinux end-of-life information",
    },
  },
});
