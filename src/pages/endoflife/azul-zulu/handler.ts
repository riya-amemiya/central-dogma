import type { endoflifeAzulZuluRoute } from "./route";
import type { GetAzulZuluResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAzulZuluHandler: RouteHandler<
  typeof endoflifeAzulZuluRoute
> = async (c) => {
  const azulZuluInfoResponse = await fetch(
    "https://endoflife.date/api/azul-zulu.json",
  );
  const azulZuluInfo = (await azulZuluInfoResponse.json()) as z.infer<
    typeof GetAzulZuluResponse200Schema
  >;
  return c.json(azulZuluInfo, 200);
};
