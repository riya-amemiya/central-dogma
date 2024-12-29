import type { endoflifeOneplusRoute } from "./route";
import type { GetOneplusResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOneplusHandler: RouteHandler<
  typeof endoflifeOneplusRoute
> = async (c) => {
  const oneplusInfoResponse = await fetch(
    "https://endoflife.date/api/oneplus.json",
  );
  const oneplusInfo = (await oneplusInfoResponse.json()) as z.infer<
    typeof GetOneplusResponse200Schema
  >;
  return c.json(oneplusInfo, 200);
};
