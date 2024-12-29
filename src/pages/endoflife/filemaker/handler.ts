import type { endoflifeFilemakerRoute } from "./route";
import type { GetFilemakerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFilemakerHandler: RouteHandler<
  typeof endoflifeFilemakerRoute
> = async (c) => {
  const filemakerInfoResponse = await fetch(
    "https://endoflife.date/api/filemaker.json",
  );
  const filemakerInfo = (await filemakerInfoResponse.json()) as z.infer<
    typeof GetFilemakerResponse200Schema
  >;
  return c.json(filemakerInfo, 200);
};
