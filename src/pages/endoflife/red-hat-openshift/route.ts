import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRedHatOpenshiftResponse200Schema } from "./schema";

export const endoflifeRedHatOpenshiftRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
