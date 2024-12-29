import type { endoflifeSubversionRoute } from "./route";
import type { GetSubversionResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSubversionHandler: RouteHandler<
  typeof endoflifeSubversionRoute
> = async (c) => {
  const subversionInfoResponse = await fetch(
    "https://endoflife.date/api/subversion.json",
  );
  const subversionInfo = (await subversionInfoResponse.json()) as z.infer<
    typeof GetSubversionResponse200Schema
  >;
  return c.json(subversionInfo, 200);
};
