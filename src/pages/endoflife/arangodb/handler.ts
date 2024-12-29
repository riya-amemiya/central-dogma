import type { endoflifeArangodbRoute } from "./route";
import type { GetArangodbResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeArangodbHandler: RouteHandler<
  typeof endoflifeArangodbRoute
> = async (c) => {
  const arangodbInfoResponse = await fetch(
    "https://endoflife.date/api/arangodb.json",
  );
  const arangodbInfo = (await arangodbInfoResponse.json()) as z.infer<
    typeof GetArangodbResponse200Schema
  >;
  return c.json(arangodbInfo, 200);
};
