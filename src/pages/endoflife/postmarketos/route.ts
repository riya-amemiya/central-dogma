import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPostmarketosResponse200Schema } from "./schema";

export const endoflifePostmarketosRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/postmarketos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPostmarketosResponse200Schema,
        },
      },
      description: "Get the Postmarketos end-of-life information",
    },
  },
});
