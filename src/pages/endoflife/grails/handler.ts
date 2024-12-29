import type { endoflifeGrailsRoute } from "./route";
import type { GetGrailsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGrailsHandler: RouteHandler<
  typeof endoflifeGrailsRoute
> = async (c) => {
  const grailsInfoResponse = await fetch(
    "https://endoflife.date/api/grails.json",
  );
  const grailsInfo = (await grailsInfoResponse.json()) as z.infer<
    typeof GetGrailsResponse200Schema
  >;
  return c.json(grailsInfo, 200);
};
