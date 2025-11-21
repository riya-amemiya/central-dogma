import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetContourResponse200Schema } from "./schema";

export const endoflifeContourRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/contour",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetContourResponse200Schema,
        },
      },
      description: "Get the Contour end-of-life information",
    },
  },
});
