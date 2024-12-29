import type { endoflifeContourRoute } from "./route";
import type { GetContourResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeContourHandler: RouteHandler<
  typeof endoflifeContourRoute
> = async (c) => {
  const contourInfoResponse = await fetch(
    "https://endoflife.date/api/contour.json",
  );
  const contourInfo = (await contourInfoResponse.json()) as z.infer<
    typeof GetContourResponse200Schema
  >;
  return c.json(contourInfo, 200);
};
