import type { endoflifeKyvernoRoute } from "./route";
import type { GetKyvernoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKyvernoHandler: RouteHandler<
  typeof endoflifeKyvernoRoute
> = async (c) => {
  const kyvernoInfoResponse = await fetch(
    "https://endoflife.date/api/kyverno.json",
  );
  const kyvernoInfo = (await kyvernoInfoResponse.json()) as z.infer<
    typeof GetKyvernoResponse200Schema
  >;
  return c.json(kyvernoInfo, 200);
};
