import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVmwareCloudFoundationResponse200Schema } from "./schema";

export const endoflifeVmwareCloudFoundationRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/vmware-cloud-foundation",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVmwareCloudFoundationResponse200Schema,
        },
      },
      description: "Get the VmwareCloudFoundation end-of-life information",
    },
  },
});
