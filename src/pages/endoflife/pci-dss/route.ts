import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetPciDssResponse200Schema } from "./schema";

export const endoflifePciDssRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/pci-dss",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPciDssResponse200Schema,
        },
      },
      description: "Get the PciDss end-of-life information",
    },
  },
});
