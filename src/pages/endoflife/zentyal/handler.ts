import type { endoflifeZentyalRoute } from "./route";
import type { GetZentyalResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeZentyalHandler: RouteHandler<
  typeof endoflifeZentyalRoute
> = async (c) => {
  const zentyalInfoResponse = await fetch(
    "https://endoflife.date/api/zentyal.json",
  );
  const zentyalInfo = (await zentyalInfoResponse.json()) as z.infer<
    typeof GetZentyalResponse200Schema
  >;
  return c.json(zentyalInfo, 200);
};
