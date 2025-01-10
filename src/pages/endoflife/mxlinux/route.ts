import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMxlinuxResponse200Schema } from "./schema";

export const endoflifeMxlinuxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mxlinux",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMxlinuxResponse200Schema,
        },
      },
      description: "Get the Mxlinux end-of-life information",
    },
  },
});
