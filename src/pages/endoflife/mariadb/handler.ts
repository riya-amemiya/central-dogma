import type { endoflifeMariadbRoute } from "./route";
import type { GetMariadbResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMariadbHandler: RouteHandler<
  typeof endoflifeMariadbRoute
> = async (c) => {
  const mariadbInfoResponse = await fetch(
    "https://endoflife.date/api/mariadb.json",
  );
  const mariadbInfo = (await mariadbInfoResponse.json()) as z.infer<
    typeof GetMariadbResponse200Schema
  >;
  return c.json(mariadbInfo, 200);
};
