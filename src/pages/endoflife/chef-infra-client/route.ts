import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetChefInfraClientResponse200Schema } from "./schema";

export const endoflifeChefInfraClientRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/chef-infra-client",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetChefInfraClientResponse200Schema,
        },
      },
      description: "Get the ChefInfraClient end-of-life information",
    },
  },
});
