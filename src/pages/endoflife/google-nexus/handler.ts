import type { endoflifeGoogleNexusRoute } from "./route";
import type { GetGoogleNexusResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGoogleNexusHandler: RouteHandler<
  typeof endoflifeGoogleNexusRoute
> = async (c) => {
  const googleNexusInfoResponse = await fetch(
    "https://endoflife.date/api/google-nexus.json",
  );
  const googleNexusInfo = (await googleNexusInfoResponse.json()) as z.infer<
    typeof GetGoogleNexusResponse200Schema
  >;
  return c.json(googleNexusInfo, 200);
};
