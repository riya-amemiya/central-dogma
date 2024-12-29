import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKubernetesNodeFeatureDiscoveryResponse200Schema } from "./schema";

export const endoflifeKubernetesNodeFeatureDiscoveryRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kubernetes-node-feature-discovery",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKubernetesNodeFeatureDiscoveryResponse200Schema,
        },
      },
      description:
        "Get the KubernetesNodeFeatureDiscovery end-of-life information",
    },
  },
});
