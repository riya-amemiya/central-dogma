import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetJoomlaResponse200Schema } from "./schema";

export const endoflifeJoomlaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
