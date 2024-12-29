import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNutanixPrismResponse200Schema } from "./schema";

export const endoflifeNutanixPrismRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nutanix-prism",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNutanixPrismResponse200Schema,
        },
      },
      description: "Get the NutanixPrism end-of-life information",
    },
  },
});
