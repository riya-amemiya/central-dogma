import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDockerEngineResponse200Schema } from "./schema";

export const endoflifeDockerEngineRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/docker-engine",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDockerEngineResponse200Schema,
        },
      },
      description: "Get the DockerEngine end-of-life information",
    },
  },
});
