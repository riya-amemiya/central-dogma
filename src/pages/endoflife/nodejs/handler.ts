import type { endoflifeNodejsRoute } from "./route";
import type { GetNodejsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNodejsHandler: RouteHandler<
  typeof endoflifeNodejsRoute
> = async (c) => {
  const nodejsInfoResponse = await fetch(
    "https://endoflife.date/api/nodejs.json",
  );
  const nodejsInfo = (await nodejsInfoResponse.json()) as z.infer<
    typeof GetNodejsResponse200Schema
  >;
  return c.json(nodejsInfo, 200);
};
