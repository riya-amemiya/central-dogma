import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAkeneoPimResponse200Schema } from "./schema";

export const endoflifeAkeneoPimRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/akeneo-pim",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAkeneoPimResponse200Schema,
        },
      },
      description: "Get the AkeneoPim end-of-life information",
    },
  },
});
