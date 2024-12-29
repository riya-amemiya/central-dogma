import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAzureKubernetesServiceResponse200Schema } from "./schema";

export const endoflifeAzureKubernetesServiceRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/azure-kubernetes-service",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAzureKubernetesServiceResponse200Schema,
        },
      },
      description: "Get the AzureKubernetesService end-of-life information",
    },
  },
});
