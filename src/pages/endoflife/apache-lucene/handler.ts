import type { endoflifeApacheLuceneRoute } from "./route";
import type { GetApacheLuceneResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheLuceneHandler: RouteHandler<
  typeof endoflifeApacheLuceneRoute
> = async (c) => {
  const apacheLuceneInfoResponse = await fetch(
    "https://endoflife.date/api/apache-lucene.json",
  );
  const apacheLuceneInfo = (await apacheLuceneInfoResponse.json()) as z.infer<
    typeof GetApacheLuceneResponse200Schema
  >;
  return c.json(apacheLuceneInfo, 200);
};
