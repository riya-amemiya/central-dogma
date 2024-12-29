import type { endoflifeNeo4jRoute as endoflifeNeo4indexRoute } from "./route";
import type { GetNeo4jResponse200Schema as GetNeo4indexResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const endoflifeNeo4jHandler: RouteHandler<
  typeof endoflifeNeo4indexRoute
> = async (c) => {
  const neo4indexInfoResponse = await fetch(
    "https://endoflife.date/api/neo4j.json",
  );
  const neo4indexInfo = (await neo4indexInfoResponse.json()) as z.infer<
    typeof GetNeo4indexResponse200Schema
  >;
  return c.json(neo4indexInfo, 200);
};
