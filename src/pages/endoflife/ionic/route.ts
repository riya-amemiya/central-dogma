import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIonicResponse200Schema } from "./schema";

export const endoflifeIonicRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ionic",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIonicResponse200Schema,
        },
      },
      description: "Get the Ionic end-of-life information",
    },
  },
});
