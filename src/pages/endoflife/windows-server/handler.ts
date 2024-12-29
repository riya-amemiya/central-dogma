import type { endoflifeWindowsServerRoute } from "./route";
import type { GetWindowsServerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWindowsServerHandler: RouteHandler<
  typeof endoflifeWindowsServerRoute
> = async (c) => {
  const windowsServerInfoResponse = await fetch(
    "https://endoflife.date/api/windows-server.json",
  );
  const windowsServerInfo = (await windowsServerInfoResponse.json()) as z.infer<
    typeof GetWindowsServerResponse200Schema
  >;
  return c.json(windowsServerInfo, 200);
};
