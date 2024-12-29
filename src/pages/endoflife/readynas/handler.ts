import type { endoflifeReadynasRoute } from "./route";
import type { GetReadynasResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeReadynasHandler: RouteHandler<
  typeof endoflifeReadynasRoute
> = async (c) => {
  const readynasInfoResponse = await fetch(
    "https://endoflife.date/api/readynas.json",
  );
  const readynasInfo = (await readynasInfoResponse.json()) as z.infer<
    typeof GetReadynasResponse200Schema
  >;
  return c.json(readynasInfo, 200);
};
