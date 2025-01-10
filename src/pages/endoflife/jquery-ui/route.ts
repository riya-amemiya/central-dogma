import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetJqueryUiResponse200Schema } from "./schema";

export const endoflifeJqueryUiRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/jquery-ui",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJqueryUiResponse200Schema,
        },
      },
      description: "Get the JqueryUi end-of-life information",
    },
  },
});
