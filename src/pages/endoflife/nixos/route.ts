import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNixosResponse200Schema } from "./schema";

export const endoflifeNixosRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nixos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNixosResponse200Schema,
        },
      },
      description: "Get the Nixos end-of-life information",
    },
  },
});
