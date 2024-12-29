import type { endoflifePopOsRoute } from "./route";
import type { GetPopOsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePopOsHandler: RouteHandler<
  typeof endoflifePopOsRoute
> = async (c) => {
  const popOsInfoResponse = await fetch(
    "https://endoflife.date/api/pop-os.json",
  );
  const popOsInfo = (await popOsInfoResponse.json()) as z.infer<
    typeof GetPopOsResponse200Schema
  >;
  return c.json(popOsInfo, 200);
};
