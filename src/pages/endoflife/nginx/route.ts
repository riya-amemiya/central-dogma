import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNginxResponse200Schema } from "./schema";

export const endoflifeNginxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nginx",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNginxResponse200Schema,
        },
      },
      description: "Get the Nginx end-of-life information",
    },
  },
});
