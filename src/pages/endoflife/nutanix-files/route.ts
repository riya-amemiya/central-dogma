import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNutanixFilesResponse200Schema } from "./schema";

export const endoflifeNutanixFilesRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
