import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetUbuntuResponse200Schema } from "./schema";

export const endoflifeUbuntuRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ubuntu",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetUbuntuResponse200Schema,
        },
      },
      description: "Get the Ubuntu end-of-life information",
    },
  },
});
