import type { endoflifeRoundcubeRoute } from "./route";
import type { GetRoundcubeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRoundcubeHandler: RouteHandler<
  typeof endoflifeRoundcubeRoute
> = async (c) => {
  const roundcubeInfoResponse = await fetch(
    "https://endoflife.date/api/roundcube.json",
  );
  const roundcubeInfo = (await roundcubeInfoResponse.json()) as z.infer<
    typeof GetRoundcubeResponse200Schema
  >;
  return c.json(roundcubeInfo, 200);
};
