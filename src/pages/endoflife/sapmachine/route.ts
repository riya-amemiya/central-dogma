import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSapmachineResponse200Schema } from "./schema";

export const endoflifeSapmachineRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/sapmachine",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSapmachineResponse200Schema,
        },
      },
      description: "Get the Sapmachine end-of-life information",
    },
  },
});