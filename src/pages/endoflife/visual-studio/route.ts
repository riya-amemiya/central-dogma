import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVisualStudioResponse200Schema } from "./schema";

export const endoflifeVisualStudioRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/visual-studio",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVisualStudioResponse200Schema,
        },
      },
      description: "Get the VisualStudio end-of-life information",
    },
  },
});
