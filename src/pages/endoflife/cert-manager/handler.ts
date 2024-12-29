import type { endoflifeCertManagerRoute } from "./route";
import type { GetCertManagerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCertManagerHandler: RouteHandler<
  typeof endoflifeCertManagerRoute
> = async (c) => {
  const certManagerInfoResponse = await fetch(
    "https://endoflife.date/api/cert-manager.json",
  );
  const certManagerInfo = (await certManagerInfoResponse.json()) as z.infer<
    typeof GetCertManagerResponse200Schema
  >;
  return c.json(certManagerInfo, 200);
};
