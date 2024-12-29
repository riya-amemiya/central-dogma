import type { endoflifeVmwareSrmRoute } from "./route";
import type { GetVmwareSrmResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVmwareSrmHandler: RouteHandler<
  typeof endoflifeVmwareSrmRoute
> = async (c) => {
  const vmwareSrmInfoResponse = await fetch(
    "https://endoflife.date/api/vmware-srm.json",
  );
  const vmwareSrmInfo = (await vmwareSrmInfoResponse.json()) as z.infer<
    typeof GetVmwareSrmResponse200Schema
  >;
  return c.json(vmwareSrmInfo, 200);
};
