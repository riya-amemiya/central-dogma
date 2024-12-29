import type { endoflifeNixRoute } from "./route";
import type { GetNixResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNixHandler: RouteHandler<
  typeof endoflifeNixRoute
> = async (c) => {
  const nixInfoResponse = await fetch("https://endoflife.date/api/nix.json");
  const nixInfo = (await nixInfoResponse.json()) as z.infer<
    typeof GetNixResponse200Schema
  >;
  return c.json(nixInfo, 200);
};
