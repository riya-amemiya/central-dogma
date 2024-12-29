import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGodotResponse200Schema } from "./schema";

export const endoflifeGodotRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/godot",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGodotResponse200Schema,
        },
      },
      description: "Get the Godot end-of-life information",
    },
  },
});
