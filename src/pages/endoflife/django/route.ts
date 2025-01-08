import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDjangoResponse200Schema } from "./schema";

export const endoflifeDjangoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/django",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDjangoResponse200Schema,
        },
      },
      description: "Get the Django end-of-life information",
    },
  },
});
