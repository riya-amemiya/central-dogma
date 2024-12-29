import type { endoflifeQuasarRoute } from "./route";
import type { GetQuasarResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeQuasarHandler: RouteHandler<
  typeof endoflifeQuasarRoute
> = async (c) => {
  const quasarInfoResponse = await fetch(
    "https://endoflife.date/api/quasar.json",
  );
  const quasarInfo = (await quasarInfoResponse.json()) as z.infer<
    typeof GetQuasarResponse200Schema
  >;
  return c.json(quasarInfo, 200);
};
