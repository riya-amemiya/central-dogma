import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetUmbracoResponse200Schema } from "./schema";

export const endoflifeUmbracoRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/umbraco",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetUmbracoResponse200Schema,
        },
      },
      description: "Get the Umbraco end-of-life information",
    },
  },
});
