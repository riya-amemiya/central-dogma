import type { endoflifeContaoRoute } from "./route";
import type { GetContaoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeContaoHandler: RouteHandler<
  typeof endoflifeContaoRoute
> = async (c) => {
  const contaoInfoResponse = await fetch(
    "https://endoflife.date/api/contao.json",
  );
  const contaoInfo = (await contaoInfoResponse.json()) as z.infer<
    typeof GetContaoResponse200Schema
  >;
  return c.json(contaoInfo, 200);
};
