import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetArtifactoryResponse200Schema } from "./schema";

export const endoflifeArtifactoryRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/artifactory",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetArtifactoryResponse200Schema,
        },
      },
      description: "Get the Artifactory end-of-life information",
    },
  },
});
