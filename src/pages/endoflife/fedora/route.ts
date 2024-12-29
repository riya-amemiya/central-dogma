import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFedoraResponse200Schema } from "./schema";

export const endoflifeFedoraRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
