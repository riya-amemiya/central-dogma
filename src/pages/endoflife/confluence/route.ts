import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetConfluenceResponse200Schema } from "./schema";

export const endoflifeConfluenceRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/confluence",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetConfluenceResponse200Schema,
        },
      },
      description: "Get the Confluence end-of-life information",
    },
  },
});
