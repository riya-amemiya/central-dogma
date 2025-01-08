import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDotnetfxResponse200Schema } from "./schema";

export const endoflifeDotnetfxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/dotnetfx",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDotnetfxResponse200Schema,
        },
      },
      description: "Get the Dotnetfx end-of-life information",
    },
  },
});
