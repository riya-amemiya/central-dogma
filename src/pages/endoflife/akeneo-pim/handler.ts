import type { endoflifeAkeneoPimRoute } from "./route";
import type { GetAkeneoPimResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAkeneoPimHandler: RouteHandler<
  typeof endoflifeAkeneoPimRoute
> = async (c) => {
  const akeneoPimInfoResponse = await fetch(
    "https://endoflife.date/api/akeneo-pim.json",
  );
  const akeneoPimInfo = (await akeneoPimInfoResponse.json()) as z.infer<
    typeof GetAkeneoPimResponse200Schema
  >;
  return c.json(akeneoPimInfo, 200);
};
