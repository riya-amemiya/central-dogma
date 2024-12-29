import type { endoflifeVcenterRoute } from "./route";
import type { GetVcenterResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVcenterHandler: RouteHandler<
  typeof endoflifeVcenterRoute
> = async (c) => {
  const vcenterInfoResponse = await fetch(
    "https://endoflife.date/api/vcenter.json",
  );
  const vcenterInfo = (await vcenterInfoResponse.json()) as z.infer<
    typeof GetVcenterResponse200Schema
  >;
  return c.json(vcenterInfo, 200);
};
