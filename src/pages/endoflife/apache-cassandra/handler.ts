import type { endoflifeApacheCassandraRoute } from "./route";
import type { GetApacheCassandraResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheCassandraHandler: RouteHandler<
  typeof endoflifeApacheCassandraRoute
> = async (c) => {
  const apacheCassandraInfoResponse = await fetch(
    "https://endoflife.date/api/apache-cassandra.json",
  );
  const apacheCassandraInfo =
    (await apacheCassandraInfoResponse.json()) as z.infer<
      typeof GetApacheCassandraResponse200Schema
    >;
  return c.json(apacheCassandraInfo, 200);
};
