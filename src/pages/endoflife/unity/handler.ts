import type { endoflifeUnityRoute } from "./route";
import type { GetUnityResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeUnityHandler: RouteHandler<
  typeof endoflifeUnityRoute
> = async (c) => {
  const unityInfoResponse = await fetch(
    "https://endoflife.date/api/unity.json",
  );
  const unityInfo = (await unityInfoResponse.json()) as z.infer<
    typeof GetUnityResponse200Schema
  >;
  return c.json(unityInfo, 200);
};
