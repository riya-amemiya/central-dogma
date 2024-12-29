import type { endoflifeWindowsNanoServerRoute } from "./route";
import type { GetWindowsNanoServerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWindowsNanoServerHandler: RouteHandler<
  typeof endoflifeWindowsNanoServerRoute
> = async (c) => {
  const windowsNanoServerInfoResponse = await fetch(
    "https://endoflife.date/api/windows-nano-server.json",
  );
  const windowsNanoServerInfo =
    (await windowsNanoServerInfoResponse.json()) as z.infer<
      typeof GetWindowsNanoServerResponse200Schema
    >;
  return c.json(windowsNanoServerInfo, 200);
};
