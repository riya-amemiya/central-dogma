import type { endoflifePowershellRoute } from "./route";
import type { GetPowershellResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePowershellHandler: RouteHandler<
  typeof endoflifePowershellRoute
> = async (c) => {
  const powershellInfoResponse = await fetch(
    "https://endoflife.date/api/powershell.json",
  );
  const powershellInfo = (await powershellInfoResponse.json()) as z.infer<
    typeof GetPowershellResponse200Schema
  >;
  return c.json(powershellInfo, 200);
};
