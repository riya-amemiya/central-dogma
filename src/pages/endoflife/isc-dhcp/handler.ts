import type { endoflifeIscDhcpRoute } from "./route";
import type { GetIscDhcpResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIscDhcpHandler: RouteHandler<
  typeof endoflifeIscDhcpRoute
> = async (c) => {
  const iscDhcpInfoResponse = await fetch(
    "https://endoflife.date/api/isc-dhcp.json",
  );
  const iscDhcpInfo = (await iscDhcpInfoResponse.json()) as z.infer<
    typeof GetIscDhcpResponse200Schema
  >;
  return c.json(iscDhcpInfo, 200);
};
