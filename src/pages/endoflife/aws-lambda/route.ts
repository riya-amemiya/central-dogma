import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAwsLambdaResponse200Schema } from "./schema";

export const endoflifeAwsLambdaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/aws-lambda",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAwsLambdaResponse200Schema,
        },
      },
      description: "Get the AwsLambda end-of-life information",
    },
  },
});
