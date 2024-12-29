import type { endoflifeSteamosRoute } from "./route";
import type { GetSteamosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSteamosHandler: RouteHandler<
  typeof endoflifeSteamosRoute
> = async (c) => {
  const steamosInfoResponse = await fetch(
    "https://endoflife.date/api/steamos.json",
  );
  const steamosInfo = (await steamosInfoResponse.json()) as z.infer<
    typeof GetSteamosResponse200Schema
  >;
  return c.json(steamosInfo, 200);
};
