import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNexusResponse200Schema } from "./schema";

export const endoflifeNexusRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nexus",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNexusResponse200Schema,
        },
      },
      description: "Get the Nexus end-of-life information",
    },
  },
});
