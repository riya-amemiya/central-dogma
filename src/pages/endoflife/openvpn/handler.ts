import type { endoflifeOpenvpnRoute } from "./route";
import type { GetOpenvpnResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpenvpnHandler: RouteHandler<
  typeof endoflifeOpenvpnRoute
> = async (c) => {
  const openvpnInfoResponse = await fetch(
    "https://endoflife.date/api/openvpn.json",
  );
  const openvpnInfo = (await openvpnInfoResponse.json()) as z.infer<
    typeof GetOpenvpnResponse200Schema
  >;
  return c.json(openvpnInfo, 200);
};
