import type { endoflifeKongGatewayRoute } from "./route";
import type { GetKongGatewayResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKongGatewayHandler: RouteHandler<
  typeof endoflifeKongGatewayRoute
> = async (c) => {
  const kongGatewayInfoResponse = await fetch(
    "https://endoflife.date/api/kong-gateway.json",
  );
  const kongGatewayInfo = (await kongGatewayInfoResponse.json()) as z.infer<
    typeof GetKongGatewayResponse200Schema
  >;
  return c.json(kongGatewayInfo, 200);
};
