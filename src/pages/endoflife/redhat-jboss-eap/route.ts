import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRedhatJbossEapResponse200Schema } from "./schema";

export const endoflifeRedhatJbossEapRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/redhat-jboss-eap",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRedhatJbossEapResponse200Schema,
        },
      },
      description: "Get the RedhatJbossEap end-of-life information",
    },
  },
});
