import type { endoflifeNvidiaGpuRoute } from "./route";
import type { GetNvidiaGpuResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNvidiaGpuHandler: RouteHandler<
  typeof endoflifeNvidiaGpuRoute
> = async (c) => {
  const nvidiaGpuInfoResponse = await fetch(
    "https://endoflife.date/api/nvidia-gpu.json",
  );
  const nvidiaGpuInfo = (await nvidiaGpuInfoResponse.json()) as z.infer<
    typeof GetNvidiaGpuResponse200Schema
  >;
  return c.json(nvidiaGpuInfo, 200);
};
