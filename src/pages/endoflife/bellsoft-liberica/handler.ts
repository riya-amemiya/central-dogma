import type { endoflifeBellsoftLibericaRoute } from "./route";
import type { GetBellsoftLibericaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeBellsoftLibericaHandler: RouteHandler<
  typeof endoflifeBellsoftLibericaRoute
> = async (c) => {
  const bellsoftLibericaInfoResponse = await fetch(
    "https://endoflife.date/api/bellsoft-liberica.json",
  );
  const bellsoftLibericaInfo =
    (await bellsoftLibericaInfoResponse.json()) as z.infer<
      typeof GetBellsoftLibericaResponse200Schema
    >;
  return c.json(bellsoftLibericaInfo, 200);
};
