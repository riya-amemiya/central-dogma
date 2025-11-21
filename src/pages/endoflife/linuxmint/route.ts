import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetLinuxmintResponse200Schema } from "./schema";

export const endoflifeLinuxmintRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/linuxmint",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLinuxmintResponse200Schema,
        },
      },
      description: "Get the Linuxmint end-of-life information",
    },
  },
});
