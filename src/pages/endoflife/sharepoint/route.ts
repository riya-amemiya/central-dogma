import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSharepointResponse200Schema } from "./schema";

export const endoflifeSharepointRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/sharepoint",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSharepointResponse200Schema,
        },
      },
      description: "Get the Sharepoint end-of-life information",
    },
  },
});
