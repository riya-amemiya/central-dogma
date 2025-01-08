import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetLinuxmintResponse200Schema } from "./schema";

export const endoflifeLinuxmintRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
