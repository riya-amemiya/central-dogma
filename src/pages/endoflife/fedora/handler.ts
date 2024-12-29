import type { endoflifeFedoraRoute } from "./route";
import type { GetFedoraResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFedoraHandler: RouteHandler<
  typeof endoflifeFedoraRoute
> = async (c) => {
  const fedoraInfoResponse = await fetch(
    "https://endoflife.date/api/fedora.json",
  );
  const fedoraInfo = (await fedoraInfoResponse.json()) as z.infer<
    typeof GetFedoraResponse200Schema
  >;
  return c.json(fedoraInfo, 200);
};
