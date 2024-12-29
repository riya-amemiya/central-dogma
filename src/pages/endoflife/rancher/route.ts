import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRancherResponse200Schema } from "./schema";

export const endoflifeRancherRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/rancher",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRancherResponse200Schema,
        },
      },
      description: "Get the Rancher end-of-life information",
    },
  },
});
