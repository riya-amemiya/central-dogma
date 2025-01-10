import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetHashicorpPackerResponse200Schema } from "./schema";

export const endoflifeHashicorpPackerRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/hashicorp-packer",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetHashicorpPackerResponse200Schema,
        },
      },
      description: "Get the HashicorpPacker end-of-life information",
    },
  },
});
