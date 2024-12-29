import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNixResponse200Schema } from "./schema";

export const endoflifeNixRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nix",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNixResponse200Schema,
        },
      },
      description: "Get the Nix end-of-life information",
    },
  },
});
