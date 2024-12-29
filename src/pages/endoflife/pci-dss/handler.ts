import type { endoflifePciDssRoute } from "./route";
import type { GetPciDssResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePciDssHandler: RouteHandler<
  typeof endoflifePciDssRoute
> = async (c) => {
  const pciDssInfoResponse = await fetch(
    "https://endoflife.date/api/pci-dss.json",
  );
  const pciDssInfo = (await pciDssInfoResponse.json()) as z.infer<
    typeof GetPciDssResponse200Schema
  >;
  return c.json(pciDssInfo, 200);
};
