import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGoogleNexusResponse200Schema } from "./schema";

export const endoflifeGoogleNexusRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/google-nexus",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGoogleNexusResponse200Schema,
        },
      },
      description: "Get the GoogleNexus end-of-life information",
    },
  },
});
