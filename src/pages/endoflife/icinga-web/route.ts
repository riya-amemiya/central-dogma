import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIcingaWebResponse200Schema } from "./schema";

export const endoflifeIcingaWebRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/icinga-web",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIcingaWebResponse200Schema,
        },
      },
      description: "Get the IcingaWeb end-of-life information",
    },
  },
});
