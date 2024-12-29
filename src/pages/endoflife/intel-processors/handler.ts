import type { endoflifeIntelProcessorsRoute } from "./route";
import type { GetIntelProcessorsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIntelProcessorsHandler: RouteHandler<
  typeof endoflifeIntelProcessorsRoute
> = async (c) => {
  const intelProcessorsInfoResponse = await fetch(
    "https://endoflife.date/api/intel-processors.json",
  );
  const intelProcessorsInfo =
    (await intelProcessorsInfoResponse.json()) as z.infer<
      typeof GetIntelProcessorsResponse200Schema
    >;
  return c.json(intelProcessorsInfo, 200);
};
