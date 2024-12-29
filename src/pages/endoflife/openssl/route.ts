import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpensslResponse200Schema } from "./schema";

export const endoflifeOpensslRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/openssl",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpensslResponse200Schema,
        },
      },
      description: "Get the Openssl end-of-life information",
    },
  },
});