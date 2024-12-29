import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetContaoResponse200Schema } from "./schema";

export const endoflifeContaoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/contao",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetContaoResponse200Schema,
        },
      },
      description: "Get the Contao end-of-life information",
    },
  },
});
