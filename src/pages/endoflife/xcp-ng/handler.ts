import type { endoflifeXcpNgRoute } from "./route";
import type { GetXcpNgResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeXcpNgHandler: RouteHandler<
  typeof endoflifeXcpNgRoute
> = async (c) => {
  const xcpNgInfoResponse = await fetch(
    "https://endoflife.date/api/xcp-ng.json",
  );
  const xcpNgInfo = (await xcpNgInfoResponse.json()) as z.infer<
    typeof GetXcpNgResponse200Schema
  >;
  return c.json(xcpNgInfo, 200);
};
