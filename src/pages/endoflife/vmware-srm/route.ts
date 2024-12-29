import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVmwareSrmResponse200Schema } from "./schema";

export const endoflifeVmwareSrmRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/vmware-srm",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVmwareSrmResponse200Schema,
        },
      },
      description: "Get the VmwareSrm end-of-life information",
    },
  },
});
