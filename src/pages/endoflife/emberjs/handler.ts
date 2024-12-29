import type { endoflifeEmberjsRoute } from "./route";
import type { GetEmberjsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeEmberjsHandler: RouteHandler<
  typeof endoflifeEmberjsRoute
> = async (c) => {
  const emberjsInfoResponse = await fetch(
    "https://endoflife.date/api/emberjs.json",
  );
  const emberjsInfo = (await emberjsInfoResponse.json()) as z.infer<
    typeof GetEmberjsResponse200Schema
  >;
  return c.json(emberjsInfo, 200);
};
