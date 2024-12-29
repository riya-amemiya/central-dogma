import type { endoflifeMssqlserverRoute } from "./route";
import type { GetMssqlserverResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMssqlserverHandler: RouteHandler<
  typeof endoflifeMssqlserverRoute
> = async (c) => {
  const mssqlserverInfoResponse = await fetch(
    "https://endoflife.date/api/mssqlserver.json",
  );
  const mssqlserverInfo = (await mssqlserverInfoResponse.json()) as z.infer<
    typeof GetMssqlserverResponse200Schema
  >;
  return c.json(mssqlserverInfo, 200);
};
