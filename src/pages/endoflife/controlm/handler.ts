import type { endoflifeControlmRoute } from "./route";
import type { GetControlmResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeControlmHandler: RouteHandler<
  typeof endoflifeControlmRoute
> = async (c) => {
  const controlmInfoResponse = await fetch(
    "https://endoflife.date/api/controlm.json",
  );
  const controlmInfo = (await controlmInfoResponse.json()) as z.infer<
    typeof GetControlmResponse200Schema
  >;
  return c.json(controlmInfo, 200);
};
