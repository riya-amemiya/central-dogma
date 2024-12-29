import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGoogleKubernetesEngineResponse200Schema } from "./schema";

export const endoflifeGoogleKubernetesEngineRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
