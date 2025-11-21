import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetVmwareHarborRegistryResponse200Schema } from "./schema";

export const endoflifeVmwareHarborRegistryRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/vmware-harbor-registry",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVmwareHarborRegistryResponse200Schema,
        },
      },
      description: "Get the VmwareHarborRegistry end-of-life information",
    },
  },
});
