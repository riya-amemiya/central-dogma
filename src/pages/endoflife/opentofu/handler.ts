import type { endoflifeOpentofuRoute } from "./route";
import type { GetOpentofuResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpentofuHandler: RouteHandler<
  typeof endoflifeOpentofuRoute
> = async (c) => {
  const opentofuInfoResponse = await fetch(
    "https://endoflife.date/api/opentofu.json",
  );
  const opentofuInfo = (await opentofuInfoResponse.json()) as z.infer<
    typeof GetOpentofuResponse200Schema
  >;
  return c.json(opentofuInfo, 200);
};
