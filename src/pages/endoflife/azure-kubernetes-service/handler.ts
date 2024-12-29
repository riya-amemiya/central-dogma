import type { endoflifeAzureKubernetesServiceRoute } from "./route";
import type { GetAzureKubernetesServiceResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAzureKubernetesServiceHandler: RouteHandler<
  typeof endoflifeAzureKubernetesServiceRoute
> = async (c) => {
  const azureKubernetesServiceInfoResponse = await fetch(
    "https://endoflife.date/api/azure-kubernetes-service.json",
  );
  const azureKubernetesServiceInfo =
    (await azureKubernetesServiceInfoResponse.json()) as z.infer<
      typeof GetAzureKubernetesServiceResponse200Schema
    >;
  return c.json(azureKubernetesServiceInfo, 200);
};
