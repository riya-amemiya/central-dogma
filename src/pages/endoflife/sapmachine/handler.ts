import type { endoflifeSapmachineRoute } from "./route";
import type { GetSapmachineResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSapmachineHandler: RouteHandler<
  typeof endoflifeSapmachineRoute
> = async (c) => {
  const sapmachineInfoResponse = await fetch(
    "https://endoflife.date/api/sapmachine.json",
  );
  const sapmachineInfo = (await sapmachineInfoResponse.json()) as z.infer<
    typeof GetSapmachineResponse200Schema
  >;
  return c.json(sapmachineInfo, 200);
};
