import type { endoflifeKdePlasmaRoute } from "./route";
import type { GetKdePlasmaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKdePlasmaHandler: RouteHandler<
  typeof endoflifeKdePlasmaRoute
> = async (c) => {
  const kdePlasmaInfoResponse = await fetch(
    "https://endoflife.date/api/kde-plasma.json",
  );
  const kdePlasmaInfo = (await kdePlasmaInfoResponse.json()) as z.infer<
    typeof GetKdePlasmaResponse200Schema
  >;
  return c.json(kdePlasmaInfo, 200);
};
