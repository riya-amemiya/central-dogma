import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGorillaResponse200Schema } from "./schema";

export const endoflifeGorillaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/gorilla",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGorillaResponse200Schema,
        },
      },
      description: "Get the Gorilla end-of-life information",
    },
  },
});
