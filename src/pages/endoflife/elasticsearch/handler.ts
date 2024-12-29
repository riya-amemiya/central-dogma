import type { endoflifeElasticsearchRoute } from "./route";
import type { GetElasticsearchResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeElasticsearchHandler: RouteHandler<
  typeof endoflifeElasticsearchRoute
> = async (c) => {
  const elasticsearchInfoResponse = await fetch(
    "https://endoflife.date/api/elasticsearch.json",
  );
  const elasticsearchInfo = (await elasticsearchInfoResponse.json()) as z.infer<
    typeof GetElasticsearchResponse200Schema
  >;
  return c.json(elasticsearchInfo, 200);
};
