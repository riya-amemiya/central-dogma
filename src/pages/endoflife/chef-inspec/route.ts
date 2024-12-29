import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetChefInspecResponse200Schema } from "./schema";

export const endoflifeChefInspecRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/chef-inspec",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetChefInspecResponse200Schema,
        },
      },
      description: "Get the ChefInspec end-of-life information",
    },
  },
});
