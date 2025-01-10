import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFedoraResponse200Schema } from "./schema";

export const endoflifeFedoraRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/fedora",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFedoraResponse200Schema,
        },
      },
      description: "Get the Fedora end-of-life information",
    },
  },
});
