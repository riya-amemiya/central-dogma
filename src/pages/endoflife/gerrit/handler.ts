import type { endoflifeGerritRoute } from "./route";
import type { GetGerritResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGerritHandler: RouteHandler<
  typeof endoflifeGerritRoute
> = async (c) => {
  const gerritInfoResponse = await fetch(
    "https://endoflife.date/api/gerrit.json",
  );
  const gerritInfo = (await gerritInfoResponse.json()) as z.infer<
    typeof GetGerritResponse200Schema
  >;
  return c.json(gerritInfo, 200);
};
