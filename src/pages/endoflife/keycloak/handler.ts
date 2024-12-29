import type { endoflifeKeycloakRoute } from "./route";
import type { GetKeycloakResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKeycloakHandler: RouteHandler<
  typeof endoflifeKeycloakRoute
> = async (c) => {
  const keycloakInfoResponse = await fetch(
    "https://endoflife.date/api/keycloak.json",
  );
  const keycloakInfo = (await keycloakInfoResponse.json()) as z.infer<
    typeof GetKeycloakResponse200Schema
  >;
  return c.json(keycloakInfo, 200);
};
