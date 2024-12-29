import type { endoflifeHashicorpPackerRoute } from "./route";
import type { GetHashicorpPackerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeHashicorpPackerHandler: RouteHandler<
  typeof endoflifeHashicorpPackerRoute
> = async (c) => {
  const hashicorpPackerInfoResponse = await fetch(
    "https://endoflife.date/api/hashicorp-packer.json",
  );
  const hashicorpPackerInfo =
    (await hashicorpPackerInfoResponse.json()) as z.infer<
      typeof GetHashicorpPackerResponse200Schema
    >;
  return c.json(hashicorpPackerInfo, 200);
};
