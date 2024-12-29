import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpentofuResponse200Schema } from "./schema";

export const endoflifeOpentofuRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/opentofu",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpentofuResponse200Schema,
        },
      },
      description: "Get the Opentofu end-of-life information",
    },
  },
});
