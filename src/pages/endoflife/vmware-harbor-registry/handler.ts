import type { endoflifeVmwareHarborRegistryRoute } from "./route";
import type { GetVmwareHarborRegistryResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVmwareHarborRegistryHandler: RouteHandler<
  typeof endoflifeVmwareHarborRegistryRoute
> = async (c) => {
  const vmwareHarborRegistryInfoResponse = await fetch(
    "https://endoflife.date/api/vmware-harbor-registry.json",
  );
  const vmwareHarborRegistryInfo =
    (await vmwareHarborRegistryInfoResponse.json()) as z.infer<
      typeof GetVmwareHarborRegistryResponse200Schema
    >;
  return c.json(vmwareHarborRegistryInfo, 200);
};
