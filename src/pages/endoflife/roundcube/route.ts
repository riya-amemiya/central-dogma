import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRoundcubeResponse200Schema } from "./schema";

export const endoflifeRoundcubeRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/roundcube",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRoundcubeResponse200Schema,
        },
      },
      description: "Get the Roundcube end-of-life information",
    },
  },
});
