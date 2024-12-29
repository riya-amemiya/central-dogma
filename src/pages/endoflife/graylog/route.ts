import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGraylogResponse200Schema } from "./schema";

export const endoflifeGraylogRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/graylog",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGraylogResponse200Schema,
        },
      },
      description: "Get the Graylog end-of-life information",
    },
  },
});
