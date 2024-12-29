import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOfficeResponse200Schema } from "./schema";

export const endoflifeOfficeRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/office",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOfficeResponse200Schema,
        },
      },
      description: "Get the Office end-of-life information",
    },
  },
});
