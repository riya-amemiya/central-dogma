import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetGoogleKubernetesEngineResponse200Schema } from "./schema";

export const endoflifeGoogleKubernetesEngineRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/google-kubernetes-engine",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGoogleKubernetesEngineResponse200Schema,
        },
      },
      description: "Get the GoogleKubernetesEngine end-of-life information",
    },
  },
});
