import type { endoflifeOpensslRoute } from "./route";
import type { GetOpensslResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpensslHandler: RouteHandler<
  typeof endoflifeOpensslRoute
> = async (c) => {
  const opensslInfoResponse = await fetch(
    "https://endoflife.date/api/openssl.json",
  );
  const opensslInfo = (await opensslInfoResponse.json()) as z.infer<
    typeof GetOpensslResponse200Schema
  >;
  return c.json(opensslInfo, 200);
};
