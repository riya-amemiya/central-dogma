import type { endoflifeCitrixVadRoute } from "./route";
import type { GetCitrixVadResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCitrixVadHandler: RouteHandler<
  typeof endoflifeCitrixVadRoute
> = async (c) => {
  const citrixVadInfoResponse = await fetch(
    "https://endoflife.date/api/citrix-vad.json",
  );
  const citrixVadInfo = (await citrixVadInfoResponse.json()) as z.infer<
    typeof GetCitrixVadResponse200Schema
  >;
  return c.json(citrixVadInfo, 200);
};
