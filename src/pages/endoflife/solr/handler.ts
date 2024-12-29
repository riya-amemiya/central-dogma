import type { endoflifeSolrRoute } from "./route";
import type { GetSolrResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSolrHandler: RouteHandler<
  typeof endoflifeSolrRoute
> = async (c) => {
  const solrInfoResponse = await fetch("https://endoflife.date/api/solr.json");
  const solrInfo = (await solrInfoResponse.json()) as z.infer<
    typeof GetSolrResponse200Schema
  >;
  return c.json(solrInfo, 200);
};
