import type { endoflifeConfluenceRoute } from "./route";
import type { GetConfluenceResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeConfluenceHandler: RouteHandler<
  typeof endoflifeConfluenceRoute
> = async (c) => {
  const confluenceInfoResponse = await fetch(
    "https://endoflife.date/api/confluence.json",
  );
  const confluenceInfo = (await confluenceInfoResponse.json()) as z.infer<
    typeof GetConfluenceResponse200Schema
  >;
  return c.json(confluenceInfo, 200);
};
