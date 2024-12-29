import type { endoflifeGorillaRoute } from "./route";
import type { GetGorillaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGorillaHandler: RouteHandler<
  typeof endoflifeGorillaRoute
> = async (c) => {
  const gorillaInfoResponse = await fetch(
    "https://endoflife.date/api/gorilla.json",
  );
  const gorillaInfo = (await gorillaInfoResponse.json()) as z.infer<
    typeof GetGorillaResponse200Schema
  >;
  return c.json(gorillaInfo, 200);
};
