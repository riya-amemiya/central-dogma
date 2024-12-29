import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNextjsResponse200Schema } from "./schema";

export const endoflifeNextjsRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nextjs",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNextjsResponse200Schema,
        },
      },
      description: "Get the Nextjs end-of-life information",
    },
  },
});
