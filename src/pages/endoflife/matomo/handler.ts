import type { endoflifeMatomoRoute } from "./route";
import type { GetMatomoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMatomoHandler: RouteHandler<
  typeof endoflifeMatomoRoute
> = async (c) => {
  const matomoInfoResponse = await fetch(
    "https://endoflife.date/api/matomo.json",
  );
  const matomoInfo = (await matomoInfoResponse.json()) as z.infer<
    typeof GetMatomoResponse200Schema
  >;
  return c.json(matomoInfo, 200);
};
