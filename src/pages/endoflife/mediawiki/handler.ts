import type { endoflifeMediawikiRoute } from "./route";
import type { GetMediawikiResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMediawikiHandler: RouteHandler<
  typeof endoflifeMediawikiRoute
> = async (c) => {
  const mediawikiInfoResponse = await fetch(
    "https://endoflife.date/api/mediawiki.json",
  );
  const mediawikiInfo = (await mediawikiInfoResponse.json()) as z.infer<
    typeof GetMediawikiResponse200Schema
  >;
  return c.json(mediawikiInfo, 200);
};
