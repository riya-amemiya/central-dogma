import type { endoflifeNumpyRoute } from "./route";
import type { GetNumpyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNumpyHandler: RouteHandler<
  typeof endoflifeNumpyRoute
> = async (c) => {
  const numpyInfoResponse = await fetch(
    "https://endoflife.date/api/numpy.json",
  );
  const numpyInfo = (await numpyInfoResponse.json()) as z.infer<
    typeof GetNumpyResponse200Schema
  >;
  return c.json(numpyInfo, 200);
};
