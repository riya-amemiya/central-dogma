import type { endoflifeAlibabaDragonwellRoute } from "./route";
import type { GetAlibabaDragonwellResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAlibabaDragonwellHandler: RouteHandler<
  typeof endoflifeAlibabaDragonwellRoute
> = async (c) => {
  const alibabaDragonwellInfoResponse = await fetch(
    "https://endoflife.date/api/alibaba-dragonwell.json",
  );
  const alibabaDragonwellInfo =
    (await alibabaDragonwellInfoResponse.json()) as z.infer<
      typeof GetAlibabaDragonwellResponse200Schema
    >;
  return c.json(alibabaDragonwellInfo, 200);
};
