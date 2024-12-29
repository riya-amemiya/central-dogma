import type { endoflifeProxmoxVeRoute } from "./route";
import type { GetProxmoxVeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeProxmoxVeHandler: RouteHandler<
  typeof endoflifeProxmoxVeRoute
> = async (c) => {
  const proxmoxVeInfoResponse = await fetch(
    "https://endoflife.date/api/proxmox-ve.json",
  );
  const proxmoxVeInfo = (await proxmoxVeInfoResponse.json()) as z.infer<
    typeof GetProxmoxVeResponse200Schema
  >;
  return c.json(proxmoxVeInfo, 200);
};
