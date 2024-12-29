import type { endoflifeKubernetesCsiNodeDriverRegistrarRoute } from "./route";
import type { GetKubernetesCsiNodeDriverRegistrarResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKubernetesCsiNodeDriverRegistrarHandler: RouteHandler<
  typeof endoflifeKubernetesCsiNodeDriverRegistrarRoute
> = async (c) => {
  const kubernetesCsiNodeDriverRegistrarInfoResponse = await fetch(
    "https://endoflife.date/api/kubernetes-csi-node-driver-registrar.json",
  );
  const kubernetesCsiNodeDriverRegistrarInfo =
    (await kubernetesCsiNodeDriverRegistrarInfoResponse.json()) as z.infer<
      typeof GetKubernetesCsiNodeDriverRegistrarResponse200Schema
    >;
  return c.json(kubernetesCsiNodeDriverRegistrarInfo, 200);
};
