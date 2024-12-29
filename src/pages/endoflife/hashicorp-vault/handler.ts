import type { endoflifeHashicorpVaultRoute } from "./route";
import type { GetHashicorpVaultResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeHashicorpVaultHandler: RouteHandler<
  typeof endoflifeHashicorpVaultRoute
> = async (c) => {
  const hashicorpVaultInfoResponse = await fetch(
    "https://endoflife.date/api/hashicorp-vault.json",
  );
  const hashicorpVaultInfo =
    (await hashicorpVaultInfoResponse.json()) as z.infer<
      typeof GetHashicorpVaultResponse200Schema
    >;
  return c.json(hashicorpVaultInfo, 200);
};
