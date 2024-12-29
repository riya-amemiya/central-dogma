import type { endoflifeOpenwrtRoute } from "./route";
import type { GetOpenwrtResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpenwrtHandler: RouteHandler<
  typeof endoflifeOpenwrtRoute
> = async (c) => {
  const openwrtInfoResponse = await fetch(
    "https://endoflife.date/api/openwrt.json",
  );
  const openwrtInfo = (await openwrtInfoResponse.json()) as z.infer<
    typeof GetOpenwrtResponse200Schema
  >;
  return c.json(openwrtInfo, 200);
};
