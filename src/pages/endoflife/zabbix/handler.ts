import type { endoflifeZabbixRoute } from "./route";
import type { GetZabbixResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeZabbixHandler: RouteHandler<
  typeof endoflifeZabbixRoute
> = async (c) => {
  const zabbixInfoResponse = await fetch(
    "https://endoflife.date/api/zabbix.json",
  );
  const zabbixInfo = (await zabbixInfoResponse.json()) as z.infer<
    typeof GetZabbixResponse200Schema
  >;
  return c.json(zabbixInfo, 200);
};
