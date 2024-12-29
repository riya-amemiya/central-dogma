import type { endoflifeKubernetesNodeFeatureDiscoveryRoute } from "./route";
import type { GetKubernetesNodeFeatureDiscoveryResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKubernetesNodeFeatureDiscoveryHandler: RouteHandler<
  typeof endoflifeKubernetesNodeFeatureDiscoveryRoute
> = async (c) => {
  const kubernetesNodeFeatureDiscoveryInfoResponse = await fetch(
    "https://endoflife.date/api/kubernetes-node-feature-discovery.json",
  );
  const kubernetesNodeFeatureDiscoveryInfo =
    (await kubernetesNodeFeatureDiscoveryInfoResponse.json()) as z.infer<
      typeof GetKubernetesNodeFeatureDiscoveryResponse200Schema
    >;
  return c.json(kubernetesNodeFeatureDiscoveryInfo, 200);
};
