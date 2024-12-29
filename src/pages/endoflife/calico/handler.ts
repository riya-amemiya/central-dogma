import type { endoflifeCalicoRoute } from "./route";
import type { GetCalicoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCalicoHandler: RouteHandler<
  typeof endoflifeCalicoRoute
> = async (c) => {
  const calicoInfoResponse = await fetch(
    "https://endoflife.date/api/calico.json",
  );
  const calicoInfo = (await calicoInfoResponse.json()) as z.infer<
    typeof GetCalicoResponse200Schema
  >;
  return c.json(calicoInfo, 200);
};
