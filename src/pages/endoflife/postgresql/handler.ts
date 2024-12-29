import type { endoflifePostgresqlRoute } from "./route";
import type { GetPostgresqlResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePostgresqlHandler: RouteHandler<
  typeof endoflifePostgresqlRoute
> = async (c) => {
  const postgresqlInfoResponse = await fetch(
    "https://endoflife.date/api/postgresql.json",
  );
  const postgresqlInfo = (await postgresqlInfoResponse.json()) as z.infer<
    typeof GetPostgresqlResponse200Schema
  >;
  return c.json(postgresqlInfo, 200);
};
