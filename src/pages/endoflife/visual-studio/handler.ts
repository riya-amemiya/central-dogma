import type { endoflifeVisualStudioRoute } from "./route";
import type { GetVisualStudioResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVisualStudioHandler: RouteHandler<
  typeof endoflifeVisualStudioRoute
> = async (c) => {
  const visualStudioInfoResponse = await fetch(
    "https://endoflife.date/api/visual-studio.json",
  );
  const visualStudioInfo = (await visualStudioInfoResponse.json()) as z.infer<
    typeof GetVisualStudioResponse200Schema
  >;
  return c.json(visualStudioInfo, 200);
};
