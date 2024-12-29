import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetLuaResponse200Schema } from "./schema";

export const endoflifeLuaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/lua",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLuaResponse200Schema,
        },
      },
      description: "Get the Lua end-of-life information",
    },
  },
});
