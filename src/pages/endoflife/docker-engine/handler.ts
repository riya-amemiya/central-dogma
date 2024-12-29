import type { endoflifeDockerEngineRoute } from "./route";
import type { GetDockerEngineResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDockerEngineHandler: RouteHandler<
  typeof endoflifeDockerEngineRoute
> = async (c) => {
  const dockerEngineInfoResponse = await fetch(
    "https://endoflife.date/api/docker-engine.json",
  );
  const dockerEngineInfo = (await dockerEngineInfoResponse.json()) as z.infer<
    typeof GetDockerEngineResponse200Schema
  >;
  return c.json(dockerEngineInfo, 200);
};
