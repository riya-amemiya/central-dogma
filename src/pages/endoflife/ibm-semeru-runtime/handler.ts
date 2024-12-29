import type { endoflifeIbmSemeruRuntimeRoute } from "./route";
import type { GetIbmSemeruRuntimeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIbmSemeruRuntimeHandler: RouteHandler<
  typeof endoflifeIbmSemeruRuntimeRoute
> = async (c) => {
  const ibmSemeruRuntimeInfoResponse = await fetch(
    "https://endoflife.date/api/ibm-semeru-runtime.json",
  );
  const ibmSemeruRuntimeInfo =
    (await ibmSemeruRuntimeInfoResponse.json()) as z.infer<
      typeof GetIbmSemeruRuntimeResponse200Schema
    >;
  return c.json(ibmSemeruRuntimeInfo, 200);
};
