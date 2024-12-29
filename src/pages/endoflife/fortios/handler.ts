import type { endoflifeFortiosRoute } from "./route";
import type { GetFortiosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFortiosHandler: RouteHandler<
  typeof endoflifeFortiosRoute
> = async (c) => {
  const fortiosInfoResponse = await fetch(
    "https://endoflife.date/api/fortios.json",
  );
  const fortiosInfo = (await fortiosInfoResponse.json()) as z.infer<
    typeof GetFortiosResponse200Schema
  >;
  return c.json(fortiosInfo, 200);
};
