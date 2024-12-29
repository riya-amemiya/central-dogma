import type { endoflifeOpensearchRoute } from "./route";
import type { GetOpensearchResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpensearchHandler: RouteHandler<
  typeof endoflifeOpensearchRoute
> = async (c) => {
  const opensearchInfoResponse = await fetch(
    "https://endoflife.date/api/opensearch.json",
  );
  const opensearchInfo = (await opensearchInfoResponse.json()) as z.infer<
    typeof GetOpensearchResponse200Schema
  >;
  return c.json(opensearchInfo, 200);
};
