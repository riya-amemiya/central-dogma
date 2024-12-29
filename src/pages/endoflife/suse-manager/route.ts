import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSuseManagerResponse200Schema } from "./schema";

export const endoflifeSuseManagerRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/suse-manager",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSuseManagerResponse200Schema,
        },
      },
      description: "Get the SuseManager end-of-life information",
    },
  },
});
