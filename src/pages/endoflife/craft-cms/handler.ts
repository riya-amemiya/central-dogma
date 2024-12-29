import type { endoflifeCraftCmsRoute } from "./route";
import type { GetCraftCmsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCraftCmsHandler: RouteHandler<
  typeof endoflifeCraftCmsRoute
> = async (c) => {
  const craftCmsInfoResponse = await fetch(
    "https://endoflife.date/api/craft-cms.json",
  );
  const craftCmsInfo = (await craftCmsInfoResponse.json()) as z.infer<
    typeof GetCraftCmsResponse200Schema
  >;
  return c.json(craftCmsInfo, 200);
};
