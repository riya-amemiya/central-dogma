import type { endoflifeProtractorRoute } from "./route";
import type { GetProtractorResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeProtractorHandler: RouteHandler<
  typeof endoflifeProtractorRoute
> = async (c) => {
  const protractorInfoResponse = await fetch(
    "https://endoflife.date/api/protractor.json",
  );
  const protractorInfo = (await protractorInfoResponse.json()) as z.infer<
    typeof GetProtractorResponse200Schema
  >;
  return c.json(protractorInfo, 200);
};
