import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMauticResponse200Schema } from "./schema";

export const endoflifeMauticRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mautic",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMauticResponse200Schema,
        },
      },
      description: "Get the Mautic end-of-life information",
    },
  },
});
