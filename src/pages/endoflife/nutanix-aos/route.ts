import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNutanixAosResponse200Schema } from "./schema";

export const endoflifeNutanixAosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nutanix-aos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNutanixAosResponse200Schema,
        },
      },
      description: "Get the NutanixAos end-of-life information",
    },
  },
});
