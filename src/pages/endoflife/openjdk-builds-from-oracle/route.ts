import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpenjdkBuildsFromOracleResponse200Schema } from "./schema";

export const endoflifeOpenjdkBuildsFromOracleRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/openjdk-builds-from-oracle",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpenjdkBuildsFromOracleResponse200Schema,
        },
      },
      description: "Get the OpenjdkBuildsFromOracle end-of-life information",
    },
  },
});
