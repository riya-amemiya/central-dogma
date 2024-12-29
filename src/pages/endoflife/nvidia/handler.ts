import type { endoflifeNvidiaRoute } from "./route";
import type { GetNvidiaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNvidiaHandler: RouteHandler<
  typeof endoflifeNvidiaRoute
> = async (c) => {
  const nvidiaInfoResponse = await fetch(
    "https://endoflife.date/api/nvidia.json",
  );
  const nvidiaInfo = (await nvidiaInfoResponse.json()) as z.infer<
    typeof GetNvidiaResponse200Schema
  >;
  return c.json(nvidiaInfo, 200);
};
