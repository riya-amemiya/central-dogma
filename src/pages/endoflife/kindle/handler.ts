import type { endoflifeKindleRoute } from "./route";
import type { GetKindleResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKindleHandler: RouteHandler<
  typeof endoflifeKindleRoute
> = async (c) => {
  const kindleInfoResponse = await fetch(
    "https://endoflife.date/api/kindle.json",
  );
  const kindleInfo = (await kindleInfoResponse.json()) as z.infer<
    typeof GetKindleResponse200Schema
  >;
  return c.json(kindleInfo, 200);
};
