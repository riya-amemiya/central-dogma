import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetJoomlaResponse200Schema } from "./schema";

export const endoflifeJoomlaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/joomla",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJoomlaResponse200Schema,
        },
      },
      description: "Get the Joomla end-of-life information",
    },
  },
});
