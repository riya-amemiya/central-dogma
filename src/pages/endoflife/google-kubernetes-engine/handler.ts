import type { endoflifeGoogleKubernetesEngineRoute } from "./route";
import type { GetGoogleKubernetesEngineResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGoogleKubernetesEngineHandler: RouteHandler<
  typeof endoflifeGoogleKubernetesEngineRoute
> = async (c) => {
  const googleKubernetesEngineInfoResponse = await fetch(
    "https://endoflife.date/api/google-kubernetes-engine.json",
  );
  const googleKubernetesEngineInfo =
    (await googleKubernetesEngineInfoResponse.json()) as z.infer<
      typeof GetGoogleKubernetesEngineResponse200Schema
    >;
  return c.json(googleKubernetesEngineInfo, 200);
};
