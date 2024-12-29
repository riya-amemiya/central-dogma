import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIcingaResponse200Schema } from "./schema";

export const endoflifeIcingaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/icinga",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIcingaResponse200Schema,
        },
      },
      description: "Get the Icinga end-of-life information",
    },
  },
});
