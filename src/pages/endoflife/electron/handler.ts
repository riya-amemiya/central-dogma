import type { endoflifeElectronRoute } from "./route";
import type { GetElectronResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeElectronHandler: RouteHandler<
  typeof endoflifeElectronRoute
> = async (c) => {
  const electronInfoResponse = await fetch(
    "https://endoflife.date/api/electron.json",
  );
  const electronInfo = (await electronInfoResponse.json()) as z.infer<
    typeof GetElectronResponse200Schema
  >;
  return c.json(electronInfo, 200);
};
