import type { endoflifeNomadRoute } from "./route";
import type { GetNomadResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNomadHandler: RouteHandler<
  typeof endoflifeNomadRoute
> = async (c) => {
  const nomadInfoResponse = await fetch(
    "https://endoflife.date/api/nomad.json",
  );
  const nomadInfo = (await nomadInfoResponse.json()) as z.infer<
    typeof GetNomadResponse200Schema
  >;
  return c.json(nomadInfo, 200);
};
