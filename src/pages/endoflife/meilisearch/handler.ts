import type { endoflifeMeilisearchRoute } from "./route";
import type { GetMeilisearchResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMeilisearchHandler: RouteHandler<
  typeof endoflifeMeilisearchRoute
> = async (c) => {
  const meilisearchInfoResponse = await fetch(
    "https://endoflife.date/api/meilisearch.json",
  );
  const meilisearchInfo = (await meilisearchInfoResponse.json()) as z.infer<
    typeof GetMeilisearchResponse200Schema
  >;
  return c.json(meilisearchInfo, 200);
};
