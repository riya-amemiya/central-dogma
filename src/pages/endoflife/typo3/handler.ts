import type { endoflifeTypo3Route } from "./route";
import type { GetTypo3Response200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeTypo3Handler: RouteHandler<
  typeof endoflifeTypo3Route
> = async (c) => {
  const typo3InfoResponse = await fetch(
    "https://endoflife.date/api/typo3.json",
  );
  const typo3Info = (await typo3InfoResponse.json()) as z.infer<
    typeof GetTypo3Response200Schema
  >;
  return c.json(typo3Info, 200);
};
