import type { endoflifeMauticRoute } from "./route";
import type { GetMauticResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMauticHandler: RouteHandler<
  typeof endoflifeMauticRoute
> = async (c) => {
  const mauticInfoResponse = await fetch(
    "https://endoflife.date/api/mautic.json",
  );
  const mauticInfo = (await mauticInfoResponse.json()) as z.infer<
    typeof GetMauticResponse200Schema
  >;
  return c.json(mauticInfo, 200);
};
