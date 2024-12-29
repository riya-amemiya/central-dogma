import type { endoflifeNixosRoute } from "./route";
import type { GetNixosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNixosHandler: RouteHandler<
  typeof endoflifeNixosRoute
> = async (c) => {
  const nixosInfoResponse = await fetch(
    "https://endoflife.date/api/nixos.json",
  );
  const nixosInfo = (await nixosInfoResponse.json()) as z.infer<
    typeof GetNixosResponse200Schema
  >;
  return c.json(nixosInfo, 200);
};
