import type { endoflifeTraefikRoute } from "./route";
import type { GetTraefikResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeTraefikHandler: RouteHandler<
  typeof endoflifeTraefikRoute
> = async (c) => {
  const traefikInfoResponse = await fetch(
    "https://endoflife.date/api/traefik.json",
  );
  const traefikInfo = (await traefikInfoResponse.json()) as z.infer<
    typeof GetTraefikResponse200Schema
  >;
  return c.json(traefikInfo, 200);
};
