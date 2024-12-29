import type { endoflifeVmwareCloudFoundationRoute } from "./route";
import type { GetVmwareCloudFoundationResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVmwareCloudFoundationHandler: RouteHandler<
  typeof endoflifeVmwareCloudFoundationRoute
> = async (c) => {
  const vmwareCloudFoundationInfoResponse = await fetch(
    "https://endoflife.date/api/vmware-cloud-foundation.json",
  );
  const vmwareCloudFoundationInfo =
    (await vmwareCloudFoundationInfoResponse.json()) as z.infer<
      typeof GetVmwareCloudFoundationResponse200Schema
    >;
  return c.json(vmwareCloudFoundationInfo, 200);
};
