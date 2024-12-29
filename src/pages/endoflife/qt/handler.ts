import type { endoflifeQtRoute } from "./route";
import type { GetQtResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeQtHandler: RouteHandler<typeof endoflifeQtRoute> = async (
  c,
) => {
  const qtInfoResponse = await fetch("https://endoflife.date/api/qt.json");
  const qtInfo = (await qtInfoResponse.json()) as z.infer<
    typeof GetQtResponse200Schema
  >;
  return c.json(qtInfo, 200);
};
