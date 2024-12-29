import type { endoflifeInternetExplorerRoute } from "./route";
import type { GetInternetExplorerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeInternetExplorerHandler: RouteHandler<
  typeof endoflifeInternetExplorerRoute
> = async (c) => {
  const internetExplorerInfoResponse = await fetch(
    "https://endoflife.date/api/internet-explorer.json",
  );
  const internetExplorerInfo =
    (await internetExplorerInfoResponse.json()) as z.infer<
      typeof GetInternetExplorerResponse200Schema
    >;
  return c.json(internetExplorerInfo, 200);
};
