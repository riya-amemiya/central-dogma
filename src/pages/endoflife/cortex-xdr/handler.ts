import type { endoflifeCortexXdrRoute } from "./route";
import type { GetCortexXdrResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCortexXdrHandler: RouteHandler<
  typeof endoflifeCortexXdrRoute
> = async (c) => {
  const cortexXdrInfoResponse = await fetch(
    "https://endoflife.date/api/cortex-xdr.json",
  );
  const cortexXdrInfo = (await cortexXdrInfoResponse.json()) as z.infer<
    typeof GetCortexXdrResponse200Schema
  >;
  return c.json(cortexXdrInfo, 200);
};
