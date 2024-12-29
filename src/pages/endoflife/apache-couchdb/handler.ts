import type { endoflifeApacheCouchdbRoute } from "./route";
import type { GetApacheCouchdbResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheCouchdbHandler: RouteHandler<
  typeof endoflifeApacheCouchdbRoute
> = async (c) => {
  const apacheCouchdbInfoResponse = await fetch(
    "https://endoflife.date/api/apache-couchdb.json",
  );
  const apacheCouchdbInfo = (await apacheCouchdbInfoResponse.json()) as z.infer<
    typeof GetApacheCouchdbResponse200Schema
  >;
  return c.json(apacheCouchdbInfo, 200);
};
