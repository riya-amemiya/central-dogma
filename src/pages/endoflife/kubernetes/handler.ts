import type { endoflifeKubernetesRoute } from "./route";
import type { GetKubernetesResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKubernetesHandler: RouteHandler<
  typeof endoflifeKubernetesRoute
> = async (c) => {
  const kubernetesInfoResponse = await fetch(
    "https://endoflife.date/api/kubernetes.json",
  );
  const kubernetesInfo = (await kubernetesInfoResponse.json()) as z.infer<
    typeof GetKubernetesResponse200Schema
  >;
  return c.json(kubernetesInfo, 200);
};
