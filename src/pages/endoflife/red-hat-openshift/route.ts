import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetRedHatOpenshiftResponse200Schema } from "./schema";

export const endoflifeRedHatOpenshiftRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/red-hat-openshift",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRedHatOpenshiftResponse200Schema,
        },
      },
      description: "Get the RedHatOpenshift end-of-life information",
    },
  },
});
