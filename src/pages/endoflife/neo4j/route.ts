import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNeo4jResponse200Schema as GetNeo4indexResponse200Schema } from "./schema";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const endoflifeNeo4jRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/neo4j",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNeo4indexResponse200Schema,
        },
      },
      description: "Get the Neo4j end-of-life information",
    },
  },
});
