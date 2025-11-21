import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetRancherResponse200Schema } from "./schema";

export const endoflifeRancherRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/rancher",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRancherResponse200Schema,
        },
      },
      description: "Get the Rancher end-of-life information",
    },
  },
});
