import type { endoflifeWindowsEmbeddedRoute } from "./route";
import type { GetWindowsEmbeddedResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWindowsEmbeddedHandler: RouteHandler<
  typeof endoflifeWindowsEmbeddedRoute
> = async (c) => {
  const windowsEmbeddedInfoResponse = await fetch(
    "https://endoflife.date/api/windows-embedded.json",
  );
  const windowsEmbeddedInfo =
    (await windowsEmbeddedInfoResponse.json()) as z.infer<
      typeof GetWindowsEmbeddedResponse200Schema
    >;
  return c.json(windowsEmbeddedInfo, 200);
};
