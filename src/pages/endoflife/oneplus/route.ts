import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOneplusResponse200Schema } from "./schema";

export const endoflifeOneplusRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/oneplus",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOneplusResponse200Schema,
        },
      },
      description: "Get the Oneplus end-of-life information",
    },
  },
});
