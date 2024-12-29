import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetJhipsterResponse200Schema } from "./schema";

export const endoflifeJhipsterRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/jhipster",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJhipsterResponse200Schema,
        },
      },
      description: "Get the Jhipster end-of-life information",
    },
  },
});
