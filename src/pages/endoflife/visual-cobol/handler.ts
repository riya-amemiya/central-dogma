import type { endoflifeVisualCobolRoute } from "./route";
import type { GetVisualCobolResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVisualCobolHandler: RouteHandler<
  typeof endoflifeVisualCobolRoute
> = async (c) => {
  const visualCobolInfoResponse = await fetch(
    "https://endoflife.date/api/visual-cobol.json",
  );
  const visualCobolInfo = (await visualCobolInfoResponse.json()) as z.infer<
    typeof GetVisualCobolResponse200Schema
  >;
  return c.json(visualCobolInfo, 200);
};
