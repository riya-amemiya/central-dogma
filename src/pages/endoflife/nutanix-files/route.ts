import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNutanixFilesResponse200Schema } from "./schema";

export const endoflifeNutanixFilesRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/nutanix-files",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNutanixFilesResponse200Schema,
        },
      },
      description: "Get the NutanixFiles end-of-life information",
    },
  },
});
