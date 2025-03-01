import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNetbsdResponse200Schema } from "./schema";

export const endoflifeNetbsdRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/netbsd",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNetbsdResponse200Schema,
        },
      },
      description: "Get the Netbsd end-of-life information",
    },
  },
});
