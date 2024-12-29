import type { endoflifeJoomlaRoute } from "./route";
import type { GetJoomlaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeJoomlaHandler: RouteHandler<
  typeof endoflifeJoomlaRoute
> = async (c) => {
  const joomlaInfoResponse = await fetch(
    "https://endoflife.date/api/joomla.json",
  );
  const joomlaInfo = (await joomlaInfoResponse.json()) as z.infer<
    typeof GetJoomlaResponse200Schema
  >;
  return c.json(joomlaInfo, 200);
};
