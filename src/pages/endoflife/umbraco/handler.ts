import type { endoflifeUmbracoRoute } from "./route";
import type { GetUmbracoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeUmbracoHandler: RouteHandler<
  typeof endoflifeUmbracoRoute
> = async (c) => {
  const umbracoInfoResponse = await fetch(
    "https://endoflife.date/api/umbraco.json",
  );
  const umbracoInfo = (await umbracoInfoResponse.json()) as z.infer<
    typeof GetUmbracoResponse200Schema
  >;
  return c.json(umbracoInfo, 200);
};
