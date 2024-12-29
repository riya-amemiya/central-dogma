import type { endoflifeWindowsRoute } from "./route";
import type { GetWindowsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWindowsHandler: RouteHandler<
  typeof endoflifeWindowsRoute
> = async (c) => {
  const windowsInfoResponse = await fetch(
    "https://endoflife.date/api/windows.json",
  );
  const windowsInfo = (await windowsInfoResponse.json()) as z.infer<
    typeof GetWindowsResponse200Schema
  >;
  return c.json(windowsInfo, 200);
};
