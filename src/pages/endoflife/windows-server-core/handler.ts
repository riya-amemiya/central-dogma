import type { endoflifeWindowsServerCoreRoute } from "./route";
import type { GetWindowsServerCoreResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWindowsServerCoreHandler: RouteHandler<
  typeof endoflifeWindowsServerCoreRoute
> = async (c) => {
  const windowsServerCoreInfoResponse = await fetch(
    "https://endoflife.date/api/windows-server-core.json",
  );
  const windowsServerCoreInfo =
    (await windowsServerCoreInfoResponse.json()) as z.infer<
      typeof GetWindowsServerCoreResponse200Schema
    >;
  return c.json(windowsServerCoreInfo, 200);
};
