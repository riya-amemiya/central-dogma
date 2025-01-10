import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetChefInfraServerResponse200Schema } from "./schema";

export const endoflifeChefInfraServerRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/chef-infra-server",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetChefInfraServerResponse200Schema,
        },
      },
      description: "Get the ChefInfraServer end-of-life information",
    },
  },
});
